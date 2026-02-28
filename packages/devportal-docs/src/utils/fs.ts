import { existsSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

/** Collapse `.` and `..` components in a forward-slash path. */
export function resolveRelativePath(base: string, rel: string): string {
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

/** Check if a slug maps to a real content file (.md, .mdx, or index). */
export function slugExists(contentRoot: string, slug: string): boolean {
  if (!slug) return false;
  const base = join(contentRoot, slug);
  return (
    existsSync(`${base}.md`) ||
    existsSync(`${base}.mdx`) ||
    existsSync(join(base, 'index.md')) ||
    existsSync(join(base, 'index.mdx'))
  );
}

/** Recursively walk a directory, calling `visitor` for each .md/.mdx file. */
export function walkMdDir(dir: string, visitor: (filePath: string) => void): void {
  if (!existsSync(dir)) return;

  function walk(d: string): void {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const full = join(d, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (/\.mdx?$/.test(entry.name)) {
        visitor(full);
      }
    }
  }

  walk(dir);
}

/** Recursively walk a directory and return all .md/.mdx file paths. */
export function walkMdFiles(dir: string): string[] {
  const results: string[] = [];
  walkMdDir(dir, (filePath) => results.push(filePath));
  return results;
}

/** File index: maps basename (last slug component) → full slug paths. */
export type FileIndex = Map<string, string[]>;

/** Build an index of all content files for fallback lookups. */
export function buildFileIndex(contentRoot: string): FileIndex {
  const index: FileIndex = new Map();

  walkMdDir(contentRoot, (full) => {
    let slug = relative(contentRoot, full).split('\\').join('/');
    slug = slug.replace(/\.mdx?$/i, '');
    slug = slug.replace(/\/index$/, '');
    const key = slug.includes('/') ? slug.split('/').pop()! : slug;
    const existing = index.get(key) ?? [];
    existing.push(slug);
    index.set(key, existing);
  });

  return index;
}

/**
 * Fallback: find the best-matching slug when naive resolution fails.
 * Scores candidates by trailing path component overlap.
 */
export function findBestMatch(index: FileIndex, resolved: string): string | null {
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
