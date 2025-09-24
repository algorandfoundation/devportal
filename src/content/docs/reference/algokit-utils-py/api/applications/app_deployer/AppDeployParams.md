---
title: algokit_utils.applications.app_deployer.AppDeployParams
---

#### _class_ algokit_utils.applications.app_deployer.AppDeployParams

Parameters for deploying an app

#### metadata _: [AppDeploymentMetaData](/reference/algokit-utils-py/api/AppDeploymentMetaData#algokit_utils.applications.app_deployer.AppDeploymentMetaData)_

The deployment metadata

#### deploy*time_params *: algokit*utils.models.state.TealTemplateParams | None* _= None_

Optional template parameters to use during compilation

#### on*schema_break *: Literal['replace', 'fail', 'append'] | [algokit_utils.applications.enums.OnSchemaBreak](/reference/algokit-utils-py/api/applications/enums/onschemabreak/#algokit_utils.applications.enums.OnSchemaBreak) | None\_ _= None_

Optional on schema break action

#### on*update *: Literal['update', 'replace', 'fail', 'append'] | [algokit_utils.applications.enums.OnUpdate](/reference/algokit-utils-py/api/applications/enums/onupdate/#algokit_utils.applications.enums.OnUpdate) | None\_ _= None_

Optional on update action

#### create*params *: [algokit_utils.transactions.transaction_composer.AppCreateParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appcreateparams/#algokit_utils.transactions.transaction_composer.AppCreateParams) | [algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appcreatemethodcallparams/#algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams)\_

The creation parameters

#### update*params *: [algokit_utils.transactions.transaction_composer.AppUpdateParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appupdateparams/#algokit_utils.transactions.transaction_composer.AppUpdateParams) | [algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appupdatemethodcallparams/#algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams)\_

The update parameters

#### delete*params *: [algokit_utils.transactions.transaction_composer.AppDeleteParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appdeleteparams/#algokit_utils.transactions.transaction_composer.AppDeleteParams) | [algokit_utils.transactions.transaction_composer.AppDeleteMethodCallParams](/reference/algokit-utils-py/api/transactions/transaction_composer/appdeletemethodcallparams/#algokit_utils.transactions.transaction_composer.AppDeleteMethodCallParams)\_

The deletion parameters

#### existing*deployments *: [ApplicationLookup](/reference/algokit-utils-py/api/ApplicationLookup#algokit_utils.applications.app_deployer.ApplicationLookup) | None\_ _= None_

Optional existing deployments

#### ignore*cache *: bool\_ _= False_

Whether to ignore the cache

#### max*fee *: int | None\_ _= None_

Optional maximum fee

#### send*params *: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/models/transaction/sendparams/#algokit_utils.models.transaction.SendParams) | None\_ _= None_

Optional send parameters
