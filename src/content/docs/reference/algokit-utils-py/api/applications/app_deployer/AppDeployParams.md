---
title: AppDeployParams
sidebar:
  label: AppDeployParams
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.applications.app_deployer.AppDeployParams

Parameters for deploying an app

#### metadata _: [AppDeploymentMetaData](AppDeploymentMetaData.md#algokit_utils.applications.app_deployer.AppDeploymentMetaData)_

The deployment metadata

#### deploy_time_params _: algokit_utils.models.state.TealTemplateParams | None_ _= None_

Optional template parameters to use during compilation

#### on_schema_break _: Literal['replace', 'fail', 'append'] | [algokit_utils.applications.enums.OnSchemaBreak](/reference/algokit-utils-py/api/applications/enums/onschemabreak/#algokit_utils.applications.enums.OnSchemaBreak) | None_ _= None_

Optional on schema break action

#### on_update _: Literal['update', 'replace', 'fail', 'append'] | [algokit_utils.applications.enums.OnUpdate](/reference/algokit-utils-py/api/applications/enums/onupdate/#algokit_utils.applications.enums.OnUpdate) | None_ _= None_

Optional on update action

#### create_params _: [algokit_utils.transactions.transaction_composer.AppCreateParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appcreateparams/#algokit_utils.transactions.transaction_composer.AppCreateParams) | [algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appcreatemethodcallparams/#algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams)_

The creation parameters

#### update_params _: [algokit_utils.transactions.transaction_composer.AppUpdateParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appupdateparams/#algokit_utils.transactions.transaction_composer.AppUpdateParams) | [algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appupdatemethodcallparams/#algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams)_

The update parameters

#### delete_params _: [algokit_utils.transactions.transaction_composer.AppDeleteParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appdeleteparams/#algokit_utils.transactions.transaction_composer.AppDeleteParams) | [algokit_utils.transactions.transaction_composer.AppDeleteMethodCallParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appdeletemethodcallparams/#algokit_utils.transactions.transaction_composer.AppDeleteMethodCallParams)_

The deletion parameters

#### existing_deployments _: [ApplicationLookup](ApplicationLookup.md#algokit_utils.applications.app_deployer.ApplicationLookup) | None_ _= None_

Optional existing deployments

#### ignore_cache _: bool_ _= False_

Whether to ignore the cache

#### max_fee _: int | None_ _= None_

Optional maximum fee

#### send_params _: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/models/transaction/sendparams/#algokit_utils.models.transaction.SendParams) | None_ _= None_

Optional send parameters
