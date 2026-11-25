---
title: Low Latency Processing
description: Configure polling semantics for minimal latency when processing new blocks.
---

You can control the polling semantics of the library when using the [`AlgorandSubscriber`](/docs/algokit-subscriber/python/latest/concepts/guide/subscriber/) by either specifying the `frequency_in_seconds` parameter to control the duration between polls or you can use the `wait_for_block_when_at_tip` parameter to indicate the subscriber should [call algod to ask it to inform the subscriber when a new round is available](https://dev.algorand.co/reference/rest-apis/algod/#waitforblock) so the subscriber can immediately process that round with a much lower-latency. When this mode is set, the subscriber intelligently uses this option only when it's caught up to the tip of the chain, but otherwise uses `frequency_in_seconds` while catching up to the tip of the chain.

e.g.

```python
# When catching up to tip of chain will poll every 1s for the next 1000 blocks, but when caught up will poll algod for a new block so it can be processed immediately with low latency
subscriber = AlgorandSubscriber(config={
    "frequency_in_seconds": 1,
    "wait_for_block_when_at_tip": True,
    "max_rounds_to_sync": 1000,
    # ... other configuration options
}, ...)
...
subscriber.start()
```

If you are using [`get_subscribed_transactions`](/docs/algokit-subscriber/python/latest/concepts/guide/subscriptions/) or the `poll_once` method on `AlgorandSubscriber` then you can use your infrastructure and/or surrounding orchestration code to take control of the polling duration.

If you want to manually run code that waits for a given round to become available you can execute the following algosdk code:

```python
algod.status_after_block(round_number_to_wait_for)
```
