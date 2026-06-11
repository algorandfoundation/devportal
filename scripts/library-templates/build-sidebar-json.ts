#!/usr/bin/env npx tsx
/**
 * build-sidebar-json.ts
 *
 * Imports the library's sidebar.config.ts, filters out non-serializable
 * entries (runtime plugins like typeDocSidebarGroup), and writes sidebar.json.
 *
 * Usage (from library's docs/ directory):
 *   npx tsx build-sidebar-json.ts
 *
 * Output: dist-devportal/sidebar.json
 *
 * Prerequisite: tsx must be a dev dependency in the library's docs/package.json.
 * Copy this file into your library's docs/ directory.
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import the library's sidebar config.
// Adjust this path if your sidebar.config.ts is in a different location.
// devportalFallbacks: optional serializable replacements for non-serializable
// entries (e.g. typeDocSidebarGroup → autogenerate fallback).
const { sidebar, devportalFallbacks } = await import('./sidebar.config.ts');

/**
 * Check if a sidebar entry is serializable (plain data object).
 * Runtime plugin entries (like typeDocSidebarGroup) are class instances
 * or objects with methods and should be excluded.
 */
function isSerializable(entry: unknown): boolean {
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
function filterSerializable(entries: unknown[]): unknown[] {
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

const filtered = filterSerializable(sidebar);
const fallbacks = Array.isArray(devportalFallbacks) ? devportalFallbacks : [];
const result = [...filtered, ...fallbacks];

const outputDir = join(__dirname, 'dist-devportal');
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, 'sidebar.json');
writeFileSync(outputPath, JSON.stringify(result, null, 2));

console.log(`Wrote ${result.length} sidebar entries to ${outputPath}`);
