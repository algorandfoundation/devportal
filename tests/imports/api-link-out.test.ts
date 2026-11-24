import { describe, it, expect } from 'vitest';
import {
  isApiSidebarEntry,
  linkOutApiLinks,
  linkOutApiSidebar,
} from '../../imports/api-link-out.js';
import type { SidebarJsonEntry } from '../../imports/types.js';

const API_URL = 'https://example.github.io/mylib/api/pkg/';
const PREFIX = 'docs/mylib/python/latest';

describe('isApiSidebarEntry', () => {
  it.each<[string, SidebarJsonEntry, boolean]>([
    ['api autogenerate', { label: 'API', autogenerate: { directory: 'api' } }, true],
    ['nested api autogenerate', { label: 'x', autogenerate: { directory: 'api/Sub' } }, true],
    ['api slug', { slug: 'api/pkg' }, true],
    ['guide slug', { slug: 'guides/intro' }, false],
    ['slug that only starts with "api"', { slug: 'api-design/intro' }, false],
    ['external link', { label: 'API', link: API_URL }, false],
    [
      'group of only api entries',
      { label: 'API Reference', items: [{ slug: 'api/a' }, { label: 't', autogenerate: { directory: 'api/t' } }] },
      true,
    ],
    [
      'mixed group',
      { label: 'Reference', items: [{ slug: 'api/a' }, { slug: 'reference/cli' }] },
      false,
    ],
    ['empty group', { label: 'Empty', items: [] }, false],
  ])('%s', (_name, entry, expected) => {
    expect(isApiSidebarEntry(entry)).toBe(expected);
  });
});

describe('linkOutApiSidebar', () => {
  const sidebar: SidebarJsonEntry[] = [
    { label: 'Home', link: '/' },
    { label: 'Guides', items: [{ slug: 'guides/intro' }] },
    { label: 'API Reference', collapsed: true, autogenerate: { directory: 'api' } },
  ];

  it('replaces the API section with one external link, keeping its label', () => {
    const result = linkOutApiSidebar(sidebar, API_URL);

    expect(result).toEqual([
      { label: 'Home', link: '/' },
      { label: 'Guides', items: [{ slug: 'guides/intro' }] },
      {
        label: 'API Reference',
        link: API_URL,
        attrs: { target: '_blank', rel: 'noopener' },
      },
    ]);
  });

  it('is idempotent', () => {
    const once = linkOutApiSidebar(sidebar, API_URL);
    expect(linkOutApiSidebar(once, API_URL)).toEqual(once);
  });

  it('adds the link even when the sidebar had no API section', () => {
    const result = linkOutApiSidebar([{ slug: 'guides/intro' }], API_URL);
    expect(result.at(-1)).toMatchObject({ label: 'API Reference', link: API_URL });
  });
});

describe('linkOutApiLinks', () => {
  it.each([
    ['index link', `[API](/${PREFIX}/api/)`, `[API](${API_URL})`],
    ['index link without trailing slash', `[API](/${PREFIX}/api)`, `[API](${API_URL})`],
    [
      'deep link goes to the landing page, not a guessed deep path',
      `[Client](/${PREFIX}/api/pkg/classes/client/#methods)`,
      `[Client](${API_URL})`,
    ],
    ['html href', `<a href="/${PREFIX}/api/pkg/">x</a>`, `<a href="${API_URL}">x</a>`],
    ['single-quoted href', `href='/${PREFIX}/api/pkg/'`, `href='${API_URL}'`],
  ])('%s', (_name, input, expected) => {
    expect(linkOutApiLinks(input, PREFIX, API_URL)).toBe(expected);
  });

  it('leaves non-API links and other libraries alone', () => {
    const input = [
      `[Guide](/${PREFIX}/guides/intro/)`,
      `[Other](/docs/other/python/latest/api/thing/)`,
      `[Lookalike](/${PREFIX}/api-design/)`,
    ].join('\n');
    expect(linkOutApiLinks(input, PREFIX, API_URL)).toBe(input);
  });

  it('rewrites every occurrence', () => {
    const input = `[a](/${PREFIX}/api/a/) and [b](/${PREFIX}/api/b/)`;
    expect(linkOutApiLinks(input, PREFIX, API_URL)).toBe(
      `[a](${API_URL}) and [b](${API_URL})`,
    );
  });
});
