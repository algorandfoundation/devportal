import { beforeAll, describe, expect, it } from 'vitest';
import Handlebars from 'handlebars';

// Importing the generator registers its Handlebars helpers as a side effect.
// `render()` is guarded to run only when the script is the entry point, so the
// import does not write to src/content/docs.
beforeAll(async () => {
  await import('../../scripts/generate-opcode-list.ts');
});

// The template is compiled with `noEscape: true`, so every field carrying free
// text has to be escaped by a helper. These cover the inline-text helper.
const render = (src: string, ctx: object) =>
  Handlebars.compile(src, { noEscape: true })(ctx);

describe('mdxText helper', () => {
  it('escapes < so MDX does not parse it as a JSX tag', () => {
    // Regression: the bmodexp cost text reads "If bitlen(B) <= 64, ..." and a
    // raw `<=` makes @mdx-js/rollup fail with:
    //   Unexpected character `=` (U+003D) before name
    const out = render('{{{mdxText DocCost}}}', {
      DocCost: 'If bitlen(B) <= 64, (bitlen(B) + popcount(B)) * (S + 2)',
    });

    expect(out).toBe(
      'If bitlen(B) &lt;= 64, (bitlen(B) + popcount(B)) * (S + 2)',
    );
  });

  it('escapes braces so MDX does not parse them as an expression', () => {
    expect(render('{{{mdxText v}}}', { v: 'cost is {A} per byte' })).toBe(
      'cost is &#123;A&#125; per byte',
    );
  });

  it('escapes ampersands before other entities', () => {
    expect(render('{{{mdxText v}}}', { v: 'A & B < C' })).toBe(
      'A &amp; B &lt; C',
    );
  });

  it('renders an empty string for a missing value', () => {
    expect(render('{{{mdxText v}}}', {})).toBe('');
  });
});

describe('syncTealGrammar', () => {
  const grammarWith = (...matches: string[]) => ({
    repository: {
      keywords: {
        patterns: matches.map(match => ({ name: 'keyword.other.teal', match })),
      },
    },
  });

  it('adds opcodes the hand-written groups do not cover', async () => {
    const { syncTealGrammar, GENERATED_OPCODES_COMMENT } = await import(
      '../../scripts/generate-opcode-list.ts'
    );
    const grammar = grammarWith('\\b(box_get|box_put|sha256)\\b');

    const changed = syncTealGrammar(grammar, [
      'box_get',
      'box_splice',
      'sha256',
      'falcon_verify',
    ]);

    expect(changed).toBe(true);
    expect(grammar.repository.keywords.patterns.at(-1)).toEqual({
      comment: GENERATED_OPCODES_COMMENT,
      name: 'keyword.other.unit.teal',
      match: '\\b(box_splice|falcon_verify)\\b',
    });
  });

  it('does not treat a longer name as covering a shorter one', async () => {
    const { syncTealGrammar } = await import(
      '../../scripts/generate-opcode-list.ts'
    );
    // `sha512_256` is hand-written; plain `sha512` is a different opcode.
    const grammar = grammarWith('\\b(sha512_256)\\b');

    syncTealGrammar(grammar, ['sha512', 'sha512_256']);

    expect(grammar.repository.keywords.patterns.at(-1)?.match).toBe(
      '\\b(sha512)\\b',
    );
  });

  it('ignores operator opcodes and is stable on a second run', async () => {
    const { syncTealGrammar } = await import(
      '../../scripts/generate-opcode-list.ts'
    );
    const grammar = grammarWith('\\b(box_get)\\b');

    syncTealGrammar(grammar, ['b+', '>=', 'box_get', 'mimc']);
    const first = JSON.stringify(grammar);

    expect(syncTealGrammar(grammar, ['b+', '>=', 'box_get', 'mimc'])).toBe(false);
    expect(JSON.stringify(grammar)).toBe(first);
    expect(first).not.toContain('b+');
  });

  it('removes the generated group once everything is hand-written', async () => {
    const { syncTealGrammar } = await import(
      '../../scripts/generate-opcode-list.ts'
    );
    const grammar = grammarWith('\\b(box_get)\\b');
    syncTealGrammar(grammar, ['box_get', 'mimc']);
    grammar.repository.keywords.patterns[0].match = '\\b(box_get|mimc)\\b';

    expect(syncTealGrammar(grammar, ['box_get', 'mimc'])).toBe(true);
    expect(grammar.repository.keywords.patterns).toHaveLength(1);
  });
});
