import { transformRelativeLinks } from './transform-links';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

/* algokit-utils-ts */
await transformRelativeLinks(
  scriptLocation +
    '/../src/content/docs/reference/algokit-utils-ts/api-reference',
  '/reference/algokit-utils-ts/api-reference',
);

/* algokit-utils-py */
await transformRelativeLinks(
  scriptLocation +
    '/../src/content/docs/reference/algokit-utils-py/api-reference',
  '/reference/algokit-utils-py/api-reference',
);

/* algokit-cli */
await transformRelativeLinks(
  scriptLocation + '/../src/content/docs/algokit/algokit-cli',
  '/algokit/algokit-cli',
);

/* algorand python */
await transformRelativeLinks(
  scriptLocation + '/../src/content/docs/reference/algorand-python',
  '/reference/algorand-python',
);

/* algorand typescript */
await transformRelativeLinks(
  scriptLocation + '/../src/content/docs/reference/algorand-typescript',
  '/reference/algorand-typescript',
);

/* REST API */
await transformRelativeLinks(
  scriptLocation + '/../src/content/docs/reference/rest-api',
  '/reference/rest-api',
);
