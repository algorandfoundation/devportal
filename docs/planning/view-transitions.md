# View Transitions Architecture

This document describes the Astro View Transitions implementation in the Algorand Developer Portal. View Transitions replace full-page reloads with client-side DOM swaps, enabling smooth page navigation and persistent UI elements like the AI chat panel.

## Overview

Astro's `<ClientRouter />` intercepts link clicks and converts the site from a traditional MPA (multi-page app) into an SPA-like experience. Instead of full page reloads, the router:

1. Fetches the new page in the background
2. Fires lifecycle events (`astro:before-swap`, `astro:after-swap`, `astro:page-load`)
3. Swaps the DOM, optionally animating the transition
4. Preserves designated elements across the swap via `transition:persist`

### Why ClientRouter, not native cross-document transitions?

There are two approaches to view transitions in the modern web:

| | `<ClientRouter />` | Native `@view-transition` CSS |
|---|---|---|
| Mechanism | Client-side SPA router | Browser-native MPA transitions |
| JavaScript | Yes (Astro's router script) | None |
| `transition:persist` | Yes | No |
| Browser support | All (with JS fallback) | Chromium 126+, Firefox 144+ |

We chose `<ClientRouter />` because **`transition:persist` is the only way to keep the AI chat panel's React state alive across navigations**. The Kapa SDK session, conversation history, and panel open/closed state are all held in the React component tree — there is no serialization API to save and restore them.

## Key Files

| File | Type | Purpose |
|------|------|---------|
| `src/components/CustomThemeProvider.astro` | Astro | Hosts `<ClientRouter />`, theme swap handler, and `transition:persist` wrapper |
| `src/styles/global.css` | CSS | View transition animations and reduced-motion support |
| `src/components/OpcodeFilters.astro` | Astro | Updated from `DOMContentLoaded` to `astro:page-load` |
| `src/components/DropDown.astro` | Astro | Fixed window listener accumulation with AbortController |
| `src/components/LibraryDocsSidebar.astro` | Astro | Fixed version/language picker to use ClientRouter-compatible navigation |
| `astro.config.mjs` | Config | Removed stale `viewTransitions: true` from `defineConfig` |

## Architecture

### Injection Point

`<ClientRouter />` is added in `CustomThemeProvider.astro`, which overrides Starlight's `ThemeProvider` component (configured in `astro.config.mjs` at the `components.ThemeProvider` key). This component renders inside `<head>` on every page, making it the natural single injection point for site-wide behavior.

```
astro.config.mjs
  components.ThemeProvider -> CustomThemeProvider.astro
    <ClientRouter />                  # Client-side router (renders <meta> + <style> in <head>)
    <script is:inline>                # Theme default + before-swap handler
    <Default ThemeProvider />         # Starlight's original ThemeProvider
    <div transition:persist>          # Persisted wrapper (moved to <body> by browser)
      <AIChatPanel client:only />     # React chat panel
```

### Chat Panel Persistence

The AI chat panel is wrapped in `<div transition:persist="ai-chat-panel">`. During navigation:

1. Astro's router identifies elements with matching `transition:persist` values in both the old and new pages
2. Instead of destroying the old element and creating a new one, it **moves the old DOM subtree into the new page**
3. The React fiber tree, component state, Kapa SDK session, and event listeners all survive intact

This means a user can:
- Open the chat, ask a question
- Click a source link that navigates to another page in the portal
- Continue the conversation without interruption

### Dark Theme Preservation

**Problem:** During the DOM swap, the new document initially lacks the `data-theme="dark"` attribute that Starlight's CSS variables depend on. This causes a brief flash of light-mode colors before Starlight's theme script runs.

**Solution:** An `astro:before-swap` event listener copies the theme attribute from the current document to the incoming document before the swap occurs:

```javascript
document.addEventListener('astro:before-swap', (e) => {
  const theme = document.documentElement.getAttribute('data-theme');
  if (theme) {
    e.newDocument.documentElement.setAttribute('data-theme', theme);
  }
});
```

This runs synchronously before the DOM swap, so the new page renders with the correct theme immediately.

### Transition Animations

Custom CSS overrides Astro's default 300ms animation with a faster 150ms cross-fade:

```css
::view-transition-old(root) {
  animation: 150ms ease-out both vtFadeOut;
}
::view-transition-new(root) {
  animation: 150ms ease-in both vtFadeIn;
}
```

The chat panel explicitly opts out of animation (it persists, so animating it would cause a visual flash):

```css
::view-transition-old(ai-chat-panel),
::view-transition-new(ai-chat-panel) {
  animation: none;
}
```

Reduced motion is respected:

```css
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none !important;
  }
}
```

## Inline Script Compatibility

`<ClientRouter />` changes how scripts execute. This required auditing every `is:inline` script in the codebase.

### How scripts behave with ClientRouter

| Script type | Behavior |
|---|---|
| Module scripts (`<script>`) | Execute once on initial load. Never re-run on client-side navigation. |
| Inline scripts (`<script is:inline>`) | Re-execute on every navigation (old script tags are removed, new ones run). |
| Custom elements (`connectedCallback`) | Fire when the element is inserted into the new DOM. Safe by default. |

### Audit Results

#### Safe — No changes needed

| Component | Script | Why it's safe |
|---|---|---|
| `CustomThemeProvider.astro` | localStorage theme default | Idempotent: only sets if value is null |
| `ThemeSelect.astro` | `StarlightThemeProvider.updatePickers()` | Designed to be called on each page to sync pickers |
| `Header.astro` | `library-header-toggle` custom element | Module script; `connectedCallback` handles re-mount |
| `Search.astro` | `faceted-search` custom element | Module script; `connectedCallback` handles re-mount |

#### Fixed — Required changes

**OpcodeFilters.astro** — `DOMContentLoaded` never re-fires

The opcode filter script used `DOMContentLoaded` to initialize filters. With ClientRouter, this event only fires on the initial full-page load — not on client-side navigations. Navigating to the opcodes page via a link would leave filters non-functional.

Changes:
1. Replaced `document.addEventListener('DOMContentLoaded', ...)` with `document.addEventListener('astro:page-load', ...)`
2. Added null guard for filter elements (script re-runs on every page, not just opcodes)
3. Added select option clearing to prevent duplicate `<option>` elements when navigating back

```javascript
// Before
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = $('#f-name');
  // ... no guard, no cleanup

// After
document.addEventListener('astro:page-load', () => {
  const nameInput = $('#f-name');
  if (!nameInput || !verSel || !grpSel || !resetBtn) return;  // Guard
  while (verSel.options.length > 1) verSel.remove(1);          // Cleanup
  while (grpSel.options.length > 1) grpSel.remove(1);
  // ...
```

**DropDown.astro** — Window listener accumulation

The dropdown script adds a `window.addEventListener('click', ...)` on each execution. Since `is:inline` scripts re-run on every navigation, this causes N click handlers after N navigations, degrading performance and causing redundant DOM operations.

Changes:
1. Store an `AbortController` on the button element
2. Abort the previous controller before adding a new listener
3. Changed `throw new Error(...)` to silent bail-out (elements may not exist on every page)

```javascript
// Before
if (!button || !menu) {
  throw new Error('Menu button or menu not found');
}
window.addEventListener('click', function (event) { ... });

// After
if (button && menu) {
  if (button._dropdownAC) button._dropdownAC.abort();
  const ac = new AbortController();
  button._dropdownAC = ac;
  window.addEventListener('click', function (event) { ... }, { signal: ac.signal });
}
```

**LibraryDocsSidebar.astro** — `window.location.href` bypasses ClientRouter

The library version/language picker's `select()` method used `window.location.href = href` to navigate when a user picks a different version or language. This causes a full page reload, bypassing the ClientRouter entirely and destroying any `transition:persist` state (including the AI chat panel's React tree and conversation history).

