---
title: AlgorandSubscriber
description: A class that allows you to easily subscribe to the Algorand Blockchain and react to events of interest.
---

`AlgorandSubscriber` is a class that allows you to easily subscribe to the Algorand Blockchain, define a series of events that you are interested in, and react to those events. It has a familiar event-driven programming model using an event emitter pattern where you register callbacks via `.on()` methods for each named filter.

## Creating a subscriber

To create an `AlgorandSubscriber` you can use the constructor:

```python
import algokit_subscriber as sub
from algokit_algod_client import AlgodClient
from algokit_indexer_client import IndexerClient

subscriber = sub.AlgorandSubscriber(
    config=...,    # The subscriber configuration
    algod_client=algod,    # An algod client
    indexer_client=indexer,    # Optional; only needed if sync_behaviour is "catchup-with-indexer"
)
```

The key configuration is the `AlgorandSubscriberConfig` dataclass:

```python
@dataclass(kw_only=True, slots=True)
class AlgorandSubscriberConfig(CoreTransactionSubscriptionParams):
    """Configuration for the subscriber."""

    filters: Sequence[SubscriberConfigFilter]
    """The set of filters to subscribe to / emit events for, along with optional data mappers."""

    watermark_persistence: WatermarkPersistence
    """Methods to retrieve and persist the current watermark so syncing is resilient and maintains
    its position in the chain"""

    frequency_in_seconds: float | None = None
    """The frequency to poll for new blocks in seconds; defaults to 1s"""

    wait_for_block_when_at_tip: bool | None = None
    """Whether to wait via algod /status/wait-for-block-after endpoint when at the tip of the
    chain; reduces latency of subscription"""


@dataclass(kw_only=True, slots=True)
class CoreTransactionSubscriptionParams:
    """Common parameters to control a single subscription pull/poll."""

    filters: Sequence[NamedTransactionFilter]
    """The filter(s) to apply to find transactions of interest.

    A list of filters with corresponding names.

    Example::

        filters=[
            NamedTransactionFilter(
                name="asset-transfers",
                filter=TransactionFilter(type="axfer", ...),
            ),
            NamedTransactionFilter(
                name="payments",
                filter=TransactionFilter(type="pay", ...),
            ),
        ]
    """

    arc28_events: list[Arc28EventGroup] | None = None
    """Any ARC-28 event definitions to process from app call logs"""

    max_rounds_to_sync: int = 500
    """The maximum number of rounds to sync from algod for each subscription pull/poll.

    Defaults to 500.

    This gives you control over how many rounds you wait for at a time,
    your staleness tolerance when using "skip-sync-newest" or "fail", and
    your catchup speed when using "sync-oldest".
    """

    max_indexer_rounds_to_sync: int | None = None
    """The maximum number of rounds to sync from indexer when using
    sync_behaviour="catchup-with-indexer".

    By default there is no limit and it will paginate through all of the rounds.
    Sometimes this can result in an incredibly long catchup time that may break the service
    due to execution and memory constraints, particularly for filters that result in a large
    number of transactions.

    Instead, this allows indexer catchup to be split into multiple polls, each with a
    transactionally consistent boundary based on the number of rounds specified here.
    """

    sync_behaviour: SyncBehaviour
    """If the current tip of the configured Algorand blockchain is more than
    max_rounds_to_sync past watermark then how should that be handled:

    - "skip-sync-newest": Discard old blocks/transactions and sync the newest; useful
      for real-time notification scenarios where you don't care about history and
      are happy to lose old transactions.
    - "sync-oldest": Sync from the oldest rounds forward max_rounds_to_sync rounds
      using algod; note: this will be slow if you are starting from 0 and requires
      an archival node.
    - "sync-oldest-start-now": Same as "sync-oldest", but if the watermark is 0
      then start at the current round i.e. don't sync historical records, but once
      subscribing starts sync everything; note: if it falls behind it requires an
      archival node.
    - "catchup-with-indexer": Sync to round currentRound - max_rounds_to_sync + 1
      using indexer (much faster than using algod for long time periods) and then
      use algod from there.
    - "fail": Raise an error.
    """
```

`watermark_persistence` allows you to ensure reliability against your code having outages since you can persist the last block your code processed up to and then provide it again the next time your code runs.

`max_rounds_to_sync` and `sync_behaviour` allow you to control the subscription semantics as your code falls behind the tip of the chain (either on first run or after an outage).

