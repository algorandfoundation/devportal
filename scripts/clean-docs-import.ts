#!/usr/bin/env tsx

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { promises as fs } from 'fs';
import type { ImportOptions } from '@larkiny/astro-github-loader';
import * as exportedConfigs from '../imports/configs/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, '..');

type RepoConfig = ImportOptions & { repo: string };

const configs: RepoConfig[] = Object.values(exportedConfigs) as RepoConfig[];

function parseRepoArg(): string {
  const [, , ...args] = process.argv;
  const repoFlagIndex = args.findIndex(arg => arg === '--repo');

  if (repoFlagIndex !== -1) {
    const value = args[repoFlagIndex + 1];
    if (!value) {
      throw new Error('Missing value for --repo option.');
    }
    return value;
  }

  const repoFromFlag = args.find(arg => arg.startsWith('--repo='));
  if (repoFromFlag) {
    return repoFromFlag.split('=')[1];
  }

  if (args[0]) {
    return args[0];
  }

  throw new Error('Please provide a repository via `clean-docs-import.ts --repo <owner/repo>`.');
}

function resolvePath(relativePath: string): string {
  return resolve(PROJECT_ROOT, relativePath);
}

async function clearDirectory(relativePath: string) {
  const targetPath = resolvePath(relativePath);
  await fs.rm(targetPath, { recursive: true, force: true });
  await fs.mkdir(targetPath, { recursive: true });
  console.log(`🧹 Cleared ${relativePath}`);
}

async function run() {
  try {
    const repo = parseRepoArg();
    const targetConfig = configs.find(
      config => `${config.owner}/${config.repo}` === repo,
    );

    if (!targetConfig) {
      console.error(`❌ No import configuration found for repo "${repo}".`);
      process.exit(1);
    }

    const pathsToClear = new Set<string>();

    if (targetConfig.assetsPath) {
      pathsToClear.add(targetConfig.assetsPath);
    }

    if (Array.isArray(targetConfig.includes)) {
      for (const include of targetConfig.includes) {
        if (include?.basePath) {
          pathsToClear.add(include.basePath);
        }
      }
    }

    if (pathsToClear.size === 0) {
      console.warn(`⚠️  Configuration for "${repo}" does not define any paths to clean.`);
      return;
    }

    for (const path of pathsToClear) {
      await clearDirectory(path);
    }

    console.log(`✅ Completed cleanup for ${repo}`);
  } catch (error) {
    console.error(`❌ ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}

void run();
