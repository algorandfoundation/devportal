import type { ImportOptions } from '@larkiny/astro-github-loader';
import { generateStarlightLinkMappings } from '../transforms/links.js';
import {
  convertH1ToTitle,
  convertH1ToTitleMatch,
  conditionalTransform,
  matchesPath,
  removeH1,
  extractH1ToSidebarAndTitle,
  createContentBasedFrontmatterTransform,
} from '../transforms/common.js';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';


/**
 * Imports documentation from algokit-utils-ts
 */
export const utilsTypescriptConfig: ImportOptions = {
  name: 'AlgoKit Utils TS Docs',
  owner: 'algorandfoundation',
  repo: 'algokit-utils-ts',
  ref: 'chore/fix-docs',
  assetsPath: 'src/assets/imports/algokit-utils-ts',
  assetsBaseUrl: '@assets/imports/algokit-utils-ts',
  includes: [
    {
      pattern:
        'docs/{capabilities/**/*.md,README.md,v7-migration.md,v8-migration.md}',
      basePath: 'src/content/docs/algokit/utils/typescript',
      pathMappings: {
        'docs/capabilities/': '',
        'docs/README.md': 'overview.md',
      },
      transforms: [convertH1ToTitle],
    },
    {
      pattern: 'docs/code/**/*',
      basePath: 'src/content/docs/reference/algokit-utils-ts/api',
      pathMappings: {
        'docs/code/': {
          target: '',
          crossSectionPath: '/reference/algokit-utils-ts/api',
        },
      },
      transforms: [
        conditionalTransform(
          path => matchesPath('docs/code/README.md', path),
          removeH1,
          createFrontmatterTransform({
            frontmatter: {
              title: 'AlgoKit Utils API Reference',
              sidebar: { label: 'Overview', order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
        conditionalTransform(
          path =>
            matchesPath(
              'docs/code/{classes,enums,interfaces,modules}/**/*.md',
              path,
            ),
          convertH1ToTitleMatch(
            /^(?:Class|Enumeration|Interface|Module):\s+(.+)$/,
          ),
        ),
      ],
    },
  ],
  linkTransform: {
    stripPrefixes: ['src/content/docs'],
    linkMappings: [...generateStarlightLinkMappings()],
  },
  enabled: true,
};


/**
 * Imports documentation from algokit-utils-py
 */
export const utilsPythonConfig: ImportOptions = {
  name: 'AlgoKit Utils Python Docs',
  owner: 'algorandfoundation',
  repo: 'algokit-utils-py',
  ref: 'chore/reference-docs',
  assetsPath: 'src/assets/imports/algokit-utils-py',
  assetsBaseUrl: '@assets/imports/algokit-utils-py',
  includes: [
    {
      pattern:
        'docs/markdown/{capabilities/**/*.md,index.md,v3-migration-guide.md}',
      basePath: 'src/content/docs/algokit/utils/python',
      pathMappings: {
        'docs/markdown/capabilities/': '',
        'docs/markdown/index.md': 'overview.md',
        'docs/markdown/v3-migration-guide.md': 'v3-migration-guide.md',
      },
      transforms: [
        convertH1ToTitle,
        conditionalTransform(
          path => matchesPath(`docs/markdown/index.md`, path),
          removeH1,
          createFrontmatterTransform({
            frontmatter: {
              title: 'AlgoKit Utils API Reference',
              sidebar: { label: 'Overview', order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
        conditionalTransform(
          path => matchesPath(`docs/markdown/v3-migration-guide.md`, path),
          removeH1,
          createFrontmatterTransform({
            frontmatter: {
              title: 'Python Utils v3 Migration Guide',
              sidebar: { label: 'v3 Migration Guide', order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
      ],
    },
    {
      pattern: 'docs/markdown/autoapi/algokit_utils/**/*',
      basePath: 'src/content/docs/reference/algokit-utils-py/api',
      pathMappings: {
        'docs/markdown/autoapi/algokit_utils/': {
          target: '',
          crossSectionPath: '/reference/algokit-utils-py/api',
        },
      },
      transforms: [
        conditionalTransform(
          path => matchesPath('docs/markdown/autoapi/algokit_utils/**/!(index).md', path),
          extractH1ToSidebarAndTitle(/\.([^.]+)$/),
          createFrontmatterTransform({
            frontmatter: {
              tableOfContents: {
                maxHeadingLevel: 4,
                minHeadingLevel: 4,
              },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
        conditionalTransform(
          path => matchesPath('docs/markdown/autoapi/algokit_utils/**/index.md', path),
          convertH1ToTitleMatch(/^algokit_utils\.(.+)$/),
          createFrontmatterTransform({
            frontmatter: {
              sidebar: { label: 'Index', order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
      ],
    },
  ],
  linkTransform: {
    stripPrefixes: ['src/content/docs'],
    linkMappings: [...generateStarlightLinkMappings()],
  },
  enabled: true,
};
