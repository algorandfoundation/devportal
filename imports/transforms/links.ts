import type { LinkMapping } from '@larkiny/astro-github-loader';

/**
 * Helper function to create common link mappings for this project
 */
export function generateCommonLinkMappings(): LinkMapping[] {
  return [
    // Strip /index.md for Starlight routing (global - applies to all links)
    {
      pattern: /\/index\.md(#.*)?$/,
      replacement: (match: string, anchor: string) => {
        // Remove /index.md but preserve anchor
        return match.replace('/index.md', '');
      },
      global: true,
    },

    // Handle README.md -> overview (non-global - only unresolved links)
    {
      pattern: /\/README\.md(#.*)?$/,
      replacement: (match: string, anchor: string) => {
        return match.replace('/README.md', '/overview');
      },
      global: false,
    },
  ];
}

/**
 * Helper function to create Starlight-specific link mappings for this project
 */
export function generateStarlightLinkMappings(): LinkMapping[] {
  return [
    // Strip /index.md and /index (Starlight treats these specially)
    // Example: 'modules/index.md#some-anchor' -> 'modules/#some-anchor'
    {
      pattern: /\/index(\.md)?$/,
      replacement: '/',
      global: true,
    },
  ];
}

/**
 * Convert a path to Starlight-compatible URL format
 * @param path - The path to convert
 * @returns Starlight-compatible URL
 */
function pathToStarlightUrl(path: string): string {
  // Remove .md/.mdx extensions
  let url = path.replace(/\.(md|mdx)$/i, '');

  // Handle index files - they should resolve to parent directory
  if (url.endsWith('/index')) {
    url = url.replace('/index', '/');
  } else if (url === 'index') {
    url = '/';
  }

  // Ensure leading slash for absolute paths
  if (url && !url.startsWith('/')) {
    url = '/' + url;
  }

  // Add trailing slash for non-empty paths that don't already have one
  if (url && url !== '/' && !url.endsWith('/')) {
    url = url + '/';
  }

  return url || '/';
}

/**
 * Generates linkMappings from pathMappings to handle restructured links
 * @param pathMappings - The pathMappings object from import config
 * @param options - Options for cross-section linking
 * @returns Array of LinkMapping objects
 */
export function generateLinkMappings(
  pathMappings: Record<string, string>,
  options?: {
    /** Absolute path to link to for cross-section references (e.g., '/reference/algokit-utils-ts/api') */
    crossSectionPath?: string;
    /** Whether all mappings should be global (default: true) */
    global?: boolean;
  },
): LinkMapping[] {
  const { crossSectionPath, global = true } = options || {};

  return Object.entries(pathMappings).map(([sourcePath, targetPath]) => {
    if (sourcePath.endsWith('/')) {
      // Folder mapping - use regex with capture group
      const sourcePattern = sourcePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      return {
        pattern: new RegExp(`^${sourcePattern}(.+)$`),
        replacement: (match: string, relativePath: string) => {
          let finalPath: string;
          if (crossSectionPath) {
            // Cross-section reference with absolute path
            finalPath =
              targetPath === ''
                ? `${crossSectionPath}/${relativePath}`
                : `${crossSectionPath}/${targetPath}${relativePath}`;
          } else {
            // Same section, relative path
            finalPath =
              targetPath === '' ? relativePath : `${targetPath}${relativePath}`;
          }

          // Convert to Starlight-compatible URL
          return pathToStarlightUrl(finalPath);
        },
        global,
      };
    } else {
      // File mapping - exact string match
      const sourcePattern = sourcePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      return {
        pattern: new RegExp(`^${sourcePattern}$`),
        replacement: () => {
          const finalPath = crossSectionPath
            ? `${crossSectionPath}/${targetPath}`
            : targetPath;

          // Convert to Starlight-compatible URL
          return pathToStarlightUrl(finalPath);
        },
        global,
      };
    }
  });
}
