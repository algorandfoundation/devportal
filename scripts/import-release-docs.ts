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
  renameSync,
  rmSync,
  writeFileSync,
} from 'fs';
import { execSync } from 'child_process';
import { join, posix, relative } from 'path';
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

/**
 * Recursively lowercase all filenames and directory names.
 * Processes bottom-up (deepest files first) to avoid path conflicts.
 * Needed because starlight-typedoc generates mixed-case filenames
 * (e.g. AlgorandClient.md) while its links are already lowercase.
 */
function lowercaseFilenames(dir: string): void {
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = join(dir, entry.name);
      lowercaseFilenames(fullPath);

      const lower = entry.name.toLowerCase();
      if (lower !== entry.name) {
        renameSync(fullPath, join(dir, lower));
      }
    }
  }

  for (const entry of entries) {
    if (entry.isFile()) {
      const lower = entry.name.toLowerCase();
      if (lower !== entry.name) {
        renameSync(join(dir, entry.name), join(dir, lower));
      }
    }
  }
}

/**
 * Rename any readme.md files to index.md (must run after lowercaseFilenames).
 * Starlight expects index.md for directory routing.
 */
function renameReadmeToIndex(dir: string): void {
  for (const filePath of walkFiles(dir)) {
    if (posix.basename(filePath).toLowerCase() === 'readme.md') {
      const indexPath = join(posix.dirname(filePath), 'index.md');
      renameSync(filePath, indexPath);
    }
  }
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

// ---------------------------------------------------------------------------
// Link normalization
// ---------------------------------------------------------------------------

/**
 * Markdown link regex — matches `[text](url)` capturing the URL.
 * Handles optional titles: `[text](url "title")`.
 */
const MD_LINK_RE = /\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

/**
 * Normalize all markdown links in a file to absolute devportal paths.
 *
 * Two rewrites:
 * 1. Absolute links starting with `/<siteBase>/` → `/<prefix>/rest`
 *    (library's Starlight site base → devportal content path)
 * 2. Relative links (starting with `.` or no `/` prefix) → resolved to
 *    absolute `/<prefix>/resolved` based on the file's location
 *
 * Also strips `.md`/`.mdx` extensions and normalises `/index` → `/`.
 */
function normalizeLinks(
  content: string,
  filePath: string,
  siteBase: string,
  prefix: string,
): string {
  return content.replace(MD_LINK_RE, (match, text, url: string) => {
    // Preserve external links, anchors-only, and mailto/tel
    if (/^(https?:|mailto:|tel:|#)/.test(url)) return match;

    // Split off anchor fragment
    const hashIdx = url.indexOf('#');
    let path = hashIdx >= 0 ? url.slice(0, hashIdx) : url;
    const anchor = hashIdx >= 0 ? url.slice(hashIdx) : '';

    // Skip empty paths (anchor-only after split)
    if (!path) return match;

    let absolute: string;

    if (path.startsWith(`/${siteBase}/`)) {
      // Rewrite: /algokit-utils-ts/api/foo → /docs/algokit-utils/typescript/latest/api/foo
      absolute = `/${prefix}/${path.slice(siteBase.length + 2)}`;
    } else if (path.startsWith('/')) {
      // Other absolute links — leave as-is (could be cross-library or site-wide)
      return match;
    } else {
      // Relative link resolution strategy depends on whether the link
      // target has a .md/.mdx extension:
      //
      // - WITH extension (e.g. `./app-deploy.md`): file-relative. Resolved
      //   against the file's directory on the filesystem.
      // - WITHOUT extension (e.g. `../../core/algorand-client`): URL-relative.
      //   The page slug acts as an additional directory level (Starlight pages
      //   have trailing-slash URLs like `/concepts/building/app-client/`).
      //   Index files are the exception — they map to the directory URL.
      const hasExtension = /\.(md|mdx)$/i.test(path);
      let baseDir: string;

      if (hasExtension) {
        // File-relative: use the file's directory
        baseDir = posix.dirname(filePath);
      } else {
        // URL-relative: page slug adds a directory level (except index files)
        const isIndex = /(?:^|\/)?index\.(md|mdx)$/i.test(filePath);
        baseDir = isIndex
          ? posix.dirname(filePath)
          : filePath.replace(/\.(md|mdx)$/i, '');
      }

      const resolved = posix.normalize(posix.join(baseDir, path));
      // Guard against paths that escape the content root
      if (resolved.startsWith('..')) return match;
      absolute = `/${prefix}/${resolved}`;
    }

    // Strip .md/.mdx extensions
    absolute = absolute.replace(/\.(md|mdx)$/i, '');

    // Normalise /index → /
    absolute = absolute.replace(/\/index$/, '/');

    // Ensure trailing slash for directory-style URLs (no extension, no trailing /)
    if (!absolute.endsWith('/') && !posix.extname(absolute)) {
      absolute += '/';
    }

    // Lowercase to match lowercased filenames on disk
    absolute = absolute.toLowerCase();

    return `[${text}](${absolute}${anchor})`;
  });
}

/**
 * Normalize links in all markdown files within a directory.
 * Called as a built-in step after unpacking — no per-library config needed.
 */
function normalizeAllLinks(
  destDir: string,
  siteBase: string,
  prefix: string,
): void {
  const allFiles = walkFiles(destDir);
  let count = 0;

  for (const filePath of allFiles) {
    if (!/\.(md|mdx)$/i.test(filePath)) continue;

    const rel = relative(destDir, filePath);
    const content = readFileSync(filePath, 'utf-8');
    const normalized = normalizeLinks(content, rel, siteBase, prefix);

    if (normalized !== content) {
      writeFileSync(filePath, normalized);
      count++;
    }
  }

  if (count > 0) {
    console.log(`  Normalized links in ${count} file(s)`);
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

    // 7. Lowercase all filenames (handles TypeDoc mixed-case output)
    lowercaseFilenames(destDir);

    // 8. Rename readme.md → index.md (Starlight convention)
    renameReadmeToIndex(destDir);

    // 9. Copy sidebar.json if present in artifact (written as-is;
    //    rebasing happens in buildSidebarEntries() at Astro config time)
    const sidebarSrc = join(extractDir, 'sidebar.json');
    if (existsSync(sidebarSrc)) {
      execSync(`cp "${sidebarSrc}" "${join(destDir, 'sidebar.json')}"`, {
        stdio: 'pipe',
      });
      console.log(`  Copied sidebar.json -> ${prefix}/sidebar.json`);
    }

    // 10. Read site base from manifest (self-describing artifact),
    //     falling back to repo name for older tarballs without it.
    const manifestPath = join(extractDir, 'manifest.json');
    let siteBase = variant.repo;
    if (existsSync(manifestPath)) {
      try {
        const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
        if (manifest.base && manifest.base !== '/') {
          // Strip leading/trailing slashes — normalizeLinks expects bare name (e.g. 'algokit-utils-ts')
          siteBase = manifest.base.replace(/^\//, '').replace(/\/$/, '');
        }
      } catch {
        console.warn(`  Warning: could not parse manifest.json, using repo name as siteBase`);
      }
    }

    // 11. Normalize links: rewrite library site-base URLs and resolve
    //     relative links to absolute devportal paths.
    normalizeAllLinks(destDir, siteBase, prefix);

    // 12. Apply post-import transforms (e.g. strip upstream-only frontmatter)
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
