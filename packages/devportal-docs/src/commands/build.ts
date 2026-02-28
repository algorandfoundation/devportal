import { run as normalizeLinks } from './normalize-links.js';
import { run as buildSidebar } from './build-sidebar.js';
import { run as buildManifest } from './build-manifest.js';

export async function run(args: string[], docsDir: string): Promise<void> {
  console.log('=== devportal-docs build ===\n');

  console.log('[1/3] Normalizing links...');
  normalizeLinks(args, docsDir);

  console.log('\n[2/3] Building sidebar...');
  await buildSidebar(args, docsDir);

  console.log('\n[3/3] Building manifest...');
  buildManifest(args, docsDir);

  console.log('\n=== Build complete ===');
}
