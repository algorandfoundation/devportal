---
title: Subscription Filtering
description: Fine-grained control over which transactions you are interested in.
---

This library has extensive filtering options available to you so you can have fine-grained control over which transactions you are interested in.

There is a core type that is used to specify the filters [`TransactionFilter`](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/#transactionfilter):

```typescript
import { TransactionType } from '@algorandfoundation/algokit-utils/transact'
import type { ApplicationOnComplete } from '@algorandfoundation/algokit-utils/indexer'

const subscriber = new AlgorandSubscriber({filters: [{name: 'filterName', filter: {/* Filter properties */}}], ...}, ...)
// or:
getSubscribedTransactions({filters: [{name: 'filterName', filter: {/* Filter properties */}}], ... }, ...)
```

Currently this allows you filter based on any combination (AND logic) of:

- Transaction type e.g. `filter: { type: TransactionType.axfer }` or `filter: {type: [TransactionType.axfer, TransactionType.pay] }`
- Account (sender and receiver) e.g. `filter: { sender: "ABCDE..F" }` or `filter: { sender: ["ABCDE..F", "ZYXWV..A"] }` and `filter: { receiver: "12345..6" }` or `filter: { receiver: ["ABCDE..F", "ZYXWV..A"] }`
- Note prefix e.g. `filter: { notePrefix: "xyz" }`
- Apps
  - ID e.g. `filter: { appId: 54321n }` or `filter: { appId: [54321n, 12345n] }`
  - Creation e.g. `filter: { appCreate: true }`
  - Call on-complete(s) e.g. `filter: { appOnComplete: ApplicationOnComplete.optin }` or `filter: { appOnComplete: [ApplicationOnComplete.optin, ApplicationOnComplete.noop] }`
  - ARC4 method signature(s) e.g. `filter: { methodSignature: "MyMethod(uint64,string)" }` or `filter: { methodSignature: ["MyMethod(uint64,string)uint64", "MyMethod2(unit64)"] }`
  - Call arguments e.g.
    ```typescript
    filter: {
      appCallArgumentsMatch: appCallArguments =>
        appCallArguments.length > 1 &&
        Buffer.from(appCallArguments[1]).toString('utf-8') === 'hello_world';
    }
    ```
  - Emitted ARC-28 event(s) e.g.

    ```typescript
    filter: {
      arc28Events: [{ groupName: 'group1', eventName: 'MyEvent' }];
    }
    ```

    Note: For this to work you need to [specify ARC-28 events in the subscription config](/docs/algokit-subscriber/typescript/latest/concepts/arc28-events/).

- Assets
  - ID e.g. `filter: { assetId: 123456n }` or `filter: { assetId: [123456n, 456789n] }`
  - Creation e.g. `filter: { assetCreate: true }`
  - Amount transferred (min and/or max) e.g. `filter: { type: TransactionType.axfer, minAmount: 1, maxAmount: 100 }`
  - Balance changes (asset ID, sender, receiver, close to, min and/or max change) e.g. `filter: { balanceChanges: [{assetId: [15345n, 36234n], role: [BalanceChangeRole.Sender], address: "ABC...", minAmount: 1, maxAmount: 2}]}`
- Algo transfers (pay transactions)
  - Amount transferred (min and/or max) e.g. `filter: { type: TransactionType.pay, minAmount: 1, maxAmount: 100 }`
  - Balance changes (sender, receiver, close to, min and/or max change) e.g. `filter: { balanceChanges: [{role: [BalanceChangeRole.Sender], address: "ABC...", minAmount: 1, maxAmount: 2}]}`

You can supply multiple, named filters via the [`NamedTransactionFilter`](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/#namedtransactionfilter) type. When subscribed transactions are returned each transaction will have a `filtersMatched` property that will have an array of any filter(s) that caused that transaction to be returned. When using [`AlgorandSubscriber`](/docs/algokit-subscriber/typescript/latest/guide/subscriber/), you can subscribe to events that are emitted with the filter name.
