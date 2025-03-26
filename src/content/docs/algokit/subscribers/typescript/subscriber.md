---
title: AlgorandSubscriber
---

`AlgorandSubscriber` is a class that allows you to easily subscribe to the Algorand Blockchain, define a series of events that you are interested in, and react to those events. It has a similar programming model to [EventEmitter](https://nodejs.org/docs/latest/api/events.html), but also supports async/await.

## Creating a subscriber

To create an `AlgorandSubscriber` you can use the constructor:

```typescript
  /**
   * Create a new `AlgorandSubscriber`.
   * @param config The subscriber configuration
   * @param algod An algod client
   * @param indexer An (optional) indexer client; only needed if `subscription.syncBehaviour` is `catchup-with-indexer`
   */
  constructor(config: AlgorandSubscriberConfig, algod: Algodv2, indexer?: Indexer)
```

The key configuration is the `AlgorandSubscriberConfig` interface:

````typescript
/** Configuration for an `AlgorandSubscriber`. */
export interface AlgorandSubscriberConfig extends CoreTransactionSubscriptionParams {
  /** The set of filters to subscribe to / emit events for, along with optional data mappers. */
  filters: SubscriberConfigFilter<unknown>[]
  /** The frequency to poll for new blocks in seconds; defaults to 1s */
  frequencyInSeconds?: number
  /** Whether to wait via algod `/status/wait-for-block-after` endpoint when at the tip of the chain; reduces latency of subscription */
  waitForBlockWhenAtTip?: boolean
  /** Methods to retrieve and persist the current watermark so syncing is resilient and maintains
   * its position in the chain */
  watermarkPersistence: {
    /** Returns the current watermark that syncing has previously been processed to */
    get: () => Promise<bigint>
    /** Persist the new watermark that has been processed */
    set: (newWatermark: bigint) => Promise<void>
  }
}

/** Common parameters to control a single subscription pull/poll for both `AlgorandSubscriber` and `getSubscribedTransactions`. */
export interface CoreTransactionSubscriptionParams {
  /** The filter(s) to apply to find transactions of interest.
   * A list of filters with corresponding names.
   *
   * @example
   * ```typescript
   *  filter: [{
   *   name: 'asset-transfers',
   *   filter: {
   *     type: TransactionType.axfer,
   *     //...
   *   }
   *  }, {
   *   name: 'payments',
   *   filter: {
   *     type: TransactionType.pay,
   *     //...
   *   }
   *  }]
   * ```
   *
   */
  filters: NamedTransactionFilter[]
  /** Any ARC-28 event definitions to process from app call logs */
  arc28Events?: Arc28EventGroup[]
  /** The maximum number of rounds to sync from algod for each subscription pull/poll.
   *
   * Defaults to 500.
   *
   * This gives you control over how many rounds you wait for at a time,
   * your staleness tolerance when using `skip-sync-newest` or `fail`, and
   * your catchup speed when using `sync-oldest`.
   **/
  maxRoundsToSync?: number
  /**
   * The maximum number of rounds to sync from indexer when using `syncBehaviour: 'catchup-with-indexer'.
   *
   * By default there is no limit and it will paginate through all of the rounds.
   * Sometimes this can result in an incredibly long catchup time that may break the service
   * due to execution and memory constraints, particularly for filters that result in a large number of transactions.
   *
   * Instead, this allows indexer catchup to be split into multiple polls, each with a transactionally consistent
   * boundary based on the number of rounds specified here.
   */
  maxIndexerRoundsToSync?: number
  /** If the current tip of the configured Algorand blockchain is more than `maxRoundsToSync`
   * past `watermark` then how should that be handled:
   *  * `skip-sync-newest`: Discard old blocks/transactions and sync the newest; useful
   *    for real-time notification scenarios where you don't care about history and
   *    are happy to lose old transactions.
   *  * `sync-oldest`: Sync from the oldest rounds forward `maxRoundsToSync` rounds
   *    using algod; note: this will be slow if you are starting from 0 and requires
   *    an archival node.
   *  * `sync-oldest-start-now`: Same as `sync-oldest`, but if the `watermark` is `0`
   *    then start at the current round i.e. don't sync historical records, but once
   *    subscribing starts sync everything; note: if it falls behind it requires an
   *    archival node.
   *  * `catchup-with-indexer`: Sync to round `currentRound - maxRoundsToSync + 1`
   *    using indexer (much faster than using algod for long time periods) and then
   *    use algod from there.
   *  * `fail`: Throw an error.
   **/
  syncBehaviour: 'skip-sync-newest' | 'sync-oldest' | 'sync-oldest-start-now' | 'catchup-with-indexer' | 'fail'
}
````

`watermarkPersistence` allows you to ensure reliability against your code having outages since you can persist the last block your code processed up to and then provide it again the next time your code runs.

`maxRoundsToSync` and `syncBehaviour` allow you to control the subscription semantics as your code falls behind the tip of the chain (either on first run or after an outage).

`frequencyInSeconds` allows you to control the polling frequency and by association your latency tolerance for new events once you've caught up to the tip of the chain. Alternatively, you can set `waitForBlockWhenAtTip` to get the subscriber to ask algod to tell it when there is a new block ready to reduce latency when it's caught up to the tip of the chain.

`arc28Events` are any [ARC-28 event definitions](subscriptions#arc-28-events).

Filters defines the different subscription(s) you want to make, and is defined by the following interface:

```typescript
/** A single event to subscribe to / emit. */
export interface SubscriberConfigFilter<T> extends NamedTransactionFilter {
  /** An optional data mapper if you want the event data to take a certain shape when subscribing to events with this filter name.
   *
   * If not specified, then the event will simply receive a `SubscribedTransaction`.
   *
   * Note: if you provide multiple filters with the same name then only the mapper of the first matching filter will be used
   */
  mapper?: (transaction: SubscribedTransaction[]) => Promise<T[]>
}

/** Specify a named filter to apply to find transactions of interest. */
export interface NamedTransactionFilter {
  /** The name to give the filter. */
  name: string
  /** The filter itself. */
  filter: TransactionFilter
}
```

The event name is a unique name that describes the event you are subscribing to. The [filter](subscriptions#transactionfilter) defines how to interpret transactions on the chain as being "collected" by that event and the mapper is an optional ability to map from the raw transaction to a more targeted type for your event subscribers to consume.

## Subscribing to events

Once you have created the `AlgorandSubscriber`, you can register handlers/listeners for the filters you have defined, or each poll as a whole batch.

You can do this via the `on`, `onBatch` and `onPoll` methods:

````typescript
  /**
   * Register an event handler to run on every subscribed transaction matching the given filter name.
   *
   * The listener can be async and it will be awaited if so.
   * @example **Non-mapped**
   * ```typescript
   * subscriber.on('my-filter', async (transaction) => { console.log(transaction.id) })
   * ```
   * @example **Mapped**
   * ```typescript
   * new AlgorandSubscriber({filters: [{name: 'my-filter', filter: {...}, mapper: (t) => t.id}], ...}, algod)
   *  .on<string>('my-filter', async (transactionId) => { console.log(transactionId) })
   * ```
   * @param filterName The name of the filter to subscribe to
   * @param listener The listener function to invoke with the subscribed event
   * @returns The subscriber so `on*` calls can be chained
   */
  on<T = SubscribedTransaction>(filterName: string, listener: TypedAsyncEventListener<T>) {}

  /**
   * Register an event handler to run on all subscribed transactions matching the given filter name
   * for each subscription poll.
   *
   * This is useful when you want to efficiently process / persist events
   * in bulk rather than one-by-one.
   *
   * The listener can be async and it will be awaited if so.
   * @example **Non-mapped**
   * ```typescript
   * subscriber.onBatch('my-filter', async (transactions) => { console.log(transactions.length) })
   * ```
   * @example **Mapped**
   * ```typescript
   * new AlgorandSubscriber({filters: [{name: 'my-filter', filter: {...}, mapper: (t) => t.id}], ...}, algod)
   *  .onBatch<string>('my-filter', async (transactionIds) => { console.log(transactionIds) })
   * ```
   * @param filterName The name of the filter to subscribe to
   * @param listener The listener function to invoke with the subscribed events
   * @returns The subscriber so `on*` calls can be chained
   */
  onBatch<T = SubscribedTransaction>(filterName: string, listener: TypedAsyncEventListener<T[]>) {}

  /**
   * Register an event handler to run before every subscription poll.
   *
   * This is useful when you want to do pre-poll logging or start a transaction etc.
   *
   * The listener can be async and it will be awaited if so.
   * @example
   * ```typescript
   * subscriber.onBeforePoll(async (metadata) => { console.log(metadata.watermark) })
   * ```
   * @param listener The listener function to invoke with the pre-poll metadata
   * @returns The subscriber so `on*` calls can be chained
   */
  onBeforePoll(listener: TypedAsyncEventListener<TransactionSubscriptionResult>) {}

  /**
   * Register an event handler to run after every subscription poll.
   *
   * This is useful when you want to process all subscribed transactions
   * in a transactionally consistent manner rather than piecemeal for each
   * filter, or to have a hook that occurs at the end of each poll to commit
   * transactions etc.
   *
   * The listener can be async and it will be awaited if so.
   * @example
   * ```typescript
   * subscriber.onPoll(async (pollResult) => { console.log(pollResult.subscribedTransactions.length, pollResult.syncedRoundRange) })
   * ```
   * @param listener The listener function to invoke with the poll result
   * @returns The subscriber so `on*` calls can be chained
   */
  onPoll(listener: TypedAsyncEventListener<TransactionSubscriptionResult>) {}
````

The `TypedAsyncEventListener` type is defined as:

```typescript
type TypedAsyncEventListener<T> = (event: T, eventName: string | symbol) => Promise<void> | void
```

This allows you to use async or sync event listeners.

When you define an event listener it will be called, one-by-one (and awaited) in the order the registrations occur.

If you call `onBatch` it will be called first, with the full set of transactions that were found in the current poll (0 or more). Following that, each transaction in turn will then be passed to the listener(s) that subscribed with `on` for that event.

The default type that will be received is a `SubscribedTransaction`, which can be imported like so:

```typescript
import type { SubscribedTransaction } from '@algorandfoundation/algokit-subscriber/types'
```

See the [detail about this type](subscriptions#subscribedtransaction).

Alternatively, if you defined a mapper against the filter then it will be applied before passing the objects through.

If you call `onPoll` it will be called last (after all `on` and `onBatch` listeners) for each poll, with the full set of transactions for that poll and [metadata about the poll result](./subscriptions#transactionsubscriptionresult). This allows you to process the entire poll batch in one transaction or have a hook to call after processing individual listeners (e.g. to commit a transaction).

If you want to run code before a poll starts (e.g. to log or start a transaction) you can do so with `onBeforePoll`.

## Poll the chain

There are two methods to poll the chain for events: `pollOnce` and `start`:

```typescript
/**
 * Execute a single subscription poll.
 *
 * This is useful when executing in the context of a process
 * triggered by a recurring schedule / cron.
 * @returns The poll result
 */
async pollOnce(): Promise<TransactionSubscriptionResult> {}

/**
 * Start the subscriber in a loop until `stop` is called.
 *
 * This is useful when running in the context of a long-running process / container.
 * @param inspect A function that is called for each poll so the inner workings can be inspected / logged / etc.
 * @returns An object that contains a promise you can wait for after calling stop
 */
start(inspect?: (pollResult: TransactionSubscriptionResult) => void, suppressLog?: boolean): void {}
```

`pollOnce` is useful when you want to take control of scheduling the different polls, such as when running a Lambda on a schedule or a process via cron, etc. - it will do a single poll of the chain and return the result of that poll.

`start` is useful when you have a long-running process or container and you want it to loop infinitely at the specified polling frequency from the constructor config. If you want to inspect or log what happens under the covers you can pass in an `inspect` lambda that will be called for each poll.

If you use `start` then you can stop the polling by calling `stop`, which can be awaited to wait until everything is cleaned up. You may want to subscribe to Node.JS kill signals to exit cleanly:

```typescript
;['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((signal) =>
  process.on(signal, () => {
    // eslint-disable-next-line no-console
    console.log(`Received ${signal}; stopping subscriber...`)
    subscriber.stop(signal).then(() => console.log('Subscriber stopped'))
  }),
)
```

## Handling errors

Because `start` isn't a blocking method, you can't simply wrap it in a try/catch.
To handle errors, you can register error handlers/listeners using the `onError` method. This works in a similar way to the other `on*` methods.

````typescript
/**
   * Register an error handler to run if an error is thrown during processing or event handling.
   *
   * This is useful to handle any errors that occur and can be used to perform retries, logging or cleanup activities.
   *
   * The listener can be async and it will be awaited if so.
   * @example
   * ```typescript
   * subscriber.onError((error) => { console.error(error) })
   * ```
   * @example
   * ```typescript
   * const maxRetries = 3
   * let retryCount = 0
   * subscriber.onError(async (error) => {
   *   retryCount++
   *   if (retryCount > maxRetries) {
   *     console.error(error)
   *     return
   *   }
   *   console.log(`Error occurred, retrying in 2 seconds (${retryCount}/${maxRetries})`)
   *   await new Promise((r) => setTimeout(r, 2_000))
   *   subscriber.start()
   *})
   * ```
   * @param listener The listener function to invoke with the error that was thrown
   * @returns The subscriber so `on*` calls can be chained
   */
  onError(listener: ErrorListener) {}
````

The `ErrorListener` type is defined as:

```typescript
type ErrorListener = (error: unknown) => Promise<void> | void
```

This allows you to use async or sync error listeners.

Multiple error listeners can be added, and each will be called one-by-one (and awaited) in the order the registrations occur.

When no error listeners have been registered, a default listener is used to re-throw any exception, so they can be caught by global uncaught exception handlers.
Once an error listener has been registered, the default listener is removed and it's the responsibility of the registered error listener to perform any error handling.

## Examples

See the [main README](../README#examples).