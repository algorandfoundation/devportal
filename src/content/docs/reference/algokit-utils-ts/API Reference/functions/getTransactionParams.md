---
editUrl: false
next: false
prev: false
title: "getTransactionParams"
---

> **getTransactionParams**(`params`, `algod`): `Promise`\<`SuggestedParams`\>

Defined in: [src/transaction/transaction.ts:928](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L928)

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
