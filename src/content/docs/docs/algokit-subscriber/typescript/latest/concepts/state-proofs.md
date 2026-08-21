---
title: State Proofs
description: Subscribe to state proof transactions for building light clients.
---

You can subscribe to [state proof](https://dev.algorand.co/concepts/protocol/stateproofs) transactions using this subscriber library. Prior to v3, the subscriber depended on algosdk v2 which lacked state proof types, so raw msgpack parsing was needed to handle them. From v3, the subscriber upgraded to algosdk v3 which added state proof types. Since v4, the subscriber is decoupled from algosdk via algokit-utils v10, which provides proper state proof types. The subscriber still transforms algod responses into a normalized `SubscribedTransaction` format, the same approach used for all other transaction types.

The field level documentation of the [returned state proof transaction](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/#subscribedtransaction) is comprehensively documented via the `SubscribedTransaction` type.

By exposing this functionality, this library can be used to create a [light client](https://dev.algorand.co/concepts/protocol/stateproofs).
