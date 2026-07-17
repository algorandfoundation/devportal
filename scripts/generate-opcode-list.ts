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
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Render arrays as comma-separated (used for Args/Returns simple cell rendering)
Handlebars.registerHelper('valueList', (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return '-';
  const html = arr.map((v) => `${htmlEscape(v)}`).join(',');
  return new Handlebars.SafeString(html);
});

// 0x?? bytecode. Some opcodes (v13+) are multi-byte and arrive as an array,
// e.g. [212, 1] -> `0xd4 0x01`.
Handlebars.registerHelper('bytecode', (n) => {
  const toHex = (b: number) => `0x${Number(b).toString(16).padStart(2, '0')}`;
  if (Array.isArray(n)) return n.map(toHex).join(' ');
  return toHex(n ?? 0);
});

// Groups as backticked, comma-separated list
Handlebars.registerHelper('groupList', (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return '-';
  const escaped = arr.map((v) => '`' + String(v).replace(/`/g, '\\`') + '`');
  return escaped.join(', ');
});

// Immediate parameters table (Name, Encoding, Comment)
Handlebars.registerHelper('immediateTable', (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  const rows = arr
    .map((it) => {
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

// Field index/name/type table (Index, Name, Type columns)
Handlebars.registerHelper('fieldTable', (names, types) => {
  if (!Array.isArray(names) || names.length === 0) return '';
  const rows = names
    .map((name, idx) => {
      const type = Array.isArray(types) && idx < types.length ? types[idx] : '-';
      return `<tr><td>${idx}</td><td>${htmlEscape(name ?? '-')}</td><td>${htmlEscape(type ?? '-')}</td></tr>`;
    })
    .join('');
  const html = `<table>
  <thead><tr><th>Index</th><th>Name</th><th>Type</th></tr></thead>
  <tbody>${rows}</tbody>
</table>`;
  return new Handlebars.SafeString(html);
});

// For data attributes
Handlebars.registerHelper('csv', (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  return arr.map((v) => String(v).replace(/"/g, '&quot;')).join(',');
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
    String(x).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const v = introducedVersion != null ? `v${introducedVersion}` : '';
  const g = Array.isArray(groups) ? groups.join(',') : '';
  return new Handlebars.SafeString(
    `<span class="opcode-meta" data-name="${esc(name)}" data-version="${esc(v)}" data-groups="${esc(g)}" hidden aria-hidden="true"></span>`
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
  const out = parts.map((p) => mdxEscape(p).replace(/\r?\n/g, '<br />')).join('\n\n'); // inline breaks
  return new Handlebars.SafeString(out);
});

/* ───────── render ───────── */

/**
 * Render `opcodes.mdx` from the committed `opcodes.json` dataset.
 * Exported so `update-opcodes.ts` can regenerate the page in-process after a
 * fetch, and also run standalone (predev/prebuild).
 */
export async function render() {
  const templatePath = resolve('templates/opcodes.md.hbs');
  const dataPath = resolve('src/content/docs/reference/algorand-teal/opcodes.json');
  const outPath = 'src/content/docs/reference/algorand-teal/opcodes.mdx';

  const [tplSrc, dataSrc] = await Promise.all([readFile(templatePath, 'utf8'), readFile(dataPath, 'utf8')]);

  const template = Handlebars.compile(tplSrc, { noEscape: true });
  const data = JSON.parse(dataSrc) as OpcodeData;

  // Dataset version comes from go-algorand master; LatestReleasedVersion is the
  // highest AVM version in the latest stable release (written by update-opcodes.ts).
  const datasetVersion = data.Version;
  const latestReleasedVersion = data.LatestReleasedVersion ?? datasetVersion;

  const opcodes = data.Ops;
  opcodes.sort((a, b) => a.Name.localeCompare(b.Name));

  const page = template({ opcodes, datasetVersion, latestReleasedVersion });

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, page.endsWith('\n') ? page : page + '\n', 'utf8');
  console.log('Wrote', outPath);
}

// Run only when invoked directly (not when imported by update-opcodes.ts).
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  render().catch((err) => {
    console.error('[generate-opcode-list] Failed:', err);
    process.exit(1);
  });
}
