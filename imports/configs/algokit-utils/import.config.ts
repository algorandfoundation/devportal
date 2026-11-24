import type { LibraryImportConfig } from '../../types';
import { stripFrontmatterKeys } from '../../transforms/frontmatter.js';

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
      source: 'github-artifact',
      language: 'TypeScript',
      versions: [{ slug: 'latest', label: 'Latest' }],
      owner: 'algorandfoundation',
      repo: 'algokit-utils-ts',
      // No apiReferenceUrl: the library's docs site is built from the default
      // branch (unreleased v10), so it does not match the stable release
      // imported here. The API reference is imported from the release bundle
      // instead. Set apiReferenceUrl once the site documents the stable line.
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
      repo: 'algokit-utils-py',
      apiReferenceUrl: 'https://algorandfoundation.github.io/algokit-utils-py/api/algokit_utils/',
      postImportTransforms: [
        {
          pattern: '**/*.{md,mdx}',
          transform: stripFrontmatterKeys(['hero', 'template']),
        },
      ],
    },
  ],
};
