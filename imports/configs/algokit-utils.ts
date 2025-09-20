import type { ImportOptions } from '@larkiny/astro-github-loader';
import {
  createLinkTransform,
  createStarlightPathTransform,
  getStarlightCompatibleURL,
  extractAnchor,
  removeMarkdownExtension,
  createPathTransformer,
  type PathTransformConfig,
} from '../transforms/links.js';
import { slug } from 'github-slugger';
import {
  convertH1ToTitle,
  removeH1,
  removeH1WithText,
} from '../transforms/common.js';
import {
  createRemoveLineTransform,
  createReplaceTransform,
  createRegexReplaceTransform,
} from '../transforms/content.js';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';

/**
 * Helper function to handle TypeScript API documentation files that have prefixed headings
 * Removes H1, strips the prefix, and sets the cleaned text as frontmatter title and slug
 */
function handlePrefixedHeading(
  content: string,
  context: any,
  prefixRegex: RegExp,
): string {
  const result = removeH1WithText(content);
  if (result.headingText) {
    const cleanTitle = result.headingText.replace(prefixRegex, '');

    // Generate slug based on file path and title
    let slugPath = '';
    if (context.path.startsWith('docs/code/classes')) {
      slugPath = 'reference/algokit-utils-ts/api/classes';
    } else if (context.path.startsWith('docs/code/modules')) {
      slugPath = 'reference/algokit-utils-ts/api/modules';
    } else if (context.path.startsWith('docs/code/interfaces')) {
      slugPath = 'reference/algokit-utils-ts/api/interfaces';
    } else if (context.path.startsWith('docs/code/enums')) {
      slugPath = 'reference/algokit-utils-ts/api/enums';
    } else {
      // Fallback for other paths
      slugPath = 'reference/algokit-utils-ts/api';
    }

    // Create slug from filename using github-slugger for consistency with link transforms
    const filename = context.path.split('/').pop()!; // Get just the filename
    const slugTitle = slug(filename.replace(/\.md$/, '')); // Remove .md extension and slugify
    const slugUrl = `${slugPath}/${slugTitle}`;

    return createFrontmatterTransform({
      frontmatter: {
        title: cleanTitle,
        slug: slugUrl,
      },
      mode: 'merge',
      preserveExisting: true,
    })(result.content, context);
  }
  // If no heading text found, just return the content without H1
  return result.content;
}

const TYPESCRIPT_DOCS_BASE_URL = '/algokit/utils/typescript/';
const TYPESCRIPT_API_BASE_URL = '/reference/algokit-utils-ts/api/';

