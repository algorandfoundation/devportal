---
title: Algorand Language Servers
---

The Algorand Python language extension brings language server powered capabilities to your smart contract authoring experience in Visual Studio Code. It extends the results from your installed Python language server to provide Algorand Python specific diagnostics and code actions.

This extension depends on the official Python extension for Visual Studio Code. We recommended using it in the default configuration with Pylance.

:::note
 Algorand Python language server has some latency between making a change to a document and updated diagnostics being displayed. This will be addressed in a future update.
:::

## Features
- Works alongside your installed Python language server
- Automatically discovers the PuyaPy version installed in your project venv
- Algorand Python smart contract-aware code analysis, diagnostics and validation
- Quick fixes for common Algorand Python issues, helping you learn the Algorand Python language as you build

## Requirements
- [Visual Studio Code](https://code.visualstudio.com/download) 1.80.0 or higher
- [Python extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Python](https://www.python.org/downloads/) 3.12 or higher
- [PuyaPy](https://pypi.org/project/puyapy/) 5.3.0 or higher

## Quick Start
1. Install the Python extension for Visual Studio Code
2. Install this Algorand Python language extension
3. Install the PuyaPy package on your system. We recommend installing as a project dev dependency in your project venv.
4. Enable the Algorand Python language server (`algorandPython.languageServer.enable`) for your workspace (not required if using a new AlgoKit project)
5. Open a Python smart contract file (.py)

## Configuration
This extension exposes the following settings:
- `algorandPython.languageServer.enable`: Enables the Algorand Python language server. By default the language server is disabled.
- `algorandPython.languageServer.logLevel`: Configures the verbosity of the messages Algorand Python language server displays in the output window.
- `algorandPython.languageServer.debounceInterval`: Configures the delay between receiving a code change and refreshing related diagnostics.

## Working with Python Smart Contracts
The extension works alongside the standard Python language server to provide additional Algorand-specific features:
- Smart contract validation and verification, displaying relevant errors and warnings
- Suggested fixes for common issues when working with Algorand Python

## Troubleshooting
If you encounter any issues:
- Ensure both Python and Algorand Python extensions are installed and enabled
- Verify the minimum required version of PuyaPy is installed and available to the active python interpreter
- Check the "Output" panel in VS Code and select "Algorand Python Language Server" from the dropdown and look for any errors
