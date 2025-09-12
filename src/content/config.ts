import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';
import { Octokit } from 'octokit';
import { githubLoader, ImportOptions } from '@larkiny/astro-github-loader';

const IMPORT_REMOTE = process.env.IMPORT_GITHUB === 'true';
const GITHUB_API_CLIENT = new Octokit({ auth: import.meta.env.GITHUB_TOKEN });

const REMOTE_CONTENT: ImportOptions[] = [
  {
    name: 'ARC Standards',
    owner: 'algorandfoundation',
    repo: 'arcs',
    ref: 'devportal',
    path: '_devportal/content',
    replace: '_devportal/content/',
    basePath: 'src/content/docs/arc-standards',
    assetsPath: 'src/assets/imports/arcs',
    assetsBaseUrl: '~/assets/imports/arcs',
    enabled: true,
    clear: true,
  },
];

export const collections = {
  docs: defineCollection({
    loader: {
      name: 'docs',
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
              }).load(context);
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