Changes:
1. Replaced `window.location.href = href` with a programmatic `<a>` element click
2. The ClientRouter intercepts `<a>` clicks as its primary navigation mechanism, so this triggers a proper client-side navigation

```typescript
// Before
select(opt: HTMLElement) {
  const href = opt.dataset.href;
  if (href) {
    window.location.href = href;  // Full page reload — destroys persist state
    return;
  }
  this.close();
}

// After
select(opt: HTMLElement) {
  const href = opt.dataset.href;
  if (href) {
    const a = document.createElement('a');
    a.href = href;
    a.hidden = true;
    document.body.append(a);
    a.click();       // ClientRouter intercepts this click
    a.remove();
    return;
  }
  this.close();
}
```

Note: `navigate()` from `astro:transitions/client` was tested first but failed silently in this context. The programmatic `<a>` click is more reliable because it uses the same code path as regular link clicks, which the ClientRouter is designed to intercept.

## Config Changes

### Removed: `viewTransitions: true` from `astro.config.mjs`

This key existed at the `defineConfig()` level (line 28), which is **not a valid Astro 5 option**. The correct mechanism is the `<ClientRouter />` component. The stale key was silently ignored by Astro but was misleading.

## Browser Compatibility

| Browser | View Transition CSS | ClientRouter fallback |
|---|---|---|
| Chrome 111+ | Native `::view-transition-*` | N/A |
| Firefox (current) | Not supported | JS-based animation |
| Safari 18+ | Native | N/A |
| Older browsers | Not supported | JS-based animation or instant swap |

