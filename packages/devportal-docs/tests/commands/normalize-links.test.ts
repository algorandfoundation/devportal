import { describe, it, expect } from 'vitest';
import {
  normalizeLinksInContent,
  lowercaseContentPaths,
  rewriteReadmeLinks,
  stripDeadLinks,
  targetName,
} from '../../src/commands/normalize-links.js';
import { buildFileIndex } from '../../src/utils/fs.js';
import { mkdtempSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

function makeTmpDir(): string {
  return mkdtempSync(join(tmpdir(), 'devportal-docs-test-'));
}

describe('targetName', () => {
  it('lowercases filenames', () => {
    expect(targetName('AlgorandClient.md')).toBe('algorandclient.md');
  });

  it('renames readme.md to index.md', () => {
    expect(targetName('README.md')).toBe('index.md');
  });

  it('renames readme.mdx to index.mdx', () => {
    expect(targetName('Readme.mdx')).toBe('index.mdx');
  });

  it('preserves already-lowercase names', () => {
    expect(targetName('intro.md')).toBe('intro.md');
  });
});

describe('lowercaseContentPaths', () => {
  it('renames PascalCase files to lowercase', () => {
    const dir = makeTmpDir();
    writeFileSync(join(dir, 'AlgorandClient.md'), '# Test');
    const count = lowercaseContentPaths(dir);
    expect(count).toBe(1);
    expect(readdirSync(dir)).toContain('algorandclient.md');
  });

  it('renames README.md to index.md', () => {
    const dir = makeTmpDir();
    writeFileSync(join(dir, 'README.md'), '# Readme');
    lowercaseContentPaths(dir);
    expect(readdirSync(dir)).toContain('index.md');
  });

  it('handles nested directories depth-first', () => {
    const dir = makeTmpDir();
    mkdirSync(join(dir, 'SubDir'));
    writeFileSync(join(dir, 'SubDir', 'File.md'), '');
    lowercaseContentPaths(dir);
    expect(readdirSync(dir)).toContain('subdir');
    expect(readdirSync(join(dir, 'subdir'))).toContain('file.md');
  });

  it('returns 0 when all paths already lowercase', () => {
    const dir = makeTmpDir();
    writeFileSync(join(dir, 'already-lower.md'), '');
    expect(lowercaseContentPaths(dir)).toBe(0);
  });
});

describe('normalizeLinksInContent', () => {
  it('converts relative link to absolute', () => {
    const dir = makeTmpDir();
    mkdirSync(join(dir, 'guides'), { recursive: true });
    writeFileSync(join(dir, 'guides', 'intro.md'), '');
    const fileIndex = buildFileIndex(dir);

    const result = normalizeLinksInContent('[link](intro.md)', {
      fileDir: 'guides',
      contentRoot: dir,
      siteBase: '/algokit-utils-ts',
      useFallback: false,
      fileIndex,
      filePath: 'guides/page.md',
    });

    expect(result.content).toBe('[link](/algokit-utils-ts/guides/intro/)');
    expect(result.changed).toBe(true);
  });

  it('skips absolute URLs', () => {
    const result = normalizeLinksInContent('[link](https://example.com)', {
      fileDir: 'guides',
      contentRoot: '/tmp',
      siteBase: '/base',
      useFallback: false,
      fileIndex: new Map(),
      filePath: 'guides/page.md',
    });
    expect(result.content).toBe('[link](https://example.com)');
    expect(result.changed).toBe(false);
  });

  it('skips links inside code blocks', () => {
    const content = '```\n[link](relative.md)\n```';
    const result = normalizeLinksInContent(content, {
      fileDir: '.',
      contentRoot: '/tmp',
      siteBase: '/base',
      useFallback: false,
      fileIndex: new Map(),
      filePath: 'page.md',
    });
    expect(result.content).toBe(content);
  });

  it('skips links inside inline code', () => {
    const content = 'Use `[link](relative.md)` in your code';
    const result = normalizeLinksInContent(content, {
      fileDir: '.',
      contentRoot: '/tmp',
      siteBase: '/base',
      useFallback: false,
      fileIndex: new Map(),
      filePath: 'page.md',
    });
    expect(result.content).toBe(content);
  });

  it('preserves anchor fragments', () => {
    const dir = makeTmpDir();
    mkdirSync(join(dir, 'guides'), { recursive: true });
    writeFileSync(join(dir, 'guides', 'intro.md'), '');
    const fileIndex = buildFileIndex(dir);

    const result = normalizeLinksInContent('[link](intro.md#section)', {
      fileDir: 'guides',
      contentRoot: dir,
      siteBase: '/base',
      useFallback: false,
      fileIndex,
      filePath: 'guides/page.md',
    });
    expect(result.content).toBe('[link](/base/guides/intro/#section)');
  });

  it('skips already-absolute links (starting with /)', () => {
    const result = normalizeLinksInContent('[link](/absolute/path)', {
      fileDir: 'guides',
      contentRoot: '/tmp',
      siteBase: '/base',
      useFallback: false,
      fileIndex: new Map(),
      filePath: 'guides/page.md',
    });
    expect(result.content).toBe('[link](/absolute/path)');
    expect(result.changed).toBe(false);
  });

  it('uses fallback resolution when enabled', () => {
    const dir = makeTmpDir();
    mkdirSync(join(dir, 'guides', 'deep'), { recursive: true });
    writeFileSync(join(dir, 'guides', 'deep', 'target.md'), '');
    const fileIndex = buildFileIndex(dir);

    const result = normalizeLinksInContent('[link](target.md)', {
      fileDir: 'other',
      contentRoot: dir,
      siteBase: '/base',
      useFallback: true,
      fileIndex,
      filePath: 'other/page.md',
    });
    expect(result.content).toBe('[link](/base/guides/deep/target/)');
  });
});

describe('rewriteReadmeLinks', () => {
  it('rewrites /readme/ to /', () => {
    expect(rewriteReadmeLinks('[link](/base/readme/)')).toBe('[link](/base/)');
  });

  it('rewrites mid-path /readme/', () => {
    expect(rewriteReadmeLinks('[link](/base/module/readme/)')).toBe(
      '[link](/base/module/)',
    );
  });

  it('leaves non-readme links alone', () => {
    expect(rewriteReadmeLinks('[link](/base/page/)')).toBe('[link](/base/page/)');
  });
});

describe('stripDeadLinks', () => {
  it('strips links to nonexistent content', () => {
    const dir = makeTmpDir();
    const result = stripDeadLinks(
      '[text](/base/missing/)',
      dir,
      '/base',
    );
    expect(result).toBe('text');
  });

  it('preserves links to existing content', () => {
    const dir = makeTmpDir();
    writeFileSync(join(dir, 'page.md'), '');
    const result = stripDeadLinks('[text](/base/page/)', dir, '/base');
    expect(result).toBe('[text](/base/page/)');
  });

  it('ignores external links', () => {
    const dir = makeTmpDir();
    const result = stripDeadLinks(
      '[text](https://example.com)',
      dir,
      '/base',
    );
    expect(result).toBe('[text](https://example.com)');
  });

  it('ignores links outside the site base', () => {
    const dir = makeTmpDir();
    const result = stripDeadLinks(
      '[text](/other-base/page/)',
      dir,
      '/base',
    );
    expect(result).toBe('[text](/other-base/page/)');
  });
});
