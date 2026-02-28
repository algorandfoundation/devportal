import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { css, fonts } from '../theme/index.js';

describe('theme exports', () => {
  it('exports css path that exists', () => {
    expect(typeof css).toBe('string');
    expect(css.endsWith('theme.css')).toBe(true);
    expect(existsSync(css)).toBe(true);
  });

  it('exports fonts path that exists', () => {
    expect(typeof fonts).toBe('string');
    expect(fonts.endsWith('fonts.css')).toBe(true);
    expect(existsSync(fonts)).toBe(true);
  });
});
