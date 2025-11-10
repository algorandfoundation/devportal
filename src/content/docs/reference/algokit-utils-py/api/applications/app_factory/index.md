---
title: applications.app_factory
sidebar:
  label: Index
  order: 0
---

## Classes

| [`AppFactoryParams`](#algokit_utils.applications.app_factory.AppFactoryParams)                                           |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [`AppFactoryCreateParams`](#algokit_utils.applications.app_factory.AppFactoryCreateParams)                               | Parameters for creating application with bare call.                        |
| [`AppFactoryCreateMethodCallParams`](#algokit_utils.applications.app_factory.AppFactoryCreateMethodCallParams)           | Parameters for creating application with method call                       |
| [`AppFactoryCreateMethodCallResult`](#algokit_utils.applications.app_factory.AppFactoryCreateMethodCallResult)           | Base class for transaction results.                                        |
| [`SendAppFactoryTransactionResult`](#algokit_utils.applications.app_factory.SendAppFactoryTransactionResult)             | Result of an application transaction.                                      |
| [`SendAppUpdateFactoryTransactionResult`](#algokit_utils.applications.app_factory.SendAppUpdateFactoryTransactionResult) | Result of updating an application.                                         |
| [`SendAppCreateFactoryTransactionResult`](#algokit_utils.applications.app_factory.SendAppCreateFactoryTransactionResult) | Result of creating a new application.                                      |
| [`AppFactoryDeployResult`](#algokit_utils.applications.app_factory.AppFactoryDeployResult)                               | Result from deploying an application via AppFactory                        |
| [`AppFactory`](#algokit_utils.applications.app_factory.AppFactory)                                                       | ARC-56/ARC-32 app factory that, for a given app spec, allows you to create |

## Module Contents

### _class_ algokit_utils.applications.app_factory.AppFactoryParams

#### algorand _: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/#algokit_utils.algorand.AlgorandClient)_

#### app_spec _: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/#algokit_utils.applications.app_spec.arc56.Arc56Contract) | algokit_utils.\_legacy_v2.application_specification.ApplicationSpecification | str_

#### app_name _: str | None_ _= None_

#### default_sender _: str | None_ _= None_

#### default_signer _: algosdk.atomic_transaction_composer.TransactionSigner | None_ _= None_

#### version _: str | None_ _= None_

#### compilation_params _: [algokit_utils.applications.app_client.AppClientCompilationParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientCompilationParams) | None_ _= None_

### _class_ algokit_utils.applications.app_factory.AppFactoryCreateParams

Bases: [`algokit_utils.applications.app_client.AppClientBareCallCreateParams`](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientBareCallCreateParams)

Parameters for creating application with bare call.

#### on_complete _: algokit_utils.applications.app_client.CreateOnComplete | None_ _= None_

Optional on complete action

### _class_ algokit_utils.applications.app_factory.AppFactoryCreateMethodCallParams

Bases: [`algokit_utils.applications.app_client.AppClientMethodCallCreateParams`](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientMethodCallCreateParams)

Parameters for creating application with method call

### _class_ algokit_utils.applications.app_factory.AppFactoryCreateMethodCallResult

Bases: [`algokit_utils.transactions.transaction_sender.SendSingleTransactionResult`](/reference/algokit-utils-py/api/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendSingleTransactionResult), `Generic`[`ABIReturnT`]

Base class for transaction results.

Represents the result of sending a single transaction.

#### app_id _: int_

#### app_address _: str_

#### compiled_approval _: Any | None_ _= None_

#### compiled_clear _: Any | None_ _= None_

#### abi_return _: ABIReturnT | None_ _= None_

### _class_ algokit_utils.applications.app_factory.SendAppFactoryTransactionResult

Bases: [`algokit_utils.transactions.transaction_sender.SendAppTransactionResult`](/reference/algokit-utils-py/api/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendAppTransactionResult)[[`algokit_utils.applications.abi.Arc56ReturnValueType`](/reference/algokit-utils-py/api/applications/abi/#algokit_utils.applications.abi.Arc56ReturnValueType)]

Result of an application transaction.

Contains the ABI return value if applicable.

### _class_ algokit_utils.applications.app_factory.SendAppUpdateFactoryTransactionResult

Bases: [`algokit_utils.transactions.transaction_sender.SendAppUpdateTransactionResult`](/reference/algokit-utils-py/api/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendAppUpdateTransactionResult)[[`algokit_utils.applications.abi.Arc56ReturnValueType`](/reference/algokit-utils-py/api/applications/abi/#algokit_utils.applications.abi.Arc56ReturnValueType)]

Result of updating an application.

Contains the compiled approval and clear programs.

### _class_ algokit_utils.applications.app_factory.SendAppCreateFactoryTransactionResult

Bases: [`algokit_utils.transactions.transaction_sender.SendAppCreateTransactionResult`](/reference/algokit-utils-py/api/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendAppCreateTransactionResult)[[`algokit_utils.applications.abi.Arc56ReturnValueType`](/reference/algokit-utils-py/api/applications/abi/#algokit_utils.applications.abi.Arc56ReturnValueType)]

Result of creating a new application.

Contains the app ID and address of the newly created application.

### _class_ algokit_utils.applications.app_factory.AppFactoryDeployResult

Result from deploying an application via AppFactory

#### app _: [algokit_utils.applications.app_deployer.ApplicationMetaData](/reference/algokit-utils-py/api/applications/app_deployer/#algokit_utils.applications.app_deployer.ApplicationMetaData)_

The application metadata

#### operation_performed _: algokit_utils.applications.app_deployer.OperationPerformed_

The operation performed

#### create_result _: [SendAppCreateFactoryTransactionResult](#algokit_utils.applications.app_factory.SendAppCreateFactoryTransactionResult) | None_ _= None_

The create result

#### update_result _: [SendAppUpdateFactoryTransactionResult](#algokit_utils.applications.app_factory.SendAppUpdateFactoryTransactionResult) | None_ _= None_

The update result

#### delete_result _: [SendAppFactoryTransactionResult](#algokit_utils.applications.app_factory.SendAppFactoryTransactionResult) | None_ _= None_

The delete result

#### _classmethod_ from_deploy_result(response: [algokit_utils.applications.app_deployer.AppDeployResult](/reference/algokit-utils-py/api/applications/app_deployer/#algokit_utils.applications.app_deployer.AppDeployResult), deploy_params: [algokit_utils.applications.app_deployer.AppDeployParams](/reference/algokit-utils-py/api/applications/app_deployer/#algokit_utils.applications.app_deployer.AppDeployParams), app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/#algokit_utils.applications.app_spec.arc56.Arc56Contract), app_compilation_data: [algokit_utils.applications.app_client.AppClientCompilationResult](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientCompilationResult) | None = None) → typing_extensions.Self

Construct an AppFactoryDeployResult from a deployment result.

- **Parameters:**
  - **response** – The deployment response.
  - **deploy_params** – The deployment parameters.
  - **app_spec** – The application specification.
  - **app_compilation_data** – Optional app compilation data.
- **Returns:**
  An instance of AppFactoryDeployResult.

### _class_ algokit_utils.applications.app_factory.AppFactory(params: [AppFactoryParams](#algokit_utils.applications.app_factory.AppFactoryParams))

ARC-56/ARC-32 app factory that, for a given app spec, allows you to create
and deploy one or more app instances and to create one or more app clients
to interact with those (or other) app instances.

- **Parameters:**
  **params** – The parameters for the factory
- **Example:**
  ```python
  factory = AppFactory(AppFactoryParams(
         algorand=AlgorandClient.mainnet(),
         app_spec=app_spec,
     )
  )
  ```

#### _property_ app_name _: str_

The name of the app

#### _property_ app_spec _: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/#algokit_utils.applications.app_spec.arc56.Arc56Contract)_

The app spec

#### _property_ algorand _: [algokit_utils.algorand.AlgorandClient](/reference/algokit-utils-py/api/algorand/#algokit_utils.algorand.AlgorandClient)_

The algorand client

#### _property_ params _: \_MethodParamsBuilder_

Get parameters to create transactions (create and deploy related calls) for the current app.

A good mental model for this is that these parameters represent a deferred transaction creation.

- **Example:**
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
- **Example:**
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

#### _property_ send _: \_TransactionSender_

Get the transaction sender.

- **Returns:**
  The \_TransactionSender instance.

#### _property_ create_transaction _: \_TransactionCreator_

Get the transaction creator.

- **Returns:**
  The \_TransactionCreator instance.

#### deploy(\*, on_update: algokit_utils.applications.app_deployer.OnUpdate | None = None, on_schema_break: algokit_utils.applications.app_deployer.OnSchemaBreak | None = None, create_params: [algokit_utils.applications.app_client.AppClientMethodCallCreateParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientMethodCallCreateParams) | [algokit_utils.applications.app_client.AppClientBareCallCreateParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientBareCallCreateParams) | None = None, update_params: [algokit_utils.applications.app_client.AppClientMethodCallParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientMethodCallParams) | [algokit_utils.applications.app_client.AppClientBareCallParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientBareCallParams) | None = None, delete_params: [algokit_utils.applications.app_client.AppClientMethodCallParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientMethodCallParams) | [algokit_utils.applications.app_client.AppClientBareCallParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientBareCallParams) | None = None, existing_deployments: [algokit_utils.applications.app_deployer.ApplicationLookup](/reference/algokit-utils-py/api/applications/app_deployer/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None, ignore_cache: bool = False, app_name: str | None = None, send_params: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/models/transaction/#algokit_utils.models.transaction.SendParams) | None = None, compilation_params: [algokit_utils.applications.app_client.AppClientCompilationParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientCompilationParams) | None = None) → tuple[[algokit_utils.applications.app_client.AppClient](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClient), [AppFactoryDeployResult](#algokit_utils.applications.app_factory.AppFactoryDeployResult)]

Idempotently deploy (create if not exists, update if changed) an app against the given name for the given
creator account, including deploy-time TEAL template placeholder substitutions (if specified).

**Note:** When using the return from this function be sure to check operationPerformed to get access to
various return properties like transaction, confirmation and deleteResult.

**Note:** if there is a breaking state schema change to an existing app (and onSchemaBreak is set to
‘replace’) the existing app will be deleted and re-created.

**Note:** if there is an update (different TEAL code) to an existing app (and onUpdate is set to
‘replace’) the existing app will be deleted and re-created.

- **Parameters:**
  - **on_update** – The action to take if there is an update to the app
  - **on_schema_break** – The action to take if there is a breaking state schema change to the app
  - **create_params** – The arguments to create the app
  - **update_params** – The arguments to update the app
  - **delete_params** – The arguments to delete the app
  - **existing_deployments** – The existing deployments to use
  - **ignore_cache** – Whether to ignore the cache
  - **app_name** – The name of the app
  - **send_params** – The parameters for the send call
  - **compilation_params** – The parameters for the compilation
- **Returns:**
  The app client and the result of the deployment
- **Example:**
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

#### get_app_client_by_id(app_id: int, app_name: str | None = None, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → [algokit_utils.applications.app_client.AppClient](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClient)

Returns a new AppClient client for an app instance of the given ID.

- **Parameters:**
  - **app_id** – The id of the app
  - **app_name** – The name of the app
  - **default_sender** – The default sender address
  - **default_signer** – The default signer
  - **approval_source_map** – The approval source map
  - **clear_source_map** – The clear source map
- **Return AppClient:**
  The app client
- **Example:**
  ```python
  app_client = factory.get_app_client_by_id(app_id=123)
  ```

#### get_app_client_by_creator_and_name(creator_address: str, app_name: str, default_sender: str | None = None, default_signer: algosdk.atomic_transaction_composer.TransactionSigner | None = None, ignore_cache: bool | None = None, app_lookup_cache: [algokit_utils.applications.app_deployer.ApplicationLookup](/reference/algokit-utils-py/api/applications/app_deployer/#algokit_utils.applications.app_deployer.ApplicationLookup) | None = None, approval_source_map: algosdk.source_map.SourceMap | None = None, clear_source_map: algosdk.source_map.SourceMap | None = None) → [algokit_utils.applications.app_client.AppClient](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClient)

Returns a new AppClient client, resolving the app by creator address and name
using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).

- **Parameters:**
  - **creator_address** – The creator address
  - **app_name** – The name of the app
  - **default_sender** – The default sender address
  - **default_signer** – The default signer
  - **ignore_cache** – Whether to ignore the cache and force a lookup
  - **app_lookup_cache** – Optional cache of existing app deployments to use instead of querying the indexer
  - **approval_source_map** – Optional source map for the approval program
  - **clear_source_map** – Optional source map for the clear state program
- **Returns:**
  An AppClient instance configured for the resolved application
- **Example:**
  ```python
  app_client = factory.get_app_client_by_creator_and_name(
      creator_address='SENDER_ADDRESS',
      app_name='my_app'
  )
  ```

#### export_source_maps() → [algokit_utils.models.application.AppSourceMaps](/reference/algokit-utils-py/api/models/application/#algokit_utils.models.application.AppSourceMaps)

#### import_source_maps(source_maps: [algokit_utils.models.application.AppSourceMaps](/reference/algokit-utils-py/api/models/application/#algokit_utils.models.application.AppSourceMaps)) → None

Import the provided source maps into the factory.

- **Parameters:**
  **source_maps** – An AppSourceMaps instance containing the approval and clear source maps.

#### compile(compilation_params: [algokit_utils.applications.app_client.AppClientCompilationParams](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientCompilationParams) | None = None) → [algokit_utils.applications.app_client.AppClientCompilationResult](/reference/algokit-utils-py/api/applications/app_client/#algokit_utils.applications.app_client.AppClientCompilationResult)

Compile the app’s TEAL code.

- **Parameters:**
  **compilation_params** – The compilation parameters
- **Return AppClientCompilationResult:**
  The compilation result
- **Example:**
  ```python
  compilation_result = factory.compile()
  ```
