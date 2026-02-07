/**
 * Library virtual collection registry.
 *
 * Each entry defines a library "virtual collection" that gets its own isolated
 * sidebar when viewed under /docs/<slug>/. The sidebar items use the same
 * shape as Starlight SidebarEntry so they can be rendered directly by the
 * SidebarSublist component.
 */

export interface LibraryConfig {
  /** URL slug used in /docs/<slug>/ */
  slug: string;
  /** Display name shown in switcher */
  label: string;
  /** Short one-line description */
  description: string;
  /** Accent color for the dot in the library list */
  color: string;
  /** Available versions (first is default) */
  versions: string[];
  /** Available language/framework variants */
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
  badge?: { text: string; variant?: 'note' | 'tip' | 'caution' | 'danger' | 'default' };
  attrs?: Record<string, string>;
}

export interface LibrarySidebarGroup {
  type: 'group';
  label: string;
  entries: LibrarySidebarEntry[];
  collapsed: boolean;
  badge?: { text: string; variant?: 'note' | 'tip' | 'caution' | 'danger' | 'default' };
}

export type LibrarySidebarEntry = LibrarySidebarLink | LibrarySidebarGroup;

/**
 * Convert our library sidebar entries to Starlight-compatible SidebarEntry
 * objects, marking the current page.
 */
export function toStarlightSidebar(
  entries: LibrarySidebarEntry[],
  currentPath: string
): any[] {
  return entries.map((entry) => {
    if (entry.type === 'link') {
      const normalizedHref = entry.href.replace(/\/$/, '');
      const normalizedCurrent = currentPath.replace(/\/$/, '');
      return {
        type: 'link' as const,
        label: entry.label,
        href: entry.href,
        isCurrent: normalizedHref === normalizedCurrent,
        badge: entry.badge,
        attrs: entry.attrs || {},
      };
    }
    return {
      type: 'group' as const,
      label: entry.label,
      entries: toStarlightSidebar(entry.entries, currentPath),
      collapsed: entry.collapsed,
      badge: entry.badge,
    };
  });
}

