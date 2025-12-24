import type { ImportOptions } from '@larkiny/astro-github-loader';
import {
  conditionalTransform,
  convertH1ToTitle,
  convertH1ToTitleMatch,
  removeH1,
} from '../transforms/common.js';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';

/**
 * Import configuration for algokit-subscriber-ts repository
 * Repository: https://github.com/algorandfoundation/algokit-subscriber-ts
 */
export const algokitSubscriberConfig: ImportOptions = {
  name: 'Algokit Subscriber TS API Docs',
  owner: 'larkiny',
  repo: 'algokit-subscriber-ts',
  ref: 'docs-dist',
  assetsPath: 'src/assets/imports/algokit-subscriber-ts',
  assetsBaseUrl: '@assets/imports/algokit-subscriber-ts',
  includes: [
    {
      pattern: 'latest/api/**/*',
      basePath: 'src/content/docs/reference/algokit-subscriber-ts/api',
      transforms: [
        convertH1ToTitle,
        conditionalTransform(
          '**/README.md',
          createFrontmatterTransform({
            frontmatter: {
              title: 'Overview',
              sidebar: { order: 0 },
            },
            preserveExisting: false,
          }),
        ),
        conditionalTransform(
          'latest/api/README.md',
          createFrontmatterTransform({
            frontmatter: {
              title: 'Subscriber API Reference (TypeScript)',
              sidebar: { label: 'Overview', order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
      ],
    },
    {
      pattern: 'latest/guides/**/*',
      basePath: 'src/content/docs/algokit/subscriber/typescript',
      transforms: [convertH1ToTitle],
    },
  ],
  enabled: true,
  clear: true,
};
