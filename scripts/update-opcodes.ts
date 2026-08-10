/**
 * update-opcodes.ts
 *
 * Keeps the TEAL opcode reference in sync with algorand/go-algorand.
 *
 * Source of truth is the go-algorand `master` branch, so the docs list every
 * opcode as soon as it lands — including opcodes for an AVM version that is not
 * yet in a live network release. To let the page flag those, the script also
 * resolves the latest *stable release* and records the highest AVM version that
 * release ships as `LatestReleasedVersion`. The renderer marks any opcode whose
 * `IntroducedVersion` exceeds it as "not yet live".
 *
 * This is a *content* step, not a build step: it changes committed source and
 * must never mutate files inside `prebuild`/`predev`. Use `--check` there
 * instead — a non-blocking probe that only warns.
 *
 * Usage:
 *   npx tsx scripts/update-opcodes.ts [--ref=<git-ref>] [--dry-run]
 *   npx tsx scripts/update-opcodes.ts --check        # warn only, never fails
 *
 * Flags / env:
 *   --check              Report whether the committed dataset is stale, then
 *                        exit 0. Best-effort: network/parse errors are swallowed
 *                        so it can run in the build without breaking it.
 *   --dry-run            Show what would change without writing files.
 *   --ref=<ref>          Override the dataset source ref (branch, tag, or SHA).
 *                        Defaults to `master`.
 *   GO_ALGORAND_REF      Same as --ref (flag takes precedence).
 */

import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { render } from './generate-opcode-list';

const DATA_PATH = resolve('src/content/docs/reference/algorand-teal/opcodes.json');
const LOGIC_DIR = 'data/transactions/logic';

/** Default dataset source: bleeding-edge, includes not-yet-released opcodes. */
const DEFAULT_REF = 'master';
/** How many versions past a starting point to probe before giving up. */
const PROBE_LOOKAHEAD = 12;
/** Network timeout (ms) so a slow/absent network never stalls the build. */
const FETCH_TIMEOUT_MS = 8000;

interface LangSpec {
  Version: number;
  LogicSigVersion: number;
  NamedTypes: unknown[];
  Ops: Array<{ Name: string; Opcode: number; IntroducedVersion: number }>;
  /** Non-langspec field we add: highest AVM version in the latest stable release. */
  LatestReleasedVersion?: number;
}

function parseArgs(argv: string[]) {
  const check = argv.includes('--check');
  const dryRun = argv.includes('--dry-run');
  const refArg = argv.find((a) => a.startsWith('--ref='));
  const ref = refArg ? refArg.slice('--ref='.length) : process.env.GO_ALGORAND_REF || DEFAULT_REF;
  return { check, dryRun, ref };
}

async function fetchWithTimeout(url: string, init?: RequestInit) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function langspecUrl(ref: string, version: number) {
  return `https://raw.githubusercontent.com/algorand/go-algorand/${ref}/${LOGIC_DIR}/langspec_v${version}.json`;
}

/** Whether `langspec_vN.json` exists at `ref` (cheap HEAD probe). */
async function versionExists(ref: string, version: number): Promise<boolean> {
  const res = await fetchWithTimeout(langspecUrl(ref, version), { method: 'HEAD' });
  return res.ok;
}

/** Highest `langspec_vN.json` at `ref`, probing upward from `start`. */
async function highestVersion(ref: string, start: number): Promise<number> {
  let highest = 0;
  for (let v = start; v <= start + PROBE_LOOKAHEAD; v++) {
    if (await versionExists(ref, v)) highest = v;
    else if (highest) break; // first gap after a hit — we've passed the newest
  }
  if (!highest) throw new Error(`No langspec found from v${start} upward on ref "${ref}".`);
  return highest;
}

/** Highest `langspec_vN.json` at `ref` at or below `ceiling`, probing downward. */
async function highestVersionAtOrBelow(ref: string, ceiling: number): Promise<number> {
  for (let v = ceiling; v >= 1; v--) {
    if (await versionExists(ref, v)) return v;
  }
  throw new Error(`No langspec found at or below v${ceiling} on ref "${ref}".`);
}

