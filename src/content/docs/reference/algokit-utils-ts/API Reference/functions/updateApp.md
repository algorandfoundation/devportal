---
editUrl: false
next: false
prev: false
title: "updateApp"
---

> **updateApp**(`update`, `algod`): `Promise`\<`Partial`\<`AppCompilationResult`\> & `AppCallTransactionResult`\>

Defined in: [src/app.ts:104](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L104)

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
