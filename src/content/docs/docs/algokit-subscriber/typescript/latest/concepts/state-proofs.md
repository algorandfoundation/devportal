---
title: State Proofs
description: Subscribe to state proof transactions for building light clients.
---

You can subscribe to [state proof](https://dev.algorand.co/concepts/protocol/state-proofs/) transactions using this subscriber library. Prior to v3, the subscriber depended on `algosdk@2`, which lacked state proof types, so custom raw msgpack parsing was needed to handle them. From v3 the subscriber targets `algosdk@3`, which added proper state proof types, so that custom handling is no longer required. As with every other transaction type, the subscriber transforms the algod response into the normalized `SubscribedTransaction` format.

The field level documentation of the [returned state proof transaction](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/#subscribedtransaction) is comprehensively documented via the `SubscribedTransaction` type, which extends `algosdk.indexerModels.Transaction`.

By exposing this functionality, this library can be used to create a [light client](https://dev.algorand.co/concepts/protocol/state-proofs/).