import { describe, expect, it } from 'vitest';
import {
  GRACE_DAYS,
  evaluate,
  evaluateBranch,
  listVariants,
} from '../../scripts/check-freshness.js';
import type { ImportManifest } from '../../imports/manifest.js';

const now = new Date('2026-11-24T00:00:00Z');
const daysAgo = (n: number) =>
  new Date(now.getTime() - n * 86_400_000).toISOString();

describe('evaluate (release bundles)', () => {
  const variant = {
    key: 'docs/mylib/typescript/latest',
    repo: 'algorandfoundation/mylib',
    releaseTag: 'docs-latest',
  };
  const OLD_BUILD = '2026-03-28T02:00:00Z';
  const NEW_BUILD = '2026-11-23T02:00:00Z';

  const importedOn = (importedAt: string): ImportManifest => ({
    [variant.key]: {
      repo: variant.repo,
      releaseTag: 'docs-latest',
      ref: null,
      builtAt: null,
      assetUpdatedAt: OLD_BUILD,
      importedAt,
    },
  });

  it('is ok when the imported bundle is the one upstream still publishes', () => {
    const f = evaluate(variant, importedOn(daysAgo(200)), OLD_BUILD, now);
    expect(f.level).toBe('ok');
  });

  it('tolerates a nightly rebuild since a recent import', () => {
    const f = evaluate(variant, importedOn(daysAgo(GRACE_DAYS - 1)), NEW_BUILD, now);
    expect(f.level).toBe('ok');
  });

  it('is stale when upstream has rebuilt and the import is older than the grace period', () => {
    const f = evaluate(variant, importedOn(daysAgo(GRACE_DAYS + 1)), NEW_BUILD, now);
    expect(f.level).toBe('stale');
    expect(f.message).toContain('2026-11-23');
  });

  it('is stale when a variant has never been recorded', () => {
    expect(evaluate(variant, {}, NEW_BUILD, now).level).toBe('stale');
  });
});

describe('evaluateBranch (branch imports)', () => {
  const key = 'algorandfoundation/arcs@devportal';

  it('is ok when the imported commit is the branch head', () => {
    const f = evaluateBranch(key, { lastCommitSha: 'aaa1111', lastImported: daysAgo(200) }, 'aaa1111', now);
    expect(f.level).toBe('ok');
  });

  it('tolerates upstream moving within the grace period', () => {
    const f = evaluateBranch(key, { lastCommitSha: 'aaa1111', lastImported: daysAgo(GRACE_DAYS - 1) }, 'bbb2222', now);
    expect(f.level).toBe('ok');
  });

  it('is stale when upstream moved and the import is older than the grace period', () => {
    const f = evaluateBranch(key, { lastCommitSha: 'aaa1111', lastImported: daysAgo(GRACE_DAYS + 1) }, 'bbb2222', now);
    expect(f.level).toBe('stale');
  });

  it('is stale when the source was never imported', () => {
    expect(evaluateBranch(key, undefined, 'bbb2222', now).level).toBe('stale');
  });
});

describe('listVariants', () => {
  it('covers every release-bundle library, on the release the importer uses', () => {
    const variants = listVariants();
    expect(variants.map(v => v.repo)).toContain('algorandfoundation/algokit-utils-ts');
    expect(new Set(variants.map(v => v.key)).size).toBe(variants.length);
    for (const v of variants.filter(v => v.key.endsWith('/latest'))) {
      expect(v.releaseTag).toBe('docs-latest');
    }
  });
});
