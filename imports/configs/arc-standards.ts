import type { ImportOptions } from '@larkiny/astro-github-loader';

/**
 * Import configuration for ARC Standards repository
 * Repository: https://github.com/algorandfoundation/arcs
 */
export const arcStandardsConfig: ImportOptions = {
  name: 'ARC Standards',
  owner: 'algorandfoundation',
  repo: 'arcs',
  ref: 'devportal',
  assetsPath: 'src/assets/imports/arcs',
  assetsBaseUrl: '@assets/imports/arcs',
  includes: [
    {
      pattern: '_devportal/content/**/*',
      basePath: 'src/content/docs/arc-standards',
    },
  ],
  enabled: true,
  clear: true,
};
