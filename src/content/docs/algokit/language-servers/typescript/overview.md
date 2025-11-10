---
title: Algorand Language Servers
---

The Algorand TypeScript language extension brings language server powered capabilities to your smart contract authoring experience in Visual Studio Code. It extends the results from your installed TypeScript language server to provide Algorand TypeScript specific diagnostics and code actions.

## Features

- Works alongside your installed TypeScript language server
- Algorand TypeScript smart contract-aware code analysis, diagnostics and validation
- Quick fixes for common TypeScript Python issues, helping you learn the Algorand TypeScript language as you build

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/download) 1.80.0 or higher
- [puya-ts](https://www.npmjs.com/package/@algorandfoundation/puya-ts) 1.0.1 or higher

## Quick Start

1. Install this Algorand TypeScript language extension
2. Install the puya-ts package on your system. We recommend installing as a project dev dependency.
3. Enable the Algorand TypeScript language server (`algorandTypeScript.languageServer.enable`) for your workspace (not required if using a new AlgoKit project)
4. Open an Algorand TypeScript smart contract file (.algo.ts)

## Configuration

This extension exposes the following settings:

- `algorandTypeScript.languageServer.enable`: Enables the Algorand TypeScript language server. By default the language server is disabled.
- `algorandTypeScript.languageServer.logLevel`: Configures the verbosity of the messages Algorand TypeScript language server displays in the output window.

## Working with TypeScript Smart Contracts

The extension works alongside the standard TypeScript language server to provide additional Algorand-specific features:

- Smart contract validation and verification, displaying relevant errors and warnings
- Suggested fixes for common issues when working with Algorand TypeScript

## Troubleshooting

If you encounter any issues:

- Ensure the Algorand TypeScript language extension is installed and enabled
- Verify the minimum required version of puya-ts is installed and available
- Check the "Output" panel in VS Code and select "Algorand TypeScript Language Server" from the dropdown and look for any errors
