---
editUrl: false
next: false
prev: false
title: "ApplicationClient"
---

Defined in: [src/types/app-client.ts:1798](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1798)

:::caution[Deprecated]
Use `AppClient` instead e.g. via `algorand.client.getAppClientById` or
`algorand.client.getAppClientByCreatorAndName`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Application client - a class that wraps an ARC-0032 app spec and provides high productivity methods to deploy and call the app
:::

## Constructors

### Constructor

> **new ApplicationClient**(`appDetails`, `algod`): `ApplicationClient`

Defined in: [src/types/app-client.ts:1825](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1825)

:::caution[Deprecated]
Use `AppClient` instead e.g. via `algorand.client.getAppClientById` or
`algorand.client.getAppClientByCreatorAndName`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Create a new ApplicationClient instance
:::

#### Parameters

##### appDetails

[`AppSpecAppDetails`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appspecappdetails/)

The details of the app

##### algod

`AlgodClient`

An algod instance

#### Returns

`ApplicationClient`

## Methods

### ~~call()~~

> **call**(`call?`): `Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

Defined in: [src/types/app-client.ts:2148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2148)

:::caution[Deprecated]
Use `appClient.send.call` or `appClient.createTransaction.call` from an `AppClient` instance instead.

Issues a no_op (normal) call to the app.
:::

#### Parameters

##### call?

[`AppClientCallParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcallparams/)

The call details.

#### Returns

`Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

The result of the call

***

### ~~callOfType()~~

> **callOfType**(`call?`, `callType`): `Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

Defined in: [src/types/app-client.ts:2230](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2230)

:::caution[Deprecated]
Use `appClient.send.call` or `appClient.createTransaction.call` from an `AppClient` instance instead.

Issues a call to the app with the given call type.
:::

#### Parameters

##### call?

[`AppClientCallParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcallparams/) = `{}`

The call details.

##### callType

`NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `ClearStateOC` \| `DeleteApplicationOC` \| `"no_op"` \| `"opt_in"` \| `"close_out"` \| `"clear_state"` \| `"delete_application"`

The call type

#### Returns

`Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

The result of the call

***

### ~~clearState()~~

> **clearState**(`call?`): `Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

Defined in: [src/types/app-client.ts:2207](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2207)

:::caution[Deprecated]
Use `appClient.send.clearState` or `appClient.createTransaction.clearState` from an `AppClient` instance instead.

Issues a clear_state call to the app.
:::

#### Parameters

##### call?

[`AppClientClearStateParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientclearstateparams/)

The call details.

#### Returns

`Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

The result of the call

***

### ~~closeOut()~~

> **closeOut**(`call?`): `Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

Defined in: [src/types/app-client.ts:2196](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2196)

:::caution[Deprecated]
Use `appClient.send.closeOut` or `appClient.createTransaction.closeOut` from an `AppClient` instance instead.

Issues a close_out call to the app.
:::

#### Parameters

##### call?

[`AppClientCallParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcallparams/)

The call details.

#### Returns

`Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

The result of the call

***

### ~~compile()~~

> **compile**(`compilation?`): `Promise`\<\{ `approvalCompiled`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `clearCompiled`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); \}\>

Defined in: [src/types/app-client.ts:1864](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1864)

:::caution[Deprecated]
Use `AppClient.compile()` instead.

Compiles the approval and clear state programs and sets up the source map.
:::

#### Parameters

##### compilation?

[`AppClientCompilationParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appclientcompilationparams/)

The deploy-time parameters for the compilation

#### Returns

`Promise`\<\{ `approvalCompiled`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `clearCompiled`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); \}\>

The compiled approval and clear state programs

***

### ~~create()~~

> **create**(`create?`): `Promise`\<\{ `appAddress`: `string`; `appId`: `number` \| `bigint`; `compiledApproval`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation?`: `PendingTransactionResponse`; `confirmations?`: `PendingTransactionResponse`[]; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `transaction`: `Transaction`; `transactions`: `Transaction`[]; \}\>

Defined in: [src/types/app-client.ts:2043](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2043)

:::caution[Deprecated]
Use `create` from an `AppFactory` instance instead.

Creates a smart contract app, returns the details of the created app.
:::

#### Parameters

##### create?

[`AppClientCreateParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcreateparams/)

