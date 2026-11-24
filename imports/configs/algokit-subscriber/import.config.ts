import type { LibraryImportConfig } from '../../types';
import { stripFrontmatterKeys } from '../../transforms/frontmatter.js';

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
      source: 'github-artifact',
      language: 'TypeScript',
      versions: [{ slug: 'latest', label: 'Latest' }],
      owner: 'algorandfoundation',
      repo: 'algokit-subscriber-ts',
      // No apiReferenceUrl: the library's docs site is built from the default
      // branch (unreleased v4) and currently serves no API section, so the
      // API reference is imported from the stable release bundle instead.
      postImportTransforms: [
        {
          pattern: '**/*.{md,mdx}',
          transform: stripFrontmatterKeys(['hero', 'template']),
        },
      ],
    },
    {
      source: 'github-artifact',
      language: 'Python',
      versions: [{ slug: 'latest', label: 'Latest' }],
      owner: 'algorandfoundation',
      repo: 'algokit-subscriber-py',
      apiReferenceUrl: 'https://algorandfoundation.github.io/algokit-subscriber-py/api/algokit_subscriber/',
      postImportTransforms: [
        {
          pattern: '**/*.{md,mdx}',
          transform: stripFrontmatterKeys(['hero', 'template']),
        },
      ],
    },
  ],
};
