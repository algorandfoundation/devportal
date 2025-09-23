import type { TransformFunction } from '@larkiny/astro-github-loader';
import type {
  FrontmatterTransformOptions,
  StarlightFrontmatter,
  YamlValue,
} from './types.js';
import {
  parseFrontmatter,
  combineFrontmatterAndContent,
  deepMerge,
  validateStarlightFrontmatter,
} from './yaml-utils.js';

/**
 * Creates a transform function that adds, merges, or replaces frontmatter in markdown content
 * @param options - Configuration for the frontmatter transformation
 * @returns Transform function that can be used with astro-github-loader
 */
export function createFrontmatterTransform(
  options: FrontmatterTransformOptions,
): TransformFunction {
  const { frontmatter, mode = 'merge', preserveExisting = true } = options;

  return (content: string, context): string => {
    const parsed = parseFrontmatter(content);
    let newFrontmatter: Record<string, YamlValue>;

    switch (mode) {
      case 'add':
        // Only add frontmatter if none exists
        if (parsed.hasFrontmatter) {
          return content; // Return unchanged if frontmatter already exists
        }
        newFrontmatter = frontmatter as Record<string, YamlValue>;
        break;

      case 'replace':
        // Completely replace existing frontmatter
        newFrontmatter = frontmatter as Record<string, YamlValue>;
        break;

      case 'merge':
      default:
        // Merge with existing frontmatter
        newFrontmatter = deepMerge(
          parsed.data,
          frontmatter as Record<string, YamlValue>,
          preserveExisting,
        );
        break;
    }

    // Validate the resulting frontmatter
    const validation = validateStarlightFrontmatter(newFrontmatter);
    if (!validation.isValid) {
      console.warn(
        `Frontmatter validation failed for ${context.path}:`,
        validation.errors,
      );
    }

    return combineFrontmatterAndContent(newFrontmatter, parsed.content);
  };
}

/**
 * Creates a transform that adds a title if none exists, derived from the file path
 * @param options - Optional configuration
 * @returns Transform function
 */
export function createTitleTransform(options?: {
  /** Custom title instead of deriving from path */
  title?: string;
  /** Whether to override existing titles */
  override?: boolean;
}): TransformFunction {
  return (content: string, context): string => {
    const parsed = parseFrontmatter(content);

    // If title already exists and we're not overriding, return unchanged
    if (parsed.data.title && !options?.override) {
      return content;
    }

    // Use custom title or derive from path
    const title = options?.title || deriveTitleFromPath(context.path);

    return createFrontmatterTransform({
      frontmatter: { title },
      mode: 'merge',
      preserveExisting: !options?.override,
    })(content, context);
  };
}

/**
 * Creates a transform that adds metadata about the source repository
 * @param includeCommitInfo - Whether to include git commit information
 * @returns Transform function
 */
export function createSourceInfoTransform(
  includeCommitInfo = false,
): TransformFunction {
  return (content: string, context): string => {
    const sourceInfo: Partial<StarlightFrontmatter> = {
      description: `Documentation imported from ${context.options.owner}/${context.options.repo}`,
    };

    // Add custom properties for source tracking
    const customProps = {
      source: {
        owner: context.options.owner,
        repo: context.options.repo,
        ref: context.options.ref || 'main',
        path: context.path,
        importedAt: new Date().toISOString(),
      },
    };

    return createFrontmatterTransform({
      frontmatter: { ...sourceInfo, ...customProps },
      mode: 'merge',
      preserveExisting: true,
    })(content, context);
  };
}

/**
 * Creates a path-based frontmatter transform that only applies to specific files
 * @param targetPath - Path to match (e.g., "docs/algokit.md")
 * @param options - Configuration for the frontmatter transformation
 * @returns Transform function that only applies to the specified path
 */
export function createPathBasedFrontmatterTransform(
  targetPath: string,
  options: FrontmatterTransformOptions,
): TransformFunction {
  const frontmatterTransform = createFrontmatterTransform(options);

  return (content: string, context): string => {
    // Only apply the transform if the path matches
    if (context.path === targetPath) {
      return frontmatterTransform(content, context);
    }
    // Return unchanged for other files
    return content;
  };
}

/**
 * Creates a transform for sidebar configuration
 * @param sidebarConfig - Sidebar configuration options
 * @returns Transform function
 */
export function createSidebarTransform(
  sidebarConfig: StarlightFrontmatter['sidebar'],
): TransformFunction {
  return createFrontmatterTransform({
    frontmatter: { sidebar: sidebarConfig },
    mode: 'merge',
    preserveExisting: true,
  });
}

/**
 * Creates a transform that marks content as draft
 * @param isDraft - Whether to mark as draft
 * @returns Transform function
 */
export function createDraftTransform(isDraft = true): TransformFunction {
  return createFrontmatterTransform({
    frontmatter: { draft: isDraft },
    mode: 'merge',
    preserveExisting: false, // Allow overriding draft status
  });
}

/**
 * Helper function to derive a title from a file path
 * @param path - File path
 * @returns Formatted title string
 */
function deriveTitleFromPath(path: string): string {
  // Remove file extension and directory paths
  const basename =
    path
      .split('/')
      .pop()
      ?.replace(/\.(md|mdx)$/, '') || 'Untitled';

  // Convert kebab-case and snake_case to title case
  return basename
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Utility function to compose multiple frontmatter transforms
 * @param transforms - Array of transform functions to compose
 * @returns Single transform function that applies all transforms in order
 */
export function composeFrontmatterTransforms(
  ...transforms: TransformFunction[]
): TransformFunction {
  return (content: string, context) => {
    return transforms.reduce((currentContent, transform) => {
      return transform(currentContent, context);
    }, content);
  };
}
