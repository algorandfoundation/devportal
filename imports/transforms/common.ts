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
export function conditionalTransform(
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

/**
 * Creates a transform function that extracts H1 heading text, removes the H1 line,
 * and sets both the title and sidebar.label properties in frontmatter with the extracted text
 * @param titleMatch - Optional regex pattern to extract/transform part of the H1 text for title
 * @param sidebarMatch - Optional regex pattern to extract/transform part of the H1 text for sidebar.label
 * @param matchIndex - Which regex capture group to use (default: 1)
 * @param fallback - Whether to use full H1 text if pattern doesn't match (default: true)
 * @returns Transform function
 */
export function extractH1ToSidebarAndTitle(
  titleMatch?: RegExp,
  sidebarMatch?: RegExp,
  matchIndex: number = 1,
  fallback: boolean = true,
): TransformFunction {
  return (content, context) => {
    // Parse existing frontmatter first
    const parsed = parseFrontmatter(content);

    // Look for H1 in the content body
    const h1Match = parsed.content.match(/^#\s+(.+)$/m);
    if (!h1Match) {
      return content; // No H1 found, return unchanged
    }

    const fullH1Text = h1Match[1].trim();
    let titleText: string;
    let sidebarText: string;

    // Apply title pattern matching if provided
    if (titleMatch) {
      const patternMatch = fullH1Text.match(titleMatch);
      if (patternMatch && patternMatch[matchIndex]) {
        titleText = patternMatch[matchIndex].trim();
      } else if (fallback) {
        titleText = fullH1Text;
      } else {
        return content; // No match and no fallback, return unchanged
      }
    } else {
      titleText = fullH1Text;
    }

    // Apply sidebar pattern matching if provided, otherwise use title text
    if (sidebarMatch) {
      const patternMatch = fullH1Text.match(sidebarMatch);
      if (patternMatch && patternMatch[matchIndex]) {
        sidebarText = patternMatch[matchIndex].trim();
      } else if (fallback) {
        sidebarText = titleText; // Fallback to title text
      } else {
        return content; // No match and no fallback, return unchanged
      }
    } else {
      sidebarText = titleText; // Use same text as title
    }

    // Remove H1 from content first
    const contentWithoutH1 = combineFrontmatterAndContent(
      parsed.data,
      parsed.content.replace(/^#\s+.+$/m, '').trim(),
    );

    // Use existing frontmatter transform to set both title and sidebar.label
    const frontmatterTransform = createFrontmatterTransform({
      frontmatter: {
        title: titleText,
        sidebar: { label: sidebarText },
      },
      mode: 'merge',
      preserveExisting: false, // We want to overwrite both title and label
    });

    return frontmatterTransform(contentWithoutH1, context);
  };
}

/**
 * Transform function that extracts H1 heading text, removes it, and sets both title and sidebar.label
 * This is a convenience function that uses createExtractH1ToSidebarLabel with no pattern matching
 */
export const extractH1ToSidebarLabel: TransformFunction =
  extractH1ToSidebarAndTitle();

/**
 * Creates a transform function that extracts values from content using regex patterns
 * and uses those values to create a frontmatter transform
 * @param pattern - Regex pattern to match against the content
 * @param matchIndices - Single index or array of indices for capture groups to extract
 * @param transformFactory - Function that receives extracted values and returns a transform function
 * @param fallback - Whether to apply transform with empty values if pattern doesn't match (default: false)
 * @returns Transform function
 */
export function createContentBasedFrontmatterTransform(
  pattern: RegExp,
  matchIndices: number | number[],
  transformFactory: (extractedValues: string[]) => TransformFunction,
  fallback: boolean = false,
): TransformFunction {
  return (content, context) => {
    // Parse the content to get the full text for pattern matching
    const parsed = parseFrontmatter(content);
    const fullContent = parsed.content;

    // Try to match the pattern against the content
    const match = fullContent.match(pattern);

    let extractedValues: string[] = [];

    if (match) {
      // Normalize matchIndices to always be an array
      const indices = Array.isArray(matchIndices) ? matchIndices : [matchIndices];

      // Extract values from the specified capture groups
      extractedValues = indices.map(index => {
        if (match[index] !== undefined) {
          return match[index].trim();
        }
        return '';
      });
    } else if (!fallback) {
      // No match and no fallback, return unchanged
      return content;
    }
    // If fallback is true but no match, extractedValues remains empty array

    // Create the transform function using the factory
    const generatedTransform = transformFactory(extractedValues);

    // Apply the generated transform
    return generatedTransform(content, context);
  };
}

/**
 * Removes all content up to and including a specified heading pattern
 * Useful for removing table of contents or preamble sections
 * @param headingPattern - Regex pattern to match the heading to remove up to (inclusive)
 * @returns Transform function
 */
export function createRemoveContentUpToHeading(
  headingPattern: RegExp,
): TransformFunction {
  return (content, context) => {
    // Parse existing frontmatter first
    const parsed = parseFrontmatter(content);

    // Find the heading in the content
    const match = parsed.content.match(headingPattern);
    if (!match) {
      return content; // No heading found, return unchanged
    }

    // Find the position after the matched heading line
    const lines = parsed.content.split('\n');
    let foundLineIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].match(headingPattern)) {
        foundLineIndex = i;
        break;
      }
    }

    if (foundLineIndex === -1) {
      return content; // Heading not found, return unchanged
    }

    // Remove everything up to and including the found line
    const remainingLines = lines.slice(foundLineIndex + 1);
    const cleanedContent = remainingLines.join('\n').trim();

    return combineFrontmatterAndContent(parsed.data, cleanedContent);
  };
}
