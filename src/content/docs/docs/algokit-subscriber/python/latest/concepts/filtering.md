---
title: Subscription Filtering
description: Fine-grained control over which transactions you are interested in.
---

This library has extensive filtering options available to you so you can have fine-grained control over which transactions you are interested in.

There is a core type that is used to specify the filters [`TransactionFilter`](/docs/algokit-subscriber/python/latest/concepts/guide/subscriptions/#transactionfilter):

```python
subscriber = AlgorandSubscriber(config={'filters': [{'name': 'filterName', 'filter': {# Filter properties}}], ...}, ...)
# or:
get_subscribed_transactions(subscription={'filters': [{'name': 'filterName', 'filter': {# Filter properties}}], ...}, ...)
```

Currently this allows you filter based on any combination (AND logic) of:

- Transaction type e.g. `filter: { type: "axfer" }` or `filter: {type: ["axfer", "pay"] }`
- Account (sender and receiver) e.g. `filter: { sender: "ABCDE..F" }` or `filter: { sender: ["ABCDE..F", "ZYXWV..A"] }` and `filter: { receiver: "12345..6" }` or `filter: { receiver: ["ABCDE..F", "ZYXWV..A"] }`
- Note prefix e.g. `filter: { note_prefix: "xyz" }`
- Apps

  - ID e.g. `filter: { app_id: 54321 }` or `filter: { app_id: [54321, 12345] }`
  - Creation e.g. `filter: { app_create: True }`
  - Call on-complete(s) e.g. `filter: { app_on_complete: 'optin' }` or `filter: { app_on_complete: ['optin', 'noop'] }`
  - ARC4 method signature(s) e.g. `filter: { method_signature: "MyMethod(uint64,string)" }` or `filter: { method_signature: ["MyMethod(uint64,string)uint64", "MyMethod2(unit64)"] }`
  - Call arguments e.g.
    ```python
    "filter": {
        'app_call_arguments_match': lambda app_call_arguments:
            len(app_call_arguments) > 1 and
            app_call_arguments[1].decode('utf-8') == 'hello_world'
    }
    ```
  - Emitted ARC-28 event(s) e.g.

    ```python
    'filter': {
      'arc28_events': [{ 'group_name': "group1", 'event_name': "MyEvent" }]
    }
    ```

    Note: For this to work you need to [specify ARC-28 events in the subscription config](/docs/algokit-subscriber/python/latest/concepts/concepts/arc28-events/).

- Assets
  - ID e.g. `'filter': { 'asset_id': 123456 }` or `'filter': { 'asset_id': [123456, 456789] }`
  - Creation e.g. `'filter': { 'asset_create': True }`
  - Amount transferred (min and/or max) e.g. `'filter': { 'type': 'axfer', 'min_amount': 1, 'max_amount': 100 }`
  - Balance changes (asset ID, sender, receiver, close to, min and/or max change) e.g. `filter: { 'balance_changes': [{'asset_id': [15345, 36234], 'role': [BalanceChangeRole.Sender], 'address': "ABC...", 'min_amount': 1, 'max_amount': 2}]}`
- Algo transfers (pay transactions)
  - Amount transferred (min and/or max) e.g. `'filter': { 'type': 'pay', 'min_amount': 1, 'max_amount': 100 }`
  - Balance changes (sender, receiver, close to, min and/or max change) e.g. `'filter': { 'balance_changes': [{'role': [BalanceChangeRole.Sender], 'address': "ABC...", 'min_amount': 1, 'max_amount': 2}]}`

You can supply multiple, named filters via the [`NamedTransactionFilter`](/docs/algokit-subscriber/python/latest/concepts/guide/subscriptions/#namedtransactionfilter) type. When subscribed transactions are returned each transaction will have a `filters_matched` property that will have an array of any filter(s) that caused that transaction to be returned. When using [`AlgorandSubscriber`](/docs/algokit-subscriber/python/latest/concepts/guide/subscriber/), you can subscribe to events that are emitted with the filter name.
