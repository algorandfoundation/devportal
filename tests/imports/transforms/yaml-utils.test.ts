import { describe, it, expect } from 'vitest';
import {
  parseFrontmatter,
  serializeFrontmatter,
  deepMerge,
  combineFrontmatterAndContent,
  validateStarlightFrontmatter,
  isPlainObject,
} from '../../../imports/transforms/yaml-utils.js';

// ─── parseFrontmatter ────────────────────────────────────────────────

describe('parseFrontmatter', () => {
  it('should parse valid frontmatter and content', () => {
    const input = '---\ntitle: Hello\n---\nBody text';

    const result = parseFrontmatter(input);

    expect(result.hasFrontmatter).toBe(true);
    expect(result.data).toEqual({ title: 'Hello' });
    expect(result.content).toBe('Body text');
  });

  it('should return empty data when no frontmatter exists', () => {
    const input = 'Just some content without frontmatter';

    const result = parseFrontmatter(input);

    expect(result.hasFrontmatter).toBe(false);
    expect(result.data).toEqual({});
    expect(result.content).toBe(input);
  });

  it('should handle empty frontmatter block', () => {
    const input = '---\n\n---\nContent after empty frontmatter';

    const result = parseFrontmatter(input);

    // yaml.load of empty string returns undefined, coerced to {}
    expect(result.data).toEqual({});
    expect(result.content).toBe('Content after empty frontmatter');
  });

  it('should handle nested YAML values', () => {
    const input = '---\nsidebar:\n  order: 1\n  label: Test\n---\nBody';

    const result = parseFrontmatter(input);

    expect(result.data).toEqual({ sidebar: { order: 1, label: 'Test' } });
  });

  it('should handle frontmatter with array values', () => {
    const input = '---\ntags:\n  - one\n  - two\n---\nBody';

    const result = parseFrontmatter(input);

    expect(result.data).toEqual({ tags: ['one', 'two'] });
  });

  it('should handle content-only (no frontmatter delimiters)', () => {
    const input = '# Heading\n\nParagraph text';

    const result = parseFrontmatter(input);

    expect(result.hasFrontmatter).toBe(false);
    expect(result.content).toBe(input);
  });

  it('should handle malformed YAML gracefully', () => {
    const input = '---\n: invalid: yaml:\n---\nContent';

    const result = parseFrontmatter(input);

    expect(result.hasFrontmatter).toBe(false);
    expect(result.data).toEqual({});
    expect(result.content).toBe(input);
  });
});

// ─── serializeFrontmatter ────────────────────────────────────────────

describe('serializeFrontmatter', () => {
  it('should serialize simple key-value pairs', () => {
    const result = serializeFrontmatter({ title: 'Test', draft: false });

    expect(result).toContain('title: Test');
    expect(result).toContain('draft: false');
  });

  it('should return empty string for empty object', () => {
    expect(serializeFrontmatter({})).toBe('');
  });

  it('should return empty string for null-ish input', () => {
    expect(serializeFrontmatter(null as any)).toBe('');
  });

  it('should serialize nested objects', () => {
    const result = serializeFrontmatter({ sidebar: { order: 1 } });

    expect(result).toContain('sidebar:');
    expect(result).toContain('order: 1');
  });

  it('should serialize arrays', () => {
    const result = serializeFrontmatter({ tags: ['a', 'b'] });

    expect(result).toContain('- a');
    expect(result).toContain('- b');
  });
});

// ─── deepMerge ───────────────────────────────────────────────────────

