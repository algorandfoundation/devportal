/**
 * Sidebar types compatible with Starlight's sidebar configuration.
 * Defined inline to avoid build-time dependency on @astrojs/starlight
 * (which requires Astro virtual modules not available outside a build).
 */

/** A single Starlight sidebar entry. */
export type SidebarItem =
  | { slug: string; label?: string; badge?: SidebarBadge; attrs?: Record<string, string | number | boolean> }
  | { label: string; link: string; badge?: SidebarBadge; attrs?: Record<string, string | number | boolean> }
  | { label: string; autogenerate: { directory: string; collapsed?: boolean }; badge?: SidebarBadge; collapsed?: boolean }
  | { label: string; items: SidebarItem[]; badge?: SidebarBadge; collapsed?: boolean };

type SidebarBadge =
  | string
  | { text: string; variant?: 'note' | 'danger' | 'success' | 'caution' | 'tip' | 'default'; class?: string };

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
