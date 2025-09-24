---
title: AppClient
sidebar:
  label: AppClient
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_client.AppClient(params: [AppClientParams](AppClientParams.md#algokit_utils.applications.app_client.AppClientParams))

A client for interacting with an Algorand smart contract application.

Provides a high-level interface for interacting with Algorand smart contracts, including
methods for calling application methods, managing state, and handling transactions.

- **Parameters:**
  **params** – Parameters for creating the app client
- **Example:**
  ```pycon
  >>> params = AppClientParams(
  ...     app_spec=Arc56Contract.from_json(app_spec_json),
  ...     algorand=algorand,
  ...     app_id=1234567890,
  ...     app_name="My App",
  ...     default_sender="SENDERADDRESS",
  ...     default_signer=TransactionSigner(
  ...         account="SIGNERACCOUNT",
  ...         private_key="SIGNERPRIVATEKEY",
  ...     ),
  ...     approval_source_map=SourceMap(
  ...         source="APPROVALSOURCE",
  ...     ),
  ...     clear_source_map=SourceMap(
  ...         source="CLEARSOURCE",
  ...     ),
  ... )
  >>> client = AppClient(params)
  ```

#### _property_ algorand _: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/algorandclient/#algokit_utils.algorand.AlgorandClient)_

Get the Algorand client instance.

- **Returns:**
  The Algorand client used by this app client

#### _property_ app*id *: int\_

Get the application ID.

- **Returns:**
  The ID of the Algorand application

#### _property_ app*address *: str\_

Get the application’s Algorand address.

- **Returns:**
  The Algorand address associated with this application

#### _property_ app*name *: str\_

Get the application name.

- **Returns:**
  The name of the application

#### _property_ app*spec *: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract)\_

Get the application specification.

- **Returns:**
  The ARC-56 contract specification for this application

#### _property_ state _: \_StateAccessor_

Get the state accessor.

- **Returns:**
  The state accessor for this application

#### _property_ params _: \_MethodParamsBuilder_

Get the method parameters builder.

- **Returns:**
  The method parameters builder for this application
- **Example:**
  ```pycon
  >>> # Create a transaction in the future using Algorand Client
  >>> my_method_call = app_client.params.call(AppClientMethodCallParams(
          method='my_method',
          args=[123, 'hello']))
  >>> # ...
  >>> await algorand.send.AppMethodCall(my_method_call)
  >>> # Define a nested transaction as an ABI argument
  >>> my_method_call = app_client.params.call(AppClientMethodCallParams(
          method='my_method',
          args=[123, 'hello']))
  >>> app_client.send.call(AppClientMethodCallParams(method='my_method2', args=[my_method_call]))
  ```

#### _property_ send _: \_TransactionSender_

Get the transaction sender.

- **Returns:**
  The transaction sender for this application

#### _property_ create*transaction *: \_TransactionCreator\_

Get the transaction creator.

- **Returns:**
  The transaction creator for this application

#### _static_ normalise_app_spec(app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | [algokit_utils.applications.app_spec.arc32.Arc32Contract](/reference/algokit-utils-py/api/applications/app_spec/arc32/arc32contract/#algokit_utils.applications.app_spec.arc32.Arc32Contract) | str) → [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract)

Normalize an application specification to ARC-56 format.

- **Parameters:**
  **app_spec** – The application specification to normalize. Can be raw arc32 or arc56 json,
  or an Arc32Contract or Arc56Contract instance
- **Returns:**
  The normalized ARC-56 contract specification
- **Raises:**
  **ValueError** – If the app spec format is invalid
- **Example:**
  ```pycon
  >>> spec = AppClient.normalise_app_spec(app_spec_json)
  ```

#### _static_ from_network(app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | [algokit_utils.applications.app_spec.arc32.Arc32Contract](/reference/algokit-utils-py/api/applications/app_spec/arc32/arc32contract/#algokit_utils.applications.app_spec.arc32.Arc32Contract) | str, algorand: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/algorandclient/#algokit_utils.algorand.AlgorandClient), app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → [AppClient](#algokit_utils.applications.app_client.AppClient)

Create an AppClient instance from network information.

- **Parameters:**
  - **app_spec** – The application specification
  - **algorand** – The Algorand client instance
  - **app_name** – Optional application name
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **approval_source_map** – Optional approval program source map
  - **clear_source_map** – Optional clear program source map
- **Returns:**
  A new AppClient instance
- **Raises:**
  **Exception** – If no app ID is found for the network
- **Example:**
  ```pycon
  >>> client = AppClient.from_network(
  ...     app_spec=Arc56Contract.from_json(app_spec_json),
  ...     algorand=algorand,
  ...     app_name="My App",
  ...     default_sender="SENDERADDRESS",
  ...     default_signer=TransactionSigner(
  ...         account="SIGNERACCOUNT",
  ...         private_key="SIGNERPRIVATEKEY",
  ...     ),
  ...     approval_source_map=SourceMap(
  ...         source="APPROVALSOURCE",
  ...     ),
  ...     clear_source_map=SourceMap(
  ...         source="CLEARSOURCE",
  ...     ),
  ... )
  ```

#### _static_ from_creator_and_name(creator_address: str, app_name: str, app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | [algokit_utils.applications.app_spec.arc32.Arc32Contract](/reference/algokit-utils-py/api/applications/app_spec/arc32/arc32contract/#algokit_utils.applications.app_spec.arc32.Arc32Contract) | str, algorand: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/algorandclient/#algokit_utils.algorand.AlgorandClient), default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None, ignore_cache: bool | None = None, app_lookup_cache: [algokit_utils.applications.app_deployer.ApplicationLookup](/reference/algokit-utils-py/api/applications/app_deployer/applicationlookup/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None) → [AppClient](#algokit_utils.applications.app_client.AppClient)

Create an AppClient instance from creator address and application name.

- **Parameters:**
  - **creator_address** – The address of the application creator
  - **app_name** – The name of the application
  - **app_spec** – The application specification
  - **algorand** – The Algorand client instance
  - **default_sender** – Optional default sender address
  - **default_signer** – Optional default transaction signer
  - **approval_source_map** – Optional approval program source map
  - **clear_source_map** – Optional clear program source map
  - **ignore_cache** – Optional flag to ignore cache
  - **app_lookup_cache** – Optional app lookup cache
- **Returns:**
  A new AppClient instance
- **Raises:**
  **ValueError** – If the app is not found for the creator and name
- **Example:**
  ```pycon
  >>> client = AppClient.from_creator_and_name(
  ...     creator_address="CREATORADDRESS",
  ...     app_name="APPNAME",
  ...     app_spec=Arc56Contract.from_json(app_spec_json),
  ...     algorand=algorand,
  ... )
  ```

#### _static_ compile(app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract), app_manager: [algokit_utils.applications.app_manager.AppManager](/reference/algokit-utils-py/api/applications/app_manager/appmanager/#algokit_utils.applications.app_manager.AppManager), compilation_params: [AppClientCompilationParams](AppClientCompilationParams.md#algokit_utils.applications.app_client.AppClientCompilationParams) | None = None) → [AppClientCompilationResult](AppClientCompilationResult.md#algokit_utils.applications.app_client.AppClientCompilationResult)

Compile the application’s TEAL code.

- **Parameters:**
  - **app_spec** – The application specification
  - **app_manager** – The application manager instance
  - **compilation_params** – Optional compilation parameters
- **Returns:**
  The compilation result
- **Raises:**
  **ValueError** – If attempting to compile without source or byte code

#### compile_app(compilation_params: [AppClientCompilationParams](AppClientCompilationParams.md#algokit_utils.applications.app_client.AppClientCompilationParams) | None = None) → [AppClientCompilationResult](AppClientCompilationResult.md#algokit_utils.applications.app_client.AppClientCompilationResult)

Compile the application’s TEAL code.

- **Parameters:**
  **compilation_params** – Optional compilation parameters
- **Returns:**
  The compilation result

#### clone(app_name: str | None = \_MISSING, default_sender: str | None = \_MISSING, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = \_MISSING, approval_source_map: algosdk.source_map.SourceMap | None = \_MISSING, clear_source_map: algosdk.source_map.SourceMap | None = \_MISSING) → [AppClient](#algokit_utils.applications.app_client.AppClient)

Create a cloned AppClient instance with optionally overridden parameters.

- **Parameters:**
  - **app_name** – Optional new application name
  - **default_sender** – Optional new default sender
  - **default_signer** – Optional new default signer
  - **approval_source_map** – Optional new approval source map
  - **clear_source_map** – Optional new clear source map
- **Returns:**
  A new AppClient instance
- **Example:**
  ```pycon
  >>> client = AppClient(params)
  >>> cloned_client = client.clone(app_name="Cloned App", default_sender="NEW_SENDER")
  ```

#### export_source_maps() → [algokit_utils.models.application.AppSourceMaps](/reference/algokit-utils-py/api/models/application/appsourcemaps/#algokit_utils.models.application.AppSourceMaps)

Export the application’s source maps.

- **Returns:**
  The application’s source maps
- **Raises:**
  **ValueError** – If source maps haven’t been loaded

#### import_source_maps(source_maps: [algokit_utils.models.application.AppSourceMaps](/reference/algokit-utils-py/api/models/application/appsourcemaps/#algokit_utils.models.application.AppSourceMaps)) → None

Import source maps for the application.

- **Parameters:**
  **source_maps** – The source maps to import
- **Raises:**
  **ValueError** – If source maps are invalid or missing

#### get_local_state(address: str) → dict[str, [algokit_utils.models.application.AppState](/reference/algokit-utils-py/api/models/application/appstate/#algokit_utils.models.application.AppState)]

Get local state for an account.

- **Parameters:**
  **address** – The account address
- **Returns:**
  The account’s local state for this application

#### get_global_state() → dict[str, [algokit_utils.models.application.AppState](/reference/algokit-utils-py/api/models/application/appstate/#algokit_utils.models.application.AppState)]

Get the application’s global state.

- **Returns:**
  The application’s global state
- **Example:**
  ```pycon
  >>> global_state = client.get_global_state()
  ```

#### get_box_names() → list[[algokit_utils.models.state.BoxName](/reference/algokit-utils-py/api/models/state/boxname/#algokit_utils.models.state.BoxName)]

Get all box names for the application.

- **Returns:**
  List of box names
- **Example:**
  ```pycon
  >>> box_names = client.get_box_names()
  ```

#### get_box_value(name: algokit_utils.models.state.BoxIdentifier) → bytes

Get the value of a box.

- **Parameters:**
  **name** – The box identifier
- **Returns:**
  The box value as bytes
- **Example:**
  ```pycon
  >>> box_value = client.get_box_value(box_name)
  ```

#### get_box_value_from_abi_type(name: algokit_utils.models.state.BoxIdentifier, abi_type: algokit_utils.applications.abi.ABIType) → algokit_utils.applications.abi.ABIValue

Get a box value decoded according to an ABI type.

- **Parameters:**
  - **name** – The box identifier
  - **abi_type** – The ABI type to decode as
- **Returns:**
  The decoded box value
- **Example:**
  ```pycon
  >>> box_value = client.get_box_value_from_abi_type(box_name, abi_type)
  ```

#### get_box_values(filter_func: collections.abc.Callable[[[algokit_utils.models.state.BoxName](/reference/algokit-utils-py/api/models/state/boxname/#algokit_utils.models.state.BoxName)], bool] | None = None) → list[[algokit_utils.models.state.BoxValue](/reference/algokit-utils-py/api/models/state/boxvalue/#algokit_utils.models.state.BoxValue)]

Get values for multiple boxes.

- **Parameters:**
  **filter_func** – Optional function to filter box names
- **Returns:**
  List of box values
- **Example:**
  ```pycon
  >>> box_values = client.get_box_values()
  ```

#### get_box_values_from_abi_type(abi_type: algokit_utils.applications.abi.ABIType, filter_func: collections.abc.Callable[[[algokit_utils.models.state.BoxName](/reference/algokit-utils-py/api/models/state/boxname/#algokit_utils.models.state.BoxName)], bool] | None = None) → list[[algokit_utils.applications.abi.BoxABIValue](/reference/algokit-utils-py/api/applications/abi/boxabivalue/#algokit_utils.applications.abi.BoxABIValue)]

Get multiple box values decoded according to an ABI type.

- **Parameters:**
  - **abi_type** – The ABI type to decode as
  - **filter_func** – Optional function to filter box names
- **Returns:**
  List of decoded box values
- **Example:**
  ```pycon
  >>> box_values = client.get_box_values_from_abi_type(abi_type)
  ```

#### fund_app_account(params: [FundAppAccountParams](FundAppAccountParams.md#algokit_utils.applications.app_client.FundAppAccountParams), send_params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/models/transaction/sendparams/#algokit_utils.models.transaction.SendParams) | None = None) → [algokit_utils.transactions.transaction_sender.SendSingleTransactionResult](/reference/algokit-utils-py/api/transactions/transaction_sender/sendsingletransactionresult/#algokit_utils.transactions.transaction_sender.SendSingleTransactionResult)

Fund the application’s account.

- **Parameters:**
  - **params** – The funding parameters
  - **send_params** – Send parameters, defaults to None
- **Returns:**
  The transaction result
- **Example:**
  ```pycon
  >>> result = client.fund_app_account(params)
  ```
