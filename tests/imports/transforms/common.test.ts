// tests/imports/transforms/common.test.ts
import { describe, it, expect } from 'vitest';
import { makeContext } from '../../helpers/transform-context.js';
import {
  extractH1Text,
  removeH1WithText,
  matchesPath,
  conditionalTransform,
  overviewOrderTransform,
  convertH1ToTitle,
  removeH1,
  createRemoveContentUpToHeading,
  createRemoveLineContaining,
  createReplace,
  convertH1ToTitleMatch,
  extractH1ToSidebarAndTitle,
} from '../../../imports/transforms/common.js';

// ─── extractH1Text ───────────────────────────────────────────────────

describe('extractH1Text', () => {
  it('should extract H1 text from content', () => {
    const content = '---\ntitle: FM\n---\n# My Heading\n\nBody';

    expect(extractH1Text(content)).toBe('My Heading');
  });

  it('should return null when no H1 exists', () => {
    expect(extractH1Text('## H2 only\n\nBody')).toBeNull();
  });

  it('should extract H1 with inline formatting', () => {
    const content = '# Hello **world**';

    expect(extractH1Text(content)).toBe('Hello **world**');
  });

  it('should extract only the first H1', () => {
    const content = '# First\n# Second';

    expect(extractH1Text(content)).toBe('First');
  });

  it('should handle content without frontmatter', () => {
    expect(extractH1Text('# Heading\nBody')).toBe('Heading');
  });
});

// ─── removeH1WithText ────────────────────────────────────────────────

describe('removeH1WithText', () => {
  it('should remove H1 and return its text', () => {
    const result = removeH1WithText('# Title\n\nBody text');

    expect(result.headingText).toBe('Title');
    expect(result.content).not.toContain('# Title');
    expect(result.content).toContain('Body text');
  });

  it('should return null headingText when no H1 exists', () => {
    const result = removeH1WithText('## Not H1\n\nBody');

    expect(result.headingText).toBeNull();
  });
});

// ─── matchesPath ─────────────────────────────────────────────────────

describe('matchesPath', () => {
  it.each([
    ['**/*.md', 'docs/guide.md', true],
    ['docs/**', 'docs/nested/file.ts', true],
    ['*.md', 'guide.md', true],
    ['*.md', 'nested/guide.md', false],
    ['docs/api/**', 'docs/guides/file.md', false],
  ])('should match pattern "%s" against path "%s" → %s', (pattern, path, expected) => {
    expect(matchesPath(pattern, path)).toBe(expected);
  });
});

// ─── conditionalTransform ────────────────────────────────────────────

describe('conditionalTransform', () => {
  it('should apply transform when string pattern matches', () => {
    const transform = conditionalTransform(
      '**/*.md',
      (content) => content + ' [transformed]',
    );
    const ctx = makeContext({ path: 'docs/guide.md' });

    expect(transform('Hello', ctx)).toBe('Hello [transformed]');
  });

  it('should skip transform when string pattern does not match', () => {
    const transform = conditionalTransform(
      '**/*.md',
      (content) => content + ' [transformed]',
    );
    const ctx = makeContext({ path: 'docs/guide.ts' });

    expect(transform('Hello', ctx)).toBe('Hello');
  });

  it('should apply transform when function predicate returns true', () => {
    const transform = conditionalTransform(
      (path) => path.includes('api'),
      (content) => content + ' [api]',
    );
    const ctx = makeContext({ path: 'docs/api/ref.md' });

    expect(transform('Hello', ctx)).toBe('Hello [api]');
  });

  it('should skip transform when function predicate returns false', () => {
    const transform = conditionalTransform(
      (path) => path.includes('api'),
      (content) => content + ' [api]',
    );
    const ctx = makeContext({ path: 'docs/guides/intro.md' });

    expect(transform('Hello', ctx)).toBe('Hello');
  });
});

// ─── overviewOrderTransform ──────────────────────────────────────────

describe('overviewOrderTransform', () => {
  it.each([
    'docs/overview.md',
    'docs/readme.md',
    'docs/index.md',
    'docs/nested/OVERVIEW.md',
    'docs/nested/README.md',
    'docs/nested/INDEX.md',
  ])('should set sidebar.order: 0 for "%s"', (path) => {
    const ctx = makeContext({ path });
    const content = '---\ntitle: Test\n---\nBody';

    const result = overviewOrderTransform(content, ctx);

    expect(result).toContain('order: 0');
  });

  it('should not modify non-overview files', () => {
    const ctx = makeContext({ path: 'docs/guide.md' });
    const content = '---\ntitle: Test\n---\nBody';

    expect(overviewOrderTransform(content, ctx)).toBe(content);
  });
});

// ─── convertH1ToTitle ────────────────────────────────────────────────

describe('convertH1ToTitle', () => {
  it('should convert H1 to frontmatter title', () => {
    const ctx = makeContext();
    const content = '# My Title\n\nBody text';

    const result = convertH1ToTitle(content, ctx);

    expect(result).toContain('title: My Title');
    expect(result).not.toContain('# My Title');
    expect(result).toContain('Body text');
  });

  it('should not override existing title', () => {
    const ctx = makeContext();
    const content = '---\ntitle: Existing\n---\n# H1 Title\n\nBody';

    const result = convertH1ToTitle(content, ctx);

    expect(result).toContain('title: Existing');
  });

  it('should return unchanged when no H1 exists', () => {
    const ctx = makeContext();
    const content = '## H2 only\n\nBody';

    expect(convertH1ToTitle(content, ctx)).toBe(content);
  });
});

