---
title: AppDeployer
sidebar:
  label: AppDeployer
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_deployer.AppDeployer(app_manager: [algokit_utils.applications.app_manager.AppManager](/reference/algokit-utils-py/api/applications/app_manager/appmanager/#algokit_utils.applications.app_manager.AppManager), transaction_sender: [algokit_utils.transactions.transaction_sender.AlgorandClientTransactionSender](/reference/algokit-utils-py/api/transactions/transaction_sender/algorandclienttransactionsender/#algokit_utils.transactions.transaction_sender.AlgorandClientTransactionSender), indexer: algosdk.v2client.indexer.IndexerClient | None = None)

Manages deployment and deployment metadata of applications

- **Parameters:**
  - **app_manager** – The app manager to use
  - **transaction_sender** – The transaction sender to use
  - **indexer** – The indexer to use
- **Example:**
  ```pycon
  >>> deployer = AppDeployer(app_manager, transaction_sender, indexer)
  ```

#### deploy(deployment: [AppDeployParams](AppDeployParams.md#algokit_utils.applications.app_deployer.AppDeployParams)) → [AppDeployResult](AppDeployResult.md#algokit_utils.applications.app_deployer.AppDeployResult)

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
  ```pycon
  >>> deployer.deploy(AppDeployParams(
  ...     create_params=AppCreateParams(
  ...         sender='SENDER_ADDRESS',
  ...         approval_program='APPROVAL PROGRAM',
  ...         clear_state_program='CLEAR PROGRAM',
  ...         schema={
  ...             'global_byte_slices': 0,
  ...             'global_ints': 0,
  ...             'local_byte_slices': 0,
  ...             'local_ints': 0
  ...         }
  ...     ),
  ...     update_params=AppUpdateParams(
  ...         sender='SENDER_ADDRESS'
  ...     ),
  ...     delete_params=AppDeleteParams(
  ...         sender='SENDER_ADDRESS'
  ...     ),
  ...     metadata=AppDeploymentMetaData(
  ...         name='my_app',
  ...         version='2.0',
  ...         updatable=False,
  ...         deletable=False
  ...     ),
  ...     on_schema_break=OnSchemaBreak.AppendApp,
  ...     on_update=OnUpdate.AppendApp
  ... )
  ... )
  ```

#### get_creator_apps_by_name(\*, creator_address: str, ignore_cache: bool = False) → [ApplicationLookup](ApplicationLookup.md#algokit_utils.applications.app_deployer.ApplicationLookup)

Returns a lookup of name => app metadata (id, address, …metadata) for all apps created by the given account
that have an [ARC-2](<[https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0002.md)>) AppDeployNote as
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
  ```pycon
  >>> result = await deployer.get_creator_apps_by_name(creator)
  ```
