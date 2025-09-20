---
title: ApplicationClient
slug: reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/) / ApplicationClient

[types/app-client](/reference/algokit-utils-ts/api/modules/types_app_client/).ApplicationClient

**`Deprecated`**

Use `AppClient` instead e.g. via `algorand.client.getAppClientById` or
`algorand.client.getAppClientByCreatorAndName`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Application client - a class that wraps an ARC-0032 app spec and provides high productivity methods to deploy and call the app

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [\_appAddress](#_appaddress)
- [\_appId](#_appid)
- [\_appName](#_appname)
- [\_approvalSourceMap](#_approvalsourcemap)
- [\_clearSourceMap](#_clearsourcemap)
- [\_creator](#_creator)
- [algod](#algod)
- [appSpec](#appspec)
- [deployTimeParams](#deploytimeparams)
- [existingDeployments](#existingdeployments)
- [indexer](#indexer)
- [params](#params)
- [sender](#sender)

### Methods

- [call](#call)
- [callOfType](#calloftype)
- [clearState](#clearstate)
- [closeOut](#closeout)
- [compile](#compile)
- [create](#create)
- [delete](#delete)
- [deploy](#deploy)
- [exportSourceMaps](#exportsourcemaps)
- [exposeLogicError](#exposelogicerror)
- [fundAppAccount](#fundappaccount)
- [getABIMethod](#getabimethod)
- [getABIMethodParams](#getabimethodparams)
- [getABIMethodSignature](#getabimethodsignature)
- [getAppReference](#getappreference)
- [getBoxNames](#getboxnames)
- [getBoxValue](#getboxvalue)
- [getBoxValueFromABIType](#getboxvaluefromabitype)
- [getBoxValues](#getboxvalues)
- [getBoxValuesFromABIType](#getboxvaluesfromabitype)
- [getCallArgs](#getcallargs)
- [getGlobalState](#getglobalstate)
- [getLocalState](#getlocalstate)
- [importSourceMaps](#importsourcemaps)
- [optIn](#optin)
- [update](#update)

## Constructors

### constructor

• **new ApplicationClient**(`appDetails`, `algod`): [`ApplicationClient`](/reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient/)

#### Parameters

| Name         | Type                                                                                               | Description            |
| :----------- | :------------------------------------------------------------------------------------------------- | :--------------------- |
| `appDetails` | [`AppSpecAppDetails`](/reference/algokit-utils-ts/api/modules/types_app_client/#appspecappdetails) | The details of the app |
| `algod`      | `AlgodClient`                                                                                      | An algod instance      |

#### Returns

[`ApplicationClient`](/reference/algokit-utils-ts/api/classes/types_app_clientapplicationclient/)

**`Deprecated`**

Use `AppClient` instead e.g. via `algorand.client.getAppClientById` or
`algorand.client.getAppClientByCreatorAndName`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Create a new ApplicationClient instance

#### Defined in

[src/types/app-client.ts:1821](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1821)

## Properties

### \_appAddress

• `Private` **\_appAddress**: `string`

#### Defined in

[src/types/app-client.ts:1804](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1804)

---

### \_appId

• `Private` **\_appId**: `number` \| `bigint`

#### Defined in

[src/types/app-client.ts:1803](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1803)

---

### \_appName

• `Private` **\_appName**: `string`

#### Defined in

[src/types/app-client.ts:1806](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1806)

---

### \_approvalSourceMap

• `Private` **\_approvalSourceMap**: `undefined` \| `ProgramSourceMap`

#### Defined in

[src/types/app-client.ts:1808](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1808)

---

### \_clearSourceMap

• `Private` **\_clearSourceMap**: `undefined` \| `ProgramSourceMap`

#### Defined in

[src/types/app-client.ts:1809](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1809)

---

### \_creator

• `Private` **\_creator**: `undefined` \| `string`

#### Defined in

[src/types/app-client.ts:1805](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1805)

---

### algod

• `Private` **algod**: `AlgodClient`

#### Defined in

[src/types/app-client.ts:1795](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1795)

---

### appSpec

• `Private` **appSpec**: [`AppSpec`](/reference/algokit-utils-ts/api/interfaces/types_app_specappspec/)

#### Defined in

[src/types/app-client.ts:1797](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1797)

---

### deployTimeParams

• `Private` `Optional` **deployTimeParams**: [`TealTemplateParams`](/reference/algokit-utils-ts/api/interfaces/types_apptealtemplateparams/)

#### Defined in

[src/types/app-client.ts:1801](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1801)

---

### existingDeployments

• `Private` **existingDeployments**: `undefined` \| [`AppLookup`](/reference/algokit-utils-ts/api/interfaces/types_appapplookup/)

#### Defined in

[src/types/app-client.ts:1800](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1800)

---

### indexer

• `Private` `Optional` **indexer**: `IndexerClient`

#### Defined in

[src/types/app-client.ts:1796](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1796)

---

### params

• `Private` **params**: `undefined` \| `SuggestedParams`

#### Defined in

[src/types/app-client.ts:1799](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1799)

---

### sender

• `Private` **sender**: `undefined` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

#### Defined in

[src/types/app-client.ts:1798](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1798)

## Methods

### call

▸ **call**(`call?`): `Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

#### Parameters

| Name    | Type                                                                                                   | Description       |
| :------ | :----------------------------------------------------------------------------------------------------- | :---------------- |
| `call?` | [`AppClientCallParams`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallparams) | The call details. |

#### Returns

`Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

The result of the call

**`Deprecated`**

Use `appClient.send.call` or `appClient.createTransaction.call` from an `AppClient` instance instead.

Issues a no_op (normal) call to the app.

#### Defined in

[src/types/app-client.ts:2144](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2144)

---

### callOfType

▸ **callOfType**(`call?`, `callType`): `Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

#### Parameters

| Name       | Type                                                                                                                                                                      | Description       |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------- |
| `call`     | [`AppClientCallParams`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallparams)                                                                    | The call details. |
| `callType` | `"no_op"` \| `"opt_in"` \| `"close_out"` \| `"clear_state"` \| `"delete_application"` \| `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `ClearStateOC` \| `DeleteApplicationOC` | The call type     |

#### Returns

`Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

The result of the call

**`Deprecated`**

Use `appClient.send.call` or `appClient.createTransaction.call` from an `AppClient` instance instead.

Issues a call to the app with the given call type.

#### Defined in

[src/types/app-client.ts:2226](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2226)

---

### clearState

▸ **clearState**(`call?`): `Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

#### Parameters

| Name    | Type                                                                                                               | Description       |
| :------ | :----------------------------------------------------------------------------------------------------------------- | :---------------- |
| `call?` | [`AppClientClearStateParams`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientclearstateparams) | The call details. |

#### Returns

`Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

The result of the call

**`Deprecated`**

Use `appClient.send.clearState` or `appClient.createTransaction.clearState` from an `AppClient` instance instead.

Issues a clear_state call to the app.

#### Defined in

[src/types/app-client.ts:2203](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2203)

---

### closeOut

▸ **closeOut**(`call?`): `Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

#### Parameters

| Name    | Type                                                                                                   | Description       |
| :------ | :----------------------------------------------------------------------------------------------------- | :---------------- |
| `call?` | [`AppClientCallParams`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallparams) | The call details. |

#### Returns

`Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

The result of the call

**`Deprecated`**

Use `appClient.send.closeOut` or `appClient.createTransaction.closeOut` from an `AppClient` instance instead.

Issues a close_out call to the app.

#### Defined in

[src/types/app-client.ts:2192](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2192)

---

### compile

▸ **compile**(`compilation?`): `Promise`\<\{ `approvalCompiled`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `clearCompiled`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) }\>

#### Parameters

| Name           | Type                                                                                                                   | Description                                    |
| :------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------- |
| `compilation?` | [`AppClientCompilationParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientcompilationparams/) | The deploy-time parameters for the compilation |

#### Returns

`Promise`\<\{ `approvalCompiled`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `clearCompiled`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) }\>

The compiled approval and clear state programs

**`Deprecated`**

Use `AppClient.compile()` instead.

Compiles the approval and clear state programs and sets up the source map.

#### Defined in

[src/types/app-client.ts:1860](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1860)

---

### create

▸ **create**(`create?`): `Promise`\<\{ `appAddress`: `string` ; `appId`: `number` \| `bigint` ; `compiledApproval`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation?`: `PendingTransactionResponse` ; `confirmations?`: `PendingTransactionResponse`[] ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] }\>

#### Parameters

| Name      | Type                                                                                                       | Description                           |
| :-------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------------ |
| `create?` | [`AppClientCreateParams`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcreateparams) | The parameters to create the app with |

#### Returns

`Promise`\<\{ `appAddress`: `string` ; `appId`: `number` \| `bigint` ; `compiledApproval`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation?`: `PendingTransactionResponse` ; `confirmations?`: `PendingTransactionResponse`[] ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] }\>

The details of the created app, or the transaction to create it if `skipSending` and the compilation result

**`Deprecated`**

Use `create` from an `AppFactory` instance instead.

Creates a smart contract app, returns the details of the created app.

#### Defined in

[src/types/app-client.ts:2039](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2039)

---

### delete

▸ **delete**(`call?`): `Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

#### Parameters

| Name    | Type                                                                                                   | Description       |
| :------ | :----------------------------------------------------------------------------------------------------- | :---------------- |
| `call?` | [`AppClientCallParams`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallparams) | The call details. |

#### Returns

`Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

The result of the call

**`Deprecated`**

Use `appClient.send.delete` or `appClient.createTransaction.delete` from an `AppClient` instance instead.

Issues a delete_application call to the app.

#### Defined in

[src/types/app-client.ts:2214](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2214)

---

### deploy

▸ **deploy**(`deploy?`): `Promise`\<`Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\> & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/) & \{ `operationPerformed`: `"nothing"` } \| \{ `appAddress`: `string` ; `appId`: `number` \| `bigint` ; `compiledApproval`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `createdMetadata`: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/) ; `createdRound`: `number` ; `deletable?`: `boolean` ; `deleted`: `boolean` ; `name`: `string` ; `operationPerformed`: `"update"` \| `"create"` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `updatable?`: `boolean` ; `updatedRound`: `number` ; `version`: `string` } \| \{ `appAddress`: `string` ; `appId`: `number` \| `bigint` ; `compiledApproval`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `createdMetadata`: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/) ; `createdRound`: `number` ; `deletable?`: `boolean` ; `deleteResult`: [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/) ; `deleteReturn?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `deleted`: `boolean` ; `name`: `string` ; `operationPerformed`: `"replace"` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `updatable?`: `boolean` ; `updatedRound`: `number` ; `version`: `string` }\>

#### Parameters

| Name      | Type                                                                                                         | Description        |
| :-------- | :----------------------------------------------------------------------------------------------------------- | :----------------- |
| `deploy?` | [`AppClientDeployParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappclientdeployparams/) | Deployment details |

#### Returns

`Promise`\<`Partial`\<[`AppCompilationResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcompilationresult/)\> & [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/) & \{ `operationPerformed`: `"nothing"` } \| \{ `appAddress`: `string` ; `appId`: `number` \| `bigint` ; `compiledApproval`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `createdMetadata`: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/) ; `createdRound`: `number` ; `deletable?`: `boolean` ; `deleted`: `boolean` ; `name`: `string` ; `operationPerformed`: `"update"` \| `"create"` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `updatable?`: `boolean` ; `updatedRound`: `number` ; `version`: `string` } \| \{ `appAddress`: `string` ; `appId`: `number` \| `bigint` ; `compiledApproval`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `createdMetadata`: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/) ; `createdRound`: `number` ; `deletable?`: `boolean` ; `deleteResult`: [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/) ; `deleteReturn?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `deleted`: `boolean` ; `name`: `string` ; `operationPerformed`: `"replace"` ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `updatable?`: `boolean` ; `updatedRound`: `number` ; `version`: `string` }\>

The metadata and transaction result(s) of the deployment, or just the metadata if it didn't need to issue transactions

**`Deprecated`**

Use `deploy` from an `AppFactory` instance instead.

Idempotently deploy (create, update/delete if changed) an app against the given name via the given creator account, including deploy-time template placeholder substitutions.

To understand the architecture decisions behind this functionality please see https://github.com/algorandfoundation/algokit-cli/blob/main/docs/architecture-decisions/2023-01-12_smart-contract-deployment.md

**Note:** if there is a breaking state schema change to an existing app (and `onSchemaBreak` is set to `'replace'`) the existing app will be deleted and re-created.

**Note:** if there is an update (different TEAL code) to an existing app (and `onUpdate` is set to `'replace'`) the existing app will be deleted and re-created.

#### Defined in

[src/types/app-client.ts:1928](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1928)

---

### exportSourceMaps

▸ **exportSourceMaps**(): [`AppSourceMaps`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappsourcemaps/)

Export the current source maps for the app.

#### Returns

[`AppSourceMaps`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappsourcemaps/)

The source maps

#### Defined in

[src/types/app-client.ts:1893](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1893)

---

### exposeLogicError

▸ **exposeLogicError**(`e`, `isClear?`): `Error`

Takes an error that may include a logic error from a smart contract call and re-exposes the error to include source code information via the source map.
This is automatically used within `ApplicationClient` but if you pass `skipSending: true` e.g. if doing a group transaction
then you can use this in a try/catch block to get better debugging information.

#### Parameters

| Name       | Type      | Description                                                 |
| :--------- | :-------- | :---------------------------------------------------------- |
| `e`        | `Error`   | The error to parse                                          |
| `isClear?` | `boolean` | Whether or not the code was running the clear state program |

#### Returns

`Error`

The new error, or if there was no logic error or source map then the wrapped error with source details

#### Defined in

[src/types/app-client.ts:2548](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2548)

---

### fundAppAccount

▸ **fundAppAccount**(`fund`): `Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/) \| \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] } & \{ `transactions`: `Transaction`[] }\>

Funds Algo into the app account for this app.

#### Parameters

| Name   | Type                                                                                                                                                                                          | Description                                          |
| :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| `fund` | [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/) \| [`FundAppAccountParams`](/reference/algokit-utils-ts/api/interfaces/types_app_clientfundappaccountparams/) | The parameters for the funding or the funding amount |

#### Returns

`Promise`\<[`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/) \| \{ `confirmation`: `PendingTransactionResponse` ; `confirmations`: `PendingTransactionResponse`[] ; `groupId`: `string` ; `returns?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn)[] ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] ; `txIds`: `string`[] } & \{ `transactions`: `Transaction`[] }\>

The result of the funding

#### Defined in

[src/types/app-client.ts:2265](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2265)

---

### getABIMethod

▸ **getABIMethod**(`method`): `undefined` \| `ABIMethod`

Returns the ABI Method for the given method name string for the app represented by this application client instance

#### Parameters

| Name     | Type     | Description                                                            |
| :------- | :------- | :--------------------------------------------------------------------- |
| `method` | `string` | Either the name of the method or the ABI method spec definition string |

#### Returns

`undefined` \| `ABIMethod`

The ABI method for the given method

#### Defined in

[src/types/app-client.ts:2506](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2506)

---

### getABIMethodParams

▸ **getABIMethodParams**(`method`): `undefined` \| `ABIMethodParams`

#### Parameters

| Name     | Type     | Description                                                            |
| :------- | :------- | :--------------------------------------------------------------------- |
| `method` | `string` | Either the name of the method or the ABI method spec definition string |

#### Returns

`undefined` \| `ABIMethodParams`

The ABI method params for the given method

**`Deprecated`**

Use `appClient.getABIMethod` instead.

Returns the ABI Method parameters for the given method name string for the app represented by this application client instance

#### Defined in

[src/types/app-client.ts:2484](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2484)

---

### getABIMethodSignature

▸ **getABIMethodSignature**(`method`): `string`

#### Parameters

| Name     | Type                             |
| :------- | :------------------------------- |
| `method` | `ABIMethodParams` \| `ABIMethod` |

#### Returns

`string`

#### Defined in

[src/types/app-client.ts:2564](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2564)

---

### getAppReference

▸ **getAppReference**(): `Promise`\<[`AppReference`](/reference/algokit-utils-ts/api/interfaces/types_appappreference/) \| [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/)\>

#### Returns

`Promise`\<[`AppReference`](/reference/algokit-utils-ts/api/interfaces/types_appappreference/) \| [`AppMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappmetadata/)\>

The app reference, or if deployed using the `deploy` method, the app metadata too

**`Deprecated`**

Use `appClient.appId` and `appClient.appAddress` from an `AppClient` instance instead.

Gets the reference information for the current application instance.
`appId` will be 0 if it can't find an app.

#### Defined in

[src/types/app-client.ts:2518](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2518)

---

### getBoxNames

▸ **getBoxNames**(): `Promise`\<[`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/)[]\>

Returns the names of all current boxes for the current app.

#### Returns

`Promise`\<[`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/)[]\>

The names of the boxes

#### Defined in

[src/types/app-client.ts:2321](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2321)

---

### getBoxValue

▸ **getBoxValue**(`name`): `Promise`\<`Uint8Array`\>

Returns the value of the given box for the current app.

#### Parameters

| Name   | Type                                                                                                  | Description                                                                 |
| :----- | :---------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `name` | `string` \| `Uint8Array` \| [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/) | The name of the box to return either as a string, binary array or `BoxName` |

#### Returns

`Promise`\<`Uint8Array`\>

The current box value as a byte array

#### Defined in

[src/types/app-client.ts:2336](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2336)

---

### getBoxValueFromABIType

▸ **getBoxValueFromABIType**(`name`, `type`): `Promise`\<`ABIValue`\>

Returns the value of the given box for the current app.

#### Parameters

| Name   | Type                                                                                                  | Description                                                                 |
| :----- | :---------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `name` | `string` \| `Uint8Array` \| [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/) | The name of the box to return either as a string, binary array or `BoxName` |
| `type` | `ABIType`                                                                                             |                                                                             |

#### Returns

`Promise`\<`ABIValue`\>

The current box value as a byte array

#### Defined in

[src/types/app-client.ts:2352](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2352)

---

### getBoxValues

▸ **getBoxValues**(`filter?`): `Promise`\<\{ `name`: [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/) ; `value`: `Uint8Array` }[]\>

Returns the values of all current boxes for the current app.
Note: This will issue multiple HTTP requests (one per box) and it's not an atomic operation so values may be out of sync.

#### Parameters

| Name      | Type                                                                                             | Description                                                |
| :-------- | :----------------------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| `filter?` | (`name`: [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/)) => `boolean` | Optional filter to filter which boxes' values are returned |

#### Returns

`Promise`\<\{ `name`: [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/) ; `value`: `Uint8Array` }[]\>

The (name, value) pair of the boxes with values as raw byte arrays

#### Defined in

[src/types/app-client.ts:2368](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2368)

---

### getBoxValuesFromABIType

▸ **getBoxValuesFromABIType**(`type`, `filter?`): `Promise`\<\{ `name`: [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/) ; `value`: `ABIValue` }[]\>

Returns the values of all current boxes for the current app decoded using an ABI Type.
Note: This will issue multiple HTTP requests (one per box) and it's not an atomic operation so values may be out of sync.

#### Parameters

| Name      | Type                                                                                             | Description                                                |
| :-------- | :----------------------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| `type`    | `ABIType`                                                                                        | The ABI type to decode the values with                     |
| `filter?` | (`name`: [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/)) => `boolean` | Optional filter to filter which boxes' values are returned |

#### Returns

`Promise`\<\{ `name`: [`BoxName`](/reference/algokit-utils-ts/api/interfaces/types_appboxname/) ; `value`: `ABIValue` }[]\>

The (name, value) pair of the boxes with values as the ABI Value

#### Defined in

[src/types/app-client.ts:2390](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2390)

---

### getCallArgs

▸ **getCallArgs**(`args`, `sender`): `Promise`\<`undefined` \| [`AppCallArgs`](/reference/algokit-utils-ts/api/modules/types_app/#appcallargs)\>

#### Parameters

| Name     | Type                                                                                                              | Description                                                                              |
| :------- | :---------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `args`   | `undefined` \| [`AppClientCallArgs`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallargs) | The call args specific to this application client                                        |
| `sender` | [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)           | The sender of this call. Will be used to fetch any default argument values if applicable |

#### Returns

`Promise`\<`undefined` \| [`AppCallArgs`](/reference/algokit-utils-ts/api/modules/types_app/#appcallargs)\>

The call args ready to pass into an app call

**`Deprecated`**

Use `appClient.params.*` from an `AppClient` instance instead.

Returns the arguments for an app call for the given ABI method or raw method specification.

#### Defined in

[src/types/app-client.ts:2414](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2414)

---

### getGlobalState

▸ **getGlobalState**(): `Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

Returns global state for the current app.

#### Returns

`Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

The global state

#### Defined in

[src/types/app-client.ts:2293](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2293)

---

### getLocalState

▸ **getLocalState**(`account`): `Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

Returns local state for the given account / account address.

#### Parameters

| Name      | Type                                                                                                                |
| :-------- | :------------------------------------------------------------------------------------------------------------------ |
| `account` | `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) |

#### Returns

`Promise`\<[`AppState`](/reference/algokit-utils-ts/api/interfaces/types_appappstate/)\>

The global state

#### Defined in

[src/types/app-client.ts:2307](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2307)

---

### importSourceMaps

▸ **importSourceMaps**(`sourceMaps`): `void`

Import source maps for the app.

#### Parameters

| Name         | Type                                                                                         | Description               |
| :----------- | :------------------------------------------------------------------------------------------- | :------------------------ |
| `sourceMaps` | [`AppSourceMaps`](/reference/algokit-utils-ts/api/interfaces/types_app_clientappsourcemaps/) | The source maps to import |

#### Returns

`void`

#### Defined in

[src/types/app-client.ts:1910](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1910)

---

### optIn

▸ **optIn**(`call?`): `Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

#### Parameters

| Name    | Type                                                                                                   | Description       |
| :------ | :----------------------------------------------------------------------------------------------------- | :---------------- |
| `call?` | [`AppClientCallParams`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientcallparams) | The call details. |

#### Returns

`Promise`\<[`AppCallTransactionResult`](/reference/algokit-utils-ts/api/modules/types_app/#appcalltransactionresult)\>

The result of the call

**`Deprecated`**

Use `appClient.send.optIn` or `appClient.createTransaction.optIn` from an `AppClient` instance instead.

Issues a opt_in call to the app.

#### Defined in

[src/types/app-client.ts:2181](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2181)

---

### update

▸ **update**(`update?`): `Promise`\<\{ `compiledApproval`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation?`: `PendingTransactionResponse` ; `confirmations?`: `PendingTransactionResponse`[] ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] }\>

#### Parameters

| Name      | Type                                                                                                       | Description                           |
| :-------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------------ |
| `update?` | [`AppClientUpdateParams`](/reference/algokit-utils-ts/api/modules/types_app_client/#appclientupdateparams) | The parameters to update the app with |

#### Returns

`Promise`\<\{ `compiledApproval`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `compiledClear`: [`CompiledTeal`](/reference/algokit-utils-ts/api/interfaces/types_appcompiledteal/) ; `confirmation?`: `PendingTransactionResponse` ; `confirmations?`: `PendingTransactionResponse`[] ; `return?`: [`ABIReturn`](/reference/algokit-utils-ts/api/modules/types_app/#abireturn) ; `transaction`: `Transaction` ; `transactions`: `Transaction`[] }\>

The transaction send result and the compilation result

**`Deprecated`**

Use `appClient.send.update` or `appClient.createTransaction.update` from an `AppClient` instance instead.

Updates the smart contract app.

#### Defined in

[src/types/app-client.ts:2103](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2103)
