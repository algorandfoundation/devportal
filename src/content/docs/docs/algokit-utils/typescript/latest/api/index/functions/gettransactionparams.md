---
editUrl: false
next: false
prev: false
title: "getTransactionParams"
---

> **getTransactionParams**(`params`, `algod`): `Promise`\<`SuggestedParams`\>

Defined in: [src/transaction/transaction.ts:1175](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1175)

:::caution[Deprecated]
Use `suggestedParams ? { ...suggestedParams } : await algod.getTransactionParams().do()` instead

Returns suggested transaction parameters from algod unless some are already provided.
:::

## Parameters

### params

`SuggestedParams` \| `undefined`

Optionally provide parameters to use

### algod

`AlgodClient`

Algod algod

## Returns

`Promise`\<`SuggestedParams`\>

The suggested transaction parameters
