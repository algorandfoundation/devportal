# Library Virtual Collections Architecture

This document describes the implementation of library "virtual collections" in the Algorand Developer Portal. These are isolated documentation sub-sites for individual libraries (AlgoKit Utils, AlgoKit CLI, etc.) that have their own sidebars, language/version pickers, and navigation—while still being part of the main Starlight site.

## Overview

The virtual collection system allows each library to have:

- **Isolated sidebar navigation** - Each library has its own sidebar tree, separate from the main site navigation
- **Language variants** - Multi-language libraries (e.g., AlgoKit Utils with TypeScript and Python) show a language picker
- **Version switching** - All libraries support multiple versions with a version picker
- **Consistent URL structure** - Predictable URLs that encode library, language, version, and page path

## URL Structure

### Multi-language libraries

```
/docs/<library>/<language>/<version>/<page>/
```

Example: `/docs/algokit-utils/typescript/latest/guides/accounts/`

### Single-language libraries

```
/docs/<library>/<version>/<page>/
```

Example: `/docs/algokit-cli/latest/guides/getting-started/`

### Version slugs

Starlight strips dots from folder names in URLs, so version folders use dashes:

- Folder: `v8-0-0/` → URL: `/v8-0-0/`
- Display label: "v8.0.0"

This is handled by the `VersionConfig` interface which separates the URL slug from the display label.

## Key Files

### Configuration

| File | Purpose |
|------|---------|
| `src/config/libraries.ts` | Central registry of all libraries, their metadata, versions, languages, and sidebar trees |
| `src/config/lang-icons.ts` | SVG icons and colors for language badges (TypeScript, Python, Go, etc.) |

### Starlight Component Overrides

| File | Overrides | Purpose |
|------|-----------|---------|
| `src/components/Header.astro` | `@astrojs/starlight/components/Header.astro` | Custom header with hamburger menu for library pages |
| `src/components/Sidebar.astro` | `@astrojs/starlight/components/Sidebar.astro` | Swaps sidebar based on context (library vs main site) |

### Custom Components

| File | Purpose |
|------|---------|
| `src/components/LibraryDocsSidebar.astro` | Library-specific sidebar with language/version selectors |
| `src/components/LibrarySwitcher.astro` | Full library list (used in header hamburger menu) |
| `src/components/LibraryPicker.astro` | Compact dropdown for library selection (used in main sidebar) |

## Component Architecture

### Detection Flow

```
User visits /docs/<library>/... page
       │
       ▼
┌─────────────────────────────────────────────────────┐
│  Header.astro                                       │
│  └─ getLibraryFromPath() detects library context    │
│     └─ Shows hamburger menu with LibrarySwitcher    │
└─────────────────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────┐
│  Sidebar.astro                                      │
│  └─ getLibraryFromPath() detects library context    │
│     └─ Renders LibraryDocsSidebar instead of        │
│        normal Starlight sidebar                     │
└─────────────────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────┐
│  LibraryDocsSidebar.astro                           │
│  └─ parseLibraryPath() extracts lang/version        │
│     └─ Shows language picker (if multi-language)    │
│     └─ Shows version picker                         │
│     └─ Renders library-specific sidebar tree        │
└─────────────────────────────────────────────────────┘
```

### Sidebar Rendering

The library sidebar entries are defined in `libraries.ts` using a simple format:

```typescript
sidebar: [
  {
    type: 'group',
    label: 'Getting Started',
    collapsed: false,
    entries: [
      { type: 'link', label: 'Overview', href: '/docs/algokit-utils/' },
    ],
  },
  {
    type: 'group',
    label: 'Guides',
    collapsed: false,
    entries: [
      { type: 'link', label: 'Accounts', href: '/docs/algokit-utils/guides/accounts/' },
    ],
  },
]
```

The `toStarlightSidebar()` function transforms these entries:

1. Adds `isCurrent` flag based on current URL
2. Transforms hrefs to include language/version prefix (e.g., `/docs/algokit-utils/guides/accounts/` → `/docs/algokit-utils/typescript/latest/guides/accounts/`)

This allows sidebar entries to be defined without language/version in the config, making them reusable across all variants.

## Starlight Overrides Explained

### Header.astro

**What it does:**

- Detects if viewing a library page using `getLibraryFromPath()`
- On library pages: Shows a hamburger menu button that opens a panel with `LibrarySwitcher`
- On main site: Shows standard header with search, theme toggle, etc.

**Why we override it:**

Starlight's default header doesn't support the hamburger menu pattern needed for library navigation. We need a way to access the library switcher without it taking up sidebar space.

**Custom element:** `<library-header-toggle>` handles the hamburger menu open/close logic with keyboard support (Escape to close).

