/**
 * Preload script that registers the custom SVG loader hook.
 *
 * Usage: npx tsx --import ./scripts/register-svg-loader.mjs scripts/foo.ts
 *
 * Uses the stable `register()` API instead of the deprecated --loader flag.
 */

import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register('./scripts/svg-loader.mjs', pathToFileURL('./'));
