---
editUrl: false
next: false
prev: false
title: "updateApp"
---

> **updateApp**(`update`, `algod`): `Promise`\<`Partial`\<`AppCompilationResult`\> & `AppCallTransactionResult`\>

Defined in: [src/app.ts:104](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L104)

:::caution[Deprecated]
Use `algorand.send.appUpdate()` / `algorand.createTransaction.appUpdate()` / `algorand.send.appUpdateMethodCall()`
/ `algorand.createTransaction.appUpdateMethodCall()` instead

Updates a smart contract app.
:::

## Parameters

### update

`UpdateAppParams`

The parameters to update the app with

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Partial`\<`AppCompilationResult`\> & `AppCallTransactionResult`\>

The transaction send result and the compilation result
