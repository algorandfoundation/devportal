import type { LibraryImportConfig } from '../../types';
import { generateStarlightLinkMappings } from '../../transforms/links.js';
import {
  convertH1ToTitle,
  convertH1ToTitleMatch,
  conditionalTransform,
  removeH1,
  extractH1ToSidebarAndTitle,
  createContentBasedFrontmatterTransform,
} from '../../transforms/common.js';
import { createFrontmatterTransform } from '../../transforms/frontmatter.js';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algokit-utils',
    label: 'AlgoKit Utils',
    description: 'Utilities for building solutions on Algorand',
    color: '#3B82F6',
    category: 'sdk',
  },
  variants: [
    {
      language: 'TypeScript',
      versions: [{ slug: 'latest', label: 'Latest' }],
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
            },
          },
          transforms: [
            conditionalTransform(
              'docs/code/README.md',
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
              'docs/code/{classes,enums,interfaces,modules}/**/*.md',
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
      clear: true,
      enabled: true,
    },
    {
      language: 'Python',
      versions: [{ slug: 'latest', label: 'Latest' }],
      name: 'AlgoKit Utils Python Docs',
      owner: 'algorandfoundation',
      repo: 'algokit-utils-py',
      ref: 'main',
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
              'docs/markdown/index.md',
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
              'docs/markdown/v3-migration-guide.md',
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
            },
          },
          transforms: [
            conditionalTransform(
              'docs/markdown/autoapi/algokit_utils/**/!(index).md',
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
              'docs/markdown/autoapi/algokit_utils/**/index.md',
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
    },
  ],
};
