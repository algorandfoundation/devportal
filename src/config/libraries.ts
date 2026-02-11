/**
 * Library virtual collection registry.
 *
 * Each entry defines a library "virtual collection" that gets its own isolated
 * sidebar when viewed under /docs/<slug>/. The sidebar items use the same
 * shape as Starlight SidebarEntry so they can be rendered directly by the
 * SidebarSublist component.
 *
 * Libraries with multiple language variants (e.g. AlgoKit Utils) appear as a
 * single entry with a language selector, not as separate entries per language.
 */

export interface VersionConfig {
  /** URL slug (must match folder name, e.g. 'v800' not 'v8.0.0') */
  slug: string;
  /** Display label shown in picker (e.g. 'v8.0.0' or 'Latest') */
  label: string;
}

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
  /** Sidebar tree for this library's docs */
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

/**
 * Convert our library sidebar entries to Starlight-compatible SidebarEntry
 * objects, marking the current page.
 *
 * If urlContext is provided, sidebar hrefs are transformed to include
 * the language/version prefix.
 */
export function toStarlightSidebar(
  entries: LibrarySidebarEntry[],
  currentPath: string,
  urlContext?: { library: LibraryConfig; language: string; version: string },
): any[] {
  return entries.map(entry => {
    if (entry.type === 'link') {
      let href = entry.href;

      // Transform href to include language/version if context is provided
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

/** All registered library virtual collections */
export const libraries: LibraryConfig[] = [
  {
    slug: 'algokit-utils',
    label: 'AlgoKit Utils',
    description: 'Utilities for building solutions on Algorand',
    color: '#3B82F6', // blue
    versions: [
      { slug: 'latest', label: 'Latest' },
      { slug: 'v8-0-0', label: 'v8.0.0' },
    ],
    languages: ['TypeScript', 'Python'],
    category: 'sdk',
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
          {
            type: 'link',
            label: 'Working with Accounts',
            href: '/docs/algokit-utils/guides/accounts/',
          },
        ],
      },
      {
        type: 'group',
        label: 'API Reference',
        collapsed: true,
        entries: [
          {
            type: 'link',
            label: 'AlgorandClient',
            href: '/docs/algokit-utils/api/algorand-client/',
          },
        ],
      },
    ],
  },
  {
    slug: 'algokit-cli',
    label: 'AlgoKit CLI',
    description: 'The AlgoKit command-line interface',
    color: '#F59E0B', // amber
    versions: [
      { slug: 'latest', label: 'Latest' },
      { slug: 'v3-0-0', label: 'v3.0.0' },
    ],
    languages: ['Python'],
    category: 'cli',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/algokit-cli/' },
        ],
      },
      {
        type: 'group',
        label: 'Guides',
        collapsed: false,
        entries: [
          {
            type: 'link',
            label: 'Getting Started',
            href: '/docs/algokit-cli/guides/getting-started/',
          },
        ],
      },
      {
        type: 'group',
        label: 'API Reference',
        collapsed: true,
        entries: [
          {
            type: 'link',
            label: 'Commands',
            href: '/docs/algokit-cli/api/commands/',
          },
        ],
      },
    ],
  },
  {
    slug: 'algorand-python',
    label: 'Algorand Python',
    description: 'Write Algorand smart contracts in Python',
    color: '#8B5CF6', // purple
    versions: [
      { slug: 'latest', label: 'Latest' },
      { slug: 'v5-0-0', label: 'v5.0.0' },
      { slug: 'v4-0-0', label: 'v4.0.0' },
    ],
    languages: ['Python'],
    category: 'language',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/algorand-python/' },
          {
            type: 'link',
            label: 'Quick Start',
            href: '/docs/algorand-python/quick-start/',
          },
        ],
      },
      {
        type: 'group',
        label: 'Language Guide',
        collapsed: false,
        entries: [
          {
            type: 'link',
            label: 'Program Structure',
            href: '/docs/algorand-python/lg-structure/',
          },
          {
            type: 'link',
            label: 'Types',
            href: '/docs/algorand-python/lg-types/',
          },
          {
            type: 'link',
            label: 'Control Flow',
            href: '/docs/algorand-python/lg-control/',
          },
          {
            type: 'link',
            label: 'Storage',
            href: '/docs/algorand-python/lg-storage/',
          },
          {
            type: 'link',
            label: 'Transactions',
            href: '/docs/algorand-python/lg-transactions/',
          },
          {
            type: 'link',
            label: 'ARC-4 ABI',
            href: '/docs/algorand-python/lg-arc4/',
          },
        ],
      },
      {
        type: 'group',
        label: 'API Reference',
        collapsed: true,
        entries: [
          {
            type: 'link',
            label: 'Full API Docs',
            href: '/docs/algorand-python/api/',
          },
        ],
      },
    ],
  },
  {
    slug: 'algorand-typescript',
    label: 'Algorand TypeScript',
    description: 'Write Algorand smart contracts in TypeScript',
    color: '#EC4899', // pink
    versions: [{ slug: 'latest', label: 'Latest' }],
    languages: ['TypeScript'],
    category: 'language',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          {
            type: 'link',
            label: 'Overview',
            href: '/docs/algorand-typescript/',
          },
          {
            type: 'link',
            label: 'Quick Start',
            href: '/docs/algorand-typescript/quick-start/',
          },
        ],
      },
      {
        type: 'group',
        label: 'Language Guide',
        collapsed: false,
        entries: [
          {
            type: 'link',
            label: 'Program Structure',
            href: '/docs/algorand-typescript/lg-program-structure/',
          },
          {
            type: 'link',
            label: 'Types',
            href: '/docs/algorand-typescript/lg-types/',
          },
          {
            type: 'link',
            label: 'Storage',
            href: '/docs/algorand-typescript/lg-storage/',
          },
          {
            type: 'link',
            label: 'Ops',
            href: '/docs/algorand-typescript/lg-ops/',
          },
        ],
      },
      {
        type: 'group',
        label: 'API Reference',
        collapsed: true,
        entries: [
          {
            type: 'link',
            label: 'Full API Docs',
            href: '/docs/algorand-typescript/api/',
          },
        ],
      },
    ],
  },
  {
    slug: 'algokit-subscriber',
    label: 'AlgoKit Subscriber',
    description: 'Subscribe to Algorand blockchain events',
    color: '#06B6D4', // cyan
    versions: [
      { slug: 'latest', label: 'Latest' },
      { slug: 'v3-0-0', label: 'v3.0.0' },
    ],
    languages: ['TypeScript', 'Python'],
    category: 'tool',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          {
            type: 'link',
            label: 'Overview',
            href: '/docs/algokit-subscriber/',
          },
          {
            type: 'link',
            label: 'Quick Start',
            href: '/docs/algokit-subscriber/quick-start/',
          },
        ],
      },
      {
        type: 'group',
        label: 'Guides',
        collapsed: false,
        entries: [
          {
            type: 'link',
            label: 'Subscriber',
            href: '/docs/algokit-subscriber/subscriber/',
          },
          {
            type: 'link',
            label: 'Subscriptions',
            href: '/docs/algokit-subscriber/subscriptions/',
          },
        ],
      },
    ],
  },
  {
    slug: 'nodekit',
    label: 'NodeKit',
    description: 'Tools for running Algorand nodes',
    color: '#EF4444', // red
    versions: [{ slug: 'latest', label: 'Latest' }],
    languages: ['Go', 'TUI'],
    category: 'tool',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/nodekit/' },
          {
            type: 'link',
            label: 'Quick Start',
            href: '/docs/nodekit/quick-start/',
          },
        ],
      },
      {
        type: 'group',
        label: 'Reference',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Commands', href: '/docs/nodekit/commands/' },
        ],
      },
    ],
  },
  {
    slug: 'rest-api',
    label: 'REST APIs',
    description: 'Algorand REST API reference (algod, indexer, kmd)',
    color: '#F97316', // orange
    versions: [{ slug: 'latest', label: 'Latest' }],
    languages: ['REST'],
    category: 'api',
    sidebar: [
      {
        type: 'group',
        label: 'REST API',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/rest-api/' },
          { type: 'link', label: 'algod API', href: '/docs/rest-api/algod/' },
          {
            type: 'link',
            label: 'indexer API',
            href: '/docs/rest-api/indexer/',
          },
          { type: 'link', label: 'kmd API', href: '/docs/rest-api/kmd/' },
        ],
      },
    ],
  },
];

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

/**
 * Parsed components of a library URL path.
 */
export interface ParsedLibraryPath {
  library: LibraryConfig;
  language: string;
  version: string;
  /** Page path after language/version, e.g. "guides/accounts" */
  pagePath: string;
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

  if (isMultiLanguage) {
    // Multi-language: /docs/<lib>/<lang>/<version>/<page>
    const langSlug = segments[0]?.toLowerCase();
    const foundLang = library.languages.find(l => l.toLowerCase() === langSlug);
    language = foundLang || library.languages[0];

    const versionSlug = segments[1];
    const foundVersion = library.versions.find(v => v.slug === versionSlug);
    version = foundVersion?.slug || library.versions[0].slug;

    pagePath = foundLang && foundVersion ? segments.slice(2).join('/') : '';
  } else {
    // Single-language: /docs/<lib>/<version>/<page>
    language = library.languages[0] || '';

    const versionSlug = segments[0];
    const foundVersion = library.versions.find(v => v.slug === versionSlug);
    version = foundVersion?.slug || library.versions[0].slug;

    pagePath = foundVersion ? segments.slice(1).join('/') : '';
  }

  return { library, language, version, pagePath };
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
