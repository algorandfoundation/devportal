---
title: getSubscribedTransactions
---

[**@algorandfoundation/algokit-subscriber**](../../README.md)

---

# Function: getSubscribedTransactions()

> **getSubscribedTransactions**(`subscription`, `algod`, `indexer?`): `Promise`\<[`TransactionSubscriptionResult`](../../types/subscription/interfaces/TransactionSubscriptionResult.md)\>

Defined in: [src/subscriptions.ts:56](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/subscriptions.ts#L56)

Executes a single pull/poll to subscribe to transactions on the configured Algorand
blockchain for the given subscription context.

## Parameters

### subscription

[`TransactionSubscriptionParams`](../../types/subscription/interfaces/TransactionSubscriptionParams.md)

The subscription context.

### algod

`AlgodClient`

An Algod client.

### indexer?

`IndexerClient`

An optional indexer client, only needed when `onMaxRounds` is `catchup-with-indexer`.

## Returns

`Promise`\<[`TransactionSubscriptionResult`](../../types/subscription/interfaces/TransactionSubscriptionResult.md)\>

The result of this subscription pull/poll.
