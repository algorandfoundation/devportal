import mocha from '@catppuccin/vscode/themes/mocha.json' with { type: 'json' };
import latte from '@catppuccin/vscode/themes/latte.json' with { type: 'json' };
import teal from './src/utils/teal-syntax.json' with { type: 'json' };


const stub = {
  "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
  "patterns": [],
  "scopeName": "source.txt"
}


/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  themes: [latte, mocha],
  shiki: {
    bundledLangs: ['python', 'typescript', 'teal', 'abnf', 'TEAL'],
    langs: [
      {
       ...stub,
       name: 'none'
      },
      {
        ...stub,
        name: 'default'
      },
      teal,
      {
      ...teal,
      name: 'teal',
    }],
  },
  styleOverrides: {
    borderRadius: '0.5rem',
    borderColor: 'var(--sl-color-gray-3)',
  },
};
