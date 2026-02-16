/**
 * Shared types for the library configuration system.
 *
 * These types define the per-library config structure used by both the
 * content import pipeline and the UI (navigation, pickers, cards).
 */

import type {
  ImportOptions,
  VersionConfig,
} from '@larkiny/astro-github-loader';

// Re-export loader types that config files need
export type { ImportOptions, VersionConfig };

/** Known library slugs — used for compile-time validation of logo maps, etc. */
export type LibrarySlug =
  | 'algokit-utils'
  | 'algokit-cli'
  | 'algorand-python'
  | 'algorand-typescript'
  | 'algokit-subscriber'
  | 'nodekit';

/** UI-facing metadata for a library. Displayed in navigation, cards, and pickers. */
export interface LibraryMetadata {
  /** URL slug: /docs/<slug>/ */
  slug: string;
  /** Display name: "AlgoKit Utils" */
  label: string;
  /** Short description for cards/tooltips */
  description: string;
  /** Accent color (hex) for library dot/badge */
  color: string;
  /** Raw SVG markup for inline rendering (import with ?raw) */
  logo?: string;
  /** Raw SVG markup for compact icon (import with ?raw) */
  icon?: string;
  /** Category grouping */
  category: 'sdk' | 'cli' | 'language' | 'tool' | 'api';
}

/**
 * Import configuration for a single language variant of a library.
 *
 * Extends the loader's ImportOptions with required language and version fields.
 * Since ImportOptions already has these as optional, the extension narrows them
 * to required — valid TypeScript, and still assignable to ImportOptions.
 */
export interface VariantImportConfig extends ImportOptions {
  /** Language for this variant: "TypeScript", "Python", "Go", etc. */
  language: string;
  /** Versions to display in the version picker (manually curated) */
  versions: VersionConfig[];
}

/** Top-level config exported by each library's import.config.ts file. */
export interface LibraryImportConfig {
  metadata: LibraryMetadata;
  variants: VariantImportConfig[];
}

/** Optional sidebar config for a library ({library}.sidebar.ts). */
export interface LibrarySidebarConfig {
  /** Starlight-compatible sidebar entries (groups, links, autogenerate) */
  sidebar?: unknown[];
  /** Auto-sidebar metadata, keyed by relative folder path within the library */
  meta?: Record<string, Record<string, unknown>>;
}