import type { ImportOptions } from '@algorandfoundation/astro-github-loader';

const ARC_TEMPLATES_URL =
  'https://github.com/algorandfoundation/arcs/blob/main/templates/';

/** Point relative `../templates/*` links at the ARC repository. */
export function linkTemplatesToRepo(content: string): string {
  return content.replace(/\]\(\.\.\/templates\//g, `](${ARC_TEMPLATES_URL}`);
}

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
  // The ARC templates are not imported, so links to them must leave the site.
  transforms: [linkTemplatesToRepo],
  enabled: true,
  clear: true,
};
