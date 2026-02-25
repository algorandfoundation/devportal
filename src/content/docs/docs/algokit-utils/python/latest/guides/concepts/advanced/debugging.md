---
title: 'Debugger'
description: 'The AlgoKit Python Utilities package provides a set of debugging tools that can be used to simulate and trace transactions on the Algorand blockchain. These tools and methods are optimized for developers who are building applications on Algorand and need to test and debug their smart contracts via [AlgoKit AVM Debugger extension](https://github.com/algorandfoundation/algokit-avm-vscode-debugger).'
---

The AlgoKit Python Utilities package provides a set of debugging tools that can be used to simulate and trace transactions on the Algorand blockchain. These tools and methods are optimized for developers who are building applications on Algorand and need to test and debug their smart contracts via [AlgoKit AVM Debugger extension](https://marketplace.visualstudio.com/items?itemName=algorandfoundation.algokit-avm-vscode-debugger).

## Configuration

The [`UpdatableConfig`](/docs/algokit-utils/python/latest/api/algokit_utils/config/#updatableconfig) class (source: `src/algokit_utils/config.py`) manages configuration settings for the AlgoKit project. A singleton instance is available as `config`:

```python
from algokit_utils.config import config

config.configure(
    debug=True,
    project_root=Path("/my/project"),
    trace_all=True,
    trace_buffer_size_mb=128,
    max_search_depth=5,
    populate_app_call_resources=False,
)
```

### Config flags

| Flag                          | Type             | Default           | Description                                                                                                                                                 |
| ----------------------------- | ---------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `debug`                       | `bool`           | `False`           | Enables debug mode. When `True`, transaction traces are automatically generated and the logger level is set to `DEBUG`.                                     |
| `project_root`                | `Path \| None`   | Auto-detected     | Root directory used for storing trace files and source maps. Auto-detected by searching up for `.algokit.toml`, or from the `ALGOKIT_PROJECT_ROOT` env var. |
| `trace_all`                   | `bool`           | `False`           | When enabled, simulation traces are persisted for **all** operations, not just failed ones.                                                                 |
| `trace_buffer_size_mb`        | `float`          | `256`             | Maximum disk space (MB) for stored trace files. Oldest traces are cleaned up when the limit is exceeded.                                                    |
| `max_search_depth`            | `int`            | `10`              | Maximum number of parent directories to traverse when auto-detecting `project_root`.                                                                        |
| `populate_app_call_resources` | `bool`           | `True`            | When enabled, automatically populates required resources (accounts, assets, apps, boxes) on application call transactions via simulation.                   |
| `logger`                      | `logging.Logger` | `AlgoKitLogger()` | The logger instance used by the library. Can be replaced with any `logging.Logger`, including a null logger (see below).                                    |

## AlgoKitLogger

[`AlgoKitLogger`](/docs/algokit-utils/python/latest/api/algokit_utils/config/#algokitlogger) is a custom `logging.Logger` subclass that provides fine-grained control over log output. It is the default logger for the library.

### Per-call suppression

Suppress an individual log call by passing `suppress_log=True` in the `extra` dict:

```python
logger.info("This will be suppressed", extra={"suppress_log": True})
logger.info("This will appear normally")
```

When `suppress_log=True` is set, the `_log` method returns immediately without emitting the record.

### Global suppression

To silence all library logging, replace the default logger with a null logger:

```python
from algokit_utils.config import config, AlgoKitLogger

config.configure(logger=AlgoKitLogger.get_null_logger())
```

`get_null_logger()` returns a standard `logging.Logger` with only a `NullHandler` attached and propagation disabled, so no output is produced regardless of log level.

## Debugging utilities

Unlike the TypeScript version (which uses a [separate addon package](https://github.com/algorandfoundation/algokit-utils-ts-debug)), the Python debugging utilities are built directly into `algokit-utils-py`. When debug mode is enabled, AlgoKit Utils will automatically:

- Generate transaction traces compatible with the AVM Debugger
- Manage trace file storage with automatic cleanup
- Provide source map generation for TEAL contracts

### Manual debugging operations

The following methods are provided for manual debugging operations:

- `persist_sourcemaps`: Persists sourcemaps for given TEAL contracts as AVM Debugger-compliant artifacts. Parameters:
  - `sources`: List of `PersistSourceMapInput` sources to generate sourcemaps for
  - `project_root`: Project root directory for storage
  - `client`: `AlgodClient` instance
  - `with_sources`: Whether to include TEAL source files (default: `True`)

- `simulate_and_persist_response`: Simulates transactions and persists debug traces. Parameters:
  - `composer`: `TransactionComposer` containing transactions
  - `project_root`: Project root directory for storage
  - `algod`: `AlgodClient` instance
  - `buffer_size_mb`: Maximum trace storage in MB (default: `None`; when `None` and `trace_all` is enabled, falls back to `config.trace_buffer_size_mb` which defaults to `256`)
  - `result`: Optional pre-existing simulation result

### Trace filename format

The trace files are named in a specific format to provide useful information about the transactions they contain. The format is as follows:

```
${timestamp}_lr${last_round}_${transaction_types}.trace.avm.json
```

Where:

- `timestamp`: The time when the trace file was created in UTC, formatted as `YYYYMMDD_HHMMSS` (e.g., `20220301_123456`).
- `last_round`: The last round when the simulation was performed.
- `transaction_types`: A string representing the types and counts of transactions in the atomic group. Each transaction type is represented as `${count}${type}`, and different transaction types are separated by underscores.

For example, a trace file might be named `20220301_123456_lr1000_2pay_1axfer.trace.avm.json`, indicating that the trace file was created at `2022-03-01 12:34:56 UTC`, the last round was `1000`, and the atomic group contained 2 payment transactions and 1 asset transfer transaction.
