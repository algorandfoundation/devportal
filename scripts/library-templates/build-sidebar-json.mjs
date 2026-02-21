#!/usr/bin/env node
/**
 * build-sidebar-json.mjs
 *
 * Imports the library's sidebar.config.ts, filters out non-serializable
 * entries (runtime plugins like typeDocSidebarGroup), and writes sidebar.json.
 *
 * Usage (from library's docs/ directory):
 *   node build-sidebar-json.mjs
 *
 * Output: dist-devportal/sidebar.json
 *
 * Copy this file into your library's docs/ directory.
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the library's sidebar config.
// Adjust this path if your sidebar.config.ts is in a different location.
const { sidebar } = await import('./sidebar.config.ts');

/**
 * Check if a sidebar entry is serializable (plain data object).
 * Runtime plugin entries (like typeDocSidebarGroup) are class instances
 * or objects with methods and should be excluded.
 */
function isSerializable(entry) {
  if (typeof entry !== 'object' || entry === null) return false;
  return (
    'slug' in entry ||
    ('link' in entry && 'label' in entry) ||
    ('items' in entry && 'label' in entry) ||
    ('autogenerate' in entry && 'label' in entry)
  );
}

/**
 * Recursively filter sidebar entries, keeping only serializable ones.
 */
function filterSerializable(entries) {
  return entries
    .filter(isSerializable)
    .map((entry) => {
      if ('items' in entry) {
        return { ...entry, items: filterSerializable(entry.items) };
      }
      return entry;
    });
}

const filtered = filterSerializable(sidebar);
const outputDir = join(__dirname, 'dist-devportal');
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, 'sidebar.json');
writeFileSync(outputPath, JSON.stringify(filtered, null, 2));

console.log(`Wrote ${filtered.length} sidebar entries to ${outputPath}`);
