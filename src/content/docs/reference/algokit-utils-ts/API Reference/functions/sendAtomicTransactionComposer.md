---
editUrl: false
next: false
prev: false
title: "sendAtomicTransactionComposer"
---

> **sendAtomicTransactionComposer**(`atcSend`, `algod`): `Promise`\<`SendAtomicTransactionComposerResults`\>

Defined in: [src/transaction/transaction.ts:607](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L607)

Signs and sends transactions that have been collected by an `AtomicTransactionComposer`.

## Parameters

### atcSend

`AtomicTransactionComposerToSend`

The parameters controlling the send, including `atc` The `AtomicTransactionComposer` and params to control send behaviour

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendAtomicTransactionComposerResults`\>

An object with transaction IDs, transactions, group transaction ID (`groupTransactionId`) if more than 1 transaction sent, and (if `skipWaiting` is `false` or unset) confirmation (`confirmation`)
