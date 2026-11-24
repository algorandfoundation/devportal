---
editUrl: false
next: false
prev: false
title: "callApp"
---

> **callApp**(`call`, `algod`): `Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

Defined in: [src/app.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L187)

:::caution[Deprecated]
Use `algorand.send.appUpdate()` / `algorand.createTransaction.appUpdate()` / `algorand.send.appUpdateMethodCall()`
/ `algorand.createTransaction.appUpdateMethodCall()` instead

Issues a call to a given app.
:::

## Parameters

### call

[`AppCallParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcallparams/)

The call details.

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<[`AppCallTransactionResult`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltransactionresult/)\>

The result of the call
