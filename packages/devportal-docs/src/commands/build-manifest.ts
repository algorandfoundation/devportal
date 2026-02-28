import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { resolveBase } from '../utils/resolve-base.js';

export function run(args: string[], docsDir: string): void {
  const base = resolveBase(args, docsDir);
  const outPath = join(docsDir, 'dist-devportal', 'manifest.json');

  const manifest = {
    base,
    timestamp: new Date().toISOString(),
  };

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Wrote manifest.json (base: ${base})`);
}
