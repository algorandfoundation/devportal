---
title: AppDeployParams
---
#### *class* algokit_utils.applications.app_deployer.AppDeployParams

Parameters for deploying an app

#### metadata *: [AppDeploymentMetaData](/reference/algokit-utils-py/api/applications/app_deployer/appdeploymentmetadata/#algokit_utils.applications.app_deployer.AppDeploymentMetaData)*

The deployment metadata

#### deploy_time_params *: algokit_utils.models.state.TealTemplateParams | None* *= None*

Optional template parameters to use during compilation

#### on_schema_break *: Literal['replace', 'fail', 'append'] | [algokit_utils.applications.enums.OnSchemaBreak](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/enums/onschemabreak/#algokit_utils.applications.enums.OnSchemaBreak) | None* *= None*

Optional on schema break action

#### on_update *: Literal['update', 'replace', 'fail', 'append'] | [algokit_utils.applications.enums.OnUpdate](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/enums/onupdate/#algokit_utils.applications.enums.OnUpdate) | None* *= None*

Optional on update action

#### create_params *: [algokit_utils.transactions.transaction_composer.AppCreateParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/transactions/transaction_composer/appcreateparams/#algokit_utils.transactions.transaction_composer.AppCreateParams) | [algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/transactions/transaction_composer/appcreatemethodcallparams/#algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams)*

The creation parameters

#### update_params *: [algokit_utils.transactions.transaction_composer.AppUpdateParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/transactions/transaction_composer/appupdateparams/#algokit_utils.transactions.transaction_composer.AppUpdateParams) | [algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/transactions/transaction_composer/appupdatemethodcallparams/#algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams)*

The update parameters

#### delete_params *: [algokit_utils.transactions.transaction_composer.AppDeleteParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/transactions/transaction_composer/appdeleteparams/#algokit_utils.transactions.transaction_composer.AppDeleteParams) | [algokit_utils.transactions.transaction_composer.AppDeleteMethodCallParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/transactions/transaction_composer/appdeletemethodcallparams/#algokit_utils.transactions.transaction_composer.AppDeleteMethodCallParams)*

The deletion parameters

#### existing_deployments *: [ApplicationLookup](/reference/algokit-utils-py/api/applications/app_deployer/applicationlookup/#algokit_utils.applications.app_deployer.ApplicationLookup) | None* *= None*

Optional existing deployments

#### ignore_cache *: bool* *= False*

Whether to ignore the cache

#### max_fee *: int | None* *= None*

Optional maximum fee

#### send_params *: [algokit_utils.models.transaction.SendParams](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/transaction/sendparams/#algokit_utils.models.transaction.SendParams) | None* *= None*

Optional send parameters