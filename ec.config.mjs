import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { flavors } from '@catppuccin/palette';

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  plugins: [pluginLineNumbers()],
  // themes: [flavors.latte, flavors.mocha],
  themes: ['material-theme'],
}