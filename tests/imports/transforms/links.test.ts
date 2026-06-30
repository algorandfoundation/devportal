// tests/imports/transforms/links.test.ts
import { describe, it, expect } from 'vitest';
import {
  pathToStarlightUrl,
  generateCommonLinkMappings,
  generateStarlightLinkMappings,
  generateLinkMappings,
} from '../../../imports/transforms/links.js';

// ─── pathToStarlightUrl ──────────────────────────────────────────────

describe('pathToStarlightUrl', () => {
  it.each([
    ['docs/guide.md', '/docs/guide/'],
    ['docs/guide.mdx', '/docs/guide/'],
    ['docs/nested/file.md', '/docs/nested/file/'],
    ['docs/folder/index.md', '/docs/folder/'],
    ['index.md', '/'],
    ['index', '/'],
    ['docs/guide', '/docs/guide/'],
    ['', '/'],
  ])('should convert "%s" → "%s"', (input, expected) => {
    expect(pathToStarlightUrl(input)).toBe(expected);
  });

  it('should handle case-insensitive extension stripping', () => {
    expect(pathToStarlightUrl('docs/FILE.MD')).toBe('/docs/FILE/');
    expect(pathToStarlightUrl('docs/FILE.MDX')).toBe('/docs/FILE/');
  });

  it('should preserve leading slash if already present', () => {
    expect(pathToStarlightUrl('/docs/guide.md')).toBe('/docs/guide/');
  });

  it('should handle index.mdx the same as index.md', () => {
    expect(pathToStarlightUrl('docs/folder/index.mdx')).toBe('/docs/folder/');
  });
});

// ─── generateCommonLinkMappings ──────────────────────────────────────

describe('generateCommonLinkMappings', () => {
  it('should return an array of link mappings', () => {
    const mappings = generateCommonLinkMappings();

    expect(mappings.length).toBeGreaterThan(0);
    expect(mappings[0]).toHaveProperty('pattern');
    expect(mappings[0]).toHaveProperty('replacement');
  });

  it('should include index.md stripping pattern', () => {
    const mappings = generateCommonLinkMappings();
    const indexMapping = mappings.find(
      (m) => m.pattern instanceof RegExp && m.pattern.test('/some/path/index.md'),
    );

    expect(indexMapping).toBeDefined();
  });

  it('should include README.md mapping', () => {
    const mappings = generateCommonLinkMappings();
    const readmeMapping = mappings.find(
      (m) => m.pattern instanceof RegExp && m.pattern.test('/some/README.md'),
    );

    expect(readmeMapping).toBeDefined();
  });

  it('should mark index.md mapping as global', () => {
    const mappings = generateCommonLinkMappings();
    const indexMapping = mappings.find(
      (m) => m.pattern instanceof RegExp && m.pattern.test('/path/index.md'),
    );

    expect(indexMapping?.global).toBe(true);
  });

  it('should mark README.md mapping as non-global', () => {
    const mappings = generateCommonLinkMappings();
    const readmeMapping = mappings.find(
      (m) => m.pattern instanceof RegExp && m.pattern.test('/path/README.md'),
    );

    expect(readmeMapping?.global).toBe(false);
  });
});

// ─── generateStarlightLinkMappings ───────────────────────────────────

describe('generateStarlightLinkMappings', () => {
  it('should return an array of link mappings', () => {
    const mappings = generateStarlightLinkMappings();

    expect(mappings.length).toBeGreaterThan(0);
  });

  it('should include .md extension stripping pattern', () => {
    const mappings = generateStarlightLinkMappings();
    const mdMapping = mappings.find(
      (m) => m.pattern instanceof RegExp && m.pattern.test('file.md'),
    );

    expect(mdMapping).toBeDefined();
  });

  it('should include /index stripping pattern', () => {
    const mappings = generateStarlightLinkMappings();
    const indexMapping = mappings.find(
      (m) => m.pattern instanceof RegExp && m.pattern.test('modules/index'),
    );

    expect(indexMapping).toBeDefined();
  });

  it('should mark all mappings as global', () => {
    const mappings = generateStarlightLinkMappings();

    for (const mapping of mappings) {
      expect(mapping.global).toBe(true);
    }
  });
});

// ─── generateLinkMappings ────────────────────────────────────────────

describe('generateLinkMappings', () => {
  it('should generate folder mappings with regex pattern', () => {
    const mappings = generateLinkMappings({
      'api/': 'reference/',
    });

    expect(mappings).toHaveLength(1);
    expect(mappings[0].pattern).toBeInstanceOf(RegExp);
  });

  it('should default global to true', () => {
    const mappings = generateLinkMappings({
      'api/': 'reference/',
    });

    expect(mappings[0].global).toBe(true);
  });

  it('should generate file mappings as exact match', () => {
    const mappings = generateLinkMappings({
      'README.md': 'overview',
    });

    expect(mappings).toHaveLength(1);
    expect(mappings[0].pattern).toBeInstanceOf(RegExp);

    // Should match the exact source
    const pattern = mappings[0].pattern as RegExp;
    expect(pattern.test('README.md')).toBe(true);
    // Should not match partial strings
    expect(pattern.test('some/README.md')).toBe(false);
  });

  it('should handle folder mapping replacement correctly', () => {
    const mappings = generateLinkMappings({
      'api/': 'reference/',
    });

    const pattern = mappings[0].pattern as RegExp;
    const replaceFn = mappings[0].replacement as (...args: string[]) => string;

    // Pattern should match paths starting with api/
    expect(pattern.test('api/client.md')).toBe(true);

    // Replacement should produce a Starlight-compatible URL
    const result = replaceFn('api/client.md', 'client.md');
    expect(result).toBe('/reference/client/');
  });

  it('should handle folder mapping with empty target path', () => {
    const mappings = generateLinkMappings({
      'api/': '',
    });

    const replaceFn = mappings[0].replacement as (...args: string[]) => string;
    const result = replaceFn('api/client.md', 'client.md');
    expect(result).toBe('/client/');
  });

  it('should respect crossSectionPath option for folder mappings', () => {
    const mappings = generateLinkMappings(
      { 'api/': '' },
      { crossSectionPath: '/reference/algokit-utils-ts/api' },
    );

    expect(mappings).toHaveLength(1);
    const replaceFn = mappings[0].replacement as (...args: string[]) => string;
    const result = replaceFn('api/client.md', 'client.md');
    expect(result).toContain('/reference/algokit-utils-ts/api');
  });

  it('should respect crossSectionPath option for file mappings', () => {
    const mappings = generateLinkMappings(
      { 'README.md': 'overview' },
      { crossSectionPath: '/reference/algokit-utils-ts' },
    );

    const replaceFn = mappings[0].replacement as (...args: string[]) => string;
    const result = replaceFn('README.md');
    expect(result).toContain('/reference/algokit-utils-ts');
  });

  it('should set global to false when specified', () => {
    const mappings = generateLinkMappings(
      { 'old/': 'new/' },
      { global: false },
    );

    expect(mappings[0].global).toBe(false);
  });

  it('should generate one mapping per entry in pathMappings', () => {
    const mappings = generateLinkMappings({
      'api/': 'reference/',
      'guides/': 'docs/',
      'README.md': 'overview',
    });

    expect(mappings).toHaveLength(3);
  });
});
