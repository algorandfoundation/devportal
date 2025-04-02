---
editUrl: false
next: false
prev: false
title: "populateAppCallResources"
---

> **populateAppCallResources**(`atc`, `algod`): `Promise`\<`AtomicTransactionComposer`\>

Defined in: [src/transaction/transaction.ts:312](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L312)

Take an existing Atomic Transaction Composer and return a new one with the required
 app call resources packed into it

## Parameters

### atc

`AtomicTransactionComposer`

The ATC containing the txn group

### algod

`AlgodClient`

The algod client to use for the simulation

## Returns

`Promise`\<`AtomicTransactionComposer`\>

A new ATC with the resources packed into the transactions
