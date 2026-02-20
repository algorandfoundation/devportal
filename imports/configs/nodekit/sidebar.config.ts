import type { SidebarMetadata } from '../../types.js';
import { buildSidebarEntries } from '../../sidebar.js';

/**
 * Sidebar config for nodekit.
 *
 * Interim solution: declarative variant list for autogenerate groups.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries = buildSidebarEntries('nodekit', [
  { language: 'go', version: 'latest' },
]);

export const sidebarMetadata: SidebarMetadata = { sections: [] };
