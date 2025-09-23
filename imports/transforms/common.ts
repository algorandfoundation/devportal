/**
 * Pre-built common frontmatter transforms for typical use cases
 * These can be imported and used directly in repository configurations
 */

import type { TransformFunction } from '@larkiny/astro-github-loader';
import picomatch from 'picomatch';

import {
  createFrontmatterTransform,
  createTitleTransform,
  createSourceInfoTransform,
  createSidebarTransform,
  createDraftTransform,
  composeFrontmatterTransforms,
} from './frontmatter.js';
import {
  parseFrontmatter,
  combineFrontmatterAndContent,
} from './yaml-utils.js';

/**
 * Creates a conditional transform that only applies when a condition is met
 * @param condition - Function that determines if the transform should be applied
 * @param transforms - Transform functions to apply in sequence when condition is true
 * @returns Transform function that conditionally applies the given transforms
 */
export function createConditionalTransform(
  condition: (path: string) => boolean,
  ...transforms: TransformFunction[]
): TransformFunction {
  return (content: string, context) => {
    if (condition(context.path)) {
      // Apply all transforms in sequence
      return transforms.reduce((currentContent, transform) => {
        return transform(currentContent, context);
      }, content);
    }
    return content;
  };
}

export function matchesPath(pattern: string, path: string): boolean {
  return picomatch(pattern)(path);
}

/**
 * Converts the first H1 heading to frontmatter title and removes it from content
 * This is useful for markdown files that have titles as H1 headings instead of frontmatter
 */
export const convertH1ToTitle: TransformFunction = (content, context) => {
  // Parse existing frontmatter first
  const parsed = parseFrontmatter(content);

  // Check if title already exists in frontmatter
  if (parsed.data.title) {
    return content; // Don't modify if title already exists
  }

  // Look for H1 in the content body (not frontmatter)
  const h1Match = parsed.content.match(/^#\s+(.+)$/m);
  if (!h1Match) {
    return content; // No H1 found, return unchanged
  }

  // Extract title and remove H1 from content
  const title = h1Match[1].trim();
  const cleanedContent = parsed.content.replace(/^#\s+.+$/m, '').trim();

  // Use existing frontmatter infrastructure to add title
  const newFrontmatter = { ...parsed.data, title };

  return combineFrontmatterAndContent(newFrontmatter, cleanedContent);
};

/**
 * Extracts the text content from the first H1 heading in the content
 * Returns null if no H1 heading is found
 */
export function extractH1Text(content: string): string | null {
  const parsed = parseFrontmatter(content);
  const h1Match = parsed.content.match(/^#\s+(.+)$/m);
  return h1Match ? h1Match[1].trim() : null;
}

/**
 * Removes the first H1 heading from content without extracting it to frontmatter
 * Useful when you want to set the title manually via frontmatter
 */
export const removeH1: TransformFunction = (content, context) => {
  const parsed = parseFrontmatter(content);

  // Remove the first H1 from content
  const cleanedContent = parsed.content.replace(/^#\s+.+$/m, '').trim();

  return combineFrontmatterAndContent(parsed.data, cleanedContent);
};

/**
 * Creates a transform function that converts H1 to title using regex pattern extraction
 * @param pattern - Regex pattern to extract part of the H1 text
 * @param matchIndex - Which regex capture group to use (default: 1)
 * @param fallback - Whether to use full H1 text if pattern doesn't match (default: true)
 * @returns Transform function
 */
export function convertH1ToTitleMatch(
  pattern: RegExp,
  matchIndex: number = 1,
  fallback: boolean = true,
): TransformFunction {
  return (content, context) => {
    // Parse existing frontmatter first
    const parsed = parseFrontmatter(content);

    // Check if title already exists in frontmatter
    if (parsed.data.title) {
      return content; // Don't modify if title already exists
    }

    // Look for H1 in the content body
    const h1Match = parsed.content.match(/^#\s+(.+)$/m);
    if (!h1Match) {
      return content; // No H1 found, return unchanged
    }

    const fullH1Text = h1Match[1].trim();

    // Try to extract using the provided pattern
    const patternMatch = fullH1Text.match(pattern);
    let title: string;

    if (patternMatch && patternMatch[matchIndex]) {
      title = patternMatch[matchIndex].trim();
    } else if (fallback) {
      title = fullH1Text;
    } else {
      return content; // No match and no fallback, return unchanged
    }

    // Remove H1 from content
    const cleanedContent = parsed.content.replace(/^#\s+.+$/m, '').trim();

    // Use existing frontmatter infrastructure to add title
    const newFrontmatter = { ...parsed.data, title };

    return combineFrontmatterAndContent(newFrontmatter, cleanedContent);
  };
}

/**
 * Removes the first H1 heading and returns both the cleaned content and the extracted heading text
 * Returns an object with { content: string, headingText: string | null }
 */
export function removeH1WithText(content: string): {
  content: string;
  headingText: string | null;
} {
  const parsed = parseFrontmatter(content);

  // Extract H1 text before removing it
  const h1Match = parsed.content.match(/^#\s+(.+)$/m);
  const headingText = h1Match ? h1Match[1].trim() : null;

  // Remove the first H1 from content
  const cleanedContent = parsed.content.replace(/^#\s+.+$/m, '').trim();

  const transformedContent = combineFrontmatterAndContent(
    parsed.data,
    cleanedContent,
  );

  return {
    content: transformedContent,
    headingText,
  };
}
