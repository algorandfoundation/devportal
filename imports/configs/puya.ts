import type { ImportOptions } from '@larkiny/astro-github-loader';
import {
  convertH1ToTitle,
  createRemoveLineContaining,
  conditionalTransform,
  removeH1,
  createReplace,
  convertH1ToTitleMatch,
} from '../transforms/common.js';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';
import { generateStarlightLinkMappings } from '../transforms/links.js';
import { create } from 'domain';

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
      pattern: 'docs/_md/{!(modules).md,**/!(_media|documents)/*.md}',
      basePath: 'src/content/docs/reference/algorand-typescript/api',
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
            '(/algokit/languages/typescript/language-guide)',
          ),
          createReplace(
            '(documents/Algorand-TypeScript-Migration-Guides.md)',
            '(/algokit/languages/typescript/migration-guides)',
          ),
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
        'docs/_build/markdown/{!(api*|front-end-guide).md,**/!(api*|front-end-guide)/*.md}',
      basePath: 'src/content/docs/algokit/languages/python',
      pathMappings: {
        'docs/_build/markdown/index.md': 'overview.md',
      },
      transforms: [convertH1ToTitle],
    },
    {
      pattern: 'docs/_build/markdown/api*.md',
      basePath: 'src/content/docs/reference/algorand-python/api',
      pathMappings: {
        'docs/_build/markdown/api.md': 'index.md',
      },
      transforms: [
        conditionalTransform(
          'docs/_build/markdown/api-*.md',
          convertH1ToTitleMatch(/\[`([^`]+)`\]/),
          createFrontmatterTransform({
            frontmatter: {
              tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
        conditionalTransform(
          'docs/_build/markdown/!(api-*).md',
          convertH1ToTitle,
        ),
        conditionalTransform(
          'docs/_build/markdown/api.md',
          createFrontmatterTransform({
            frontmatter: {
              sidebar: { order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
      ],
    },
    {
      pattern: 'docs/_build/markdown/front-end-guide/**/*.md',
      basePath:
        'src/content/docs/reference/algorand-python/api/front-end-guide',
      pathMappings: {
        'docs/_build/markdown/front-end-guide/index.md': 'overview.md',
      },
      transforms: [
        convertH1ToTitle,
        conditionalTransform(
          'docs/_build/markdown/front-end-guide/index.md',
          createFrontmatterTransform({
            frontmatter: {
              sidebar: { order: 0 },
            },
            mode: 'merge',
            preserveExisting: false,
          }),
        ),
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