`frequency_in_seconds` allows you to control the polling frequency and by association your latency tolerance for new events once you've caught up to the tip of the chain. Alternatively, you can set `wait_for_block_when_at_tip` to get the subscriber to ask algod to tell it when there is a new block ready to reduce latency when it's caught up to the tip of the chain.

`arc28_events` are any [ARC-28 event definitions](/docs/algokit-subscriber/python/latest/guide/subscriptions/#arc28eventgroup).

Filters defines the different subscription(s) you want to make, and is defined by the following dataclasses:

```python
@dataclass(kw_only=True, slots=True)
class SubscriberConfigFilter(NamedTransactionFilter):
    """A single event to subscribe to / emit."""

    mapper: Callable[[list[SubscribedTransaction]], list[Any]] | None = None
    """An optional data mapper if you want the event data to take a certain shape when
    subscribing to events with this filter name.

    If not specified, then the event will simply receive a SubscribedTransaction.

    Note: if you provide multiple filters with the same name then only the mapper of
    the first matching filter will be used.
    """


@dataclass(kw_only=True, slots=True)
class NamedTransactionFilter:
    """Specify a named filter to apply to find transactions of interest."""

    name: str
    """The name to give the filter."""

    filter: TransactionFilter
    """The filter itself."""
```

The event name is a unique name that describes the event you are subscribing to. The [filter](/docs/algokit-subscriber/python/latest/guide/subscriptions/#transactionfilter) defines how to interpret transactions on the chain as being "collected" by that event and the mapper is an optional ability to map from the raw transaction to a more targeted type for your event subscribers to consume.

## Subscribing to events

Once you have created the `AlgorandSubscriber`, you can register handlers/listeners for the filters you have defined, or each poll as a whole batch.

You can do this via the `on`, `on_batch` and `on_poll` methods:

```python
def on(self, filter_name: str, listener: EventListener[Any]) -> "AlgorandSubscriber":
    """Register an event handler to run on every subscribed transaction
    matching the given filter name.

    :param filter_name: The name of the filter to subscribe to
    :param listener: The listener function to invoke with the subscribed event
    :returns: The subscriber so ``on*`` calls can be chained

    Example (non-mapped)::

        subscriber.on("my-filter", lambda transaction, _: print(transaction.id_))

    Example (mapped)::

        sub.AlgorandSubscriber(
            config=sub.AlgorandSubscriberConfig(
                filters=[sub.SubscriberConfigFilter(
                    name="my-filter", filter=..., mapper=lambda t: [x.id_ for x in t],
                )],
                ...
            ),
            algod_client=algod,
        ).on("my-filter", lambda txn_id, _: print(txn_id))
    """


def on_batch(
    self, filter_name: str, listener: EventListener[list[Any]]
) -> "AlgorandSubscriber":
    """Register an event handler to run on all subscribed transactions matching the given
    filter name for each subscription poll.

    This is useful when you want to efficiently process / persist events
    in bulk rather than one-by-one.

    :param filter_name: The name of the filter to subscribe to
    :param listener: The listener function to invoke with the subscribed events
    :returns: The subscriber so ``on*`` calls can be chained

    Example (non-mapped)::

        subscriber.on_batch("my-filter", lambda transactions, _: print(len(transactions)))

    Example (mapped)::

        sub.AlgorandSubscriber(
            config=sub.AlgorandSubscriberConfig(
                filters=[sub.SubscriberConfigFilter(
                    name="my-filter", filter=..., mapper=lambda t: [x.id_ for x in t],
                )],
                ...
            ),
            algod_client=algod,
        ).on_batch("my-filter", lambda txn_ids, _: print(txn_ids))
    """


def on_before_poll(
    self, listener: EventListener[BeforePollMetadata]
) -> "AlgorandSubscriber":
    """Register an event handler to run before every subscription poll.

    This is useful when you want to do pre-poll logging or start a transaction etc.

    :param listener: The listener function to invoke with the pre-poll metadata
    :returns: The subscriber so ``on*`` calls can be chained

    Example::

        subscriber.on_before_poll(lambda metadata, _: print(metadata.watermark))
    """


def on_poll(
    self, listener: EventListener[TransactionSubscriptionResult]
) -> "AlgorandSubscriber":
    """Register an event handler to run after every subscription poll.

    This is useful when you want to process all subscribed transactions
    in a transactionally consistent manner rather than piecemeal for each
    filter, or to have a hook that occurs at the end of each poll to commit
    transactions etc.

    :param listener: The listener function to invoke with the poll result
    :returns: The subscriber so ``on*`` calls can be chained

    Example::

        subscriber.on_poll(
            lambda result, _: print(result.subscribed_transactions, result.synced_round_range)
        )
    """
```

The `EventListener` type is defined as:

```python
EventListener = Callable[[TEventType, str], None]
```

When you define an event listener it will be called, one-by-one in the order the registrations occur.

If you call `on_batch` it will be called first, with the full set of transactions that were found in the current poll (0 or more). Following that, each transaction in turn will then be passed to the listener(s) that subscribed with `on` for that event.

The default type that will be received is a [`SubscribedTransaction`](/docs/algokit-subscriber/python/latest/api/algokit_subscriber/), which is a dataclass that extends the indexer `Transaction` model with additional fields like `filters_matched`, `arc28_events`, `balance_changes`, and `parent_transaction_id`.

See the [detail about this type](/docs/algokit-subscriber/python/latest/guide/subscriptions/#subscribedtransaction).

Alternatively, if you defined a mapper against the filter then it will be applied before passing the objects through.

If you call `on_poll` it will be called last (after all `on` and `on_batch` listeners) for each poll, with the full set of transactions for that poll and [metadata about the poll result](/docs/algokit-subscriber/python/latest/guide/subscriptions/#transactionsubscriptionresult). This allows you to process the entire poll batch in one transaction or have a hook to call after processing individual listeners (e.g. to commit a transaction).

If you want to run code before a poll starts (e.g. to log or start a transaction) you can do so with `on_before_poll`.

## Poll the chain

There are two methods to poll the chain for events: `poll_once` and `start`:

```python
def poll_once(self) -> TransactionSubscriptionResult:
    """Execute a single subscription poll.

    This is useful when executing in the context of a process
    triggered by a recurring schedule / cron.

    :returns: The poll result
    """


def start(
    self,
    inspect: Callable[[TransactionSubscriptionResult], None] | None = None,
    *,
    suppress_log: bool = False,
) -> None:
    """Start the subscriber in a loop until stop is called.

    This is useful when running in the context of a long-running process / container.

    :param inspect: A function that is called for each poll so the inner workings can be
        inspected / logged / etc.
    :param suppress_log: Whether to suppress the default logging
    """
```

`poll_once` is useful when you want to take control of scheduling the different polls, such as when running a Lambda on a schedule or a process via cron, etc. — it will do a single poll of the chain and return the result of that poll.

`start` is useful when you have a long-running process or container and you want it to loop infinitely at the specified polling frequency from the constructor config. If you want to inspect or log what happens under the covers you can pass in an `inspect` callable that will be called for each poll.

If you use `start` then you can stop the polling by calling `stop`, which will ensure everything is cleaned up nicely. You may want to subscribe to OS signals to exit cleanly:

```python
import signal

for sig in (signal.SIGINT, signal.SIGTERM, signal.SIGQUIT):
    signal.signal(sig, lambda _signum, _frame: (
        print(f"Received {signal.Signals(_signum).name}; stopping subscriber..."),
        subscriber.stop(signal.Signals(_signum).name),
    ))
```

## Handling errors

Because `start` runs in a blocking loop, you may want to handle errors without crashing. To handle errors, you can register error handlers/listeners using the `on_error` method. This works in a similar way to the other `on*` methods.

```python
def on_error(self, listener: EventListener[Exception]) -> "AlgorandSubscriber":
    """Register an error handler to run if an error is thrown during processing or
    event handling.

    This is useful to handle any errors that occur and can be used to perform retries,
    logging or cleanup activities.

    :param listener: The listener function to invoke with the error that was thrown
    :returns: The subscriber so ``on*`` calls can be chained

    Example::

        subscriber.on_error(lambda error, _: print(error))

    Example (retry with backoff)::

        max_retries = 3
        retry_count = 0

        def handle_error(error, event_name):
            global retry_count
            retry_count += 1
            if retry_count > max_retries:
                print(f"Max retries exceeded: {error}")
                subscriber.stop("max retries exceeded")
                return
            delay = 2 ** retry_count  # 2s, 4s, 8s
            print(f"Error occurred, retrying in {delay}s ({retry_count}/{max_retries})")
            time.sleep(delay)

        subscriber.on_error(handle_error)
    """
```

Multiple error listeners can be added, and each will be called one-by-one in the order the registrations occur.

When no error listeners have been registered, a default listener is used to re-raise any exception, so they can be caught by the caller.
Once an error listener has been registered, the default listener is removed and it's the responsibility of the registered error listener to perform any error handling.

## Examples

See the [subscriptions guide](/docs/algokit-subscriber/python/latest/guide/subscriptions/#examples) for comprehensive usage examples.
