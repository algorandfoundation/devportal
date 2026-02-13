import type { LibraryImportConfig } from '../../types';
import { createFrontmatterTransform } from '../../transforms/frontmatter.js';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'nodekit',
    label: 'NodeKit',
    description: 'Tools for running Algorand nodes',
    color: '#EF4444',
    category: 'tool',
  },
  variants: [
    {
      language: 'Go',
      versions: [{ slug: 'latest', label: 'Latest' }],
      name: 'NodeKit Command Reference',
      owner: 'algorandfoundation',
      repo: 'nodekit',
      assetsPath: 'src/assets/imports/nodekit',
      assetsBaseUrl: '@assets/imports/nodekit',
      includes: [
        {
          pattern: '.devportal/**/*',
          basePath: 'src/content/docs/nodes/nodekit-reference',
          transforms: [
            createFrontmatterTransform({
              frontmatter: {
                title: 'NodeKit Command Reference',
                sidebar: { label: 'NodeKit Reference' },
                slug: 'nodes/nodekit-reference/commands',
              },
              mode: 'merge',
              preserveExisting: true,
            }),
          ],
        },
      ],
      enabled: true,
      clear: true,
    },
  ],
};
