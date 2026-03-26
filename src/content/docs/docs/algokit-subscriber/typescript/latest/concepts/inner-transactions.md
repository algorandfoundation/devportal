---
title: Inner Transactions
description: First-class support for subscribing to and processing inner transactions.
---

When you subscribe to transactions any subscriptions that cover an inner transaction will pick up that inner transaction and [return](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/#subscribedtransaction) it to you correctly.

Note: the behaviour Algorand Indexer has is to return the parent transaction, not the inner transaction; this library will always return the actual transaction you subscribed to.

If you [receive](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/#subscribedtransaction) an inner transaction then there will be a `parentTransactionId` field populated that allows you to see that it was an inner transaction and how to identify the parent transaction.

The `id` of an inner transaction will be set to `{parentTransactionId}/inner/{index-of-child-within-parent}` where `{index-of-child-within-parent}` is calculated based on uniquely walking the tree of potentially nested inner transactions. [This transaction in Allo.info](https://allo.info/tx/group/cHiEEvBCRGnUhz9409gHl%2Fvn00lYDZnJoppC3YexRr0%3D) is a good illustration of how inner transaction indexes are allocated (this library uses the same approach).

All [returned](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/#subscribedtransaction) transactions will have an `innerTxns` property with any inner transactions of that transaction populated (recursively).

The `intraRoundOffset` field in a [subscribed transaction or inner transaction within](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/#subscribedtransaction) is calculated by walking the full tree depth-first from the first transaction in the block, through any inner transactions recursively starting from an index of 0. This algorithm matches the one in Algorand Indexer and ensures that all transactions have a unique index, but the top level transaction in the block don't necessarily have a sequential index.
