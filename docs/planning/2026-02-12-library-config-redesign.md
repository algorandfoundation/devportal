# Library Configuration Redesign

Consolidate the library configuration system so that each library's import config becomes the single source of truth for metadata, versions, sidebar, and content import logic. Eliminates the split between `libraries.ts` (UI config) and `imports/configs/*.ts` (import config).

**Scope:** Devportal codebase only. Changes to `astro-github-loader` are tracked in a separate document.

**Date:** 2026-02-12

---

## Problem

Today, adding or updating a library requires editing two disconnected files:

1. **`src/config/libraries.ts`** — slug, label, description, color, versions, languages, category, sidebar structure (hardcoded)
2. **`imports/configs/*.ts`** — GitHub repo, patterns, transforms, path mappings

These files contain overlapping knowledge about the same libraries but aren't linked. The version list in `libraries.ts` is manually maintained and often doesn't match the actual versions available in the repo. The sidebar structure is hardcoded rather than auto-generated from content.

Additionally, the global `auto-sidebar-config.yml` mixes sidebar metadata for unrelated libraries into a single file.

## Design

### Core principle

**One directory per library, one file to edit.** Each library gets a directory in `imports/configs/` containing everything the devportal needs to know about it. The import config file (`*.import.ts`) is the single file you edit when adding or changing a library. Sidebar configs are optional.

### File structure

```
imports/configs/
  algokit-utils/
    algokit-utils.import.ts       # Metadata + variant import configs (hand-authored)
    algokit-utils.sidebar.ts      # Sidebar overrides + auto-sidebar meta (hand-authored, optional)
  algokit-cli/
    algokit-cli.import.ts
  algorand-python/
    algorand-python.import.ts
    algorand-python.sidebar.ts
  ...
```

### Type definitions

These types live in `imports/types.ts`:

```typescript
/** UI-facing metadata for a library. Displayed in navigation, cards, and pickers. */
interface LibraryMetadata {
  slug: string;              // URL slug: /docs/<slug>/
  label: string;             // Display name: "AlgoKit Utils"
  description: string;       // Short description for cards/tooltips
  color: string;             // Accent color (hex) for library dot/badge
  logo?: string;             // Path to logo SVG (header/cards)
  icon?: string;             // Path to small icon SVG (compact views)
  category: 'sdk' | 'cli' | 'language' | 'tool' | 'api';
}

/** A version of a library variant to display in the version picker. */
interface VersionConfig {
  slug: string;              // URL segment: /docs/<lib>/<lang>/<slug>/
  label: string;             // Display name in version picker: "Latest", "v8.0.0"
}

/** Import configuration for a single language variant of a library. */
interface VariantImportConfig {
  language: string;          // "TypeScript", "Python", "Go", etc.
  versions: VersionConfig[]; // Versions to display (manually curated, e.g. major releases only)
  name: string;              // Display name for logging
  owner: string;             // GitHub org
  repo: string;              // Repository name
  ref?: string;              // Git ref (branch/tag, default: 'main') — typically a docs-dist branch
  enabled?: boolean;         // Whether to import (default: true)
  includes: IncludePattern[];
  transforms?: TransformFunction[];
  linkTransform?: LinkTransformConfig;
  clear?: boolean;
}

/** Top-level config exported by each {library}.import.ts file. */
interface LibraryImportConfig {
  metadata: LibraryMetadata;
  variants: VariantImportConfig[];
}
```

Key design decisions:

- **Languages are implicit.** Derived from `variants.map(v => v.language)`. No redundant `languages[]` array.
- **Versions are per-variant, manually curated.** TypeScript and Python variants of the same library have independent version lists. Versions are declared in the import config — not auto-discovered — giving editorial control over which versions appear (e.g., major releases only).
- **Single-language libraries use a one-element `variants` array.** No conditional branching — all libraries use the same shape.
- **No manifest files.** Versions live directly in the import config. No auto-generation, no separate JSON files, no fallback logic.
- **`assetsPath` and `assetsBaseUrl` are removed from VariantImportConfig.** Assets are co-located with content in an `assets/` folder within each version's content directory (loader-level change, separate doc).

### Sidebar config (optional, hand-authored)

`{library}.sidebar.ts` is only needed when auto-generation from folder structure isn't sufficient. Most libraries should not need this file.