The parameters to create the app with

#### Returns

`Promise`\<\{ `appAddress`: `string`; `appId`: `number` \| `bigint`; `compiledApproval`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation?`: `PendingTransactionResponse`; `confirmations?`: `PendingTransactionResponse`[]; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `transaction`: `Transaction`; `transactions`: `Transaction`[]; \}\>

The details of the created app, or the transaction to create it if `skipSending` and the compilation result

***

### ~~delete()~~

> **delete**(`call?`): `Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

Defined in: [src/types/app-client.ts:2218](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2218)

:::caution[Deprecated]
Use `appClient.send.delete` or `appClient.createTransaction.delete` from an `AppClient` instance instead.

Issues a delete_application call to the app.
:::

#### Parameters

##### call?

[`AppClientCallParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcallparams/)

The call details.

#### Returns

`Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

The result of the call

***

### ~~deploy()~~

> **deploy**(`deploy?`): `Promise`\<`Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/)\> & [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) & `object` \| \{ `appAddress`: `string`; `appId`: `number` \| `bigint`; `compiledApproval`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `number`; `deletable?`: `boolean`; `deleted`: `boolean`; `name`: `string`; `operationPerformed`: `"update"` \| `"create"`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `transaction`: `Transaction`; `transactions`: `Transaction`[]; `updatable?`: `boolean`; `updatedRound`: `number`; `version`: `string`; \} \| \{ `appAddress`: `string`; `appId`: `number` \| `bigint`; `compiledApproval`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `number`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteResult`: [`ConfirmedTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresult/); `deleteReturn?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `name`: `string`; `operationPerformed`: `"replace"`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `transaction`: `Transaction`; `transactions`: `Transaction`[]; `updatable?`: `boolean`; `updatedRound`: `number`; `version`: `string`; \}\>

Defined in: [src/types/app-client.ts:1932](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1932)

:::caution[Deprecated]
Use `deploy` from an `AppFactory` instance instead.

Idempotently deploy (create, update/delete if changed) an app against the given name via the given creator account, including deploy-time template placeholder substitutions.

To understand the architecture decisions behind this functionality please see https://github.com/algorandfoundation/algokit-cli/blob/main/docs/src/content/docs/architecture-decisions/2023-01-12_smart-contract-deployment.md

**Note:** if there is a breaking state schema change to an existing app (and `onSchemaBreak` is set to `'replace'`) the existing app will be deleted and re-created.

**Note:** if there is an update (different TEAL code) to an existing app (and `onUpdate` is set to `'replace'`) the existing app will be deleted and re-created.
:::

#### Parameters

##### deploy?

[`AppClientDeployParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appclientdeployparams/)

Deployment details

#### Returns

`Promise`\<`Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/)\> & [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) & `object` \| \{ `appAddress`: `string`; `appId`: `number` \| `bigint`; `compiledApproval`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `number`; `deletable?`: `boolean`; `deleted`: `boolean`; `name`: `string`; `operationPerformed`: `"update"` \| `"create"`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `transaction`: `Transaction`; `transactions`: `Transaction`[]; `updatable?`: `boolean`; `updatedRound`: `number`; `version`: `string`; \} \| \{ `appAddress`: `string`; `appId`: `number` \| `bigint`; `compiledApproval`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `createdMetadata`: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/); `createdRound`: `number`; `deletable?`: `boolean`; `deleted`: `boolean`; `deleteResult`: [`ConfirmedTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/confirmedtransactionresult/); `deleteReturn?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `name`: `string`; `operationPerformed`: `"replace"`; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `transaction`: `Transaction`; `transactions`: `Transaction`[]; `updatable?`: `boolean`; `updatedRound`: `number`; `version`: `string`; \}\>

The metadata and transaction result(s) of the deployment, or just the metadata if it didn't need to issue transactions

***

### ~~exportSourceMaps()~~

> **exportSourceMaps**(): [`AppSourceMaps`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appsourcemaps/)

Defined in: [src/types/app-client.ts:1897](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1897)

Export the current source maps for the app.

#### Returns

[`AppSourceMaps`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appsourcemaps/)

The source maps

***

### ~~exposeLogicError()~~

> **exposeLogicError**(`e`, `isClear?`): `Error`

Defined in: [src/types/app-client.ts:2552](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2552)

Takes an error that may include a logic error from a smart contract call and re-exposes the error to include source code information via the source map.
This is automatically used within `ApplicationClient` but if you pass `skipSending: true` e.g. if doing a group transaction
 then you can use this in a try/catch block to get better debugging information.

#### Parameters

##### e

`Error`

The error to parse

##### isClear?

`boolean`

Whether or not the code was running the clear state program

#### Returns

`Error`

The new error, or if there was no logic error or source map then the wrapped error with source details

***

### ~~fundAppAccount()~~

> **fundAppAccount**(`fund`): `Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/) \| \{ `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `groupId`: `string`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; \} & `object`\>

Defined in: [src/types/app-client.ts:2269](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2269)

Funds Algo into the app account for this app.

#### Parameters

##### fund

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/) \| [`FundAppAccountParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/fundappaccountparams/)

The parameters for the funding or the funding amount

#### Returns

`Promise`\<[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionresult/) \| \{ `confirmation`: `PendingTransactionResponse`; `confirmations`: `PendingTransactionResponse`[]; `groupId`: `string`; `returns?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)[]; `transaction`: `Transaction`; `transactions`: `Transaction`[]; `txIds`: `string`[]; \} & `object`\>

