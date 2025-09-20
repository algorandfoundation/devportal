---
title: app_client
---
## Classes

| [`AppClientCompilationResult`](/reference/algokit-utils-py/api/applications/app_client/appclientcompilationresult/#algokit_utils.applications.app_client.AppClientCompilationResult)                | Result of compiling an application's TEAL code.                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`AppClientCompilationParams`](/reference/algokit-utils-py/api/applications/app_client/appclientcompilationparams/#algokit_utils.applications.app_client.AppClientCompilationParams)                | Parameters for compiling an application's TEAL code.                  |
| [`CommonAppCallParams`](/reference/algokit-utils-py/api/applications/app_client/commonappcallparams/#algokit_utils.applications.app_client.CommonAppCallParams)                                     | Common configuration for app call transaction parameters              |
| [`AppClientCreateSchema`](/reference/algokit-utils-py/api/applications/app_client/appclientcreateschema/#algokit_utils.applications.app_client.AppClientCreateSchema)                               | Schema for application creation.                                      |
| [`CommonAppCallCreateParams`](/reference/algokit-utils-py/api/applications/app_client/commonappcallcreateparams/#algokit_utils.applications.app_client.CommonAppCallCreateParams)                   | Common configuration for app create call transaction parameters.      |
| [`FundAppAccountParams`](/reference/algokit-utils-py/api/applications/app_client/fundappaccountparams/#algokit_utils.applications.app_client.FundAppAccountParams)                                  | Parameters for funding an application's account.                      |
| [`AppClientBareCallParams`](/reference/algokit-utils-py/api/applications/app_client/appclientbarecallparams/#algokit_utils.applications.app_client.AppClientBareCallParams)                         | Parameters for bare application calls.                                |
| [`AppClientBareCallCreateParams`](/reference/algokit-utils-py/api/applications/app_client/appclientbarecallcreateparams/#algokit_utils.applications.app_client.AppClientBareCallCreateParams)       | Parameters for creating application with bare call.                   |
| [`BaseAppClientMethodCallParams`](/reference/algokit-utils-py/api/applications/app_client/baseappclientmethodcallparams/#algokit_utils.applications.app_client.BaseAppClientMethodCallParams)       | Base parameters for application method calls.                         |
| [`AppClientMethodCallParams`](/reference/algokit-utils-py/api/applications/app_client/appclientmethodcallparams/#algokit_utils.applications.app_client.AppClientMethodCallParams)                   | Parameters for application method calls.                              |
| [`AppClientMethodCallCreateParams`](/reference/algokit-utils-py/api/applications/app_client/appclientmethodcallcreateparams/#algokit_utils.applications.app_client.AppClientMethodCallCreateParams) | Parameters for creating application with method call                  |
| [`AppClientParams`](/reference/algokit-utils-py/api/applications/app_client/appclientparams/#algokit_utils.applications.app_client.AppClientParams)                                                 | Full parameters for creating an app client                            |
| [`AppClient`](/reference/algokit-utils-py/api/applications/app_client/appclient/#algokit_utils.applications.app_client.AppClient)                                                                   | A client for interacting with an Algorand smart contract application. |

## Module Contents

### algokit_utils.applications.app_client.get_constant_block_offset(program: bytes) → int

Calculate the offset after constant blocks in TEAL program.

Analyzes a compiled TEAL program to find the ending offset position after any bytecblock and intcblock operations.

* **Parameters:**
  **program** – The compiled TEAL program as bytes
* **Returns:**
  The maximum offset position after any constant block operations

### algokit_utils.applications.app_client.CreateOnComplete