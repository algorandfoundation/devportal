---
title: Quick Start
description: Get up and running with AlgoKit Subscriber in minutes.
---

## Install

This library can be installed from PyPI using your favourite package manager, e.g.:

```bash
pip install algokit-subscriber
```

## Quick start

```python
import algokit_subscriber as sub
from algokit_utils import AlgorandClient

algorand = AlgorandClient.testnet()

# Create subscriber
subscriber = sub.AlgorandSubscriber(
    config=sub.AlgorandSubscriberConfig(
        filters=[
            sub.SubscriberConfigFilter(
                name="filter1",
                filter=sub.TransactionFilter(
                    type="pay",
                    sender="ABC...",
                ),
            ),
        ],
        watermark_persistence=sub.in_memory_watermark(),
        sync_behaviour="skip-sync-newest",
    ),
    algod_client=algorand.client.algod,
)

# Set up subscription(s)
subscriber.on("filter1", lambda transaction, _: ...)
# ...

# Set up error handling
subscriber.on_error(lambda error, _: ...)

# Either: Start the subscriber (if in long-running process)
subscriber.start()

# OR: Poll the subscriber (if in cron job / periodic lambda)
subscriber.poll_once()
```

## Entry points

There are two entry points into the subscriber functionality:

- The lower level [`get_subscribed_transactions`](/docs/algokit-subscriber/python/latest/tutorials/guide/subscriptions/) function that contains the raw subscription logic for a single "poll"
- The [`AlgorandSubscriber`](/docs/algokit-subscriber/python/latest/tutorials/guide/subscriber/) class that provides a higher level interface that is easier to use and takes care of a lot more orchestration logic for you (particularly around the ability to continuously poll)

Both are first-class supported ways of using this library, but we generally recommend starting with the `AlgorandSubscriber` since it's easier to use and will cover the majority of use cases.

## Simple programming model

This library is easy to use and consume through easy to use, type-safe Python methods and objects and subscribed transactions have a comprehensive and familiar model type with all relevant/useful information about that transaction (including things like transaction id, round number, created asset/app id, app logs, etc.) modelled on the indexer data model (which is used regardless of whether the transactions come from indexer or algod so it's a consistent experience).

Furthermore, the `AlgorandSubscriber` class has a familiar event-driven programming model using an event emitter pattern where you register callbacks via `.on()` methods for each named filter.

For more examples of how to use it see the [AlgorandSubscriber guide](/docs/algokit-subscriber/python/latest/tutorials/guide/subscriber/).

## Easy to deploy

Because the entry points of this library are simple Python methods to execute it you simply need to run it in a valid Python execution environment. You could run it in a web server if you want a user facing app to show real-time transaction notifications in-app, or in a standalone process running in the myriad of ways Python can be run.

Because of that, you have full control over how you want to deploy and use the subscriber; it will work with whatever persistence (e.g. sql, no-sql, etc.), queuing/messaging (e.g. queues, topics, buses, web hooks, web sockets) and compute (e.g. serverless periodic lambdas, continually running containers, virtual machines, etc.) services you want to use.
