import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';
import { Octokit } from 'octokit';
import { githubLoader } from '@larkiny/astro-github-loader';
import { autoSidebarLoader } from 'starlight-auto-sidebar/loader';
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema';
import type {
  ImportOptions,
  LoaderContext,
} from '@larkiny/astro-github-loader';
import { execSync } from 'child_process';
import { relative } from 'path';

// Import external repo doc configs
import {
  arcStandardsConfig,
  nodekitConfig,
  algokitCLIConfig,
  utilsTypescriptConfig,
  utilsPythonConfig,
  puyaTsConfig,
  puyaPyConfig,
  algokitSubscriberConfig,
} from '../../imports/configs/index.js';

const IMPORT_GITHUB = process.env.IMPORT_GITHUB === 'true';
const IMPORT_DRY_RUN = process.env.IMPORT_DRY_RUN === 'true';
const FORCE_IMPORT = process.env.FORCE_IMPORT === 'true';
const IMPORT_SOURCE_REPO = process.env.IMPORT_SOURCE_REPO;
const GITHUB_API_CLIENT = new Octokit({ auth: import.meta.env.GITHUB_TOKEN });

// List of remote content configs to import
const REMOTE_CONTENT: ImportOptions[] = [
  arcStandardsConfig,
  nodekitConfig,
  algokitCLIConfig,
  utilsTypescriptConfig,
  utilsPythonConfig,
  puyaTsConfig,
  puyaPyConfig,
  algokitSubscriberConfig,
];

export const collections = {
  docs: defineCollection({
    loader: {
      name: 'algorand-docs',
      load: async context => {
        await docsLoader().load(context);

        if (IMPORT_GITHUB) {
          console.log('🔄 Importing content from GitHub repositories...');
          if (IMPORT_SOURCE_REPO) {
            console.log(`🎯 Filtering for repository: ${IMPORT_SOURCE_REPO}`);
          }

          // Track import results
          const updated: Array<{ name: string; filesChanged: number }> = [];
          const skipped: string[] = [];
          const failed: string[] = [];
          let totalFilesChanged = 0;

          // Helper function to count changed files for a config
          const getChangedFilesForConfig = (
            config: ImportOptions,
          ): number => {
            try {
              // Get all changed files from git status
              const gitStatus = execSync('git status --porcelain', {
                encoding: 'utf-8',
              });
              const changedFiles = gitStatus
                .split('\n')
                .filter(line => line.trim())
                .map(line => line.substring(3)); // Remove status prefix

              // Filter files that match this config's basePaths
              let matchingFiles = 0;
              for (const include of config.includes || []) {
                if (include.basePath) {
                  matchingFiles += changedFiles.filter(file =>
                    file.startsWith(include.basePath),
                  ).length;
                }
              }

              return matchingFiles;
            } catch (error) {
              console.warn(
                `⚠️  Could not count changed files for ${config.name}:`,
                error,
              );
              return 0;
            }
          };

          for (const config of REMOTE_CONTENT) {
            const configName = config.name || `${config.owner}/${config.repo}`;

            if (!config.enabled) {
              skipped.push(configName);
              continue;
            }

            const configRepoId = `${config.owner}/${config.repo}`;

            // Skip if a specific repo is requested and this isn't it
            if (IMPORT_SOURCE_REPO && configRepoId !== IMPORT_SOURCE_REPO) {
              console.log(
                `⏭️  Skipping ${configName} (${configRepoId}) - filtering for ${IMPORT_SOURCE_REPO}`,
              );
              skipped.push(configName);
              continue;
            }

            try {
              console.log(`📥 Loading ${configName}...`);

              // Get file count before import
              const filesBeforeImport = getChangedFilesForConfig(config);

              await githubLoader({
                octokit: GITHUB_API_CLIENT,
                configs: [config],
                clear: config.clear ?? false,
                dryRun: IMPORT_DRY_RUN,
                force: FORCE_IMPORT,
              }).load(context as LoaderContext);

              // Get file count after import
              const filesAfterImport = getChangedFilesForConfig(config);
              const filesChanged = filesAfterImport - filesBeforeImport;

              console.log(`✅ ${configName} loaded successfully`);

              if (filesChanged > 0) {
                updated.push({ name: configName, filesChanged });
                totalFilesChanged += filesChanged;
              }
            } catch (error) {
              console.error(`❌ Error loading ${configName}:`, error);
              failed.push(configName);
            }
          }

          // Output structured JSON summary
          const summary = {
            updated,
            skipped,
            failed,
            totalConfigs: REMOTE_CONTENT.length,
            successCount: updated.length,
            totalFilesChanged,
          };

          console.log(`IMPORT_SUMMARY_JSON=${JSON.stringify(summary)}`);
        }
      },
    },
    schema: docsSchema({
      extend: z.object({
        titleImageLight: z.string().optional(),
        titleImageDark: z.string().optional(),
        contentType: z
          .enum(['tutorial', 'how-to', 'guide', 'reference'])
          .optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  }),
  autoSidebar: defineCollection({
    loader: autoSidebarLoader(),
    schema: autoSidebarSchema(),
  }),
};
