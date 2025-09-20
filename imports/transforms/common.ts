/**
 * Pre-built common frontmatter transforms for typical use cases
 * These can be imported and used directly in repository configurations
 */

import type { TransformFunction } from '@larkiny/astro-github-loader';
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
 * Removes the first H1 heading and returns both the cleaned content and the extracted heading text
 * Returns an object with { content: string, headingText: string | null }
 */
export function removeH1WithText(content: string): { content: string; headingText: string | null } {
  const parsed = parseFrontmatter(content);

  // Extract H1 text before removing it
  const h1Match = parsed.content.match(/^#\s+(.+)$/m);
  const headingText = h1Match ? h1Match[1].trim() : null;

  // Remove the first H1 from content
  const cleanedContent = parsed.content.replace(/^#\s+.+$/m, '').trim();

  const transformedContent = combineFrontmatterAndContent(parsed.data, cleanedContent);

  return {
    content: transformedContent,
    headingText
  };
}
