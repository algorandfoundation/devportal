/**
 * Relative Links Transformer for Starlight/Astro Documentation
 *
 * Transforms relative links in Markdown/MDX files to absolute or resolved paths.
 * Supports both absolute URLs (http/https) and relative base paths for Starlight/Astro projects.
 *
 * For relative base paths:
 * - Resolves relative links using proper path resolution
 * - Strips .md/.mdx extensions for Starlight/Astro compatibility
 *
 * Example:
 * - Base path: "/algokit/algokit-cli"
 * - Relative link: "../overview.md" → "/algokit/overview"
 * - Relative link: "./task/guide.md" → "/algokit/algokit-cli/task/guide"
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { URL } from 'url';

export interface TransformOptions {
  basePath: string;
  folderPath: string;
  verbose?: boolean;
}

export interface TransformResult {
  filePath: string;
  transformedLinks: number;
  errors: string[];
}

export interface TransformSummary {
  totalFiles: number;
  processedFiles: number;
  totalTransforms: number;
  errors: TransformResult[];
}

export class RelativeLinkTransformer {
  private basePath: string;
  private verbose: boolean;
  private isAbsoluteBase: boolean;

  /**
   * Create a new RelativeLinkTransformer
   * @param basePath - Base URL/path for resolving relative links. Can be absolute (http/https) or relative (/path)
   * @param verbose - Enable verbose logging
   */
  constructor(basePath: string, verbose = false) {
    this.basePath = basePath;
    this.verbose = verbose;
    this.isAbsoluteBase =
      basePath.startsWith('http://') || basePath.startsWith('https://');

    // Validate base URL/path
    if (this.isAbsoluteBase) {
      try {
        new URL(this.basePath);
      } catch {
        throw new Error(`Invalid absolute base URL: ${basePath}`);
      }
    } else {
      // For relative paths, ensure it starts with /
      if (!this.basePath.startsWith('/')) {
        this.basePath = '/' + this.basePath;
      }
    }
  }

  /**
   * Check if a URL is relative
   */
  private isRelativeUrl(url: string): boolean {
    // Skip if it's already absolute, anchor, mailto, tel, etc.
    if (
      url.startsWith('http://') ||
      url.startsWith('https://') ||
      url.startsWith('//') ||
      url.startsWith('#') ||
      url.startsWith('mailto:') ||
      url.startsWith('tel:') ||
      url.startsWith('data:') ||
      url.startsWith('javascript:')
    ) {
      return false;
    }
    return true;
  }

  /**
   * Slugify a filename to match Astro/Starlight's slug generation
   */
  private slugifyFilename(filename: string): string {
    return filename
      .toLowerCase() // Convert to lowercase
      .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  }

  /**
   * Convert relative URL to absolute URL or resolved path
   */
  private toAbsoluteUrl(relativeUrl: string): string {
    let resolvedUrl: string;

    if (this.isAbsoluteBase) {
      // Handle absolute base URLs using URL constructor
      try {
        resolvedUrl = new URL(relativeUrl, this.basePath).href;
      } catch (error) {
        // Fallback for malformed URLs
        const baseWithSlash = this.basePath.endsWith('/')
          ? this.basePath
          : `${this.basePath}/`;
        resolvedUrl =
          baseWithSlash + relativeUrl.replace(/^\.\//, '').replace(/^\//, '');
      }
    } else {
      // Handle relative base paths using path resolution
      resolvedUrl = this.resolveRelativePath(this.basePath, relativeUrl);
    }

    // Strip markdown extensions before hash fragments or at end of string
    const withoutExtension = resolvedUrl.replace(/\.(md|mdx)(?=#|$)/i, '');

    // Split URL into parts to process the path portion
    const hashIndex = withoutExtension.indexOf('#');
    const pathPart =
      hashIndex !== -1
        ? withoutExtension.substring(0, hashIndex)
        : withoutExtension;
    const hashPart =
      hashIndex !== -1 ? withoutExtension.substring(hashIndex) : '';

    // Process the path: slugify only the filename portion
    const pathSegments = pathPart.split('/');
    if (pathSegments.length > 0) {
      const lastSegment = pathSegments[pathSegments.length - 1];
      if (lastSegment) {
        // Slugify the filename (last segment)
        pathSegments[pathSegments.length - 1] =
          this.slugifyFilename(lastSegment);
      }
    }

    return pathSegments.join('/') + hashPart;
  }

  /**
   * Resolve relative path against base path
   */
  private resolveRelativePath(basePath: string, relativePath: string): string {
    // Use posix path resolution to ensure forward slashes
    const resolved = path.posix.resolve(basePath, relativePath);
    return resolved;
  }

  /**
   * Transform markdown content by replacing relative links with absolute links
   */
  transformMarkdownContent(
    content: string,
    filePath: string,
  ): { content: string; transformCount: number } {
    let transformCount = 0;
    const relativePath = path.relative(process.cwd(), filePath);
    let hasShownHeader = false;

    const showHeader = () => {
      if (this.verbose && !hasShownHeader) {
        console.log(`\n📄 Transforming: ${relativePath}`);
        hasShownHeader = true;
      }
    };

    // Transform standard markdown links: [text](url)
    content = content.replace(
      /\[([^\]]*)\]\(([^)]+)\)/g,
      (match, text, url) => {
        if (this.isRelativeUrl(url)) {
          const absoluteUrl = this.toAbsoluteUrl(url);
          // Only count and log if the URL actually changed
          if (absoluteUrl !== url) {
            transformCount++;
            if (this.verbose) {
              showHeader();
              console.log(`   🔗 [${text}]: ${url} → ${absoluteUrl}`);
            }
            return `[${text}](${absoluteUrl})`;
          }
        }
        return match;
      },
    );

    // Transform reference-style links: [text]: url
    content = content.replace(
      /^\s*\[([^\]]+)\]:\s*(.+)$/gm,
      (match, ref, url) => {
        if (this.isRelativeUrl(url)) {
          const absoluteUrl = this.toAbsoluteUrl(url);
          // Only count and log if the URL actually changed
          if (absoluteUrl !== url) {
            transformCount++;
            if (this.verbose) {
              showHeader();
              console.log(`   📎 Reference [${ref}]: ${url} → ${absoluteUrl}`);
            }
            return match.replace(url, absoluteUrl);
          }
        }
        return match;
      },
    );

    // Transform HTML anchor tags: <a href="url">
    content = content.replace(
      /<a\s+([^>]*?)href\s*=\s*["']([^"']+)["']([^>]*?)>/gi,
      (match, beforeHref, url, afterHref) => {
        if (this.isRelativeUrl(url)) {
          const absoluteUrl = this.toAbsoluteUrl(url);
          // Only count and log if the URL actually changed
          if (absoluteUrl !== url) {
            transformCount++;
            if (this.verbose) {
              showHeader();
              console.log(`   🌐 HTML link: ${url} → ${absoluteUrl}`);
            }
            return `<a ${beforeHref}href="${absoluteUrl}"${afterHref}>`;
          }
        }
        return match;
      },
    );

    // Transform image sources: ![alt](src)
    content = content.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      (match, alt, src) => {
        if (this.isRelativeUrl(src)) {
          const absoluteSrc = this.toAbsoluteUrl(src);
          // Only count and log if the URL actually changed
          if (absoluteSrc !== src) {
            transformCount++;
            if (this.verbose) {
              showHeader();
              console.log(`   🖼️  Image [${alt}]: ${src} → ${absoluteSrc}`);
            }
            return `![${alt}](${absoluteSrc})`;
          }
        }
        return match;
      },
    );

    // Transform HTML img tags: <img src="url">
    content = content.replace(
      /<img\s+([^>]*?)src\s*=\s*["']([^"']+)["']([^>]*?)>/gi,
      (match, beforeSrc, src, afterSrc) => {
        if (this.isRelativeUrl(src)) {
          const absoluteSrc = this.toAbsoluteUrl(src);
          // Only count and log if the URL actually changed
          if (absoluteSrc !== src) {
            transformCount++;
            if (this.verbose) {
              showHeader();
              console.log(`   🖼️  HTML img: ${src} → ${absoluteSrc}`);
            }
            return `<img ${beforeSrc}src="${absoluteSrc}"${afterSrc}>`;
          }
        }
        return match;
      },
    );

    return { content, transformCount };
  }

  /**
   * Get all markdown and MDX files recursively from a directory
   */
  async getMarkdownFiles(dirPath: string): Promise<string[]> {
    const files: string[] = [];

    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
          const subFiles = await this.getMarkdownFiles(fullPath);
          files.push(...subFiles);
        } else if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      throw new Error(`Failed to read directory ${dirPath}: ${error}`);
    }

    return files;
  }

  /**
   * Transform a single file
   */
  private async transformFile(filePath: string): Promise<TransformResult> {
    const result: TransformResult = {
      filePath,
      transformedLinks: 0,
      errors: [],
    };

    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const { content: transformedContent, transformCount } =
        this.transformMarkdownContent(content, filePath);

      result.transformedLinks = transformCount;

      if (transformCount > 0) {
        await fs.writeFile(filePath, transformedContent, 'utf-8');
      }
    } catch (error) {
      result.errors.push(`Failed to process file: ${error}`);
    }

    return result;
  }

  /**
   * Transform all markdown files in the specified folder
   */
  async transformFolder(options: TransformOptions): Promise<TransformSummary> {
    const { folderPath } = options;

    try {
      // Validate folder path
      const folderStat = await fs.stat(folderPath);
      if (!folderStat.isDirectory()) {
        throw new Error(`${folderPath} is not a directory`);
      }

      const markdownFiles = await this.getMarkdownFiles(folderPath);
      const results: TransformResult[] = [];
      let totalTransforms = 0;

      if (this.verbose && markdownFiles.length > 0) {
        console.log(
          `🔗 Starting transformation of ${markdownFiles.length} files...`,
        );
      }

      for (const filePath of markdownFiles) {
        const result = await this.transformFile(filePath);
        results.push(result);
        totalTransforms += result.transformedLinks;

        // Only show summary per file if not verbose (verbose shows detailed per-link info)
        if (!this.verbose && result.transformedLinks > 0) {
          const relativePath = path.relative(process.cwd(), filePath);
          console.log(
            `✅ ${relativePath}: ${result.transformedLinks} links transformed`,
          );
        }
      }

      const errors = results.filter(r => r.errors.length > 0);

      if (this.verbose) {
        const successfulTransforms = results.filter(
          r => r.transformedLinks > 0,
        ).length;
        console.log(
          `✅ Transformed ${totalTransforms} links across ${successfulTransforms} files`,
        );

        if (errors.length > 0) {
          console.warn(`⚠️ ${errors.length} files had errors`);
        }
      }

      return {
        totalFiles: markdownFiles.length,
        processedFiles: results.length,
        totalTransforms,
        errors,
      };
    } catch (error) {
      throw new Error(`Failed to transform folder: ${error}`);
    }
  }

  /**
   * Transform a single file (useful for incremental builds)
   */
  async transformSingleFile(filePath: string): Promise<TransformResult> {
    if (!filePath.match(/\.(md|mdx)$/i)) {
      return {
        filePath,
        transformedLinks: 0,
        errors: ['File is not a Markdown or MDX file'],
      };
    }

    return this.transformFile(filePath);
  }
}

