---
editUrl: false
next: false
prev: false
title: "createApp"
---

> **createApp**(`create`, `algod`): `Promise`\<`Partial`\<`AppCompilationResult`\> & `AppCallTransactionResult` & `AppReference`\>

Defined in: [src/app.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L44)

:::caution[Deprecated]
Use `algorand.send.appCreate()` / `algorand.createTransaction.appCreate()` / `algorand.send.appCreateMethodCall()`
/ `algorand.createTransaction.appCreateMethodCall()` instead

Creates a smart contract app, returns the details of the created app.
:::

## Parameters

### create

`CreateAppParams`

The parameters to create the app with

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Partial`\<`AppCompilationResult`\> & `AppCallTransactionResult` & `AppReference`\>

The details of the created app, or the transaction to create it if `skipSending` and the compilation result
