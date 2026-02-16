# Implementation Plan: Experimental Branch to Main

This is a **living document** that tracks all enhancements prototyped on the `experimental/ai-chat-ui-enhancement` branch and defines the PR sequence for merging them into `main`. Update this document whenever a new enhancement is added to the experimental branch.

**Branch:** `experimental/ai-chat-ui-enhancement`
**Base:** `main`
**Last updated:** 2026-02-12

---

## Table of Contents

1. [Process Requirements](#process-requirements)
2. [Enhancement Summary](#enhancement-summary)
3. [Dependency Graph](#dependency-graph)
4. [PR Sequence](#pr-sequence)
5. [Architecture Documents](#architecture-documents)
6. [Changelog](#changelog)
7. [Jira Ticket Map](#jira-ticket-map)

---

## Process Requirements

Every PR created from this branch **must** follow these steps before pushing or opening the PR. These are non-negotiable quality gates.

### 1. Code Review (Required)

Run the **PR review skill** (`/review-pr` or the `code-review:code-review` agent) against the staged changes before pushing. The review must cover:

- Code correctness and logic errors
- Adherence to project conventions (Starlight patterns, CSS variables, component structure)
- No regressions to existing functionality

```
# In Claude Code, before pushing:
/review-pr
```

### 2. Security Audit (Required for PRs touching scripts, auth, or SDK integration)

Run the **silent failure hunter** agent to check for:

- Inadequate error handling or swallowed errors
- Unsafe inline script patterns (XSS vectors, unescaped user data)
- SDK configuration leaks (API keys, integration IDs in client bundles)

Applicable to: AI Chat Panel PRs, View Transitions PRs (inline script changes), any PR adding `<script>` tags.

### 3. Design/Type Review (Required for PRs introducing new components or types)

Run the **type design analyzer** and **code reviewer** agents to verify:

- Component interfaces are well-defined
- TypeScript types express correct invariants
- Props and state are properly typed

Applicable to: Library Virtual Collections PRs, AI Chat Panel PRs.

### 4. Lint and Build Verification (Required for all PRs)

```bash
pnpm run lint    # Must pass with no new errors
pnpm run build   # Must complete successfully
```

### 5. Comment Review (Required for PRs with documentation changes)

Run the **comment analyzer** agent on any PR that adds or modifies architecture docs, inline code comments, or JSDoc annotations.

---

## Enhancement Summary

### E1: Library Virtual Collections

A navigation system that gives each library (AlgoKit Utils, AlgoKit CLI, etc.) its own isolated sidebar, language picker, version switcher, and URL structure — while remaining part of the main Starlight site.

**Architecture docs:**
- [library-virtual-collections.md](library-virtual-collections.md) — URL structure, component hierarchy, sidebar rendering
- [2026-02-12-library-config-redesign.md](2026-02-12-library-config-redesign.md) — Config architecture redesign (single source of truth per library)

**Key files — Configuration layer:**
| File | Purpose |
|------|---------|
| `imports/types.ts` | Shared types (`LibraryMetadata`, `VariantImportConfig`, `LibraryImportConfig`) |
| `imports/configs/{lib}/{lib}.import.ts` | Per-library metadata + variant import configs with versions (hand-authored) |
| `imports/configs/{lib}/{lib}.sidebar.ts` | Sidebar overrides + auto-sidebar meta (hand-authored, optional) |
| `imports/configs/index.ts` | Barrel — exports `REMOTE_CONTENT` and `LIBRARY_CONFIGS` arrays |
| `src/config/libraries.ts` | Build-time bridge — imports from config dirs, assembles runtime registry |
| `src/config/lang-icons.ts` | SVG icons and colors for language badges (unchanged) |

**Key files — UI components:**
| File | Purpose |
|------|---------|
| `src/components/LibraryDocsSidebar.astro` | Library-specific sidebar with language/version pickers |
| `src/components/LibraryPicker.astro` | Compact library dropdown for main sidebar |
| `src/components/LibrarySwitcher.astro` | Full library list in header hamburger menu |
| `src/components/Header.astro` | Custom header with library detection and hamburger |
| `src/components/Sidebar.astro` | Swaps between library sidebar and main sidebar |
| `src/components/SiteTitle.astro` | Per-library logos in header |
| `src/assets/images/*.svg` | Library and language SVG logos |
| `src/content/docs/docs/index.mdx` | Library index page with logo cards |

**What's production-ready:**
- Sidebar switching and URL parsing logic
- Language/version picker components (ClientRouter-compatible navigation)
- Custom web elements (`<library-selector>`, `<library-picker>`, `<library-header-toggle>`)
- SVG logo assets
- `lang-icons.ts` (shared language icon registry)

**What needs work before main:**
- Config system redesign → PR 1.1
- Mockup docs content → real GitHub-loaded content → PR 2.4 (+ loader co-located assets)
- Sidebar auto-generation as default → PR 2.5
- Mobile responsiveness of pickers → PR 2.1
- Accessibility audit of custom dropdown elements → PR 2.1

---

### E2: Kapa AI Chat Panel

A custom slide-out AI chat interface replacing the default Kapa widget, providing markdown rendering, syntax highlighting, deep thinking, source citations, feedback, copy buttons, and pin-to-persist functionality.

**Architecture doc:** [kapa-ai-chat-ui.md](kapa-ai-chat-ui.md)

**Key files:**
| File | Purpose |
|------|---------|
| `src/components/AIChatPanel.tsx` | Panel container (400px), backdrop, KapaProvider |
| `src/components/AIChatTrigger.tsx` | "Ask AI" button in header |
| `src/components/ChatInterface.tsx` | Message UI, markdown, syntax highlighting, input, copy buttons, pin button |
| `src/stores/chatStore.ts` | Nanostores atom for panel open/close state |
| `src/styles/catppuccin-mocha-prism.ts` | Syntax highlighting theme |
| `src/components/CustomThemeProvider.astro` | Mount point for chat panel |

**Dependencies added:**
```
@kapaai/react-sdk ^0.9.1
@nanostores/react ^1.0.0
nanostores ^1.1.0
react-markdown ^10.1.0
react-syntax-highlighter ^16.1.0
```

**What's production-ready:**
- Panel container and Kapa SDK integration
- Trigger button placement in all header variants
- State management pattern (nanostores)
- Markdown rendering and syntax highlighting
- Deep thinking toggle, source citations, feedback
- Copy buttons on code blocks and AI responses
- Pin button with active state styling
- Square rounded button design with green hover

**What needs refinement before main:**
- Inline CSS objects → consider extracting to CSS file → PR 3.1
- Some hardcoded colors → use CSS variables → PR 3.1
- Mobile responsiveness (full-width on small screens) → PR 3.1
- Accessibility (focus management, screen reader announcements) → PR 3.1
- Production Kapa integration ID → PR 5.2

---

### E3: View Transitions

Astro `<ClientRouter />` for smooth client-side navigation and `transition:persist` for keeping the AI chat panel alive across page changes.

**Architecture doc:** [view-transitions.md](view-transitions.md)

**Key files:**
| File | Purpose |
|------|---------|
| `src/components/CustomThemeProvider.astro` | ClientRouter injection, theme swap handler, persist wrapper |
| `src/styles/global.css` | 150ms cross-fade animation, reduced-motion support |
| `src/components/OpcodeFilters.astro` | Fixed: `DOMContentLoaded` → `astro:page-load` |
| `src/components/DropDown.astro` | Fixed: AbortController for listener accumulation |
| `src/components/LibraryDocsSidebar.astro` | Fixed: version/language picker uses ClientRouter-compatible navigation |
| `astro.config.mjs` | Removed stale `viewTransitions: true` |

**What's production-ready:**
- ClientRouter integration with dark theme flash prevention
- Chat panel persistence via `transition:persist`
- Inline script compatibility fixes
- View transition CSS with reduced-motion respect
- Library version/language picker navigation uses programmatic `<a>` click to go through ClientRouter (preserves chat panel state across version switches)

**What needs refinement before main:**
- Full regression test across all page types → PR 4.1
- Verify analytics/GTM tracking on client-side navigations (if added) → PR 4.1
- Test with all Starlight component overrides → PR 4.1

---

### E4: Faceted Search Mockup

A mockup of an enhanced search experience with language filtering and library scoping. This is a UI prototype only — not connected to a real search backend.

**Key files:**
| File | Purpose |
|------|---------|
| `src/components/Search.astro` | Search modal with faceted filter UI |

**Status:** Prototype/mockup. Needs real search backend integration before merging to main. May be deferred or reimplemented entirely.

---

## Dependency Graph

```
E1 (Library Virtual Collections) ─────────┐
                                           │
E2 (Kapa AI Chat Panel) ─────────────────── E3 (View Transitions)
                                           │    depends on E2 for
                                           │    transition:persist
                                           │
E4 (Search Mockup) ──── standalone ────────┘

External: astro-github-loader ← E1 (ImportOptions type updates, co-located assets)
          Not blocking — devportal config system works independently
```

**Critical dependency:** E3 (View Transitions) requires E2 (Chat Panel) to be merged first — `transition:persist` wraps the chat panel component. E3 also requires its own inline script fixes to be merged before the ClientRouter is enabled.

**Cross-enhancement dependency:** E3 includes a fix to E1's `LibraryDocsSidebar.astro` — the version/language picker's `window.location.href` navigation was replaced with a programmatic `<a>` click that goes through the ClientRouter. Without this fix, switching versions causes a full page reload and destroys chat panel state. This fix should be included in the E3 View Transitions PR (PR 4.1) or as a follow-up to E1's sidebar PR (PR 2.1).

**External dependency:** E1's co-located assets support depends on a minor update to `astro-github-loader` (separate repo). This is **not blocking** — the devportal config system works independently. Loader work can proceed in parallel with all devportal phases.

E1 (Library Virtual Collections) and E2 (Chat Panel) are independent of each other and can be merged in either order.

E4 (Search Mockup) is standalone but should be deferred until a real backend exists.

---

## PR Sequence

The following PRs should be created and merged in order. PRs within the same phase can be merged in parallel.

### Phase 1: Foundation — DVP-1182
_No user-visible changes._

#### PR 1.1: Add library configuration system — DVP-1187
**Files:** `imports/types.ts`, `imports/configs/*/`, `imports/configs/index.ts`, `src/config/libraries.ts`, `src/config/lang-icons.ts`
**Description:** Per-library config directories with metadata, variant import configs, and version declarations. Thin barrel file in `src/config/libraries.ts` imports from config dirs and assembles the runtime registry. All existing helper functions (`getLibraryBySlug`, `parseLibraryPath`, `buildLibraryUrl`, etc.) and public API remain unchanged — consumer components don't need to change. See [config redesign design doc](docs/planning/2026-02-12-library-config-redesign.md).
**Review:** Type design analyzer, code reviewer.

#### PR 1.2: Add library SVG assets — DVP-1188
**Files:** `src/assets/images/*.svg`
**Description:** All library and language logo SVGs. Pure static assets.
**Review:** Visual review only.

#### PR 1.3: Fix inline scripts for View Transition compatibility — DVP-1189
**Files:** `src/components/OpcodeFilters.astro`, `src/components/DropDown.astro`
**Description:** Replace `DOMContentLoaded` with `astro:page-load`, add null guards, prevent listener accumulation with AbortController. These changes are backward-compatible — `astro:page-load` fires on initial load identically to `DOMContentLoaded`, and the AbortController pattern is a no-op when the script only runs once.
**Review:** Code reviewer, silent failure hunter.

---

### Phase 2: Library Navigation — DVP-1183

#### PR 2.1: Add library sidebar and navigation components — DVP-1190
**Files:** `src/components/LibraryDocsSidebar.astro`, `src/components/LibraryPicker.astro`, `src/components/LibrarySwitcher.astro`, `src/components/Sidebar.astro`
**Description:** Library-specific sidebar with language/version pickers, compact library dropdown for main sidebar, and sidebar switching logic.
**Depends on:** PR 1.1 (library config).
**Review:** Code reviewer, type design analyzer.

#### PR 2.2: Update header for library pages — DVP-1191
**Files:** `src/components/Header.astro`, `src/components/SiteTitle.astro`
**Description:** Library detection in header, hamburger menu with library switcher, per-library logo display.
**Depends on:** PR 1.1, PR 1.2 (library config + logos).
**Review:** Code reviewer.

#### PR 2.3: Add library index page — DVP-1192
**Files:** `src/content/docs/docs/index.mdx`
**Description:** Library index page with logo cards linking to each library's documentation root.
**Depends on:** PR 1.1 (library metadata), PR 1.2 (logo SVGs).
**Review:** Comment analyzer, code reviewer.

#### PR 2.4: Update content config for new import structure — DVP-1193
**Files:** `src/content/config.ts`, `src/content/docs/docs/*/`
**Description:** Update content config to iterate `REMOTE_CONTENT` from the new barrel exports (`imports/configs/index.ts`). Set up initial content directory structure for library docs.
**Depends on:** PR 1.1.
**Review:** Code reviewer.

#### PR 2.5: Migrate sidebar metadata to per-library configs — DVP-1194
**Files:** `imports/configs/{lib}/{lib}.sidebar.ts`
**Deletes:** `auto-sidebar-config.yml`
**Description:** Migrate auto-sidebar metadata entries from the global `auto-sidebar-config.yml` to per-library `{lib}.sidebar.ts` files with TypeScript types and IDE autocomplete. Libraries that don't need sidebar overrides skip this file entirely (auto-generated from folder structure).
**Depends on:** PR 1.1.
**Review:** Code reviewer.

---

### Phase 3: AI Chat Panel — DVP-1184

#### PR 3.1: Add Kapa AI chat panel core — DVP-1195
**Files:** `src/components/AIChatPanel.tsx`, `src/components/ChatInterface.tsx`, `src/stores/chatStore.ts`, `src/styles/catppuccin-mocha-prism.ts`, `package.json` (new deps), `src/env.d.ts`
**Description:** Slide-out chat panel with KapaProvider, message rendering, markdown, syntax highlighting, deep thinking, feedback, source citations, copy buttons, pin button, and button styling.
**Review:** Code reviewer, silent failure hunter, type design analyzer.
**Security:** Verify `PUBLIC_KAPA_INTEGRATION_ID` is the only secret exposed to client.

#### PR 3.2: Add chat trigger button and mount point — DVP-1196
**Files:** `src/components/AIChatTrigger.tsx`, `src/components/CustomThemeProvider.astro`, `src/components/Header.astro` (trigger placement)
**Description:** "Ask AI" button in header, panel mounted via CustomThemeProvider. Includes dark theme default script.
**Depends on:** PR 3.1.
**Review:** Code reviewer.

---

### Phase 4: View Transitions — DVP-1185

#### PR 4.1: Enable View Transitions with chat panel persistence — DVP-1197
**Files:** `src/components/CustomThemeProvider.astro`, `src/styles/global.css`, `astro.config.mjs`
**Description:** Add `<ClientRouter />`, `transition:persist` wrapper for chat panel, `astro:before-swap` dark theme handler, 150ms cross-fade CSS, remove stale `viewTransitions` config.
**Depends on:** PR 1.3 (inline script fixes), PR 3.2 (chat panel mount point).
**Review:** Code reviewer, silent failure hunter.
**Testing:** Multi-browser (Chrome native transitions, Firefox fallback), reduced-motion, full page refresh, chat persistence across navigation.

---

### Phase 5: Deferred / Future — DVP-1186

#### PR 5.1: Faceted search (deferred) — DVP-1198
**Files:** `src/components/Search.astro`
**Description:** Enhanced search with language filtering and library scoping. Currently a UI mockup — requires real search backend before merging.
**Status:** Do not merge until backend is ready.

#### PR 5.2: CI workflow updates — DVP-1199
**Files:** `.github/workflows/acceptance.yml`, `.github/workflows/publish.yaml`
**Description:** Add `PUBLIC_KAPA_INTEGRATION_ID` to build workflows.
**Depends on:** PR 3.1 (chat panel).

---

### External dependency: `astro-github-loader` updates — DVP-1200

The library config redesign has minor loader dependencies tracked in a separate repo (`@larkiny/astro-github-loader`). These are **not blocking** for devportal PRs — the devportal config system works independently, and the loader currently functions without these changes.

**Loader changes needed:**
1. **`ImportOptions` type updates** — add optional `language` and `versions` fields (informational, used for logging/validation)
2. **Co-located assets** — when `assetsPath` is omitted, default to `{basePath}/assets/` (relative references instead of absolute)

**Not needed (eliminated during design refinement):**
- ~~Manifest generation~~ — versions are declared in import configs, not auto-generated
- ~~Multi-version import loop~~ — source repos publish all versions under one branch (docs-dist); the loader imports from a single ref as it does today
- ~~Backward-compatible type shim~~ — devportal is the only consumer; update `ImportOptions` directly

**Handoff document:** See [`starlight-github-loader-fork/docs/loader-redesign-prompt.md`](../../starlight-github-loader-fork/docs/loader-redesign-prompt.md) for the detailed prompt prepared for the loader session.

**Integration order:** Loader changes can be developed in parallel with devportal Phases 1–4. Co-located assets become useful once real content import is set up (Phase 2, PR 2.4).

---

## Architecture Documents

These documents provide detailed technical context for each enhancement. They live in `docs/planning/` and should be kept up to date as the implementation evolves.

| Document | Enhancement | Purpose |
|----------|-------------|---------|
| [library-virtual-collections.md](library-virtual-collections.md) | E1 | URL structure, component hierarchy, config schema, sidebar rendering |
| [2026-02-12-library-config-redesign.md](2026-02-12-library-config-redesign.md) | E1 | Config architecture redesign — per-library config dirs, types, versions, sidebar, build-time bridge |
| [kapa-ai-chat-ui.md](kapa-ai-chat-ui.md) | E2 | SDK integration, component details, state management, styling approach |
| [view-transitions.md](view-transitions.md) | E3 | ClientRouter architecture, script audit, browser compat, rollback plan |

---

## Changelog

Track updates to this plan as enhancements are added or refined.

| Date | Change |
|------|--------|
| 2026-02-11 | Initial plan created covering E1–E4 with 10 PRs across 5 phases |
| 2026-02-11 | Merged E6 (Chat Panel Polish) into E2 — polish is part of the chat panel, not a separate enhancement |
| 2026-02-11 | Added LibraryDocsSidebar.astro fix to E3 — version/language picker now uses ClientRouter-compatible navigation to preserve chat panel state |
| 2026-02-12 | Redesigned E1 config architecture — per-library config directories replace hardcoded `libraries.ts` as data store. Added config redesign design doc. Updated PR 1.1 to reflect new file structure. Added `astro-github-loader` external dependency section with loader handoff doc |
| 2026-02-12 | Eliminated manifest files — versions declared directly in import configs (manually curated). Removed manifest generation from loader changes. Removed backward-compatibility shim from loader type updates. Simplified loader scope to type updates + co-located assets only |
| 2026-02-12 | Split PR 2.3 into three PRs: PR 2.3 (library index page), PR 2.4 (content config update), PR 2.5 (sidebar metadata migration). Updated cross-references in E1 and external dependency sections |
| 2026-02-12 | Created Jira tickets in DVP project — 5 Epics (DVP-1182–1186), 13 Stories/Tasks (DVP-1187–1199), 1 standalone loader Task (DVP-1200). Added ticket keys to all PR and Phase headings |

---

## Jira Ticket Map

Quick reference for PR-to-Jira mapping. All tickets are in the [DVP project](https://algorandfoundation.atlassian.net/browse/DVP).

| PR | Jira | Type | Epic |
|----|------|------|------|
| Phase 1 | DVP-1182 | Epic | — |
| PR 1.1 | DVP-1187 | Task | DVP-1182 |
| PR 1.2 | DVP-1188 | Task | DVP-1182 |
| PR 1.3 | DVP-1189 | Task | DVP-1182 |
| Phase 2 | DVP-1183 | Epic | — |
| PR 2.1 | DVP-1190 | Story | DVP-1183 |
| PR 2.2 | DVP-1191 | Story | DVP-1183 |
| PR 2.3 | DVP-1192 | Story | DVP-1183 |
| PR 2.4 | DVP-1193 | Task | DVP-1183 |
| PR 2.5 | DVP-1194 | Task | DVP-1183 |
| Phase 3 | DVP-1184 | Epic | — |
| PR 3.1 | DVP-1195 | Story | DVP-1184 |
| PR 3.2 | DVP-1196 | Story | DVP-1184 |
| Phase 4 | DVP-1185 | Epic | — |
| PR 4.1 | DVP-1197 | Story | DVP-1185 |
| Phase 5 | DVP-1186 | Epic | — |
| PR 5.1 | DVP-1198 | Story | DVP-1186 |
| PR 5.2 | DVP-1199 | Task | DVP-1186 |
| Loader | DVP-1200 | Task | — |
