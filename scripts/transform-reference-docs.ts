import { transformRelativeLinks } from './transform-links';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

/* algokit-utils-ts */
await transformRelativeLinks(
  scriptLocation +
    '/../src/content/docs/reference/algokit-utils-ts/API Reference',
  '/reference/algokit-utils-ts/API Reference',
);

/* algokit-utils-py */
await transformRelativeLinks(
  scriptLocation +
    '/../src/content/docs/reference/algokit-utils-py/API Reference',
  '/reference/algokit-utils-py/API Reference',
);

/* algokit-cli */
await transformRelativeLinks(
  scriptLocation + '/../src/content/docs/algokit/algokit-cli',
  '/algokit/algokit-cli',
);
