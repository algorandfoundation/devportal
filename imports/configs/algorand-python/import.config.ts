import type { LibraryImportConfig } from '../../types';
import { stripFrontmatterKeys } from '../../transforms/frontmatter.js';

/**
 * Algorand Python docs come from the docs bundle attached to puya releases.
 *
 * They used to be read file-by-file from the `puya@devportal` branch, which
 * upstream stopped updating in November 2025 when puya moved to publishing a
 * bundle with each release.
 */
export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algorand-python',
    label: 'Algorand Python',
    description: 'Build smart contracts on Algorand using Python',
    color: '#8B5CF6',
    category: 'language',
  },
  variants: [
    {
      source: 'github-artifact',
      language: 'Python',
      versions: [{ slug: 'latest', label: 'Latest' }],
      owner: 'algorandfoundation',
      repo: 'puya',
      apiReferenceUrl: 'https://algorandfoundation.github.io/puya/api/algopy/algopy/',
      postImportTransforms: [
        {
          pattern: '**/*.{md,mdx}',
          transform: stripFrontmatterKeys(['hero', 'template']),
        },
      ],
    },
  ],
};
