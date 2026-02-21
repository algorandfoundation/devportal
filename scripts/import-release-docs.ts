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
  rmSync,
  writeFileSync,
} from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';
import { tmpdir } from 'os';

import { Octokit } from 'octokit';

// NOTE: We cannot import LIBRARY_CONFIGS from the barrel (imports/configs/index.ts)
// because it pulls in import.config.ts files that use .svg?raw imports — a Vite-only
// feature that doesn't work under tsx/Node.js. Instead, we import the artifact
// registry directly. When adding a new artifact variant, update ARTIFACT_VARIANTS below.
import type { GithubArtifactConfig } from '../imports/types.js';
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

/** An artifact variant paired with its library slug. */
interface ArtifactEntry {
  librarySlug: string;
  variant: GithubArtifactConfig;
}

interface DownloadTask {
  librarySlug: string;
  variant: GithubArtifactConfig;
  version: VersionConfig;
  releaseTag: string;
  destDir: string;
  prefix: string;
}

// ---------------------------------------------------------------------------
// Artifact registry
// ---------------------------------------------------------------------------

// Register artifact variants here. Each entry maps a library slug to its
// github-artifact variant config. When a library variant is migrated to the
// artifact strategy, add it here.
//
// NOTE: Keep in sync with the corresponding import.config.ts variant.
const ARTIFACT_VARIANTS: ArtifactEntry[] = [
  // Add artifact variants here when migrating a library.
  // Example:
  // {
  //   librarySlug: 'algokit-utils',
  //   variant: {
  //     source: 'github-artifact',
  //     language: 'TypeScript',
  //     versions: [{ slug: 'latest', label: 'Latest' }],
  //     owner: 'algorandfoundation',
  //     repo: 'algokit-utils-ts',
  //   },
  // },
];

// ---------------------------------------------------------------------------
// Task builder
// ---------------------------------------------------------------------------

function buildTasks(): DownloadTask[] {
  const tasks: DownloadTask[] = [];

  for (const { librarySlug, variant } of ARTIFACT_VARIANTS) {
    for (const version of variant.versions) {
      const releaseTag =
        version.slug === 'latest' ? 'docs-latest' : version.slug;
      const lang = variant.language.toLowerCase();
      const prefix = `docs/${librarySlug}/${lang}/${version.slug}`;
      const destDir = join(CONTENT_DOCS_DIR, prefix);

      tasks.push({
        librarySlug,
        variant,
        version,
        releaseTag,
        destDir,
        prefix,
      });
    }
  }

  return tasks;
}

// ---------------------------------------------------------------------------
// Download + unpack
// ---------------------------------------------------------------------------

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
