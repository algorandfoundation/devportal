import type { ImportOptions } from '@larkiny/astro-github-loader';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';

/**
 * Import configuration for nodekit repository
 * Repository: https://github.com/algorandfoundation/nodekit
 */
export const nodekitConfig: ImportOptions = {
  name: 'NodeKit Command Reference',
  owner: 'algorandfoundation',
  repo: 'nodekit',
  assetsPath: 'src/assets/imports/nodekit',
  assetsBaseUrl: '~/assets/imports/nodekit',
  includes: [
    {
      pattern: '.devportal/**/*',
      basePath: 'src/content/docs/nodes/nodekit-reference',
      transforms: [
        createFrontmatterTransform({
          frontmatter: {
            title: 'NodeKit Command Reference',
            sidebar: { label: 'NodeKit Reference' },
            slug: 'nodes/nodekit-reference/commands',
          },
          mode: 'merge',
          preserveExisting: true,
        }),
      ],
    },
  ],
  enabled: true,
  clear: false,
};
