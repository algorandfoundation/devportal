import type { ImportOptions } from '@larkiny/astro-github-loader';
import {
  generateStarlightLinkMappings,
  generateLinkMappings,
} from '../transforms/links.js';
import {
  convertH1ToTitle,
  conditionalTransform,
  matchesPath,
  createRemoveContentUpToHeading,
} from '../transforms/common.js';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';

// Path mappings to restructure imported files
const CLI_PATH_MAPPINGS = {
  'docs/features/': '',
  'docs/algokit.md': 'overview.md',
  'docs/cli/index.md': 'index.md',
};

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
      pattern: 'docs/{features/**/*.md,algokit.md}',
      basePath: 'src/content/docs/algokit/cli',
      pathMappings: CLI_PATH_MAPPINGS,
      transforms: [
        conditionalTransform(
          path => matchesPath('docs/algokit.md', path),
          createFrontmatterTransform({
            frontmatter: {
              title: 'AlgoKit CLI Overview',
              sidebar: { label: 'Overview', order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
      ],
    },
    {
      pattern: 'docs/cli/index.md',
      basePath: 'src/content/docs/reference/algokit-cli/',
      pathMappings: CLI_PATH_MAPPINGS,
      transforms: [createRemoveContentUpToHeading(/^# algokit$/m)],
    },
  ],
  transforms: [convertH1ToTitle],
  linkTransform: {
    stripPrefixes: ['src/content/docs'],
    linkMappings: [
      ...generateStarlightLinkMappings(),
      ...generateLinkMappings(CLI_PATH_MAPPINGS),
      // Map unresolved CLI links to reference section
      {
        pattern: /^\.\.\/cli\/?$/,
        replacement: `/reference/algokit-cli`,
        global: true,
      },
      // Map README links to AlgoKit Introduction doc
      {
        pattern: /^\.\.\/\.\.\/README\.md$/,
        replacement: `/algokit/algokit-intro`,
        global: true,
      },
    ],
  },
  enabled: true,
};
