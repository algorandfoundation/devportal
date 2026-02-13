/**
 * Library virtual collection registry.
 *
 * Thin barrel that imports per-library configs and assembles the runtime
 * registry. All helper functions are defined here — consumer components
 * import from this file and don't need to know about the config structure.
 */

import type { LibraryImportConfig } from '../../imports/types';
import type { VersionConfig } from '../../imports/types';
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
  /** Sidebar tree for this library's docs (populated by sidebar configs) */
  sidebar: LibrarySidebarEntry[];
}

export interface LibrarySidebarLink {
  type: 'link';
  label: string;
  href: string;
  badge?: {
    text: string;
    variant?: 'note' | 'tip' | 'caution' | 'danger' | 'default';
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
    variant?: 'note' | 'tip' | 'caution' | 'danger' | 'default';
  };
}

export type LibrarySidebarEntry = LibrarySidebarLink | LibrarySidebarGroup;

// ---------------------------------------------------------------------------
// Registry builder
// ---------------------------------------------------------------------------

function buildRegistry(configs: LibraryImportConfig[]): LibraryConfig[] {
  return configs.map(config => {
    // Use the first variant's versions for the flat array. Per-variant
    // version filtering happens at the component level (version picker).
    const versions =
      config.variants.length > 0 ? config.variants[0].versions : [];

    const languages = config.variants.map(v => v.language);

    return {
      slug: config.metadata.slug,
      label: config.metadata.label,
      description: config.metadata.description,
      color: config.metadata.color,
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
 * Multi-language URL: /docs/<library>/<language>/<version>/<page>/
 * Single-language URL: /docs/<library>/<version>/<page>/
 */
export function parseLibraryPath(path: string): ParsedLibraryPath | undefined {
  const match = path.match(/^\/docs\/([^/]+)(?:\/(.*))?$/);
  if (!match) return undefined;

  const librarySlug = match[1];
  const library = getLibraryBySlug(librarySlug);
  if (!library) return undefined;

  const restPath = match[2] || '';
  const segments = restPath.split('/').filter(Boolean);

  const isMultiLanguage = library.languages.length > 1;

  let language: string;
  let version: string;
  let pagePath: string;
  let languageFound = false;

  if (isMultiLanguage) {
    const langSlug = segments[0]?.toLowerCase();
    const foundLang = library.languages.find(l => l.toLowerCase() === langSlug);
    language = foundLang || library.languages[0];
    languageFound = !!foundLang;

    const versionSlug = segments[1];
    const foundVersion = library.versions.find(v => v.slug === versionSlug);
    version = foundVersion?.slug || library.versions[0].slug;

    pagePath = foundLang && foundVersion ? segments.slice(2).join('/') : '';
  } else {
    language = library.languages[0] || '';
    languageFound = true;

    const versionSlug = segments[0];
    const foundVersion = library.versions.find(v => v.slug === versionSlug);
    version = foundVersion?.slug || library.versions[0].slug;

    pagePath = foundVersion ? segments.slice(1).join('/') : '';
  }

  return { library, language, version, pagePath, languageFound };
}

/**
 * Build a library URL with the given language/version.
 */
export function buildLibraryUrl(
  library: LibraryConfig,
  language: string,
  version: string,
  pagePath: string = '',
): string {
  const isMultiLanguage = library.languages.length > 1;

  if (isMultiLanguage) {
    const langSlug = language.toLowerCase();
    const base = `/docs/${library.slug}/${langSlug}/${version}/`;
    return pagePath ? `${base}${pagePath}/`.replace(/\/+$/, '/') : base;
  } else {
    const base = `/docs/${library.slug}/${version}/`;
    return pagePath ? `${base}${pagePath}/`.replace(/\/+$/, '/') : base;
  }
}

// ---------------------------------------------------------------------------
// Sidebar helpers
// ---------------------------------------------------------------------------

/**
 * Convert library sidebar entries to Starlight-compatible SidebarEntry objects,
 * marking the current page. If urlContext is provided, sidebar hrefs are
 * transformed to include the language/version prefix.
 */
export function toStarlightSidebar(
  entries: LibrarySidebarEntry[],
  currentPath: string,
  urlContext?: { library: LibraryConfig; language: string; version: string },
): any[] {
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
        badge: entry.badge,
        attrs: entry.attrs || {},
      };
    }
    return {
      type: 'group' as const,
      label: entry.label,
      entries: toStarlightSidebar(entry.entries, currentPath, urlContext),
      collapsed: entry.collapsed,
      badge: entry.badge,
    };
  });
}

// ---------------------------------------------------------------------------
// Category helpers
// ---------------------------------------------------------------------------

/** Group libraries by category */
export function getLibrariesByCategory(): Record<string, LibraryConfig[]> {
  const grouped: Record<string, LibraryConfig[]> = {};
  for (const lib of libraries) {
    if (!grouped[lib.category]) grouped[lib.category] = [];
    grouped[lib.category].push(lib);
  }
  return grouped;
}

/** Category display labels */
export const categoryLabels: Record<string, string> = {
  sdk: 'SDKs & Utilities',
  cli: 'CLI Tools',
  language: 'Smart Contract Languages',
  tool: 'Libraries & Tools',
  api: 'REST APIs',
};
