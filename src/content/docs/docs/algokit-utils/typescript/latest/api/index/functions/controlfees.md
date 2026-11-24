---
editUrl: false
next: false
prev: false
title: "controlFees"
---

> **controlFees**\<`T`\>(`transaction`, `feeControl`): `T`

Defined in: [src/transaction/transaction.ts:1148](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1148)

:::caution[Deprecated]
Use `TransactionComposer` and the `maxFee` and `staticFee` fields in the transaction params instead.

Allows for control of fees on a `Transaction` or `SuggestedParams` object
:::

## Type Parameters

### T

`T` *extends* `SuggestedParams` \| `Transaction`

## Parameters

### transaction

`T`

The transaction or suggested params

### feeControl

The fee control parameters

#### fee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

#### maxFee?

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

## Returns

`T`
