import type { StarlightUserConfig } from '@astrojs/starlight/types';

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

/** Build Starlight sidebar autogenerate entries for a library's variants. */
export function buildSidebarEntries(
  slug: string,
  variants: Array<{ language: string; version: string }>,
): NonNullable<StarlightUserConfig['sidebar']> {
  return variants.map((v) => ({
    label: buildLibrarySidebarLabel(slug, v.language, v.version),
    autogenerate: { directory: `docs/${slug}/${v.language.toLowerCase()}/${v.version}` },
  }));
}
