---
title: Getting Started with AlgoKit CLI
description: Learn how to install and use AlgoKit CLI
---

# Getting Started

This guide walks you through installing AlgoKit CLI and creating your first project.

## Prerequisites

- Python 3.10+
- pipx (recommended) or pip
- Docker (for LocalNet)

## Installation

```bash
# Install with pipx (recommended)
pipx install algokit

# Or with pip
pip install algokit
```

## Verify Installation

```bash
algokit --version
```

## Create Your First Project

```bash
algokit init my-project
cd my-project
algokit localnet start
```
