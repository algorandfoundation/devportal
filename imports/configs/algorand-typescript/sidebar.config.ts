import type { SidebarMetadata } from '../../types.js';

export const sidebarMetadata: SidebarMetadata = {
  sections: [
    {
      pattern: 'docs/algorand-typescript/*/*/api',
      meta: { label: 'API Reference', order: 10, collapsed: true, cascade: ['collapsed'] },
    },
  ],
};
