#!/usr/bin/env npx tsx
/**
 * Normalize relative markdown links to absolute paths in a Starlight docs
 * site. Handles both hand-written guides (with filesystem fallback for
 * broken links) and generated API docs (Sphinx, TypeDoc, etc.).
 *
 * Usage:
 *   npx tsx normalize-links.ts
 *   npx tsx normalize-links.ts --base /algokit-utils-ts
 */

import { existsSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const CONTENT_ROOT = 'src/content/docs';

/** Directories to process, relative to CONTENT_ROOT. */
const TARGETS = [
  { dir: 'guides', useFallback: true },
  { dir: 'api', useFallback: false },
];

/** Link prefixes to skip (not relative content links). */
const SKIP_PATTERN = /^(?:https?:\/\/|mailto:|tel:|#|\/|(?:\.\.?\/)+images\/)/;

// ---------------------------------------------------------------------------
// Path resolution
// ---------------------------------------------------------------------------

/** Collapse `.` and `..` components in a forward-slash path. */
function resolveRelativePath(base: string, rel: string): string {
  const combined = base === '.' ? rel : `${base}/${rel}`;
  const parts = combined.split('/');
  const resolved: string[] = [];
  for (const part of parts) {
    if (part === '..') {
      resolved.pop();
    } else if (part !== '.' && part !== '') {
      resolved.push(part);
    }
  }
  return resolved.join('/');
}

// ---------------------------------------------------------------------------
// Filesystem validation
// ---------------------------------------------------------------------------

/** Check if a slug maps to a real content file. */
function slugExists(contentRoot: string, slug: string): boolean {
  if (!slug) return false;
  const base = join(contentRoot, slug);
  return (
    existsSync(`${base}.md`) ||
    existsSync(`${base}.mdx`) ||
    existsSync(join(base, 'index.md')) ||
    existsSync(join(base, 'index.mdx'))
  );
}

// ---------------------------------------------------------------------------
// Path lowercasing
// ---------------------------------------------------------------------------

/**
 * Compute the target filename: lowercase, and rename `readme` → `index`
 * so that TypeDoc module overviews become proper index pages.
 */
function targetName(name: string): string {
  const lower = name.toLowerCase();
  return lower.replace(/^readme(\.(md|mdx))$/, 'index$1');
}

/**
 * Recursively lowercase all file and directory names under `dir`,
 * and rename `readme.md` → `index.md`. Processes depth-first so
 * children are renamed before their parent directories.
 * Returns the number of entries renamed.
 */
function lowercaseContentPaths(dir: string): number {
  let count = 0;

  // Recurse into subdirectories first
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      count += lowercaseContentPaths(join(dir, entry.name));
    }
  }

  // Group entries by target name to detect conflicts
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
      renameSync(join(dir, name), join(dir, target));
      count++;
    }
  }

  return count;
}

// ---------------------------------------------------------------------------
// File index for fallback resolution
// ---------------------------------------------------------------------------

type FileIndex = Map<string, string[]>;

/** Build an index of all content files for fallback lookups. */
function buildFileIndex(contentRoot: string): FileIndex {
  const index: FileIndex = new Map();

  function walk(dir: string): void {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (/\.mdx?$/.test(entry.name)) {
        let slug = relative(contentRoot, full).split('\\').join('/');
        slug = slug.replace(/\.mdx?$/i, '');
        slug = slug.replace(/\/index$/, '');
        const key = slug.includes('/') ? slug.split('/').pop()! : slug;
        const existing = index.get(key) ?? [];
        existing.push(slug);
        index.set(key, existing);
      }
    }
  }

  walk(contentRoot);
  return index;
}

/**
 * Fallback: find the best-matching slug when naive resolution fails.
 * Scores candidates by trailing path component overlap.
 */
function findBestMatch(index: FileIndex, resolved: string): string | null {
  const target = resolved.includes('/') ? resolved.split('/').pop()! : resolved;
  if (!target) return null;
  const candidates = index.get(target);
  if (!candidates?.length) return null;
  if (candidates.length === 1) return candidates[0];

  const resolvedParts = resolved.split('/');
  let bestScore = -1;
  let best: string | null = null;

  for (const candidate of candidates) {
    const candParts = candidate.split('/');
    let score = 0;
    let ri = resolvedParts.length - 1;
    let ci = candParts.length - 1;
    while (ri >= 0 && ci >= 0 && resolvedParts[ri] === candParts[ci]) {
      score++;
      ri--;
      ci--;
    }
    if (score > bestScore) {
      bestScore = score;
      best = candidate;
    }
  }

  return best;
}

