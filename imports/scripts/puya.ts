import {
  convertH1ToFrontmatter,
  stripLinkExtensions,
  replaceTitleColon,
  lowercaseInternalLinks,
  changeFromToRegExp,
  changeFromTo,
  removeLine,
} from './src/transformers';
import { processDirectories, processFile } from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// Algorand Python
await processDirectories([
  {
    src: scriptLocation + '/../repos/puya/docs/',
    pattern: /^lg-/,
    transformations: [
      convertH1ToFrontmatter,
      stripLinkExtensions,
      replaceTitleColon,
      lowercaseInternalLinks,
      changeFromTo(
        '[template variables](#within-other-contracts)',
        'template variables',
      ),
      changeFromTo('[ARC4](#arc4-contracts)', 'ARC4'),
      changeFromToRegExp(/\[(.+?)\]\(.*?#algopy\..*?\)/g, '$1'),
    ],
    dest: scriptLocation + '/../../src/content/docs/algokit/languages/python',
  },
]);
await processFile([
  {
    src: scriptLocation + '/../repos/puya/docs/index.md',
    transformations: [
      convertH1ToFrontmatter,
      stripLinkExtensions,
      replaceTitleColon,
      lowercaseInternalLinks,
      changeFromToRegExp(/\[(.+?)\]\(.*?#algopy\..*?\)/g, '$1'),
    ],
    dest:
      scriptLocation +
      '/../../src/content/docs/algokit/languages/python/overview.md',
  },
  {
    src: scriptLocation + '/../repos/puya/docs/language-guide.md',
    transformations: [
      convertH1ToFrontmatter,
      stripLinkExtensions,
      replaceTitleColon,
      lowercaseInternalLinks,
      changeFromToRegExp(/\[(.+?)\]\(.*?#algopy\..*?\)/g, '$1'),
    ],
    dest:
      scriptLocation +
      '/../../src/content/docs/algokit/languages/python/language-guide.md',
  },
]);
