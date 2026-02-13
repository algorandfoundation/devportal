/**
 * Barrel file for all import configurations.
 *
 * Exports two arrays:
 * - REMOTE_CONTENT: Flat list of ImportOptions for the content loader
 * - LIBRARY_CONFIGS: Full LibraryImportConfig objects for the UI registry
 */

import type { ImportOptions } from '@larkiny/astro-github-loader';
import type { LibraryImportConfig } from '../types';

// Per-library configs
import { config as algokitUtils } from './algokit-utils/algokit-utils.import.js';
import { config as algokitCli } from './algokit-cli/algokit-cli.import.js';
import { config as algorandPython } from './algorand-python/algorand-python.import.js';
import { config as algorandTypescript } from './algorand-typescript/algorand-typescript.import.js';
import { config as algokitSubscriber } from './algokit-subscriber/algokit-subscriber.import.js';
import { config as nodekit } from './nodekit/nodekit.import.js';

// Standalone imports (not libraries)
import { arcStandardsConfig } from './arc-standards.js';

/** Full library configs for the UI registry (navigation, pickers, cards). */
export const LIBRARY_CONFIGS: LibraryImportConfig[] = [
  algokitUtils,
  algokitCli,
  algorandPython,
  algorandTypescript,
  algokitSubscriber,
  nodekit,
];

/** Flat list of all import configs for the content loader. */
export const REMOTE_CONTENT: ImportOptions[] = [
  ...algokitUtils.variants,
  ...algokitCli.variants,
  ...algorandPython.variants,
  ...algorandTypescript.variants,
  ...algokitSubscriber.variants,
  ...nodekit.variants,
  arcStandardsConfig,
];
