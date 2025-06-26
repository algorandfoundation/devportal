---
editUrl: false
next: false
prev: false
title: "sendAtomicTransactionComposer"
---

> **sendAtomicTransactionComposer**(`atcSend`, `algod`): `Promise`\<`SendAtomicTransactionComposerResults`\>

Defined in: [src/transaction/transaction.ts:777](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L777)

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
