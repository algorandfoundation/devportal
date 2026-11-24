/**
 * Freshness check for imported docs.
 *
 * Two kinds of import are checked:
 *
 * 1. Release bundles (library docs). imports/import-manifest.json records the
 *    release each variant was built from; it is compared with the library's
 *    latest stable release on GitHub.
 * 2. Branch imports (ARC standards, NodeKit). .github-import-state.json
 *    records the upstream commit last imported; it is compared with the head
 *    of the tracked branch. These are only reported once the last import is
 *    more than BRANCH_GRACE_DAYS old, so normal day-to-day upstream activity
 *    between scheduled imports is not flagged.
 *
 * This exists because imported docs are committed: when the import workflow
 * stops producing PRs, nothing else notices, and the docs drift for months.
 *
 * Exit code:
 *   0  everything current (or only non-actionable notices)
 *   1  at least one variant is behind a release that ships a docs bundle,
 *      or a variant has never been recorded
 *
 * A variant whose latest stable release has no docs bundle is reported as a
 * notice, not a failure: there is nothing to import until upstream cuts a
 * release with the publish action in place.
 *
 * Run: pnpm run check:freshness
 */

import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { existsSync, readFileSync } from 'node:fs';

import { LIBRARY_CONFIGS, REMOTE_CONTENT } from '../imports/configs/index.js';
import { manifestKey, readImportManifest } from '../imports/manifest.js';
import type { ImportManifest } from '../imports/manifest.js';
import { isArtifactVariant } from '../imports/types.js';

const ASSET_NAME = 'devportal-docs.tar.gz';
const FETCH_TIMEOUT_MS = 15000;
const BRANCH_STATE_PATH = resolve('.github-import-state.json');
/** How long a branch import may lag its upstream before it is reported. */
export const BRANCH_GRACE_DAYS = 7;

/** The parts of a GitHub release this check needs. */
export interface LatestRelease {
  tag: string;
  hasDocsBundle: boolean;
}

export interface Variant {
  key: string;
  repo: string;
}

export interface Finding {
  key: string;
  repo: string;
  level: 'ok' | 'notice' | 'stale';
  message: string;
}

/** Every release-bundle variant the portal imports. */
export function listVariants(): Variant[] {
  return LIBRARY_CONFIGS.flatMap(lib =>
    lib.variants.filter(isArtifactVariant).flatMap(variant =>
      variant.versions
        // Only `latest` floats; explicitly pinned versions cannot go stale.
        .filter(version => version.slug === 'latest')
        .map(version => ({
          key: manifestKey(lib.metadata.slug, variant.language, version.slug),
          repo: `${variant.owner}/${variant.repo}`,
        })),
    ),
  );
}

/** Decide the state of one variant. Pure: no I/O. */
export function evaluate(
  variant: Variant,
  manifest: ImportManifest,
  latest: LatestRelease,
): Finding {
  const entry = manifest[variant.key];
  const base = { key: variant.key, repo: variant.repo };

  if (!latest.hasDocsBundle) {
    const shown =
      entry?.channel === 'stable' && entry.tag
        ? `portal shows ${entry.tag}`
        : entry
          ? `portal shows an unreleased snapshot imported ${entry.importedAt.slice(0, 10)}`
          : 'portal has no import record';
    return {
      ...base,
      level: 'notice',
      message: `latest stable release ${latest.tag} has no ${ASSET_NAME}, so it cannot be imported (${shown})`,
    };
  }

  if (!entry) {
    return {
      ...base,
      level: 'stale',
      message: `no import record; latest stable release is ${latest.tag}`,
    };
  }

  if (entry.channel !== 'stable' || entry.tag !== latest.tag) {
    const shown =
      entry.channel === 'stable' && entry.tag
        ? entry.tag
        : `an unreleased snapshot imported ${entry.importedAt.slice(0, 10)}`;
    return {
      ...base,
      level: 'stale',
      message: `portal shows ${shown}; latest stable release is ${latest.tag}`,
    };
  }

  return { ...base, level: 'ok', message: `up to date at ${entry.tag}` };
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
  const ageDays =
    (now.getTime() - new Date(state.lastImported).getTime()) / 86_400_000;
  const imported = state.lastImported.slice(0, 10);
  if (ageDays <= BRANCH_GRACE_DAYS) {
    return {
      key,
      repo,
      level: 'ok',
      message: `upstream has moved since the import on ${imported} (within ${BRANCH_GRACE_DAYS} days)`,
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

async function fetchLatestRelease(repo: string): Promise<LatestRelease> {
  const body = await githubJson<{
    tag_name?: string;
    assets?: Array<{ name: string }>;
  }>(`/repos/${repo}/releases/latest`);
  if (!body.tag_name) throw new Error('release has no tag_name');
  return {
    tag: body.tag_name,
    hasDocsBundle: (body.assets ?? []).some(a => a.name === ASSET_NAME),
  };
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
      const latest = await fetchLatestRelease(variant.repo);
      findings.push(evaluate(variant, manifest, latest));
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

  const icon = { ok: '✓', notice: '•', stale: '✗' } as const;
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
