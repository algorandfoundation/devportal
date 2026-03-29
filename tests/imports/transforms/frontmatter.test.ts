import { describe, it, expect } from 'vitest';
import { makeContext } from '../../helpers/transform-context.js';
import {
  createFrontmatterTransform,
  createTitleTransform,
  createSourceInfoTransform,
  createPathBasedFrontmatterTransform,
  createSidebarTransform,
  createDraftTransform,
  composeFrontmatterTransforms,
  stripFrontmatterKeys,
  deriveTitleFromPath,
} from '../../../imports/transforms/frontmatter.js';
import { parseFrontmatter } from '../../../imports/transforms/yaml-utils.js';

// ─── deriveTitleFromPath ─────────────────────────────────────────────

describe('deriveTitleFromPath', () => {
  it.each([
    ['docs/getting-started.md', 'Getting Started'],
    ['docs/my_guide.md', 'My Guide'],
    ['docs/nested/deep/file-name.mdx', 'File Name'],
    ['single.md', 'Single'],
    ['docs/ALLCAPS.md', 'Allcaps'],
  ])('should derive title from path "%s" → "%s"', (path, expected) => {
    expect(deriveTitleFromPath(path)).toBe(expected);
  });
});

// ─── createFrontmatterTransform ──────────────────────────────────────

describe('createFrontmatterTransform', () => {
  const ctx = makeContext();

  it('should merge frontmatter by default', () => {
    const transform = createFrontmatterTransform({
      frontmatter: { description: 'New' },
    });
    const content = '---\ntitle: Existing\n---\nBody';

    const result = transform(content, ctx);
    const parsed = parseFrontmatter(result);

    expect(parsed.data.title).toBe('Existing');
    expect(parsed.data.description).toBe('New');
  });

  it('should replace frontmatter in replace mode', () => {
    const transform = createFrontmatterTransform({
      frontmatter: { title: 'Replaced' },
      mode: 'replace',
    });
    const content = '---\ntitle: Old\ndescription: Gone\n---\nBody';

    const result = transform(content, ctx);
    const parsed = parseFrontmatter(result);

    expect(parsed.data.title).toBe('Replaced');
    expect(parsed.data.description).toBeUndefined();
  });

  it('should add frontmatter only when none exists (add mode)', () => {
    const transform = createFrontmatterTransform({
      frontmatter: { title: 'Added' },
      mode: 'add',
    });

    // With existing frontmatter — should not change
    const withFm = '---\ntitle: Existing\n---\nBody';
    expect(transform(withFm, ctx)).toBe(withFm);

    // Without frontmatter — should add
    const withoutFm = 'Just body content';
    const result = transform(withoutFm, ctx);
    expect(parseFrontmatter(result).data.title).toBe('Added');
  });

  it('should preserve existing values when preserveExisting=true', () => {
    const transform = createFrontmatterTransform({
      frontmatter: { title: 'New', extra: 'Added' },
      mode: 'merge',
      preserveExisting: true,
    });
    const content = '---\ntitle: Old\n---\nBody';

    const result = transform(content, ctx);
    const parsed = parseFrontmatter(result);

    expect(parsed.data.title).toBe('Old'); // preserved
    expect(parsed.data.extra).toBe('Added'); // new key added
  });
});

// ─── composeFrontmatterTransforms ────────────────────────────────────

describe('composeFrontmatterTransforms', () => {
  const ctx = makeContext();

  it('should apply transforms in order', () => {
    const addTitle = createFrontmatterTransform({
      frontmatter: { title: 'Title' },
    });
    const addDraft = createFrontmatterTransform({
      frontmatter: { draft: true },
    });
    const composed = composeFrontmatterTransforms(addTitle, addDraft);

    const result = composed('Body content', ctx);
    const parsed = parseFrontmatter(result);

    expect(parsed.data.title).toBe('Title');
    expect(parsed.data.draft).toBe(true);
  });

  it('should handle zero transforms (identity)', () => {
    const composed = composeFrontmatterTransforms();
    const content = '---\ntitle: T\n---\nBody';

    expect(composed(content, ctx)).toBe(content);
  });

  it('should respect ordering (later transforms can override)', () => {
    const first = createFrontmatterTransform({
      frontmatter: { title: 'First' },
      preserveExisting: false,
    });
    const second = createFrontmatterTransform({
      frontmatter: { title: 'Second' },
      preserveExisting: false,
    });
    const composed = composeFrontmatterTransforms(first, second);

    const result = composed('Body', ctx);

    expect(parseFrontmatter(result).data.title).toBe('Second');
  });
});

// ─── createTitleTransform ────────────────────────────────────────────

