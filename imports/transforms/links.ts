import type { TransformFunction } from '@larkiny/astro-github-loader';
import path from 'node:path';
import { slug } from 'github-slugger';

/**
 * Utility function to extract anchor fragment and clean path
 * Returns both the path without anchor and the anchor fragment
 */
function extractAnchor(path: string): { path: string; anchor: string } {
  const anchorMatch = path.match(/#.*$/);
  const anchor = anchorMatch ? anchorMatch[0] : '';
  const cleanPath = path.replace(/#.*$/, '');
  return { path: cleanPath, anchor };
}

/**
 * Utility function to remove markdown extensions while preserving anchors
 */
function removeMarkdownExtension(path: string): string {
  const { path: cleanPath, anchor } = extractAnchor(path);
  return cleanPath.replace(/\.(md|mdx)$/i, '') + anchor;
}

/**
 * Configuration options for link transformation
 */
export interface LinkTransformOptions {
  /**
   * Base path prefix for transformed links (e.g., '/docs/arc-standards/')
   */
  baseUrl: string;

  /**
   * Whether to preserve file extensions in links
   * @default false
   */
  preserveExtensions?: boolean;

  /**
   * Custom mapping for edge cases where links need to point to external locations
   * Key: original file path, Value: final URL path
   *
   * Note: For most file renaming needs, use the fileRenames feature in ImportOptions instead.
   * This should only be used for links that need to point outside the imported content.
   */
  pathMapping?: Record<string, string>;

  /**
   * Function to transform file paths to URL paths
   * If not provided, will use default transformation
   */
  pathTransform?: (path: string, context: { from: string; to: string }) => string;

  /**
   * Path prefix(es) to automatically remove from links before transformation
   * Useful for stripping repo-specific prefixes like 'docs/code/' from internal links
   * Can be a single string or array of strings. If array, prefixes are checked in order.
   */
  pathReplace?: string | string[];

}

/**
 * Creates a transform function that updates internal markdown links
 * to work with the devportal site structure
 */
export function createLinkTransform(options: LinkTransformOptions): TransformFunction {
  return (content: string, context): string => {
    const { baseUrl, preserveExtensions = false, pathMapping = {}, pathTransform, pathReplace } = options;
    const assetsBaseUrl = context.options.assetsBaseUrl;
    
    // Regex to match markdown links: [text](path) and [text](path "title")
    const markdownLinkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
    
    return content.replace(markdownLinkRegex, (match, linkText, linkPath) => {
      // Skip external links (http/https/mailto/etc)
      if (/^https?:\/\/|^mailto:|^tel:|^#/.test(linkPath)) {
        return match;
      }
      
      // Extract path and optional title
      const parts = linkPath.split('"');
      let path = parts[0].trim();
      const title = parts[1] ? `"${parts[1].trim()}"` : '';
      
      // Skip anchor-only links
      if (path.startsWith('#')) {
        return match;
      }

      // Skip asset URLs (already processed by astro-github-loader)
      if (assetsBaseUrl && path.startsWith(assetsBaseUrl)) {
        return match;
      }

      // Handle relative paths first
      let transformedPath = path;

      // Extract anchor for path mapping check
      const { path: cleanPathForMapping, anchor: pathAnchor } = extractAnchor(path);

      // Check for custom path mapping first (before any other transformations)
      if (pathMapping[cleanPathForMapping]) {
        transformedPath = pathMapping[cleanPathForMapping] + pathAnchor;
      } else {
        // Apply common path preprocessing (before pathTransform or default logic)

        // Remove leading './' if present
        if (transformedPath.startsWith('./')) {
          transformedPath = transformedPath.slice(2);
        }

        // Handle '../' relative paths by resolving them
        if (transformedPath.includes('../')) {
          const currentDir = context.path.split('/').slice(0, -1);
          const pathParts = transformedPath.split('/');

          const resolvedParts = [...currentDir];
          for (const part of pathParts) {
            if (part === '..') {
              resolvedParts.pop();
            } else if (part !== '.' && part !== '') {
              resolvedParts.push(part);
            }
          }

          transformedPath = resolvedParts.join('/');
        }

        // Strip pathReplace prefix(es) if specified (after relative path resolution)
        if (pathReplace) {
          const prefixes = Array.isArray(pathReplace) ? pathReplace : [pathReplace];
          for (const prefix of prefixes) {
            if (transformedPath.startsWith(prefix)) {
              transformedPath = transformedPath.slice(prefix.length);
              break; // Only remove the first matching prefix
            }
          }
        }

        // Now apply custom pathTransform or default logic
        if (pathTransform) {
          // Clean the context.from path by removing pathReplace prefixes for pathTransform
          let cleanedFromPath = context.path;
          if (pathReplace) {
            const prefixes = Array.isArray(pathReplace) ? pathReplace : [pathReplace];
            for (const prefix of prefixes) {
              if (cleanedFromPath.startsWith(prefix)) {
                cleanedFromPath = cleanedFromPath.slice(prefix.length);
                break; // Only remove the first matching prefix
              }
            }
          }

          // Use custom transform function (receives pre-processed path and cleaned context)
          transformedPath = pathTransform(transformedPath, {
            from: cleanedFromPath,
            to: context.id
          });
        } else {
          // Default transformation logic

          // Remove file extension unless preserveExtensions is true
          if (!preserveExtensions && /\.(md|mdx)/i.test(transformedPath)) {
            transformedPath = removeMarkdownExtension(transformedPath);
          }

          // Ensure the path starts with baseUrl
          if (!transformedPath.startsWith('/')) {
            transformedPath = baseUrl.replace(/\/$/, '') + '/' + transformedPath;
          }
        }
      }
      
      // Reconstruct the link
      const titlePart = title ? ` ${title}` : '';
      return `[${linkText}](${transformedPath}${titlePart})`;
    });
  };
}

/**
 * Creates a simple link transform that prefixes all internal links with a base URL
 */
export function createSimpleLinkTransform(baseUrl: string): TransformFunction {
  return createLinkTransform({ baseUrl });
}

/**
 * Creates a link transform with custom path mapping
 */
export function createMappedLinkTransform(
  baseUrl: string, 
  pathMapping: Record<string, string>
): TransformFunction {
  return createLinkTransform({ baseUrl, pathMapping });
}

/**
 * Transforms TypeDoc-style URLs into Starlight-compatible URLs using the same logic
 * as starlight-typedoc's getRelativeURL function
 *
 * @param url - Original TypeDoc URL (e.g., "types/app-manager/classes/AppManager.md")
 * @param baseUrl - Base URL for the docs (e.g., "/reference/algokit-utils-ts/api/")
 * @param pageUrl - Current page URL (optional, for relative path calculation)
 * @returns Transformed Starlight-compatible URL
 */
export function getStarlightCompatibleURL(url: string, baseUrl: string, pageUrl?: string): string {
  const externalLinkRegex = /^(http|ftp)s?:\/\//;

  // Skip external links
  if (externalLinkRegex.test(url)) {
    return url;
  }

  const currentDirname = path.dirname(pageUrl ?? '');
  const urlDirname = path.dirname(url);

  let relativeUrl;
  if (urlDirname === '.' && !url.includes('/')) {
    // This is a filename in the same directory
    relativeUrl = path.posix.join(currentDirname, url);
  } else if (currentDirname === urlDirname) {
    relativeUrl = url;
  } else {
    relativeUrl = path.posix.join(currentDirname, path.posix.relative(currentDirname, url));
  }

  const filePath = path.parse(relativeUrl);
  const [, anchor] = filePath.base.split('#');

  // Transform directory segments using github-slugger
  const segments = filePath.dir
    .split(/[/\\]/)
    .map((segment) => slug(segment))
    .filter((segment) => segment !== '');

  // Build the final URL
  let constructedUrl = typeof baseUrl === 'string' ? baseUrl : '';
  constructedUrl += segments.length > 0 ? `${segments.join('/')}/` : '';

  // Transform filename using github-slugger
  const fileNameSlug = slug(filePath.name);
  constructedUrl += fileNameSlug || filePath.name;
  constructedUrl += '/'; // Always add trailing slash for Starlight
  constructedUrl += anchor && anchor.length > 0 ? `#${anchor}` : '';

  return constructedUrl;
}

/**
 * Creates a path transform function that uses Starlight-compatible URL transformation
 * for TypeDoc-generated documentation, but handles same-page anchor links correctly
 *
 * @param baseUrl - Base URL for the documentation (e.g., "/reference/algokit-utils-ts/api/")
 * @param pathReplace - Optional path prefix(es) to remove (e.g., "docs/code/" or ["docs/capabilities/", "docs/"])
 * @returns Function that can be used as pathTransform in createLinkTransform
 */
export function createStarlightPathTransform(baseUrl: string, pathReplace?: string | string[]) {
  return (path: string, context: { from: string; to: string }): string => {
    // Handle same-page anchor links only (links with # that reference the same file)
    if (path.includes('#') && !path.includes('/')) {
      const [filename, anchor] = path.split('#');

      // Get the current file name without extension
      const currentFilename = context.from.split('/').pop()?.replace('.md', '');
      const linkFilename = filename.replace('.md', '');

      if (currentFilename === linkFilename && anchor) {
        // This is a same-page anchor link - just return the anchor
        return `#${anchor}`;
      }
    }

    // Create a cleaned context.from that has pathReplace stripped for consistent processing
    let cleanedFromPath = context.from;
    if (pathReplace) {
      const prefixes = Array.isArray(pathReplace) ? pathReplace : [pathReplace];
      for (const prefix of prefixes) {
        if (cleanedFromPath.startsWith(prefix)) {
          cleanedFromPath = cleanedFromPath.slice(prefix.length);
          break; // Only remove the first matching prefix
        }
      }
    }

    // For all other links (including same-file references without anchors),
    // use the full Starlight transformation with the cleaned context
    return getStarlightCompatibleURL(path, baseUrl, cleanedFromPath);
  };
}

/**
 * Configuration for path transformation with prefix stripping
 */
export interface PathTransformConfig {
  /** The prefix to match and strip from the path */
  prefix: string;
  /** The base URL to use for the transformation */
  baseUrl: string;
  /** Whether to use Starlight-compatible URL transformation (default: true) */
  useStarlightTransform?: boolean;
  /** Whether to remove markdown extensions from the transformed path */
  removeMarkdownExt?: boolean;
  /** Override context.from for Starlight transformation */
  contextFrom?: string;
  /** Custom transform function that takes full control of URL generation */
  customTransform?: (pathWithAnchor: string, context: { from: string; to: string }) => string;
}

/**
 * Creates a reusable path transformer that handles multiple prefix-stripping patterns
 * Eliminates repetitive "if path starts with A, strip A, return transformed URL" logic
 *
 * @param configs Array of transformation configurations to try in order
 * @returns Function that transforms a path or returns null if no config matches
 */
export function createPathTransformer(configs: PathTransformConfig[]) {
  return (cleanPath: string, anchor: string, context: { from: string; to: string }): string | null => {
    for (const config of configs) {
      if (cleanPath.startsWith(config.prefix)) {
        // If customTransform is provided, use it and return immediately
        if (config.customTransform) {
          return config.customTransform(cleanPath + anchor, context);
        }

        const transformedPath = cleanPath.replace(config.prefix, '');

        if (config.useStarlightTransform !== false) {
          // getStarlightCompatibleURL handles anchor processing internally,
          // so we pass the transformed path with anchor and don't add it again
          return getStarlightCompatibleURL(
            transformedPath + anchor,
            config.baseUrl,
            config.contextFrom || context.from,
          );
        } else {
          // Simple concatenation without Starlight transformation
          const finalPath = config.removeMarkdownExt
            ? removeMarkdownExtension(transformedPath)
            : transformedPath;
          return `${config.baseUrl}${finalPath}${anchor}`;
        }
      }
    }
    return null; // No matching config found
  };
}

/**
 * Utility functions for handling markdown links in custom path transforms
 */
export { extractAnchor, removeMarkdownExtension };