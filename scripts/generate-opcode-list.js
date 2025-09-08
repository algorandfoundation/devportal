import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import Handlebars from 'handlebars';

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

// 0x?? bytecode
Handlebars.registerHelper('bytecode', (n) => `0x${Number(n ?? 0).toString(16).padStart(2, '0')}`);

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
  const mdxEscape = (str) =>
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

/* ───────── main ───────── */

async function main() {
  const templatePath = resolve('templates/opcodes.md.hbs');
  const dataPath = resolve('src/content/docs/reference/algorand-teal/opcodes.json');
  const outPath = 'src/content/docs/reference/algorand-teal/opcodes.mdx';

  const [tplSrc, dataSrc] = await Promise.all([readFile(templatePath, 'utf8'), readFile(dataPath, 'utf8')]);

  const template = Handlebars.compile(tplSrc, { noEscape: true });
  const opcodes = JSON.parse(dataSrc);

  const page = template({ opcodes });

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, page.endsWith('\n') ? page : page + '\n', 'utf8');
  console.log('Wrote', outPath);
}

main().catch((err) => {
  console.error('[generate-opcode-list] Failed:', err);
  process.exit(1);
});