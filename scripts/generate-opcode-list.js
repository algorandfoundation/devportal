/* eslint-env node */
/* eslint no-console: "off" */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import Handlebars from 'handlebars';

function htmlEscape(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

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
  const templatePath = resolve('templates/opcodes.md.hbs');
  const dataPath = resolve(
    'src/content/docs/reference/algorand-teal/opcodes.json',
  );
  const outPath = 'src/content/docs/reference/algorand-teal/opcodes.md';

  const [tplSrc, dataSrc] = await Promise.all([
    readFile(templatePath, 'utf8'),
    readFile(dataPath, 'utf8'),
  ]);

  const template = Handlebars.compile(tplSrc, { noEscape: true });

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
