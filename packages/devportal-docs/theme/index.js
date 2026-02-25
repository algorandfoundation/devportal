import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Path to the brand tokens + Starlight color overrides CSS file. */
export const css = join(__dirname, 'theme.css');

/** Path to the font-face declarations CSS file. */
export const fonts = join(__dirname, 'fonts.css');
