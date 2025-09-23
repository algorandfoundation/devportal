#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync, unlinkSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { load as yamlLoad } from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const CONTENT_DOCS_PATH = join(PROJECT_ROOT, 'src/content/docs');
const CONFIG_FILE = join(PROJECT_ROOT, 'auto-sidebar-config.yml');

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  update: args.includes('--update'),
  overwrite: args.includes('--overwrite'),
  clean: args.includes('--clean'),
  dryRun: args.includes('--dry-run'),
  help: args.includes('--help') || args.includes('-h'),
};

function showHelp() {
  console.log(`
Starlight Auto-Sidebar Meta File Manager

Usage: node scripts/manage-sidebar-meta.js [options]

Options:
  --update      Update existing _meta.yml files, create if missing
  --overwrite   Overwrite all _meta.yml files regardless of existence
  --clean       Remove all _meta.yml files recursively from src/content/docs/
  --dry-run     Preview changes without writing files
  --help, -h    Show this help message

Default behavior: Create _meta.yml files only if they don't exist

Examples:
  node scripts/manage-sidebar-meta.js                    # Create missing files
  node scripts/manage-sidebar-meta.js --update           # Update existing + create missing
  node scripts/manage-sidebar-meta.js --overwrite        # Replace all files
  node scripts/manage-sidebar-meta.js --clean --dry-run  # Preview cleanup
`);
}

function loadConfig() {
  try {
    const configContent = readFileSync(CONFIG_FILE, 'utf8');
    const yamlConfig = yamlLoad(configContent);
    return yamlConfig.configs || [];
  } catch (error) {
    console.error(
      `❌ Error loading config file ${CONFIG_FILE}:`,
      error.message,
    );
    process.exit(1);
  }
}

function generateMetaContent(config) {
  // Return the content directly as provided in the YAML config
  return config.content.trim();
}

function getFolderPath(folder) {
  return join(CONTENT_DOCS_PATH, folder);
}

function getMetaFilePath(folder) {
  return join(getFolderPath(folder), '_meta.yml');
}

function validateFolderExists(folder) {
  const folderPath = getFolderPath(folder);
  if (!existsSync(folderPath)) {
    console.warn(`⚠️  Folder does not exist: ${folder}`);
    return false;
  }
  return true;
}

function findAllMetaFiles(dir) {
  const metaFiles = [];

  try {
    const items = readdirSync(dir);

    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively search subdirectories
        metaFiles.push(...findAllMetaFiles(fullPath));
      } else if (item === '_meta.yml') {
        metaFiles.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }

  return metaFiles;
}

function cleanAllMetaFiles(options) {
  const metaFiles = findAllMetaFiles(CONTENT_DOCS_PATH);
  const results = { delete: 0, error: 0 };

  for (const metaFilePath of metaFiles) {
    // Get relative path for display
    const relativePath = metaFilePath.replace(CONTENT_DOCS_PATH + '/', '');

    try {
      if (!options.dryRun) {
        unlinkSync(metaFilePath);
      }
      results.delete++;
      console.log(`✅ Deleted: ${relativePath}`);
    } catch (error) {
      results.error++;
      console.log(`❌ Error deleting: ${relativePath} (${error.message})`);
    }
  }

  return results;
}

function createMetaFile(config, options) {
  const { folder } = config;
  const folderPath = getFolderPath(folder);
  const metaFilePath = getMetaFilePath(folder);
  const metaContent = generateMetaContent(config);

  // Check if folder exists
  if (!validateFolderExists(folder)) {
    return {
      success: false,
      action: 'skipped',
      reason: 'Folder does not exist',
    };
  }

  // Check if file exists and determine action
  const fileExists = existsSync(metaFilePath);
  let action = 'create';
  let shouldWrite = true;

  if (fileExists) {
    if (!options.update && !options.overwrite) {
      action = 'skip';
      shouldWrite = false;
    } else {
      action = options.overwrite ? 'overwrite' : 'update';
    }
  }

  if (!shouldWrite) {
    return { success: true, action: 'skip', reason: 'File exists' };
  }

  // Write the file (unless dry run)
  if (!options.dryRun) {
    try {
      // Ensure directory exists
      if (!existsSync(folderPath)) {
        mkdirSync(folderPath, { recursive: true });
      }

      writeFileSync(metaFilePath, metaContent, 'utf8');
    } catch (error) {
      return { success: false, action, reason: error.message };
    }
  }

  return { success: true, action };
}

function main() {
  if (options.help) {
    showHelp();
    return;
  }

  console.log('🔧 Starlight Auto-Sidebar Meta File Manager\n');

  if (options.dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  // Handle clean mode separately
  if (options.clean) {
    console.log('🧹 Cleaning all _meta.yml files from src/content/docs/\n');
    const cleanResults = cleanAllMetaFiles(options);

    console.log('\n📊 Summary:');
    if (cleanResults.delete > 0) console.log(`   delete: ${cleanResults.delete}`);
    if (cleanResults.error > 0) console.log(`   error: ${cleanResults.error}`);

    if (cleanResults.error > 0) {
      console.log('\n❌ Some operations failed. Check the output above for details.');
      process.exit(1);
    } else {
      console.log('\n✅ All operations completed successfully!');
    }
    return;
  }

  // Load configuration for non-clean operations
  const config = loadConfig();
  console.log(
    `📋 Loaded ${config.length} sidebar configurations from ${CONFIG_FILE}\n`,
  );

  const results = {
    create: 0,
    update: 0,
    overwrite: 0,
    skip: 0,
    delete: 0,
    error: 0,
  };

  // Process each configuration
  for (const itemConfig of config) {
    const { folder } = itemConfig;
    const result = createMetaFile(itemConfig, options);

    results[result.success ? result.action : 'error']++;

    // Log result
    const icon = result.success ? '✅' : '❌';
    const actionText =
      {
        create: 'Created',
        update: 'Updated',
        overwrite: 'Overwritten',
        skip: 'Skipped',
        delete: 'Deleted',
        error: 'Error',
      }[result.action] || result.action;

    const reasonText = result.reason ? ` (${result.reason})` : '';
    console.log(`${icon} ${actionText}: ${folder}${reasonText}`);
  }

  // Print summary
  console.log('\n📊 Summary:');
  for (const [action, count] of Object.entries(results)) {
    if (count > 0) {
      console.log(`   ${action}: ${count}`);
    }
  }

  if (results.error > 0) {
    console.log(
      '\n❌ Some operations failed. Check the output above for details.',
    );
    process.exit(1);
  } else {
    console.log('\n✅ All operations completed successfully!');
  }
}

main();
