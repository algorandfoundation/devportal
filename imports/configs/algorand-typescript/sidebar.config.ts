import type { StarlightUserConfig } from '@astrojs/starlight/types';
import type { SidebarMetadata } from '../../types.js';

/**
 * Sidebar autogenerate entries for algorand-typescript.
 *
 * Interim solution: hardcoded autogenerate groups for each variant/version.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries: NonNullable<StarlightUserConfig['sidebar']> = [
  {
    label: '_lib:algorand-typescript:typescript:latest',
    autogenerate: { directory: 'docs/algorand-typescript/typescript/latest' },
  },
];

export const sidebarMetadata: SidebarMetadata = {
  items: [
    {
      pattern: 'docs/algorand-typescript/*/latest/api',
      meta: { label: 'API Reference', order: 10, collapsed: true, cascade: ['collapsed'] },
    },
  ],
};
