import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { config } from './import.config.js';

/**
 * Sidebar autogenerate entries for algokit-subscriber.
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
