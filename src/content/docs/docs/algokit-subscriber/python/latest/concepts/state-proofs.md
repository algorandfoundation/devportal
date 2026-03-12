---
title: State Proofs
description: Subscribe to state proof transactions for building light clients.
---

You can subscribe to [state proof](https://dev.algorand.co/concepts/protocol/stateproofs) transactions using this subscriber library. State proof transactions are returned in the normalized [`SubscribedTransaction`](/docs/algokit-subscriber/python/latest/guide/subscriptions/#subscribedtransaction) format, the same approach used for all other transaction types.

The field level documentation of the [returned state proof transaction](/docs/algokit-subscriber/python/latest/guide/subscriptions/#subscribedtransaction) is comprehensively documented via the `SubscribedTransaction` type.

By exposing this functionality, this library can be used to create a [light client](https://dev.algorand.co/concepts/protocol/stateproofs).