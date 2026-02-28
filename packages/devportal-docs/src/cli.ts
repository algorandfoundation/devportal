#!/usr/bin/env node

import { resolve } from 'node:path';

const COMMANDS = ['init', 'build', 'normalize-links', 'build-sidebar', 'build-manifest'] as const;
type Command = (typeof COMMANDS)[number] | 'help';

export interface ParsedCommand {
  command: Command;
  args: string[];
}

export function parseCommand(argv: string[]): ParsedCommand {
  const [cmd, ...args] = argv;

  if (!cmd || !COMMANDS.includes(cmd as (typeof COMMANDS)[number])) {
    return { command: 'help', args: [] };
  }

  return { command: cmd as Command, args };
}

function printHelp(): void {
  console.log(`
devportal-docs — CLI for publishing library docs to the Algorand Developer Portal

Commands:
  init              Scaffold and validate devportal integration
  build             Run all build steps (normalize-links → build-sidebar → build-manifest)
  normalize-links   Normalize relative markdown links to absolute paths
  build-sidebar     Serialize sidebar.config.ts → sidebar.json
  build-manifest    Write manifest.json with site base metadata

Options:
  --base <path>     Override auto-detected site base
  --dry-run         (init only) Show what would change without modifying files
`.trim());
}

async function main(): Promise<void> {
  const { command, args } = parseCommand(process.argv.slice(2));

  if (command === 'help') {
    printHelp();
    return;
  }

  const docsDir = resolve('.');

  switch (command) {
    case 'init': {
      const { run } = await import('./commands/init.js');
      run(args, docsDir);
      break;
    }
    case 'build': {
      const { run } = await import('./commands/build.js');
      await run(args, docsDir);
      break;
    }
    case 'normalize-links': {
      const { run } = await import('./commands/normalize-links.js');
      run(args, docsDir);
      break;
    }
    case 'build-sidebar': {
      const { run } = await import('./commands/build-sidebar.js');
      await run(args, docsDir);
      break;
    }
    case 'build-manifest': {
      const { run } = await import('./commands/build-manifest.js');
      run(args, docsDir);
      break;
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
