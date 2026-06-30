import type { LibraryImportConfig } from '../../types';
import { stripFrontmatterKeys } from '../../transforms/frontmatter.js';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algokit-cli',
    label: 'AlgoKit CLI',
    description: 'The AlgoKit command-line interface',
    color: '#F59E0B',
    category: 'cli',
  },
  variants: [
    {
      source: 'github-artifact',
      language: 'Python',
      versions: [{ slug: 'latest', label: 'Latest' }],
      owner: 'algorandfoundation',
      repo: 'algokit-cli',
      postImportTransforms: [
        {
          pattern: '**/*.{md,mdx}',
          transform: stripFrontmatterKeys(['hero', 'template']),
        },
      ],
    },
  ],
};