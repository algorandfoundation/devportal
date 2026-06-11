---
title: Low Latency Processing
description: Configure polling semantics for minimal latency when processing new blocks.
---

You can control the polling semantics of the library when using the [`AlgorandSubscriber`](/docs/algokit-subscriber/python/latest/guide/subscriber/) by either specifying the `frequency_in_seconds` parameter to control the duration between polls or you can use the `wait_for_block_when_at_tip` parameter to indicate the subscriber should [call algod to ask it to inform the subscriber when a new round is available](https://dev.algorand.co/reference/rest-apis/algod/#waitforblock) so the subscriber can immediately process that round with a much lower-latency. When this mode is set, the subscriber intelligently uses this option only when it's caught up to the tip of the chain, but otherwise uses `frequency_in_seconds` while catching up to the tip of the chain.

e.g.

```python
# When catching up to tip of chain will poll every 1s for the next 1000 blocks,
# but when caught up will poll algod for a new block so it can be processed immediately with low latency
subscriber = AlgorandSubscriber(
    AlgorandSubscriberConfig(
        frequency_in_seconds=1, wait_for_block_when_at_tip=True, max_rounds_to_sync=1000, # ...
    ),
    # ...
)
# ...
subscriber.start()
```

If you are using [`get_subscribed_transactions`](/docs/algokit-subscriber/python/latest/guide/subscriptions/) or the `poll_once` method on `AlgorandSubscriber` then you can use your infrastructure and/or surrounding orchestration code to take control of the polling duration.

If you want to manually run code that waits for a given round to become available you can execute the following code:

```python
algod.status_after_block(round_number_to_wait_for)
```

It's worth noting special care has been placed in the subscriber library to properly handle stop signalling. When you call `subscriber.stop(reason)` at any point in time, the subscriber will cleanly exit after finishing any in-progress poll. The `reason` parameter is an optional string that is logged to help with debugging.

If you want to hook this up to Python process signals you can include code like this in your service entrypoint:

```python
import signal

def handle_shutdown(signum: int, _frame: object) -> None:
    sig_name = signal.Signals(signum).name
    print(f"Received {sig_name}; stopping subscriber...")
    subscriber.stop(sig_name)

signal.signal(signal.SIGINT, handle_shutdown)
signal.signal(signal.SIGTERM, handle_shutdown)
signal.signal(signal.SIGQUIT, handle_shutdown)
```
