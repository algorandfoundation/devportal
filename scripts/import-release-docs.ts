/**
 * Phase 1 artifact downloader for github-artifact import strategy.
 *
 * Iterates all library configs, finds variants with source: 'github-artifact',
 * downloads devportal-docs.tar.gz from the appropriate GitHub Release,
 * and unpacks content to the correct location in src/content/docs/.
 *
 * Run: pnpm run import:release
 * Flags: --dry-run (log planned downloads, no network calls)
 */

import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'fs';
import { execSync } from 'child_process';
import { join, relative } from 'path';
import { tmpdir } from 'os';

import { Octokit } from 'octokit';
import picomatch from 'picomatch';

import { LIBRARY_CONFIGS } from '../imports/configs/index.js';
import { isArtifactVariant } from '../imports/types.js';
import type { GithubArtifactConfig, PostImportTransform } from '../imports/types.js';
import type { VersionConfig } from '../imports/types.js';

// ---------------------------------------------------------------------------
// CLI flags
// ---------------------------------------------------------------------------

const DRY_RUN = process.argv.includes('--dry-run');

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN && !DRY_RUN) {
  console.error(
    'GITHUB_TOKEN environment variable is required (set in .env or CI)',
  );
  process.exit(1);
}

const octokit = GITHUB_TOKEN ? new Octokit({ auth: GITHUB_TOKEN }) : null;

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PROJECT_ROOT = process.cwd();
const CONTENT_DOCS_DIR = join(PROJECT_ROOT, 'src/content/docs');
const ASSET_NAME = 'devportal-docs.tar.gz';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DownloadTask {
  librarySlug: string;
  variant: GithubArtifactConfig;
  version: VersionConfig;
  releaseTag: string;
  destDir: string;
  prefix: string;
  postImportTransforms?: PostImportTransform[];
}

// ---------------------------------------------------------------------------
// Task builder
// ---------------------------------------------------------------------------

/** Derive download tasks from LIBRARY_CONFIGS — no separate registry needed. */
function buildTasks(): DownloadTask[] {
  return LIBRARY_CONFIGS.flatMap(lib =>
    lib.variants.filter(isArtifactVariant).flatMap(variant =>
      variant.versions.map(version => {
        const lang = variant.language.toLowerCase();
        const prefix = `docs/${lib.metadata.slug}/${lang}/${version.slug}`;
        return {
          librarySlug: lib.metadata.slug,
          variant,
          version,
          releaseTag: version.slug === 'latest' ? 'docs-latest' : version.slug,
          destDir: join(CONTENT_DOCS_DIR, prefix),
          prefix,
          postImportTransforms: variant.postImportTransforms,
        };
      })
    )
  );
}

// ---------------------------------------------------------------------------
// Download + unpack
// ---------------------------------------------------------------------------

/** Recursively collect all files under a directory. */
function walkFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

/** Apply post-import transforms to files matching their glob patterns. */
function applyPostImportTransforms(
  destDir: string,
  transforms: PostImportTransform[],
  prefix: string,
): void {
  const allFiles = walkFiles(destDir);

  for (const { pattern, transform } of transforms) {
    const matcher = picomatch(pattern);

    for (const filePath of allFiles) {
      const rel = relative(destDir, filePath);
      if (!matcher(rel)) continue;

      const content = readFileSync(filePath, 'utf-8');
      const transformed = transform(content, rel);
      if (transformed !== content) {
        writeFileSync(filePath, transformed);
        console.log(`  Transformed: ${prefix}/${rel}`);
      }
    }
  }
}

