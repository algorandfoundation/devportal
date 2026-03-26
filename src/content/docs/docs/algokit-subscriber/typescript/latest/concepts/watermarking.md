---
title: Watermarking & Resilience
description: Create reliable syncing services that can recover from outages using round watermarking.
---

You can create reliable syncing / indexing services through a simple round watermarking capability that allows you to create resilient syncing services that can recover from an outage.

This works through the use of the `watermarkPersistence` parameter in [`AlgorandSubscriber`](/docs/algokit-subscriber/typescript/latest/guide/subscriber/) and `watermark` parameter in [`getSubscribedTransactions`](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/):

```typescript
async function getSavedWatermark(): Promise<bigint> {
  // Return the watermark from a persistence store e.g. database, redis, file system, etc.
}

async function saveWatermark(newWatermark: bigint): Promise<void> {
  // Save the watermark to a persistence store e.g. database, redis, file system, etc.
}

...

const subscriber = new AlgorandSubscriber({watermarkPersistence: {
  get: getSavedWatermark, set: saveWatermark
}, ...}, ...)

// or:

const watermark = await getSavedWatermark()
const result = await getSubscribedTransactions({watermark, ...}, ...)
await saveWatermark(result.newWatermark)
```

By using a persistence store, you can gracefully respond to an outage of your subscriber. The next time it starts it will pick back up from the point where it last persisted. It's worth noting this provides at least once delivery semantics so you need to handle duplicate events.

Alternatively, if you want to create at most once delivery semantics you could use the [transactional outbox pattern](https://microservices.io/patterns/data/transactional-outbox.html) and wrap a unit of work from a ACID persistence store (e.g. a SQL database with a serializable or repeatable read transaction) around the watermark retrieval, transaction processing and watermark persistence so the processing of transactions and watermarking of a single poll happens in a single atomic transaction. In this model, you would then process the transactions in a separate process from the persistence store (and likely have a flag on each transaction to indicate if it has been processed or not). You would need to be careful to ensure that you only have one subscriber actively running at a time to guarantee this delivery semantic. To ensure resilience you may want to have multiple subscribers running, but a primary node that actually executes based on retrieval of a distributed semaphore / lease.

If you are doing a quick test or creating an ephemeral subscriber that just needs to exist in-memory and doesn't need to recover resiliently (useful with `syncBehaviour` of `skip-sync-newest` for instance) then you can use an in-memory variable instead of a persistence store, e.g.:

```typescript
let watermark = 0n
const subscriber = new AlgorandSubscriber({watermarkPersistence: {
  get: () => watermark, set: (newWatermark: bigint) => watermark = newWatermark
}, ...}, ...)

// or:

let watermark = 0n
const result = await getSubscribedTransactions({watermark, ...}, ...)
watermark = result.newWatermark
```
