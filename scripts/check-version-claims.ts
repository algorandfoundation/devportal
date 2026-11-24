/**
 * Version-claim lint for hand-written docs.
 *
 * Flags statements that are true only on the day they are written: a "current
 * version", a count that is "currently N", a claim dated "as of <month year>",
 * or a link pinned to one release tag or commit of a repo we do not control
 * from here. These are the statements that quietly go wrong after the next
 * upstream release.
 *
 * What to write instead:
 *   - link to the release page / registry rather than quoting the version
 *   - state the fact historically ("introduced in AVM v12"), which stays true
 *   - use <AvmVersion /> for the current AVM/TEAL version
 *
 * Existing accepted cases live in scripts/version-claims-baseline.json, so the
 * check only fails on NEW claims. To accept one deliberately, either add an
 * inline marker on the same line or the line above:
 *
 *     {/* version-claim-ok: historical, the v42 upgrade shipped in v5.0.0 *\/}
 *     <!-- version-claim-ok: reason -->
 *
 * or run `pnpm run check:version-claims:update` and commit the baseline.
 *
 * Run: pnpm run check:version-claims
 */

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DOCS_ROOT = 'src/content/docs';
const BASELINE_PATH = 'scripts/version-claims-baseline.json';
const OPT_OUT_MARKER = 'version-claim-ok';

/**
 * Not hand-written, or dated by design:
 * - docs/, arc-standards/: imported from other repos (fixed upstream)
 * - bulletins/: dated announcements, version ranges are the point
 * - reference/algorand-teal/opcodes.mdx: generated from the opcode dataset
 */
const EXCLUDED = [
  'src/content/docs/docs/',
  'src/content/docs/arc-standards/',
  'src/content/docs/bulletins/',
  'src/content/docs/reference/algorand-teal/opcodes.mdx',
];

const MONTHS =
  'January|February|March|April|May|June|July|August|September|October|November|December';
const ORGS = 'algorand|algorandfoundation';

export interface Rule {
  id: string;
  pattern: RegExp;
  advice: string;
}

export const RULES: Rule[] = [
  {
    id: 'current-version',
    pattern: /\b(?:current|latest)\s+version\b(?!s)/i,
    advice:
      'Link to the release page instead of naming a current version (or use <AvmVersion /> for the AVM version).',
  },
  {
    id: 'currently-number',
    pattern: /\bcurrently\s+(?:(?:is|at|set to|the last|around|about)\s+)?v?\d/i,
    advice:
      'A value that is "currently N" will change. Link to the source of truth, or state which protocol/release version the value belongs to.',
  },
  {
    id: 'dated-claim',
    pattern: new RegExp(
      `\\b(?:as of|in)\\s+(?:${MONTHS})\\s+\\d{4}\\b|\\bat the time of writing\\b`,
      'i',
    ),
    advice:
      'A claim dated to when the page was written goes stale silently. Remove it, or tie it to a version instead of a date.',
  },
  {
    id: 'pinned-release-link',
    pattern: new RegExp(
      `github\\.com/(?:${ORGS})/[\\w.-]+/releases/(?:tag|download)/`,
      'i',
    ),
    advice:
      'Link to /releases/latest (or /releases) rather than one release tag, unless the page is about that specific release.',
  },
  {
    id: 'pinned-commit-link',
    pattern: new RegExp(
      `(?:github\\.com/(?:${ORGS})/[\\w.-]+/(?:blob|tree)|raw\\.githubusercontent\\.com/(?:${ORGS})/[\\w.-]+)/[0-9a-f]{7,40}/`,
      'i',
    ),
    advice:
      'Link to a branch (e.g. main, rel/stable) rather than a commit SHA, so the link follows the code.',
  },
];

export interface Finding {
  file: string;
  line: number;
  rule: string;
  text: string;
}

/** A baseline entry identifies a claim by its text, not its line number. */
export interface BaselineEntry {
  file: string;
  rule: string;
  text: string;
}

const normalize = (line: string) => line.trim().replace(/\s+/g, ' ');

