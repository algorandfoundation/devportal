import type { LibraryImportConfig } from '../../types';
import { overviewOrderTransform } from '../../transforms/common.js';
import { createFrontmatterTransform } from '../../transforms/frontmatter.js';
import { generateStarlightLinkMappings } from '../../transforms/links.js';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'nodekit',
    label: 'NodeKit',
    description: 'Tools for running Algorand nodes',
    color: '#EF4444',
    category: 'tool',
    defaultPage: 'commands',
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
      transforms: [overviewOrderTransform],
      linkTransform: {
        linkMappings: [...generateStarlightLinkMappings()],
      },
      enabled: true,
      clear: true,
    },
  ],
};
