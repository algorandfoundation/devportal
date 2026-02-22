---
title: "algokit_utils.applications.app_deployer"
---

<div class="api-ref">

# algokit_utils.applications.app_deployer

## Attributes

| [`APP_DEPLOY_NOTE_DAPP`](#algokit_utils.applications.app_deployer.APP_DEPLOY_NOTE_DAPP)   |    |
|-------------------------------------------------------------------------------------------|----|

## Classes

| [`AppDeploymentMetaData`](#algokit_utils.applications.app_deployer.AppDeploymentMetaData)   | Metadata about an application stored in a transaction note during creation.   |
|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`ApplicationReference`](#algokit_utils.applications.app_deployer.ApplicationReference)     | Information about an Algorand app                                             |
| [`ApplicationMetaData`](#algokit_utils.applications.app_deployer.ApplicationMetaData)       | Complete metadata about a deployed app                                        |
| [`ApplicationLookup`](#algokit_utils.applications.app_deployer.ApplicationLookup)           | Cache of {py:class}\`ApplicationMetaData\` for a specific creator             |
| [`AppDeployParams`](#algokit_utils.applications.app_deployer.AppDeployParams)               | Parameters for deploying an app                                               |
| [`AppDeployResult`](#algokit_utils.applications.app_deployer.AppDeployResult)               | The result of a deployment                                                    |
| [`AppDeployer`](#algokit_utils.applications.app_deployer.AppDeployer)                       | Manages deployment and deployment metadata of applications                    |

## Module Contents

### algokit_utils.applications.app_deployer.APP_DEPLOY_NOTE_DAPP *: str* *= 'ALGOKIT_DEPLOYER'*

### *class* AppDeploymentMetaData

Metadata about an application stored in a transaction note during creation.

#### name *: str*

#### version *: str*

#### deletable *: bool | None*

#### updatable *: bool | None*

#### dictify() → dict[str, str | bool]

### *class* ApplicationReference

Information about an Algorand app

#### app_id *: int*

#### app_address *: str*

### *class* ApplicationMetaData

Complete metadata about a deployed app

#### reference *: [ApplicationReference](#algokit_utils.applications.app_deployer.ApplicationReference)*

#### deploy_metadata *: [AppDeploymentMetaData](#algokit_utils.applications.app_deployer.AppDeploymentMetaData)*

#### created_round *: int*

#### updated_round *: int*

#### deleted *: bool* *= False*

#### *property* app_id *: int*

#### *property* app_address *: str*

#### *property* name *: str*

#### *property* version *: str*

#### *property* deletable *: bool | None*

#### *property* updatable *: bool | None*

### *class* ApplicationLookup

Cache of {py:class}\`ApplicationMetaData\` for a specific creator

Can be used as an argument to {py:class}\`AppClient\` to reduce the number of calls when deploying multiple
apps or discovering multiple app_ids

#### creator *: str*

#### apps *: dict[str, [ApplicationMetaData](#algokit_utils.applications.app_deployer.ApplicationMetaData)]*

### *class* AppDeployParams

Parameters for deploying an app

#### metadata *: [AppDeploymentMetaData](#algokit_utils.applications.app_deployer.AppDeploymentMetaData)*

The deployment metadata

#### deploy_time_params *: TealTemplateParams | None* *= None*

Optional template parameters to use during compilation

#### on_schema_break *: Literal['replace', 'fail', 'append'] | [OnSchemaBreak](/docs/algokit-utils/python/latest/api/algokit_utils/applications/enums/#algokit_utils.applications.enums.OnSchemaBreak) | None* *= None*

Optional on schema break action

#### on_update *: Literal['update', 'replace', 'fail', 'append'] | [OnUpdate](/docs/algokit-utils/python/latest/api/algokit_utils/applications/enums/#algokit_utils.applications.enums.OnUpdate) | None* *= None*

Optional on update action

#### create_params *: AppCreateParams | AppCreateMethodCallParams*

The creation parameters

#### update_params *: AppUpdateParams | AppUpdateMethodCallParams*

The update parameters

#### delete_params *: AppDeleteParams | AppDeleteMethodCallParams*

The deletion parameters

#### existing_deployments *: [ApplicationLookup](#algokit_utils.applications.app_deployer.ApplicationLookup) | None* *= None*

Optional existing deployments

#### ignore_cache *: bool* *= False*

Whether to ignore the cache

#### max_fee *: int | None* *= None*

Optional maximum fee

#### send_params *: [SendParams](/docs/algokit-utils/python/latest/api/algokit_utils/models/transaction/#algokit_utils.models.transaction.SendParams) | None* *= None*

Optional send parameters

### *class* AppDeployResult

The result of a deployment

#### app *: [ApplicationMetaData](#algokit_utils.applications.app_deployer.ApplicationMetaData)*

The application metadata

#### operation_performed *: [OperationPerformed](/docs/algokit-utils/python/latest/api/algokit_utils/applications/enums/#algokit_utils.applications.enums.OperationPerformed)*

The operation performed

#### create_result *: [SendAppCreateTransactionResult](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendAppCreateTransactionResult)[[ABIReturn](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#algokit_utils.applications.abi.ABIReturn)] | None* *= None*

The create result

#### update_result *: [SendAppUpdateTransactionResult](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendAppUpdateTransactionResult)[[ABIReturn](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#algokit_utils.applications.abi.ABIReturn)] | None* *= None*

The update result

#### delete_result *: [SendAppTransactionResult](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.SendAppTransactionResult)[[ABIReturn](/docs/algokit-utils/python/latest/api/algokit_utils/applications/abi/#algokit_utils.applications.abi.ABIReturn)] | None* *= None*

The delete result

### *class* AppDeployer(app_manager: [AppManager](/docs/algokit-utils/python/latest/api/algokit_utils/applications/app_manager/#algokit_utils.applications.app_manager.AppManager), transaction_sender: [AlgorandClientTransactionSender](/docs/algokit-utils/python/latest/api/algokit_utils/transactions/transaction_sender/#algokit_utils.transactions.transaction_sender.AlgorandClientTransactionSender), indexer: IndexerClient | None = None)

Manages deployment and deployment metadata of applications

* **Parameters:**
  * **app_manager** – The app manager to use
  * **transaction_sender** – The transaction sender to use
  * **indexer** – The indexer to use
* **Example:**
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

* **Parameters:**
  **deployment** – The arguments to control the app deployment
* **Returns:**
  The result of the deployment
* **Raises:**
  **ValueError** – If the app spec format is invalid
* **Example:**
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
that have an ARC-2 ([https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md)) AppDeployNote as
the transaction note of the app creation transaction.

This function caches the result for the given creator account so that subsequent calls won’t require an indexer
lookup.

If the AppManager instance wasn’t created with an indexer client, this function will throw an error.

* **Parameters:**
  * **creator_address** – The address of the account that is the creator of the apps you want to search for
  * **ignore_cache** – Whether or not to ignore the cache and force a lookup, default: use the cache
* **Returns:**
  A name-based lookup of the app metadata
* **Raises:**
  **ValueError** – If the app spec format is invalid
* **Example:**
  ```python
  result = await deployer.get_creator_apps_by_name(creator)
  ```

</div>
