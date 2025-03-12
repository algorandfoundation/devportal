import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
    changeFeatureLinks,
    changeReferenceLinks,
    correctTypo,
    removeLine,
    changeFromTo,
    removeToc
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// Algokit-CLI
await processDirectories([
    {
        src: scriptLocation + '/../repos/algokit-cli/docs/features',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            changeFeatureLinks,
            changeReferenceLinks,
            correctTypo,
            removeLine('> For details on executing `algokit localnet` without `docker` or `podman` refer to the [codespaces](#codespaces) section.')
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/algokit-cli'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-cli/docs/cli/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            changeFeatureLinks,
            changeReferenceLinks,
            removeToc,
        ],
        dest: scriptLocation + '/../../src/content/docs/reference/algokit-cli/reference.md'
    },
    {
        src: scriptLocation + '/../repos/algokit-cli/docs/algokit.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            changeFeatureLinks,
            changeReferenceLinks,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/algokit-cli/overview.md'
    },
    {
        src: scriptLocation + '/../../src/content/docs/algokit/algokit-cli/project.md',
        transformations: [changeFromTo('./project/', './')],
        dest: scriptLocation + '/../../src/content/docs/algokit/algokit-cli/project/overview.md'
    },
    {
        src: scriptLocation + '/../../src/content/docs/algokit/algokit-cli/tasks.md',
        transformations: [changeFromTo('./tasks/', './')],
        dest: scriptLocation + '/../../src/content/docs/algokit/algokit-cli/tasks/overview.md'
    },
]);
