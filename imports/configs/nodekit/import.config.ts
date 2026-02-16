import type { LibraryImportConfig } from '../../types';
import { createFrontmatterTransform } from '../../transforms/frontmatter.js';
import logo from './logo.svg?raw';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'nodekit',
    label: 'NodeKit',
    description: 'Tools for running Algorand nodes',
    color: '#EF4444',
    logo,
    category: 'tool',
  },
  variants: [
    {
      language: 'Go',
      versions: [{ slug: 'latest', label: 'Latest' }],
      name: 'NodeKit Command Reference',
      owner: 'algorandfoundation',
      repo: 'nodekit',
      includes: [
        {
          pattern: '.devportal/**/*',
          basePath: 'src/content/docs/docs/nodekit/go/latest',
          transforms: [
            createFrontmatterTransform({
              frontmatter: {
                title: 'NodeKit Command Reference',
                sidebar: { label: 'NodeKit Reference' },
                slug: 'docs/nodekit/go/latest/commands',
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