```typescript
import type { LibrarySidebarConfig } from '../types';

export const sidebar: LibrarySidebarConfig = {
  // Starlight-compatible sidebar entries (groups, links, autogenerate)
  sidebar: [
    {
      label: 'Getting Started',
      autogenerate: { directory: 'getting-started' },
    },
    {
      label: 'Guides',
      autogenerate: { directory: 'guides' },
    },
    {
      label: 'API Reference',
      autogenerate: { directory: 'api' },
      collapsed: true,
    },
  ],

  // Auto-sidebar metadata, keyed by relative folder path within the library.
  // Replaces the global auto-sidebar-config.yml entries for this library.
  meta: {
    'api': { collapsed: true, cascade: ['collapsed'] },
    'api/front-end-guide': { label: 'Front-end Guide', collapsed: true },
  },
};
```

- `sidebar` follows the Starlight sidebar schema (groups, links, `autogenerate` entries).
- `meta` replaces the per-library entries from `auto-sidebar-config.yml`.
- When this file is absent, the sidebar is fully auto-generated from folder structure.
- TypeScript gives IDE autocomplete and type validation.

### Build-time bridge

`src/config/libraries.ts` becomes a thin barrel file. It imports configs from each library's directory and assembles the runtime registry. No data is hardcoded — it's all imported. Versions are read directly from each variant's `versions` array.

```typescript
// src/config/libraries.ts — thin barrel, not a data store

import type { LibraryImportConfig } from '../../imports/types';

// Static imports from each library's config
import { config as algokitUtils } from '../../imports/configs/algokit-utils/algokit-utils.import';
import { config as algokitCli } from '../../imports/configs/algokit-cli/algokit-cli.import';
// ... one line per library (added ~1-2x per year)

// Assemble the registry
function buildRegistry(configs: LibraryImportConfig[]): LibraryConfig[] {
  // Transform metadata + variant versions into LibraryConfig shape
}

export const libraries = buildRegistry([algokitUtils, algokitCli, /* ... */]);

// All existing helper functions remain unchanged
export { getLibraryBySlug, parseLibraryPath, buildLibraryUrl, getVersionBySlug, ... };
```

**Consumer components are unchanged.** `LibraryDocsSidebar.astro`, `Header.astro`, `Sidebar.astro`, and all other Astro components continue to `import { ... } from '../config/libraries'`. The public API (types, functions, exports) stays identical.

### Import flow

`imports/configs/index.ts` exports two things:

```typescript
// imports/configs/index.ts
import { config as algokitUtils } from './algokit-utils/algokit-utils.import';
import { config as algokitCli } from './algokit-cli/algokit-cli.import';
// ...

// Flat array for the loader (processes each variant independently)
export const REMOTE_CONTENT: VariantImportConfig[] = [
  ...algokitUtils.variants,
  ...algokitCli.variants,
  // ...
];

// Full configs for the library registry
export const LIBRARY_CONFIGS: LibraryImportConfig[] = [
  algokitUtils,
  algokitCli,
  // ...
];
```

