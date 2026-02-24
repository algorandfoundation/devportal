import { describe, it, expect } from 'vitest';
import {
  rebaseSidebarEntries,
  buildLibrarySidebarLabel,
  isLibrarySidebarLabel,
  parseLibrarySidebarLabel,
  slugsToLinks,
} from '../../imports/sidebar.js';
import type { SidebarJsonEntry } from '../../imports/types.js';

// ─── buildLibrarySidebarLabel ────────────────────────────────────────

describe('buildLibrarySidebarLabel', () => {
  it.each([
    ['algokit-utils', 'TypeScript', 'latest', '_lib:algokit-utils:typescript:latest'],
    ['algorand-python', 'Python', 'v2.0', '_lib:algorand-python:python:v2.0'],
  ])('should build label for (%s, %s, %s) -> "%s"', (slug, lang, ver, expected) => {
    expect(buildLibrarySidebarLabel(slug, lang, ver)).toBe(expected);
  });
});

// ─── isLibrarySidebarLabel ───────────────────────────────────────────

describe('isLibrarySidebarLabel', () => {
  it.each([
    ['_lib:algokit-utils:typescript:latest', true],
    ['_lib:a:b:c', true],
    ['Getting Started', false],
    ['_library:not-lib', false],
    ['', false],
  ])('should return %s for "%s"', (label, expected) => {
    expect(isLibrarySidebarLabel(label as string)).toBe(expected);
  });
});

// ─── parseLibrarySidebarLabel ────────────────────────────────────────

describe('parseLibrarySidebarLabel', () => {
  it('should parse valid library label', () => {
    const result = parseLibrarySidebarLabel('_lib:algokit-utils:typescript:latest');

    expect(result).toEqual({
      slug: 'algokit-utils',
      language: 'typescript',
      version: 'latest',
    });
  });

  it('should return null for non-library label', () => {
    expect(parseLibrarySidebarLabel('Not a Library')).toBeNull();
  });

  it('should return null for malformed label (wrong segment count)', () => {
    expect(parseLibrarySidebarLabel('_lib:only-two')).toBeNull();
  });
});

// ─── rebaseSidebarEntries ────────────────────────────────────────────

describe('rebaseSidebarEntries', () => {
  it('should rebase slug entries', () => {
    const entries: SidebarJsonEntry[] = [{ slug: 'guides/intro' }];

    const result = rebaseSidebarEntries(entries, 'docs/mylib/ts/latest');

    expect(result).toEqual([{ slug: 'docs/mylib/ts/latest/guides/intro' }]);
  });

  it('should rebase link entries without leading slash', () => {
    const entries: SidebarJsonEntry[] = [{ label: 'Guide', link: 'guides/intro' }];

    const result = rebaseSidebarEntries(entries, 'docs/mylib/ts/latest');

    expect(result).toEqual([
      { label: 'Guide', link: 'docs/mylib/ts/latest/guides/intro' },
    ]);
  });

  it('should rebase link entries with leading slash', () => {
    const entries: SidebarJsonEntry[] = [{ label: 'Guide', link: '/guides/intro' }];

    const result = rebaseSidebarEntries(entries, 'docs/mylib/ts/latest');

    expect(result).toEqual([
      { label: 'Guide', link: '/docs/mylib/ts/latest/guides/intro' },
    ]);
  });

  it('should rebase autogenerate entries', () => {
    const entries: SidebarJsonEntry[] = [
      { label: 'API', autogenerate: { directory: 'api' } },
    ];

    const result = rebaseSidebarEntries(entries, 'docs/mylib/ts/latest');

    expect(result).toEqual([
      { label: 'API', autogenerate: { directory: 'docs/mylib/ts/latest/api' } },
    ]);
  });

  it('should recurse into group items', () => {
    const entries: SidebarJsonEntry[] = [
      {
        label: 'Group',
        items: [{ slug: 'nested/page' }],
      },
    ];

    const result = rebaseSidebarEntries(entries, 'prefix');

    expect(result).toEqual([
      {
        label: 'Group',
        items: [{ slug: 'prefix/nested/page' }],
      },
    ]);
  });

  it('should handle empty entries array', () => {
    expect(rebaseSidebarEntries([], 'prefix')).toEqual([]);
  });
});

// ─── slugsToLinks ────────────────────────────────────────────────────

describe('slugsToLinks', () => {
  it('should convert slug entry to link entry with derived label', () => {
    const entries: SidebarJsonEntry[] = [{ slug: 'docs/mylib/page' }];

    const result = slugsToLinks(entries);

    expect(result).toEqual([{ label: 'page', link: '/docs/mylib/page/' }]);
  });

  it('should replace dashes with spaces in derived label', () => {
    const entries: SidebarJsonEntry[] = [{ slug: 'docs/my-guide-page' }];

    const result = slugsToLinks(entries);

    expect(result).toEqual([{ label: 'my guide page', link: '/docs/my-guide-page/' }]);
  });

  it('should use existing label if present on slug entry', () => {
    const entries: SidebarJsonEntry[] = [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { slug: 'docs/guide', label: 'My Guide' } as any,
    ];

    const result = slugsToLinks(entries);

    expect(result).toEqual([{ label: 'My Guide', link: '/docs/guide/' }]);
  });

  it('should convert autogenerate to link', () => {
    const entries: SidebarJsonEntry[] = [
      { label: 'API', autogenerate: { directory: 'docs/api' } },
    ];

    const result = slugsToLinks(entries);

    expect(result).toEqual([{ label: 'API', link: '/docs/api/' }]);
  });

  it('should strip collapsed from autogenerate entries', () => {
    const entries: SidebarJsonEntry[] = [
      { label: 'API', autogenerate: { directory: 'docs/api' }, collapsed: true },
    ];

    const result = slugsToLinks(entries);

    expect(result).toEqual([{ label: 'API', link: '/docs/api/' }]);
  });

  it('should recurse into group items', () => {
    const entries: SidebarJsonEntry[] = [
      {
        label: 'Group',
        items: [{ slug: 'docs/item' }],
      },
    ];

    const result = slugsToLinks(entries);

    expect(result).toEqual([
      {
        label: 'Group',
        items: [{ label: 'item', link: '/docs/item/' }],
      },
    ]);
  });

  it('should pass through link entries unchanged', () => {
    const entries: SidebarJsonEntry[] = [
      { label: 'External', link: '/external/path' },
    ];

    expect(slugsToLinks(entries)).toEqual(entries);
  });
});