/** All registered library virtual collections */
export const libraries: LibraryConfig[] = [
  {
    slug: 'algokit-utils-ts',
    label: 'AlgoKit Utils TS',
    description: 'TypeScript utilities for building on Algorand',
    color: '#3B82F6', // blue
    versions: ['latest', 'v8.0.0', 'v7.0.0'],
    languages: ['TypeScript'],
    category: 'sdk',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/algokit-utils-ts/' },
          { type: 'link', label: 'Installation', href: '/docs/algokit-utils-ts/install/' },
          { type: 'link', label: 'Quick Start', href: '/docs/algokit-utils-ts/quick-start/' },
        ],
      },
      {
        type: 'group',
        label: 'Guides',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Account Management', href: '/docs/algokit-utils-ts/accounts/' },
          { type: 'link', label: 'Algorand Client', href: '/docs/algokit-utils-ts/algorand-client/' },
          { type: 'link', label: 'App Client', href: '/docs/algokit-utils-ts/app-client/' },
          { type: 'link', label: 'App Deployment', href: '/docs/algokit-utils-ts/app-deploy/' },
          { type: 'link', label: 'Transaction Composer', href: '/docs/algokit-utils-ts/transaction-composer/' },
          { type: 'link', label: 'Typed Clients', href: '/docs/algokit-utils-ts/typed-clients/' },
        ],
      },
      {
        type: 'group',
        label: 'Migration',
        collapsed: true,
        entries: [
          { type: 'link', label: 'v8 Migration Guide', href: '/docs/algokit-utils-ts/v8-migration/' },
          { type: 'link', label: 'v7 Migration Guide', href: '/docs/algokit-utils-ts/v7-migration/' },
        ],
      },
      {
        type: 'group',
        label: 'API Reference',
        collapsed: true,
        entries: [
          { type: 'link', label: 'Full API Docs', href: '/docs/algokit-utils-ts/api/' },
        ],
      },
    ],
  },
  {
    slug: 'algokit-utils-py',
    label: 'AlgoKit Utils Python',
    description: 'Python utilities for building on Algorand',
    color: '#10B981', // green
    versions: ['latest', 'v3.0.0', 'v2.5.0'],
    languages: ['Python'],
    category: 'sdk',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/algokit-utils-py/' },
          { type: 'link', label: 'Installation', href: '/docs/algokit-utils-py/install/' },
          { type: 'link', label: 'Quick Start', href: '/docs/algokit-utils-py/quick-start/' },
        ],
      },
      {
        type: 'group',
        label: 'Guides',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Account Management', href: '/docs/algokit-utils-py/accounts/' },
          { type: 'link', label: 'Algorand Client', href: '/docs/algokit-utils-py/algorand-client/' },
          { type: 'link', label: 'App Client', href: '/docs/algokit-utils-py/app-client/' },
          { type: 'link', label: 'Transaction Composer', href: '/docs/algokit-utils-py/transaction-composer/' },
        ],
      },
      {
        type: 'group',
        label: 'API Reference',
        collapsed: true,
        entries: [
          { type: 'link', label: 'Full API Docs', href: '/docs/algokit-utils-py/api/' },
        ],
      },
    ],
  },
  {
    slug: 'algokit-cli',
    label: 'AlgoKit CLI',
    description: 'The AlgoKit command-line interface',
    color: '#F59E0B', // amber
    versions: ['latest', 'v3.0.0'],
    languages: [],
    category: 'cli',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/algokit-cli/' },
          { type: 'link', label: 'Installation', href: '/docs/algokit-cli/install/' },
        ],
      },
      {
        type: 'group',
        label: 'Commands',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Compile', href: '/docs/algokit-cli/compile/' },
          { type: 'link', label: 'Init', href: '/docs/algokit-cli/init/' },
          { type: 'link', label: 'Localnet', href: '/docs/algokit-cli/localnet/' },
          { type: 'link', label: 'Generate', href: '/docs/algokit-cli/generate/' },
          { type: 'link', label: 'Project', href: '/docs/algokit-cli/project/' },
          { type: 'link', label: 'Tasks', href: '/docs/algokit-cli/tasks/' },
        ],
      },
    ],
  },
  {
    slug: 'algorand-python',
    label: 'Algorand Python',
    description: 'Write Algorand smart contracts in Python',
    color: '#8B5CF6', // purple
    versions: ['latest', 'v5.0.0', 'v4.0.0'],
    languages: ['Python'],
    category: 'language',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/algorand-python/' },
          { type: 'link', label: 'Quick Start', href: '/docs/algorand-python/quick-start/' },
        ],
      },
      {
        type: 'group',
        label: 'Language Guide',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Program Structure', href: '/docs/algorand-python/lg-structure/' },
          { type: 'link', label: 'Types', href: '/docs/algorand-python/lg-types/' },
          { type: 'link', label: 'Control Flow', href: '/docs/algorand-python/lg-control/' },
          { type: 'link', label: 'Storage', href: '/docs/algorand-python/lg-storage/' },
          { type: 'link', label: 'Transactions', href: '/docs/algorand-python/lg-transactions/' },
          { type: 'link', label: 'ARC-4 ABI', href: '/docs/algorand-python/lg-arc4/' },
        ],
      },
      {
        type: 'group',
        label: 'API Reference',
        collapsed: true,
        entries: [
          { type: 'link', label: 'Full API Docs', href: '/docs/algorand-python/api/' },
        ],
      },
    ],
  },
  {
    slug: 'algorand-typescript',
    label: 'Algorand TypeScript',
    description: 'Write Algorand smart contracts in TypeScript',
    color: '#EC4899', // pink
    versions: ['latest'],
    languages: ['TypeScript'],
    category: 'language',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/algorand-typescript/' },
          { type: 'link', label: 'Quick Start', href: '/docs/algorand-typescript/quick-start/' },
        ],
      },
      {
        type: 'group',
        label: 'Language Guide',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Program Structure', href: '/docs/algorand-typescript/lg-program-structure/' },
          { type: 'link', label: 'Types', href: '/docs/algorand-typescript/lg-types/' },
          { type: 'link', label: 'Storage', href: '/docs/algorand-typescript/lg-storage/' },
          { type: 'link', label: 'Ops', href: '/docs/algorand-typescript/lg-ops/' },
        ],
      },
      {
        type: 'group',
        label: 'API Reference',
        collapsed: true,
        entries: [
          { type: 'link', label: 'Full API Docs', href: '/docs/algorand-typescript/api/' },
        ],
      },
    ],
  },
  {
    slug: 'algokit-subscriber-ts',
    label: 'AlgoKit Subscriber TS',
    description: 'Subscribe to Algorand blockchain events',
    color: '#06B6D4', // cyan
    versions: ['latest', 'v3.0.0'],
    languages: ['TypeScript'],
    category: 'tool',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/algokit-subscriber-ts/' },
          { type: 'link', label: 'Quick Start', href: '/docs/algokit-subscriber-ts/quick-start/' },
        ],
      },
      {
        type: 'group',
        label: 'Guides',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Subscriber', href: '/docs/algokit-subscriber-ts/subscriber/' },
          { type: 'link', label: 'Subscriptions', href: '/docs/algokit-subscriber-ts/subscriptions/' },
        ],
      },
    ],
  },
  {
    slug: 'nodekit',
    label: 'NodeKit',
    description: 'Tools for running Algorand nodes',
    color: '#EF4444', // red
    versions: ['latest'],
    languages: [],
    category: 'tool',
    sidebar: [
      {
        type: 'group',
        label: 'Getting Started',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/nodekit/' },
          { type: 'link', label: 'Quick Start', href: '/docs/nodekit/quick-start/' },
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
    versions: ['latest'],
    languages: [],
    category: 'api',
    sidebar: [
      {
        type: 'group',
        label: 'REST API',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Overview', href: '/docs/rest-api/' },
          { type: 'link', label: 'algod API', href: '/docs/rest-api/algod/' },
          { type: 'link', label: 'indexer API', href: '/docs/rest-api/indexer/' },
          { type: 'link', label: 'kmd API', href: '/docs/rest-api/kmd/' },
        ],
      },
    ],
  },
];

/** Lookup a library by its slug */
export function getLibraryBySlug(slug: string): LibraryConfig | undefined {
  return libraries.find((lib) => lib.slug === slug);
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
