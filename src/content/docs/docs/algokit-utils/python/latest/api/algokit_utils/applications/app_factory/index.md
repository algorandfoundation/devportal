---
title: "algokit_utils.applications.app_factory"
---

<div class="api-ref">

## Classes

| [`AppFactoryParams`](#class-appfactoryparams)                                           |                                                                            |
|--------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`AppFactoryCreateParams`](#class-appfactorycreateparams)                               | Parameters for creating application with bare call.                        |
| [`AppFactoryCreateMethodCallParams`](#class-appfactorycreatemethodcallparams)           | Parameters for creating application with method call                       |
| [`AppFactoryCreateMethodCallResult`](#class-appfactorycreatemethodcallresult)           | Base class for transaction results.                                        |
| [`SendAppFactoryTransactionResult`](#class-sendappfactorytransactionresult)             | Result of an application transaction.                                      |
| [`SendAppUpdateFactoryTransactionResult`](#class-sendappupdatefactorytransactionresult) | Result of updating an application.                                         |
| [`SendAppCreateFactoryTransactionResult`](#class-sendappcreatefactorytransactionresult) | Result of creating a new application.                                      |
| [`AppFactoryDeployResult`](#class-appfactorydeployresult)                               | Result from deploying an application via AppFactory                        |
| [`AppFactory`](#class-appfactory)                                                       | ARC-56/ARC-32 app factory that, for a given app spec, allows you to create |

## Module Contents

### *class* AppFactoryParams

#### algorand *: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#class-algorandclient)*

#### app_spec *: [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract) | ApplicationSpecification | str*

#### app_name *: str | None* *= None*

#### default_sender *: str | None* *= None*

#### default_signer *: algosdk.atomic_transaction_composer.TransactionSigner | None* *= None*

#### version *: str | None* *= None*

#### compilation_params *: [AppClientCompilationParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientcompilationparams) | None* *= None*

### *class* AppFactoryCreateParams

Bases: [`algokit_utils.applications.app_client.AppClientBareCallCreateParams`](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientbarecallcreateparams)

Parameters for creating application with bare call.

#### on_complete *: CreateOnComplete | None* *= None*

Optional on complete action

### *class* AppFactoryCreateMethodCallParams

Bases: [`algokit_utils.applications.app_client.AppClientMethodCallCreateParams`](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientmethodcallcreateparams)

Parameters for creating application with method call

### *class* AppFactoryCreateMethodCallResult

Bases: [`algokit_utils.transactions.transaction_sender.SendSingleTransactionResult`](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#class-sendsingletransactionresult), `Generic`[`ABIReturnT`]

Base class for transaction results.

Represents the result of sending a single transaction.

#### app_id *: int*

#### app_address *: str*

#### compiled_approval *: Any | None* *= None*

#### compiled_clear *: Any | None* *= None*

#### abi_return *: ABIReturnT | None* *= None*

### *class* SendAppFactoryTransactionResult

Bases: [`algokit_utils.transactions.transaction_sender.SendAppTransactionResult`](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#class-sendapptransactionresult)[[`algokit_utils.applications.abi.Arc56ReturnValueType`](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#type-arc56returnvaluetype--abivalue--abistruct--none)]

Result of an application transaction.

Contains the ABI return value if applicable.

### *class* SendAppUpdateFactoryTransactionResult

Bases: [`algokit_utils.transactions.transaction_sender.SendAppUpdateTransactionResult`](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#class-sendappupdatetransactionresult)[[`algokit_utils.applications.abi.Arc56ReturnValueType`](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#type-arc56returnvaluetype--abivalue--abistruct--none)]

Result of updating an application.

Contains the compiled approval and clear programs.

### *class* SendAppCreateFactoryTransactionResult

Bases: [`algokit_utils.transactions.transaction_sender.SendAppCreateTransactionResult`](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#class-sendappcreatetransactionresult)[[`algokit_utils.applications.abi.Arc56ReturnValueType`](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#type-arc56returnvaluetype--abivalue--abistruct--none)]

Result of creating a new application.

Contains the app ID and address of the newly created application.

### *class* AppFactoryDeployResult

Result from deploying an application via AppFactory

#### app *: [ApplicationMetaData](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#class-applicationmetadata)*

The application metadata

#### operation_performed *: OperationPerformed*

The operation performed

#### create_result *: [SendAppCreateFactoryTransactionResult](#class-sendappcreatefactorytransactionresult) | None* *= None*

The create result

#### update_result *: [SendAppUpdateFactoryTransactionResult](#class-sendappupdatefactorytransactionresult) | None* *= None*

The update result

#### delete_result *: [SendAppFactoryTransactionResult](#class-sendappfactorytransactionresult) | None* *= None*

The delete result

#### *classmethod* from_deploy_result(response: [AppDeployResult](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#class-appdeployresult), deploy_params: [AppDeployParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#class-appdeployparams), app_spec: [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract), app_compilation_data: [AppClientCompilationResult](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientcompilationresult) | None = None) → Self

Construct an AppFactoryDeployResult from a deployment result.

* **Parameters:**
  * **response** – The deployment response.
  * **deploy_params** – The deployment parameters.
  * **app_spec** – The application specification.
  * **app_compilation_data** – Optional app compilation data.
* **Returns:**
  An instance of AppFactoryDeployResult.

### *class* AppFactory
ARC-56/ARC-32 app factory that, for a given app spec, allows you to create
and deploy one or more app instances and to create one or more app clients
to interact with those (or other) app instances.

* **Parameters:**
  **params** – The parameters for the factory
* **Example:**
  ```python
  factory = AppFactory(AppFactoryParams(
         algorand=AlgorandClient.mainnet(),
         app_spec=app_spec,
     )
  )
  ```

#### *property* app_name *: str*

The name of the app

#### *property* app_spec *: [Arc56Contract](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_spec/arc56/#class-arc56contract)*

The app spec

#### *property* algorand *: [AlgorandClient](/docs/algokit-utils/python/latest/api/algokit_utils/algorand/#class-algorandclient)*

The algorand client

#### *property* params *: \_MethodParamsBuilder*

Get parameters to create transactions (create and deploy related calls) for the current app.

A good mental model for this is that these parameters represent a deferred transaction creation.

* **Example:**
  ```python
  Create a transaction in the future using Algorand Client
  create_app_params = app_factory.params.create(
      AppFactoryCreateMethodCallParams(
          method=’create_method’,
          args=[123, ‘hello’]
      )
  )
  # …
  algorand.send.app_create_method_call(create_app_params)
  ```
* **Example:**
  ```python
  Define a nested transaction as an ABI argument
  create_app_params = appFactory.params.create(
      AppFactoryCreateMethodCallParams(
          method=’create_method’,
          args=[123, ‘hello’]
      )
  )
  app_client.send.call(
      AppClientMethodCallParams(
          method=’my_method’,
          args=[create_app_params]
      )
  )
  ```

#### *property* send *: \_TransactionSender*

Get the transaction sender.

* **Returns:**
  The \_TransactionSender instance.

#### *property* create_transaction *: \_TransactionCreator*

Get the transaction creator.

* **Returns:**
  The \_TransactionCreator instance.

#### deploy(, on_update: OnUpdate | None = None, on_schema_break: OnSchemaBreak | None = None, create_params: [AppClientMethodCallCreateParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientmethodcallcreateparams) | [AppClientBareCallCreateParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientbarecallcreateparams) | None = None, update_params: [AppClientMethodCallParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientmethodcallparams) | [AppClientBareCallParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientbarecallparams) | None = None, delete_params: [AppClientMethodCallParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientmethodcallparams) | [AppClientBareCallParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientbarecallparams) | None = None, existing_deployments: [ApplicationLookup](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#class-applicationlookup) | None = None, ignore_cache: bool = False, app_name: str | None = None, send_params: [SendParams](/docs/algokit-utils/python/latest/api/algokit_utils/models/transaction/#class-sendparams) | None = None, compilation_params: [AppClientCompilationParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientcompilationparams) | None = None) → tuple[[AppClient](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclient), [AppFactoryDeployResult](#class-appfactorydeployresult)]

Idempotently deploy (create if not exists, update if changed) an app against the given name for the given
creator account, including deploy-time TEAL template placeholder substitutions (if specified).

**Note:** When using the return from this function be sure to check operationPerformed to get access to
various return properties like transaction, confirmation and deleteResult.

**Note:** if there is a breaking state schema change to an existing app (and onSchemaBreak is set to
‘replace’) the existing app will be deleted and re-created.

**Note:** if there is an update (different TEAL code) to an existing app (and onUpdate is set to
‘replace’) the existing app will be deleted and re-created.

* **Parameters:**
  * **on_update** – The action to take if there is an update to the app
  * **on_schema_break** – The action to take if there is a breaking state schema change to the app
  * **create_params** – The arguments to create the app
  * **update_params** – The arguments to update the app
  * **delete_params** – The arguments to delete the app
  * **existing_deployments** – The existing deployments to use
  * **ignore_cache** – Whether to ignore the cache
  * **app_name** – The name of the app
  * **send_params** – The parameters for the send call
  * **compilation_params** – The parameters for the compilation
* **Returns:**
  The app client and the result of the deployment
* **Example:**
  ```python
  app_client, result = factory.deploy({
    create_params=AppClientMethodCallCreateParams(
      sender='SENDER_ADDRESS',
      approval_program='APPROVAL PROGRAM',
      clear_state_program='CLEAR PROGRAM',
      schema={
        "global_byte_slices": 0,
        "global_ints": 0,
        "local_byte_slices": 0,
        "local_ints": 0
      }
    ),
    update_params=AppClientMethodCallParams(
      sender='SENDER_ADDRESS'
    ),
    delete_params=AppClientMethodCallParams(
      sender='SENDER_ADDRESS'
    ),
    compilation_params=AppClientCompilationParams(
      updatable=False,
      deletable=False
    ),
    app_name='my_app',
    on_schema_break=OnSchemaBreak.AppendApp,
    on_update=OnUpdate.AppendApp
  })
  ```

#### get_app_client_by_id(app_id: int, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → [AppClient](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclient)

Returns a new AppClient client for an app instance of the given ID.

* **Parameters:**
  * **app_id** – The id of the app
  * **app_name** – The name of the app
  * **default_sender** – The default sender address
  * **default_signer** – The default signer
  * **approval_source_map** – The approval source map
  * **clear_source_map** – The clear source map
* **Return AppClient:**
  The app client
* **Example:**
  ```python
  app_client = factory.get_app_client_by_id(app_id=123)
  ```

#### get_app_client_by_creator_and_name(creator_address: str, app_name: str, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, ignore_cache: bool | None = None, app_lookup_cache: [ApplicationLookup](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/#class-applicationlookup) | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → [AppClient](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclient)

Returns a new AppClient client, resolving the app by creator address and name
using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).

* **Parameters:**
  * **creator_address** – The creator address
  * **app_name** – The name of the app
  * **default_sender** – The default sender address
  * **default_signer** – The default signer
  * **ignore_cache** – Whether to ignore the cache and force a lookup
  * **app_lookup_cache** – Optional cache of existing app deployments to use instead of querying the indexer
  * **approval_source_map** – Optional source map for the approval program
  * **clear_source_map** – Optional source map for the clear state program
* **Returns:**
  An AppClient instance configured for the resolved application
* **Example:**
  ```python
  app_client = factory.get_app_client_by_creator_and_name(
      creator_address='SENDER_ADDRESS',
      app_name='my_app'
  )
  ```

#### export_source_maps() → [AppSourceMaps](/docs/algokit-utils/python/latest/api/algokit_utils/models/application/#class-appsourcemaps)

#### import_source_maps(source_maps: [AppSourceMaps](/docs/algokit-utils/python/latest/api/algokit_utils/models/application/#class-appsourcemaps)) → None

Import the provided source maps into the factory.

* **Parameters:**
  **source_maps** – An AppSourceMaps instance containing the approval and clear source maps.

#### compile(compilation_params: [AppClientCompilationParams](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientcompilationparams) | None = None) → [AppClientCompilationResult](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_client/#class-appclientcompilationresult)

Compile the app’s TEAL code.

* **Parameters:**
  **compilation_params** – The compilation parameters
* **Return AppClientCompilationResult:**
  The compilation result
* **Example:**
  ```python
  compilation_result = factory.compile()
  ```


</div>
