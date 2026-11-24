import { mkdtempSync, readFileSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  manifestKey,
  readImportManifest,
  versionLabel,
  writeImportManifest,
} from '../../imports/manifest.js';
import type { ImportManifestEntry } from '../../imports/manifest.js';

const stable: ImportManifestEntry = {
  repo: 'algorandfoundation/algokit-utils-ts',
  channel: 'stable',
  tag: 'v9.2.2',
  ref: 'c61f3c8',
  builtAt: '2026-09-03T19:27:47Z',
  importedAt: '2026-11-24T19:47:55.836Z',
};

const unreleased: ImportManifestEntry = {
  repo: 'algorandfoundation/algokit-cli',
  channel: 'main',
  tag: null,
  ref: null,
  builtAt: null,
  importedAt: '2026-03-29T20:43:23.000Z',
};

describe('manifestKey', () => {
  it('matches the content directory of the variant', () => {
    expect(manifestKey('algokit-utils', 'TypeScript', 'latest')).toBe(
      'docs/algokit-utils/typescript/latest',
    );
  });
});

describe('versionLabel', () => {
  it('names the release tag for a stable import', () => {
    expect(versionLabel(stable, 'Latest')).toBe('Latest (v9.2.2)');
  });

  it('never calls an unreleased snapshot "Latest"', () => {
    expect(versionLabel(unreleased, 'Latest')).toBe(
      'Unreleased (main, 2026-03-29)',
    );
  });

  it('prefers the upstream build date for an unreleased snapshot', () => {
    expect(
      versionLabel({ ...unreleased, builtAt: '2026-03-20T00:00:00Z' }, 'Latest'),
    ).toBe('Unreleased (main, 2026-03-20)');
  });

  it('falls back to the configured label when nothing is recorded', () => {
    expect(versionLabel(undefined, 'Latest')).toBe('Latest');
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
    writeImportManifest({ 'docs/b/ts/latest': stable, 'docs/a/py/latest': unreleased }, path);

    expect(Object.keys(JSON.parse(readFileSync(path, 'utf-8')))).toEqual([
      'docs/a/py/latest',
      'docs/b/ts/latest',
    ]);
    expect(readImportManifest(path)).toEqual({
      'docs/a/py/latest': unreleased,
      'docs/b/ts/latest': stable,
    });
  });
});