// ─── removeH1 ────────────────────────────────────────────────────────

describe('removeH1', () => {
  it('should remove H1 from content', () => {
    const ctx = makeContext();
    const content = '---\ntitle: T\n---\n# Heading\n\nBody';

    const result = removeH1(content, ctx);

    expect(result).not.toContain('# Heading');
    expect(result).toContain('Body');
    expect(result).toContain('title: T');
  });
});

// ─── convertH1ToTitleMatch ───────────────────────────────────────────

describe('convertH1ToTitleMatch', () => {
  it('should extract title from H1 using regex pattern', () => {
    const transform = convertH1ToTitleMatch(/^(.+?)\s*-\s*.+$/);
    const ctx = makeContext();
    const content = '# MyLib - The Library\n\nBody';

    const result = transform(content, ctx);

    expect(result).toContain('title: MyLib');
    expect(result).not.toContain('# MyLib');
  });

  it('should fallback to full H1 text when pattern does not match', () => {
    const transform = convertH1ToTitleMatch(/^NOPE (.+)$/);
    const ctx = makeContext();
    const content = '# Full Title\n\nBody';

    const result = transform(content, ctx);

    expect(result).toContain('title: Full Title');
  });

  it('should return unchanged when fallback is false and pattern does not match', () => {
    const transform = convertH1ToTitleMatch(/^NOPE (.+)$/, 1, false);
    const ctx = makeContext();
    const content = '# Full Title\n\nBody';

    expect(transform(content, ctx)).toBe(content);
  });

  it('should not override existing title', () => {
    const transform = convertH1ToTitleMatch(/^(.+)$/);
    const ctx = makeContext();
    const content = '---\ntitle: Existing\n---\n# H1\n\nBody';

    const result = transform(content, ctx);

    expect(result).toContain('title: Existing');
  });
});

// ─── extractH1ToSidebarAndTitle ──────────────────────────────────────

describe('extractH1ToSidebarAndTitle', () => {
  it('should set both title and sidebar.label from H1', () => {
    const transform = extractH1ToSidebarAndTitle();
    const ctx = makeContext();
    const content = '# Page Title\n\nBody';

    const result = transform(content, ctx);

    expect(result).toContain('title: Page Title');
    expect(result).toContain('label: Page Title');
    expect(result).not.toContain('# Page Title');
  });

  it('should apply different patterns for title and sidebar', () => {
    const transform = extractH1ToSidebarAndTitle(
      /^(.+?)\s*-\s*.+$/,   // title: first part before dash
      /^.+?\s*-\s*(.+)$/,   // sidebar: part after dash
    );
    const ctx = makeContext();
    const content = '# MyLib - Quick Start\n\nBody';

    const result = transform(content, ctx);

    expect(result).toContain('title: MyLib');
    expect(result).toContain('label: Quick Start');
  });

  it('should return unchanged when no H1 exists', () => {
    const transform = extractH1ToSidebarAndTitle();
    const ctx = makeContext();
    const content = '## H2 only\n\nBody';

    expect(transform(content, ctx)).toBe(content);
  });
});

// ─── createRemoveContentUpToHeading ──────────────────────────────────

describe('createRemoveContentUpToHeading', () => {
  it('should remove content up to and including the matched heading', () => {
    const transform = createRemoveContentUpToHeading(/^## Table of Contents$/m);
    const ctx = makeContext();
    const content = '---\ntitle: T\n---\nPreamble\n## Table of Contents\nKeep this';

    const result = transform(content, ctx);

    expect(result).not.toContain('Preamble');
    expect(result).not.toContain('Table of Contents');
    expect(result).toContain('Keep this');
  });

  it('should return unchanged when heading is not found', () => {
    const transform = createRemoveContentUpToHeading(/^## Missing$/m);
    const ctx = makeContext();
    const content = '---\ntitle: T\n---\nAll content here';

    expect(transform(content, ctx)).toBe(content);
  });
});

// ─── createRemoveLineContaining ──────────────────────────────────────

describe('createRemoveLineContaining', () => {
  it('should remove lines containing the search text', () => {
    const transform = createRemoveLineContaining('REMOVE_ME');
    const ctx = makeContext();
    const content = '---\ntitle: T\n---\nKeep\nREMOVE_ME line\nAlso keep';

    const result = transform(content, ctx);

    expect(result).not.toContain('REMOVE_ME');
    expect(result).toContain('Keep');
    expect(result).toContain('Also keep');
  });

  it('should return unchanged when text is not found', () => {
    const transform = createRemoveLineContaining('MISSING');
    const ctx = makeContext();
    const content = '---\ntitle: T\n---\nAll content here';

    expect(transform(content, ctx)).toBe(content);
  });
});

// ─── createReplace ───────────────────────────────────────────────────

describe('createReplace', () => {
  it('should replace string match in content body', () => {
    const transform = createReplace('old', 'new');
    const ctx = makeContext();
    const content = '---\ntitle: T\n---\nThis is old text';

    expect(transform(content, ctx)).toContain('This is new text');
  });

  it('should replace regex match in content body', () => {
    const transform = createReplace(/v\d+\.\d+/g, 'vX.Y');
    const ctx = makeContext();
    const content = '---\ntitle: T\n---\nVersion v1.2 and v3.4';

    const result = transform(content, ctx);

    expect(result).toContain('Version vX.Y and vX.Y');
  });
});