export const algokitUtilsTypescriptConfig: ImportOptions = {
  name: 'AlgoKit Utils - Typescript (Guides + Reference)',
  owner: 'algorandfoundation',
  repo: 'algokit-utils-ts',
  ref: 'chore/fix-docs',
  assetsPath: 'src/assets/imports/algokit/utils/typescript',
  assetsBaseUrl: '@assets/imports/algokit/utils/typescript',
  includes: [
    {
      pattern: 'docs/*.md',
      basePath: 'src/content/docs/algokit/utils/typescript',
      transforms: [
        removeH1,
        // Apply different frontmatter based on the file
        (content: string, context) => {
          if (context.path === 'docs/README.md') {
            return createFrontmatterTransform({
              frontmatter: {
                title: 'AlgoKit Typescript Utils',
                slug: `algokit/utils/typescript/overview`,
              },
              mode: 'merge',
              preserveExisting: true,
            })(content, context);
          } else if (context.path === 'docs/v7-migration.md') {
            return createFrontmatterTransform({
              frontmatter: {
                title: 'Migrating to v7',
                slug: `algokit/utils/typescript/v7-migration`,
              },
              mode: 'merge',
              preserveExisting: true,
            })(content, context);
          } else if (context.path === 'docs/v8-migration.md') {
            return createFrontmatterTransform({
              frontmatter: {
                title: 'Migrating to v8',
                slug: `algokit/utils/typescript/v8-migration`,
              },
              mode: 'merge',
              preserveExisting: true,
            })(content, context);
          }
          // Default: no additional frontmatter for other files
          return content;
        },
        createLinkTransform({
          baseUrl: TYPESCRIPT_DOCS_BASE_URL,
          pathReplace: ['docs/', './capabilities/', 'capabilities/'], // Handle docs/ and capability link prefixes
          pathMapping: {
            // Only map the special case that doesn't follow the pattern
            '../code/README.md': `${TYPESCRIPT_API_BASE_URL}overview`,
            './v7-migration.md': `${TYPESCRIPT_DOCS_BASE_URL}v7-migration`,
          },
          pathTransform: (path, context) => {
            const { path: cleanPath, anchor } = extractAnchor(path);

            // Transform links starting with "code/" to API reference (after pathReplace preprocessing)
            if (cleanPath.startsWith('code/')) {
              const apiPath = cleanPath.replace('code/', '');
              return (
                getStarlightCompatibleURL(apiPath, TYPESCRIPT_API_BASE_URL) +
                anchor
              );
            }

            // Transform links starting with "./code/" to API reference
            if (cleanPath.startsWith('./code/')) {
              const apiPath = cleanPath.replace('./code/', '');
              return (
                getStarlightCompatibleURL(apiPath, TYPESCRIPT_API_BASE_URL) +
                anchor
              );
            }

            // Default handling with baseUrl (capabilities/ prefixes already stripped by pathReplace)
            return (
              getStarlightCompatibleURL(
                cleanPath,
                TYPESCRIPT_DOCS_BASE_URL,
                context.from,
              ) + anchor
            );
          },
        }),
      ],
    },
    {
      pattern: 'docs/capabilities/**/*',
      basePath: 'src/content/docs/algokit/utils/typescript',
      transforms: [
        convertH1ToTitle,
        createLinkTransform({
          baseUrl: TYPESCRIPT_DOCS_BASE_URL,
          pathReplace: [
            'docs/capabilities/',
            'docs/',
            './capabilities/',
            'capabilities/',
          ],
          pathTransform: (path, context) => {
            const { path: cleanPath, anchor } = extractAnchor(path);

            // Transform README.md links (including relative paths like ../README.md)
            if (
              cleanPath.endsWith('/README.md') ||
              cleanPath === 'README.md' ||
              cleanPath === '../README.md'
            ) {
              return `${TYPESCRIPT_DOCS_BASE_URL}overview${anchor}`;
            }

            // Define transformation configs for common patterns
            const transformConfigs: PathTransformConfig[] = [
              // API reference transformations (code/ patterns)
              { prefix: 'code/', baseUrl: TYPESCRIPT_API_BASE_URL },
              { prefix: './code/', baseUrl: TYPESCRIPT_API_BASE_URL },
              { prefix: '../code/', baseUrl: TYPESCRIPT_API_BASE_URL },

              // Source code transformations (GitHub links)
              {
                prefix: 'src/',
                baseUrl:
                  'https://github.com/algorandfoundation/algokit-utils-ts/blob/main/',
                useStarlightTransform: false,
                removeMarkdownExt: true,
              },
              {
                prefix: '../../src/',
                baseUrl:
                  'https://github.com/algorandfoundation/algokit-utils-ts/',
                useStarlightTransform: false,
                customTransform: (pathWithAnchor, context) => {
                  const { path: cleanPath, anchor } =
                    extractAnchor(pathWithAnchor);
                  const srcPath = cleanPath.replace('../../src/', '');

                  // Use 'tree' for directories (ending with /) and 'blob' for files
                  const isDirectory = srcPath.endsWith('/');
                  const urlType = isDirectory ? 'tree' : 'blob';

                  // Remove markdown extensions from file paths only
                  const finalPath =
                    !isDirectory && srcPath.match(/\.(md|mdx)$/i)
                      ? srcPath.replace(/\.(md|mdx)$/i, '')
                      : srcPath;

                  return `https://github.com/algorandfoundation/algokit-utils-ts/${urlType}/main/src/${finalPath}${anchor}`;
                },
              },

              // Relative path fallback
              {
                prefix: './',
                baseUrl: TYPESCRIPT_DOCS_BASE_URL,
                contextFrom: context.from,
              },
            ];

            // Try to transform using the configured patterns
            const transformer = createPathTransformer(transformConfigs);
            const transformedUrl = transformer(cleanPath, anchor, context);
            if (transformedUrl !== null) {
              return transformedUrl;
            }

            // Default handling with baseUrl
            // getStarlightCompatibleURL handles anchor processing internally
            return getStarlightCompatibleURL(
              cleanPath + anchor,
              TYPESCRIPT_DOCS_BASE_URL,
              context.from,
            );
          },
        }),
      ],
    },
    {
      pattern: 'docs/code/**/*',
      basePath: 'src/content/docs/reference/algokit-utils-ts/api',
      transforms: [
        // Add custom frontmatter to the README.md file and remove plain text line
        (content: string, context) => {
          if (context.path === 'docs/code/README.md') {
            // First apply frontmatter transform
            let transformedContent = createFrontmatterTransform({
              frontmatter: {
                title: 'AlgoKit Utils (TypeScript) API',
                slug: `${TYPESCRIPT_API_BASE_URL}overview`,
                sidebar: { label: 'Overview' },
              },
              mode: 'merge',
              preserveExisting: true,
            })(content, context);

            // Then remove the plain text line "@algorandfoundation/algokit-utils"
            transformedContent = transformedContent.replace(
              /^@algorandfoundation\/algokit-utils\s*$/m,
              '',
            );

            return transformedContent;
          }

          if (context.path.startsWith('docs/code/classes')) {
            return handlePrefixedHeading(content, context, /^Class:\s*/);
          }
          if (context.path.startsWith('docs/code/modules')) {
            return handlePrefixedHeading(content, context, /^Module:\s*/);
          }
          if (context.path.startsWith('docs/code/interfaces')) {
            return handlePrefixedHeading(content, context, /^Interface:\s*/);
          }
          if (context.path.startsWith('docs/code/enums')) {
            return handlePrefixedHeading(content, context, /^Enumeration:\s*/);
          }

          return convertH1ToTitle(content, context);
        },
        createLinkTransform({
          baseUrl: TYPESCRIPT_API_BASE_URL,
          pathReplace: 'docs/code/',
          pathTransform: (
            path: string,
            context: { from: string; to: string },
          ): string => {
            // Handle README.md links (including relative paths like ../README.md, ../../README.md)
            const { path: cleanPath, anchor } = extractAnchor(path);
            if (cleanPath.endsWith('/README.md') || cleanPath === 'README.md') {
              return `${TYPESCRIPT_API_BASE_URL}overview${anchor}`;
            }

            // Use the general Starlight path transform for all other links
            return createStarlightPathTransform(
              TYPESCRIPT_API_BASE_URL,
              'docs/code/',
            )(path, context);
          },
        }),
      ],
    },
  ],
  enabled: true,
};

