---
editUrl: false
next: false
prev: false
title: "prepareGroupForSending"
---

> **prepareGroupForSending**(`atc`, `algod`, `sendParams`, `additionalAtcContext`?): `Promise`\<`AtomicTransactionComposer`\>

Defined in: [src/transaction/transaction.ts:402](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L402)

Take an existing Atomic Transaction Composer and return a new one with changes applied to the transactions
based on the supplied sendParams to prepare it for sending.
Please note, that before calling `.execute()` on the returned ATC, you must call `.buildGroup()`.

## Parameters

### atc

`AtomicTransactionComposer`

The ATC containing the txn group

### algod

`AlgodClient`

The algod client to use for the simulation

### sendParams

`SendParams`

The send params for the transaction group

### additionalAtcContext?

`AdditionalAtomicTransactionComposerContext`

Additional ATC context used to determine how best to change the transactions in the group

## Returns

`Promise`\<`AtomicTransactionComposer`\>

A new ATC with the changes applied
