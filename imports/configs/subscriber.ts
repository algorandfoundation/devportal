import type { ImportOptions } from '@larkiny/astro-github-loader';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';

/**
 * Import configuration for algokit-subscriber-ts repository
 * Repository: https://github.com/algorandfoundation/algokit-subscriber-ts
 */
export const algokitSubscriberConfig: ImportOptions = {
  name: 'Algokit Subscriber TS Command Reference',
  owner: 'larkiny',
  repo: 'algokit-subscriber-ts',
  ref: 'docs-dist',
  assetsPath: 'src/assets/imports/algokit-subscriber-ts',
  assetsBaseUrl: '@assets/imports/algokit-subscriber-ts',
  includes: [
    {
      pattern: 'latest/api/**/*',
      basePath: 'src/content/docs/reference/algokit-subscriber-ts/api',
    },
    {
      pattern: 'latest/guides/**/*',
      basePath: 'src/content/docs/algokit/subscriber/typescript',
    },
  ],
  enabled: true,
  clear: false,
};
