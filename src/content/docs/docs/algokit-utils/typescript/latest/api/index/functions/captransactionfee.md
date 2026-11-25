---
editUrl: false
next: false
prev: false
title: "capTransactionFee"
---

> **capTransactionFee**(`transaction`, `maxAcceptableFee`): `void`

Defined in: [src/transaction/transaction.ts:1121](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1121)

:::caution[Deprecated]
Use `TransactionComposer` and the `maxFee` field in the transaction params instead.

Limit the acceptable fee to a defined amount of µAlgo.
This also sets the transaction to be flatFee to ensure the transaction only succeeds at
the estimated rate.
:::

## Parameters

### transaction

`SuggestedParams` \| `Transaction`

The transaction to cap or suggested params object about to be used to create a transaction

### maxAcceptableFee

[`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

The maximum acceptable fee to pay

## Returns

`void`
