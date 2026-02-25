import { describe, it, expect } from 'vitest';
import { readBaseFromConfig, resolveBase } from '../../src/utils/resolve-base.js';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

describe('readBaseFromConfig', () => {
  function makeTmpDir(): string {
    return mkdtempSync(join(tmpdir(), 'devportal-docs-test-'));
  }

  it('reads base from astro.config.mjs', () => {
    const dir = makeTmpDir();
    writeFileSync(
      join(dir, 'astro.config.mjs'),
      `export default { base: '/algokit-utils-ts' };`,
    );
    expect(readBaseFromConfig(dir)).toBe('/algokit-utils-ts');
  });

  it('strips trailing slash', () => {
    const dir = makeTmpDir();
    writeFileSync(
      join(dir, 'astro.config.mjs'),
      `export default { base: '/algokit-utils-ts/' };`,
    );
    expect(readBaseFromConfig(dir)).toBe('/algokit-utils-ts');
  });

  it('returns null when no config file', () => {
    const dir = makeTmpDir();
    expect(readBaseFromConfig(dir)).toBeNull();
  });

  it('returns null when no base field', () => {
    const dir = makeTmpDir();
    writeFileSync(join(dir, 'astro.config.mjs'), `export default {};`);
    expect(readBaseFromConfig(dir)).toBeNull();
  });

  it('returns null for relative base (no leading /)', () => {
    const dir = makeTmpDir();
    writeFileSync(
      join(dir, 'astro.config.mjs'),
      `export default { base: 'no-slash' };`,
    );
    expect(readBaseFromConfig(dir)).toBeNull();
  });
});

describe('resolveBase', () => {
  function makeTmpDir(): string {
    return mkdtempSync(join(tmpdir(), 'devportal-docs-test-'));
  }

  it('uses --base flag when provided', () => {
    expect(resolveBase(['--base', '/test'], '/tmp')).toBe('/test');
  });

  it('strips trailing slash from --base', () => {
    expect(resolveBase(['--base', '/test/'], '/tmp')).toBe('/test');
  });

  it('falls back to astro.config.mjs', () => {
    const dir = makeTmpDir();
    writeFileSync(
      join(dir, 'astro.config.mjs'),
      `export default { base: '/from-config' };`,
    );
    expect(resolveBase([], dir)).toBe('/from-config');
  });

  it('throws when no base can be determined', () => {
    const dir = makeTmpDir();
    expect(() => resolveBase([], dir)).toThrow('Could not determine site base');
  });
});
