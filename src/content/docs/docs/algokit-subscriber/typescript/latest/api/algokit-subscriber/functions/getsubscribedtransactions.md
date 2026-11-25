---
editUrl: false
next: false
prev: false
title: "getSubscribedTransactions"
---

> **getSubscribedTransactions**(`subscription`, `algod`, `indexer?`): `Promise`\<[`TransactionSubscriptionResult`](/docs/algokit-subscriber/typescript/latest/api/algokit-subscriber/types/interfaces/transactionsubscriptionresult/)\>

Defined in: [src/subscriptions.ts:56](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriptions.ts#L56)

Executes a single pull/poll to subscribe to transactions on the configured Algorand
blockchain for the given subscription context.

## Parameters

### subscription

[`TransactionSubscriptionParams`](/docs/algokit-subscriber/typescript/latest/api/algokit-subscriber/types/interfaces/transactionsubscriptionparams/)

The subscription context.

### algod

`AlgodClient`

An Algod client.

### indexer?

`IndexerClient`

An optional indexer client, only needed when `onMaxRounds` is `catchup-with-indexer`.

## Returns

`Promise`\<[`TransactionSubscriptionResult`](/docs/algokit-subscriber/typescript/latest/api/algokit-subscriber/types/interfaces/transactionsubscriptionresult/)\>

The result of this subscription pull/poll.
