/**
 * Library virtual collection registry.
 *
 * Thin barrel that imports per-library configs and assembles the runtime
 * registry. All helper functions are defined here — consumer components
 * import from this file and don't need to know about the config structure.
 */

import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import type { LibraryImportConfig } from '../../imports/types';
import type { VersionConfig } from '../../imports/types';
import type { StarlightRouteData } from '@astrojs/starlight/route-data';
import { LIBRARY_CONFIGS } from '../../imports/configs/index.js';

export type { VersionConfig };

// ---------------------------------------------------------------------------
// Runtime types (consumed by Astro components)
// ---------------------------------------------------------------------------

export interface LibraryConfig {
  /** URL slug used in /docs/<slug>/ */
  slug: string;
  /** Display name shown in switcher (language-agnostic) */
  label: string;
  /** Short one-line description */
  description: string;
  /** Accent color for the dot in the library list */
  color: string;
  /** Available versions (first is default) */
  versions: VersionConfig[];
  /** Available language/framework variants (empty = language-agnostic) */
  languages: string[];
  /** Category grouping */
  category: 'sdk' | 'cli' | 'language' | 'tool' | 'api';
  /** Raw SVG markup resolved by convention from imports/configs/<slug>/logo.svg */
  logo?: string;
  /** Sidebar tree for this library's docs (populated by sidebar configs) */
  sidebar: LibrarySidebarEntry[];
}

export interface LibrarySidebarLink {
  type: 'link';
  label: string;
  href: string;
  badge?: {
    text: string;
    variant?: StarlightBadge['variant'];
  };
  attrs?: Record<string, string>;
}

export interface LibrarySidebarGroup {
  type: 'group';
  label: string;
  entries: LibrarySidebarEntry[];
  collapsed: boolean;
  badge?: {
    text: string;
    variant?: StarlightBadge['variant'];
  };
}

export type LibrarySidebarEntry = LibrarySidebarLink | LibrarySidebarGroup;

/** Sidebar entry type derived from Starlight's public API — stays in sync automatically. */
export type StarlightSidebarEntry = StarlightRouteData['sidebar'][number];

/** Badge type extracted from Starlight's sidebar entry. */
type StarlightBadge = NonNullable<
  Extract<StarlightSidebarEntry, { type: 'link' }>['badge']
>;

// ---------------------------------------------------------------------------
// Registry builder
// ---------------------------------------------------------------------------

/** Resolve a library's logo SVG from the conventional path: imports/configs/<slug>/logo.svg */
function resolveLibraryLogo(slug: string): string | undefined {
  const logoPath = join(process.cwd(), 'imports/configs', slug, 'logo.svg');
  if (!existsSync(logoPath)) return undefined;
  return readFileSync(logoPath, 'utf-8');
}

function buildRegistry(configs: LibraryImportConfig[]): LibraryConfig[] {
  return configs.map(config => {
    // Aggregate versions across all variants (supports multiple variants
    // per language when different versions come from different refs).
    // Deduplicate by slug — multiple variants often share the same version.
    const allVersions = config.variants.flatMap(v => v.versions);
    const seen = new Set<string>();
    const versions = allVersions.filter(v => {
      if (seen.has(v.slug)) return false;
      seen.add(v.slug);
      return true;
    });
    const languages = [...new Set(config.variants.map(v => v.language))];

    return {
      slug: config.metadata.slug,
      label: config.metadata.label,
      description: config.metadata.description,
      color: config.metadata.color,
      logo: resolveLibraryLogo(config.metadata.slug),
      versions,
      languages,
      category: config.metadata.category,
      sidebar: [], // Populated by optional sidebar configs (PR 2.5)
    };
  });
}

/** All registered library virtual collections */
export const libraries: LibraryConfig[] = buildRegistry(LIBRARY_CONFIGS);

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------

/** Lookup a library by its slug */
export function getLibraryBySlug(slug: string): LibraryConfig | undefined {
  return libraries.find(lib => lib.slug === slug);
}

/** Lookup a version config by its slug within a library */
export function getVersionBySlug(
  library: LibraryConfig,
  slug: string,
): VersionConfig | undefined {
  return library.versions.find(v => v.slug === slug);
}

/**
 * Detect if a given URL path is inside a library virtual collection.
 * Returns the library config if matched, undefined otherwise.
 */
export function getLibraryFromPath(path: string): LibraryConfig | undefined {
  const match = path.match(/^\/docs\/([^/]+)/);
  if (!match) return undefined;
  return getLibraryBySlug(match[1]);
}

// ---------------------------------------------------------------------------
// URL parsing and building
// ---------------------------------------------------------------------------

export interface ParsedLibraryPath {
  library: LibraryConfig;
  language: string;
  version: string;
  /** Page path after language/version, e.g. "guides/accounts" */
  pagePath: string;
  /** Whether the language was explicitly found in the URL (vs defaulted) */
  languageFound: boolean;
}

