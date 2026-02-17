import type { SidebarMetadata } from '../../types.js';
import { buildSidebarEntries } from '../../sidebar.js';

/**
 * Sidebar config for algorand-typescript.
 *
 * Interim solution: declarative variant list for autogenerate groups.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries = buildSidebarEntries('algorand-typescript', [
  { language: 'typescript', version: 'latest' },
]);

export const sidebarMetadata: SidebarMetadata = {
  includes: [
    {
      pattern: 'docs/algorand-typescript/*/latest/api',
      meta: { label: 'API Reference', order: 10, collapsed: true, cascade: ['collapsed'] },
    },
  ],
};
