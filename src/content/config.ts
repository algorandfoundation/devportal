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

          for (const config of REMOTE_CONTENT) {
            if (!config.enabled) continue;

            const configRepoId = `${config.owner}/${config.repo}`;

            // Skip if a specific repo is requested and this isn't it
            if (IMPORT_SOURCE_REPO && configRepoId !== IMPORT_SOURCE_REPO) {
              console.log(
                `⏭️  Skipping ${config.name} (${configRepoId}) - filtering for ${IMPORT_SOURCE_REPO}`,
              );
              continue;
            }

            try {
              console.log(`📥 Loading ${config.name}...`);
              await githubLoader({
                octokit: GITHUB_API_CLIENT,
                configs: [config],
                clear: config.clear ?? false,
                dryRun: IMPORT_DRY_RUN,
                force: FORCE_IMPORT,
              }).load(context as LoaderContext);
              console.log(`✅ ${config.name} loaded successfully`);
            } catch (error) {
              console.error(`❌ Error loading ${config.name}:`, error);
            }
          }
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
