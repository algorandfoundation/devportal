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
      transforms: [
        // Add frontmatter to overview doc
        conditionalTransform(
          'latest/api/README.md',
          removeH1,
          createFrontmatterTransform({
            frontmatter: {
              title: 'Subscriber API Reference (TypeScript)',
              sidebar: { label: 'Overview', order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
        conditionalTransform(
          'latest/api/hierarchy.md',
          removeH1,
          createFrontmatterTransform({
            frontmatter: {
              title: 'Hierarchy Summary',
              sidebar: { order: 10 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
        conditionalTransform(
          'latest/api/**/README.md',
          removeH1,
          createFrontmatterTransform({
            frontmatter: {
              title: 'Overview',
              sidebar: { label: 'Overview', order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
        convertH1ToTitle,
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
