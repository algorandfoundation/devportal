---
editUrl: false
next: false
prev: false
title: "updateApp"
---

> **updateApp**(`update`, `algod`): `Promise`\<`Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/)\> & [`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

Defined in: [src/app.ts:104](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L104)

:::caution[Deprecated]
Use `algorand.send.appUpdate()` / `algorand.createTransaction.appUpdate()` / `algorand.send.appUpdateMethodCall()`
/ `algorand.createTransaction.appUpdateMethodCall()` instead

Updates a smart contract app.
:::

## Parameters

### update

[`UpdateAppParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/updateappparams/)

The parameters to update the app with

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Partial`\<[`AppCompilationResult`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcompilationresult/)\> & [`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

The transaction send result and the compilation result
