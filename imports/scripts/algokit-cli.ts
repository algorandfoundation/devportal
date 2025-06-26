import {
  convertH1ToFrontmatter,
  stripLinkExtensions,
  changeFeatureLinks,
  changeReferenceLinks,
  correctTypo,
  removeLine,
  changeFromTo,
  removeToc,
} from './src/transformers';
import { processDirectories, processFile } from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';
import { transformRelativeLinks } from '../../scripts/transform-links';

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
      removeLine(
        '> For details on executing `algokit localnet` without `docker` or `podman` refer to the [codespaces](#codespaces) section.',
      ),
    ],
    dest: scriptLocation + '/../../src/content/docs/algokit/algokit-cli',
  },
]);
await processFile([
  {
    src: scriptLocation + '/../repos/algokit-cli/docs/algokit.md',
    transformations: [
      convertH1ToFrontmatter,
      stripLinkExtensions,
      changeFeatureLinks,
      changeReferenceLinks,
      changeFromTo(
        '[AlgoKit quick start](./tutorials/intro)',
        '[AlgoKit Quick Start](/getting-started/algokit-quick-start)',
      ),
      changeFromTo(
        '[Creating AlgoKit templates](./tutorials/algokit-template)',
        '[Creating AlgoKit templates](/algokit/custom-algokit-templates)',
      ),
    ],
    dest:
      scriptLocation +
      '/../../src/content/docs/algokit/algokit-cli/overview.md',
  },
  {
    src:
      scriptLocation + '/../../src/content/docs/algokit/algokit-cli/project.md',
    transformations: [
      // changeFromTo('./project/', './')
    ],
    dest:
      scriptLocation + '/../../src/content/docs/algokit/algokit-cli/project.md',
  },
  {
    src:
      scriptLocation + '/../../src/content/docs/algokit/algokit-cli/tasks.md',
    transformations: [
      // changeFromTo('./tasks/', './')
    ],
    dest:
      scriptLocation + '/../../src/content/docs/algokit/algokit-cli/tasks.md',
  },
]);

await transformRelativeLinks(
  scriptLocation + '/../../src/content/docs/algokit/algokit-cli',
  '/algokit/algokit-cli',
);
