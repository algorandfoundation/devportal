---
editUrl: false
next: false
prev: false
title: "controlFees"
---

> **controlFees**\<`T`\>(`transaction`, `feeControl`): `T`

Defined in: [src/transaction/transaction.ts:1085](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L1085)

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
