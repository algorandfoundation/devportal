import type { SidebarMetadata } from '../../types.js';

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
