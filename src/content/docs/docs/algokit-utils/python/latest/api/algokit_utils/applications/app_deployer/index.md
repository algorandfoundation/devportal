---
title: 'algokit_utils.applications.app_deployer'
---

<div class="api-ref">

# algokit_utils.applications.app_deployer

## Attributes

| [`APP_DEPLOY_NOTE_DAPP`](#algokit_utils.applications.app_deployer.APP_DEPLOY_NOTE_DAPP) |     |
| --------------------------------------------------------------------------------------- | --- |

## Classes

| [`AppDeploymentMetaData`](#algokit_utils.applications.app_deployer.AppDeploymentMetaData) | Metadata about an application stored in a transaction note during creation. |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`ApplicationReference`](#algokit_utils.applications.app_deployer.ApplicationReference)   | Information about an Algorand app                                           |
| [`ApplicationMetaData`](#algokit_utils.applications.app_deployer.ApplicationMetaData)     | Complete metadata about a deployed app                                      |
| [`ApplicationLookup`](#algokit_utils.applications.app_deployer.ApplicationLookup)         | Cache of {py:class}\`ApplicationMetaData\` for a specific creator           |
| [`AppDeployParams`](#algokit_utils.applications.app_deployer.AppDeployParams)             | Parameters for deploying an app                                             |
| [`AppDeployResult`](#algokit_utils.applications.app_deployer.AppDeployResult)             | The result of a deployment                                                  |
| [`AppDeployer`](#algokit_utils.applications.app_deployer.AppDeployer)                     | Manages deployment and deployment metadata of applications                  |

## Module Contents

### APP_DEPLOY_NOTE_DAPP _: str_ _= 'ALGOKIT_DEPLOYER'_

### _class_ AppDeploymentMetaData

Metadata about an application stored in a transaction note during creation.

#### name _: str_

#### version _: str_

#### deletable _: bool | None_

#### updatable _: bool | None_

#### dictify() → dict[str, str | bool]

### _class_ ApplicationReference

Information about an Algorand app

#### app_id _: int_

#### app_address _: str_

### _class_ ApplicationMetaData

Complete metadata about a deployed app

#### reference _: [ApplicationReference](#algokit_utils.applications.app_deployer.ApplicationReference)_

#### deploy_metadata _: [AppDeploymentMetaData](#algokit_utils.applications.app_deployer.AppDeploymentMetaData)_

#### created_round _: int_

#### updated_round _: int_

#### deleted _: bool_ _= False_

#### _property_ app_id _: int_

#### _property_ app_address _: str_

#### _property_ name _: str_

#### _property_ version _: str_

#### _property_ deletable _: bool | None_

#### _property_ updatable _: bool | None_

### _class_ ApplicationLookup

Cache of {py:class}\`ApplicationMetaData\` for a specific creator

Can be used as an argument to {py:class}\`AppClient\` to reduce the number of calls when deploying multiple
apps or discovering multiple app_ids

#### creator _: str_

#### apps _: dict[str, [ApplicationMetaData](#algokit_utils.applications.app_deployer.ApplicationMetaData)]_

### _class_ AppDeployParams

Parameters for deploying an app

#### metadata _: [AppDeploymentMetaData](#algokit_utils.applications.app_deployer.AppDeploymentMetaData)_

The deployment metadata

#### deploy_time_params _: TealTemplateParams | None_ _= None_

Optional template parameters to use during compilation

#### on_schema_break _: Literal['replace', 'fail', 'append'] | [OnSchemaBreak](/docs/algokit-utils/python/latest/api/algokit_utils/applications/enums/#algokit_utils.applications.enums.OnSchemaBreak) | None_ _= None_

Optional on schema break action

#### on_update _: Literal['update', 'replace', 'fail', 'append'] | [OnUpdate](/docs/algokit-utils/python/latest/api/algokit_utils/applications/enums/#algokit_utils.applications.enums.OnUpdate) | None_ _= None_

Optional on update action

#### create_params _: AppCreateParams | AppCreateMethodCallParams_

The creation parameters

#### update_params _: AppUpdateParams | AppUpdateMethodCallParams_

The update parameters

#### delete_params _: AppDeleteParams | AppDeleteMethodCallParams_

The deletion parameters

#### existing_deployments _: [ApplicationLookup](#algokit_utils.applications.app_deployer.ApplicationLookup) | None_ _= None_

Optional existing deployments

#### ignore_cache _: bool_ _= False_

Whether to ignore the cache

#### max_fee _: int | None_ _= None_

Optional maximum fee

#### send_params _: [SendParams](/docs/algokit-utils/python/latest/api/algokit_utils/models/transaction/#algokit_utils.models.transaction.SendParams) | None_ _= None_

Optional send parameters

### _class_ AppDeployResult

The result of a deployment

#### app _: [ApplicationMetaData](#algokit_utils.applications.app_deployer.ApplicationMetaData)_

The application metadata

#### operation_performed _: [OperationPerformed](/docs/algokit-utils/python/latest/api/algokit_utils/applications/enums/#algokit_utils.applications.enums.OperationPerformed)_

The operation performed

#### create_result _: [SendAppCreateTransactionResult](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendAppCreateTransactionResult)[[ABIReturn](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#algokit_utils.applications.abi.ABIReturn)] | None_ _= None_

The create result

#### update_result _: [SendAppUpdateTransactionResult](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendAppUpdateTransactionResult)[[ABIReturn](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#algokit_utils.applications.abi.ABIReturn)] | None_ _= None_

The update result

#### delete_result _: [SendAppTransactionResult](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendAppTransactionResult)[[ABIReturn](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#algokit_utils.applications.abi.ABIReturn)] | None_ _= None_

The delete result

### _class_ AppDeployer(app_manager: [AppManager](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_manager/#algokit_utils.applications.app_manager.AppManager), transaction_sender: [AlgorandClientTransactionSender](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.AlgorandClientTransactionSender), indexer: IndexerClient | None = None)

Manages deployment and deployment metadata of applications

- **Parameters:**
  - **app_manager** – The app manager to use
  - **transaction_sender** – The transaction sender to use
  - **indexer** – The indexer to use
- **Example:**
  ```python
  deployer = AppDeployer(app_manager, transaction_sender, indexer)
  ```

#### deploy(deployment: [AppDeployParams](#algokit_utils.applications.app_deployer.AppDeployParams)) → [AppDeployResult](#algokit_utils.applications.app_deployer.AppDeployResult)

Idempotently deploy (create if not exists, update if changed) an app against the given name for the given
creator account, including deploy-time TEAL template placeholder substitutions (if specified).

To understand the architecture decisions behind this functionality please see
[https://github.com/algorandfoundation/algokit-cli/blob/main/docs/architecture-decisions/2023-01-12_smart-contract-deployment.md](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/architecture-decisions/2023-01-12_smart-contract-deployment.md)

**Note:** When using the return from this function be sure to check operation_performed to get access to
return properties like transaction, confirmation and delete_result.

**Note:** if there is a breaking state schema change to an existing app (and on_schema_break is set to
‘replace’) the existing app will be deleted and re-created.

**Note:** if there is an update (different TEAL code) to an existing app (and on_update is set to ‘replace’)
the existing app will be deleted and re-created.

- **Parameters:**
  **deployment** – The arguments to control the app deployment
- **Returns:**
  The result of the deployment
- **Raises:**
  **ValueError** – If the app spec format is invalid
- **Example:**
  ```python
  deployer.deploy(AppDeployParams(
      create_params=AppCreateParams(
          sender='SENDER_ADDRESS',
          approval_program='APPROVAL PROGRAM',
          clear_state_program='CLEAR PROGRAM',
          schema={
              'global_byte_slices': 0,
              'global_ints': 0,
              'local_byte_slices': 0,
              'local_ints': 0
          }
      ),
      update_params=AppUpdateParams(
          sender='SENDER_ADDRESS'
      ),
      delete_params=AppDeleteParams(
          sender='SENDER_ADDRESS'
      ),
      metadata=AppDeploymentMetaData(
          name='my_app',
          version='2.0',
          updatable=False,
          deletable=False
      ),
      on_schema_break=OnSchemaBreak.AppendApp,
      on_update=OnUpdate.AppendApp
  )
  )
  ```

#### get_creator_apps_by_name(\*, creator_address: str, ignore_cache: bool = False) → [ApplicationLookup](#algokit_utils.applications.app_deployer.ApplicationLookup)

Returns a lookup of name => app metadata (id, address, …metadata) for all apps created by the given account
that have an [ARC-2](</docs/algokit-utils/python/latest/api/algokit_utils/applications/app_deployer/[https:/github.com/algorandfoundation/arcs/blob/main/arcs/arc-0002.md](https:/github.com/algorandfoundation/arcs/blob/main/arcs/arc-0002/)>) AppDeployNote as
the transaction note of the app creation transaction.

This function caches the result for the given creator account so that subsequent calls won’t require an indexer
lookup.

If the AppManager instance wasn’t created with an indexer client, this function will throw an error.

- **Parameters:**
  - **creator_address** – The address of the account that is the creator of the apps you want to search for
  - **ignore_cache** – Whether or not to ignore the cache and force a lookup, default: use the cache
- **Returns:**
  A name-based lookup of the app metadata
- **Raises:**
  **ValueError** – If the app spec format is invalid
- **Example:**
  ```python
  result = await deployer.get_creator_apps_by_name(creator)
  ```

</div>
