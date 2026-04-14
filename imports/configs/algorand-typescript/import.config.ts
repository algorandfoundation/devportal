import type { LibraryImportConfig } from '../../types';
import { stripFrontmatterKeys } from '../../transforms/frontmatter.js';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algorand-typescript',
    label: 'Algorand TypeScript',
    description: 'Build smart contracts on Algorand using TypeScript',
    color: '#EC4899',
    category: 'language',
  },
  variants: [
    {
      source: 'github-artifact',
      language: 'TypeScript',
      versions: [{ slug: 'latest', label: 'Latest' }],
      owner: 'algorandfoundation',
      repo: 'puya-ts',
      postImportTransforms: [
        {
          pattern: '**/*.{md,mdx}',
          transform: stripFrontmatterKeys(['hero', 'template']),
        },
      ],
    },
  ],
};