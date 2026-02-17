import type { StarlightUserConfig } from '@astrojs/starlight/types';
import type { SidebarMetadata } from '../../types.js';

/**
 * Sidebar autogenerate entries for algokit-subscriber.
 *
 * Interim solution: hardcoded autogenerate groups for each variant/version.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries: NonNullable<StarlightUserConfig['sidebar']> = [
  {
    label: '_lib:algokit-subscriber:typescript:latest',
    autogenerate: { directory: 'docs/algokit-subscriber/typescript/latest' },
  },
];

export const sidebarMetadata: SidebarMetadata = { items: [] };
