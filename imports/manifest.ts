/**
 * Import manifest: a committed record of which upstream build each imported
 * library variant came from.
 *
 * Written by scripts/import-release-docs.ts and read by
 * scripts/check-freshness.ts. Without it the repo has no record of what the
 * committed library docs were built from, so nothing can tell when they have
 * fallen behind upstream.
 */

import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/** Where the committed content for a variant came from. */
export interface ImportManifestEntry {
  /** Upstream repository, `owner/repo`. */
  repo: string;
  /** GitHub release the docs bundle was downloaded from, e.g. `docs-latest`. */
  releaseTag: string;
  /** Upstream commit SHA the bundle was built from, when the bundle says. */
  ref: string | null;
  /** When upstream built the bundle (ISO 8601), when the bundle says. */
  builtAt: string | null;
  /** `updated_at` of the release asset that was downloaded (ISO 8601). */
  assetUpdatedAt: string;
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
