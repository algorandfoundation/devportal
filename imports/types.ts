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

/**
 * Metadata for a single sidebar folder.
 * Mirrors starlight-auto-sidebar's _meta.yml schema.
 * `label` can be a static string or a transform function resolved at generation time.
 */
export interface SidebarFolderMeta {
  label?: string | ((folderName: string) => string);
  order?: number;
  collapsed?: boolean;
  cascade?: ('collapsed' | 'sort')[];
  badge?:
    | string
    | {
        text: string;
        variant?: 'note' | 'danger' | 'success' | 'caution' | 'tip' | 'default';
        class?: string;
      };
  hidden?: boolean;
  depth?: number;
  sort?: 'slug' | 'reverse-slug';
}

/** A glob-based sidebar metadata rule matched against folder paths relative to src/content/docs/. */
export interface SidebarMetadataItem {
  /** Glob pattern matched via picomatch, e.g. `docs/algokit-utils/&#42;/latest/api`. */
  pattern: string;
  /** Metadata to write to _meta.yml for matching folders. */
  meta: SidebarFolderMeta;
}

/** Sidebar metadata exported by a library's sidebar.config.ts. */
export interface SidebarMetadata {
  sections: SidebarMetadataItem[];
}

/**
 * A single entry from a library's sidebar.json artifact.
 * Matches Starlight's SidebarItem shape (subset used by library sidebars).
 */
export type SidebarJsonEntry =
  | { label: string; link: string }
  | { slug: string }
  | { label: string; autogenerate: { directory: string; collapsed?: boolean }; collapsed?: boolean }
  | { label: string; items: SidebarJsonEntry[]; collapsed?: boolean };