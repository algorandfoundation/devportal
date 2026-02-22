import type { SidebarMetadata } from '../../types.js';

export const sidebarMetadata: SidebarMetadata = {
  sections: [
    {
      pattern: 'docs/algokit-utils/*/*',
      meta: { order: 10, collapsed: true, cascade: ['collapsed'] },
    },
    {
      pattern: 'docs/algokit-utils/typescript/*/api',
      meta: { label: 'API Reference', order: 10, collapsed: true, cascade: ['collapsed'] },
    },
    {
      pattern: 'docs/algokit-utils/*/*/guides',
      meta: { label: 'Concepts', order: 5, collapsed: false },
    },
  ],
};
