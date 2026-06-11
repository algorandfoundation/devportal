---
editUrl: false
next: false
prev: false
title: 'AlgorandSubscriberConfig'
---

Defined in: [src/types/subscription.ts:367](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L367)

Configuration for an `AlgorandSubscriber`.

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

### filters

> **filters**: [`SubscriberConfigFilter`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/subscriberconfigfilter/)\<`unknown`\>[]

Defined in: [src/types/subscription.ts:369](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L369)

The set of filters to subscribe to / emit events for, along with optional data mappers.

#### Overrides

[`CoreTransactionSubscriptionParams`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/).[`filters`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/coretransactionsubscriptionparams/#filters)

---

### frequencyInSeconds?

> `optional` **frequencyInSeconds**: `number`

Defined in: [src/types/subscription.ts:371](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L371)

The frequency to poll for new blocks in seconds; defaults to 1s

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

### waitForBlockWhenAtTip?

> `optional` **waitForBlockWhenAtTip**: `boolean`

Defined in: [src/types/subscription.ts:373](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L373)

Whether to wait via algod `/status/wait-for-block-after` endpoint when at the tip of the chain; reduces latency of subscription

---

### watermarkPersistence

> **watermarkPersistence**: `object`

Defined in: [src/types/subscription.ts:376](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L376)

Methods to retrieve and persist the current watermark so syncing is resilient and maintains
its position in the chain

#### get()

> **get**: () => `Promise`\<`bigint`\>

Returns the current watermark that syncing has previously been processed to

##### Returns

`Promise`\<`bigint`\>

#### set()

> **set**: (`newWatermark`) => `Promise`\<`void`\>

Persist the new watermark that has been processed

##### Parameters

###### newWatermark

`bigint`

##### Returns

`Promise`\<`void`\>
