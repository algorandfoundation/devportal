import type { ImportOptions } from '@larkiny/astro-github-loader';
import {
  convertH1ToTitle,
  createRemoveLineContaining,
  conditionalTransform,
  removeH1,
  convertH1ToTitleMatch,
} from '../transforms/common.js';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';
import { generateStarlightLinkMappings } from '../transforms/links.js';

/**
 * Import configuration for puya-ts repository
 * Repository: https://github.com/algorandfoundation/puya-ts
 */
export const puyaTsConfig: ImportOptions = {
  name: 'Algorand Typescript',
  owner: 'algorandfoundation',
  repo: 'puya-ts',
  ref: 'devportal',
  assetsPath: 'src/assets/imports/puya-ts',
  assetsBaseUrl: '@assets/imports/puya-ts',
  includes: [
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
    {
      pattern: 'docs/_md/**/!(_media)/*.md',
      basePath: 'src/content/docs/reference/algorand-typescript/api',
      transforms: [
        conditionalTransform(
          'docs/_md/**/README.md',
          createFrontmatterTransform({
            frontmatter: {
              title: 'Index',
            },
            mode: 'merge',
            preserveExisting: false,
          }),
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
  clear: false,
};

/**
 * Import configuration for puya repository
 * Repository: https://github.com/algorandfoundation/puya
 */
export const puyaPyConfig: ImportOptions = {
  name: 'Algorand Python',
  owner: 'algorandfoundation',
  repo: 'puya',
  ref: 'devportal',
  assetsPath: 'src/assets/imports/puya',
  assetsBaseUrl: '@assets/imports/puya',
  includes: [
    {
      pattern:
        'docs/{lg-itxns,lg-ops,lg-program-structure,lg-storage,lg-types,migration-guides,guiding-principles,readme,language-guide}.md',
      basePath: 'src/content/docs/algokit/languages/python',
      pathMappings: {
        'docs/readme.md': 'overview.md',
      },
      transforms: [
        conditionalTransform(
          'docs/readme.md',
          createRemoveLineContaining('- [CLI Guide](./cli.md)'),
          createRemoveLineContaining('- [Reference Docs](./reference.md)'),
          convertH1ToTitle,
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
  clear: false,
};