The result of the funding

***

### ~~getABIMethod()~~

> **getABIMethod**(`method`): `ABIMethod` \| `undefined`

Defined in: [src/types/app-client.ts:2510](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2510)

Returns the ABI Method for the given method name string for the app represented by this application client instance

#### Parameters

##### method

`string`

Either the name of the method or the ABI method spec definition string

#### Returns

`ABIMethod` \| `undefined`

The ABI method for the given method

***

### ~~getABIMethodParams()~~

> **getABIMethodParams**(`method`): `ABIMethodParams` \| `undefined`

Defined in: [src/types/app-client.ts:2488](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2488)

:::caution[Deprecated]
Use `appClient.getABIMethod` instead.

Returns the ABI Method parameters for the given method name string for the app represented by this application client instance
:::

#### Parameters

##### method

`string`

Either the name of the method or the ABI method spec definition string

#### Returns

`ABIMethodParams` \| `undefined`

The ABI method params for the given method

***

### ~~getAppReference()~~

> **getAppReference**(): `Promise`\<[`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) \| [`AppReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appreference/)\>

Defined in: [src/types/app-client.ts:2522](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2522)

:::caution[Deprecated]
Use `appClient.appId` and `appClient.appAddress` from an `AppClient` instance instead.

Gets the reference information for the current application instance.
`appId` will be 0 if it can't find an app.
:::

#### Returns

`Promise`\<[`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/) \| [`AppReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appreference/)\>

The app reference, or if deployed using the `deploy` method, the app metadata too

***

### ~~getBoxNames()~~

> **getBoxNames**(): `Promise`\<[`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)[]\>

Defined in: [src/types/app-client.ts:2325](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2325)

Returns the names of all current boxes for the current app.

#### Returns

`Promise`\<[`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)[]\>

The names of the boxes

***

### ~~getBoxValue()~~

> **getBoxValue**(`name`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [src/types/app-client.ts:2340](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2340)

Returns the value of the given box for the current app.

#### Parameters

##### name

`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)

The name of the box to return either as a string, binary array or `BoxName`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The current box value as a byte array

***

### ~~getBoxValueFromABIType()~~

> **getBoxValueFromABIType**(`name`, `type`): `Promise`\<`ABIValue`\>

Defined in: [src/types/app-client.ts:2356](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2356)

Returns the value of the given box for the current app.

#### Parameters

##### name

`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)

The name of the box to return either as a string, binary array or `BoxName`

##### type

`ABIType`

#### Returns

`Promise`\<`ABIValue`\>

The current box value as a byte array

***

### ~~getBoxValues()~~

> **getBoxValues**(`filter?`): `Promise`\<`object`[]\>

