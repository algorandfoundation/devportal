import { describe, it, expect } from 'vitest';
import { slugExists, walkMdFiles, resolveRelativePath, buildFileIndex, findBestMatch } from '../../src/utils/fs.js';
import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

function makeTmpDir(): string {
  return mkdtempSync(join(tmpdir(), 'devportal-docs-test-'));
}

describe('resolveRelativePath', () => {
  it('resolves simple relative path', () => {
    expect(resolveRelativePath('guides', 'intro')).toBe('guides/intro');
  });

  it('resolves .. components', () => {
    expect(resolveRelativePath('guides/advanced', '../intro')).toBe('guides/intro');
  });

  it('resolves from current directory (.)', () => {
    expect(resolveRelativePath('.', 'guides/intro')).toBe('guides/intro');
  });

  it('collapses multiple .. components', () => {
    expect(resolveRelativePath('a/b/c', '../../d')).toBe('a/d');
  });
});

describe('slugExists', () => {
  it('finds .md file', () => {
    const dir = makeTmpDir();
    writeFileSync(join(dir, 'intro.md'), '# Intro');
    expect(slugExists(dir, 'intro')).toBe(true);
  });

  it('finds .mdx file', () => {
    const dir = makeTmpDir();
    writeFileSync(join(dir, 'intro.mdx'), '# Intro');
    expect(slugExists(dir, 'intro')).toBe(true);
  });

  it('finds index.md in directory', () => {
    const dir = makeTmpDir();
    mkdirSync(join(dir, 'guides'));
    writeFileSync(join(dir, 'guides', 'index.md'), '# Guides');
    expect(slugExists(dir, 'guides')).toBe(true);
  });

  it('returns false for nonexistent slug', () => {
    const dir = makeTmpDir();
    expect(slugExists(dir, 'nope')).toBe(false);
  });

  it('returns false for empty slug', () => {
    const dir = makeTmpDir();
    expect(slugExists(dir, '')).toBe(false);
  });
});

describe('walkMdFiles', () => {
  it('finds .md and .mdx files recursively', () => {
    const dir = makeTmpDir();
    mkdirSync(join(dir, 'sub'), { recursive: true });
    writeFileSync(join(dir, 'a.md'), '');
    writeFileSync(join(dir, 'b.mdx'), '');
    writeFileSync(join(dir, 'sub', 'c.md'), '');
    writeFileSync(join(dir, 'skip.txt'), '');
    const files = walkMdFiles(dir);
    expect(files).toHaveLength(3);
    expect(files.every((f) => /\.mdx?$/.test(f))).toBe(true);
  });

  it('returns empty array for nonexistent directory', () => {
    expect(walkMdFiles('/nonexistent')).toEqual([]);
  });
});

describe('buildFileIndex', () => {
  it('indexes files by basename', () => {
    const dir = makeTmpDir();
    mkdirSync(join(dir, 'guides'), { recursive: true });
    writeFileSync(join(dir, 'guides', 'intro.md'), '');
    writeFileSync(join(dir, 'guides', 'setup.mdx'), '');
    const index = buildFileIndex(dir);
    expect(index.get('intro')).toEqual(['guides/intro']);
    expect(index.get('setup')).toEqual(['guides/setup']);
  });

  it('groups duplicates under same key', () => {
    const dir = makeTmpDir();
    mkdirSync(join(dir, 'a'), { recursive: true });
    mkdirSync(join(dir, 'b'), { recursive: true });
    writeFileSync(join(dir, 'a', 'page.md'), '');
    writeFileSync(join(dir, 'b', 'page.md'), '');
    const index = buildFileIndex(dir);
    expect(index.get('page')).toHaveLength(2);
  });
});

describe('findBestMatch', () => {
  it('returns single candidate directly', () => {
    const index = new Map([['intro', ['guides/intro']]]);
    expect(findBestMatch(index, 'some/intro')).toBe('guides/intro');
  });

  it('scores by trailing path overlap', () => {
    const index = new Map([
      ['page', ['a/b/page', 'x/y/page']],
    ]);
    expect(findBestMatch(index, 'x/y/page')).toBe('x/y/page');
  });

  it('returns null for no matches', () => {
    const index = new Map();
    expect(findBestMatch(index, 'missing')).toBeNull();
  });

  it('returns null for empty target', () => {
    const index = new Map();
    expect(findBestMatch(index, '')).toBeNull();
  });
});
