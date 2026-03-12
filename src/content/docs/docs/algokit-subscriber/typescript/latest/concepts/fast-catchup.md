---
title: Fast Catchup
description: Use indexer to catch up to the tip of the chain in seconds rather than days.
---

When [subscribing to the chain](/docs/algokit-subscriber/typescript/latest/concepts/sync-behaviour/) for the purposes of building an index you often will want to start at the beginning of the chain or a substantial time in the past when the given solution you are subscribing for started.

This kind of catch up takes days to process since algod only lets you retrieve a single block at a time and retrieving a block takes 0.5-1s. Given there are millions of blocks in MainNet it doesn't take long to do the math to see why it takes so long to catch up.

This subscriber library has a unique, optional indexer catch up mode that allows you to use indexer to catch up to the tip of the chain in seconds or minutes rather than days for your specific filter.

This is really handy when you are doing local development or spinning up a new environment and don't want to wait for days.

To make use of this feature, you need to set the `syncBehaviour` config to `catchup-with-indexer` and ensure that you pass `indexer` in to the [entry point](/docs/algokit-subscriber/typescript/latest/tutorials/quick-start/#entry-points) along with `algod`.

Any [filter](/docs/algokit-subscriber/typescript/latest/concepts/filtering/) you apply will be seamlessly translated to indexer searches to get the historic transactions in the most efficient way possible based on the apis indexer exposes. Once the subscriber is within `maxRoundsToSync` of the tip of the chain it will switch to subscribing using `algod`.

To see this in action, you can run the Data History Museum example in this repository against MainNet and see it sync millions of rounds in seconds.

The indexer catchup isn't magic - if the filter you are trying to catch up with generates an enormous number of transactions (e.g. hundreds of thousands or millions) then it will run very slowly and has the potential for running out of compute and memory time depending on what the constraints are in the deployment environment you are running in. In that instance though, there is a config parameter you can use `maxIndexerRoundsToSync` so you can break the indexer catchup into multiple "polls" e.g. 100,000 rounds at a time. This allows a smaller batch of transactions to be retrieved and persisted in multiple batches.

To understand how the indexer behaviour works to know if you are likely to generate a lot of transactions it's worth understanding the architecture of the indexer catchup; indexer catchup runs in two stages:

1. **Pre-filtering**: Any filters that can be translated to the [indexer search transactions endpoint](https://dev.algorand.co/reference/rest-apis/indexer#transaction). This query is then run between the rounds that need to be synced and paginated in the max number of results (1000) at a time until all of the transactions are retrieved. This ensures we get round-based transactional consistency. This is the filter that can easily explode out though and take a long time when using indexer catchup. For avoidance of doubt, the following filters are the ones that are converted to a pre-filter:
   - `sender` (single value)
   - `receiver` (single value)
   - `type` (single value)
   - `notePrefix`
   - `appId` (single value)
   - `assetId` (single value)
   - `minAmount` (and `type = pay` or `assetId` provided)
   - `maxAmount` (and `maxAmount < Number.MAX_SAFE_INTEGER` and `type = pay` or (`assetId` provided and `minAmount > 0`))
2. **Post-filtering**: All remaining filters are then applied in-memory to the resulting list of transactions that are returned from the pre-filter before being returned as subscribed transactions.