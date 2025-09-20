import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';
import { Octokit } from 'octokit';
import { githubLoader } from '@larkiny/astro-github-loader';
import type {
  ImportOptions,
  LoaderContext,
} from '@larkiny/astro-github-loader';

// Import external repo doc configs
import {
  arcStandardsConfig,
  nodekitConfig,
  algokitCLIConfig,
  algokitUtilsTypescriptConfig,
  algokitUtilsPythonConfig,
} from '../../imports/configs/index.js';

const IMPORT_REMOTE = process.env.IMPORT_GITHUB === 'true';
const IS_DRY_RUN = process.env.IMPORT_DRY_RUN === 'true';
const GITHUB_API_CLIENT = new Octokit({ auth: import.meta.env.GITHUB_TOKEN });

// List of remote content configs to import
const REMOTE_CONTENT: ImportOptions[] = [
  arcStandardsConfig,
  nodekitConfig,
  algokitCLIConfig,
  algokitUtilsTypescriptConfig,
  algokitUtilsPythonConfig,
];

export const collections = {
  docs: defineCollection({
    loader: {
      name: 'algorand-docs',
      load: async context => {
        await docsLoader().load(context);

        if (IMPORT_REMOTE) {
          console.log('🔄 Importing content from GitHub repositories...');

          for (const config of REMOTE_CONTENT) {
            if (!config.enabled) continue;

            try {
              console.log(
                `📥 Loading ${config.name} (clear: ${config.clear})...`,
              );
              await githubLoader({
                octokit: GITHUB_API_CLIENT,
                configs: [config],
                clear: config.clear,
                dryRun: IS_DRY_RUN,
              }).load(context as LoaderContext);
              console.log(`✅ ${config.name} loaded successfully`);
            } catch (error) {
              console.error(`❌ Error loading ${config.name}:`, error);
            }
          }
        }
      },
    },
    schema: docsSchema(),
  }),
};
