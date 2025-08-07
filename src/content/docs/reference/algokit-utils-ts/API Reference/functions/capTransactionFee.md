---
editUrl: false
next: false
prev: false
title: "capTransactionFee"
---

> **capTransactionFee**(`transaction`, `maxAcceptableFee`): `void`

Defined in: [src/transaction/transaction.ts:1058](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L1058)

:::caution[Deprecated]
Use `TransactionComposer` and the `maxFee` field in the transaction params instead.

Limit the acceptable fee to a defined amount of µAlgo.
This also sets the transaction to be flatFee to ensure the transaction only succeeds at
the estimated rate.
:::

## Parameters

### transaction

The transaction to cap or suggested params object about to be used to create a transaction

`Transaction` | `SuggestedParams`

### maxAcceptableFee

`AlgoAmount`

The maximum acceptable fee to pay

## Returns

`void`
