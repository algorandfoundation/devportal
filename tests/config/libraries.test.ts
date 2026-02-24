import { describe, it, expect } from 'vitest';
import {
  buildFilterKey,
  LANG_ABBREV,
  buildLibraryUrl,
  toStarlightSidebar,
  getLibraryBySlug,
  getVersionBySlug,
  getLibraryFromPath,
  getLibrariesByCategory,
  libraries,
  parseLibraryPath,
} from '../../src/config/libraries.js';
import type {
  LibraryConfig,
  LibrarySidebarEntry,
} from '../../src/config/libraries.js';

// Shared mock fixture used across pure-function tests
const mockLib: LibraryConfig = {
  slug: 'algokit-utils',
  label: 'AlgoKit Utils',
  description: 'Utility library',
  color: '#00C2FF',
  versions: [
    { slug: 'latest', label: 'Latest' },
    { slug: 'v2.0', label: 'v2.0' },
  ],
  languages: ['TypeScript', 'Python'],
  category: 'sdk',
  sidebar: [],
};

// ─── buildFilterKey ──────────────────────────────────────────────────

describe('buildFilterKey', () => {
  it.each([
    ['algokit-utils', 'typescript', 'algokit-utils-ts'],
    ['algokit-utils', 'TypeScript', 'algokit-utils-ts'],
    ['algokit-utils', 'python', 'algokit-utils-py'],
    ['algokit-utils', 'Python', 'algokit-utils-py'],
    ['mylib', 'go', 'mylib-go'],
    ['mylib', 'Rust', 'mylib-rust'],
  ])(
    'should build filter key for (%s, %s) -> "%s"',
    (slug, language, expected) => {
      expect(buildFilterKey(slug, language)).toBe(expected);
    },
  );
});

// ─── LANG_ABBREV ─────────────────────────────────────────────────────

describe('LANG_ABBREV', () => {
  it('should map typescript to ts', () => {
    expect(LANG_ABBREV['typescript']).toBe('ts');
  });

  it('should map python to py', () => {
    expect(LANG_ABBREV['python']).toBe('py');
  });
});

// ─── buildLibraryUrl ─────────────────────────────────────────────────

describe('buildLibraryUrl', () => {
  it('should build base URL without page path', () => {
    const result = buildLibraryUrl(mockLib, 'TypeScript', 'latest');

    expect(result).toBe('/docs/algokit-utils/typescript/latest/');
  });

  it('should build URL with page path', () => {
    const result = buildLibraryUrl(mockLib, 'TypeScript', 'latest', 'guides/accounts');

    expect(result).toContain('guides/accounts/');
  });

  it('should normalize trailing slashes', () => {
    const result = buildLibraryUrl(mockLib, 'TypeScript', 'latest', 'guides/accounts/');

    expect(result).toBe('/docs/algokit-utils/typescript/latest/guides/accounts/');
  });

  it('should lowercase the language segment', () => {
    const result = buildLibraryUrl(mockLib, 'Python', 'v2.0');

    expect(result).toBe('/docs/algokit-utils/python/v2.0/');
  });
});

// ─── toStarlightSidebar ──────────────────────────────────────────────

