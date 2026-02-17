import type { StarlightUserConfig } from '@astrojs/starlight/types';
import type { SidebarMetadata } from '../../types.js';

/**
 * Sidebar autogenerate entries for algokit-utils.
 *
 * Interim solution: hardcoded autogenerate groups for each variant/version.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries: NonNullable<StarlightUserConfig['sidebar']> = [
  {
    label: '_lib:algokit-utils:typescript:latest',
    autogenerate: { directory: 'docs/algokit-utils/typescript/latest' },
  },
  {
    label: '_lib:algokit-utils:python:latest',
    autogenerate: { directory: 'docs/algokit-utils/python/latest' },
  },
];

export const sidebarMetadata: SidebarMetadata = {
  items: [
    {
      pattern: 'docs/algokit-utils/*/latest',
      meta: { order: 10, collapsed: true, cascade: ['collapsed'] },
    },
    {
      pattern: 'docs/algokit-utils/*/latest/api',
      meta: { label: 'API Reference', order: 10, collapsed: true, cascade: ['collapsed'] },
    },
    {
      pattern: 'docs/algokit-utils/*/latest/guides',
      meta: { label: 'Concepts', order: 5, collapsed: false },
    },
  ],
};
