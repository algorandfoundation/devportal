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
  /** Category grouping */
  category: 'sdk' | 'cli' | 'language' | 'tool' | 'api';
  /** Default landing page path (e.g. "commands") when no index page exists */
  defaultPage?: string;
}

/**
 * Raw-file strategy (existing @larkiny/astro-github-loader path).
 *
 * Extends the loader's ImportOptions with required language and version fields.
 * `source` is optional and defaults to 'github-loader' — existing configs
 * don't need to specify it.
 */
export interface GithubLoaderConfig extends ImportOptions {
  source?: 'github-loader';
  /** Language for this variant: "TypeScript", "Python", "Go", etc. */
  language: string;
  /** Versions to display in the version picker (manually curated) */
  versions: VersionConfig[];
}

/** A post-import transform applied to files matching a glob pattern. */
export interface PostImportTransform {
  /** Glob pattern matched against file paths relative to the content root. */
  pattern: string;
  /** Content transform function (from imports/transforms/). */
  transform: (content: string, filePath: string) => string;
}

/**
 * Release-artifact strategy (pre-built by library CI).
 *
 * Does NOT extend ImportOptions — artifact configs don't use the loader.
 * The script downloads the tarball and unpacks it directly.
 */
export interface GithubArtifactConfig {
  source: 'github-artifact';
  /** Language for this variant: "TypeScript", "Python", "Go", etc. */
  language: string;
  /** Versions to display in the version picker (manually curated) */
  versions: VersionConfig[];
  /** GitHub repo owner */
  owner: string;
  /** GitHub repo name */
  repo: string;
  /** Transforms applied to matching files after unpacking. */
  postImportTransforms?: PostImportTransform[];
}

/** Discriminated union — use `isArtifactVariant()` to narrow. */
export type VariantImportConfig = GithubLoaderConfig | GithubArtifactConfig;

/** Type guard for artifact variants. */
export function isArtifactVariant(v: VariantImportConfig): v is GithubArtifactConfig {
  return v.source === 'github-artifact';
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