When `::view-transition-*` CSS is not supported, Astro's ClientRouter uses JavaScript-based fallback animations (`astroFadeIn`/`astroFadeOut` keyframes). The `<ClientRouter fallback="animate">` default (which we use) provides this automatically.

## Known Limitations

1. **First visit must be a full page load.** External links into the site trigger a normal browser navigation. Starlight's JS (sidebar, search, theme) initializes correctly on full loads. View transitions only apply to subsequent in-site navigations.

2. **`transition:persist` cannot prevent CSS animation restarts.** If a persisted element has CSS animations, they restart on navigation. The chat panel uses `transform` transitions (not animations) so this is not an issue currently.

3. **Analytics tracking.** GTM/analytics scripts in `<head>` may not fire on client-side navigations. If analytics is added later, a `dataLayer.push` on `astro:page-load` will be needed to track page views.

4. **`is:inline` script lifecycle.** Any new `is:inline` scripts added to the site must follow the patterns documented above (use `astro:page-load` instead of `DOMContentLoaded`, guard against missing elements, prevent listener accumulation).

## Suggested PR Breakdown for Main Branch

The experimental branch bundles all changes together. For merging into `main`, the following PR sequence isolates concerns and makes each change independently reviewable and revertable:

### PR 1: Fix inline scripts for View Transition compatibility (no user-visible change)

**Files:** `OpcodeFilters.astro`, `DropDown.astro`

These fixes are safe to merge independently — `astro:page-load` fires on initial load just like `DOMContentLoaded`, and the AbortController pattern is a no-op when the script only runs once. No regressions without ClientRouter present.

**Testing:** Verify opcode filters and dropdown menus work normally after merge.

### PR 2: Add View Transitions with ClientRouter

**Files:** `CustomThemeProvider.astro`, `global.css`, `astro.config.mjs`

This is the core feature PR. Depends on PR 1 being merged first (otherwise the inline scripts will break on client-side navigation).

Contains:
- `<ClientRouter />` injection
- `astro:before-swap` dark theme handler
- `transition:persist` wrapper for chat panel
- View transition CSS animations
- Removal of stale `viewTransitions: true` config

**Testing:**
- Navigate between doc pages — smooth cross-fade, no flash
- Open AI chat, navigate, verify conversation persists
- Test with `prefers-reduced-motion` enabled — no animations
- Full page refresh (Ctrl+R) — everything initializes correctly
- Test on Firefox (fallback animation) and Chrome (native)

### Optional PR 3: Audit and harden remaining inline scripts

A follow-up PR to proactively audit any other inline scripts or event patterns that could be affected. This is preventive, not fixing a current bug.

## Rollback Plan

To revert View Transitions:

1. Remove `<ClientRouter />` import and component from `CustomThemeProvider.astro`
2. Remove the `astro:before-swap` event listener
3. Remove the `transition:persist` wrapper (keep `<AIChatPanel>` directly)
4. Remove the View Transition CSS section from `global.css`

The inline script fixes (PR 1) can remain — they are backward-compatible and improve robustness regardless of whether View Transitions are active.

## Future Considerations

1. **Native cross-document transitions.** As browser support grows for `@view-transition` CSS (currently ~85% of users), we could eventually drop `<ClientRouter />` in favor of zero-JS native transitions. However, this would lose `transition:persist` — we'd need an alternative persistence mechanism for the chat panel (e.g., sessionStorage serialization, if the Kapa SDK supports it).

2. **Sidebar scroll preservation.** The `astro-vtbot` / `@vtbag` Starlight plugins provide sidebar scroll position preservation out of the box. Currently, sidebar scroll resets on navigation. This could be added as a small `astro:before-swap` handler that saves and restores `scrollTop`.

3. **Page-specific transition animations.** Different transition styles (e.g., slide for forward navigation, reverse-slide for back) could be implemented using `transition:animate` directives or the `astro:before-preparation` event to detect navigation direction.

4. **Prefetching.** `<ClientRouter />` supports `data-astro-prefetch` attributes on links to prefetch pages on hover or viewport entry, further improving perceived performance.
