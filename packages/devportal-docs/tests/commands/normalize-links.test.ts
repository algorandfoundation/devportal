import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  normalizeLinksInContent,
  lowercaseContentPaths,
  rewriteReadmeLinks,
  stripDeadLinks,
  targetName,
  run,
} from '../../src/commands/normalize-links.js';
import { buildFileIndex } from '../../src/utils/fs.js';
import { mkdtempSync, writeFileSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
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

describe('run (integration)', () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

  afterEach(() => {
    logSpy.mockClear();
    warnSpy.mockClear();
    errorSpy.mockClear();
  });

  function callRun(args: string[], docsDir: string): boolean {
    try {
      run(args, docsDir);
      return true;
    } catch {
      return false;
    }
  }

  function makeContentDir(): string {
    const docsDir = makeTmpDir();
    writeFileSync(
      join(docsDir, 'astro.config.mjs'),
      `export default { base: '/test-lib' };`,
    );
    const contentRoot = join(docsDir, 'src', 'content', 'docs');
    mkdirSync(join(contentRoot, 'guides'), { recursive: true });
    return docsDir;
  }

  it('normalizes links and lowercases paths in content files', () => {
    const docsDir = makeContentDir();
    const contentRoot = join(docsDir, 'src', 'content', 'docs');

    writeFileSync(join(contentRoot, 'guides', 'AlgorandClient.md'), '# Client');
    writeFileSync(join(contentRoot, 'guides', 'intro.md'), '# Intro');
    writeFileSync(
      join(contentRoot, 'guides', 'getting-started.md'),
      'See [intro](intro.md) for details.',
    );

    expect(callRun([], docsDir)).toBe(true);

    // Lowercasing worked
    const files = readdirSync(join(contentRoot, 'guides'));
    expect(files).toContain('algorandclient.md');
    // Link normalization worked
    const updated = readFileSync(join(contentRoot, 'guides', 'getting-started.md'), 'utf-8');
    expect(updated).toContain('/test-lib/guides/intro/');
  });

  it('exits on unresolvable links', () => {
    const docsDir = makeContentDir();
    const contentRoot = join(docsDir, 'src', 'content', 'docs');

    writeFileSync(
      join(contentRoot, 'guides', 'page.md'),
      'See [missing](totally-nonexistent-page.md) for info.',
    );

    expect(callRun([], docsDir)).toBe(false);
  });
});
