import { describe, it, expect } from 'vitest';
import { isSerializable, filterSerializable } from '../../src/commands/build-sidebar.js';

describe('isSerializable', () => {
  it('accepts slug entries', () => {
    expect(isSerializable({ slug: 'guides/intro' })).toBe(true);
  });

  it('accepts link+label entries', () => {
    expect(isSerializable({ link: '/', label: 'Home' })).toBe(true);
  });

  it('accepts autogenerate entries', () => {
    expect(
      isSerializable({ label: 'API', autogenerate: { directory: 'api' } }),
    ).toBe(true);
  });

  it('accepts group entries with items', () => {
    expect(
      isSerializable({ label: 'Group', items: [{ slug: 'a' }] }),
    ).toBe(true);
  });

  it('rejects non-objects', () => {
    expect(isSerializable('string')).toBe(false);
  });

  it('rejects objects without recognized keys', () => {
    expect(isSerializable({ unknown: true })).toBe(false);
  });
});

describe('filterSerializable', () => {
  it('filters out non-serializable entries', () => {
    const input = [
      { slug: 'a' },
      { unknown: true },
      { label: 'B', link: '/b' },
    ];
    const result = filterSerializable(input);
    expect(result).toHaveLength(2);
  });

  it('recursively filters nested items', () => {
    const input = [
      {
        label: 'Group',
        items: [{ slug: 'a' }, { unknown: true }],
      },
    ];
    const result = filterSerializable(input);
    expect(result).toHaveLength(1);
    expect((result[0] as { items: unknown[] }).items).toHaveLength(1);
  });

  it('preserves all fields of serializable entries', () => {
    const input = [
      { label: 'API', autogenerate: { directory: 'api' }, collapsed: true },
    ];
    const result = filterSerializable(input);
    expect(result[0]).toEqual({
      label: 'API',
      autogenerate: { directory: 'api' },
      collapsed: true,
    });
  });
});
