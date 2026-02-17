import type { SidebarMetadata } from '../../types.js';
import { buildSidebarEntries } from '../../sidebar.js';

/**
 * Sidebar config for algokit-cli.
 *
 * Interim solution: declarative variant list for autogenerate groups.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries = buildSidebarEntries('algokit-cli', [
  { language: 'python', version: 'latest' },
]);

export const sidebarMetadata: SidebarMetadata = {
  includes: [
    {
      pattern: 'docs/algokit-cli/*/latest/guides',
      meta: { label: 'Concepts', order: 5, collapsed: false },
    },
  ],
};
