import { describe, it, expect } from 'vitest';
import { mkdtempSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { run } from '../../src/commands/build-manifest.js';

function makeTmpDir(): string {
  return mkdtempSync(join(tmpdir(), 'devportal-docs-test-'));
}

describe('build-manifest', () => {
  it('writes manifest.json with base from astro.config.mjs', () => {
    const dir = makeTmpDir();
    writeFileSync(
      join(dir, 'astro.config.mjs'),
      `export default { base: '/algokit-utils-ts' };`,
    );
    run([], dir);

    const manifest = JSON.parse(
      readFileSync(join(dir, 'dist-devportal', 'manifest.json'), 'utf-8'),
    );
    expect(manifest.base).toBe('/algokit-utils-ts');
    expect(manifest.timestamp).toBeDefined();
  });

  it('uses --base flag over config file', () => {
    const dir = makeTmpDir();
    writeFileSync(
      join(dir, 'astro.config.mjs'),
      `export default { base: '/wrong' };`,
    );
    run(['--base', '/correct'], dir);

    const manifest = JSON.parse(
      readFileSync(join(dir, 'dist-devportal', 'manifest.json'), 'utf-8'),
    );
    expect(manifest.base).toBe('/correct');
  });

  it('creates dist-devportal directory if missing', () => {
    const dir = makeTmpDir();
    writeFileSync(
      join(dir, 'astro.config.mjs'),
      `export default { base: '/test' };`,
    );
    run([], dir);
    expect(existsSync(join(dir, 'dist-devportal', 'manifest.json'))).toBe(true);
  });

  it('throws when no base can be determined', () => {
    const dir = makeTmpDir();
    expect(() => run([], dir)).toThrow('Could not determine site base');
  });
});
