# Algorand Developer Portal

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

The official Algorand Developer Portal - a comprehensive documentation site for Algorand blockchain developers.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Key Dependencies](#key-dependencies)
- [Available Commands](#available-commands)
- [Configuration](#configuration)
- [Content Management](#content-management)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/en)** - JavaScript runtime
- **[pnpm](https://pnpm.io)** - Fast, disk space efficient package manager
- **[Python](https://www.python.org/)** - Required for importing Python documentation
- **[Poetry](https://python-poetry.org/)** - Python dependency management
- **[D2](https://github.com/terrastruct/d2/blob/master/docs/INSTALL.md)** - Diagram scripting language for generating diagrams

## Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/algorandfoundation/devportal.git
   cd devportal
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

   Install the D2 diagram binary

   ```bash
   brew install d2
   ```

   See d2 [docs](https://github.com/terrastruct/d2/blob/master/docs/INSTALL.md) for other installation options.

3. **Initialize submodules and import content**

   ```bash
   pnpm run import
   ```

4. **Start the development server**

   ```bash
   pnpm run dev
   ```

   The site will be available at `http://localhost:4321`

## Project Structure

```
.
├── .github/
│   └── workflows/          # CI/CD workflows
├── examples/               # Code examples
│   ├── algokit/           # AlgoKit examples
│   └── smart-contracts/   # Smart contract examples
├── imports/               # External content import system
│   ├── build/             # Build scripts for imported content
│   ├── configs/           # Import configurations
│   ├── repos/             # Git submodules for external repos
│   ├── scripts/           # Import automation scripts
│   └── transforms/        # Content transformation utilities
├── public/                # Static assets (favicons, etc.)
├── scripts/               # Build and utility scripts
│   ├── generate-opcode-list.js    # Generate Algorand opcodes list
│   └── manage-sidebar-meta.js     # Sidebar management
├── src/
│   ├── assets/            # Images and media files
│   │   └── imports/       # Imported assets from external repos
│   ├── components/        # Reusable Astro/React components
│   ├── content/
│   │   ├── docs/          # Documentation markdown files
│   │   └── config.ts      # Content collections configuration
│   ├── icons/             # Custom SVG icons
│   ├── styles/
│   │   └── global.css     # Global styles and Tailwind customizations
│   └── utils/             # Utility functions
├── templates/             # Handlebars templates for generated content
├── astro.config.mjs       # Astro configuration
├── ec.config.mjs          # Editorial comments configuration
├── package.json           # Project dependencies and scripts
├── tailwind.config.mjs    # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Key Dependencies

### Core Framework

- **[Astro](https://astro.build)** - Modern static site builder
- **[@astrojs/starlight](https://starlight.astro.build/)** - Documentation framework built on Astro
- **[React](https://react.dev/)** - UI component library for interactive elements

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@astrojs/starlight-tailwind](https://www.npmjs.com/package/@astrojs/starlight-tailwind)** - Tailwind integration for Starlight
- **[@catppuccin/vscode](https://www.npmjs.com/package/@catppuccin/vscode)** - Code theme

### Content & Documentation

- **[@larkiny/astro-github-loader](https://www.npmjs.com/package/@larkiny/astro-github-loader)** - Import documentation from GitHub repositories
- **[starlight-typedoc](https://www.npmjs.com/package/starlight-typedoc)** - Generate API docs from TypeScript
- **[starlight-openapi](https://www.npmjs.com/package/starlight-openapi)** - OpenAPI/Swagger documentation
- **[starlight-auto-sidebar](https://www.npmjs.com/package/starlight-auto-sidebar)** - Automatic sidebar generation
- **[astro-d2](https://www.npmjs.com/package/astro-d2)** - D2 diagram integration

### Utilities

- **[octokit](https://github.com/octokit/octokit.js)** - GitHub API client
- **[marked](https://marked.js.org/)** - Markdown parser
- **[js-yaml](https://www.npmjs.com/package/js-yaml)** - YAML parser
- **[sharp](https://sharp.pixelplumbing.com/)** - Image processing

### Development Tools

- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## Available Commands

All commands are run from the root of the project:

### Development

| Command            | Description                                |
| ------------------ | ------------------------------------------ |
| `pnpm run dev`     | Start local dev server at `localhost:4321` |
| `pnpm run start`   | Alias for `pnpm run dev`                   |
| `pnpm run build`   | Build production site to `./dist/`         |
| `pnpm run preview` | Preview production build locally           |

### Code Quality

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm run lint`     | Run ESLint, Prettier, and Astro checks |
| `pnpm run lint:fix` | Fix linting issues automatically       |

### Content Generation

| Command                          | Description                             |
| -------------------------------- | --------------------------------------- |
| `pnpm run generate-opcode-list`  | Generate Algorand opcodes documentation |

### Content Import (Legacy submodules approach; will be phased out)

| Command                               | Description                              |
| ------------------------------------- | ---------------------------------------- |
| `pnpm run init:submodules`            | Initialize git submodules                |
| `pnpm run import:poetry`              | Install Python dependencies via Poetry   |
| `pnpm run import:algorand-python`     | Import Algorand Python documentation     |
| `pnpm run import:algorand-typescript` | Import Algorand TypeScript documentation |
| `pnpm run import`                     | Run all legacy import steps              |

### Content Import (GitHub Loader)

| Command                   | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| `pnpm run import:dry-run` | Preview GitHub content imports without making changes               |
| `pnpm run import:all`     | Import all content from GitHub, regenerate sidebar, and fix linting |
| `pnpm run import:force`   | Force re-import all content, ignoring cache                         |

### Imported Content Cleanup

| Command                   | Description                          |
| ------------------------- | ------------------------------------ |
| `pnpm run clean:all`      | Remove all imported content          |
| `pnpm run clean:arcs`     | Remove ARC standards content         |
| `pnpm run clean:nodekit`  | Remove NodeKit documentation         |
| `pnpm run clean:cli`      | Remove AlgoKit CLI documentation     |
| `pnpm run clean:utils-ts` | Remove AlgoKit Utils TypeScript docs |
| `pnpm run clean:utils-py` | Remove AlgoKit Utils Python docs     |

### Auto-Sidebar Management

The `starlight-auto-sidebar` plugin enables you to customize the order and appearance of auto-generated sidebar entries, including cascading frontmatter configuration to files within a folder. The following commands enable you to quickly generate the `_meta.yml` files from the config defined in `auto-sidebar-config.yml`.

| Command                      | Description                             |
| ---------------------------- | --------------------------------------- |
| `pnpm run sidebar:generate`  | Clean and regenerate sidebar metadata   |
| `pnpm run sidebar:update`    | Update existing sidebar metadata        |
| `pnpm run sidebar:overwrite` | Overwrite all sidebar metadata          |
| `pnpm run sidebar:preview`   | Preview sidebar changes without writing |

### Astro CLI

| Command                    | Description                                |
| -------------------------- | ------------------------------------------ |
| `pnpm run astro ...`       | Run Astro CLI commands (e.g., `astro add`) |
| `pnpm run astro -- --help` | Get help for Astro CLI                     |

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```bash
# GitHub API token for importing documentation (only needed if you are importing updated reference docs)
GITHUB_TOKEN=your_github_token_here

# Import configuration
IMPORT_GITHUB=true          # Enable GitHub content import
IMPORT_DRY_RUN=false        # Preview imports without writing
FORCE_IMPORT=false          # Force re-import ignoring cache

```

### Astro Configuration

The main Astro configuration is in `astro.config.mjs`. Key configurations include:

- **Starlight settings** - Site title, sidebar, social links
- **Content collections** - Documentation structure
- **Integrations** - React, Tailwind, D2, OpenAPI, etc.

### Tailwind Configuration

Customize Tailwind in `tailwind.config.mjs`. Additional custom styles can be added to `src/styles/global.css`.

## Content Management

### Writing Documentation

1. Documentation files are stored in `src/content/docs/`
2. Use `.md` or `.mdx` format
3. Files are automatically routed based on their path
4. Front matter is used for page metadata

Example:

```markdown
---
title: Your Page Title
description: Page description for SEO
---

Your content here...
```

### Images and Assets

- **Images**: Place in `src/assets/` and reference with relative paths
- **Icons**: SVG icons go in `src/icons/` for use with `astro-icon`
- **Static assets**: Place in `public/` directory (e.g., favicons)

### Importing External Documentation

The project uses `@larkiny/astro-github-loader` to import documentation from external repositories. Configure imports in `imports/configs/`. See the package [documentation](https://github.com/larkiny/starlight-github-loader/blob/main/packages/astro-github-loader/README.md) for details on how to configure external documentation imports.

## Contributing

See the [CONTRIBUTING.md](./CONTRIBUTING.md) guide for detailed information on how to submit changes.

### Development Workflow

1. Create a feature branch
2. Make your changes
3. Run `pnpm run lint:fix` to ensure code quality
4. Test locally with `pnpm run build`
5. Submit a pull request

### Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](code_of_conduct.md).

## Useful Links

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Algorand Developer Portal](https://dev.algorand.co)
- [Algorand Foundation](https://algorand.co)

## License

See [LICENSE](./LICENSE) for more information.
