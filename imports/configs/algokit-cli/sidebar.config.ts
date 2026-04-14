import type { SidebarMetadata } from '../../types.js';

export const sidebarMetadata: SidebarMetadata = {
  sections: [
    {
      pattern: 'docs/algokit-cli/*/*/guides',
      meta: { label: 'Concepts', order: 5, collapsed: false },
    },
  ],
};
