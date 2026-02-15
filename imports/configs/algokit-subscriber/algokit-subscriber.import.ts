import type { LibraryImportConfig } from '../../types';
import {
  conditionalTransform,
  convertH1ToTitle,
  convertH1ToTitleMatch,
  removeH1,
} from '../../transforms/common.js';
import { createFrontmatterTransform } from '../../transforms/frontmatter.js';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algokit-subscriber',
    label: 'AlgoKit Subscriber',
    description: 'Subscribe to Algorand blockchain events',
    color: '#06B6D4',
    category: 'tool',
  },
  variants: [
    {
      language: 'TypeScript',
      versions: [{ slug: 'latest', label: 'Latest' }],
      name: 'Algokit Subscriber TS API Docs',
      owner: 'larkiny',
      repo: 'algokit-subscriber-ts',
      ref: 'docs-dist',
      includes: [
        {
          pattern: 'latest/api/**/*',
          basePath: 'src/content/docs/docs/algokit-subscriber/typescript/latest/api',
          transforms: [
            convertH1ToTitle,
            conditionalTransform(
              '**/README.md',
              createFrontmatterTransform({
                frontmatter: {
                  title: 'Overview',
                  sidebar: { order: 0 },
                },
                preserveExisting: false,
              }),
            ),
            conditionalTransform(
              'latest/api/README.md',
              createFrontmatterTransform({
                frontmatter: {
                  title: 'Subscriber API Reference (TypeScript)',
                  sidebar: { label: 'Overview', order: 0 },
                },
                mode: 'merge',
                preserveExisting: false,
              }),
            ),
          ],
        },
        {
          pattern: 'latest/guides/**/*',
          basePath: 'src/content/docs/docs/algokit-subscriber/typescript/latest/guides',
          transforms: [convertH1ToTitle],
        },
      ],
      enabled: true,
      clear: true,
    },
  ],
};
