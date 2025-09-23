---
title: algokit_utils.config.UpdatableConfig
---
#### *class* algokit_utils.config.UpdatableConfig

Class to manage and update configuration settings for the AlgoKit project.

Attributes:
: debug (bool): Indicates whether debug mode is enabled.
  project_root (Path | None): The path to the project root directory.
  trace_all (bool): Indicates whether to trace all operations.
  trace_buffer_size_mb (int | float): The size of the trace buffer in megabytes.
  max_search_depth (int): The maximum depth to search for a specific file.
  populate_app_call_resources (bool): Whether to populate app call resources.
  logger (logging.Logger): The logger instance to use. Defaults to an AlgoKitLogger instance.

#### *property* logger *: logging.Logger*

Returns the logger instance.

#### *property* debug *: bool*

Returns the debug status.

#### *property* project_root *: pathlib.Path | None*

Returns the project root path.

#### *property* trace_all *: bool*

Indicates whether simulation traces for all operations should be stored.

#### *property* trace_buffer_size_mb *: int | float*

Returns the size of the trace buffer in megabytes.

#### *property* populate_app_call_resource *: bool*

Indicates whether or not to populate app call resources.

#### with_debug(func: collections.abc.Callable[[], str | None]) → None

Executes a function with debug mode temporarily enabled.

#### configure(\*, debug: bool | None = None, project_root: pathlib.Path | None = None, trace_all: bool = False, trace_buffer_size_mb: float = 256, max_search_depth: int = 10, populate_app_call_resources: bool = True, logger: logging.Logger | None = None) → None

Configures various settings for the application.

* **Parameters:**
  * **debug** – Whether debug mode is enabled.
  * **project_root** – The path to the project root directory.
  * **trace_all** – Whether to trace all operations. Defaults to False.
  * **trace_buffer_size_mb** – The trace buffer size in megabytes. Defaults to 256.
  * **max_search_depth** – The maximum depth to search for a specific file. Defaults to 10.
  * **populate_app_call_resources** – Whether to populate app call resources. Defaults to True.
  * **logger** – A custom logger to use. Defaults to AlgoKitLogger instance.