/**
 * Convenience function for quick transformations
 */
export async function transformRelativeLinks(
  folderPath: string,
  basePath: string,
  verbose = false,
): Promise<TransformSummary> {
  const transformer = new RelativeLinkTransformer(basePath, verbose);
  return transformer.transformFolder({ folderPath, basePath, verbose });
}

/**
 * Transform a single file (convenience function)
 */
export async function transformSingleFile(
  filePath: string,
  basePath: string,
  verbose = false,
): Promise<TransformResult> {
  const transformer = new RelativeLinkTransformer(basePath, verbose);
  return transformer.transformSingleFile(filePath);
}

/**
 * CLI functionality - only runs when script is executed directly
 */
async function runCLI() {
  const args = process.argv.slice(2);

  if (args.length < 2 || args.includes('--help') || args.includes('-h')) {
    console.log(`
📝 Relative Links Transformer for Starlight/Astro Documentation

Usage: npx tsx transform-links.ts <folder-path> <base-path> [options]

Arguments:
  folder-path    Path to the folder containing Markdown/MDX files
  base-path      Base path/URL to prepend to relative links
                 - Relative: /algokit/algokit-cli
                 - Absolute: https://docs.yoursite.com

Options:
  --dry-run      Preview changes without modifying files
  --verbose      Show detailed transformation logs
  --help, -h     Show this help message

Examples:
  # Transform with relative base path (Starlight/Astro)
  npx tsx transform-links.ts ./src/content/docs /algokit/algokit-cli

  # Transform with absolute base URL
  npx tsx transform-links.ts ./docs https://docs.yoursite.com

  # Dry run to preview changes
  npx tsx transform-links.ts ./content /docs --dry-run --verbose

Path Resolution Examples (base: /algokit/algokit-cli):
  ../overview.md        → /algokit/overview
  ./task/guide.md       → /algokit/algokit-cli/task/guide
  ../task/overview.md   → /algokit/task/overview
  guide.md              → /algokit/algokit-cli/guide
`);
    process.exit(0);
  }

  const folderPath = args[0];
  const basePath = args[1];
  const dryRun = args.includes('--dry-run');
  const verbose = args.includes('--verbose');

  try {
    // Validate inputs
    const folderStat = await fs.stat(folderPath);
    if (!folderStat.isDirectory()) {
      throw new Error(`${folderPath} is not a directory`);
    }

    console.log(`🔍 Scanning for Markdown files in: ${folderPath}`);
    console.log(`🌐 Base path: ${basePath}`);
    console.log(`🧪 Dry run: ${dryRun ? 'Yes' : 'No'}`);
    console.log('');

    if (dryRun) {
      // For dry run, create a transformer to get files but show detailed output
      const transformer = new RelativeLinkTransformer(basePath, false); // Don't show verbose yet
      const markdownFiles = await transformer.getMarkdownFiles(folderPath);

      console.log(`📄 Found ${markdownFiles.length} Markdown/MDX files`);
      console.log('');

      let totalTransforms = 0;

      for (const filePath of markdownFiles) {
        const content = await fs.readFile(filePath, 'utf-8');
        // Create a temporary transformer instance for dry run with verbose output
        const tempTransformer = new RelativeLinkTransformer(basePath, verbose);
        const { transformCount } = tempTransformer.transformMarkdownContent(
          content,
          filePath,
        );
        totalTransforms += transformCount;

        if (!verbose) {
          // Only show summary if not verbose (verbose shows detailed per-link info)
          const relativePath = path.relative(process.cwd(), filePath);
          if (transformCount > 0) {
            console.log(
              `✅ ${relativePath}: ${transformCount} links would be transformed`,
            );
          }
        }
      }

      console.log('');
      console.log(`🎉 Dry run complete!`);
      console.log(`📊 Total files scanned: ${markdownFiles.length}`);
      console.log(
        `🔗 Total links that would be transformed: ${totalTransforms}`,
      );
      console.log(`⚠️  This was a dry run. No files were modified.`);
    } else {
      // Normal transformation
      const result = await transformRelativeLinks(
        folderPath,
        basePath,
        verbose,
      );

      console.log(`🎉 Transformation complete!`);
      console.log(`📊 Total files processed: ${result.totalFiles}`);
      console.log(`🔗 Total links transformed: ${result.totalTransforms}`);

      if (result.errors.length > 0) {
        console.warn(`⚠️ ${result.errors.length} files had errors:`);
        result.errors.forEach(error => {
          console.warn(
            `  - ${path.relative(process.cwd(), error.filePath)}: ${error.errors.join(', ')}`,
          );
        });
        process.exit(1);
      }
    }
  } catch (error) {
    console.error(`❌ Error: ${error}`);
    process.exit(1);
  }
}

// Run CLI if this file is executed directly (ES modules)
if (import.meta.url === `file://${process.argv[1]}`) {
  runCLI().catch(console.error);
}
