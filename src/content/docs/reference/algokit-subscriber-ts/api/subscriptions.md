---
title: subscriptions
---

# subscriptions

## Functions

### getSubscribedTransactions()

> **getSubscribedTransactions**(`subscription`, `algod`, `indexer?`): `Promise`\<[`TransactionSubscriptionResult`](types/subscription.md#transactionsubscriptionresult)\>

Defined in: [src/subscriptions.ts:56](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/subscriptions.ts#L56)

Executes a single pull/poll to subscribe to transactions on the configured Algorand
blockchain for the given subscription context.

#### Parameters

| Parameter      | Type                                                                                   | Description                                                                           |
| -------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `subscription` | [`TransactionSubscriptionParams`](types/subscription.md#transactionsubscriptionparams) | The subscription context.                                                             |
| `algod`        | `AlgodClient`                                                                          | An Algod client.                                                                      |
| `indexer?`     | `IndexerClient`                                                                        | An optional indexer client, only needed when `onMaxRounds` is `catchup-with-indexer`. |

#### Returns

`Promise`\<[`TransactionSubscriptionResult`](types/subscription.md#transactionsubscriptionresult)\>

The result of this subscription pull/poll.
