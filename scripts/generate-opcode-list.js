// scripts/generate-docs.js
// Generate a Markdown page from a Handlebars template so Starlight's TOC sees real headings.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import Handlebars from 'handlebars';

/* ---------------- Helpers ---------------- */

// Escape minimal HTML (so < & > in descriptions don't break <p> tags)
function htmlEscape(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
// Render stack inputs/outputs as <div> items inside a single table cell.
// Returns "-" when empty.
Handlebars.registerHelper('cellList', arr => {
  if (!Array.isArray(arr) || arr.length === 0) return '-';
  const html = arr.map(v => `${htmlEscape(v)}`).join(',');
  return new Handlebars.SafeString(html);
});
// Format opcode byte to 0x??
Handlebars.registerHelper(
  'bytecode',
  n =>
    `0x${Number(n ?? 0)
      .toString(16)
      .padStart(2, '0')}`,
);
// Join array as comma-separated text (for "Groups")
Handlebars.registerHelper('commaList', arr => {
  if (!Array.isArray(arr) || arr.length === 0) return '-';
  return arr.join(', ');
});
// Safely place plain text inside <p>…</p>
Handlebars.registerHelper(
  'ptext',
  s => new Handlebars.SafeString(`${htmlEscape(s ?? '')}`),
);

/* ---------------- Main ---------------- */

async function main() {
  // Adjust these paths if your project layout differs.
  const templatePath = resolve('templates/opcodes.md.hbs');
  const dataPath = resolve(
    'src/content/docs/reference/algorand-teal/opcodes.json',
  );
  const outPath = 'src/content/docs/reference/algorand-teal/opcodes.md'; // final page consumed by Starlight

  const [tplSrc, dataSrc] = await Promise.all([
    readFile(templatePath, 'utf8'),
    readFile(dataPath, 'utf8'),
  ]);

  const template = Handlebars.compile(tplSrc, { noEscape: true });

  // Expecting: [{ name, Opcode, Args, Returns, Size, IntroducedVersion, DocCost, Doc, DocExtra, Groups }, ...]
  const opcodes = JSON.parse(dataSrc);

  const page = template({
    opcodes,
  });

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, page.endsWith('\n') ? page : page + '\n', 'utf8');
  console.log('Wrote', outPath);
}

main().catch(err => {
  console.error('[generate-opcode-list] Failed:', err);
  process.exit(1);
});
