import type { ImportOptions } from '@larkiny/astro-github-loader';
import {
  generateStarlightLinkMappings,
  generateLinkMappings,
} from '../transforms/links.js';
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

const SOURCE_GUIDES_PATH_TS = 'docs/capabilities/';
const SOURCE_API_PATH_TS = 'docs/code/';
const IMPORT_API_PATH_TS = 'src/content/docs/reference/algokit-utils-ts/api';

// Path mappings to restructure imported files
const GUIDES_PATH_MAPPINGS_TS = {
  'docs/capabilities/': '',
  'docs/README.md': 'overview.md',
};
const API_PATH_MAPPINGS_TS = {
  'docs/code/': '',
};

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
      pathMappings: GUIDES_PATH_MAPPINGS_TS,
      transforms: [convertH1ToTitle],
    },
    {
      pattern: `${SOURCE_API_PATH_TS}**/*`,
      basePath: IMPORT_API_PATH_TS,
      pathMappings: API_PATH_MAPPINGS_TS,
      transforms: [
        conditionalTransform(
          path => matchesPath(`${SOURCE_API_PATH_TS}README.md`, path),
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
              `${SOURCE_API_PATH_TS}{classes,enums,interfaces,modules}/**/*.md`,
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
    linkMappings: [
      ...generateStarlightLinkMappings(),
      ...generateLinkMappings(GUIDES_PATH_MAPPINGS_TS),
      ...generateLinkMappings(API_PATH_MAPPINGS_TS, {
        crossSectionPath: '/reference/algokit-utils-ts/api',
      }),
    ],
  },
  enabled: true,
};

const SOURCE_GUIDES_PATH_PY = 'docs/markdown/capabilities/';
const SOURCE_API_PATH_PY = 'docs/markdown/autoapi/algokit_utils/';
const IMPORT_API_PATH_PY = 'src/content/docs/reference/algokit-utils-py/api';

// Path mappings to restructure imported files
const GUIDES_PATH_MAPPINGS_PY = {
  'docs/markdown/capabilities/': '',
  'docs/markdown/index.md': 'overview.md',
  'docs/markdown/v3-migration-guide.md': 'v3-migration-guide.md',
};
const API_PATH_MAPPINGS_PY = {
  'docs/markdown/autoapi/algokit_utils/': '',
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
      pathMappings: GUIDES_PATH_MAPPINGS_PY,
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
      pattern: `${SOURCE_API_PATH_PY}**/*`,
      basePath: IMPORT_API_PATH_PY,
      pathMappings: API_PATH_MAPPINGS_PY,
      transforms: [
        conditionalTransform(
          path => matchesPath(`${SOURCE_API_PATH_PY}**/!(index).md`, path),
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
          path => matchesPath(`${SOURCE_API_PATH_PY}**/index.md`, path),
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
    linkMappings: [
      ...generateStarlightLinkMappings(),
      ...generateLinkMappings(GUIDES_PATH_MAPPINGS_PY),
      ...generateLinkMappings(API_PATH_MAPPINGS_PY, {
        crossSectionPath: '/reference/algokit-utils-py/api',
      }),
    ],
  },
  enabled: true,
};
