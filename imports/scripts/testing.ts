import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// AlgoKit TypeScript Testing
await processDirectories([
    {
        src: scriptLocation + '/../repos/algorand-typescript-testing/docs/testing-guide',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/typescript'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../../src/content/docs/algokit/unit-testing/typescript/index.md',
        transformations: [],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/typescript/overview.md'
    },
]);

// AlgoKit Python Testing
await processDirectories([
    {
        src: scriptLocation + '/../repos/algorand-python-testing/docs/testing-guide',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/python'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../../src/content/docs/algokit/unit-testing/python/index.md',
        transformations: [],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/python/overview.md'
    },
]);