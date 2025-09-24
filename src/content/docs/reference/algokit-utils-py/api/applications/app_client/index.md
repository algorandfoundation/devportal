---
title: applications.app_client
sidebar:
  label: Index
  order: 0
---

## Classes

| [`AppClientCompilationResult`](AppClientCompilationResult.md#algokit_utils.applications.app_client.AppClientCompilationResult)                | Result of compiling an application's TEAL code.                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`AppClientCompilationParams`](AppClientCompilationParams.md#algokit_utils.applications.app_client.AppClientCompilationParams)                | Parameters for compiling an application's TEAL code.                  |
| [`CommonAppCallParams`](CommonAppCallParams.md#algokit_utils.applications.app_client.CommonAppCallParams)                                     | Common configuration for app call transaction parameters              |
| [`AppClientCreateSchema`](AppClientCreateSchema.md#algokit_utils.applications.app_client.AppClientCreateSchema)                               | Schema for application creation.                                      |
| [`CommonAppCallCreateParams`](CommonAppCallCreateParams.md#algokit_utils.applications.app_client.CommonAppCallCreateParams)                   | Common configuration for app create call transaction parameters.      |
| [`FundAppAccountParams`](FundAppAccountParams.md#algokit_utils.applications.app_client.FundAppAccountParams)                                  | Parameters for funding an application's account.                      |
| [`AppClientBareCallParams`](AppClientBareCallParams.md#algokit_utils.applications.app_client.AppClientBareCallParams)                         | Parameters for bare application calls.                                |
| [`AppClientBareCallCreateParams`](AppClientBareCallCreateParams.md#algokit_utils.applications.app_client.AppClientBareCallCreateParams)       | Parameters for creating application with bare call.                   |
| [`BaseAppClientMethodCallParams`](BaseAppClientMethodCallParams.md#algokit_utils.applications.app_client.BaseAppClientMethodCallParams)       | Base parameters for application method calls.                         |
| [`AppClientMethodCallParams`](AppClientMethodCallParams.md#algokit_utils.applications.app_client.AppClientMethodCallParams)                   | Parameters for application method calls.                              |
| [`AppClientMethodCallCreateParams`](AppClientMethodCallCreateParams.md#algokit_utils.applications.app_client.AppClientMethodCallCreateParams) | Parameters for creating application with method call                  |
| [`AppClientParams`](AppClientParams.md#algokit_utils.applications.app_client.AppClientParams)                                                 | Full parameters for creating an app client                            |
| [`AppClient`](AppClient.md#algokit_utils.applications.app_client.AppClient)                                                                   | A client for interacting with an Algorand smart contract application. |

## Module Contents

### algokit_utils.applications.app_client.get_constant_block_offset(program: bytes) → int

Calculate the offset after constant blocks in TEAL program.

Analyzes a compiled TEAL program to find the ending offset position after any bytecblock and intcblock operations.

- **Parameters:**
  **program** – The compiled TEAL program as bytes
- **Returns:**
  The maximum offset position after any constant block operations

### algokit_utils.applications.app_client.CreateOnComplete
