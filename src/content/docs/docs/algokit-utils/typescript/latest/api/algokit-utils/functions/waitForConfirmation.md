---
editUrl: false
next: false
prev: false
title: "waitForConfirmation"
---

> **waitForConfirmation**(`transactionId`, `maxRoundsToWait`, `algod`): `Promise`\<[`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)\>

Defined in: [src/transaction/transaction.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L133)

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

[`AlgodClient`](/algokit-utils-ts/api/subpaths/algod-client/classes/algodclient/)

An algod client

## Returns

`Promise`\<[`PendingTransactionResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)\>

Pending transaction information

## Throws

Throws an error if the transaction is not confirmed or rejected in the next `timeout` rounds