describe('deepMerge', () => {
  it('should merge flat objects (preserveExisting=true)', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 99, c: 3 };

    const result = deepMerge(target, source, true);

    expect(result).toEqual({ a: 1, b: 2, c: 3 }); // b preserved
  });

  it('should merge flat objects (preserveExisting=false)', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 99, c: 3 };

    const result = deepMerge(target, source, false);

    expect(result).toEqual({ a: 1, b: 99, c: 3 }); // b overwritten
  });

  it('should deep-merge nested objects (preserveExisting=true)', () => {
    const target = { sidebar: { order: 1, label: 'Old' } };
    const source = { sidebar: { hidden: true, label: 'New' } };

    const result = deepMerge(target, source, true);

    expect(result).toEqual({
      sidebar: { order: 1, label: 'Old', hidden: true },
    });
  });

  it('should deep-merge nested objects (preserveExisting=false)', () => {
    const target = { sidebar: { order: 1, label: 'Old' } };
    const source = { sidebar: { hidden: true, label: 'New' } };

    const result = deepMerge(target, source, false);

    expect(result).toEqual({
      sidebar: { order: 1, label: 'New', hidden: true },
    });
  });

  it('should handle arrays as leaf values (not merged)', () => {
    const target = { tags: ['a'] };
    const source = { tags: ['b', 'c'] };

    const result = deepMerge(target, source, false);

    expect(result).toEqual({ tags: ['b', 'c'] }); // replaced, not concatenated
  });

  it('should handle empty target', () => {
    const result = deepMerge({}, { a: 1 }, true);

    expect(result).toEqual({ a: 1 });
  });

  it('should handle empty source', () => {
    const result = deepMerge({ a: 1 }, {}, true);

    expect(result).toEqual({ a: 1 });
  });

  it('should replace scalar with object when preserveExisting=false', () => {
    const target = { sidebar: 1 };
    const source = { sidebar: { order: 1 } };

    const result = deepMerge(target, source, false);

    expect(result).toEqual({ sidebar: { order: 1 } });
  });

  it('should replace object with scalar when preserveExisting=false', () => {
    const target = { sidebar: { order: 1 } };
    const source = { sidebar: 99 };

    const result = deepMerge(target, source, false);

    expect(result).toEqual({ sidebar: 99 });
  });

  it('should not mutate the target object', () => {
    const target = { a: 1 };
    deepMerge(target, { b: 2 }, true);

    expect(target).toEqual({ a: 1 }); // unchanged
  });
});

// ─── combineFrontmatterAndContent ────────────────────────────────────

describe('combineFrontmatterAndContent', () => {
  it('should combine frontmatter and content', () => {
    const result = combineFrontmatterAndContent({ title: 'Test' }, 'Body');

    expect(result).toMatch(/^---\n/);
    expect(result).toContain('title: Test');
    expect(result).toContain('---\n');
    expect(result).toContain('Body');
  });

  it('should return content only when frontmatter is empty', () => {
    const result = combineFrontmatterAndContent({}, 'Just content');

    expect(result).toBe('Just content');
  });

  it('should preserve leading newline without doubling', () => {
    const result = combineFrontmatterAndContent({ title: 'T' }, '\nBody');

    // Content's leading \n is kept; no extra newline injected
    expect(result).toMatch(/---\nBody$/);
  });
});

// ─── validateStarlightFrontmatter ────────────────────────────────────

describe('validateStarlightFrontmatter', () => {
  it('should validate valid frontmatter', () => {
    const result = validateStarlightFrontmatter({ title: 'Hello' });

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it('should reject missing title', () => {
    const result = validateStarlightFrontmatter({});

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Title is required and must be a string');
  });

  it('should reject non-string title', () => {
    const result = validateStarlightFrontmatter({ title: 123 });

    expect(result.isValid).toBe(false);
  });

  it('should reject invalid template', () => {
    const result = validateStarlightFrontmatter({ title: 'T', template: 'bad' });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Template must be either "doc" or "splash"');
  });

  it.each(['doc', 'splash'] as const)(
    'should accept template "%s"',
    (template) => {
      const result = validateStarlightFrontmatter({ title: 'T', template });

      expect(result.isValid).toBe(true);
    },
  );

  it('should reject non-boolean draft', () => {
    const result = validateStarlightFrontmatter({ title: 'T', draft: 'yes' });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Draft must be a boolean');
  });

  it('should reject non-boolean pagefind', () => {
    const result = validateStarlightFrontmatter({ title: 'T', pagefind: 1 });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Pagefind must be a boolean');
  });
});

// ─── isPlainObject ───────────────────────────────────────────────────

describe('isPlainObject', () => {
  it.each([
    [{ a: 1 }, true],
    [{}, true],
    [[], false],
    [null, false],
    [undefined, false],
    ['string', false],
    [42, false],
    [true, false],
    [new Date(), false],
  ] as const)('should return %s for %s', (value, expected) => {
    expect(isPlainObject(value as any)).toBe(expected);
  });
});
