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
  path: '_devportal/content',
  replace: '_devportal/content/',
  basePath: 'src/content/docs/arc-standards',
  assetsPath: 'src/assets/imports/arcs',
  assetsBaseUrl: '~/assets/imports/arcs',
  enabled: true,
  clear: false,
};
