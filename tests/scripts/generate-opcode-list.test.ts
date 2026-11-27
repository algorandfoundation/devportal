import { beforeAll, describe, expect, it } from 'vitest';
import Handlebars from 'handlebars';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

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

/* ───────── Field Reference tables ───────── */

// What the Index column must show: the field's ByteEncoding, i.e. the number
// a developer puts in the bytecode. It is NOT the row's position in the
// table. Upstream leaves some fields out of some tables (txna lists only the
// array fields, itxn_field only the settable ones), so the numbers can have
// gaps, and from the first gap on, position and field number differ.

// The parts of opcodes.json these tests read.
interface FieldDetail {
  Name: string;
  ByteEncoding?: number;
  Type?: string;
}
interface Op {
  Name: string;
  ArgEnum?: string[];
  ArgDetails?: FieldDetail[];
}

// One field-table row as plain text: [Index, Name, Type].
type Row = [string, string, string];

// Pull the rows out of a rendered table. Deliberately simple: the helper
// emits one `<tr><td>..</td><td>..</td><td>..</td></tr>` per field.
const rowsOf = (html: string): Row[] =>
  [
    ...html.matchAll(
      /<tr><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/g,
    ),
  ].map(m => [m[1], m[2], m[3]] as Row);

// What a row should be, read straight from one ArgDetails entry.
// A missing Type is shown as "-" (go-algorand omits Type for fields that
// have none, e.g. the ecdsa curves).
const expectedRow = (d: FieldDetail): Row => [
  String(d.ByteEncoding),
  d.Name,
  d.Type || '-',
];

const fieldTable = (op: Op) =>
  render('{{{fieldDetailTable ArgDetails ArgEnum Name}}}', op);

describe('Field Reference table: worked examples', () => {
  // Two small hand-written tables. The "real page" tests further down already
  // check every opcode, so these add no coverage. They stay for two reasons:
  // - They fail with a readable message. If rendering the real page throws,
  //   vitest reports those tests as "skipped", but these still fail with the
  //   actual error.
  // - They always contain the cases that matter (a gap in the numbers, and
  //   field number 0), whatever the shipped data looks like.
  //
  // Values copied by hand from go-algorand master @ e46aea54,
  // data/transactions/logic/langspec_v14.json (AVM v14). They are frozen on
  // purpose: they never read opcodes.json, so a data refresh cannot break
  // them, and they do NOT prove the page matches upstream.

  it('txna: ApplicationArgs is 26, not its row position 0', () => {
    // txna lists only array fields, so its numbers start at 26 and skip 27.
    const out = fieldTable({
      Name: 'txna',
      ArgEnum: ['ApplicationArgs', 'Accounts'],
      ArgDetails: [
        { Name: 'ApplicationArgs', Type: '[]byte', ByteEncoding: 26 },
        { Name: 'Accounts', Type: 'address', ByteEncoding: 28 },
      ],
    });
    expect(rowsOf(out)).toEqual([
      ['26', 'ApplicationArgs', '[]byte'],
      ['28', 'Accounts', 'address'],
    ]);
  });

  it('global: a table with no gaps starts at 0 and counts up', () => {
    // Field number 0 is valid and must not be mistaken for "missing".
    const out = fieldTable({
      Name: 'global',
      ArgEnum: ['MinTxnFee', 'MinBalance'],
      ArgDetails: [
        { Name: 'MinTxnFee', Type: 'uint64', ByteEncoding: 0 },
        { Name: 'MinBalance', Type: 'uint64', ByteEncoding: 1 },
      ],
    });
    expect(rowsOf(out)).toEqual([
      ['0', 'MinTxnFee', 'uint64'],
      ['1', 'MinBalance', 'uint64'],
    ]);
  });
});

