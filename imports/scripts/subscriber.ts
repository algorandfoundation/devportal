import {
    convertH1ToFrontmatter,
    removeTitleBackticks,
    stripLinkExtensions,
} from './src/transformers';
import { processFile } from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// AlgoKit Subscriber - Typescript
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-subscriber-ts/docs/subscriber.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeTitleBackticks,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/subscribers/ts/subscriber.md'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-subscriber-ts/docs/subscriptions.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeTitleBackticks,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/subscribers/ts/subscriptions.md'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-subscriber-ts/docs/README.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeTitleBackticks,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/subscribers/ts/overview.md'
    },
]);

// AlgoKit Subscriber - Python
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-subscriber-py/docs/subscriber.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeTitleBackticks,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/subscribers/py/subscriber.md'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-subscriber-py/docs/subscriptions.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeTitleBackticks,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/subscribers/py/subscriptions.md'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-subscriber-py/docs/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeTitleBackticks,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/subscribers/py/overview.md'
    },
]);