### Sidebar.astro

**What it does:**

- Detects if viewing a library page using `getLibraryFromPath()`
- On library pages: Renders `LibraryDocsSidebar` with library-specific navigation
- On main site: Renders `LibraryPicker` dropdown at top, followed by normal Starlight sidebar

**Why we override it:**

Starlight's sidebar is designed for a single navigation tree. We need to completely replace it with a different tree when viewing library docs, and add the library picker dropdown on the main site.

## Library Configuration Schema

```typescript
interface VersionConfig {
  /** URL slug (must match folder name, e.g. 'v8-0-0') */
  slug: string;
  /** Display label shown in picker (e.g. 'v8.0.0') */
  label: string;
}

interface LibraryConfig {
  /** URL slug used in /docs/<slug>/ */
  slug: string;
  /** Display name shown in switcher */
  label: string;
  /** Short description */
  description: string;
  /** Accent color for the dot in library list */
  color: string;
  /** Available versions (first is default) */
  versions: VersionConfig[];
  /** Language variants (empty = language-agnostic) */
  languages: string[];
  /** Category for grouping: 'sdk' | 'cli' | 'language' | 'tool' | 'api' */
  category: string;
  /** Sidebar navigation tree */
  sidebar: LibrarySidebarEntry[];
}
```

## URL Parsing & Building

### parseLibraryPath(path)

Extracts components from a library URL:

```typescript
parseLibraryPath('/docs/algokit-utils/typescript/latest/guides/accounts/')
// Returns:
{
  library: LibraryConfig,  // Full library config object
  language: 'TypeScript',  // Normalized language name
  version: 'latest',       // Version slug
  pagePath: 'guides/accounts'  // Path after language/version
}
```

Handles both multi-language and single-language URL schemes automatically based on `library.languages.length`.

### buildLibraryUrl(library, language, version, pagePath)

Constructs a URL for navigation:

```typescript
buildLibraryUrl(algokitUtils, 'Python', 'v8-0-0', 'guides/accounts')
// Returns: '/docs/algokit-utils/python/v8-0-0/guides/accounts/'
```

## Custom Web Components

### `<library-selector>`

Used in `LibraryDocsSidebar.astro` for language and version dropdowns.

```html
<library-selector class="selector" data-type="language">
  <button class="selector-btn">...</button>
  <ul class="selector-dropdown">...</ul>
</library-selector>
```

Features:
- Mutual exclusion (only one selector open at a time)
- Click-outside to close
- Escape key to close
- Navigates via `window.location.href` on selection

### `<library-picker>`

Used in `Sidebar.astro` for the compact library dropdown on main site pages.

### `<library-header-toggle>`

Used in `Header.astro` for the hamburger menu on library pages.

## Content Structure

Library content follows this folder structure:

### Multi-language library (AlgoKit Utils)

```
src/content/docs/docs/algokit-utils/
├── typescript/
│   ├── latest/
│   │   ├── index.md
│   │   ├── guides/
│   │   │   └── accounts.md
│   │   └── api/
│   │       └── algorand-client.md
│   └── v8-0-0/
│       ├── index.md
│       ├── guides/
│       └── api/
└── python/
    ├── latest/
    │   ├── index.md
    │   ├── guides/
    │   └── api/
    └── v8-0-0/
        └── ...
```

### Single-language library (AlgoKit CLI)

```
src/content/docs/docs/algokit-cli/
├── latest/
│   ├── index.md
│   ├── guides/
│   │   └── getting-started.md
│   └── api/
│       └── commands.md
└── v3-0-0/
    └── ...
```

## What's Reusable vs Prototype-Only

### Reusable (keep for production)

- **`src/config/libraries.ts`** - Core configuration system and URL helpers
- **`src/config/lang-icons.ts`** - Language icons
- **`src/components/LibraryDocsSidebar.astro`** - Language/version picker UI
- **`src/components/Sidebar.astro`** - Sidebar switching logic
- **URL parsing/building functions** - Essential for navigation

### Prototype/Throwaway

- **Mockup docs content** - Will be replaced with real docs from GitHub loaders
- **Hardcoded sidebar entries** - Will be generated from content structure
- **Some category groupings** - May change based on final IA decisions

## Future Considerations

1. **Auto-generated sidebars** - Currently sidebar entries are hardcoded in `libraries.ts`. Could be generated from the file structure using Astro's content collections.

2. **Version detection** - Could automatically detect available versions from folder structure instead of hardcoding in config.

3. **Cross-version navigation** - When switching versions, ideally preserve the current page if it exists in the target version, or fall back to the index.

4. **Search scoping** - Could scope search results to current library/version context.
