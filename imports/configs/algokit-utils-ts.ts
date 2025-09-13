import type { ImportOptions } from '@larkiny/astro-github-loader';
import { createLinkTransform } from '../transforms/links.js';
import { convertH1ToTitle } from '../transforms/common.js';
import {
  createRemoveLineTransform,
  createReplaceTransform,
  createRegexReplaceTransform,
} from '../transforms/content.js';

/**
 * Import configuration for AlgoKit Utils TS conceptual guides
 * Imports capabilities documentation from algokit-utils-ts
 * NOTE: README.md will be handled separately until include/exclude is re-implemented
 */
export const utilsTypescriptGuidesConfig: ImportOptions = {
  name: 'AlgoKit Utils TS - Guides',
  owner: 'algorandfoundation',
  repo: 'algokit-utils-ts',
  ref: 'main',
  path: 'docs/capabilities',
  replace: 'docs/capabilities/',
  basePath: 'src/content/docs/algokit/utils/typescript-test',
  assetsPath: 'src/assets/imports/algokit-utils-ts',
  assetsBaseUrl: '~/assets/imports/algokit-utils-ts',
  enabled: false,
  clear: false,
  transforms: [
    convertH1ToTitle,
    // Remove image references (TODO: Change in source repo)
    createRemoveLineTransform(
      '![App deployment lifecycle](../images/lifecycle.jpg)',
    ),
    createRemoveLineTransform(
      '![App deployment lifecycle](images/lifecycle.jpg)',
    ),
    createRemoveLineTransform(
      '![Smart Contract Development Lifecycle](./lifecycle.jpg)',
    ),
    // Remove specific problematic link references  (TODO: Change in source repo)
    createReplaceTransform('[above design](#design)', 'above design'),
    createReplaceTransform('[box names](#boxname)', 'box names'),
    createReplaceTransform(
      ' ([both of which are optional](#client-management))',
      '',
    ),
    // Remove complex code reference links that don't translate well
    //createRegexReplaceTransform(/\[(.+?)\]\(\.\/code\/.+?\)/g, '$1'),
    createLinkTransform({
      baseUrl: '/algokit/utils/typescript-test',
      pathTransform: (path, context) => {
        // Handle cross-references to API documentation
        if (path.startsWith('../code/')) {
          const apiPath = path.replace('../code/', '');
          return `/reference/algokit-utils-ts/api/${apiPath.replace(/\.md$/, '')}`;
        }

        // Handle capabilities internal links (relative within capabilities folder)
        if (path.startsWith('./') && context.from.includes('capabilities/')) {
          const capPath = path.replace('./', '');
          return `/algokit/utils/typescript-test/${capPath.replace(/\.md$/, '')}`;
        }

        // Handle capabilities links from README or other files
        if (path.startsWith('capabilities/')) {
          const capPath = path.replace('capabilities/', '');
          return `/algokit/utils/typescript-test/${capPath.replace(/\.md$/, '')}`;
        }

        // Handle image references
        if (path.startsWith('images/') || path.startsWith('./images/')) {
          const imagePath = path.replace(/^\.\//, '');
          return `~/assets/imports/algokit-utils-ts/${imagePath}`;
        }

        // Default handling - assume it's a guide file
        return `/algokit/utils/typescript-test/${path.replace(/\.md$/, '')}`;
      },
    }),
  ],
};

/**
 * Import configuration for AlgoKit Utils TS API reference documentation
 * Imports TypeDoc-generated API documentation from the code folder
 */
export const utilsTypescriptApiConfig: ImportOptions = {
  name: 'AlgoKit Utils TS - API Reference',
  owner: 'algorandfoundation',
  repo: 'algokit-utils-ts',
  path: 'docs/code',
  replace: 'docs/code/',
  basePath: 'src/content/docs/reference/algokit-utils-ts/api',
  assetsPath: 'src/assets/imports/algokit-utils-ts',
  assetsBaseUrl: '~/assets/imports/algokit-utils-ts',
  enabled: false,
  clear: false,
  transforms: [
    convertH1ToTitle,
    createLinkTransform({
      baseUrl: '/reference/algokit-utils-ts/api',
      pathTransform: (path, context) => {
        // Handle links back to capabilities documentation
        if (path.startsWith('../capabilities/')) {
          const guidePath = path.replace('../capabilities/', '');
          return `/algokit/utils/typescript-test/${guidePath.replace(/\.md$/, '')}`;
        }

        // Handle links to root README
        if (path === '../README.md' || path.startsWith('../README.md')) {
          return '/algokit/utils/typescript-test/overview';
        }

        // Handle internal API documentation links
        if (path.startsWith('./') || !path.includes('../')) {
          return `/algokit/utils/typescript-test/api/${path.replace(/^\.\//, '').replace(/\.md$/, '')}`;
        }

        // Default handling for other API paths
        return `/algokit/utils/typescript-test/api/${path.replace(/\.md$/, '')}`;
      },
    }),
  ],
};