`src/content/config.ts` continues to iterate `REMOTE_CONTENT` exactly as today. The loader processes each `VariantImportConfig` as an independent import pass (same as today's `utilsTypescriptConfig` / `utilsPythonConfig` pattern). The loader's `ImportOptions` type is updated directly to include the new fields (`language`, `versions`) — no backward-compatibility shim needed since the devportal is the only consumer.

## Migration map

### Data movement

| Data | Current location | New location |
|------|-----------------|--------------|
| slug, label, description, color, category | `libraries.ts` (hardcoded) | `{lib}.import.ts` → `metadata` |
| logo, icon | Not tracked | `{lib}.import.ts` → `metadata` |
| languages | `libraries.ts` → `languages[]` | Implicit from `variants[].language` |
| versions | `libraries.ts` → `versions[]` | `{lib}.import.ts` → `variants[].versions` (hand-authored) |
| sidebar structure | `libraries.ts` → `sidebar[]` | `{lib}.sidebar.ts` (optional) or autogenerate |
| auto-sidebar meta | `auto-sidebar-config.yml` (global) | `{lib}.sidebar.ts` → `meta` (per-library) |
| language icons/colors | `lang-icons.ts` | **Unchanged** — shared across all libraries |
| import configs | `imports/configs/*.ts` (flat) | `imports/configs/{lib}/{lib}.import.ts` |

### Files deleted

- **`auto-sidebar-config.yml`** — replaced by per-library `meta` in sidebar configs.

### Files gutted (data removed, logic kept)

- **`src/config/libraries.ts`** — becomes a thin barrel that imports metadata and assembles the registry. All helper functions (`parseLibraryPath`, `buildLibraryUrl`, `getLibraryBySlug`, etc.) stay here unchanged. The `LibraryConfig` runtime type stays here too.

### Files unchanged

- **`src/config/lang-icons.ts`** — language icons are global, not per-library.
- **All Astro components** — they import from `libraries.ts` which keeps the same public API.

## Example: complete library config

### Multi-language library (algokit-utils)

```typescript
// imports/configs/algokit-utils/algokit-utils.import.ts
import type { LibraryImportConfig } from '../../types';
import { convertH1ToTitle, conditionalTransform } from '../../transforms/common';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algokit-utils',
    label: 'AlgoKit Utils',
    description: 'A set of utility libraries for building on Algorand',
    color: '#3B82F6',
    logo: '/src/assets/images/algokit-utils-logo.svg',
    category: 'sdk',
  },
  variants: [
    {
      language: 'TypeScript',
      versions: [
        { slug: 'latest', label: 'Latest' },
        { slug: 'v8.0.0', label: 'v8.0.0' },
      ],
      name: 'AlgoKit Utils TS Docs',
      owner: 'algorandfoundation',
      repo: 'algokit-utils-ts',
      ref: 'docs-dist',
      enabled: true,
      includes: [
        {
          pattern: 'docs/{capabilities/**/*.md,README.md}',
          basePath: 'src/content/docs/docs/algokit-utils/typescript',
          pathMappings: {
            'docs/capabilities/': '',
            'docs/README.md': 'overview.md',
          },
          transforms: [convertH1ToTitle],
        },
      ],
      linkTransform: { /* ... */ },
      clear: true,
    },
    {
      language: 'Python',
      versions: [
        { slug: 'latest', label: 'Latest' },
        { slug: 'v3.1.0', label: 'v3.1.0' },
      ],
      name: 'AlgoKit Utils Python Docs',
      owner: 'algorandfoundation',
      repo: 'algokit-utils-py',
      ref: 'docs-dist',
      enabled: true,
      includes: [
        {
          pattern: 'docs/**/*.md',
          basePath: 'src/content/docs/docs/algokit-utils/python',
          transforms: [convertH1ToTitle],
        },
      ],
      clear: true,
    },
  ],
};
```

### Single-language library (algokit-cli)

```typescript
// imports/configs/algokit-cli/algokit-cli.import.ts
import type { LibraryImportConfig } from '../../types';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algokit-cli',
    label: 'AlgoKit CLI',
    description: 'The CLI tool for AlgoKit development',
    color: '#F59E0B',
    category: 'cli',
  },
  variants: [
    {
      language: 'Python',
      versions: [{ slug: 'latest', label: 'Latest' }],
      name: 'AlgoKit CLI Docs',
      owner: 'algorandfoundation',
      repo: 'algokit-cli',
      ref: 'docs-dist',
      enabled: true,
      includes: [/* ... */],
      clear: true,
    },
  ],
};
```

## Edge cases

### Version picker updates on language switch

Since versions are per-variant, switching languages in the UI updates the version picker to show the selected variant's versions. The `LibraryDocsSidebar.astro` component already receives the current variant context and renders the correct version list. The version picker URL builder (`buildLibraryUrl`) continues to work unchanged.

### Sidebar autogenerate as default

When no `{library}.sidebar.ts` exists, the sidebar is auto-generated from the content folder structure by Starlight's built-in autogenerate mechanism. The content import transforms (pathMappings, folder restructuring) ensure the file system structure produces a good auto-generated sidebar. Sidebar config files are for exceptions only.

## Out of scope

- **`astro-github-loader` changes** — `ImportOptions` type updates (`language`, `versions` fields), co-located assets. Tracked in a separate design document.
- **Non-imported (local-only) libraries** — not currently needed.
- **Convention-based defaults for `assetsPath`/`assetsBaseUrl`** — can be added later without breaking changes.
- **Auto-discovery of library configs** — static imports are sufficient given libraries are added ~1-2x per year.
