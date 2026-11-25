---
title: Sync Behaviour
description: Control how the subscriber handles notification and indexing scenarios.
---

This library supports the ability to stay at the tip of the chain and power notification / alerting type scenarios through the use of the `sync_behaviour` parameter in both [`AlgorandSubscriber`](/docs/algokit-subscriber/python/latest/concepts/guide/subscriber/) and [`get_subscribed_transactions`](/docs/algokit-subscriber/python/latest/concepts/guide/subscriptions/). For example to stay at the tip of the chain for notification/alerting scenarios you could do:

```python
subscriber = AlgorandSubscriber({"sync_behaviour": 'skip-sync-newest', "max_rounds_to_sync": 100, ...}, ...)
# or:
get_subscribed_transactions({"sync_behaviour": "skip-sync-newest", "max_rounds_to_sync": 100, ...}, ...)
```

The `current_round` parameter (available when calling `get_subscribed_transactions`) can be used to set the tip of the chain. If not specified, the tip will be automatically detected. Whilst this is generally not needed, it is useful in scenarios where the tip is being detected as part of another process and you only want to sync to that point and no further.

The `max_rounds_to_sync` parameter controls how many rounds it will process when first starting when it's not caught up to the tip of the chain. While it's caught up to the chain it will keep processing as many rounds as are available from the last round it processed to when it next tries to sync (see below for how to control that).

If you expect your service will resiliently always stay running, should never get more than `max_rounds_to_sync` from the tip of the chain, there is a problem if it processes old records and you'd prefer it throws an error when losing track of the tip of the chain rather than continue or skip to newest you can set the `sync_behaviour` parameter to `fail`.

The `sync_behaviour` parameter can also be set to `sync-oldest-start-now` if you want to process all transactions once you start alerting/notifying. This requires that your service needs to keep running otherwise it could fall behind and start processing old records / take a while to catch back up with the tip of the chain. This is also a useful setting if you are creating an indexer that only needs to process from the moment the indexer is deployed rather than from the beginning of the chain. Note: this requires the [initial watermark](/docs/algokit-subscriber/python/latest/concepts/concepts/watermarking/) to start at 0 to work.

The `sync_behaviour` parameter can also be set to `sync-oldest`, which is a more traditional indexing scenario where you want to process every single block from the beginning of the chain. This can take a long time to process by default (e.g. days), noting there is a [fast catchup feature](/docs/algokit-subscriber/python/latest/concepts/concepts/fast-catchup/). If you don't want to start from the beginning of the chain you can [set the initial watermark](/docs/algokit-subscriber/python/latest/concepts/concepts/watermarking/) to a higher round number than 0 to start indexing from that point.
