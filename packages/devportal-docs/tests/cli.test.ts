import { describe, it, expect } from 'vitest';
import { parseCommand } from '../src/cli.js';

describe('parseCommand', () => {
  it('parses "init" command', () => {
    const result = parseCommand(['init']);
    expect(result.command).toBe('init');
    expect(result.args).toEqual([]);
  });

  it('parses "build" command', () => {
    const result = parseCommand(['build']);
    expect(result.command).toBe('build');
  });

  it('parses "normalize-links" command', () => {
    const result = parseCommand(['normalize-links']);
    expect(result.command).toBe('normalize-links');
  });

  it('parses "build-sidebar" command', () => {
    const result = parseCommand(['build-sidebar']);
    expect(result.command).toBe('build-sidebar');
  });

  it('parses "build-manifest" command', () => {
    const result = parseCommand(['build-manifest']);
    expect(result.command).toBe('build-manifest');
  });

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
