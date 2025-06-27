---
editUrl: false
next: false
prev: false
title: "getTransactionParams"
---

> **getTransactionParams**(`params`, `algod`): `Promise`\<`SuggestedParams`\>

Defined in: [src/transaction/transaction.ts:1112](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L1112)

:::caution[Deprecated]
Use `suggestedParams ? { ...suggestedParams } : await algod.getTransactionParams().do()` instead

Returns suggested transaction parameters from algod unless some are already provided.
:::

## Parameters

### params

Optionally provide parameters to use

`undefined` | `SuggestedParams`

### algod

`AlgodClient`

Algod algod

## Returns

`Promise`\<`SuggestedParams`\>

The suggested transaction parameters
