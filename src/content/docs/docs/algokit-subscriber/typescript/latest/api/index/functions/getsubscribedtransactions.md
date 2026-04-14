---
editUrl: false
next: false
prev: false
title: 'getSubscribedTransactions'
---

> **getSubscribedTransactions**(`subscription`, `algod`, `indexer?`): `Promise`\<[`TransactionSubscriptionResult`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/transactionsubscriptionresult/)\>

Defined in: [src/subscriptions.ts:57](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/subscriptions.ts#L57)

Executes a single pull/poll to subscribe to transactions on the configured Algorand
blockchain for the given subscription context.

## Parameters

### subscription

[`TransactionSubscriptionParams`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/transactionsubscriptionparams/)

The subscription context.

### algod

`AlgodClient`

An Algod client.

### indexer?

`IndexerClient`

An optional indexer client, only needed when `syncBehaviour` is `catchup-with-indexer`.

## Returns

`Promise`\<[`TransactionSubscriptionResult`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/transactionsubscriptionresult/)\>

The result of this subscription pull/poll.
