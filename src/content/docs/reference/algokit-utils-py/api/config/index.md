---
title: config
sidebar:
  label: Index
  order: 0
---

## Attributes

| [`ALGOKIT_PROJECT_ROOT`](#algokit_utils.config.ALGOKIT_PROJECT_ROOT)       |     |
| -------------------------------------------------------------------------- | --- |
| [`ALGOKIT_CONFIG_FILENAME`](#algokit_utils.config.ALGOKIT_CONFIG_FILENAME) |     |
| [`config`](#algokit_utils.config.config)                                   |     |

## Classes

| [`AlgoKitLogger`](#algokit_utils.config.AlgoKitLogger)     | Instances of the Logger class represent a single logging channel. A        |
| ---------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`UpdatableConfig`](#algokit_utils.config.UpdatableConfig) | Class to manage and update configuration settings for the AlgoKit project. |

## Module Contents

### algokit_utils.config.ALGOKIT_PROJECT_ROOT

### algokit_utils.config.ALGOKIT_CONFIG_FILENAME _= '.algokit.toml'_

### _class_ algokit_utils.config.AlgoKitLogger(name: str = 'algokit-utils-py', level: int = logging.NOTSET)

Bases: `logging.Logger`

Instances of the Logger class represent a single logging channel. A
“logging channel” indicates an area of an application. Exactly how an
“area” is defined is up to the application developer. Since an
application can have any number of areas, logging channels are identified
by a unique string. Application areas can be nested (e.g. an area
of “input processing” might include sub-areas “read CSV files”, “read
XLS files” and “read Gnumeric files”). To cater for this natural nesting,
channel names are organized into a namespace hierarchy where levels are
separated by periods, much like the Java or Python package namespace. So
in the instance given above, channel names might be “input” for the upper
level, and “input.csv”, “input.xls” and “input.gnu” for the sub-levels.
There is no arbitrary limit to the depth of nesting.

#### _classmethod_ get_null_logger() → logging.Logger

Return a logger that does nothing (a null logger).

### _class_ algokit_utils.config.UpdatableConfig

Class to manage and update configuration settings for the AlgoKit project.

Attributes:
: debug (bool): Indicates whether debug mode is enabled.
project_root (Path | None): The path to the project root directory.
trace_all (bool): Indicates whether to trace all operations.
trace_buffer_size_mb (int | float): The size of the trace buffer in megabytes.
max_search_depth (int): The maximum depth to search for a specific file.
populate_app_call_resources (bool): Whether to populate app call resources.
logger (logging.Logger): The logger instance to use. Defaults to an AlgoKitLogger instance.

#### _property_ logger _: logging.Logger_

Returns the logger instance.

#### _property_ debug _: bool_

Returns the debug status.

#### _property_ project_root _: pathlib.Path | None_

Returns the project root path.

#### _property_ trace_all _: bool_

Indicates whether simulation traces for all operations should be stored.

#### _property_ trace_buffer_size_mb _: int | float_

Returns the size of the trace buffer in megabytes.

#### _property_ populate_app_call_resource _: bool_

Indicates whether or not to populate app call resources.

#### with_debug(func: collections.abc.Callable[[], str | None]) → None

Executes a function with debug mode temporarily enabled.

#### configure(\*, debug: bool | None = None, project_root: pathlib.Path | None = None, trace_all: bool = False, trace_buffer_size_mb: float = 256, max_search_depth: int = 10, populate_app_call_resources: bool = True, logger: logging.Logger | None = None) → None

Configures various settings for the application.

- **Parameters:**
  - **debug** – Whether debug mode is enabled.
  - **project_root** – The path to the project root directory.
  - **trace_all** – Whether to trace all operations. Defaults to False.
  - **trace_buffer_size_mb** – The trace buffer size in megabytes. Defaults to 256.
  - **max_search_depth** – The maximum depth to search for a specific file. Defaults to 10.
  - **populate_app_call_resources** – Whether to populate app call resources. Defaults to True.
  - **logger** – A custom logger to use. Defaults to AlgoKitLogger instance.

### algokit_utils.config.config
