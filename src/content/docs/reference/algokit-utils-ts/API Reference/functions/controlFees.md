---
editUrl: false
next: false
prev: false
title: "controlFees"
---

> **controlFees**\<`T`\>(`transaction`, `feeControl`): `T`

Defined in: [src/transaction/transaction.ts:901](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L901)

:::caution[Deprecated]
Use `TransactionComposer` and the `maxFee` and `staticFee` fields in the transaction params instead.

Allows for control of fees on a `Transaction` or `SuggestedParams` object
:::

## Type Parameters

• **T** *extends* `Transaction` \| `SuggestedParams`

## Parameters

### transaction

`T`

The transaction or suggested params

### feeControl

The fee control parameters

#### fee

`AlgoAmount`

#### maxFee

`AlgoAmount`

## Returns

`T`
