---
editUrl: false
next: false
prev: false
title: "waitForConfirmation"
---

> **waitForConfirmation**(`transactionId`, `maxRoundsToWait`, `algod`): `Promise`\<`PendingTransactionResponse`\>

Defined in: [src/transaction/transaction.ts:1064](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1064)

Wait until the transaction is confirmed or rejected, or until `timeout`
number of rounds have passed.

## Parameters

### transactionId

`string`

The transaction ID to wait for

### maxRoundsToWait

`number` \| `bigint`

Maximum number of rounds to wait

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`PendingTransactionResponse`\>

Pending transaction information

## Throws

Throws an error if the transaction is not confirmed or rejected in the next `timeout` rounds
