import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { flavors } from '@catppuccin/palette';
import fs from 'node:fs';

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  plugins: [pluginLineNumbers()],
  // themes: [flavors.latte, flavors.mocha],
  themes: ['material-theme'],
  shiki: {
    langs: [JSON.parse(fs.readFileSync('src/utils/teal-syntax.json', 'utf-8'))],
  },
};