const PYTHON_DOCS_BASE_URL = '/algokit/utils/python/';
const PYTHON_API_BASE_URL = '/reference/algokit-utils-py/api/';

/**
 * Import configuration for algokit-utils-py repository
 * Repository: https://github.com/algorandfoundation/algokit-utils-py
 */
export const algokitUtilsPythonConfig: ImportOptions = {
  name: 'AlgoKit Utils - Python (Guides + Reference)',
  owner: 'algorandfoundation',
  repo: 'algokit-utils-py',
  ref: 'chore/reference-docs',
  assetsPath: 'src/assets/imports/algokit/utils/python',
  assetsBaseUrl: '@assets/imports/algokit/utils/python',
  includes: [
    {
      pattern: 'docs/markdown/index.md',
      basePath: 'src/content/docs/algokit/utils/python',
      transforms: [
        removeH1, // Remove "# AlgoKit Python Utilities" heading
        createFrontmatterTransform({
          frontmatter: {
            title: 'AlgoKit Python Utils',
          },
          mode: 'merge',
          preserveExisting: true,
        }),
        createLinkTransform({
          baseUrl: PYTHON_DOCS_BASE_URL,
          pathTransform: (path, context) => {
            const { path: cleanPath, anchor } = extractAnchor(path);

            // Transform links starting with "capabilities/" by removing the "capabilities/" prefix
            // since those files are imported directly to the python utils directory
            if (cleanPath.startsWith('capabilities/')) {
              const pathWithoutCapabilities = cleanPath.replace(
                'capabilities/',
                '',
              );
              return (
                getStarlightCompatibleURL(
                  pathWithoutCapabilities,
                  PYTHON_DOCS_BASE_URL,
                  context.from,
                ) + anchor
              );
            }

            // Default handling for other paths
            return (
              getStarlightCompatibleURL(
                path,
                PYTHON_DOCS_BASE_URL,
                context.from,
              ) + anchor
            );
          },
        }),
      ],
    },
    {
      pattern: 'docs/markdown/capabilities/**/*',
      basePath: 'src/content/docs/algokit/utils/python',
      transforms: [
        convertH1ToTitle,
        createLinkTransform({
          baseUrl: PYTHON_DOCS_BASE_URL,
          pathMapping: {
            // Handle links to main Python utils overview
            '../index.md': `${PYTHON_DOCS_BASE_URL}`,
          },
          pathTransform: (path, context) => {
            const { path: cleanPath, anchor } = extractAnchor(path);

            // Transform links to autoapi docs to API reference
            if (cleanPath.startsWith('../autoapi/algokit_utils/')) {
              const apiPath = cleanPath.replace(
                '../autoapi/algokit_utils/',
                '',
              );
              // Handle index.md files by removing them (Starlight routing)
              const transformedPath = apiPath.endsWith('/index.md')
                ? apiPath.replace('/index.md', '')
                : apiPath;
              return (
                getStarlightCompatibleURL(
                  transformedPath,
                  PYTHON_API_BASE_URL,
                  context.from,
                ) + anchor
              );
            }

            // Default handling for other paths
            return (
              getStarlightCompatibleURL(
                cleanPath,
                PYTHON_DOCS_BASE_URL,
                context.from,
              ) + anchor
            );
          },
        }),
      ],
    },
    {
      pattern: 'docs/markdown/autoapi/algokit_utils/**/*',
      basePath: 'src/content/docs/reference/algokit-utils-py/api',
      transforms: [
        // Custom transform to handle root index.md and extract class/function names
        (content: string, context) => {
          // Handle root index.md file specially
          if (context.path === 'docs/markdown/autoapi/algokit_utils/index.md') {
            const result = removeH1WithText(content);
            return createFrontmatterTransform({
              frontmatter: {
                title: 'AlgoKit Utils (Python)',
                sidebar: { label: 'Overview' },
              },
              mode: 'replace',
              preserveExisting: false,
            })(result.content, context);
          }

          // Handle other files - extract class/function name from Python module path headings
          const result = removeH1WithText(content);
          if (result.headingText) {
            const cleanTitle =
              result.headingText.split('.').pop() || result.headingText;

            return createFrontmatterTransform({
              frontmatter: {
                title: cleanTitle,
              },
              mode: 'merge',
              preserveExisting: true,
            })(result.content, context);
          }
          // If no heading text found, just return the content without H1
          return result.content;
        },
        createLinkTransform({
          baseUrl: PYTHON_API_BASE_URL,
          pathTransform: (path, context) => {
            const { path: cleanPath, anchor } = extractAnchor(path);

            // Clean the from path by removing the pathReplace prefix if it exists
            let cleanedFromPath = context.from;
            if (
              cleanedFromPath.startsWith('docs/markdown/autoapi/algokit_utils/')
            ) {
              cleanedFromPath = cleanedFromPath.slice(
                'docs/markdown/autoapi/algokit_utils/'.length,
              );
            }

            // Transform links ending with "/index.md" to just the folder path
            // e.g., "accounts/index.md" → "accounts" (baseUrl already has trailing slash)
            if (cleanPath.endsWith('/index.md')) {
              const folderPath = cleanPath.replace('/index.md', '');
              return (
                getStarlightCompatibleURL(
                  folderPath,
                  PYTHON_API_BASE_URL,
                  cleanedFromPath,
                ) + anchor
              );
            }

            // For other markdown files, use consistent slugification with context
            return (
              getStarlightCompatibleURL(
                cleanPath,
                PYTHON_API_BASE_URL,
                cleanedFromPath,
              ) + anchor
            );
          },
        }),
      ],
    },
  ],
  enabled: true,
};
