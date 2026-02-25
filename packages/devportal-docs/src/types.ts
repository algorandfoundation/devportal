import type { StarlightUserConfig } from '@astrojs/starlight/types';

/** A single Starlight sidebar entry. */
export type SidebarItem = NonNullable<StarlightUserConfig['sidebar']>[number];

/** Shape of a library's sidebar.config.ts exports. */
export interface DevportalSidebarConfig {
  /** Primary sidebar entries. */
  sidebar: SidebarItem[];
  /**
   * Serializable replacements for non-serializable entries
   * (e.g. typeDocSidebarGroup → autogenerate fallback).
   */
  devportalFallbacks?: SidebarItem[];
}
