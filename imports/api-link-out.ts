/**
 * API reference link-out.
 *
 * Generated API reference (TypeDoc / Sphinx output) is not mirrored into the
 * portal. Each library publishes it on its own docs site, which is always
 * built from the library's own source. The portal keeps the guides and links
 * out for the reference, so there is no copy here to go stale.
 *
 * These helpers are pure so they can be unit-tested; the import script applies
 * them to the unpacked content.
 */

import type { SidebarJsonEntry } from './types.js';

const isApiPath = (p: string): boolean => {
  const clean = p.replace(/^\//, '').toLowerCase();
  return clean === 'api' || clean.startsWith('api/');
};

/** True when a sidebar entry points only at API reference content. */
export function isApiSidebarEntry(entry: SidebarJsonEntry): boolean {
  if ('autogenerate' in entry) return isApiPath(entry.autogenerate.directory);
  if ('slug' in entry) return isApiPath(entry.slug);
  if ('items' in entry) {
    return entry.items.length > 0 && entry.items.every(isApiSidebarEntry);
  }
  if ('link' in entry) {
    return !/^https?:/.test(entry.link) && isApiPath(entry.link);
  }
  return false;
}

/**
 * Replace every API reference entry in a library sidebar with a single
 * external link to the library's own API site. Idempotent.
 */
export function linkOutApiSidebar(
  entries: SidebarJsonEntry[],
  apiReferenceUrl: string,
): SidebarJsonEntry[] {
  const kept: SidebarJsonEntry[] = [];
  let label: string | null = null;

  for (const entry of entries) {
    if ('link' in entry && entry.link === apiReferenceUrl) {
      // Already linked out by a previous run
      label ??= entry.label;
      continue;
    }
    if (isApiSidebarEntry(entry)) {
      label ??= 'label' in entry && entry.label ? entry.label : null;
      continue;
    }
    kept.push(entry);
  }

  kept.push({
    label: label ?? 'API Reference',
    link: apiReferenceUrl,
    attrs: { target: '_blank', rel: 'noopener' },
  });
  return kept;
}

/**
 * Rewrite markdown links and raw `href`s that point into the portal's
 * `/<prefix>/api/` tree so they point at the library's API landing page.
 *
 * Deep links are deliberately not preserved: upstream sites slug their pages
 * differently from the bundle's file names (e.g. `algopy.arc4.md` is served at
 * `algopyarc4/`), so a path-for-path rewrite would produce dead links.
 */
export function linkOutApiLinks(
  content: string,
  prefix: string,
  apiReferenceUrl: string,
): string {
  const escaped = `/${prefix}/api`.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // The path up to the end of the URL: `)`, quote, whitespace or end of input.
  // A trailing `#anchor` belongs to the old page and is dropped with it.
  const re = new RegExp(`${escaped}(?:[/#][^)\\s"']*)?(?=[)\\s"']|$)`, 'gi');
  return content.replace(re, apiReferenceUrl);
}
