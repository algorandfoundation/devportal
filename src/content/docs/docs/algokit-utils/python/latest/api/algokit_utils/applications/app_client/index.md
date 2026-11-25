---
title: "algokit_utils.applications.app_client"
---

<div class="api-ref">

## Attributes

| [`CreateOnComplete`](#createoncomplete)   |    |
|---------------------------------------------------------------------------------|----|

## Classes

| [`AppClientCompilationResult`](#class-appclientcompilationresult)           | Result of compiling an application's TEAL code.                       |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`AppClientCompilationParams`](#class-appclientcompilationparams)           | Parameters for compiling an application's TEAL code.                  |
| [`CommonAppCallParams`](#class-commonappcallparams)                         | Common configuration for app call transaction parameters              |
| [`AppClientCreateSchema`](#class-appclientcreateschema)                     | Schema for application creation.                                      |
| [`CommonAppCallCreateParams`](#class-commonappcallcreateparams)             | Common configuration for app create call transaction parameters.      |
| [`FundAppAccountParams`](#class-fundappaccountparams)                       | Parameters for funding an application's account.                      |
| [`AppClientBareCallParams`](#class-appclientbarecallparams)                 | Parameters for bare application calls.                                |
| [`AppClientBareCallCreateParams`](#class-appclientbarecallcreateparams)     | Parameters for creating application with bare call.                   |
| [`BaseAppClientMethodCallParams`](#class-baseappclientmethodcallparams)     | Base parameters for application method calls.                         |
| [`AppClientMethodCallParams`](#class-appclientmethodcallparams)             | Parameters for application method calls.                              |
| [`AppClientMethodCallCreateParams`](#class-appclientmethodcallcreateparams) | Parameters for creating application with method call                  |
| [`AppClientParams`](#class-appclientparams)                                 | Full parameters for creating an app client                            |
| [`AppClient`](#class-appclient)                                             | A client for interacting with an Algorand smart contract application. |

## Functions

| [`get_constant_block_offset`](#get_constant_block_offsetprogram-bytes--int)(→ int)   | Calculate the offset after constant blocks in TEAL program.   |
|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|

## Module Contents

### get_constant_block_offset(program: bytes) → int

Calculate the offset after constant blocks in TEAL program.

Analyzes a compiled TEAL program to find the ending offset position after any bytecblock and intcblock operations.

* **Parameters:**
  **program** – The compiled TEAL program as bytes
* **Returns:**
  The maximum offset position after any constant block operations

### CreateOnComplete

### *class* AppClientCompilationResult

Result of compiling an application’s TEAL code.

Contains the compiled approval and clear state programs along with optional compilation artifacts.

#### approval_program *: bytes*

The compiled approval program bytes

#### clear_state_program *: bytes*

The compiled clear state program bytes

#### compiled_approval *: [CompiledTeal](/docs/algokit-utils/python/latest/api/algokit_utils/models/application/#class-compiledteal) | None* *= None*

Optional compilation artifacts for approval program

#### compiled_clear *: [CompiledTeal](/docs/algokit-utils/python/latest/api/algokit_utils/models/application/#class-compiledteal) | None* *= None*

Optional compilation artifacts for clear state program

### *class* AppClientCompilationParams

Bases: `TypedDict`

Parameters for compiling an application’s TEAL code.

* **Variables:**
  * **deploy_time_params** – Optional template parameters to use during compilation
  * **updatable** – Optional flag indicating if app should be updatable
  * **deletable** – Optional flag indicating if app should be deletable

#### deploy_time_params *: TealTemplateParams | None*

#### updatable *: bool | None*

#### deletable *: bool | None*

### *class* CommonAppCallParams

Common configuration for app call transaction parameters

#### account_references *: list[str] | None* *= None*

List of account addresses to reference

#### app_references *: list[int] | None* *= None*

List of app IDs to reference

#### asset_references *: list[int] | None* *= None*

List of asset IDs to reference

#### box_references *: list[[BoxReference](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxreference) | BoxIdentifier] | None* *= None*

List of box references to include

#### extra_fee *: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#class-algoamount) | None* *= None*

Additional fee to add to transaction

#### lease *: bytes | None* *= None*

Transaction lease value

#### max_fee *: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#class-algoamount) | None* *= None*

Maximum fee allowed for transaction

#### note *: bytes | None* *= None*

Custom note for the transaction

#### rekey_to *: str | None* *= None*

Address to rekey account to

#### sender *: str | None* *= None*

Sender address override

#### signer *: algosdk.atomic_transaction_composer.TransactionSigner | None* *= None*

Custom transaction signer

#### static_fee *: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#class-algoamount) | None* *= None*

Fixed fee for transaction

#### validity_window *: int | None* *= None*

Number of rounds valid

#### first_valid_round *: int | None* *= None*

First valid round number

#### last_valid_round *: int | None* *= None*

Last valid round number

#### on_complete *: algosdk.transaction.OnComplete | None* *= None*

Optional on complete action

### *class* AppClientCreateSchema

Schema for application creation.

#### extra_program_pages *: int | None* *= None*

Optional number of extra program pages

#### schema *: [AppCreateSchema](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_composer/#class-appcreateschema) | None* *= None*

Optional application creation schema

### *class* CommonAppCallCreateParams

Bases: [`AppClientCreateSchema`](#class-appclientcreateschema), [`CommonAppCallParams`](#class-commonappcallparams)

Common configuration for app create call transaction parameters.

#### on_complete *: CreateOnComplete | None* *= None*

Optional on complete action

### *class* FundAppAccountParams

Bases: [`CommonAppCallParams`](#class-commonappcallparams)

Parameters for funding an application’s account.

#### amount *: [AlgoAmount](/docs/algokit-utils/python/latest/api/algokit_utils/models/amount/#class-algoamount)*

Amount to fund

#### close_remainder_to *: str | None* *= None*

Optional address to close remainder to

### *class* AppClientBareCallParams

Bases: [`CommonAppCallParams`](#class-commonappcallparams)

Parameters for bare application calls.

#### args *: list[bytes] | None* *= None*

Optional arguments

### *class* AppClientBareCallCreateParams

Bases: [`CommonAppCallCreateParams`](#class-commonappcallcreateparams)

Parameters for creating application with bare call.

#### on_complete *: CreateOnComplete | None* *= None*

Optional on complete action

### *class* BaseAppClientMethodCallParams

Bases: `Generic`[`ArgsT`, `MethodT`], [`CommonAppCallParams`](#class-commonappcallparams)

Base parameters for application method calls.

#### method *: MethodT*

Method to call

#### args *: ArgsT | None* *= None*

Arguments to pass to the application method call

### *class* AppClientMethodCallParams

Bases: [`BaseAppClientMethodCallParams`](#class-baseappclientmethodcallparams)[`collections.abc.Sequence`[`algokit_utils.applications.abi.ABIValue | algokit_utils.applications.abi.ABIStruct | algokit_utils.transactions.transaction_composer.AppMethodCallTransactionArgument | None`], `str`]

Parameters for application method calls.

### *class* AppClientMethodCallCreateParams

Bases: [`AppClientCreateSchema`](#class-appclientcreateschema), [`AppClientMethodCallParams`](#class-appclientmethodcallparams)

Parameters for creating application with method call

#### on_complete *: CreateOnComplete | None* *= None*

Optional on complete action

### *class* AppClientParams

Full parameters for creating an app client

#### app_spec *: [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract) | [Arc32Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc32/#class-arc32contract) | str*

The application specification

#### algorand *: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#class-algorandclient)*

The Algorand client

#### app_id *: int*

The application ID

#### app_name *: str | None* *= None*

The application name

#### default_sender *: str | None* *= None*

The default sender address

#### default_signer *: algosdk.atomic_transaction_composer.TransactionSigner | None* *= None*

The default transaction signer

#### approval_source_map *: algosdk.source_map.SourceMap | None* *= None*

The approval source map

#### clear_source_map *: algosdk.source_map.SourceMap | None* *= None*

The clear source map

### *class* AppClient
A client for interacting with an Algorand smart contract application.

Provides a high-level interface for interacting with Algorand smart contracts, including
methods for calling application methods, managing state, and handling transactions.

* **Parameters:**
  **params** – Parameters for creating the app client
* **Example:**
  ```python
  params = AppClientParams(
      app_spec=Arc56Contract.from_json(app_spec_json),
      algorand=algorand,
      app_id=1234567890,
      app_name="My App",
      default_sender="SENDERADDRESS",
      default_signer=TransactionSigner(
          account="SIGNERACCOUNT",
          private_key="SIGNERPRIVATEKEY",
      ),
      approval_source_map=SourceMap(
          source="APPROVALSOURCE",
      ),
      clear_source_map=SourceMap(
          source="CLEARSOURCE",
      ),
  )
  client = AppClient(params)
  ```

#### *property* algorand *: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#class-algorandclient)*

Get the Algorand client instance.

* **Returns:**
  The Algorand client used by this app client

#### *property* app_id *: int*

Get the application ID.

* **Returns:**
  The ID of the Algorand application

#### *property* app_address *: str*

Get the application’s Algorand address.

* **Returns:**
  The Algorand address associated with this application

#### *property* app_name *: str*

Get the application name.

* **Returns:**
  The name of the application

#### *property* app_spec *: [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract)*

Get the application specification.

* **Returns:**
  The ARC-56 contract specification for this application

#### *property* state *: \_StateAccessor*

Get the state accessor.

* **Returns:**
  The state accessor for this application

#### *property* params *: \_MethodParamsBuilder*

Get the method parameters builder.

* **Returns:**
  The method parameters builder for this application
* **Example:**
  ```python
  # Create a transaction in the future using Algorand Client
  my_method_call = app_client.params.call(AppClientMethodCallParams(
          method='my_method',
          args=[123, 'hello']))
  # ...
  await algorand.send.AppMethodCall(my_method_call)
  # Define a nested transaction as an ABI argument
  my_method_call = app_client.params.call(AppClientMethodCallParams(
          method='my_method',
          args=[123, 'hello']))
  app_client.send.call(AppClientMethodCallParams(method='my_method2', args=[my_method_call]))
  ```

#### *property* send *: \_TransactionSender*

Get the transaction sender.

* **Returns:**
  The transaction sender for this application

#### *property* create_transaction *: \_TransactionCreator*

Get the transaction creator.

* **Returns:**
  The transaction creator for this application

#### *static* normalise_app_spec(app_spec: [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract) | [Arc32Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc32/#class-arc32contract) | str) → [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract)

Normalize an application specification to ARC-56 format.

* **Parameters:**
  **app_spec** – The application specification to normalize. Can be raw arc32 or arc56 json,
  or an Arc32Contract or Arc56Contract instance
* **Returns:**
  The normalized ARC-56 contract specification
* **Raises:**
  **ValueError** – If the app spec format is invalid
* **Example:**
  ```python
  spec = AppClient.normalise_app_spec(app_spec_json)
  ```

#### *static* from_network(app_spec: [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract) | [Arc32Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc32/#class-arc32contract) | str, algorand: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#class-algorandclient), app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → [AppClient](#class-appclient)

Create an AppClient instance from network information.

* **Parameters:**
  * **app_spec** – The application specification
  * **algorand** – The Algorand client instance
  * **app_name** – Optional application name
  * **default_sender** – Optional default sender address
  * **default_signer** – Optional default transaction signer
  * **approval_source_map** – Optional approval program source map
  * **clear_source_map** – Optional clear program source map
* **Returns:**
  A new AppClient instance
* **Raises:**
  **Exception** – If no app ID is found for the network
* **Example:**
  ```python
  client = AppClient.from_network(
      app_spec=Arc56Contract.from_json(app_spec_json),
      algorand=algorand,
      app_name="My App",
      default_sender="SENDERADDRESS",
      default_signer=TransactionSigner(
          account="SIGNERACCOUNT",
          private_key="SIGNERPRIVATEKEY",
      ),
      approval_source_map=SourceMap(
          source="APPROVALSOURCE",
      ),
      clear_source_map=SourceMap(
          source="CLEARSOURCE",
      ),
  )
  ```

#### *static* from_creator_and_name(creator_address: str, app_name: str, app_spec: [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract) | [Arc32Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc32/#class-arc32contract) | str, algorand: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#class-algorandclient), default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None, ignore_cache: bool | None = None, app_lookup_cache: [ApplicationLookup](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#class-applicationlookup) | None = None) → [AppClient](#class-appclient)

Create an AppClient instance from creator address and application name.

* **Parameters:**
  * **creator_address** – The address of the application creator
  * **app_name** – The name of the application
  * **app_spec** – The application specification
  * **algorand** – The Algorand client instance
  * **default_sender** – Optional default sender address
  * **default_signer** – Optional default transaction signer
  * **approval_source_map** – Optional approval program source map
  * **clear_source_map** – Optional clear program source map
  * **ignore_cache** – Optional flag to ignore cache
  * **app_lookup_cache** – Optional app lookup cache
* **Returns:**
  A new AppClient instance
* **Raises:**
  **ValueError** – If the app is not found for the creator and name
* **Example:**
  ```python
  client = AppClient.from_creator_and_name(
      creator_address="CREATORADDRESS",
      app_name="APPNAME",
      app_spec=Arc56Contract.from_json(app_spec_json),
      algorand=algorand,
  )
  ```

#### *static* compile(app_spec: [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract), app_manager: [AppManager](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_manager/#class-appmanager), compilation_params: [AppClientCompilationParams](#class-appclientcompilationparams) | None = None) → [AppClientCompilationResult](#class-appclientcompilationresult)

Compile the application’s TEAL code.

* **Parameters:**
  * **app_spec** – The application specification
  * **app_manager** – The application manager instance
  * **compilation_params** – Optional compilation parameters
* **Returns:**
  The compilation result
* **Raises:**
  **ValueError** – If attempting to compile without source or byte code

#### compile_app(compilation_params: [AppClientCompilationParams](#class-appclientcompilationparams) | None = None) → [AppClientCompilationResult](#class-appclientcompilationresult)

Compile the application’s TEAL code.

* **Parameters:**
  **compilation_params** – Optional compilation parameters
* **Returns:**
  The compilation result

#### clone(app_name: str | None = \_MISSING, default_sender: str | None = \_MISSING, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = \_MISSING, approval_source_map: algosdk.source_map.SourceMap | None = \_MISSING, clear_source_map: algosdk.source_map.SourceMap | None = \_MISSING) → [AppClient](#class-appclient)

Create a cloned AppClient instance with optionally overridden parameters.

* **Parameters:**
  * **app_name** – Optional new application name
  * **default_sender** – Optional new default sender
  * **default_signer** – Optional new default signer
  * **approval_source_map** – Optional new approval source map
  * **clear_source_map** – Optional new clear source map
* **Returns:**
  A new AppClient instance
* **Example:**
  ```python
  client = AppClient(params)
  cloned_client = client.clone(app_name="Cloned App", default_sender="NEW_SENDER")
  ```

#### export_source_maps() → [AppSourceMaps](/docs/algokit-utils/python/latest/api/algokit_utils/models/application/#class-appsourcemaps)

Export the application’s source maps.

* **Returns:**
  The application’s source maps
* **Raises:**
  **ValueError** – If source maps haven’t been loaded

#### import_source_maps(source_maps: [AppSourceMaps](/docs/algokit-utils/python/latest/api/algokit_utils/models/application/#class-appsourcemaps)) → None

Import source maps for the application.

* **Parameters:**
  **source_maps** – The source maps to import
* **Raises:**
  **ValueError** – If source maps are invalid or missing

#### get_local_state(address: str) → dict[str, [AppState](/docs/algokit-utils/python/latest/api/algokit_utils/models/application/#class-appstate)]

Get local state for an account.

* **Parameters:**
  **address** – The account address
* **Returns:**
  The account’s local state for this application

#### get_global_state() → dict[str, [AppState](/docs/algokit-utils/python/latest/api/algokit_utils/models/application/#class-appstate)]

Get the application’s global state.

* **Returns:**
  The application’s global state
* **Example:**
  ```python
  global_state = client.get_global_state()
  ```

#### get_box_names() → list[[BoxName](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxname)]

Get all box names for the application.

* **Returns:**
  List of box names
* **Example:**
  ```python
  box_names = client.get_box_names()
  ```

#### get_box_value(name: BoxIdentifier) → bytes

Get the value of a box.

* **Parameters:**
  **name** – The box identifier
* **Returns:**
  The box value as bytes
* **Example:**
  ```python
  box_value = client.get_box_value(box_name)
  ```

#### get_box_value_from_abi_type(name: BoxIdentifier, abi_type: ABIType) → ABIValue

Get a box value decoded according to an ABI type.

* **Parameters:**
  * **name** – The box identifier
  * **abi_type** – The ABI type to decode as
* **Returns:**
  The decoded box value
* **Example:**
  ```python
  box_value = client.get_box_value_from_abi_type(box_name, abi_type)
  ```

#### get_box_values(filter_func: Callable[[[BoxName](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxname)], bool] | None = None) → list[[BoxValue](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxvalue)]

Get values for multiple boxes.

* **Parameters:**
  **filter_func** – Optional function to filter box names
* **Returns:**
  List of box values
* **Example:**
  ```python
  box_values = client.get_box_values()
  ```

#### get_box_values_from_abi_type(abi_type: ABIType, filter_func: Callable[[[BoxName](/docs/algokit-utils/python/latest/api/algokit_utils/models/state/#class-boxname)], bool] | None = None) → list[[BoxABIValue](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#class-boxabivalue)]

Get multiple box values decoded according to an ABI type.

* **Parameters:**
  * **abi_type** – The ABI type to decode as
  * **filter_func** – Optional function to filter box names
* **Returns:**
  List of decoded box values
* **Example:**
  ```python
  box_values = client.get_box_values_from_abi_type(abi_type)
  ```

#### fund_app_account(params: [FundAppAccountParams](#class-fundappaccountparams), send_params: [SendParams](/docs/algokit-utils/python/latest/api/algokit_utils/models/transaction/#class-sendparams) | None = None) → [SendSingleTransactionResult](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#class-sendsingletransactionresult)

Fund the application’s account.

* **Parameters:**
  * **params** – The funding parameters
  * **send_params** – Send parameters, defaults to None
* **Returns:**
  The transaction result
* **Example:**
  ```python
  result = client.fund_app_account(params)
  ```


</div>
