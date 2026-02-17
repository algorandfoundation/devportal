/**
 * Custom Node.js loader hook for .svg file imports.
 *
 * Astro/Vite supports `import logo from './logo.svg?raw'` but tsx/Node
 * does not. This loader intercepts .svg imports and returns an empty
 * string export so that scripts can import modules that transitively
 * reference SVG files without failing.
 *
 * Usage: npx tsx --import ./scripts/register-svg-loader.mjs scripts/foo.ts
 */

/** @param {string} url */
function isSvg(url) {
  return url.endsWith('.svg') || url.includes('.svg?');
}

/**
 * @param {string} url
 * @param {{ format?: string }} context
 * @param {Function} nextLoad
 */
export async function load(url, context, nextLoad) {
  if (isSvg(url)) {
    return {
      format: 'module',
      source: 'export default "";',
      shortCircuit: true,
    };
  }
  return nextLoad(url, context);
}

/**
 * @param {string} specifier
 * @param {{ parentURL?: string }} context
 * @param {Function} nextResolve
 */
export async function resolve(specifier, context, nextResolve) {
  // Handle ?raw suffix on .svg imports
  if (specifier.endsWith('.svg?raw')) {
    const cleanSpecifier = specifier.replace('?raw', '');
    const resolved = await nextResolve(cleanSpecifier, context);
    return { ...resolved, shortCircuit: true };
  }
  return nextResolve(specifier, context);
}
