---
editUrl: false
next: false
prev: false
title: "getAtomicTransactionComposerTransactions"
---

> **getAtomicTransactionComposerTransactions**(`atc`): `TransactionWithSigner`[]

Defined in: [src/transaction/transaction.ts:1197](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1197)

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
