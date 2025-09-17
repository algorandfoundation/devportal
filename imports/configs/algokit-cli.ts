import type { ImportOptions } from '@larkiny/astro-github-loader';
import {
  createLinkTransform,
  extractAnchor,
  removeMarkdownExtension,
} from '../transforms/links.js';
import { convertH1ToTitle, removeH1 } from '../transforms/common.js';
import { createFrontmatterTransform } from '../transforms/frontmatter.js';

/**
 * Import configuration for algokit-cli repository
 * Repository: https://github.com/algorandfoundation/algokit-cli
 */
export const algokitCLIConfig: ImportOptions = {
  name: 'AlgoKit CLI Docs (features)',
  owner: 'algorandfoundation',
  repo: 'algokit-cli',
  assetsPath: 'src/assets/imports/algokit/cli',
  assetsBaseUrl: '~/assets/imports/algokit/cli',
  includes: [
    {
      pattern: 'docs/algokit.md',
      basePath: 'src/content/docs/algokit/cli',
      transforms: [
        removeH1, // Remove "# AlgoKit" heading
        createFrontmatterTransform({
          frontmatter: {
            title: 'AlgoKit CLI Overview',
            slug: 'algokit/cli/overview',
          },
          mode: 'merge',
          preserveExisting: true,
        }),
        createLinkTransform({
          baseUrl: '/algokit/cli',
          pathTransform: (path, context) => {
            const { path: cleanPath, anchor } = extractAnchor(path);

            // Handle links from algokit.md to cli/index.md
            if (
              cleanPath === 'cli/index.md' ||
              cleanPath === './cli/index.md'
            ) {
              return `/algokit/cli/commands${anchor}`;
            }

            // Handle links from algokit.md to features
            if (
              cleanPath.startsWith('features/') ||
              cleanPath.startsWith('./features/')
            ) {
              const featuresPath = cleanPath
                .replace(/^(?:\.\/)?features\//, '')
                .replace(/\.md$/, '');
              return `/algokit/cli/${featuresPath}${anchor}`;
            }

            // Default handling
            return `/algokit/cli/${removeMarkdownExtension(path)}`;
          },
        }),
      ],
    },
    {
      pattern: 'docs/cli/index.md',
      basePath: 'src/content/docs/algokit/cli',
      transforms: [
        // Remove TOC as we don't need it in Starlight
        (content: string) => {
          const startPattern = /^#\s+AlgoKit CLI Reference Documentation\s*$/m;
          const endPattern = /^#\s+algokit\s*$/m;

          const startMatch = content.match(startPattern);
          const endMatch = content.match(endPattern);

          if (
            startMatch &&
            endMatch &&
            startMatch.index !== undefined &&
            endMatch.index !== undefined
          ) {
            const startPos = startMatch.index;
            const endPos = endMatch.index + endMatch[0].length;

            const remaining =
              content.slice(0, startPos) + content.slice(endPos);
            return remaining.replace(/^\s*\n*/, '');
          }

          return content;
        },
        // Replace old quick start tutorial link with new devportal quick start link
        (content: string) => {
          return content.replace(
            /quick start tutorial: \[https:\/\/bit\.ly\/algokit-intro-tutorial\]\(https:\/\/bit\.ly\/algokit-intro-tutorial\)\./g,
            '[quick start tutorial](/getting-started/introduction/).',
          );
        },
        createFrontmatterTransform({
          frontmatter: {
            title: 'AlgoKit CLI Reference',
            slug: 'algokit/cli/commands',
            sidebar: { label: 'CLI Reference' },
          },
          mode: 'merge',
          preserveExisting: true,
        }),
        createLinkTransform({
          baseUrl: '/algokit/cli',
        }),
      ],
    },
    {
      pattern: 'docs/features/**/*',
      basePath: 'src/content/docs/algokit/cli',
      transforms: [
        convertH1ToTitle,
        createLinkTransform({
          baseUrl: '/algokit/cli',
          pathTransform: (path, context) => {
            const { path: cleanPath, anchor } = extractAnchor(path);

            // Handle any links to algokit.md (regardless of relative path structure)
            if (/(?:^|\/)?(?:\.\.\/)*algokit\.md$/.test(cleanPath)) {
              return `/algokit/cli/overview${anchor}`;
            }

            // Handle any links to features/project.md (now project/overview.md)
            if (
              /(?:^|\/)?(?:\.\.\/)*(?:features\/)?project\.md$/.test(cleanPath)
            ) {
              return `/algokit/cli/project/overview${anchor}`;
            }

            // Handle any links to features/tasks.md (now tasks/overview.md)
            if (
              /(?:^|\/)?(?:\.\.\/)*(?:features\/)?tasks\.md$/.test(cleanPath)
            ) {
              return `/algokit/cli/tasks/overview${anchor}`;
            }

            // Handle any links to cli/index.md (now commands)
            if (/(?:^|\/)?(?:\.\.\/)*(?:cli\/)?index\.md$/.test(cleanPath)) {
              return `/algokit/cli/commands${anchor}`;
            }

            // Handle links to architecture-decisions (external GitHub links)
            if (
              /(?:^|\/)?(?:\.\.\/)*architecture-decisions\/.*\.md$/.test(
                cleanPath,
              )
            ) {
              // Extract just the filename from the relative path
              const filename = cleanPath.replace(/.*\/([^\/]+\.md)$/, '$1');
              return `https://github.com/algorandfoundation/algokit-cli/blob/main/docs/architecture-decisions/${filename}${anchor}`;
            }

            // Special handling for files within projects or tasks subdirectories
            // Check if the current file is within projects or tasks subdirectories
            const isInProjects = context.from.includes(
              'docs/features/projects',
            );
            const isInTasks = context.from.includes('docs/features/tasks');
            if (isInProjects || isInTasks) {
              // Convert any relative parent links (../) to /algokit/cli/
              if (cleanPath.startsWith('../')) {
                const relativePath = cleanPath.replace(/^(?:\.\.\/)+/, '');
                return `/algokit/cli/${removeMarkdownExtension(relativePath)}`;
              }
            }

            // Handle internal links within features
            if (cleanPath.startsWith('./') || !cleanPath.includes('../')) {
              const internalPath = cleanPath
                .replace(/^\.\//, '')
                .replace(/\.md$/, '');
              return `/algokit/cli/${internalPath}${anchor}`;
            }

            // Default handling for other relative paths
            return `/algokit/cli/${removeMarkdownExtension(path)}`;
          },
        }),
      ],
    },
  ],
  enabled: true,
  clear: false,
};
