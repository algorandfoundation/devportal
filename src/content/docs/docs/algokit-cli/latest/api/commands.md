---
title: CLI Commands Reference
description: Complete reference for all AlgoKit CLI commands
---

# CLI Commands Reference

## `algokit init`

Initialize a new AlgoKit project from a template.

```bash
algokit init [OPTIONS] [DIRECTORY_NAME]
```

### Options

- `--template`, `-t`: Template name to use
- `--no-git`: Skip git initialization
- `--defaults`: Use default values

## `algokit localnet`

Manage the local Algorand network.

```bash
algokit localnet [COMMAND]
```

### Subcommands

- `start`: Start LocalNet
- `stop`: Stop LocalNet
- `reset`: Reset LocalNet state
- `status`: Show LocalNet status

## `algokit compile`

Compile smart contracts.

```bash
algokit compile [OPTIONS] [CONTRACT_PATH]
```
