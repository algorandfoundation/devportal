import type { ImportOptions } from '@larkiny/astro-github-loader';
import {
  createStarlightLinkMappings,
  generateLinkMappings,
} from '../transforms/links.js';
import {
  convertH1ToTitle,
  convertH1ToTitleMatch,
  createConditionalTransform,
  matchesPath,
  removeH1,
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
        createConditionalTransform(
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
        createConditionalTransform(
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
      ...createStarlightLinkMappings(),
      ...generateLinkMappings(GUIDES_PATH_MAPPINGS_TS),
      ...generateLinkMappings(API_PATH_MAPPINGS_TS, {
        crossSectionPath: '/reference/algokit-utils-ts/api',
      }),

      // Context-aware handling of relative links from API files
      {
        contextFilter: context => context.sourcePath.startsWith('docs/code/'),
        relativeLinks: true,
        pattern: /.*/,
        replacement: '',
        global: false,
      },
    ],
  },
  enabled: true,
};

const SOURCE_API_PATH_PY = 'docs/markdown/autoapi/algokit_utils/';

/**
 * Imports documentation from algokit-utils-ts
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
        'docs/markdown/README.md': 'overview.md',
        'docs/markdown/v3-migration-guide.md': 'v3-migration-guide.md',
      },
    },
    {
      pattern: 'docs/markdown/autoapi/algokit_utils/**/*',
      basePath: 'src/content/docs/reference/algokit-utils-ts/api',
      pathMappings: {
        'docs/code/': '',
      },
      transforms: [
        createConditionalTransform(
          path => path === 'docs/code/README.md',
          createFrontmatterTransform({
            frontmatter: {
              title: 'AlgoKit Utils API Reference',
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
      ...createStarlightLinkMappings(),
      {
        pattern: /^docs\/capabilities\/(.+)$/,
        replacement: (match, relativePath) => {
          return relativePath;
        },
        global: true,
      },

      {
        pattern: /^docs\/README\.md$/,
        replacement: 'overview.md',
        global: true,
      },

      {
        pattern: /^docs\/code\/(.+)$/,
        replacement: (match, relativePath) => {
          return `/reference/algokit-utils-ts/api/${relativePath}`;
        },
        global: true,
      },
    ],
  },
  enabled: true,
};
