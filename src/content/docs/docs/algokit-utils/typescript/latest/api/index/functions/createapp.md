---
editUrl: false
next: false
prev: false
title: "createApp"
---

> **createApp**(`create`, `algod`): `Promise`\<`Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/)\> & [`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/) & [`AppReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appreference/)\>

Defined in: [src/app.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L44)

:::caution[Deprecated]
Use `algorand.send.appCreate()` / `algorand.createTransaction.appCreate()` / `algorand.send.appCreateMethodCall()`
/ `algorand.createTransaction.appCreateMethodCall()` instead

Creates a smart contract app, returns the details of the created app.
:::

## Parameters

### create

[`CreateAppParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/createappparams/)

The parameters to create the app with

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/)\> & [`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/) & [`AppReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appreference/)\>

The details of the created app, or the transaction to create it if `skipSending` and the compilation result
