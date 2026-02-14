import type { LibraryImportConfig } from '../../types';
import { generateStarlightLinkMappings } from '../../transforms/links.js';
import {
  convertH1ToTitle,
  convertH1ToTitleMatch,
  conditionalTransform,
  removeH1,
  extractH1ToSidebarAndTitle,
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
      includes: [
        {
          pattern: 'docs/README.md',
          basePath: 'src/content/docs/docs/algokit-utils/typescript/latest',
          pathMappings: {
            'docs/README.md': 'index.md',
          },
          transforms: [
            convertH1ToTitle,
            conditionalTransform(
              'docs/README.md',
              removeH1,
              createFrontmatterTransform({
                frontmatter: {
                  title: 'AlgoKit Utils TypeScript',
                  sidebar: { label: 'Overview', order: 0 },
                },
                mode: 'merge',
                preserveExisting: false,
              }),
            ),
          ],
        },
        {
          pattern:
            'docs/{capabilities/**/*.md,v7-migration.md,v8-migration.md}',
          basePath: 'src/content/docs/docs/algokit-utils/typescript/latest/guides',
          pathMappings: {
            'docs/capabilities/': '',
          },
          transforms: [convertH1ToTitle],
        },
        {
          pattern: 'docs/code/**/*',
          basePath: 'src/content/docs/docs/algokit-utils/typescript/latest/api',
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
      includes: [
        {
          pattern: 'docs/markdown/index.md',
          basePath: 'src/content/docs/docs/algokit-utils/python/latest',
          pathMappings: {
            'docs/markdown/index.md': 'index.md',
          },
          transforms: [
            convertH1ToTitle,
            conditionalTransform(
              'docs/markdown/index.md',
              removeH1,
              createFrontmatterTransform({
                frontmatter: {
                  title: 'AlgoKit Utils Python',
                  sidebar: { label: 'Overview', order: 0 },
                },
                mode: 'merge',
                preserveExisting: false,
              }),
            ),
          ],
        },
        {
          pattern:
            'docs/markdown/{capabilities/**/*.md,v3-migration-guide.md}',
          basePath: 'src/content/docs/docs/algokit-utils/python/latest/guides',
          pathMappings: {
            'docs/markdown/capabilities/': '',
            'docs/markdown/v3-migration-guide.md': 'v3-migration-guide.md',
          },
          transforms: [
            convertH1ToTitle,
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
          basePath: 'src/content/docs/docs/algokit-utils/python/latest/api',
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
