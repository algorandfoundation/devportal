import * as yaml from 'js-yaml';
import type { ParsedFrontmatter, YamlValue } from './types.js';

/**
 * Regular expression to match YAML frontmatter at the start of content
 */
const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;

/**
 * Parses YAML frontmatter from markdown content
 * @param content - Raw markdown content with potential frontmatter
 * @returns Parsed frontmatter data and remaining content
 */
export function parseFrontmatter(content: string): ParsedFrontmatter {
  const match = content.match(FRONTMATTER_REGEX);
  
  if (!match) {
    return {
      data: {},
      content: content,
      hasFrontmatter: false,
    };
  }

  const [, frontmatterYaml, remainingContent] = match;
  
  try {
    const data = yaml.load(frontmatterYaml) as Record<string, YamlValue>;
    
    return {
      data: data || {},
      content: remainingContent,
      hasFrontmatter: true,
    };
  } catch (error) {
    console.warn('Failed to parse YAML frontmatter:', error);
    return {
      data: {},
      content: content,
      hasFrontmatter: false,
    };
  }
}

/**
 * Serializes frontmatter data to YAML string with consistent formatting
 * @param data - Frontmatter data object
 * @returns Formatted YAML string
 */
export function serializeFrontmatter(data: Record<string, YamlValue>): string {
  if (!data || Object.keys(data).length === 0) {
    return '';
  }

  try {
    const yamlString = yaml.dump(data, {
      indent: 2,
      lineWidth: 120,
      noRefs: true,
      sortKeys: false,
      flowLevel: -1,
    });

    return yamlString.trim();
  } catch (error) {
    console.warn('Failed to serialize YAML frontmatter:', error);
    return '';
  }
}

/**
 * Deep merges two objects, with the second object taking precedence
 * @param target - Target object to merge into
 * @param source - Source object to merge from  
 * @param preserveExisting - Whether to preserve existing values in target
 * @returns Merged object
 */
export function deepMerge(
  target: Record<string, YamlValue>,
  source: Record<string, YamlValue>,
  preserveExisting = true
): Record<string, YamlValue> {
  const result = { ...target };

  for (const [key, value] of Object.entries(source)) {
    if (preserveExisting && key in result && result[key] !== null && result[key] !== undefined) {
      // If preserveExisting is true and target already has this key, keep the existing value
      // unless we're dealing with objects that should be merged
      if (isPlainObject(result[key]) && isPlainObject(value)) {
        result[key] = deepMerge(
          result[key] as Record<string, YamlValue>,
          value as Record<string, YamlValue>,
          preserveExisting
        );
      }
      // Otherwise keep existing value
    } else {
      // Either preserveExisting is false, or target doesn't have this key
      if (isPlainObject(value) && isPlainObject(result[key])) {
        result[key] = deepMerge(
          result[key] as Record<string, YamlValue>,
          value as Record<string, YamlValue>,
          preserveExisting
        );
      } else {
        result[key] = value;
      }
    }
  }

  return result;
}

/**
 * Checks if a value is a plain object (not array, date, etc.)
 * @param value - Value to check
 * @returns True if value is a plain object
 */
function isPlainObject(value: YamlValue): value is Record<string, YamlValue> {
  return (
    value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    !(value instanceof Date)
  );
}

/**
 * Combines frontmatter data and content into a complete markdown document
 * @param frontmatter - Frontmatter data object
 * @param content - Markdown content
 * @returns Complete markdown document with frontmatter
 */
export function combineFrontmatterAndContent(
  frontmatter: Record<string, YamlValue>,
  content: string
): string {
  const yamlString = serializeFrontmatter(frontmatter);
  
  if (!yamlString) {
    return content;
  }

  // Ensure content starts with a newline if frontmatter exists
  const cleanContent = content.startsWith('\n') ? content : `\n${content}`;
  
  return `---\n${yamlString}\n---${cleanContent}`;
}

/**
 * Validates that frontmatter data contains required Starlight properties
 * @param data - Frontmatter data to validate
 * @returns Validation result with errors if any
 */
export function validateStarlightFrontmatter(data: Record<string, YamlValue>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Title is required in Starlight
  if (!data.title || typeof data.title !== 'string') {
    errors.push('Title is required and must be a string');
  }

  // Validate template if present
  if (data.template && !['doc', 'splash'].includes(data.template as string)) {
    errors.push('Template must be either "doc" or "splash"');
  }

  // Validate draft if present
  if (data.draft !== undefined && typeof data.draft !== 'boolean') {
    errors.push('Draft must be a boolean');
  }

  // Validate pagefind if present
  if (data.pagefind !== undefined && typeof data.pagefind !== 'boolean') {
    errors.push('Pagefind must be a boolean');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}