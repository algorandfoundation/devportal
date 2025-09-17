import type { ImportOptions } from '@larkiny/astro-github-loader';
import { createLinkTransform } from '../transforms/links.js';

/**
 * Example import configuration showing basic link transformation and ignores
 * This is a template for repositories that need internal link processing
 */
export const exampleBasicLinksConfig: ImportOptions = {
  name: 'Example Basic Link Transform',
  owner: 'example-org',
  repo: 'example-repo',
  path: 'docs',
  basePath: 'src/content/docs/example',
  enabled: false, // Disabled by default since this is just an example
  clear: false,
  ignores: [
    // Ignore specific files or folders
    'api/**/*',           // Ignore entire API directory
    'temp/**/*',          // Ignore temp files
    '**/*.test.md',       // Ignore test files
    'old-readme.md',      // Ignore specific file
  ],
  fileRenames: [
    // Use fileRenames for actual file structure changes
    { from: 'README.md', to: 'overview.md' },
    { from: 'getting-started.md', to: 'quickstart.md' },
  ],
  transforms: [
    // Simple link transformation - just converts relative links to absolute
    createLinkTransform({
      baseUrl: '/example',
    }),
  ],
};

/**
 * Example with pathMapping for edge cases (external redirects)
 */
export const exampleWithExternalLinksConfig: ImportOptions = {
  name: 'Example with External Link Mapping',
  owner: 'example-org', 
  repo: 'example-repo',
  path: 'docs',
  basePath: 'src/content/docs/example',
  enabled: false,
  clear: false,
  transforms: [
    createLinkTransform({
      baseUrl: '/example',
      pathMapping: {
        // Only use pathMapping for links that should point outside imported content
        'legacy-api.md': '/legacy/api-documentation',  // Points to existing page elsewhere
        'external-guide.md': '/other-section/guide',   // Points to different section
      },
    }),
  ],
};

/**
 * Example with custom path transformation logic for complex reorganization
 */
export const exampleWithCustomTransformConfig: ImportOptions = {
  name: 'Example with Custom Transform',
  owner: 'example-org',
  repo: 'example-repo',
  path: 'documentation',
  basePath: 'src/content/docs/custom-example',
  enabled: false,
  clear: false,
  transforms: [
    createLinkTransform({
      baseUrl: '/custom-example',
      pathTransform: (path, context) => {
        // Custom logic for complex path transformations
        // Use this when simple fileRenames isn't sufficient
        
        // Convert API reference paths to a different structure
        if (path.startsWith('api/')) {
          return `/custom-example/reference/${path.replace('api/', '').replace(/\.md$/, '')}`;
        }
        
        // Convert guide paths to tutorials section
        if (path.startsWith('guides/')) {
          return `/custom-example/tutorials/${path.replace('guides/', '').replace(/\.md$/, '')}`;
        }
        
        // Default handling
        return `/custom-example/${path}`.replace(/\.md$/, '');
      },
    }),
  ],
};