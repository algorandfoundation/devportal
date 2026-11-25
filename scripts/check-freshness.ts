/**
 * Freshness check for imported docs.
 *
 * Imported docs are committed to this repo, so when the import workflow stops
 * producing PRs nothing else notices and the docs drift for months. This
 * script compares what was last imported with what upstream now publishes:
 *
 * 1. Release bundles (library docs). imports/import-manifest.json records the
 *    release asset each variant was imported from; its date is compared with
 *    the asset currently attached to the same release.
 * 2. Branch imports (ARC standards, NodeKit, Algorand Python).
 *    .github-import-state.json records the upstream commit last imported; it
 *    is compared with the head of the tracked branch.
 *
 * Upstream moves all the time (library docs are rebuilt nightly), so a source
 * is only reported once its last import is more than GRACE_DAYS old. With the
 * daily import working, nothing is ever that far behind.
 *
 * Exit code: 0 when everything is current, 1 when a source is behind, has
 * never been imported, or could not be checked.
 *
 * Run: pnpm run check:freshness
 */

import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { LIBRARY_CONFIGS, REMOTE_CONTENT } from '../imports/configs/index.js';
import { manifestKey, readImportManifest } from '../imports/manifest.js';
import type { ImportManifest } from '../imports/manifest.js';
import { isArtifactVariant } from '../imports/types.js';

const ASSET_NAME = 'devportal-docs.tar.gz';
const FETCH_TIMEOUT_MS = 15000;
const BRANCH_STATE_PATH = resolve('.github-import-state.json');
/** How long an import may lag its upstream before it is reported. */
export const GRACE_DAYS = 7;

export interface Variant {
  key: string;
  repo: string;
  /** GitHub release the docs bundle is published to. */
  releaseTag: string;
}

export interface Finding {
  key: string;
  repo: string;
  level: 'ok' | 'stale';
  message: string;
}

const ageInDays = (iso: string, now: Date) =>
  (now.getTime() - new Date(iso).getTime()) / 86_400_000;

/** Every release-bundle variant the portal imports. */
export function listVariants(): Variant[] {
  return LIBRARY_CONFIGS.flatMap(lib =>
    lib.variants.filter(isArtifactVariant).flatMap(variant =>
      variant.versions.map(version => ({
        key: manifestKey(lib.metadata.slug, variant.language, version.slug),
        repo: `${variant.owner}/${variant.repo}`,
        // Same mapping as scripts/import-release-docs.ts
        releaseTag: version.slug === 'latest' ? 'docs-latest' : version.slug,
      })),
    ),
  );
}

/**
 * Decide the state of one release-bundle variant, given the date of the docs
 * bundle currently attached to its upstream release. Pure: no I/O.
 */
export function evaluate(
  variant: Variant,
  manifest: ImportManifest,
  upstreamAssetUpdatedAt: string,
  now: Date = new Date(),
): Finding {
  const entry = manifest[variant.key];
  const base = { key: variant.key, repo: variant.repo };

  if (!entry) {
    return {
      ...base,
      level: 'stale',
      message: `no import record; upstream bundle is dated ${upstreamAssetUpdatedAt.slice(0, 10)}`,
    };
  }

  const imported = entry.importedAt.slice(0, 10);
  if (entry.assetUpdatedAt === upstreamAssetUpdatedAt) {
    return { ...base, level: 'ok', message: `up to date (imported ${imported})` };
  }
  if (ageInDays(entry.importedAt, now) <= GRACE_DAYS) {
    return {
      ...base,
      level: 'ok',
      message: `upstream has rebuilt since the import on ${imported} (within ${GRACE_DAYS} days)`,
    };
  }
  return {
    ...base,
    level: 'stale',
    message: `upstream bundle is dated ${upstreamAssetUpdatedAt.slice(0, 10)} but the last import was ${imported}`,
  };
}

/** What .github-import-state.json records for one branch import. */
export interface BranchState {
  lastCommitSha: string;
  lastImported: string;
}

