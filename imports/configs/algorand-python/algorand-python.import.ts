import type { LibraryImportConfig } from '../../types';
import {
  convertH1ToTitle,
  convertH1ToTitleMatch,
  conditionalTransform,
} from '../../transforms/common.js';
import { createFrontmatterTransform } from '../../transforms/frontmatter.js';
import { generateStarlightLinkMappings } from '../../transforms/links.js';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algorand-python',
    label: 'Algorand Python',
    description: 'Write Algorand smart contracts in Python',
    color: '#8B5CF6',
    category: 'language',
  },
  variants: [
    {
      language: 'Python',
      versions: [
        { slug: 'latest', label: 'Latest' },
        { slug: 'v5-0-0', label: 'v5.0.0' },
        { slug: 'v4-0-0', label: 'v4.0.0' },
      ],
      name: 'Algorand Python',
      owner: 'algorandfoundation',
      repo: 'puya',
      ref: 'devportal',
      assetsPath: 'src/assets/imports/puya',
      assetsBaseUrl: '@assets/imports/puya',
      includes: [
        {
          pattern:
            'docs/_build/markdown/{!(api*|front-end-guide).md,**/!(api*|front-end-guide)/*.md}',
          basePath: 'src/content/docs/algokit/languages/python',
          pathMappings: {
            'docs/_build/markdown/index.md': 'overview.md',
          },
          transforms: [convertH1ToTitle],
        },
        {
          pattern: 'docs/_build/markdown/api*.md',
          basePath: 'src/content/docs/reference/algorand-python/api',
          pathMappings: {
            'docs/_build/markdown/api.md': 'index.md',
          },
          transforms: [
            conditionalTransform(
              'docs/_build/markdown/api-*.md',
              convertH1ToTitleMatch(/\[`([^`]+)`\]/),
              createFrontmatterTransform({
                frontmatter: {
                  tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
                },
                mode: 'merge',
                preserveExisting: false,
              }),
            ),
            conditionalTransform(
              'docs/_build/markdown/!(api-*).md',
              convertH1ToTitle,
            ),
            conditionalTransform(
              'docs/_build/markdown/api.md',
              createFrontmatterTransform({
                frontmatter: {
                  sidebar: { order: 0 },
                },
                mode: 'merge',
                preserveExisting: false,
              }),
            ),
          ],
        },
        {
          pattern: 'docs/_build/markdown/front-end-guide/**/*.md',
          basePath:
            'src/content/docs/reference/algorand-python/api/front-end-guide',
          pathMappings: {
            'docs/_build/markdown/front-end-guide/index.md': 'overview.md',
          },
          transforms: [
            convertH1ToTitle,
            conditionalTransform(
              'docs/_build/markdown/front-end-guide/index.md',
              createFrontmatterTransform({
                frontmatter: {
                  sidebar: { order: 0 },
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
      clear: true,
    },
  ],
};