describe('toStarlightSidebar', () => {
  it('should convert link entries and mark isCurrent based on currentPath', () => {
    const entries: LibrarySidebarEntry[] = [
      { type: 'link', label: 'Intro', href: '/docs/intro' },
      { type: 'link', label: 'Guide', href: '/docs/guide' },
    ];

    const result = toStarlightSidebar(entries, '/docs/intro');

    expect(result).toEqual([
      {
        type: 'link',
        label: 'Intro',
        href: '/docs/intro',
        isCurrent: true,
        badge: undefined,
        attrs: {},
      },
      {
        type: 'link',
        label: 'Guide',
        href: '/docs/guide',
        isCurrent: false,
        badge: undefined,
        attrs: {},
      },
    ]);
  });

  it('should handle trailing slash normalization for isCurrent', () => {
    const entries: LibrarySidebarEntry[] = [
      { type: 'link', label: 'Intro', href: '/docs/intro/' },
    ];

    const result = toStarlightSidebar(entries, '/docs/intro');

    expect(result[0]).toMatchObject({ isCurrent: true });
  });

  it('should convert group entries recursively', () => {
    const entries: LibrarySidebarEntry[] = [
      {
        type: 'group',
        label: 'Guides',
        collapsed: false,
        entries: [
          { type: 'link', label: 'Intro', href: '/docs/intro' },
        ],
      },
    ];

    const result = toStarlightSidebar(entries, '/docs/intro');

    expect(result).toEqual([
      {
        type: 'group',
        label: 'Guides',
        collapsed: false,
        badge: undefined,
        entries: [
          {
            type: 'link',
            label: 'Intro',
            href: '/docs/intro',
            isCurrent: true,
            badge: undefined,
            attrs: {},
          },
        ],
      },
    ]);
  });

  it('should rewrite hrefs when urlContext is provided', () => {
    const entries: LibrarySidebarEntry[] = [
      { type: 'link', label: 'Accounts', href: '/docs/algokit-utils/guides/accounts' },
    ];
    const urlContext = { library: mockLib, language: 'TypeScript', version: 'latest' };

    const result = toStarlightSidebar(entries, '/other', urlContext);

    expect(result[0]).toMatchObject({
      href: '/docs/algokit-utils/typescript/latest/guides/accounts/',
    });
  });

  it('should handle badge on link entries', () => {
    const entries: LibrarySidebarEntry[] = [
      {
        type: 'link',
        label: 'New',
        href: '/docs/new',
        badge: { text: 'Beta', variant: 'caution' },
      },
    ];

    const result = toStarlightSidebar(entries, '/docs/other');

    expect(result[0]).toMatchObject({
      badge: { text: 'Beta', variant: 'caution' },
    });
  });

  it('should default badge variant to "default"', () => {
    const entries: LibrarySidebarEntry[] = [
      {
        type: 'link',
        label: 'New',
        href: '/docs/new',
        badge: { text: 'New' },
      },
    ];

    const result = toStarlightSidebar(entries, '/docs/other');

    expect(result[0]).toMatchObject({
      badge: { text: 'New', variant: 'default' },
    });
  });
});

// ─── getLibraryBySlug (live registry) ────────────────────────────────

describe('getLibraryBySlug', () => {
  it('should return undefined for an unknown slug', () => {
    expect(getLibraryBySlug('nonexistent-lib')).toBeUndefined();
  });

  if (libraries.length > 0) {
    it('should find the first registered library by slug', () => {
      const first = libraries[0];

      const result = getLibraryBySlug(first.slug);

      expect(result).toMatchObject({ slug: first.slug });
    });
  }
});

// ─── getVersionBySlug ────────────────────────────────────────────────

describe('getVersionBySlug', () => {
  it('should return undefined for an unknown version slug', () => {
    expect(getVersionBySlug(mockLib, 'nonexistent')).toBeUndefined();
  });

  it('should find a version by slug on the mock library', () => {
    const result = getVersionBySlug(mockLib, 'v2.0');

    expect(result).toEqual({ slug: 'v2.0', label: 'v2.0' });
  });
});

// ─── getLibraryFromPath (live registry) ──────────────────────────────

describe('getLibraryFromPath', () => {
  it('should return undefined for non-docs paths', () => {
    expect(getLibraryFromPath('/about')).toBeUndefined();
  });

  it('should return undefined for an unknown library slug', () => {
    expect(getLibraryFromPath('/docs/nonexistent-lib/page')).toBeUndefined();
  });

  if (libraries.length > 0) {
    it('should detect the first registered library from a docs path', () => {
      const first = libraries[0];

      const result = getLibraryFromPath(`/docs/${first.slug}/some/page`);

      expect(result).toMatchObject({ slug: first.slug });
    });
  }
});

// ─── parseLibraryPath (live registry) ────────────────────────────────

describe('parseLibraryPath', () => {
  it('should return undefined for non-docs paths', () => {
    expect(parseLibraryPath('/about')).toBeUndefined();
  });

  it('should return undefined for unknown library slug', () => {
    expect(parseLibraryPath('/docs/nonexistent-lib/ts/latest')).toBeUndefined();
  });

  if (libraries.length > 0) {
    it('should parse a valid library path', () => {
      const first = libraries[0];
      const lang = first.languages[0];
      const ver = first.versions[0].slug;

      const result = parseLibraryPath(`/docs/${first.slug}/${lang.toLowerCase()}/${ver}/page`);

      expect(result).toMatchObject({
        library: { slug: first.slug },
        language: lang,
        version: ver,
      });
    });
  }
});

// ─── getLibrariesByCategory ──────────────────────────────────────────

describe('getLibrariesByCategory', () => {
  it('should return an object whose values are arrays', () => {
    const grouped = getLibrariesByCategory();

    for (const value of Object.values(grouped)) {
      expect(Array.isArray(value)).toBe(true);
    }
  });

  if (libraries.length > 0) {
    it('should group all registered libraries', () => {
      const grouped = getLibrariesByCategory();
      const totalGrouped = Object.values(grouped).reduce(
        (sum, arr) => sum + (arr?.length ?? 0),
        0,
      );

      expect(totalGrouped).toBe(libraries.length);
    });
  }
});
