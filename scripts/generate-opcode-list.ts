import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import Handlebars from 'handlebars';

// Shape of opcodes.json. Only the fields this script reads are typed; the rest
// pass through to the Handlebars template untouched.
interface OpcodeEntry {
  Name: string;
  [key: string]: unknown;
}

interface OpcodeData {
  Version: number;
  LatestReleasedVersion?: number;
  Ops: OpcodeEntry[];
}

/* ───────── helpers ───────── */

function htmlEscape(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Escape for MDX text: angle brackets would start a JSX tag, braces an
// expression. The template is compiled with `noEscape: true`, so any field
// carrying free text from the langspec must go through this.
function mdxEscape(s = '') {
  return htmlEscape(s).replace(/{/g, '&#123;').replace(/}/g, '&#125;');
}

// Inline MDX-safe text (single line, no paragraph splitting)
Handlebars.registerHelper('mdxText', (s = '') => {
  return new Handlebars.SafeString(mdxEscape(s));
});

// 0x?? bytecode. Some opcodes (v13+) are multi-byte and arrive as an array,
// e.g. [212, 1] -> `0xd4 0x01`.
Handlebars.registerHelper('bytecode', n => {
  const toHex = (b: number) => `0x${Number(b).toString(16).padStart(2, '0')}`;
  if (Array.isArray(n)) return n.map(toHex).join(' ');
  return toHex(n ?? 0);
});

// Groups as backticked, comma-separated list
Handlebars.registerHelper('groupList', arr => {
  if (!Array.isArray(arr) || arr.length === 0) return '-';
  const escaped = arr.map(
    v => '`' + String(v).replace(/\\/g, '\\\\').replace(/`/g, '\\`') + '`',
  );
  return escaped.join(', ');
});

// Immediate parameters table (Name, Encoding, Comment)
Handlebars.registerHelper('immediateTable', arr => {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  const rows = arr
    .map(it => {
      const name = htmlEscape(it?.Name ?? '-');
      const enc = htmlEscape(it?.Encoding ?? '-');
      const cmt = htmlEscape(it?.Comment ?? '-');
      return `<tr><td>${name}</td><td>${enc}</td><td>${cmt}</td></tr>`;
    })
    .join('');
  const html = `<table>
  <thead><tr><th>Name</th><th>Encoding</th><th>Description</th></tr></thead>
  <tbody>${rows}</tbody>
</table>`;
  return new Handlebars.SafeString(html);
});

// Field Reference table (Index, Name, Type columns), built from ArgDetails.
// Index is the field's ByteEncoding: the number that goes in the bytecode.
// It is NOT the row position. Upstream leaves fields out of some tables (for
// example txna lists only array fields), so the numbers can have gaps.
// Throws when it cannot number the fields (no ArgDetails, a field without an
// integer ByteEncoding, or ArgDetails and ArgEnum disagreeing), so such a
// langspec fails the build instead of printing wrong numbers. An opcode
// without ArgEnum gets no table at all; the page tests in
// tests/scripts/generate-opcode-list.test.ts catch a table that goes missing.
Handlebars.registerHelper('fieldDetailTable', (details, enumNames, opName) => {
  const names = Array.isArray(enumNames) ? enumNames : [];
  if (names.length === 0) return '';
  // No ArgDetails means no field numbers. Stop rather than print row
  // positions (the original bug). Langspecs older than go-algorand v5.0.0
  // have this shape.
  if (!Array.isArray(details) || details.length === 0) {
    throw new Error(
      `${opName}: has ArgEnum but no ArgDetails, so no field numbers ` +
        '(langspecs from go-algorand before v5.0.0 lack ArgDetails; ' +
        'refresh opcodes.json from a newer ref)',
    );
  }
  if (names.length !== details.length) {
    throw new Error(
      `${opName}: ArgDetails has ${details.length} fields but ArgEnum has ${names.length}`,
    );
  }
  const rows = details
    .map((d, i) => {
      if (d?.Name !== names[i]) {
        throw new Error(
          `${opName}: field ${i} is "${d?.Name}" in ArgDetails but "${names[i]}" in ArgEnum`,
        );
      }
      if (!Number.isInteger(d.ByteEncoding)) {
        throw new Error(
          `${opName}: field ${d.Name} has no integer ByteEncoding ` +
            `(got ${JSON.stringify(d.ByteEncoding)})`,
        );
      }
      const type = d.Type || '-';
      return `<tr><td>${d.ByteEncoding}</td><td>${mdxEscape(d.Name)}</td><td>${mdxEscape(type)}</td></tr>`;
    })
    .join('');
  const html = `<table>
  <thead><tr><th>Index</th><th>Name</th><th>Type</th></tr></thead>
  <tbody>${rows}</tbody>
</table>`;
  return new Handlebars.SafeString(html);
});

// For data attributes
Handlebars.registerHelper('csv', arr => {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  return arr.map(v => String(v).replace(/"/g, '&quot;')).join(',');
});

// Heading text safe for MDX (escapes &, <, >, {, })
Handlebars.registerHelper('headingText', (s = '') => {
  const t = String(s);
  const escaped = t
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;');
  return new Handlebars.SafeString(escaped);
});

// Hidden metadata span (straight quotes, escaped attrs)
Handlebars.registerHelper('metaTag', (name, introducedVersion, groups) => {
  const esc = (x = '') =>
    String(x)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  const v = introducedVersion != null ? `v${introducedVersion}` : '';
  const g = Array.isArray(groups) ? groups.join(',') : '';
  return new Handlebars.SafeString(
    `<span class="opcode-meta" data-name="${esc(name)}" data-version="${esc(v)}" data-groups="${esc(g)}" hidden aria-hidden="true"></span>`,
  );
});

// Escape for MDX text (&, <, >, {, }) and return **Markdown** paragraphs (no <p> tags)
Handlebars.registerHelper('mdxParagraphs', (s = '') => {
  const mdxEscape = (str: string) =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;');

  const parts = String(s).split(/\r?\n\r?\n/); // split paragraphs by blank line
  const out = parts
    .map(p => mdxEscape(p).replace(/\r?\n/g, '<br />'))
    .join('\n\n'); // inline breaks
  return new Handlebars.SafeString(out);
});

/* ───────── heading anchor ids ───────── */

// Astro gives `!` and `-` an empty heading id and `b-` the id `b`, so their
// anchor links are broken. These ids are public URLs: do not change them.
const ANCHOR_ID_OVERRIDES: Record<string, string> = {
  '!': 'not',
  '-': '-',
  'b-': 'b-',
};

// Heading id for each opcode, given the names in page order. Every heading
// gets one (src/plugins/rehype-opcode-anchor-ids.mjs applies them): Astro
// skips only headings that already have an id, and skipping some would shift
// its -1, -2... numbering for the rest. So this repeats Astro's rule
// (github-slugger, ASCII only, then one trailing "-" stripped) to keep every
// other id unchanged. Throws on an id that is empty or used twice: add an
// override.
export function anchorIds(names: string[]): string[] {
  const seen = new Map<string, number>();
  const ids = new Set<string>();
  return names.map(name => {
    const base = name
      .toLowerCase()
      .replace(/[^ \-0-9a-z_]/g, '')
      .replace(/ /g, '-');
    let slug = base;
    while (seen.has(slug)) {
      seen.set(base, seen.get(base)! + 1);
      slug = `${base}-${seen.get(base)}`;
    }
    seen.set(slug, 0);
    const id = ANCHOR_ID_OVERRIDES[name] ?? slug.replace(/-$/, '');
    if (!id || ids.has(id) || /[^\x20-\x7e]/.test(name)) {
      throw new Error(
        `${name}: no usable heading id ("${id}"); add one to ANCHOR_ID_OVERRIDES`,
      );
    }
    ids.add(id);
    return id;
  });
}

/* ───────── stack input and output ───────── */

// opcodes.json (go-algorand's langspec_vN.json) gives only the stack *types*.
// For some opcodes upstream describes the stack by its effect, e.g.
// `dig` is "A, [N items] → A, [N items], A" and `err` ends the program. That
// text is only in go-algorand's TEAL_opcodes_vN.md, which update-opcodes.ts
// saves as STACK_SOURCE. go-algorand writes that md line in cmd/opdoc/opdoc.go
// (stackMarkdown): from Arg.Effects / Return.Effects when they are set,
// otherwise from the types. So rebuild the line from the types: where it
// matches the md, show the types; where it differs, show the md's text.
export const STACK_SOURCE = '_TEAL_opcodes.md';

const typeList = (arr: unknown) =>
  Array.isArray(arr) && arr.length
    ? arr.map(v => htmlEscape(v)).join(',')
    : '-';

// Each opcode's "- Stack:" line from TEAL_opcodes_vN.md, keyed by opcode
// name, checked against the opcode names in opcodes.json. Throws when an
// opcode block has no Stack line or more than one, or when the md and the
// JSON list different opcodes (they were fetched from different refs).
export function stackLines(md: string, opNames: string[]): Map<string, string> {
  const lines = new Map<string, string>();
  for (const block of md.split(/^## /m).slice(1)) {
    const name = block.slice(0, block.indexOf('\n')).trim();
    const found = [...block.matchAll(/^- Stack: (.*)$/gm)];
    if (found.length !== 1) {
      throw new Error(
        `${STACK_SOURCE}: "${name}" has ${found.length} "- Stack:" lines, expected 1`,
      );
    }
    if (lines.has(name)) {
      throw new Error(`${STACK_SOURCE}: "${name}" appears twice`);
    }
    lines.set(name, found[0][1]);
  }
  const names = new Set(opNames);
  const notInMd = opNames.filter(n => !lines.has(n));
  const notInJson = [...lines.keys()].filter(n => !names.has(n));
  if (notInMd.length || notInJson.length) {
    throw new Error(
      `${STACK_SOURCE} and opcodes.json list different opcodes ` +
        `(missing from the md: ${notInMd.join(' ') || 'none'}; ` +
        `missing from the JSON: ${notInJson.join(' ') || 'none'}). ` +
        'Re-fetch both files from the same go-algorand ref.',
    );
  }
  return lines;
}

// The md "- Stack:" line go-algorand writes from types alone. A port of
// stackMarkdown in cmd/opdoc/opdoc.go: args are lettered A, B, ... and show
// their type unless it is `any`; with more than one return, returns are
// lettered from X (or so that the last is Z, when there are more than 3) and
// always show their type.
function stackLineFromTypes(args: string[], returns: string[]): string {
  let out = '...';
  args.forEach((t, i) => {
    out +=
      `, ${String.fromCharCode('A'.charCodeAt(0) + i)}` +
      (t === 'any' ? '' : `: ${t}`);
  });
  out += ' &rarr; ...';
  const first =
    returns.length <= 3
      ? 'X'.charCodeAt(0)
      : 'Z'.charCodeAt(0) + 1 - returns.length;
  returns.forEach((t, i) => {
    out +=
      ', ' +
      (returns.length > 1 ? `${String.fromCharCode(first + i)}: ` : '') +
      t;
  });
  return out;
}

// One side of an effect line as the page shows it: upstream's text without
// the leading "..., " (the untouched rest of the stack), `-` when nothing is
// popped or pushed, and *exits* when the program ends. Only the characters
// upstream uses today are allowed. A format change (new markup, or a backtick
// that would close the code span) fails here for a person to look at, instead
// of showing up on the page.
function effectSide(name: string, side: string): string {
  const s = side.replace(/^\.\.\.(, )?/, '');
  if (s === '_exits_') return '*exits*';
  if (!/^[A-Za-z0-9 ,.:[\]]*$/.test(s)) {
    throw new Error(
      `${name}: unexpected text in ${STACK_SOURCE} Stack line: "${side}"`,
    );
  }
  return '`' + (s || '-') + '`';
}

// Stack Input and Stack Output for one opcode, as Markdown (code spans, or
// *exits*). Opcodes without an upstream effect render exactly as before.
export function stackFields(op: OpcodeEntry, mdLine: string) {
  const args = Array.isArray(op.Args) ? (op.Args as string[]) : [];
  const returns = Array.isArray(op.Returns) ? (op.Returns as string[]) : [];
  if (mdLine === stackLineFromTypes(args, returns)) {
    return {
      StackInput: '`' + typeList(args) + '`',
      StackOutput: '`' + typeList(returns) + '`',
    };
  }
  const sides = mdLine.split(' &rarr; ');
  if (sides.length !== 2) {
    throw new Error(
      `${op.Name}: ${STACK_SOURCE} Stack line has no single "&rarr;": "${mdLine}"`,
    );
  }
  return {
    StackInput: effectSide(op.Name, sides[0]),
    StackOutput: effectSide(op.Name, sides[1]),
  };
}

/* ───────── render ───────── */

/**
 * Sort the opcodes into page order and add the fields the template needs
 * beyond opcodes.json: AnchorId, StackInput and StackOutput. Exported so the
 * page tests render exactly what render() writes. Mutates and returns `ops`.
 */
export function prepareOpcodes(ops: OpcodeEntry[], tealOpcodesMd: string) {
  // Sort by UTF-16 code unit, not localeCompare: locale collation is ICU-version
  // dependent, so a CI Node upgrade could silently reorder the entire generated
  // file. A code-unit comparator is stable across environments.
  ops.sort((a, b) => (a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0));
  const names = ops.map(op => op.Name);
  const ids = anchorIds(names);
  const stack = stackLines(tealOpcodesMd, names);
  ops.forEach((op, i) => {
    op.AnchorId = ids[i];
    Object.assign(op, stackFields(op, stack.get(op.Name)!));
  });
  return ops;
}

/**
 * Render `opcodes.mdx` from the committed `opcodes.json` dataset.
 * Exported so `update-opcodes.ts` can regenerate the page in-process after a
 * fetch, and also run standalone (predev/prebuild).
 */
export async function render() {
  const templatePath = resolve('templates/opcodes.md.hbs');
  const dataPath = resolve(
    'src/content/docs/reference/algorand-teal/opcodes.json',
  );
  const stackPath = resolve(
    'src/content/docs/reference/algorand-teal',
    STACK_SOURCE,
  );
  const outPath = 'src/content/docs/reference/algorand-teal/opcodes.mdx';

  const [tplSrc, dataSrc, stackSrc] = await Promise.all([
    readFile(templatePath, 'utf8'),
    readFile(dataPath, 'utf8'),
    readFile(stackPath, 'utf8'),
  ]);

  const template = Handlebars.compile(tplSrc, { noEscape: true });
  const data = JSON.parse(dataSrc) as OpcodeData;

  // Dataset version comes from go-algorand master; LatestReleasedVersion is the
  // highest AVM version in the latest stable release (written by update-opcodes.ts).
  const datasetVersion = data.Version;
  const latestReleasedVersion = data.LatestReleasedVersion ?? datasetVersion;

  const opcodes = prepareOpcodes(data.Ops, stackSrc);

  const page = template({ opcodes, datasetVersion, latestReleasedVersion });

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, page.endsWith('\n') ? page : page + '\n', 'utf8');
  console.log('Wrote', outPath);
}

// Run only when invoked directly (not when imported by update-opcodes.ts).
if (
  process.argv[1] &&
  fileURLToPath(import.meta.url) === resolve(process.argv[1])
) {
  render().catch(err => {
    console.error('[generate-opcode-list] Failed:', err);
    process.exit(1);
  });
}