async function downloadAndUnpack(task: DownloadTask): Promise<void> {
  const { variant, version, releaseTag, destDir, prefix } = task;
  const label = `${variant.owner}/${variant.repo}@${releaseTag} (${variant.language} ${version.slug})`;

  if (!octokit) throw new Error('No octokit instance');

  // 1. Fetch release by tag
  console.log(
    `  Fetching release ${releaseTag} from ${variant.owner}/${variant.repo}...`,
  );
  const release = await octokit.rest.repos.getReleaseByTag({
    owner: variant.owner,
    repo: variant.repo,
    tag: releaseTag,
  });

  // 2. Find the tarball asset
  const asset = release.data.assets.find((a) => a.name === ASSET_NAME);
  if (!asset) {
    throw new Error(
      `Asset '${ASSET_NAME}' not found in release '${releaseTag}' of ${variant.owner}/${variant.repo}`,
    );
  }

  // 3. Download to temp dir (atomic — never writes partial to destination)
  const tempDir = mkdtempSync(join(tmpdir(), 'devportal-docs-'));
  try {
    const assetPath = join(tempDir, ASSET_NAME);
    console.log(
      `  Downloading ${ASSET_NAME} (${(asset.size / 1024).toFixed(1)} KB)...`,
    );

    const response = await octokit.request(
      'GET /repos/{owner}/{repo}/releases/assets/{asset_id}',
      {
        owner: variant.owner,
        repo: variant.repo,
        asset_id: asset.id,
        headers: { Accept: 'application/octet-stream' },
      },
    );

    // Octokit returns the binary data as response.data when Accept is octet-stream.
    // The type system doesn't know this, so cast through unknown.
    const buffer = Buffer.from(response.data as unknown as ArrayBuffer);
    writeFileSync(assetPath, buffer);

    // 4. Extract tarball
    const extractDir = join(tempDir, 'extracted');
    mkdirSync(extractDir, { recursive: true });
    execSync(`tar xzf "${assetPath}" -C "${extractDir}"`, { stdio: 'pipe' });

    // 5. Locate content directory
    const contentSrc = join(extractDir, 'content');
    if (!existsSync(contentSrc)) {
      throw new Error(
        `Expected 'content/' directory in tarball, not found (${label})`,
      );
    }

    // 6. Clean destination and copy content
    if (existsSync(destDir)) {
      rmSync(destDir, { recursive: true });
    }
    mkdirSync(destDir, { recursive: true });
    execSync(`cp -R "${contentSrc}/"* "${destDir}/"`, { stdio: 'pipe' });

    // 7. Copy sidebar.json if present in artifact (written as-is;
    //    rebasing happens in buildSidebarEntries() at Astro config time)
    const sidebarSrc = join(extractDir, 'sidebar.json');
    if (existsSync(sidebarSrc)) {
      execSync(`cp "${sidebarSrc}" "${join(destDir, 'sidebar.json')}"`, {
        stdio: 'pipe',
      });
      console.log(`  Copied sidebar.json -> ${prefix}/sidebar.json`);
    }

    // 8. Apply post-import transforms (e.g. strip upstream-only frontmatter)
    if (task.postImportTransforms?.length) {
      applyPostImportTransforms(destDir, task.postImportTransforms, prefix);
    }

    console.log(`  Done: ${label} -> ${prefix}/`);
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log('Import Release Docs\n');

  const tasks = buildTasks();

  if (tasks.length === 0) {
    console.log('No github-artifact variants configured. Nothing to do.');
    return;
  }

  if (DRY_RUN) {
    console.log('Dry run — no downloads will be performed.\n');
    for (const task of tasks) {
      console.log(
        `  Would download: ${task.variant.owner}/${task.variant.repo}@${task.releaseTag}`,
      );
      console.log(`    -> ${task.prefix}/`);
    }
    return;
  }

  console.log(`Found ${tasks.length} artifact variant(s) to download.\n`);

  const failures: Array<{ label: string; error: string }> = [];

  for (const task of tasks) {
    try {
      await downloadAndUnpack(task);
    } catch (err) {
      const label = `${task.variant.owner}/${task.variant.repo}@${task.releaseTag}`;
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  Failed: ${label}: ${message}`);
      failures.push({ label, error: message });
    }
  }

  console.log('');
  if (failures.length > 0) {
    console.error(`${failures.length} failure(s):`);
    for (const f of failures) {
      console.error(`  - ${f.label}: ${f.error}`);
    }
    process.exit(1);
  }

  console.log('All artifact imports completed successfully.');
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
