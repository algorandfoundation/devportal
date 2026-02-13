/**
 * Library logo registry.
 *
 * Maps library slugs to their SVG logo assets for use in SiteTitle.
 * Adding a new library without a logo entry here will cause a compile error.
 */
import type { ImageMetadata } from 'astro';
import type { LibrarySlug } from '../types';

import UtilsLogo from '../../src/assets/images/utils.svg';
import CliLogo from '../../src/assets/images/cli.svg';
import AlgorandPythonLogo from '../../src/assets/images/algorand-python.svg';
import AlgorandTypeScriptLogo from '../../src/assets/images/algorand-typescript.svg';
import SubscriberLogo from '../../src/assets/images/subscriber.svg';
import NodeKitLogo from '../../src/assets/images/nodekit.svg';

export const libraryLogos: Record<string, ImageMetadata> = {
  'algokit-utils': UtilsLogo,
  'algokit-cli': CliLogo,
  'algorand-python': AlgorandPythonLogo,
  'algorand-typescript': AlgorandTypeScriptLogo,
  'algokit-subscriber': SubscriberLogo,
  nodekit: NodeKitLogo,
} satisfies Record<LibrarySlug, ImageMetadata>;
