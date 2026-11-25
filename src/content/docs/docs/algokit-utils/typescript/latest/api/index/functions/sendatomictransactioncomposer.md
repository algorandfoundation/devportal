---
editUrl: false
next: false
prev: false
title: "sendAtomicTransactionComposer"
---

> **sendAtomicTransactionComposer**(`atcSend`, `algod`): `Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/)\>

Defined in: [src/transaction/transaction.ts:836](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L836)

Signs and sends transactions that have been collected by an `AtomicTransactionComposer`.

## Parameters

### atcSend

[`AtomicTransactionComposerToSend`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/atomictransactioncomposertosend/)

The parameters controlling the send, including `atc` The `AtomicTransactionComposer` and params to control send behaviour

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/)\>

An object with transaction IDs, transactions, group transaction ID (`groupTransactionId`) if more than 1 transaction sent, and (if `skipWaiting` is `false` or unset) confirmation (`confirmation`)
