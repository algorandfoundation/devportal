import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

import type { StarlightUserConfig } from '@astrojs/starlight/types';

import type { SidebarJsonEntry } from './types.js';

const SIDEBAR_LABEL_PREFIX = '_lib';

/** Build the internal label used to match library sidebar groups: `_lib:{slug}:{language}:{version}`. */
export function buildLibrarySidebarLabel(slug: string, language: string, version: string): string {
  return `${SIDEBAR_LABEL_PREFIX}:${slug}:${language.toLowerCase()}:${version}`;
}

/** Check whether a sidebar entry label is a library sidebar label. */
export function isLibrarySidebarLabel(label: string): boolean {
  return label.startsWith(`${SIDEBAR_LABEL_PREFIX}:`);
}

/** Parse a library sidebar label into its components. Returns null if the label is not a valid library label. */
export function parseLibrarySidebarLabel(
  label: string,
): { slug: string; language: string; version: string } | null {
  if (!isLibrarySidebarLabel(label)) return null;
  const parts = label.split(':');
  if (parts.length !== 4) return null;
  return { slug: parts[1], language: parts[2], version: parts[3] };
}

/** Content root relative to project root. */
const CONTENT_DOCS_ROOT = join(process.cwd(), 'src/content/docs');

/**
 * Rebase all paths in sidebar.json entries from artifact-relative
 * to devportal content paths.
 *
 * Rules:
 * - autogenerate.directory: prefix with `{prefix}/`
 * - link (no leading /):    prefix with `{prefix}/`
 * - link (leading /):       prefix with `/{prefix}`
 * - items (group):          recurse into children
 */
export function rebaseSidebarEntries(
  entries: SidebarJsonEntry[],
  prefix: string,
): SidebarJsonEntry[] {
  return entries.map((entry) => {
    if ('autogenerate' in entry) {
      return {
        ...entry,
        autogenerate: {
          ...entry.autogenerate,
          directory: `${prefix}/${entry.autogenerate.directory}`,
        },
      };
    }
    if ('link' in entry) {
      const rebased = entry.link.startsWith('/')
        ? `/${prefix}${entry.link}`
        : `${prefix}/${entry.link}`;
      return { ...entry, link: rebased };
    }
    if ('items' in entry) {
      return { ...entry, items: rebaseSidebarEntries(entry.items, prefix) };
    }
    return entry;
  });
}

/**
 * Build Starlight sidebar entries for a library's variants.
 *
 * For each variant/version, checks if a rebased sidebar.json exists on disk
 * (written by the import script for github-artifact sources). If present,
 * reads the structured entries and appends a devportal-owned API Reference
 * autogenerate group. If absent, falls back to a single top-level autogenerate
 * directive (the existing behavior for github-loader sources).
 */
export function buildSidebarEntries(
  slug: string,
  variants: Array<{ language: string; version: string }>,
): NonNullable<StarlightUserConfig['sidebar']> {
  return variants.map((v) => {
    const lang = v.language.toLowerCase();
    const prefix = `docs/${slug}/${lang}/${v.version}`;
    const sidebarJsonPath = join(CONTENT_DOCS_ROOT, prefix, 'sidebar.json');

    if (existsSync(sidebarJsonPath)) {
      const raw = readFileSync(sidebarJsonPath, 'utf-8');
      const entries: SidebarJsonEntry[] = JSON.parse(raw);
      const rebased = rebaseSidebarEntries(entries, prefix);

      return {
        label: buildLibrarySidebarLabel(slug, v.language, v.version),
        items: [
          ...rebased,
          {
            label: 'API Reference',
            autogenerate: { directory: `${prefix}/api` },
            collapsed: true,
          },
        ],
      };
    }

    // Fallback: no sidebar.json — use single top-level autogenerate
    return {
      label: buildLibrarySidebarLabel(slug, v.language, v.version),
      autogenerate: { directory: prefix },
    };
  });
}
