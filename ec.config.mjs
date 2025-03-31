import mocha from '@catppuccin/vscode/themes/mocha.json' with { type: 'json' };
import latte from '@catppuccin/vscode/themes/latte.json' with { type: 'json' };
import teal from './src/utils/teal-syntax.json' with { type: 'json' };


/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  themes: [latte, mocha],
  shiki: {
    bundledLangs: ['python', 'typescript', 'teal', 'abnf'],
    langs: [{
      ...teal,
      name: 'teal',
    }],
  },
  styleOverrides: {
    borderRadius: '0.5rem',
    borderColor: 'var(--sl-color-gray-3)',
  },
};
