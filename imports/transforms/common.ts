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
  composeFrontmatterTransforms
} from './frontmatter.js';
import { 
  parseFrontmatter,
  combineFrontmatterAndContent 
} from './yaml-utils.js';

/**
 * Adds basic metadata for imported documentation
 */
export const addImportMetadata: TransformFunction = createSourceInfoTransform();

/**
 * Ensures every page has a title derived from filename if none exists
 */
export const ensureTitle: TransformFunction = createTitleTransform();

/**
 * Marks content as coming from external source
 */
export const markAsImported: TransformFunction = createFrontmatterTransform({
  frontmatter: {
    sidebar: {
      badge: 'Imported'
    }
  },
  mode: 'merge'
});

/**
 * Converts README files to overview pages
 */
export const readmeToOverview: TransformFunction = (content, context) => {
  if (context.path.toLowerCase().includes('readme')) {
    return createTitleTransform({
      title: 'Overview',
      override: true
    })(content, context);
  }
  return content;
};

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
 * Hides pages from sidebar navigation
 */
export const hideFromSidebar: TransformFunction = createSidebarTransform({
  hidden: true
});

/**
 * Marks content as draft (excluded from production builds)
 */
export const markAsDraft: TransformFunction = createDraftTransform(true);

/**
 * Disables search indexing for the page
 */
export const disableSearch: TransformFunction = createFrontmatterTransform({
  frontmatter: {
    pagefind: false
  },
  mode: 'merge'
});

/**
 * Configures pages for splash layout (typically for landing pages)
 */
export const makeSplashPage: TransformFunction = createFrontmatterTransform({
  frontmatter: {
    template: 'splash'
  },
  mode: 'merge'
});

/**
 * Removes table of contents from pages
 */
export const hideTableOfContents: TransformFunction = createFrontmatterTransform({
  frontmatter: {
    tableOfContents: false
  },
  mode: 'merge'
});

/**
 * Sets custom table of contents configuration
 */
export const customTableOfContents = (minLevel = 2, maxLevel = 4): TransformFunction =>
  createFrontmatterTransform({
    frontmatter: {
      tableOfContents: {
        minHeadingLevel: minLevel,
        maxHeadingLevel: maxLevel
      }
    },
    mode: 'merge'
  });

/**
 * Common transform for API documentation
 */
export const apiDocumentationTransform: TransformFunction = composeFrontmatterTransforms(
  ensureTitle,
  createFrontmatterTransform({
    frontmatter: {
      sidebar: {
        badge: 'API',
        order: 100
      }
    },
    mode: 'merge'
  })
);

/**
 * Common transform for tutorial content
 */
export const tutorialTransform: TransformFunction = composeFrontmatterTransforms(
  ensureTitle,
  createFrontmatterTransform({
    frontmatter: {
      sidebar: {
        badge: 'Tutorial',
        order: 1
      }
    },
    mode: 'merge'
  })
);

/**
 * Common transform for reference documentation
 */
export const referenceTransform: TransformFunction = composeFrontmatterTransforms(
  ensureTitle,
  createFrontmatterTransform({
    frontmatter: {
      sidebar: {
        badge: 'Reference',
        order: 200
      }
    },
    mode: 'merge'
  })
);

/**
 * Transform for AlgoKit documentation
 */
export const algokitTransform: TransformFunction = composeFrontmatterTransforms(
  ensureTitle,
  createSourceInfoTransform(),
  createFrontmatterTransform({
    frontmatter: {
      sidebar: {
        badge: {
          text: 'AlgoKit',
          variant: 'tip'
        },
        order: 10
      }
    },
    mode: 'merge'
  })
);

/**
 * Transform for converting changelog entries
 */
export const changelogTransform: TransformFunction = composeFrontmatterTransforms(
  createTitleTransform({ title: 'Changelog', override: false }),
  createFrontmatterTransform({
    frontmatter: {
      sidebar: {
        label: 'Changelog',
        order: 1000
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3
      }
    },
    mode: 'merge'
  })
);

/**
 * Transform for migration guides
 */
export const migrationGuideTransform: TransformFunction = composeFrontmatterTransforms(
  ensureTitle,
  createFrontmatterTransform({
    frontmatter: {
      sidebar: {
        badge: {
          text: 'Migration',
          variant: 'caution'
        },
        order: 500
      }
    },
    mode: 'merge'
  })
);

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