---
editUrl: false
next: false
prev: false
title: 'TransactionSubscriptionParams'
---

Defined in: [src/types/subscription.ts:347](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L347)

Parameters to control a single subscription pull/poll.

## Extends

- [`CoreTransactionSubscriptionParams`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/)

## Properties

### arc28Events?

> `optional` **arc28Events**: [`Arc28EventGroup`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/arc28eventgroup/)[]

Defined in: [src/types/subscription.ts:241](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L241)

Any ARC-28 event definitions to process from app call logs

#### Inherited from

[`CoreTransactionSubscriptionParams`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/).[`arc28Events`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/#arc28events)

---

### currentRound?

> `optional` **currentRound**: `bigint`

Defined in: [src/types/subscription.ts:363](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L363)

The current tip of the configured Algorand blockchain.
If not provided, it will be resolved on demand.

---

### filters

> **filters**: [`NamedTransactionFilter`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/namedtransactionfilter/)[]

Defined in: [src/types/subscription.ts:239](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L239)

The filter(s) to apply to find transactions of interest.
A list of filters with corresponding names.

#### Example

```typescript
filter: [
  {
    name: 'asset-transfers',
    filter: {
      type: TransactionType.axfer,
      //...
    },
  },
  {
    name: 'payments',
    filter: {
      type: TransactionType.pay,
      //...
    },
  },
];
```

#### Inherited from

[`CoreTransactionSubscriptionParams`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/).[`filters`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/#filters)

---

### maxIndexerRoundsToSync?

> `optional` **maxIndexerRoundsToSync**: `number`

Defined in: [src/types/subscription.ts:261](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L261)

The maximum number of rounds to sync from indexer when using `syncBehaviour: 'catchup-with-indexer'.

By default there is no limit and it will paginate through all of the rounds.
Sometimes this can result in an incredibly long catchup time that may break the service
due to execution and memory constraints, particularly for filters that result in a large number of transactions.

Instead, this allows indexer catchup to be split into multiple polls, each with a transactionally consistent
boundary based on the number of rounds specified here.

#### Inherited from

[`CoreTransactionSubscriptionParams`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/).[`maxIndexerRoundsToSync`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/#maxindexerroundstosync)

---

### maxRoundsToSync?

> `optional` **maxRoundsToSync**: `number`

Defined in: [src/types/subscription.ts:250](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L250)

The maximum number of rounds to sync from algod for each subscription pull/poll.

Defaults to 500.

This gives you control over how many rounds you wait for at a time,
your staleness tolerance when using `skip-sync-newest` or `fail`, and
your catchup speed when using `sync-oldest`.

#### Inherited from

[`CoreTransactionSubscriptionParams`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/).[`maxRoundsToSync`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/#maxroundstosync)

---

### syncBehaviour

> **syncBehaviour**: `"skip-sync-newest"` \| `"sync-oldest"` \| `"sync-oldest-start-now"` \| `"catchup-with-indexer"` \| `"fail"`

Defined in: [src/types/subscription.ts:279](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L279)

If the current tip of the configured Algorand blockchain is more than `maxRoundsToSync`
past `watermark` then how should that be handled:

- `skip-sync-newest`: Discard old blocks/transactions and sync the newest; useful
  for real-time notification scenarios where you don't care about history and
  are happy to lose old transactions.
- `sync-oldest`: Sync from the oldest rounds forward `maxRoundsToSync` rounds
  using algod; note: this will be slow if you are starting from 0 and requires
  an archival node.
- `sync-oldest-start-now`: Same as `sync-oldest`, but if the `watermark` is `0`
  then start at the current round i.e. don't sync historical records, but once
  subscribing starts sync everything; note: if it falls behind it requires an
  archival node.
- `catchup-with-indexer`: Sync to round `currentRound - maxRoundsToSync + 1`
  using indexer (much faster than using algod for long time periods) and then
  use algod from there.
- `fail`: Throw an error.

#### Inherited from

[`CoreTransactionSubscriptionParams`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/).[`syncBehaviour`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/#syncbehaviour)

---

### watermark

> **watermark**: `bigint`

Defined in: [src/types/subscription.ts:358](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L358)

The current round watermark that transactions have previously been synced to.

Persist this value as you process transactions processed from this method
to allow for resilient and incremental syncing.

Syncing will start from `watermark + 1`.

Start from 0 if you want to start from the beginning of time, noting that
will be slow if `syncBehaviour` is `sync-oldest`.
