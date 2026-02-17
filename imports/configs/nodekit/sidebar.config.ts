import type { StarlightUserConfig } from '@astrojs/starlight/types';
import type { SidebarMetadata } from '../../types.js';

/**
 * Sidebar autogenerate entries for nodekit.
 *
 * Interim solution: hardcoded autogenerate groups for each variant/version.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries: NonNullable<StarlightUserConfig['sidebar']> = [
  {
    label: '_lib:nodekit:go:latest',
    autogenerate: { directory: 'docs/nodekit/go/latest' },
  },
];

export const sidebarMetadata: SidebarMetadata = { items: [] };
