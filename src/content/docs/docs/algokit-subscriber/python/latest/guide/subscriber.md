---
title: AlgorandSubscriber
description: A class that allows you to easily subscribe to the Algorand Blockchain and react to events of interest.
---

`AlgorandSubscriber` is a class that allows you to easily subscribe to the Algorand Blockchain, define a series of events that you are interested in, and react to those events.

## Creating a subscriber

To create an `AlgorandSubscriber` you can use the constructor:

```python
class AlgorandSubscriber:
    def __init__(self, config: AlgorandSubscriberConfig, algod_client: AlgodClient, indexer_client: IndexerClient | None = None):
        """
        Create a new `AlgorandSubscriber`.
        :param config: The subscriber configuration
        :param algod_client: An algod client
        :param indexer_client: An (optional) indexer client; only needed if `subscription.sync_behaviour` is `catchup-with-indexer`
        """
```

The `config` parameter is a `AlgorandSubscriberConfig` `TypedDict` (see the [API reference](/docs/algokit-subscriber/python/latest/guide/api/algokit_subscriber/types/subscription/)). A minimal example looks like:

```python
from algokit_subscriber import AlgorandSubscriber
from algokit_utils import get_algod_client, get_algonode_config

algod_client = get_algod_client(get_algonode_config("testnet", "algod", ""))

subscriber = AlgorandSubscriber(
    config={
        "filters": [
            {
                "name": "filter1",
                "filter": {
                    "type": "pay",
                    "sender": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ",
                },
            },
        ],
        "watermark_persistence": {"get": lambda: 0, "set": lambda x: None},
        "sync_behaviour": "skip-sync-newest",
        "max_rounds_to_sync": 100,
    },
    algod_client=algod_client,
)
```

## Subscribing to events

Once you have created the `AlgorandSubscriber`, you can register handlers/listeners for the filters you have defined, or each poll as a whole batch.

You can do this via the `on`, `on_batch` and `on_poll` methods:

```python
    def on(self, filter_name: str, listener: EventListener) -> 'AlgorandSubscriber':
        """
        Register an event handler to run on every subscribed transaction matching the given filter name.
        """

    def on_batch(self, filter_name: str, listener: EventListener) -> 'AlgorandSubscriber':
        """
        Register an event handler to run on all subscribed transactions matching the given filter name
        for each subscription poll.
        """

    def on_before_poll(self, listener: EventListener) -> 'AlgorandSubscriber':
        """
        Register an event handler to run before each subscription poll.
        """

    def on_poll(self, listener: EventListener) -> 'AlgorandSubscriber':
        """
        Register an event handler to run after each subscription poll.
        """

    def on_error(self, listener: EventListener) -> 'AlgorandSubscriber':
        """
        Register an event handler to run when an error occurs.
        """
```

The `EventListener` type is defined as:

```python
EventListener = Callable[[SubscribedTransaction, str], None]
"""
A function that takes a SubscribedTransaction and the event name.
"""
```

When you define an event listener it will be called, one-by-one in the order the registrations occur.

If you call `on_batch` it will be called first, with the full set of transactions that were found in the current poll (0 or more). Following that, each transaction in turn will then be passed to the listener(s) that subscribed with `on` for that event.

The default type that will be received is a `SubscribedTransaction`, which can be imported like so:

```python
from algokit_subscriber import SubscribedTransaction
```

See the [detail about this type](/docs/algokit-subscriber/python/latest/guide/guide/subscriptions/#subscribedtransaction).

Alternatively, if you defined a mapper against the filter then it will be applied before passing the objects through.

If you call `on_poll` it will be called last (after all `on` and `on_batch` listeners) for each poll, with the full set of transactions for that poll and [metadata about the poll result](/docs/algokit-subscriber/python/latest/guide/guide/subscriptions/#transactionsubscriptionresult). This allows you to process the entire poll batch in one transaction or have a hook to call after processing individual listeners (e.g. to commit a transaction).

If you want to run code before a poll starts (e.g. to log or start a transaction) you can do so with `on_before_poll`.

## Poll the chain

There are two methods to poll the chain for events: `poll_once` and `start`:

```python
def poll_once(self) -> TransactionSubscriptionResult:
    """
    Execute a single subscription poll.
    """

def start(self, inspect: Callable | None = None, *, suppress_log: bool = False) -> None:
    """
    Start the subscriber in a loop until `stop` is called.

    This is useful when running in the context of a long-running process / container.

    If you want to inspect or log what happens under the covers you can pass in an `inspect` callable that will be called for each poll.
    """
```

`poll_once` is useful when you want to take control of scheduling the different polls, such as when running a Lambda on a schedule or a process via cron, etc. - it will do a single poll of the chain and return the result of that poll.

`start` is useful when you have a long-running process or container and you want it to loop infinitely at the specified polling frequency from the constructor config. If you want to inspect or log what happens under the covers you can pass in an `inspect` lambda that will be called for each poll.

If you use `start` then you can stop the polling by calling `stop`, which will ensure everything is cleaned up nicely.

## Handling errors

To handle errors, you can register error handlers/listeners using the `on_error` method. This works in a similar way to the other `on*` methods.

When no error listeners have been registered, a default listener is used to re-throw any exception, so they can be caught by global uncaught exception handlers.
Once an error listener has been registered, the default listener is removed and it's the responsibility of the registered error listener to perform any error handling.

## Examples

See the [examples in the repository README](https://github.com/algorandfoundation/algokit-subscriber-py#examples).
