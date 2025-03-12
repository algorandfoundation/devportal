import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
    removeLine,
    changeFromTo,
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// AlgoKit Utils - TypeScript
await processDirectories([
    {
        src: scriptLocation + '/../repos/algokit-utils-ts/docs/capabilities',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeLine('![App deployment lifecycle](../images/lifecycle.jpg)'),
            removeLine('![App deployment lifecycle](images/lifecycle.jpg)'),
            removeLine('![Smart Contract Development Lifecycle](./lifecycle.jpg)'),
            changeFromTo('[above design](#design)', 'above design'),
            changeFromTo('[box names](#boxname)', 'box names'),
            changeFromTo(' ([both of which are optional](#client-management))', ''),
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/utils/typescript'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-utils-ts/docs/README.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/utils/typescript/overview.md'
    },
]);

// AlgoKit Utils - Python
await processDirectories([
    {
        src: scriptLocation + '/../repos/algokit-utils-py/docs/markdown/capabilities',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeLine('![App deployment lifecycle](../images/lifecycle.jpg)'),
            removeLine('![App deployment lifecycle](images/lifecycle.jpg)'),
            removeLine('![Smart Contract Development Lifecycle](./lifecycle.jpg)'),
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/utils/python'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-utils-py/docs/markdown/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/utils/python/overview.md'
    },
]);