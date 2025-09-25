import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
  unlinkSync,
} from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { load as yamlLoad } from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const CONTENT_DOCS_PATH = join(PROJECT_ROOT, 'src/content/docs');
const CONFIG_FILE = join(PROJECT_ROOT, 'auto-sidebar-config.yml');

interface Options {
  update: boolean;
  overwrite: boolean;
  clean: boolean;
  dryRun: boolean;
  help: boolean;
}

interface SidebarConfig {
  folder: string;
  content: string;
}

interface ConfigFile {
  configs?: SidebarConfig[];
}

interface OperationResult {
  success: boolean;
  action:
    | 'create'
    | 'update'
    | 'overwrite'
    | 'skip'
    | 'delete'
    | 'error'
    | 'skipped';
  reason?: string;
}

interface ResultsSummary {
  create: number;
  update: number;
  overwrite: number;
  skip: number;
  delete: number;
  error: number;
}

interface CleanResults {
  delete: number;
  error: number;
}

const args: string[] = process.argv.slice(2);
const options: Options = {
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

function loadConfig(): SidebarConfig[] {
  try {
    const configContent: string = readFileSync(CONFIG_FILE, 'utf8');
    const yamlConfig = yamlLoad(configContent) as ConfigFile;
    return yamlConfig.configs || [];
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error(`❌ Error loading config file ${CONFIG_FILE}:`, errorMessage);
    process.exit(1);
  }
}

function generateMetaContent(config: SidebarConfig): string {
  return config.content.trim();
}

function getFolderPath(folder: string): string {
  return join(CONTENT_DOCS_PATH, folder);
}

function getMetaFilePath(folder: string): string {
  return join(getFolderPath(folder), '_meta.yml');
}

function validateFolderExists(folder: string): boolean {
  const folderPath: string = getFolderPath(folder);
  if (!existsSync(folderPath)) {
    console.warn(`⚠️  Folder does not exist: ${folder}`);
    return false;
  }
  return true;
}

function findAllMetaFiles(dir: string): string[] {
  const metaFiles: string[] = [];

  try {
    const items: string[] = readdirSync(dir);

    for (const item of items) {
      const fullPath: string = join(dir, item);
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

function cleanAllMetaFiles(options: Options): CleanResults {
  const metaFiles: string[] = findAllMetaFiles(CONTENT_DOCS_PATH);
  const results: CleanResults = { delete: 0, error: 0 };

  for (const metaFilePath of metaFiles) {
    // Get relative path for display
    const relativePath: string = metaFilePath.replace(
      CONTENT_DOCS_PATH + '/',
      '',
    );

    try {
      if (!options.dryRun) {
        unlinkSync(metaFilePath);
      }
      results.delete++;
      console.log(`✅ Deleted: ${relativePath}`);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      results.error++;
      console.log(`❌ Error deleting: ${relativePath} (${errorMessage})`);
    }
  }

  return results;
}

function createMetaFile(
  config: SidebarConfig,
  options: Options,
): OperationResult {
  const { folder } = config;
  const folderPath: string = getFolderPath(folder);
  const metaFilePath: string = getMetaFilePath(folder);
  const metaContent: string = generateMetaContent(config);

  // Check if folder exists
  if (!validateFolderExists(folder)) {
    return {
      success: false,
      action: 'skipped',
      reason: 'Folder does not exist',
    };
  }

  // Check if file exists and determine action
  const fileExists: boolean = existsSync(metaFilePath);
  let action: 'create' | 'update' | 'overwrite' | 'skip' = 'create';
  let shouldWrite: boolean = true;

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
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      return { success: false, action, reason: errorMessage };
    }
  }

  return { success: true, action };
}

function main(): void {
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
    const cleanResults: CleanResults = cleanAllMetaFiles(options);

    console.log('\n📊 Summary:');
    if (cleanResults.delete > 0)
      console.log(`   delete: ${cleanResults.delete}`);
    if (cleanResults.error > 0) console.log(`   error: ${cleanResults.error}`);

    if (cleanResults.error > 0) {
      console.log(
        '\n❌ Some operations failed. Check the output above for details.',
      );
      process.exit(1);
    } else {
      console.log('\n✅ All operations completed successfully!');
    }
    return;
  }

  // Load configuration for non-clean operations
  const config: SidebarConfig[] = loadConfig();
  console.log(
    `📋 Loaded ${config.length} sidebar configurations from ${CONFIG_FILE}\n`,
  );

  const results: ResultsSummary = {
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
    const result: OperationResult = createMetaFile(itemConfig, options);

    if (result.success && result.action !== 'skipped') {
      results[result.action as keyof ResultsSummary]++;
    } else if (!result.success) {
      results.error++;
    }

    // Log result
    const icon: string = result.success ? '✅' : '❌';
    const actionText: string =
      {
        create: 'Created',
        update: 'Updated',
        overwrite: 'Overwritten',
        skip: 'Skipped',
        skipped: 'Skipped',
        delete: 'Deleted',
        error: 'Error',
      }[result.action] || result.action;

    const reasonText: string = result.reason ? ` (${result.reason})` : '';
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
