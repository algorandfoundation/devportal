import { describe, it, expect } from 'vitest';
import { parseCommand } from '../src/cli.js';

describe('parseCommand', () => {
  it.each(['init', 'build', 'normalize-links', 'build-sidebar', 'build-manifest'])(
    'parses "%s" command',
    (cmd) => {
      const result = parseCommand([cmd]);
      expect(result.command).toBe(cmd);
    },
  );

  it('passes remaining args through', () => {
    const result = parseCommand(['build', '--base', '/test', '--verbose']);
    expect(result.command).toBe('build');
    expect(result.args).toEqual(['--base', '/test', '--verbose']);
  });

  it('returns help for no args', () => {
    const result = parseCommand([]);
    expect(result.command).toBe('help');
  });

  it('returns help for unknown command', () => {
    const result = parseCommand(['unknown']);
    expect(result.command).toBe('help');
  });

  it('returns help for --help flag', () => {
    const result = parseCommand(['--help']);
    expect(result.command).toBe('help');
  });
});
