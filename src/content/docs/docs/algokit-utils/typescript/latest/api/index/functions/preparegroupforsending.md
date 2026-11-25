---
editUrl: false
next: false
prev: false
title: "prepareGroupForSending"
---

> **prepareGroupForSending**(`atc`, `algod`, `sendParams`, `additionalAtcContext?`): `Promise`\<`AtomicTransactionComposer`\>

Defined in: [src/transaction/transaction.ts:438](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L438)

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

[`SendParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendparams/)

The send params for the transaction group

### additionalAtcContext?

[`AdditionalAtomicTransactionComposerContext`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/additionalatomictransactioncomposercontext/)

Additional ATC context used to determine how best to change the transactions in the group

## Returns

`Promise`\<`AtomicTransactionComposer`\>

A new ATC with the changes applied
