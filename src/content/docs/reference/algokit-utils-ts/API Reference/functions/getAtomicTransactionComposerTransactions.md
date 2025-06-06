---
editUrl: false
next: false
prev: false
title: "getAtomicTransactionComposerTransactions"
---

> **getAtomicTransactionComposerTransactions**(`atc`): `TransactionWithSigner`[]

Defined in: [src/transaction/transaction.ts:1134](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L1134)

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
