---
editUrl: false
next: false
prev: false
title: "getAtomicTransactionComposerTransactions"
---

> **getAtomicTransactionComposerTransactions**(`atc`): `TransactionWithSigner`[]

Defined in: [src/transaction/transaction.ts:950](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L950)

:::caution[Deprecated]
Use `atc.clone().buildGroup()` instead.

Returns the array of transactions currently present in the given `AtomicTransactionComposer`
:::

## Parameters

### atc

`AtomicTransactionComposer`

The atomic transaction composer

## Returns

`TransactionWithSigner`[]

The array of transactions with signers
