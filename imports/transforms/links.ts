import type { TransformFunction } from '@larkiny/astro-github-loader';

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
}

/**
 * Creates a transform function that updates internal markdown links
 * to work with the devportal site structure
 */
export function createLinkTransform(options: LinkTransformOptions): TransformFunction {
  return (content: string, context): string => {
    const { baseUrl, preserveExtensions = false, pathMapping = {}, pathTransform } = options;
    
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
      
      // Handle relative paths
      let transformedPath = path;
      
      // Check for custom path mapping first
      if (pathMapping[path]) {
        transformedPath = pathMapping[path];
      } else if (pathTransform) {
        // Use custom transform function
        transformedPath = pathTransform(path, { 
          from: context.path, 
          to: context.id 
        });
      } else {
        // Default transformation logic
        
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
        
        // Remove file extension unless preserveExtensions is true
        if (!preserveExtensions && /\.(md|mdx)/i.test(transformedPath)) {
          transformedPath = removeMarkdownExtension(transformedPath);
        }
        
        // Ensure the path starts with baseUrl
        if (!transformedPath.startsWith('/')) {
          transformedPath = baseUrl.replace(/\/$/, '') + '/' + transformedPath;
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
 * Utility functions for handling markdown links in custom path transforms
 */
export { extractAnchor, removeMarkdownExtension };