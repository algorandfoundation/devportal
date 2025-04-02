---
editUrl: false
next: false
prev: false
title: "callApp"
---

> **callApp**(`call`, `algod`): `Promise`\<`AppCallTransactionResult`\>

Defined in: [src/app.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L187)

:::caution[Deprecated]
Use `algorand.send.appUpdate()` / `algorand.createTransaction.appUpdate()` / `algorand.send.appUpdateMethodCall()`
/ `algorand.createTransaction.appUpdateMethodCall()` instead

Issues a call to a given app.
:::

## Parameters

### call

`AppCallParams`

The call details.

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`AppCallTransactionResult`\>

The result of the call
