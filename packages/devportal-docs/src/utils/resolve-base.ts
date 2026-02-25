import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Read the Starlight `base` field from astro.config.mjs via regex.
 * Returns null if the file doesn't exist, has no base, or base is relative.
 */
export function readBaseFromConfig(docsDir: string): string | null {
  const configPath = join(docsDir, 'astro.config.mjs');
  if (!existsSync(configPath)) return null;
  const content = readFileSync(configPath, 'utf-8');
  const match = content.match(/base:\s*["']([^"']+)["']/);
  if (!match) return null;
  const base = match[1].replace(/\/$/, '');
  if (!base.startsWith('/')) return null;
  return base;
}

/**
 * Resolve the site base from CLI args, astro.config.mjs, or fail.
 */
export function resolveBase(args: string[], docsDir: string): string {
  const baseIdx = args.indexOf('--base');
  if (baseIdx >= 0 && args[baseIdx + 1]) {
    return args[baseIdx + 1].replace(/\/$/, '');
  }

  const fromConfig = readBaseFromConfig(docsDir);
  if (fromConfig) return fromConfig;

  throw new Error(
    'Could not determine site base. Pass --base or ensure astro.config.mjs has a base field.',
  );
}
