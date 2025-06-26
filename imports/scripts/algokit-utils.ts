import {
  convertH1ToFrontmatter,
  stripLinkExtensions,
  removeLine,
  changeFromTo,
  changeFromToRegExp,
} from './src/transformers';
import { processDirectories, processFile } from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';
import { transformRelativeLinks } from '../../scripts/transform-links';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// AlgoKit Utils - TypeScript
await processDirectories([
  {
    src: scriptLocation + '/../repos/algokit-utils-ts/docs/capabilities',
    transformations: [
      convertH1ToFrontmatter,
      stripLinkExtensions,
      changeFromTo('../code', './code'),
      removeLine('![App deployment lifecycle](../images/lifecycle.jpg)'),
      removeLine('![App deployment lifecycle](images/lifecycle.jpg)'),
      removeLine('![Smart Contract Development Lifecycle](./lifecycle.jpg)'),
      changeFromTo('[above design](#design)', 'above design'),
      changeFromTo('[box names](#boxname)', 'box names'),
      changeFromTo(' ([both of which are optional](#client-management))', ''),
      changeFromToRegExp(/\[(.+?)\]\(\.\/code\/.+?\)/g, '$1'),
    ],
    dest: scriptLocation + '/../../src/content/docs/algokit/utils/typescript',
  },
]);
await processFile([
  {
    src: scriptLocation + '/../repos/algokit-utils-ts/docs/README.md',
    transformations: [
      convertH1ToFrontmatter,
      stripLinkExtensions,
      changeFromTo('./capabilities/', '/algokit/utils/typescript/'),
      changeFromTo('capabilities/', '/algokit/utils/typescript/'),
    ],
    dest:
      scriptLocation +
      '/../../src/content/docs/algokit/utils/typescript/overview.md',
  },
]);

await transformRelativeLinks(
  scriptLocation +
    '/../../src/content/docs/reference/algokit-utils-ts/API Reference',
  '/reference/algokit-utils-ts/API Reference',
);

// AlgoKit Utils - Python
await processDirectories([
  {
    src:
      scriptLocation + '/../repos/algokit-utils-py/docs/markdown/capabilities',
    transformations: [
      convertH1ToFrontmatter,
      stripLinkExtensions,
      removeLine('![App deployment lifecycle](../images/lifecycle.jpg)'),
      removeLine('![App deployment lifecycle](images/lifecycle.jpg)'),
      removeLine('![Smart Contract Development Lifecycle](./lifecycle.jpg)'),
    ],
    dest: scriptLocation + '/../../src/content/docs/algokit/utils/python',
  },
]);
await processFile([
  {
    src: scriptLocation + '/../repos/algokit-utils-py/docs/markdown/index.md',
    transformations: [
      convertH1ToFrontmatter,
      stripLinkExtensions,
      changeFromTo('./capabilities/', '/algokit/utils/python/'),
      changeFromTo('capabilities/', '/algokit/utils/python/'),
      changeFromTo('#ensure-funded', '#ensure_funded'),
    ],
    dest:
      scriptLocation +
      '/../../src/content/docs/algokit/utils/python/overview.md',
  },
]);

await transformRelativeLinks(
  scriptLocation +
    '/../../src/content/docs/reference/algokit-utils-py/API Reference',
  '/reference/algokit-utils-py/API Reference',
);