describe('Field Reference table: refuses data it does not understand', () => {
  // If the langspec format changes, the build should stop with a clear error
  // rather than publish a table of guessed numbers.

  it('throws when a field has no ByteEncoding', () => {
    expect(() =>
      fieldTable({
        Name: 'txn',
        ArgEnum: ['Sender'],
        ArgDetails: [{ Name: 'Sender', Type: 'address' }],
      }),
    ).toThrow(/ByteEncoding/);
  });

  it('throws when ArgDetails and ArgEnum name different fields', () => {
    expect(() =>
      fieldTable({
        Name: 'txn',
        ArgEnum: ['Fee'],
        ArgDetails: [{ Name: 'Sender', Type: 'address', ByteEncoding: 0 }],
      }),
    ).toThrow(/Sender/);
  });

  it('throws when ArgDetails and ArgEnum have different lengths', () => {
    expect(() =>
      fieldTable({
        Name: 'txn',
        ArgEnum: ['Sender', 'Fee'],
        ArgDetails: [{ Name: 'Sender', Type: 'address', ByteEncoding: 0 }],
      }),
    ).toThrow(/ArgEnum/);
  });

  it('throws when ArgEnum is present but ArgDetails is missing', () => {
    // No ArgDetails means no field numbers at all. Langspecs older than
    // go-algorand v5.0.0 have this shape.
    expect(() => fieldTable({ Name: 'txn', ArgEnum: ['Sender'] })).toThrow(
      /ArgDetails/,
    );
  });
});

describe('Field Reference tables on the real page', () => {
  // This is the check that keeps working after every data refresh: it holds
  // no field numbers of its own. It renders the real template with the
  // shipped opcodes.json and, for every opcode, compares each table row with
  // that opcode's ArgDetails, in order.
  //
  // What it proves: the generator and template copy Index, Name and Type
  // from the data faithfully, for every opcode, including ones added later.
  // What it does NOT prove: that opcodes.json itself matches go-algorand.
  // It reads the same file the page is built from. To check the data itself,
  // compare it with go-algorand's data/transactions/logic/langspec_vN.json,
  // or with the field tables in TEAL_opcodes_vN.md, whose INDEX column is the
  // same number.

  const data: { Ops: Op[] } = JSON.parse(
    readFileSync(
      fileURLToPath(
        new URL(
          '../../src/content/docs/reference/algorand-teal/opcodes.json',
          import.meta.url,
        ),
      ),
      'utf8',
    ),
  );
  const template = readFileSync(
    fileURLToPath(new URL('../../templates/opcodes.md.hbs', import.meta.url)),
    'utf8',
  );

  // Render the whole page in memory (render() would write it to disk), then
  // cut it into one chunk per opcode. This runs in beforeAll because the
  // helpers are registered by the import at the top of this file.
  // If rendering throws here, vitest marks the per-opcode tests "skipped"
  // and the file as failed: read the error printed above the summary.
  const sections = new Map<string, string>();
  beforeAll(() => {
    const page = render(template, { opcodes: data.Ops });
    for (const chunk of page.split('<div class="opcode-section"').slice(1)) {
      const name = chunk.match(/data-name="([^"]*)"/)![1];
      sections.set(name, chunk);
    }
  });
  const fieldRowsFor = (name: string): Row[] => {
    const table = sections.get(name)!.split('Field Reference</span>')[1] ?? '';
    return rowsOf(table.split('</tbody>')[0]);
  };

  const opsWithFields = data.Ops.filter(op => op.ArgDetails?.length);
  const opsWithoutFields = data.Ops.filter(op => !op.ArgDetails?.length);

  it('renders one section per opcode', () => {
    expect(sections.size).toBe(data.Ops.length);
  });

  it('finds at least one opcode with fields (so the next test is not empty)', () => {
    expect(opsWithFields.length).toBeGreaterThan(0);
  });

  it.each(opsWithFields)(
    '$Name: every row is [ByteEncoding, Name, Type] from ArgDetails, in order',
    op => {
      expect(fieldRowsFor(op.Name)).toEqual(
        (op.ArgDetails ?? []).map(expectedRow),
      );
    },
  );

  it('the template refuses an opcode with ArgEnum but no ArgDetails', () => {
    // Goes through the real template, so it also pins the template's
    // {{#if ArgEnum}} guard: such an opcode must fail, not lose its table.
    expect(() =>
      render(template, { opcodes: [{ Name: 'txn', ArgEnum: ['Sender'] }] }),
    ).toThrow(/ArgDetails/);
  });

  it('opcodes without fields have no Field Reference table', () => {
    for (const op of opsWithoutFields) {
      expect(sections.get(op.Name), op.Name).not.toContain('Field Reference');
    }
  });
});
