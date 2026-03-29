# Algorand Developer Portal

[![Acceptance](https://github.com/algorandfoundation/devportal/actions/workflows/acceptance.yml/badge.svg)](https://github.com/algorandfoundation/devportal/actions/workflows/acceptance.yml)
[![Portal](https://img.shields.io/website?url=https%3A%2F%2Fdev.algorand.co&label=dev.algorand.co)](https://dev.algorand.co)
[![Last Commit](https://img.shields.io/github/last-commit/algorandfoundation/devportal)](https://github.com/algorandfoundation/devportal/commits)
[![Contributors](https://img.shields.io/github/contributors/algorandfoundation/devportal)](https://github.com/algorandfoundation/devportal/graphs/contributors)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Astro](https://img.shields.io/badge/Astro_v5-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Starlight](https://img.shields.io/badge/Starlight_v0.37-EF8E19?logo=astro&logoColor=white)](https://starlight.astro.build/)
[![React](https://img.shields.io/badge/React_v19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

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

- **[Node.js](https://nodejs.org/en)** (v18+) - JavaScript runtime
- **[pnpm](https://pnpm.io)** (v10.6+) - Fast, disk space efficient package manager
- **[D2](https://github.com/terrastruct/d2/blob/master/docs/INSTALL.md)** - Diagram scripting language for generating diagrams

## Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/algorandfoundation/devportal.git
   cd devportal
   ```

2. **Install D2 diagram binary**

   ```bash
   brew install d2
   ```

   See D2 [docs](https://github.com/terrastruct/d2/blob/master/docs/INSTALL.md) for other installation options.

3. **Install dependencies**

   ```bash
   pnpm install
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
├── imports/
│   ├── configs/           # GitHub loader import configurations
│   └── transforms/        # Content transformation utilities
├── public/                # Static assets (favicons, etc.)
├── scripts/               # Build and utility scripts
│   ├── clean-docs-import.ts       # Clear imported documentation
│   ├── generate-opcode-list.js    # Generate Algorand opcodes list
│   ├── manage-sidebar-meta.ts     # Sidebar metadata generator
│   └── prose-check.ts             # AI-powered prose quality checker
├── src/
│   ├── assets/            # Images and media files
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

| Command                         | Description                             |
| ------------------------------- | --------------------------------------- |
| `pnpm run generate-opcode-list` | Generate Algorand opcodes documentation |

### Content Import

Documentation is imported from external GitHub repositories using `@larkiny/astro-github-loader`. Import configurations are defined in `imports/configs/`.

| Command                   | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| `pnpm run import:docs`    | Import all content from GitHub, regenerate sidebar, and fix linting |
| `pnpm run import:force`   | Force re-import all content, ignoring cache                         |
| `pnpm run import:dry-run` | Preview GitHub content imports without making changes               |
| `pnpm run import:clear`   | Remove all imported documentation content                           |

### Auto-Sidebar Management

The `starlight-auto-sidebar` plugin enables you to customize the order and appearance of auto-generated sidebar entries, including cascading frontmatter configuration to files within a folder. The following commands generate `_meta.yml` files from the `sidebarMetadata` configs defined in each library's `imports/configs/{lib}/sidebar.config.ts`.

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

The following environment variables can be configured:

| Variable                       | Description                                      | Default    |
| ------------------------------ | ------------------------------------------------ | ---------- |
| `GITHUB_TOKEN`                 | GitHub API token (required for importing docs)   | -          |
| `IMPORT_GITHUB`                | Enable GitHub content import                     | `false`    |
| `IMPORT_DRY_RUN`               | Preview imports without writing files            | `false`    |
| `FORCE_IMPORT`                 | Force re-import, ignoring cache                  | `false`    |
| `PUBLIC_KAPA_INTEGRATION_ID`   | [Kapa.ai](https://kapa.ai) integration ID for the AI chat panel | -          |
| `OPENAI_API_KEY`               | OpenAI API key for the prose checker             | -          |
| `PROSE_CHECK_ENABLED`          | Enable AI prose quality checking                 | `false`    |
| `PROSE_CHECK_MODE`             | Prose checker mode (`warn` or `error`)           | `warn`     |
| `PROSE_CHECK_MODEL`            | OpenAI model for prose checking                  | `gpt-4o-mini` |
| `PROSE_CHECK_SENSITIVITY`      | Prose checker sensitivity level                  | `medium`   |
| `PROSE_CHECK_EXCLUDE`          | Glob pattern for paths to exclude from checking  | `src/content/docs/reference/` |

Set these in your shell or use your preferred environment management tool.

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
