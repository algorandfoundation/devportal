---
title: algokit_utils.applications.app_factory.AppFactoryDeployResult
---
#### *class* algokit_utils.applications.app_factory.AppFactoryDeployResult

Result from deploying an application via AppFactory

#### app *: [algokit_utils.applications.app_deployer.ApplicationMetaData](/reference/algokit-utils-py/api/applications/app_deployer/applicationmetadata/#algokit_utils.applications.app_deployer.ApplicationMetaData)*

The application metadata

#### operation_performed *: algokit_utils.applications.app_deployer.OperationPerformed*

The operation performed

#### create_result *: [SendAppCreateFactoryTransactionResult](#algokit_utils.applications.app_factory.SendAppCreateFactoryTransactionResult) | None* *= None*

The create result

#### update_result *: [SendAppUpdateFactoryTransactionResult](#algokit_utils.applications.app_factory.SendAppUpdateFactoryTransactionResult) | None* *= None*

The update result

#### delete_result *: [SendAppFactoryTransactionResult](#algokit_utils.applications.app_factory.SendAppFactoryTransactionResult) | None* *= None*

The delete result

#### *classmethod* from_deploy_result(response: [algokit_utils.applications.app_deployer.AppDeployResult](/reference/algokit-utils-py/api/applications/app_deployer/appdeployresult/#algokit_utils.applications.app_deployer.AppDeployResult), deploy_params: [algokit_utils.applications.app_deployer.AppDeployParams](/reference/algokit-utils-py/api/applications/app_deployer/appdeployparams/#algokit_utils.applications.app_deployer.AppDeployParams), app_spec: [algokit_utils.applications.app_spec.arc56.Arc56Contract](/reference/algokit-utils-py/api/applications/app_spec/arc56/arc56contract/#algokit_utils.applications.app_spec.arc56.Arc56Contract), app_compilation_data: [algokit_utils.applications.app_client.AppClientCompilationResult](/reference/algokit-utils-py/api/applications/app_client/appclientcompilationresult/#algokit_utils.applications.app_client.AppClientCompilationResult) | None = None) → typing_extensions.Self

Construct an AppFactoryDeployResult from a deployment result.

* **Parameters:**
  * **response** – The deployment response.
  * **deploy_params** – The deployment parameters.
  * **app_spec** – The application specification.
  * **app_compilation_data** – Optional app compilation data.
* **Returns:**
  An instance of AppFactoryDeployResult.