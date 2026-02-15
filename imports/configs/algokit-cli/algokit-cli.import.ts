import type { ImportOptions } from '@larkiny/astro-github-loader';
import type { LibraryImportConfig } from '../../types';
import { generateStarlightLinkMappings } from '../../transforms/links.js';
import {
  convertH1ToTitle,
  conditionalTransform,
  createRemoveContentUpToHeading,
} from '../../transforms/common.js';
import { createFrontmatterTransform } from '../../transforms/frontmatter.js';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algokit-cli',
    label: 'AlgoKit CLI',
    description: 'The AlgoKit command-line interface',
    color: '#F59E0B',
    category: 'cli',
  },
  variants: [
    {
      language: 'Python',
      versions: [{ slug: 'latest', label: 'Latest' }],
      name: 'AlgoKit CLI Docs',
      owner: 'algorandfoundation',
      repo: 'algokit-cli',
      ref: 'chore/content-fix',
      includes: [
        {
          pattern: 'docs/{features/**/*.md,algokit.md}',
          basePath: 'src/content/docs/docs/algokit-cli/python/latest/guides',
          pathMappings: {
            'docs/features/': '',
            'docs/algokit.md': 'overview.md',
            'docs/cli/index.md': 'index.md',
          },
          transforms: [
            conditionalTransform(
              'docs/algokit.md',
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
          basePath: 'src/content/docs/docs/algokit-cli/python/latest',
          pathMappings: {
            'docs/cli/index.md': 'index.md',
          },
          transforms: [createRemoveContentUpToHeading(/^# algokit$/m)],
        },
      ],
      transforms: [convertH1ToTitle],
      linkTransform: {
        stripPrefixes: ['src/content/docs'],
        linkMappings: [
          ...generateStarlightLinkMappings(),
          {
            pattern: /^\.\.\/cli\/?$/,
            replacement: `/docs/algokit-cli/python/latest`,
            global: true,
          },
          {
            pattern: /^\.\.\/\.\.\/README\.md$/,
            replacement: `/algokit/algokit-intro`,
            global: true,
          },
        ],
      },
      clear: true,
      enabled: true,
    },
  ],
};

/** Separate import for legacy guide path at algokit/cli/ */
export const legacyGuideConfig: ImportOptions = {
  name: 'AlgoKit CLI Legacy Guides',
  stateKey: 'algokit-cli-legacy-guides',
  owner: 'algorandfoundation',
  repo: 'algokit-cli',
  ref: 'chore/content-fix',
  includes: [
    {
      pattern: 'docs/{features/**/*.md,algokit.md}',
      basePath: 'src/content/docs/algokit/cli',
      pathMappings: {
        'docs/features/': '',
        'docs/algokit.md': 'overview.md',
      },
      transforms: [
        conditionalTransform(
          'docs/algokit.md',
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
  ],
  transforms: [convertH1ToTitle],
  linkTransform: {
    stripPrefixes: ['src/content/docs'],
    linkMappings: [
      ...generateStarlightLinkMappings(),
      {
        pattern: /^\.\.\/cli\/?$/,
        replacement: `/docs/algokit-cli/python/latest`,
        global: true,
      },
      {
        pattern: /^\.\.\/\.\.\/README\.md$/,
        replacement: `/algokit/algokit-intro`,
        global: true,
      },
    ],
  },
  clear: true,
  enabled: true,
};
