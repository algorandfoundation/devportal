/**
 * Import manifest: a committed record of which upstream build each imported
 * library variant came from.
 *
 * Written by scripts/import-release-docs.ts, read by the UI (version labels)
 * and by scripts/check-freshness.ts (staleness detection). Without it the
 * portal cannot say what "Latest" actually is.
 */

import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/** Where the committed content for a variant came from. */
export interface ImportManifestEntry {
  /** Upstream repository, `owner/repo`. */
  repo: string;
  /**
   * `stable`: built from a published release tag.
   * `main`: built from the default branch (unreleased), kept only while the
   * latest stable release has no docs bundle to import.
   */
  channel: 'stable' | 'main';
  /** Release tag the content was built from, e.g. `v9.2.2`. Null for `main`. */
  tag: string | null;
  /** Upstream commit SHA the content was built from, when known. */
  ref: string | null;
  /** When upstream built the docs bundle (ISO 8601), when known. */
  builtAt: string | null;
  /** When the content was imported into this repo (ISO 8601). */
  importedAt: string;
}

/** Keyed by content prefix, e.g. `docs/algokit-utils/typescript/latest`. */
export type ImportManifest = Record<string, ImportManifestEntry>;

export const IMPORT_MANIFEST_PATH = join(
  process.cwd(),
  'imports/import-manifest.json',
);

/** Build the manifest key for a library variant. */
export function manifestKey(
  librarySlug: string,
  language: string,
  versionSlug: string,
): string {
  return `docs/${librarySlug}/${language.toLowerCase()}/${versionSlug}`;
}

export function readImportManifest(
  path: string = IMPORT_MANIFEST_PATH,
): ImportManifest {
  if (!existsSync(path)) return {};
  return JSON.parse(readFileSync(path, 'utf-8')) as ImportManifest;
}

export function writeImportManifest(
  manifest: ImportManifest,
  path: string = IMPORT_MANIFEST_PATH,
): void {
  const sorted = Object.fromEntries(
    Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)),
  );
  writeFileSync(path, `${JSON.stringify(sorted, null, 2)}\n`);
}

/**
 * Human-readable version label for a variant.
 *
 * - stable import:  `Latest (v9.2.2)`
 * - main import:    `Unreleased (main, 2026-03-29)`
 * - no record:      the configured fallback label
 */
export function versionLabel(
  entry: ImportManifestEntry | undefined,
  fallback: string,
): string {
  if (!entry) return fallback;
  if (entry.channel === 'stable' && entry.tag) {
    return `${fallback} (${entry.tag})`;
  }
  const date = (entry.builtAt ?? entry.importedAt).slice(0, 10);
  return `Unreleased (main, ${date})`;
}
