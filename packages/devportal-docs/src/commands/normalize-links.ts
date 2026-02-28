import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import {
  resolveRelativePath,
  slugExists,
  buildFileIndex,
  findBestMatch,
  walkMdDir,
  type FileIndex,
} from '../utils/fs.js';
import { resolveBase } from '../utils/resolve-base.js';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CONTENT_ROOT = 'src/content/docs';

const TARGETS = [
  { dir: 'guides', useFallback: true },
  { dir: 'api', useFallback: false },
];

const SKIP_PATTERN = /^(?:https?:\/\/|mailto:|tel:|#|\/|(?:\.\.?\/)+images\/)/;

// ---------------------------------------------------------------------------
// Path lowercasing
// ---------------------------------------------------------------------------

export function targetName(name: string): string {
  const lower = name.toLowerCase();
  return lower.replace(/^readme(\.(md|mdx))$/, 'index$1');
}

function caseRename(dir: string, oldName: string, newName: string): void {
  const oldPath = join(dir, oldName);
  const newPath = join(dir, newName);

  // Two-step rename via temp name — safe on case-insensitive filesystems
  // where renameSync('FooBar.md', 'foobar.md') may not update git's index.
  const tmpPath = join(dir, `${oldName}.__tmp__`);
  renameSync(oldPath, tmpPath);
  renameSync(tmpPath, newPath);

  // Best-effort: update git index so the case change is tracked.
  // Silently ignored if git is unavailable or the file is untracked.
  try {
    execFileSync('git', ['mv', '-f', oldPath, newPath], { stdio: 'pipe' });
  } catch {
    // Not in a git repo, or file not tracked — filesystem rename is enough.
  }
}

export function lowercaseContentPaths(dir: string): number {
  let count = 0;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      count += lowercaseContentPaths(join(dir, entry.name));
    }
  }

  const entries = readdirSync(dir, { withFileTypes: true });
  const groups = new Map<string, string[]>();
  for (const entry of entries) {
    const target = targetName(entry.name);
    const existing = groups.get(target) ?? [];
    existing.push(entry.name);
    groups.set(target, existing);
  }

  for (const [target, names] of groups) {
    if (names.length > 1) {
      console.warn(`  CONFLICT: multiple entries map to '${target}': ${names.join(', ')}`);
      continue;
    }
    const name = names[0];
    if (name !== target) {
      caseRename(dir, name, target);
      count++;
    }
  }

  return count;
}

// ---------------------------------------------------------------------------
// Link normalization
// ---------------------------------------------------------------------------

export interface NormalizeLinkOptions {
  fileDir: string;
  contentRoot: string;
  siteBase: string;
  useFallback: boolean;
  fileIndex: FileIndex;
  filePath: string;
}

export interface NormalizeResult {
  content: string;
  changed: boolean;
  warnings: string[];
}

