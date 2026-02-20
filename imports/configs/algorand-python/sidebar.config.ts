import type { SidebarMetadata } from '../../types.js';
import { buildSidebarEntries } from '../../sidebar.js';

/**
 * Sidebar config for algorand-python.
 *
 * Interim solution: declarative variant list for autogenerate groups.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries = buildSidebarEntries('algorand-python', [
  { language: 'python', version: 'latest' },
]);

export const sidebarMetadata: SidebarMetadata = {
  sections: [
    {
      pattern: 'docs/algorand-python/*/*/api',
      meta: { label: 'API Reference', order: 10, collapsed: true, cascade: ['collapsed'] },
    },
    {
      pattern: 'docs/algorand-python/*/*/api/front-end-guide',
      meta: { label: 'Front-end Guide', cascade: ['collapsed'] },
    },
  ],
};
