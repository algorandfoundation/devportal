import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';
import { Octokit } from 'octokit';
import { githubLoader } from 'astro-github-loader';

const REMOTE_CONTENT = [
  {
    // ARC Standards
    owner: 'algorandfoundation',
    repo: 'arcs',
    ref: 'devportal',
    path: '_devportal/content',
    replace: '_devportal/content/',
    basePath: 'src/content/docs/arc-standards',
    assetsPath: 'src/assets/imports/arcs',
    assetsBaseUrl: '~/assets/imports/arcs',
  },
];

const octokit = new Octokit({ auth: import.meta.env.GITHUB_TOKEN });

export const collections = {
  docs: defineCollection({
    loader: {
      name: 'combined-docs-loader',
      load: async context => {
        // Load local docs collection first
        await docsLoader().load(context);

        // Load remote content from GitHub
        try {
          await githubLoader({
            octokit,
            configs: REMOTE_CONTENT,
            clear: false, // Don't clear existing content
          }).load(context);
        } catch (error) {
          console.error('Error loading GitHub content:', error);
          // Continue even if GitHub loading fails
        }
      },
    },
    schema: docsSchema(),
  }),
};