// ---------------------------------------------------------------------------
// Link normalization
// ---------------------------------------------------------------------------

interface NormalizeLinkOptions {
  fileDir: string;
  contentRoot: string;
  siteBase: string;
  useFallback: boolean;
  fileIndex: FileIndex;
  filePath: string;
}

interface NormalizeResult {
  content: string;
  changed: boolean;
  warnings: string[];
}

function normalizeLinksInContent(
  content: string,
  opts: NormalizeLinkOptions,
): NormalizeResult {
  const warnings: string[] = [];
  let changed = false;

  // Temporarily replace code blocks and inline code so the link regex
  // doesn't match patterns inside them (e.g. TemplateVar[bool]("X")).
  const codeSlots: string[] = [];
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

  // Restore code blocks
  const result = safeContent.replace(/\x00CODE(\d+)\x00/g, (_, i) => codeSlots[Number(i)]);

  return { content: result, changed, warnings };
}

// ---------------------------------------------------------------------------
// readme → index link rewriting
// ---------------------------------------------------------------------------

/**
 * Rewrite `/readme/` link targets to `/` since readme.md files are renamed
 * to index.md. Handles both absolute and resolved links.
 */
function rewriteReadmeLinks(content: string): string {
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

/**
 * Strip links whose absolute targets don't exist as content files.
 * Converts `[text](url)` → `text` for dead links so downstream
 * validators don't flag them.
 */
function stripDeadLinks(
  content: string,
  contentRoot: string,
  siteBase: string,
): string {
  return content.replace(
    /\[([^\]]*)\]\(([^)]+)\)/g,
    (match, text: string, url: string) => {
      // Only check internal absolute links under the site base
      if (!url.startsWith(`${siteBase}/`)) return match;

      // Extract slug: strip site base prefix and trailing slash
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
  const content = readFileSync(filePath, 'utf-8');
  const relPath = relative(contentRoot, filePath).split('\\').join('/');
  const fileDir = dirname(relPath);

  const result = normalizeLinksInContent(content, {
    fileDir,
    contentRoot,
    siteBase,
    useFallback,
    fileIndex,
    filePath: relPath,
  });

  // Rewrite /readme/ links to match readme.md → index.md rename
  let final = rewriteReadmeLinks(result.content);

  // Strip links to content pages that don't exist on disk
  final = stripDeadLinks(final, contentRoot, siteBase);

  const changed = final !== content;

  if (changed) {
    writeFileSync(filePath, final, 'utf-8');
    console.log(`Updated: ${relPath}`);
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

  function walk(d: string): void {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const full = join(d, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (/\.mdx?$/.test(entry.name)) {
        warnings.push(...processFile(full, contentRoot, siteBase, useFallback, fileIndex));
      }
    }
  }

  walk(fullDir);
  return warnings;
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function readBaseFromConfig(docsDir: string): string | null {
  const configPath = join(docsDir, 'astro.config.mjs');
  if (!existsSync(configPath)) return null;
  const content = readFileSync(configPath, 'utf-8');
  const match = content.match(/base:\s*["']([^"']+)["']/);
  if (!match) return null;
  const base = match[1].replace(/\/$/, '');
  if (!base.startsWith('/')) return null;
  return base;
}

function main(): void {
  const args = process.argv.slice(2);
  const docsDir = resolve(dirname(fileURLToPath(import.meta.url)));
  const contentRoot = join(docsDir, CONTENT_ROOT);

  let siteBase: string | null = null;
  const baseIdx = args.indexOf('--base');
  if (baseIdx >= 0 && args[baseIdx + 1]) {
    siteBase = args[baseIdx + 1].replace(/\/$/, '');
  }

  if (!siteBase) {
    siteBase = readBaseFromConfig(docsDir);
  }

  if (!siteBase) {
    console.error('Error: Could not determine site base. Pass --base or ensure astro.config.mjs has a base field.');
    process.exit(1);
  }

  console.log(`Site base: ${siteBase}`);
  console.log(`Content root: ${contentRoot}`);

  // Lowercase file/directory names so slugs match TypeDoc's slugified links
  console.log('\n==> Lowercasing content paths...');
  let totalRenamed = 0;
  for (const { dir } of TARGETS) {
    const fullDir = join(contentRoot, dir);
    if (existsSync(fullDir)) {
      totalRenamed += lowercaseContentPaths(fullDir);
    }
  }
  console.log(totalRenamed > 0
    ? `Renamed ${totalRenamed} path(s) to lowercase.`
    : 'All paths already lowercase.');

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

main();
