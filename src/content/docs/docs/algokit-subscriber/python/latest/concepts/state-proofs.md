---
title: State Proofs
description: Subscribe to state proof transactions for building light clients.
---

You can subscribe to [state proof](https://dev.algorand.co/concepts/protocol/stateproofs) transactions using this subscriber library. At the time of writing state proof transactions are not supported by algosdk v2 and custom handling has been added to ensure this valuable type of transaction can be subscribed to.

The field level documentation of the [returned state proof transaction](/docs/algokit-subscriber/python/latest/concepts/guide/subscriptions/#subscribedtransaction) is comprehensively documented via [AlgoKit Utils](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L277).

By exposing this functionality, this library can be used to create a [light client](https://dev.algorand.co/concepts/protocol/stateproofs).
