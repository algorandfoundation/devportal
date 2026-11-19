#!/usr/bin/env node

/**
 * Vendors the upstream algod/indexer/kmd OpenAPI specs into `openapi/`, rewriting
 * `info.title` and `info.description` on the way through.
 *
 * `starlight-openapi` renders each API's landing page (`/reference/rest-api/<api>`)
 * from `info` alone, so whatever upstream puts in `info.description` is the entire
 * page. Upstream ships a single sentence ("API endpoint for algod operations."),
 * which left those three pages looking empty. Pointing the plugin at a local copy
 * is the only way to put real content there — the plugin takes a path or URL, not
 * a parsed document.
 *
 * Output is committed, like `opcodes.json`. Run this by hand when upstream changes.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

interface Spec {
  info: { title: string; description?: string; version: string };
  [key: string]: unknown;
}

interface ApiConfig {
  name: string;
  url: string;
  title: string;
  description: string;
}

const OUT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../openapi');

// Shared tail: every landing page points readers at the sidebar and the overview
// page, which is where the spec downloads and Scalar/Swagger/Postman links live.
const footer = (api: string, nav: string) => `
Every endpoint is listed in the sidebar under **${api}** → ${nav}, one page per
operation.

Spec downloads (OAS2 and OAS3) and ready-to-run Scalar, Swagger and Postman
collections are on the [REST API overview](/reference/rest-api/overview).`;

// Sources are unchanged from the pre-vendoring config. kmd stays pinned to a
// commit because go-algorand master no longer tracks a stable kmd swagger file.
const APIS: ApiConfig[] = [
  {
    name: 'algod',
    url: 'https://raw.githubusercontent.com/algorand/go-algorand/refs/heads/master/daemon/algod/api/algod.oas3.yml',
    title: 'Algod REST API',
    description: `\`algod\` is the Algorand node daemon. Its REST API is how you submit and
simulate transactions, read accounts, applications, assets and boxes, fetch
blocks and ledger state, and check node and network status.
${footer('algod', 'the tag groups')}`,
  },
  {
    name: 'indexer',
    url: 'https://raw.githubusercontent.com/algorand/indexer/refs/heads/main/api/indexer.oas3.yml',
    title: 'Indexer REST API',
    description: `\`algorand-indexer\` serves searchable historical ledger data — accounts,
assets, applications, blocks and transactions — including the records an
\`algod\` node no longer holds locally.

The daemon serves its API from the host:port given by \`--server\`, default
port \`8980\`.
${footer('indexer', 'the tag groups')}`,
  },
  {
    name: 'kmd',
    url: 'https://raw.githubusercontent.com/algorand/go-algorand/ad578576ab5f5bfe58a590164903617ecef379e4/daemon/kmd/api/swagger.json',
    title: 'KMD REST API',
    description: `\`kmd\` is the Algorand key management daemon. It keeps wallets and private
keys in a separate process from \`algod\` and signs transactions on request, so
keys never pass through the node itself.
${footer('kmd', '**Operations**')}`,
  },
];

async function generate() {
  await mkdir(OUT_DIR, { recursive: true });

  for (const { name, url, title, description } of APIS) {
    console.log(`Fetching ${name} spec from ${url}`);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${name} spec: ${response.status} ${response.statusText}`,
      );
    }

    // algod.oas3.yml and indexer.oas3.yml are JSON despite the extension, and kmd
    // is Swagger 2.0 JSON. YAML is a JSON superset, so one loader covers all three
    // and keeps working if upstream ever switches to real YAML.
    const spec = yaml.load(await response.text()) as Spec;

    spec.info.title = title;
    spec.info.description = description;

    const outPath = resolve(OUT_DIR, `${name}.json`);
    await writeFile(outPath, JSON.stringify(spec, null, 2) + '\n', 'utf8');
    console.log('Wrote', outPath);
  }
}

generate().catch(err => {
  console.error('[generate-openapi-schemas] Failed:', err);
  process.exit(1);
});
