import type { ImportOptions } from '@larkiny/astro-github-loader';
import { createStarlightPathMappings } from '../transforms/links.js';
import { convertH1ToTitle, removeH1 } from '../transforms/common.js';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';

/**
 * Import configuration for algokit-cli repository
 * Repository: https://github.com/algorandfoundation/algokit-cli
 */
export const algokitCLIConfig: ImportOptions = {
  name: 'AlgoKit CLI Docs',
  owner: 'algorandfoundation',
  repo: 'algokit-cli',
  ref: 'chore/content-fix',
  assetsPath: 'src/assets/imports/algokit/cli',
  assetsBaseUrl: '@assets/imports/algokit/cli',
  includes: [
    {
      pattern: 'docs/features/**/*.md',
      basePath: 'src/content/docs/algokit/cli',
    },
    {
      pattern: 'docs/algokit.md',
      basePath: 'src/content/docs/algokit/cli',
      transforms: [
        createFrontmatterTransform({
          frontmatter: {
            title: 'AlgoKit CLI Overview',
            sidebar: { label: 'Overview', order: 0 },
          },
          mode: 'merge',
          preserveExisting: false,
        }),
      ],
    },
    {
      pattern: 'docs/cli/index.md',
      basePath: 'src/content/docs/reference/algokit-cli/',
    },
  ],
  transforms: [convertH1ToTitle],
  linkTransform: {
    stripPrefixes: ['src/content/docs'],
    pathMappings: [
      ...createStarlightPathMappings(),
      // Map unresolved CLI links to reference section
      {
        pattern: /^\.\.\/cli\/?$/,
        replacement: (match: string, anchor: string) => {
          return `/reference/algokit-cli`;
        },
        global: true,
        description: 'Map CLI reference links to reference section',
      },
      // Map README links to AlgoKit Introduction doc
      {
        pattern: /^\.\.\/\.\.\/README\.md$/,
        replacement: (match: string, anchor: string) => {
          return `/algokit/algokit-intro`;
        },
        global: true,
        description: 'Map README links to AlgoKit Introduction',
      },
    ],
  },
  enabled: true,
};
