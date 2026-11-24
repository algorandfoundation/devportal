import { describe, expect, it } from 'vitest';
import {
  BRANCH_GRACE_DAYS,
  evaluate,
  evaluateBranch,
  listVariants,
} from '../../scripts/check-freshness.js';
import type { ImportManifest } from '../../imports/manifest.js';

const variant = {
  key: 'docs/mylib/typescript/latest',
  repo: 'algorandfoundation/mylib',
};

const manifestAt = (tag: string | null): ImportManifest => ({
  [variant.key]: {
    repo: variant.repo,
    channel: tag ? 'stable' : 'main',
    tag,
    ref: null,
    builtAt: null,
    importedAt: '2026-03-29T00:00:00.000Z',
  },
});

describe('evaluate (release bundles)', () => {
  it('is ok when the portal shows the latest stable release', () => {
    const f = evaluate(variant, manifestAt('v2.0.0'), { tag: 'v2.0.0', hasDocsBundle: true });
    expect(f.level).toBe('ok');
  });

  it('is stale when a newer release with a docs bundle exists', () => {
    const f = evaluate(variant, manifestAt('v1.9.0'), { tag: 'v2.0.0', hasDocsBundle: true });
    expect(f.level).toBe('stale');
    expect(f.message).toContain('v1.9.0');
    expect(f.message).toContain('v2.0.0');
  });

  it('is stale when an unreleased snapshot can now be replaced by a release', () => {
    const f = evaluate(variant, manifestAt(null), { tag: 'v2.0.0', hasDocsBundle: true });
    expect(f.level).toBe('stale');
    expect(f.message).toContain('unreleased snapshot');
  });

  it('is stale when a variant has never been recorded', () => {
    const f = evaluate(variant, {}, { tag: 'v2.0.0', hasDocsBundle: true });
    expect(f.level).toBe('stale');
  });

  it('is only a notice when the latest release has nothing to import', () => {
    // Not actionable from this repo, so it must not fail the scheduled check.
    const f = evaluate(variant, manifestAt(null), { tag: 'v2.0.0', hasDocsBundle: false });
    expect(f.level).toBe('notice');
  });
});

describe('evaluateBranch (branch imports)', () => {
  const key = 'algorandfoundation/arcs@devportal';
  const now = new Date('2026-11-24T00:00:00Z');
  const daysAgo = (n: number) =>
    new Date(now.getTime() - n * 86_400_000).toISOString();

  it('is ok when the imported commit is the branch head', () => {
    const f = evaluateBranch(key, { lastCommitSha: 'aaa1111', lastImported: daysAgo(200) }, 'aaa1111', now);
    expect(f.level).toBe('ok');
  });

  it('tolerates upstream moving within the grace period', () => {
    const f = evaluateBranch(key, { lastCommitSha: 'aaa1111', lastImported: daysAgo(BRANCH_GRACE_DAYS - 1) }, 'bbb2222', now);
    expect(f.level).toBe('ok');
  });

  it('is stale when upstream moved and the import is older than the grace period', () => {
    const f = evaluateBranch(key, { lastCommitSha: 'aaa1111', lastImported: daysAgo(BRANCH_GRACE_DAYS + 1) }, 'bbb2222', now);
    expect(f.level).toBe('stale');
  });

  it('is stale when the source was never imported', () => {
    expect(evaluateBranch(key, undefined, 'bbb2222', now).level).toBe('stale');
  });
});

describe('listVariants', () => {
  it('covers every release-bundle library the portal imports', () => {
    const repos = listVariants().map(v => v.repo);
    expect(repos).toContain('algorandfoundation/algokit-utils-ts');
    expect(repos).toContain('algorandfoundation/puya');
    expect(new Set(listVariants().map(v => v.key)).size).toBe(repos.length);
  });
});
