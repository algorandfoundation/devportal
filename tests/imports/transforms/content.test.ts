// tests/imports/transforms/content.test.ts
import { describe, it, expect } from 'vitest';
import { makeContext } from '../../helpers/transform-context.js';
import {
  createRemoveLineTransform,
  createReplaceTransform,
  createRegexReplaceTransform,
  createRemoveMultipleLinesTransform,
} from '../../../imports/transforms/content.js';

// ─── createRemoveLineTransform ───────────────────────────────────────

describe('createRemoveLineTransform', () => {
  it('should remove all occurrences of the line', () => {
    const transform = createRemoveLineTransform('DELETE_THIS');
    const ctx = makeContext();

    expect(transform('Keep DELETE_THIS End', ctx)).toBe('Keep  End');
  });

  it('should return unchanged when line is not found', () => {
    const transform = createRemoveLineTransform('MISSING');
    const ctx = makeContext();

    expect(transform('No match here', ctx)).toBe('No match here');
  });
});

// ─── createReplaceTransform ──────────────────────────────────────────

describe('createReplaceTransform', () => {
  it('should replace all occurrences of from with to', () => {
    const transform = createReplaceTransform('foo', 'bar');
    const ctx = makeContext();

    expect(transform('foo and foo', ctx)).toBe('bar and bar');
  });

  it('should return unchanged when from is not found', () => {
    const transform = createReplaceTransform('missing', 'replacement');
    const ctx = makeContext();

    expect(transform('No match', ctx)).toBe('No match');
  });
});

// ─── createRegexReplaceTransform ─────────────────────────────────────

describe('createRegexReplaceTransform', () => {
  it('should replace regex matches globally', () => {
    const transform = createRegexReplaceTransform(/v\d+/g, 'vX');
    const ctx = makeContext();

    expect(transform('v1 and v2', ctx)).toBe('vX and vX');
  });

  it('should return unchanged when no match', () => {
    const transform = createRegexReplaceTransform(/NOPE/g, 'yes');
    const ctx = makeContext();

    expect(transform('Content', ctx)).toBe('Content');
  });
});

// ─── createRemoveMultipleLinesTransform ──────────────────────────────

describe('createRemoveMultipleLinesTransform', () => {
  it('should remove multiple specified strings', () => {
    const transform = createRemoveMultipleLinesTransform(['AAA', 'BBB']);
    const ctx = makeContext();

    expect(transform('AAA CCC BBB DDD', ctx)).toBe(' CCC  DDD');
  });

  it('should handle partial matches (only some strings found)', () => {
    const transform = createRemoveMultipleLinesTransform(['found', 'missing']);
    const ctx = makeContext();

    expect(transform('found text', ctx)).toBe(' text');
  });

  it('should return unchanged when no strings match', () => {
    const transform = createRemoveMultipleLinesTransform(['X', 'Y']);
    const ctx = makeContext();

    expect(transform('No match', ctx)).toBe('No match');
  });
});