/** Decide the state of one branch import. Pure: no I/O. */
export function evaluateBranch(
  key: string,
  state: BranchState | undefined,
  headSha: string,
  now: Date = new Date(),
): Finding {
  const repo = key.split('@')[0];
  if (!state) {
    return { key, repo, level: 'stale', message: 'never imported' };
  }
  if (state.lastCommitSha === headSha) {
    return {
      key,
      repo,
      level: 'ok',
      message: `up to date at ${headSha.slice(0, 7)}`,
    };
  }
  const imported = state.lastImported.slice(0, 10);
  if (ageInDays(state.lastImported, now) <= GRACE_DAYS) {
    return {
      key,
      repo,
      level: 'ok',
      message: `upstream has moved since the import on ${imported} (within ${GRACE_DAYS} days)`,
    };
  }
  return {
    key,
    repo,
    level: 'stale',
    message: `upstream is at ${headSha.slice(0, 7)} but the last import was ${imported} (${state.lastCommitSha.slice(0, 7)})`,
  };
}

async function githubJson<T>(path: string): Promise<T> {
  // Authenticate when possible: unauthenticated api.github.com allows only
  // 60 requests/hour per IP, which shared CI runners often exhaust.
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers,
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

/** Date of the docs bundle currently attached to a release. */
async function fetchAssetUpdatedAt(repo: string, tag: string): Promise<string> {
  const body = await githubJson<{
    assets?: Array<{ name: string; updated_at: string }>;
  }>(`/repos/${repo}/releases/tags/${encodeURIComponent(tag)}`);
  const asset = (body.assets ?? []).find(a => a.name === ASSET_NAME);
  if (!asset) throw new Error(`release '${tag}' has no ${ASSET_NAME}`);
  return asset.updated_at;
}

async function fetchBranchHead(repo: string, ref: string): Promise<string> {
  const body = await githubJson<{ sha?: string }>(
    `/repos/${repo}/commits/${encodeURIComponent(ref)}`,
  );
  if (!body.sha) throw new Error('commit has no sha');
  return body.sha;
}

async function main(): Promise<void> {
  const manifest = readImportManifest();
  const findings: Finding[] = [];
  const errors: string[] = [];

  for (const variant of listVariants()) {
    try {
      const updatedAt = await fetchAssetUpdatedAt(
        variant.repo,
        variant.releaseTag,
      );
      findings.push(evaluate(variant, manifest, updatedAt));
    } catch (err) {
      errors.push(
        `${variant.repo}: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  const branchState: Record<string, BranchState> = existsSync(BRANCH_STATE_PATH)
    ? (JSON.parse(readFileSync(BRANCH_STATE_PATH, 'utf-8')).imports ?? {})
    : {};
  for (const config of REMOTE_CONTENT) {
    if (!config.enabled) continue;
    const repo = `${config.owner}/${config.repo}`;
    const ref = config.ref ?? 'main';
    const key = config.stateKey ?? `${repo}@${ref}`;
    try {
      const head = await fetchBranchHead(repo, ref);
      findings.push(evaluateBranch(key, branchState[key], head));
    } catch (err) {
      errors.push(`${key}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  const icon = { ok: '✓', stale: '✗' } as const;
  for (const f of findings) {
    console.log(`${icon[f.level]} ${f.key} (${f.repo}): ${f.message}`);
  }

  const stale = findings.filter(f => f.level === 'stale');
  if (errors.length > 0) {
    console.error('\nCould not check:');
    for (const e of errors) console.error(`  - ${e}`);
  }
  if (stale.length > 0) {
    console.error(
      `\n${stale.length} imported doc set(s) are behind upstream. ` +
        'Run the "Import Documentation" workflow (or `pnpm run import:docs`) and merge the resulting PR.',
    );
  }
  if (stale.length > 0 || errors.length > 0) process.exit(1);

  console.log('\nImported docs are current.');
}

// Run only when invoked directly (not when imported by tests).
if (
  process.argv[1] &&
  fileURLToPath(import.meta.url) === resolve(process.argv[1])
) {
  main().catch(err => {
    console.error('[check-freshness] Failed:', err);
    process.exit(1);
  });
}
