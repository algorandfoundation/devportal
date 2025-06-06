---
editUrl: false
next: false
prev: false
title: "waitForConfirmation"
---

> **waitForConfirmation**(`transactionId`, `maxRoundsToWait`, `algod`): `Promise`\<`PendingTransactionResponse`\>

Defined in: [src/transaction/transaction.ts:1001](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L1001)

Wait until the transaction is confirmed or rejected, or until `timeout`
number of rounds have passed.

## Parameters

### transactionId

`string`

The transaction ID to wait for

### maxRoundsToWait

Maximum number of rounds to wait

`number` | `bigint`

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`PendingTransactionResponse`\>

Pending transaction information

## Throws

Throws an error if the transaction is not confirmed or rejected in the next `timeout` rounds
