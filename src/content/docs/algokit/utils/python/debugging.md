---
title: Debugger
---

The AlgoKit Python Utilities package provides a set of debugging tools that can be used to simulate and trace transactions on the Algorand blockchain. These tools and methods are optimized for developers who are building applications on Algorand and need to test and debug their smart contracts via [AlgoKit AVM Debugger extension](https://marketplace.visualstudio.com/items?itemName=algorandfoundation.algokit-avm-vscode-debugger).

## Configuration

The `config.py` file contains the `UpdatableConfig` class which manages and updates configuration settings for the AlgoKit project.

- `debug`: Indicates whether debug mode is enabled.
- `project_root`: The path to the project root directory. Can be ignored if you are using `algokit_utils` inside an `algokit` compliant project (containing `.algokit.toml` file). For non algokit compliant projects, simply provide the path to the folder where you want to store sourcemaps and traces to be used with [`AlgoKit AVM Debugger`](https://github.com/algorandfoundation/algokit-avm-vscode-debugger). Alternatively you can also set the value via the `ALGOKIT_PROJECT_ROOT` environment variable.
- `trace_all`: Indicates whether to trace all operations. Defaults to false, this means that when debug mode is enabled, any (or all) application client calls performed via `algokit_utils` will store responses from `simulate` endpoint. These files are called traces, and can be used with `AlgoKit AVM Debugger` to debug TEAL source codes, transactions in the atomic group and etc.
- `trace_buffer_size_mb`: The size of the trace buffer in megabytes. By default uses 256 megabytes. When output folder containing debug trace files exceedes the size, oldest files are removed to optimize for storage consumption.
- `max_search_depth`: The maximum depth to search for a an `algokit` config file. By default it will traverse at most 10 folders searching for `.algokit.toml` file which will be used to assume algokit compliant project root path.
- `populate_app_call_resources`: Indicates whether to populate app call resources. Defaults to false, which means that when debug mode is enabled, any (or all) application client calls performed via `algokit_utils` will not populate app call resources.
- `logger`: A custom logger to use. Defaults to [`algokit_utils.config.AlgoKitLogger`](../autoapi/algokit_utils/config/index#algokit_utils.config.AlgoKitLogger) instance.

The `configure` method can be used to set these attributes.

To enable debug mode in your project you can configure it as follows:

```python
from algokit_utils.config import config

config.configure(
    debug=True,
    project_root=Path("./my-project"),
    trace_all=True,
    trace_buffer_size_mb=512,
    max_search_depth=15,
    populate_app_call_resources=True,
)
```

## `AlgoKitLogger`

The `AlgoKitLogger` is a custom logger that is used to log messages in the AlgoKit project.
It is a subclass of the `logging.Logger` class and extends it to provide additional functionality.

### Suppressing log messages per log call

To supress log messages for individual log calls you can pass `'suppress_log':True` to the log call’s `extra` argument.

### Suppressing log messages globally

To supress log messages globally you can configure the config object to use a custom logger that does not log anything.

```python
config.configure(logger=AlgoKitLogger.get_null_logger())
```

## Debugging Utilities

When debug mode is enabled, AlgoKit Utils will automatically:

- Generate transaction traces compatible with the AVM Debugger
- Manage trace file storage with automatic cleanup
- Provide source map generation for TEAL contracts

The following methods are provided for manual debugging operations:

- `persist_sourcemaps`: Persists sourcemaps for given TEAL contracts as AVM Debugger-compliant artifacts. Parameters:
  - `sources`: List of TEAL sources to generate sourcemaps for
  - `project_root`: Project root directory for storage
  - `client`: AlgodClient instance
  - `with_sources`: Whether to include TEAL source files (default: True)
- `simulate_and_persist_response`: Simulates transactions and persists debug traces. Parameters:
  - `atc`: AtomicTransactionComposer containing transactions
  - `project_root`: Project root directory for storage
  - `algod_client`: AlgodClient instance
  - `buffer_size_mb`: Maximum trace storage in MB (default: 256)
  - `allow_empty_signatures`: Allow unsigned transactions (default: True)
  - `allow_unnamed_resources`: Allow unnamed resources (default: True)
  - `extra_opcode_budget`: Additional opcode budget
  - `exec_trace_config`: Custom trace configuration
  - `simulation_round`: Specific round to simulate

### Trace filename format

The trace files are named in a specific format to provide useful information about the transactions they contain. The format is as follows:

```default
${timestamp}_lr${last_round}_${transaction_types}.trace.avm.json
```

Where:

- `timestamp`: The time when the trace file was created, in ISO 8601 format, with colons and periods removed.
- `last_round`: The last round when the simulation was performed.
- `transaction_types`: A string representing the types and counts of transactions in the atomic group. Each transaction type is represented as `${count}${type}`, and different transaction types are separated by underscores.

For example, a trace file might be named `20220301T123456Z_lr1000_2pay_1axfer.trace.avm.json`, indicating that the trace file was created at `2022-03-01T12:34:56Z`, the last round was `1000`, and the atomic group contained 2 payment transactions and 1 asset transfer transaction.