export function normalizeLinksInContent(
  content: string,
  opts: NormalizeLinkOptions,
): NormalizeResult {
  const warnings: string[] = [];
  let changed = false;

  const codeSlots: string[] = [];
  // eslint-disable-next-line no-control-regex
  const placeholder = (i: number) => `\x00CODE${i}\x00`;
  let safeContent = content.replace(/```[\s\S]*?```|`[^`\n]+`/g, (m) => {
    codeSlots.push(m);
    return placeholder(codeSlots.length - 1);
  });

  safeContent = safeContent.replace(
    /\[([^\]]*)\]\(([^)]+)\)/g,
    (match, text: string, url: string) => {
      if (SKIP_PATTERN.test(url)) return match;

      const hashIdx = url.indexOf('#');
      const path = hashIdx >= 0 ? url.slice(0, hashIdx) : url;
      const anchor = hashIdx >= 0 ? url.slice(hashIdx) : '';

      let resolved = resolveRelativePath(opts.fileDir, path);
      resolved = resolved.replace(/\.mdx?$/i, '');
      resolved = resolved.replace(/(?:^|\/)(?:index|readme)$/, '');

      if (opts.useFallback && resolved && !slugExists(opts.contentRoot, resolved)) {
        const found = findBestMatch(opts.fileIndex, resolved);
        if (found) {
          console.log(`  Fixed: ${resolved} -> ${found} (in ${opts.filePath})`);
          resolved = found;
        } else {
          const msg = `Could not resolve '${url}' from ${opts.filePath} (resolved to: ${resolved})`;
          console.warn(`  WARNING: ${msg}`);
          warnings.push(msg);
        }
      }

      if (resolved && !resolved.endsWith('/') && !/\.\w+$/.test(resolved)) {
        resolved += '/';
      }

      const replacement = `[${text}](${opts.siteBase}/${resolved}${anchor})`;
      if (replacement !== match) {
        changed = true;
      }
      return replacement;
    },
  );

  // eslint-disable-next-line no-control-regex
  const result = safeContent.replace(/\x00CODE(\d+)\x00/g, (_, i) => codeSlots[Number(i)]);
  return { content: result, changed, warnings };
}

// ---------------------------------------------------------------------------
// readme -> index link rewriting
// ---------------------------------------------------------------------------

export function rewriteReadmeLinks(content: string): string {
  return content.replace(
    /\[([^\]]*)\]\(([^)]+)\)/g,
    (match, text: string, url: string) => {
      const rewritten = url
        .replace(/\/readme\//, '/')
        .replace(/\/readme$/, '/');
      return rewritten !== url ? `[${text}](${rewritten})` : match;
    },
  );
}

// ---------------------------------------------------------------------------
// Dead-link stripping
// ---------------------------------------------------------------------------

export function stripDeadLinks(
  content: string,
  contentRoot: string,
  siteBase: string,
): string {
  return content.replace(
    /\[([^\]]*)\]\(([^)]+)\)/g,
    (match, text: string, url: string) => {
      if (!url.startsWith(`${siteBase}/`)) return match;

      let slug = url.slice(siteBase.length + 1);
      slug = slug.replace(/#.*$/, '');
      slug = slug.replace(/\/$/, '');
      if (!slug) return match;

      if (slugExists(contentRoot, slug)) return match;

      console.log(`  Stripped dead link: [${text}](${url})`);
      return text;
    },
  );
}

// ---------------------------------------------------------------------------
// File processing
// ---------------------------------------------------------------------------

function processFile(
  filePath: string,
  contentRoot: string,
  siteBase: string,
  useFallback: boolean,
  fileIndex: FileIndex,
): string[] {
  const relPath = relative(contentRoot, filePath).split('\\').join('/');

  let content: string;
  try {
    content = readFileSync(filePath, 'utf-8');
  } catch (err) {
    console.error(`  Error reading ${relPath}: ${(err as Error).message}`);
    return [`Failed to read ${relPath}`];
  }

  const fileDir = dirname(relPath);

  const result = normalizeLinksInContent(content, {
    fileDir,
    contentRoot,
    siteBase,
    useFallback,
    fileIndex,
    filePath: relPath,
  });

  let final = rewriteReadmeLinks(result.content);
  final = stripDeadLinks(final, contentRoot, siteBase);

  if (final !== content) {
    try {
      writeFileSync(filePath, final, 'utf-8');
      console.log(`Updated: ${relPath}`);
    } catch (err) {
      console.error(`  Error writing ${relPath}: ${(err as Error).message}`);
      return [...result.warnings, `Failed to write ${relPath}`];
    }
  }

  return result.warnings;
}

function processDirectory(
  contentRoot: string,
  dir: string,
  siteBase: string,
  useFallback: boolean,
  fileIndex: FileIndex,
): string[] {
  const fullDir = join(contentRoot, dir);
  if (!existsSync(fullDir)) {
    console.warn(`Skipping ${dir}/ (not found)`);
    return [];
  }

  const warnings: string[] = [];
  walkMdDir(fullDir, (filePath) => {
    warnings.push(...processFile(filePath, contentRoot, siteBase, useFallback, fileIndex));
  });
  return warnings;
}

// ---------------------------------------------------------------------------
// Command entry point
// ---------------------------------------------------------------------------

export function run(args: string[], docsDir: string): void {
  const siteBase = resolveBase(args, docsDir);
  const contentRoot = join(docsDir, CONTENT_ROOT);

  console.log(`Site base: ${siteBase}`);
  console.log(`Content root: ${contentRoot}`);

  console.log('\n==> Lowercasing content paths...');
  let totalRenamed = 0;
  for (const { dir } of TARGETS) {
    const fullDir = join(contentRoot, dir);
    if (existsSync(fullDir)) {
      totalRenamed += lowercaseContentPaths(fullDir);
    }
  }
  console.log(
    totalRenamed > 0
      ? `Renamed ${totalRenamed} path(s) to lowercase.`
      : 'All paths already lowercase.',
  );

  const fileIndex = buildFileIndex(contentRoot);

  const allWarnings: string[] = [];
  for (const { dir, useFallback } of TARGETS) {
    console.log(`\n==> Processing ${dir}/...`);
    allWarnings.push(...processDirectory(contentRoot, dir, siteBase, useFallback, fileIndex));
  }

  if (allWarnings.length > 0) {
    console.error(`\n${allWarnings.length} unresolvable link(s):`);
    for (const w of allWarnings) {
      console.error(`  - ${w}`);
    }
    process.exit(1);
  }

  console.log('\nAll links normalized successfully.');
}
