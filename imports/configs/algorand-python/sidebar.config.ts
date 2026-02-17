import type { StarlightUserConfig } from '@astrojs/starlight/types';
import type { SidebarMetadata } from '../../types.js';
import { config } from './import.config.js';

/**
 * Sidebar autogenerate entries for algorand-python.
 *
 * Interim solution: generates sidebar trees by scanning content directories.
 * When the library ships its own Starlight sidebar config, replace this with
 * a direct import of that config.
 */
export const sidebarEntries: NonNullable<StarlightUserConfig['sidebar']> =
  config.variants
    .filter(v => v.enabled !== false)
    .flatMap(v =>
      v.versions.map(ver => ({
        label: `_lib:${config.metadata.slug}:${v.language.toLowerCase()}:${ver.slug}`,
        autogenerate: {
          directory: `docs/${config.metadata.slug}/${v.language.toLowerCase()}/${ver.slug}`,
        },
      })),
    );

export const sidebarMetadata: SidebarMetadata = {
  items: [
    {
      pattern: 'docs/algorand-python/*/latest/api',
      meta: { label: 'API Reference', order: 10, collapsed: true, cascade: ['collapsed'] },
    },
    {
      pattern: 'docs/algorand-python/*/latest/api/front-end-guide',
      meta: { label: 'Front-end Guide', cascade: ['collapsed'] },
    },
  ],
};
