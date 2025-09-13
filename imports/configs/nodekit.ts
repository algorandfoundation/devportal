import type { ImportOptions } from '@larkiny/astro-github-loader';

/**
 * Import configuration for nodekit repository
 * Repository: https://github.com/algorandfoundation/nodekit
 */
export const nodekitConfig: ImportOptions = {
  name: 'NodeKit',
  owner: 'algorandfoundation',
  repo: 'nodekit',
  ref: 'main',
  path: '.devportal',
  replace: '.devportal/',
  basePath: 'src/content/docs/nodes/nodekit-reference',
  assetsPath: 'src/assets/imports/nodekit',
  assetsBaseUrl: '~/assets/imports/nodekit',
  fileRenames: [{ from: 'nodekit.md', to: 'commands.md' }],
  enabled: true,
  clear: false,
};
