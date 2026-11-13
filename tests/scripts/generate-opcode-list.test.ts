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
