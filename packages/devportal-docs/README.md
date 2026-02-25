# @algorandfoundation/devportal-docs

CLI tools, types, and theme for publishing library docs to the Algorand Developer Portal.

This package replaces the manual template scripts that library repos previously copied. Install it as a dev dependency and the devportal's CI composite action will call `docs:devportal` to prepare your Starlight site for integration.

## Quick Start

```bash
# 1. Install
npm install -D @algorandfoundation/devportal-docs

# 2. Scaffold & validate (run from your docs/ directory)
npx devportal-docs init

# 3. Verify the build
npm run docs:devportal
```

`init` will:
- Add a `docs:devportal` script to your `package.json` (`astro build && devportal-docs build`)
- Check that your GitHub workflow references the devportal composite action
- Check that the theme CSS is referenced in `astro.config.mjs`

## CLI Commands

| Command | Description |
| --- | --- |
| `devportal-docs init` | Scaffold and validate devportal integration |
| `devportal-docs build` | Run all build steps in sequence |
| `devportal-docs normalize-links` | Normalize relative markdown links to absolute paths |
| `devportal-docs build-sidebar` | Serialize `sidebar.config.ts` to `sidebar.json` |
| `devportal-docs build-manifest` | Write `manifest.json` with site base metadata |

### Options

- `--base <path>` — Override the auto-detected site base (read from `astro.config.mjs`)
- `--dry-run` — (init only) Show what would change without modifying files
- `--verbose` — Extra logging

## Theme Setup

The package ships brand CSS and fonts. Add them to your Starlight `customCss` in `astro.config.mjs`:

```js
import { css, fonts } from '@algorandfoundation/devportal-docs/theme';

export default defineConfig({
  integrations: [
    starlight({
      customCss: [css, fonts],
    }),
  ],
});
```

This gives your library site the same color palette, font stack, and Starlight overrides used by the main developer portal.

## Type Exports

For `sidebar.config.ts`, import the sidebar types:

```ts
import type { DevportalSidebarConfig } from '@algorandfoundation/devportal-docs/types';

export default {
  sidebar: [
    { label: 'Guides', autogenerate: { directory: 'guides' } },
    { label: 'API Reference', autogenerate: { directory: 'api' } },
  ],
} satisfies DevportalSidebarConfig;
```

The `DevportalSidebarConfig` interface expects:
- `sidebar` — Array of Starlight-compatible sidebar entries
- `devportalFallbacks` — (optional) Serializable replacements for non-serializable entries (e.g. TypeDoc sidebar groups)

## How the Build Pipeline Works

1. Your library's CI calls the devportal composite action
2. The action installs dependencies and runs `npm run docs:devportal`
3. `docs:devportal` runs `astro build && devportal-docs build`, which:
   - **normalize-links** — Rewrites relative markdown links to use the site's base path, lowercases content paths, and strips dead links
   - **build-sidebar** — Dynamically imports `sidebar.config.ts`, filters non-serializable entries, and writes `dist-devportal/sidebar.json`
   - **build-manifest** — Writes `dist-devportal/manifest.json` with the site's base path and a timestamp
4. The composite action publishes the `dist-devportal/` artifact to the developer portal

## Directory Conventions

Library docs are expected to follow this structure:

```
docs/
├── astro.config.mjs
├── sidebar.config.ts
├── package.json
└── src/content/docs/
    ├── guides/       # Authored documentation
    └── api/          # Generated API reference
```

## License

MIT
