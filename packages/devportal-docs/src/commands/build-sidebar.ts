import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// ---------------------------------------------------------------------------
// Serialization helpers
// ---------------------------------------------------------------------------

export function isSerializable(entry: unknown): boolean {
  if (typeof entry !== 'object' || entry === null) return false;
  return (
    'slug' in entry ||
    ('link' in entry && 'label' in entry) ||
    ('items' in entry && 'label' in entry) ||
    ('autogenerate' in entry && 'label' in entry)
  );
}

export function filterSerializable(entries: unknown[]): unknown[] {
  return entries
    .filter(isSerializable)
    .map((entry) => {
      if (typeof entry === 'object' && entry !== null && 'items' in entry) {
        const e = entry as Record<string, unknown>;
        return { ...e, items: filterSerializable(e.items as unknown[]) };
      }
      return entry;
    });
}

// ---------------------------------------------------------------------------
// Command entry point
// ---------------------------------------------------------------------------

export async function run(_args: string[], docsDir: string): Promise<void> {
  // Dynamic import of the library's sidebar config.
  // Uses tsx's tsImport for .ts file support.
  const configPath = join(docsDir, 'sidebar.config.ts');

  let sidebar: unknown[];
  let devportalFallbacks: unknown[] | undefined;

  try {
    const { tsImport } = await import('tsx/esm/api');
    const mod = await tsImport(configPath, import.meta.url);
    sidebar = mod.sidebar;
    devportalFallbacks = mod.devportalFallbacks;
  } catch (primaryErr) {
    // Fallback: try direct import (works if file is .mjs or tsx is registered)
    try {
      const mod = await import(configPath);
      sidebar = mod.sidebar;
      devportalFallbacks = mod.devportalFallbacks;
    } catch {
      // Surface the original tsx error — it's more useful than the fallback error
      throw primaryErr;
    }
  }

  if (!Array.isArray(sidebar)) {
    throw new Error("sidebar.config.ts must export a named 'sidebar' array");
  }

  const filtered = filterSerializable(sidebar);
  const fallbacks = Array.isArray(devportalFallbacks) ? devportalFallbacks : [];
  const result = [...filtered, ...fallbacks];

  const outputDir = join(docsDir, 'dist-devportal');
  mkdirSync(outputDir, { recursive: true });

  const outputPath = join(outputDir, 'sidebar.json');
  writeFileSync(outputPath, JSON.stringify(result, null, 2));

  console.log(`Wrote ${result.length} sidebar entries to ${outputPath}`);
}