/** Find version claims in one file's content. Pure: no I/O. */
export function scanContent(file: string, content: string): Finding[] {
  const lines = content.split(/\r?\n/);
  const findings: Finding[] = [];

  lines.forEach((line, idx) => {
    if (line.includes(OPT_OUT_MARKER)) return;
    if (idx > 0 && lines[idx - 1].includes(OPT_OUT_MARKER)) return;

    for (const rule of RULES) {
      if (rule.pattern.test(line)) {
        findings.push({
          file,
          line: idx + 1,
          rule: rule.id,
          text: normalize(line),
        });
      }
    }
  });

  return findings;
}

const keyOf = (e: BaselineEntry) => `${e.file}\u0000${e.rule}\u0000${e.text}`;

/**
 * Split findings into new ones (not in the baseline) and report baseline
 * entries that no longer match anything (fixed or reworded). Pure: no I/O.
 */
export function compareWithBaseline(
  findings: Finding[],
  baseline: BaselineEntry[],
): { fresh: Finding[]; resolved: BaselineEntry[] } {
  // Count-aware: two identical lines in one file need two baseline entries.
  const remaining = new Map<string, number>();
  for (const entry of baseline) {
    remaining.set(keyOf(entry), (remaining.get(keyOf(entry)) ?? 0) + 1);
  }

  const fresh: Finding[] = [];
  for (const finding of findings) {
    const key = keyOf(finding);
    const count = remaining.get(key) ?? 0;
    if (count > 0) remaining.set(key, count - 1);
    else fresh.push(finding);
  }

  const resolved: BaselineEntry[] = [];
  for (const entry of baseline) {
    const key = keyOf(entry);
    const count = remaining.get(key) ?? 0;
    if (count > 0) {
      resolved.push(entry);
      remaining.set(key, count - 1);
    }
  }

  return { fresh, resolved };
}

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.(md|mdx)$/i.test(entry.name) ? [full] : [];
  });
}

function scanAll(): Finding[] {
  return walk(DOCS_ROOT)
    .map(path => relative(process.cwd(), resolve(path)).split('\\').join('/'))
    .filter(file => !EXCLUDED.some(prefix => file.startsWith(prefix)))
    .sort()
    .flatMap(file => scanContent(file, readFileSync(file, 'utf-8')));
}

function main(): void {
  const findings = scanAll();

  if (process.argv.includes('--update-baseline')) {
    const baseline: BaselineEntry[] = findings.map(({ file, rule, text }) => ({
      file,
      rule,
      text,
    }));
    writeFileSync(BASELINE_PATH, `${JSON.stringify(baseline, null, 2)}\n`);
    console.log(`Wrote ${baseline.length} accepted claim(s) to ${BASELINE_PATH}`);
    return;
  }

  const baseline: BaselineEntry[] = existsSync(BASELINE_PATH)
    ? JSON.parse(readFileSync(BASELINE_PATH, 'utf-8'))
    : [];
  const { fresh, resolved } = compareWithBaseline(findings, baseline);

  if (resolved.length > 0) {
    console.log(
      `${resolved.length} baseline entr${resolved.length === 1 ? 'y' : 'ies'} no longer match (fixed or reworded). ` +
        'Run `pnpm run check:version-claims:update` to prune them.',
    );
  }

  if (fresh.length === 0) {
    console.log(
      `No new version claims (${findings.length} accepted in the baseline).`,
    );
    return;
  }

  console.error(`\n${fresh.length} new version claim(s) in hand-written docs:\n`);
  for (const f of fresh) {
    const rule = RULES.find(r => r.id === f.rule)!;
    console.error(`${f.file}:${f.line}  [${f.rule}]`);
    console.error(`    ${f.text.slice(0, 200)}`);
    console.error(`    → ${rule.advice}\n`);
  }
  console.error(
    `If a claim is deliberate, add a \`${OPT_OUT_MARKER}: <reason>\` comment on the line above it, ` +
      'or run `pnpm run check:version-claims:update`. See CONTRIBUTING.md.',
  );
  process.exit(1);
}

// Run only when invoked directly (not when imported by tests).
if (
  process.argv[1] &&
  fileURLToPath(import.meta.url) === resolve(process.argv[1])
) {
  main();
}