describe('createTitleTransform', () => {
  it('should derive title from path when no custom title given', () => {
    const transform = createTitleTransform();
    const ctx = makeContext({ path: 'docs/getting-started.md' });

    const result = transform('Body', ctx);

    expect(parseFrontmatter(result).data.title).toBe('Getting Started');
  });

  it('should use custom title when provided', () => {
    const transform = createTitleTransform({ title: 'Custom' });
    const ctx = makeContext();

    const result = transform('Body', ctx);

    expect(parseFrontmatter(result).data.title).toBe('Custom');
  });

  it('should not override existing title by default', () => {
    const transform = createTitleTransform({ title: 'New' });
    const ctx = makeContext();
    const content = '---\ntitle: Existing\n---\nBody';

    expect(parseFrontmatter(transform(content, ctx)).data.title).toBe('Existing');
  });

  it('should override existing title when override=true', () => {
    const transform = createTitleTransform({ title: 'Override', override: true });
    const ctx = makeContext();
    const content = '---\ntitle: Old\n---\nBody';

    expect(parseFrontmatter(transform(content, ctx)).data.title).toBe('Override');
  });
});

// ─── createSourceInfoTransform ───────────────────────────────────────

describe('createSourceInfoTransform', () => {
  it('should add source metadata to frontmatter', () => {
    const transform = createSourceInfoTransform();
    const ctx = makeContext({ owner: 'algorand', repo: 'docs', ref: 'v2' });

    const result = transform('---\ntitle: T\n---\nBody', ctx);
    const parsed = parseFrontmatter(result);

    expect(parsed.data.source).toMatchObject({
      owner: 'algorand',
      repo: 'docs',
      ref: 'v2',
    });
    const source = parsed.data.source as Record<string, unknown>;
    expect(typeof source.importedAt).toBe('string');
    expect(parsed.data.description).toContain('algorand/docs');
  });
});

// ─── createPathBasedFrontmatterTransform ─────────────────────────────

describe('createPathBasedFrontmatterTransform', () => {
  it('should apply transform only when path matches', () => {
    const transform = createPathBasedFrontmatterTransform('docs/special.md', {
      frontmatter: { draft: true },
    });

    const matchCtx = makeContext({ path: 'docs/special.md' });
    const noMatchCtx = makeContext({ path: 'docs/other.md' });

    expect(parseFrontmatter(transform('Body', matchCtx)).data.draft).toBe(true);
    expect(transform('Body', noMatchCtx)).toBe('Body');
  });
});

// ─── createSidebarTransform ──────────────────────────────────────────

describe('createSidebarTransform', () => {
  it('should add sidebar config to frontmatter', () => {
    const transform = createSidebarTransform({ order: 5, hidden: true });
    const ctx = makeContext();

    const result = transform('---\ntitle: T\n---\nBody', ctx);
    const parsed = parseFrontmatter(result);

    expect(parsed.data.sidebar).toMatchObject({ order: 5, hidden: true });
  });
});

// ─── createDraftTransform ────────────────────────────────────────────

describe('createDraftTransform', () => {
  it('should set draft: true by default', () => {
    const transform = createDraftTransform();
    const ctx = makeContext();

    const result = transform('---\ntitle: T\n---\nBody', ctx);

    expect(parseFrontmatter(result).data.draft).toBe(true);
  });

  it('should set draft: false when specified', () => {
    const transform = createDraftTransform(false);
    const ctx = makeContext();

    const result = transform('---\ntitle: T\n---\nBody', ctx);

    expect(parseFrontmatter(result).data.draft).toBe(false);
  });
});

// ─── stripFrontmatterKeys ────────────────────────────────────────────

describe('stripFrontmatterKeys', () => {
  it('should remove specified keys from frontmatter', () => {
    const transform = stripFrontmatterKeys(['hero', 'template']);

    const result = transform(
      '---\ntitle: T\nhero: big\ntemplate: splash\n---\nBody',
      '',
    );
    const parsed = parseFrontmatter(result);

    expect(parsed.data.title).toBe('T');
    expect(parsed.data.hero).toBeUndefined();
    expect(parsed.data.template).toBeUndefined();
  });

  it('should be a no-op when keys are not present', () => {
    const transform = stripFrontmatterKeys(['missing']);
    const content = '---\ntitle: T\n---\nBody';

    expect(transform(content, '')).toBe(content);
  });

  it('should return unchanged when no frontmatter exists', () => {
    const transform = stripFrontmatterKeys(['title']);
    const content = 'Just content';

    expect(transform(content, '')).toBe(content);
  });

  it('should be idempotent', () => {
    const transform = stripFrontmatterKeys(['hero']);
    const content = '---\ntitle: T\nhero: splash\n---\nBody';

    const once = transform(content, '');
    const twice = transform(once, '');

    expect(twice).toBe(once);
  });
});
