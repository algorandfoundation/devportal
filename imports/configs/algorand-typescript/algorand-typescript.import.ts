import type { LibraryImportConfig } from '../../types';
import {
  convertH1ToTitle,
  convertH1ToTitleMatch,
  createRemoveLineContaining,
  conditionalTransform,
  removeH1,
  createReplace,
} from '../../transforms/common.js';
import { createFrontmatterTransform } from '../../transforms/frontmatter.js';
import { generateStarlightLinkMappings } from '../../transforms/links.js';

export const config: LibraryImportConfig = {
  metadata: {
    slug: 'algorand-typescript',
    label: 'Algorand TypeScript',
    description: 'Write Algorand smart contracts in TypeScript',
    color: '#EC4899',
    category: 'language',
  },
  variants: [
    {
      language: 'TypeScript',
      versions: [{ slug: 'latest', label: 'Latest' }],
      name: 'Algorand Typescript',
      owner: 'algorandfoundation',
      repo: 'puya-ts',
      ref: 'devportal',
      includes: [
        {
          pattern:
            'docs/{lg-itxns,lg-ops,lg-program-structure,lg-storage,lg-types,migration-guides,guiding-principles,readme,language-guide}.md',
          basePath: 'src/content/docs/docs/algorand-typescript/typescript/latest/guides',
          pathMappings: {
            'docs/readme.md': 'overview.md',
          },
          transforms: [
            convertH1ToTitle,
            conditionalTransform(
              'docs/readme.md',
              createRemoveLineContaining('- [CLI Guide](./cli.md)'),
              createRemoveLineContaining('- [Reference Docs](./reference.md)'),
            ),
            removeH1,
          ],
        },
        {
          pattern: 'docs/_md/{!(modules).md,**/!(_media|documents)/*.md}',
          basePath: 'src/content/docs/docs/algorand-typescript/typescript/latest/api',
          pathMappings: {
            'docs/_md/': '',
          },
          transforms: [
            conditionalTransform(
              'docs/_md/**/README.md',
              convertH1ToTitleMatch(/\[`([^`]+)`\]/),
            ),
            conditionalTransform(
              'docs/_md/README.md',
              createFrontmatterTransform({
                frontmatter: {
                  sidebar: { order: 0 },
                },
                mode: 'merge',
                preserveExisting: false,
              }),
              createRemoveLineContaining(
                '- [CLI Guide](documents/Compiler-CLI-Guide.md)',
              ),
              createRemoveLineContaining(
                '- [Reference Docs](documents/Reference-docs.md)',
              ),
              createRemoveLineContaining('**Algorand TypeScript**'),
              createReplace(
                '(documents/Algorand-TypeScript-Language-Guide.md)',
                '(/docs/algorand-typescript/typescript/latest/guides/language-guide)',
              ),
              createReplace(
                '(documents/Algorand-TypeScript-Migration-Guides.md)',
                '(/docs/algorand-typescript/typescript/latest/guides/migration-guides)',
              ),
            ),
            removeH1,
          ],
        },
        // Dual target: old guide path (keeps algokit/languages/typescript/ content fresh with fixed links)
        {
          pattern:
            'docs/{lg-itxns,lg-ops,lg-program-structure,lg-storage,lg-types,migration-guides,guiding-principles,readme,language-guide}.md',
          basePath: 'src/content/docs/algokit/languages/typescript',
          pathMappings: {
            'docs/readme.md': 'overview.md',
          },
          transforms: [
            convertH1ToTitle,
            conditionalTransform(
              'docs/readme.md',
              createRemoveLineContaining('- [CLI Guide](./cli.md)'),
              createRemoveLineContaining('- [Reference Docs](./reference.md)'),
            ),
            removeH1,
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
