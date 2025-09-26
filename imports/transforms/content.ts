import type { TransformFunction } from '@larkiny/astro-github-loader';

/**
 * Creates a transform function that removes specific lines from content
 */
export function createRemoveLineTransform(
  lineToRemove: string,
): TransformFunction {
  return (content: string, context) => {
    return content.replaceAll(lineToRemove, '');
  };
}

/**
 * Creates a transform function that replaces text using string replacement
 */
export function createReplaceTransform(
  from: string,
  to: string,
): TransformFunction {
  return (content: string, context) => {
    return content.replaceAll(from, to);
  };
}

/**
 * Creates a transform function that replaces text using regex
 */
export function createRegexReplaceTransform(
  pattern: RegExp,
  replacement: string,
): TransformFunction {
  return (content: string, context) => {
    return content.replaceAll(pattern, replacement);
  };
}

/**
 * Creates a transform function that removes multiple specific lines
 */
export function createRemoveMultipleLinesTransform(
  linesToRemove: string[],
): TransformFunction {
  return (content: string, context) => {
    let result = content;
    for (const line of linesToRemove) {
      result = result.replaceAll(line, '');
    }
    return result;
  };
}
