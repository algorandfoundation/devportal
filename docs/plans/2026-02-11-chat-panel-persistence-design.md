# Chat Panel Persistence Design

This document describes the implementation of persistent chat panel state across page navigation in the Algorand Developer Portal.

## Problem

Currently, when users navigate to a different page (including clicking source links in AI chat responses), the chat panel's React component unmounts and remounts, losing:

- The current conversation with the AI
- Scroll position in the chat
- Any in-progress AI responses

This creates a frustrating experience, especially when the AI provides links to documentation pages that the user wants to explore while maintaining their chat context.

## Solution

Use Astro View Transitions with `transition:persist` to keep the chat panel React component mounted across page navigations.

## Architecture

```
Page A                          Page B
┌─────────────────────┐        ┌─────────────────────┐
│  ┌───────────────┐  │        │  ┌───────────────┐  │
│  │ Main Content  │  │ ────── │  │ Main Content  │  │
│  └───────────────┘  │ fade   │  └───────────────┘  │
│  ┌───────────────┐  │        │  ┌───────────────┐  │
│  │  Chat Panel   │ ═══════════  │  Chat Panel   │  │ ← persisted
│  │  (React)      │  │ stays  │  │  (same inst.) │  │
│  └───────────────┘  │ alive  │  └───────────────┘  │
└─────────────────────┘        └─────────────────────┘
```

- Main page content cross-fades between pages (~150ms animation)
- Chat panel wrapper is marked with `transition:persist` - same React instance survives
- Kapa SDK context and conversation state are naturally preserved
- No serialization/deserialization of state needed

## Persistence Level

**Within-session persistence**: The conversation stays alive as long as the browser tab is open. It survives page navigation but not tab close/refresh. This matches user expectations - chat context is maintained while browsing, but a fresh session starts when returning later.

## Files to Modify

| File | Change |
|------|--------|
| `src/components/CustomThemeProvider.astro` | Add `<ViewTransitions />` and wrap chat panel with `transition:persist` |
| `src/styles/global.css` | Add View Transitions timing/easing CSS |
| `astro.config.mjs` | Remove deprecated `viewTransitions: true` option |

## Implementation Details

### CustomThemeProvider.astro

```astro
---
import Default from '@astrojs/starlight/components/ThemeProvider.astro';
import AIChatPanel from './AIChatPanel.tsx';
import { ViewTransitions } from 'astro:transitions';
---

<Default {...Astro.props}><slot /></Default>

<!-- View Transitions enabled site-wide -->
<ViewTransitions />

<!-- Chat panel persists across navigation -->
<div transition:persist="ai-chat-panel">
  <AIChatPanel client:only='react' />
</div>
```

### global.css additions

```css
/* ——— View Transitions ——— */

/* Subtle cross-fade for page content */
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 150ms;
  animation-timing-function: ease-out;
}

/* Chat panel doesn't animate during transitions (it persists) */
::view-transition-old(ai-chat-panel),
::view-transition-new(ai-chat-panel) {
  animation: none;
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
  }
}
```

### astro.config.mjs cleanup

Remove the deprecated option:

```diff
export default defineConfig({
  site: 'https://dev.algorand.co',
  output: 'static',
- viewTransitions: true,
  integrations: [
```

## Edge Cases & Considerations

### `chat-pinned` class on `<html>`

When View Transitions swap pages, the `<html>` element is replaced. The React component's `useEffect` that manages the `chat-pinned` class will re-run after navigation, so the pinned layout state should self-heal. This needs verification during testing.

### Backdrop behavior during transitions

The backdrop overlay (when chat is open in floating mode) is part of the persisted component, so it should remain visible during transitions. No special handling needed.

### Browser compatibility

View Transitions are supported in:
- Chrome 111+ (March 2023)
- Edge 111+
- Opera 97+
- Safari 18+ (September 2024)
- Firefox: Behind flag, not yet default

For unsupported browsers, navigation falls back to standard full-page loads. The chat state will be lost in these cases, which is acceptable degradation.

## Testing Plan

1. Open chat panel and start a conversation
2. Click a sidebar navigation link → verify conversation persists
3. Click a source link in an AI response → verify conversation persists
4. Test with chat pinned → verify pinned layout persists correctly
5. Test the page transition animation looks smooth
6. Test on mobile viewport
7. Test with `prefers-reduced-motion` enabled

## Rollback Plan

If View Transitions cause issues:
1. Remove `<ViewTransitions />` from CustomThemeProvider.astro
2. Remove the `transition:persist` wrapper
3. Remove View Transitions CSS from global.css
4. Restore `viewTransitions: true` in astro.config.mjs (if needed for other reasons)

The chat panel will revert to its previous behavior (state lost on navigation).
