#!/usr/bin/env npx tsx
/**
 * Starlight Auto-Sidebar Meta File Manager
 *
 * Generates _meta.yml files from typed sidebar metadata configs.
 * Each library's sidebar.config.ts exports glob-based metadata rules;
 * this script scans the content directory, matches folders against patterns,
 * and writes the corresponding _meta.yml files.
 *
 * Imports sidebarMetadata directly from each library's sidebar.config.ts
 * (not via the barrel) to avoid triggering Astro/Vite-specific imports
 * (e.g. .svg?raw) that don't work under tsx/Node.js.
 */

import {
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { basename, dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dump as yamlDump } from 'js-yaml';
import picomatch from 'picomatch';
import type { SidebarFolderMeta, SidebarMetadata, SidebarMetadataItem } from '../imports/types.js';

// Import sidebarMetadata directly from each library (bypasses barrel → import.config → SVG chain).
// NOTE: Keep in sync with SIDEBAR_METADATA in imports/configs/index.ts when adding libraries.
import { sidebarMetadata as algokitUtilsMeta } from '../imports/configs/algokit-utils/sidebar.config.js';
import { sidebarMetadata as algokitCliMeta } from '../imports/configs/algokit-cli/sidebar.config.js';
import { sidebarMetadata as algorandPythonMeta } from '../imports/configs/algorand-python/sidebar.config.js';
import { sidebarMetadata as algorandTypescriptMeta } from '../imports/configs/algorand-typescript/sidebar.config.js';
import { sidebarMetadata as algokitSubscriberMeta } from '../imports/configs/algokit-subscriber/sidebar.config.js';
import { sidebarMetadata as nodekitMeta } from '../imports/configs/nodekit/sidebar.config.js';

const SIDEBAR_METADATA: SidebarMetadata[] = [
  algokitUtilsMeta,
  algokitCliMeta,
  algorandPythonMeta,
  algorandTypescriptMeta,
  algokitSubscriberMeta,
  nodekitMeta,
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const CONTENT_DOCS_PATH = join(PROJECT_ROOT, 'src/content/docs');

// ── CLI args ───────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const options = {
  update: args.includes('--update'),
  overwrite: args.includes('--overwrite'),
  clean: args.includes('--clean'),
  dryRun: args.includes('--dry-run'),
  help: args.includes('--help') || args.includes('-h'),
};

function showHelp(): void {
  console.log(`
Starlight Auto-Sidebar Meta File Manager

Usage: npx tsx scripts/manage-sidebar-meta.ts [options]

Options:
  --update      Update existing _meta.yml files, create if missing
  --overwrite   Overwrite all _meta.yml files regardless of existence
  --clean       Remove all _meta.yml files recursively from src/content/docs/
  --dry-run     Preview changes without writing files
  --help, -h    Show this help message

Default behavior: Create _meta.yml files only if they don't exist

Examples:
  npx tsx scripts/manage-sidebar-meta.ts                    # Create missing files
  npx tsx scripts/manage-sidebar-meta.ts --update           # Update existing + create missing
  npx tsx scripts/manage-sidebar-meta.ts --overwrite        # Replace all files
  npx tsx scripts/manage-sidebar-meta.ts --clean --dry-run  # Preview cleanup
`);
}

// ── Filesystem helpers ─────────────────────────────────────────────────────

/** Recursively collect all directory paths under `dir`. */
function collectDirectories(dir: string): string[] {
  const dirs: string[] = [];
  try {
    for (const item of readdirSync(dir)) {
      const fullPath = join(dir, item);
      if (statSync(fullPath).isDirectory()) {
        dirs.push(fullPath);
        dirs.push(...collectDirectories(fullPath));
      }
    }
  } catch {
    // Skip directories we can't read
  }
  return dirs;
}

/** Recursively find all _meta.yml files under `dir`. */
function findAllMetaFiles(dir: string): string[] {
  const metaFiles: string[] = [];
  try {
    for (const item of readdirSync(dir)) {
      const fullPath = join(dir, item);
      if (statSync(fullPath).isDirectory()) {
        metaFiles.push(...findAllMetaFiles(fullPath));
      } else if (item === '_meta.yml') {
        metaFiles.push(fullPath);
      }
    }
  } catch {
    // Skip directories we can't read
  }
  return metaFiles;
}

// ── Core logic ─────────────────────────────────────────────────────────────

/** Flatten all metadata items from all libraries into a single ordered list. */
function flattenMetadataItems(): SidebarMetadataItem[] {
  return SIDEBAR_METADATA.flatMap(m => m.items);
}

/**
 * Resolve a SidebarFolderMeta into a plain object suitable for YAML serialization.
 * Calls label transform functions with the folder basename.
 */
function resolveMeta(
  meta: SidebarFolderMeta,
  folderName: string,
): Record<string, unknown> {
  const resolved: Record<string, unknown> = {};

  if (meta.label !== undefined) {
    resolved.label =
      typeof meta.label === 'function' ? meta.label(folderName) : meta.label;
  }
  if (meta.order !== undefined) resolved.order = meta.order;
  if (meta.collapsed !== undefined) resolved.collapsed = meta.collapsed;
  if (meta.cascade !== undefined) resolved.cascade = meta.cascade;
  if (meta.badge !== undefined) resolved.badge = meta.badge;
  if (meta.hidden !== undefined) resolved.hidden = meta.hidden;
  if (meta.depth !== undefined) resolved.depth = meta.depth;
  if (meta.sort !== undefined) resolved.sort = meta.sort;

  return resolved;
}

/** Match all metadata rules against filesystem directories and return folder→meta map. */
function matchMetadataToFolders(): Map<string, Record<string, unknown>> {
  const allItems = flattenMetadataItems();
  if (allItems.length === 0) return new Map();

  // Pre-compile matchers
  const matchers = allItems.map(item => ({
    match: picomatch(item.pattern),
    meta: item.meta,
  }));

  // Scan filesystem for all directories
  const allDirs = collectDirectories(CONTENT_DOCS_PATH);
  const result = new Map<string, Record<string, unknown>>();

  for (const dirPath of allDirs) {
    const relPath = relative(CONTENT_DOCS_PATH, dirPath);
    const folderName = basename(dirPath);

    // Shallow-merge all matching rules (later rules override earlier)
    let merged: Record<string, unknown> | null = null;
    for (const { match, meta } of matchers) {
      if (match(relPath)) {
        const resolved = resolveMeta(meta, folderName);
        if (merged === null) {
          merged = resolved;
        } else {
          merged = Object.assign({}, merged, resolved);
        }
      }
    }

    if (merged && Object.keys(merged).length > 0) {
      result.set(dirPath, merged);
    }
  }

  return result;
}

// ── File operations ────────────────────────────────────────────────────────

interface OperationResult {
  success: boolean;
  action: string;
  reason?: string;
}

function cleanAllMetaFiles(): { delete: number; error: number } {
  const metaFiles = findAllMetaFiles(CONTENT_DOCS_PATH);
  const results = { delete: 0, error: 0 };

  for (const metaFilePath of metaFiles) {
    const relativePath = relative(CONTENT_DOCS_PATH, metaFilePath);
    try {
      if (!options.dryRun) unlinkSync(metaFilePath);
      results.delete++;
      console.log(`✅ Deleted: ${relativePath}`);
    } catch (error) {
      results.error++;
      console.log(
        `❌ Error deleting: ${relativePath} (${(error as Error).message})`,
      );
    }
  }

  return results;
}

function writeMetaFile(
  folderPath: string,
  meta: Record<string, unknown>,
): OperationResult {
  const metaFilePath = join(folderPath, '_meta.yml');
  const fileExists = existsSync(metaFilePath);

  // Determine action
  if (fileExists && !options.update && !options.overwrite) {
    return { success: true, action: 'skip', reason: 'File exists' };
  }
  const action = fileExists
    ? options.overwrite
      ? 'overwrite'
      : 'update'
    : 'create';

  // Serialize to YAML (no trailing newline to match existing format)
  const yamlContent = yamlDump(meta, {
    indent: 2,
    lineWidth: -1,
    noRefs: true,
    sortKeys: false,
  }).trimEnd();

  if (!options.dryRun) {
    try {
      if (!existsSync(folderPath)) mkdirSync(folderPath, { recursive: true });
      writeFileSync(metaFilePath, yamlContent, 'utf8');
    } catch (error) {
      return { success: false, action, reason: (error as Error).message };
    }
  }

  return { success: true, action };
}

// ── Main ───────────────────────────────────────────────────────────────────

function main(): void {
  if (options.help) {
    showHelp();
    return;
  }

  console.log('🔧 Starlight Auto-Sidebar Meta File Manager\n');
  if (options.dryRun) console.log('🔍 DRY RUN MODE - No files will be modified\n');

  // Handle clean mode
  if (options.clean) {
    console.log('🧹 Cleaning all _meta.yml files from src/content/docs/\n');
    const cleanResults = cleanAllMetaFiles();
    console.log('\n📊 Summary:');
    if (cleanResults.delete > 0) console.log(`   delete: ${cleanResults.delete}`);
    if (cleanResults.error > 0) console.log(`   error: ${cleanResults.error}`);
    if (cleanResults.error > 0) {
      console.log('\n❌ Some operations failed.');
      process.exit(1);
    } else {
      console.log('\n✅ All operations completed successfully!');
    }
    return;
  }

  // Match metadata rules to filesystem directories
  const folderMeta = matchMetadataToFolders();
  console.log(`📋 Matched ${folderMeta.size} folders from sidebar metadata configs\n`);

  const results: Record<string, number> = {
    create: 0,
    update: 0,
    overwrite: 0,
    skip: 0,
    error: 0,
  };

  for (const [folderPath, meta] of folderMeta) {
    const result = writeMetaFile(folderPath, meta);
    results[result.success ? result.action : 'error']++;

    const icon = result.success ? '✅' : '❌';
    const actionText: Record<string, string> = {
      create: 'Created',
      update: 'Updated',
      overwrite: 'Overwritten',
      skip: 'Skipped',
      error: 'Error',
    };
    const relativePath = relative(CONTENT_DOCS_PATH, folderPath);
    const reasonText = result.reason ? ` (${result.reason})` : '';
    console.log(`${icon} ${actionText[result.action] ?? result.action}: ${relativePath}${reasonText}`);
  }

  console.log('\n📊 Summary:');
  for (const [action, count] of Object.entries(results)) {
    if (count > 0) console.log(`   ${action}: ${count}`);
  }

  if (results.error > 0) {
    console.log('\n❌ Some operations failed.');
    process.exit(1);
  } else {
    console.log('\n✅ All operations completed successfully!');
  }
}

main();