Defined in: [src/types/app-client.ts:2372](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2372)

Returns the values of all current boxes for the current app.
Note: This will issue multiple HTTP requests (one per box) and it's not an atomic operation so values may be out of sync.

#### Parameters

##### filter?

(`name`) => `boolean`

Optional filter to filter which boxes' values are returned

#### Returns

`Promise`\<`object`[]\>

The (name, value) pair of the boxes with values as raw byte arrays

***

### ~~getBoxValuesFromABIType()~~

> **getBoxValuesFromABIType**(`type`, `filter?`): `Promise`\<`object`[]\>

Defined in: [src/types/app-client.ts:2394](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2394)

Returns the values of all current boxes for the current app decoded using an ABI Type.
Note: This will issue multiple HTTP requests (one per box) and it's not an atomic operation so values may be out of sync.

#### Parameters

##### type

`ABIType`

The ABI type to decode the values with

##### filter?

(`name`) => `boolean`

Optional filter to filter which boxes' values are returned

#### Returns

`Promise`\<`object`[]\>

The (name, value) pair of the boxes with values as the ABI Value

***

### ~~getCallArgs()~~

> **getCallArgs**(`args`, `sender`): `Promise`\<[`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcallargs/) \| `undefined`\>

Defined in: [src/types/app-client.ts:2418](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2418)

:::caution[Deprecated]
Use `appClient.params.*` from an `AppClient` instance instead.

Returns the arguments for an app call for the given ABI method or raw method specification.
:::

#### Parameters

##### args

[`AppClientCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcallargs/) \| `undefined`

The call args specific to this application client

##### sender

[`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

The sender of this call. Will be used to fetch any default argument values if applicable

#### Returns

`Promise`\<[`AppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcallargs/) \| `undefined`\>

The call args ready to pass into an app call

***

### ~~getGlobalState()~~

> **getGlobalState**(): `Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

Defined in: [src/types/app-client.ts:2297](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2297)

Returns global state for the current app.

#### Returns

`Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

The global state

***

### ~~getLocalState()~~

> **getLocalState**(`account`): `Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

Defined in: [src/types/app-client.ts:2311](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2311)

Returns local state for the given account / account address.

#### Parameters

##### account

`string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

#### Returns

`Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

The global state

***

### ~~importSourceMaps()~~

> **importSourceMaps**(`sourceMaps`): `void`

Defined in: [src/types/app-client.ts:1914](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L1914)

Import source maps for the app.

#### Parameters

##### sourceMaps

[`AppSourceMaps`](/docs/algokit-utils/typescript/latest/api/types/app-client/interfaces/appsourcemaps/)

The source maps to import

#### Returns

`void`

***

### ~~optIn()~~

> **optIn**(`call?`): `Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

Defined in: [src/types/app-client.ts:2185](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2185)

:::caution[Deprecated]
Use `appClient.send.optIn` or `appClient.createTransaction.optIn` from an `AppClient` instance instead.

Issues a opt_in call to the app.
:::

#### Parameters

##### call?

[`AppClientCallParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientcallparams/)

The call details.

#### Returns

`Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

The result of the call

***

### ~~update()~~

> **update**(`update?`): `Promise`\<\{ `compiledApproval`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation?`: `PendingTransactionResponse`; `confirmations?`: `PendingTransactionResponse`[]; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `transaction`: `Transaction`; `transactions`: `Transaction`[]; \}\>

Defined in: [src/types/app-client.ts:2107](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-client.ts#L2107)

:::caution[Deprecated]
Use `appClient.send.update` or `appClient.createTransaction.update` from an `AppClient` instance instead.

Updates the smart contract app.
:::

#### Parameters

##### update?

[`AppClientUpdateParams`](/docs/algokit-utils/typescript/latest/api/types/app-client/type-aliases/appclientupdateparams/)

The parameters to update the app with

#### Returns

`Promise`\<\{ `compiledApproval`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `compiledClear`: [`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/); `confirmation?`: `PendingTransactionResponse`; `confirmations?`: `PendingTransactionResponse`[]; `return?`: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/); `transaction`: `Transaction`; `transactions`: `Transaction`[]; \}\>

The transaction send result and the compilation result