/**
 * Parse a library URL path to extract library, language, version, and page path.
 *
 * URL format: /docs/<library>/<language>/<version>/<page>/
 * Language segment is always present to match content directory structure.
 */
export function parseLibraryPath(path: string): ParsedLibraryPath | undefined {
  const match = path.match(/^\/docs\/([^/]+)(?:\/(.*))?$/);
  if (!match) return undefined;

  const librarySlug = match[1];
  const library = getLibraryBySlug(librarySlug);
  if (!library) return undefined;

  const restPath = match[2] || '';
  const segments = restPath.split('/').filter(Boolean);

  const langSlug = segments[0]?.toLowerCase();
  const foundLang = library.languages.find(l => l.toLowerCase() === langSlug);
  const language = foundLang || library.languages[0];
  const languageFound = !!foundLang;

  const versionSlug = segments[1];
  const foundVersion = library.versions.find(v => v.slug === versionSlug);
  const version = foundVersion?.slug || library.versions[0].slug;

  const pagePath = foundLang && foundVersion ? segments.slice(2).join('/') : '';

  return { library, language, version, pagePath, languageFound };
}

/**
 * Build a library URL with the given language/version.
 * Always includes the language segment to match content directory structure.
 */
export function buildLibraryUrl(
  library: LibraryConfig,
  language: string,
  version: string,
  pagePath: string = '',
): string {
  const langSlug = language.toLowerCase();
  const base = `/docs/${library.slug}/${langSlug}/${version}/`;
  return pagePath ? `${base}${pagePath}/`.replace(/\/+$/, '/') : base;
}

// ---------------------------------------------------------------------------
// Sidebar helpers
// ---------------------------------------------------------------------------

/** Normalize our optional badge to Starlight's required-variant badge. */
function toStarlightBadge(
  badge: LibrarySidebarLink['badge'],
): StarlightBadge | undefined {
  if (!badge) return undefined;
  return { text: badge.text, variant: badge.variant ?? 'default' };
}

/**
 * Convert library sidebar entries to Starlight-compatible SidebarEntry objects,
 * marking the current page. If urlContext is provided, sidebar hrefs are
 * transformed to include the language/version prefix.
 */
export function toStarlightSidebar(
  entries: LibrarySidebarEntry[],
  currentPath: string,
  urlContext?: { library: LibraryConfig; language: string; version: string },
): StarlightSidebarEntry[] {
  return entries.map(entry => {
    if (entry.type === 'link') {
      let href = entry.href;

      if (urlContext) {
        const { library, language, version } = urlContext;
        const basePattern = new RegExp(`^/docs/${library.slug}/`);
        if (basePattern.test(href)) {
          const pagePath = href.replace(basePattern, '').replace(/\/$/, '');
          href = buildLibraryUrl(library, language, version, pagePath);
        }
      }

      const normalizedHref = href.replace(/\/$/, '');
      const normalizedCurrent = currentPath.replace(/\/$/, '');
      return {
        type: 'link' as const,
        label: entry.label,
        href,
        isCurrent: normalizedHref === normalizedCurrent,
        badge: toStarlightBadge(entry.badge),
        attrs: entry.attrs || {},
      };
    }
    return {
      type: 'group' as const,
      label: entry.label,
      entries: toStarlightSidebar(entry.entries, currentPath, urlContext),
      collapsed: entry.collapsed,
      badge: toStarlightBadge(entry.badge),
    };
  });
}

// ---------------------------------------------------------------------------
// Category helpers
// ---------------------------------------------------------------------------

/** Category union derived from LibraryConfig */
export type LibraryCategory = LibraryConfig['category'];

/** Group libraries by category */
export function getLibrariesByCategory(): Partial<
  Record<LibraryCategory, LibraryConfig[]>
> {
  const grouped: Partial<Record<LibraryCategory, LibraryConfig[]>> = {};
  for (const lib of libraries) {
    if (!grouped[lib.category]) grouped[lib.category] = [];
    grouped[lib.category]!.push(lib);
  }
  return grouped;
}

/** Category display labels — compile error if a category is missing */
export const categoryLabels: Record<LibraryCategory, string> = {
  sdk: 'SDKs & Utilities',
  cli: 'CLI Tools',
  language: 'Smart Contract Languages',
  tool: 'Libraries & Tools',
  api: 'REST APIs',
};

// ---------------------------------------------------------------------------
// Search filter helpers (DVP-1208)
// ---------------------------------------------------------------------------

/** Abbreviations used in Pagefind filter keys (e.g. algokit-utils-ts). */
export const LANG_ABBREV: Record<string, string> = {
  typescript: 'ts',
  python: 'py',
};

/** Build the Pagefind filter key for a library variant. */
export function buildFilterKey(librarySlug: string, language: string): string {
  const abbrev = LANG_ABBREV[language.toLowerCase()] ?? language.toLowerCase();
  return `${librarySlug}-${abbrev}`;
}