async function fetchLangspec(ref: string, version: number): Promise<{ raw: string; spec: LangSpec }> {
  const url = langspecUrl(ref, version);
  const res = await fetchWithTimeout(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: HTTP ${res.status} ${res.statusText}`);
  // Keep the raw response text: writing it verbatim preserves go-algorand's exact
  // formatting — Go's `<`/`>`/`&` escaping and, crucially, integer
  // literals like the uint64 max (18446744073709551615) that a JSON.parse →
  // JSON.stringify round-trip would corrupt (values above 2^53 lose precision).
  const raw = await res.text();
  const spec = JSON.parse(raw) as LangSpec;
  if (typeof spec.Version !== 'number' || !Array.isArray(spec.Ops)) {
    throw new Error(`Unexpected langspec schema at ${url} (missing Version/Ops)`);
  }
  return { raw, spec };
}

/**
 * Add our `LatestReleasedVersion` field to the raw langspec text without
 * re-serializing it (which would corrupt big integers and Go's escaping).
 * Inserts it as the first key, matching the upstream `{\n  "..."` layout.
 */
function injectLatestReleasedVersion(rawSpec: string, released: number): string {
  const injected = rawSpec.replace(/^\{\n/, `{\n  "LatestReleasedVersion": ${released},\n`);
  if (injected === rawSpec) {
    throw new Error('Could not inject LatestReleasedVersion — unexpected langspec formatting.');
  }
  return injected;
}

/**
 * Resolve the latest stable go-algorand release tag. `releases/latest` already
 * excludes prereleases and drafts, so no tag-name parsing is needed.
 */
async function latestReleaseTag(): Promise<string> {
  // Authenticate when a token is available. Unauthenticated api.github.com is
  // limited to 60 req/hr per IP, which shared CI runners often exhaust; a token
  // raises that to 5000/hr so the check/update stays reliable in CI.
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetchWithTimeout('https://api.github.com/repos/algorand/go-algorand/releases/latest', {
    headers,
  });
  if (!res.ok) throw new Error(`Could not resolve latest go-algorand release: HTTP ${res.status} ${res.statusText}`);
  const { tag_name } = (await res.json()) as { tag_name?: string };
  if (!tag_name) throw new Error('Latest go-algorand release has no tag_name.');
  return tag_name;
}

/** Highest AVM version shipped in the latest stable release (the "live" version). */
async function latestReleasedVersion(masterVersion: number): Promise<number> {
  const tag = await latestReleaseTag();
  return highestVersionAtOrBelow(tag, masterVersion);
}

async function readCurrent() {
  const raw = await readFile(DATA_PATH, 'utf8');
  const parsed = JSON.parse(raw) as LangSpec;
  return {
    raw,
    version: typeof parsed.Version === 'number' ? parsed.Version : 1,
    releasedVersion: parsed.LatestReleasedVersion ?? null,
  };
}

/** Non-blocking warning used in the build. Never throws, never exits non-zero. */
async function runCheck(ref: string) {
  try {
    const current = await readCurrent();
    const masterVersion = await highestVersion(ref, current.version);
    const released = await latestReleasedVersion(masterVersion);

    const versionStale = masterVersion > current.version;
    const releaseStale = current.releasedVersion !== released;

    if (versionStale || releaseStale) {
      const reason = versionStale
        ? `go-algorand ${ref} now ships AVM v${masterVersion} (docs are on v${current.version})`
        : `AVM v${current.version} release status changed (latest release now ships v${released})`;
      console.warn(
        `\n\x1b[33m⚠  Opcode reference is out of date:\x1b[0m ${reason}.\n` +
          '   Run \x1b[36mpnpm run update:opcodes\x1b[0m on a dedicated branch to refresh it,\n' +
          '   or trigger the "Update Opcodes" workflow to open a PR.\n'
      );
    }
  } catch (err) {
    // Best-effort only: offline builds, rate limits, etc. must not break the build.
    console.warn(`[update-opcodes] check skipped (${err instanceof Error ? err.message : String(err)}).`);
  }
}

async function runUpdate(ref: string, dryRun: boolean) {
  const current = await readCurrent();
  console.log(`[update-opcodes] Current dataset: v${current.version} (released: v${current.releasedVersion ?? '?'})`);
  console.log(`[update-opcodes] Source: go-algorand ref "${ref}"`);

  const masterVersion = await highestVersion(ref, current.version);
  const { raw, spec } = await fetchLangspec(ref, masterVersion);
  const released = await latestReleasedVersion(masterVersion);
  console.log(`[update-opcodes] Latest available: v${spec.Version} (${spec.Ops.length} ops); latest release: v${released}`);

  const nextRaw = injectLatestReleasedVersion(raw, released);

  if (nextRaw === current.raw) {
    console.log('[update-opcodes] Dataset already up to date — nothing to do.');
    return;
  }
  if (dryRun) {
    console.log(
      `[update-opcodes] DRY RUN — would update dataset to v${spec.Version} ` +
        `(released v${released}) and regenerate opcodes.mdx.`
    );
    return;
  }

  await writeFile(DATA_PATH, nextRaw, 'utf8');
  console.log(`[update-opcodes] Wrote opcodes.json (dataset v${spec.Version}, released v${released}).`);
  console.log('[update-opcodes] Regenerating opcodes.mdx…');
  await render();
  console.log('[update-opcodes] Done.');
}

async function main() {
  const { check, dryRun, ref } = parseArgs(process.argv.slice(2));
  if (check) await runCheck(ref);
  else await runUpdate(ref, dryRun);
}

main().catch((err) => {
  console.error('[update-opcodes] Failed:', err instanceof Error ? err.message : err);
  process.exit(1);
});
