import { mkdtempSync, readFileSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  manifestKey,
  readImportManifest,
  writeImportManifest,
} from '../../imports/manifest.js';
import type { ImportManifestEntry } from '../../imports/manifest.js';

const entry = (repo: string): ImportManifestEntry => ({
  repo,
  releaseTag: 'docs-latest',
  ref: 'c61f3c8c0284d843932692144a6d34b229c0382c',
  builtAt: '2026-11-23T02:10:00Z',
  assetUpdatedAt: '2026-11-23T02:11:30Z',
  importedAt: '2026-11-24T19:47:55.836Z',
});

describe('manifestKey', () => {
  it('matches the content directory of the variant', () => {
    expect(manifestKey('algokit-utils', 'TypeScript', 'latest')).toBe(
      'docs/algokit-utils/typescript/latest',
    );
  });
});

describe('read/writeImportManifest', () => {
  let dir: string;
  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), 'manifest-test-'));
  });
  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  it('returns an empty manifest when the file does not exist', () => {
    expect(readImportManifest(join(dir, 'missing.json'))).toEqual({});
  });

  it('round-trips and writes keys in a stable order', () => {
    const path = join(dir, 'manifest.json');
    const b = entry('algorandfoundation/b');
    const a = entry('algorandfoundation/a');
    writeImportManifest({ 'docs/b/ts/latest': b, 'docs/a/py/latest': a }, path);

    expect(Object.keys(JSON.parse(readFileSync(path, 'utf-8')))).toEqual([
      'docs/a/py/latest',
      'docs/b/ts/latest',
    ]);
    expect(readImportManifest(path)).toEqual({
      'docs/a/py/latest': a,
      'docs/b/ts/latest': b,
    });
  });
});
