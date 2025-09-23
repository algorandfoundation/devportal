---
title: algokit_utils.applications.app_manager.AppManager
---
#### *class* algokit_utils.applications.app_manager.AppManager(algod_client: algosdk.v2client.algod.AlgodClient)

A manager class for interacting with Algorand applications.

Provides functionality for compiling TEAL code, managing application state,
and interacting with application boxes.

* **Parameters:**
  **algod_client** – The Algorand client instance to use for interacting with the network
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  ```

#### compile_teal(teal_code: str) → [algokit_utils.models.application.CompiledTeal](/reference/algokit-utils-py/api/models/application/compiledteal/#algokit_utils.models.application.CompiledTeal)

Compile TEAL source code.

* **Parameters:**
  **teal_code** – The TEAL source code to compile
* **Returns:**
  The compiled TEAL code and associated metadata

#### compile_teal_template(teal_template_code: str, template_params: algokit_utils.models.state.TealTemplateParams | None = None, deployment_metadata: collections.abc.Mapping[str, bool | None] | None = None) → [algokit_utils.models.application.CompiledTeal](/reference/algokit-utils-py/api/models/application/compiledteal/#algokit_utils.models.application.CompiledTeal)

Compile a TEAL template with parameters.

* **Parameters:**
  * **teal_template_code** – The TEAL template code to compile
  * **template_params** – Parameters to substitute in the template
  * **deployment_metadata** – Deployment control parameters
* **Returns:**
  The compiled TEAL code and associated metadata
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> teal_template_code =
  ...     # This is a TEAL template
  ...     # It can contain template variables like {TMPL_UPDATABLE} and {TMPL_DELETABLE}
  ...
  >>> compiled_teal = app_manager.compile_teal_template(teal_template_code)
  ```

#### get_compilation_result(teal_code: str) → [algokit_utils.models.application.CompiledTeal](/reference/algokit-utils-py/api/models/application/compiledteal/#algokit_utils.models.application.CompiledTeal) | None

Get cached compilation result for TEAL code if available.

* **Parameters:**
  **teal_code** – The TEAL source code
* **Returns:**
  The cached compilation result if available, None otherwise
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> teal_code = "RETURN 1"
  >>> compiled_teal = app_manager.compile_teal(teal_code)
  >>> compilation_result = app_manager.get_compilation_result(teal_code)
  ```

#### get_by_id(app_id: int) → [algokit_utils.models.application.AppInformation](/reference/algokit-utils-py/api/models/application/appinformation/#algokit_utils.models.application.AppInformation)

Get information about an application by ID.

* **Parameters:**
  **app_id** – The application ID
* **Returns:**
  Information about the application
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 1234567890
  >>> app_info = app_manager.get_by_id(app_id)
  ```

#### get_global_state(app_id: int) → dict[str, [algokit_utils.models.application.AppState](/reference/algokit-utils-py/api/models/application/appstate/#algokit_utils.models.application.AppState)]

Get the global state of an application.

* **Parameters:**
  **app_id** – The application ID
* **Returns:**
  The application’s global state
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> global_state = app_manager.get_global_state(app_id)
  ```

#### get_local_state(app_id: int, address: str) → dict[str, [algokit_utils.models.application.AppState](/reference/algokit-utils-py/api/models/application/appstate/#algokit_utils.models.application.AppState)]

Get the local state for an account in an application.

* **Parameters:**
  * **app_id** – The application ID
  * **address** – The account address
* **Returns:**
  The account’s local state for the application
* **Raises:**
  **ValueError** – If local state is not found
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> address = "SENDER_ADDRESS"
  >>> local_state = app_manager.get_local_state(app_id, address)
  ```

#### get_box_names(app_id: int) → list[[algokit_utils.models.state.BoxName](/reference/algokit-utils-py/api/models/state/boxname/#algokit_utils.models.state.BoxName)]

Get names of all boxes for an application.

If the box name can’t be decoded from UTF-8, the string representation of the bytes is returned.

* **Parameters:**
  **app_id** – The application ID
* **Returns:**
  List of box names
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> box_names = app_manager.get_box_names(app_id)
  ```

#### get_box_value(app_id: int, box_name: algokit_utils.models.state.BoxIdentifier) → bytes

Get the value stored in a box.

* **Parameters:**
  * **app_id** – The application ID
  * **box_name** – The box identifier
* **Returns:**
  The box value as bytes
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> box_name = "BOX_NAME"
  >>> box_value = app_manager.get_box_value(app_id, box_name)
  ```

#### get_box_values(app_id: int, box_names: list[algokit_utils.models.state.BoxIdentifier]) → list[bytes]

Get values for multiple boxes.

* **Parameters:**
  * **app_id** – The application ID
  * **box_names** – List of box identifiers
