import type { SidebarMetadata } from '../../types.js';
import { buildSidebarEntries } from '../../sidebar.js';

/**
 * Sidebar config for algokit-utils.
 *
 * Interim solution: declarative variant list for autogenerate groups.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries = buildSidebarEntries('algokit-utils', [
  { language: 'typescript', version: 'latest' },
  { language: 'python', version: 'latest' },
]);

export const sidebarMetadata: SidebarMetadata = {
  sections: [
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
