#!/usr/bin/env npx tsx
/**
 * Generate a manifest.json for the devportal doc artifact.
 *
 * Reads the Starlight `base` from astro.config.mjs and writes a JSON
 * manifest that the devportal import script uses for link normalization
 * and provenance tracking.
 *
 * Usage:
 *   npx tsx build-manifest.ts
 *   npx tsx build-manifest.ts --base /algokit-utils-ts
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Config resolution
// ---------------------------------------------------------------------------

function readBaseFromConfig(docsDir: string): string | null {
  const configPath = join(docsDir, 'astro.config.mjs');
  if (!existsSync(configPath)) return null;
  const content = readFileSync(configPath, 'utf-8');
  const match = content.match(/base:\s*["']([^"']+)["']/);
  if (!match) return null;
  const base = match[1].replace(/\/$/, '');
  if (!base.startsWith('/')) return null;
  return base;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  const args = process.argv.slice(2);
  const docsDir = resolve(dirname(fileURLToPath(import.meta.url)));
  const outPath = join(docsDir, 'dist-devportal', 'manifest.json');

  // Resolve base: CLI flag > astro.config.mjs > default '/'
  let base: string = '/';
  const baseIdx = args.indexOf('--base');
  if (baseIdx >= 0 && args[baseIdx + 1]) {
    base = args[baseIdx + 1].replace(/\/$/, '');
  } else {
    base = readBaseFromConfig(docsDir) ?? '/';
  }

  const manifest = {
    base,
    timestamp: new Date().toISOString(),
  };

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Wrote manifest.json (base: ${base})`);
}

main();