* **Returns:**
  List of box values as bytes
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> box_names = ["BOX_NAME_1", "BOX_NAME_2"]
  >>> box_values = app_manager.get_box_values(app_id, box_names)
  ```

#### get_box_value_from_abi_type(app_id: int, box_name: algokit_utils.models.state.BoxIdentifier, abi_type: algokit_utils.applications.abi.ABIType) → algokit_utils.applications.abi.ABIValue

Get and decode a box value using an ABI type.

* **Parameters:**
  * **app_id** – The application ID
  * **box_name** – The box identifier
  * **abi_type** – The ABI type to decode with
* **Returns:**
  The decoded box value
* **Raises:**
  **ValueError** – If decoding fails
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> box_name = "BOX_NAME"
  >>> abi_type = ABIType.UINT
  >>> box_value = app_manager.get_box_value_from_abi_type(app_id, box_name, abi_type)
  ```

#### get_box_values_from_abi_type(app_id: int, box_names: list[algokit_utils.models.state.BoxIdentifier], abi_type: algokit_utils.applications.abi.ABIType) → list[algokit_utils.applications.abi.ABIValue]

Get and decode multiple box values using an ABI type.

* **Parameters:**
  * **app_id** – The application ID
  * **box_names** – List of box identifiers
  * **abi_type** – The ABI type to decode with
* **Returns:**
  List of decoded box values
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> box_names = ["BOX_NAME_1", "BOX_NAME_2"]
  >>> abi_type = ABIType.UINT
  >>> box_values = app_manager.get_box_values_from_abi_type(app_id, box_names, abi_type)
  ```

#### *static* get_box_reference(box_id: algokit_utils.models.state.BoxIdentifier | [algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/models/state/boxreference/#algokit_utils.models.state.BoxReference)) → tuple[int, bytes]

Get standardized box reference from various identifier types.

* **Parameters:**
  **box_id** – The box identifier
* **Returns:**
  Tuple of (app_id, box_name_bytes)
* **Raises:**
  **ValueError** – If box identifier type is invalid
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> box_name = "BOX_NAME"
  >>> box_reference = app_manager.get_box_reference(box_name)
  ```

#### *static* get_abi_return(confirmation: algosdk.v2client.algod.AlgodResponseType, method: algosdk.abi.Method | None = None) → [algokit_utils.applications.abi.ABIReturn](/reference/algokit-utils-py/api/applications/abi/abireturn/#algokit_utils.applications.abi.ABIReturn) | None

Get the ABI return value from a transaction confirmation.

* **Parameters:**
  * **confirmation** – The transaction confirmation
  * **method** – The ABI method
* **Returns:**
  The parsed ABI return value, or None if not available
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> method = "METHOD_NAME"
  >>> confirmation = algod_client.pending_transaction_info(tx_id)
  >>> abi_return = app_manager.get_abi_return(confirmation, method)
  ```

#### *static* decode_app_state(state: list[dict[str, Any]]) → dict[str, [algokit_utils.models.application.AppState](/reference/algokit-utils-py/api/models/application/appstate/#algokit_utils.models.application.AppState)]

Decode application state from raw format.

* **Parameters:**
  **state** – The raw application state
* **Returns:**
  Decoded application state
* **Raises:**
  **ValueError** – If unknown state data type is encountered
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> state = app_manager.get_global_state(app_id)
  >>> decoded_state = app_manager.decode_app_state(state)
  ```

#### *static* replace_template_variables(program: str, template_values: algokit_utils.models.state.TealTemplateParams) → str

Replace template variables in TEAL code.

* **Parameters:**
  * **program** – The TEAL program code
  * **template_values** – Template variable values to substitute
* **Returns:**
  TEAL code with substituted values
* **Raises:**
  **ValueError** – If template value type is unexpected
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> program = "RETURN 1"
  >>> template_values = {"TMPL_UPDATABLE": True, "TMPL_DELETABLE": True}
  >>> updated_program = app_manager.replace_template_variables(program, template_values)
  ```

#### *static* replace_teal_template_deploy_time_control_params(teal_template_code: str, params: collections.abc.Mapping[str, bool | None]) → str

Replace deploy-time control parameters in TEAL template.

* **Parameters:**
  * **teal_template_code** – The TEAL template code
  * **params** – The deploy-time control parameters
* **Returns:**
  TEAL code with substituted control parameters
* **Raises:**
  **ValueError** – If template variables not found in code
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> app_id = 123
  >>> teal_template_code = "RETURN 1"
  >>> params = {"TMPL_UPDATABLE": True, "TMPL_DELETABLE": True}
  >>> updated_teal_code = app_manager.replace_teal_template_deploy_time_control_params(
      teal_template_code, params
  )
  ```

#### *static* strip_teal_comments(teal_code: str) → str

Strip comments from TEAL code.

* **Parameters:**
  **teal_code** – The TEAL code to strip comments from
* **Returns:**
  The TEAL code with comments stripped
* **Example:**
  ```pycon
  >>> app_manager = AppManager(algod_client)
  >>> teal_code = "RETURN 1"
  >>> stripped_teal_code = app_manager.strip_teal_comments(teal_code)
  ```