---
title: Subscription Filtering
description: Fine-grained control over which transactions you are interested in.
---

This library has extensive filtering options available to you so you can have fine-grained control over which transactions you are interested in.

There is a core type that is used to specify the filters [`TransactionFilter`](/docs/algokit-subscriber/python/latest/guide/subscriptions/#transactionfilter):

```python
import algokit_subscriber as sub

subscriber = sub.AlgorandSubscriber(
    config=sub.AlgorandSubscriberConfig(
        filters=[sub.SubscriberConfigFilter(name="filterName", filter=sub.TransactionFilter(...))],
        ...
    ),
    ...
)
# or:
sub.get_subscribed_transactions(
    subscription=sub.TransactionSubscriptionParams(
        filters=[sub.NamedTransactionFilter(name="filterName", filter=sub.TransactionFilter(...))],
        ...
    ),
    ...
)
```

Currently this allows you to filter based on any combination (AND logic) of:

- Transaction type e.g. `sub.TransactionFilter(type="axfer")` or `sub.TransactionFilter(type=["axfer", "pay"])`
- Account (sender and receiver) e.g. `sub.TransactionFilter(sender="ABCDE..F")` or `sub.TransactionFilter(sender=["ABCDE..F", "ZYXWV..A"])` and `sub.TransactionFilter(receiver="12345..6")` or `sub.TransactionFilter(receiver=["12345..6", "67890..A"])`
- Note prefix e.g. `sub.TransactionFilter(note_prefix="xyz")`
- Apps
  - ID e.g. `sub.TransactionFilter(app_id=54321)` or `sub.TransactionFilter(app_id=[54321, 12345])`
  - Creation e.g. `sub.TransactionFilter(app_create=True)`
  - Call on-complete(s) e.g. `sub.TransactionFilter(app_on_complete="optin")` or `sub.TransactionFilter(app_on_complete=["optin", "noop"])`
  - ARC4 method signature(s) e.g. `sub.TransactionFilter(method_signature="MyMethod(uint64,string)")` or `sub.TransactionFilter(method_signature=["MyMethod(uint64,string)", "OtherMethod(byte[])"])`
  - Call arguments e.g.
    ```python
    sub.TransactionFilter(
        app_call_arguments_match=lambda app_call_arguments:
            app_call_arguments is not None
            and len(app_call_arguments) > 1
            and app_call_arguments[1].decode("utf-8") == "hello_world"
    )
    ```
  - Emitted ARC-28 event(s) e.g.
    ```python
    sub.TransactionFilter(
        arc28_events=[sub.Arc28EventFilter(group_name="group1", event_name="MyEvent")]
    )
    ```
    Note: For this to work you need to [specify ARC-28 events in the subscription config](/docs/algokit-subscriber/python/latest/concepts/arc28-events/).

- Assets
  - ID e.g. `sub.TransactionFilter(asset_id=123456)` or `sub.TransactionFilter(asset_id=[123456, 456789])`
  - Creation e.g. `sub.TransactionFilter(asset_create=True)`
  - Amount transferred (min and/or max) e.g. `sub.TransactionFilter(type="axfer", min_amount=1, max_amount=100)`
  - Balance changes (asset ID, address, role including Sender/Receiver/CloseTo/AssetCreator/AssetDestroyer, min and/or max amount, min and/or max absolute amount) e.g. `sub.TransactionFilter(balance_changes=[sub.BalanceChangeFilter(asset_id=[15345, 36234], role=[sub.BalanceChangeRole.Sender], address="ABC...", min_amount=1, max_amount=2)])`
- Algo transfers (pay transactions)
  - Amount transferred (min and/or max) e.g. `sub.TransactionFilter(type="pay", min_amount=1, max_amount=100)`
  - Balance changes (address, role including Sender/Receiver/CloseTo, min and/or max amount, min and/or max absolute amount) e.g. `sub.TransactionFilter(balance_changes=[sub.BalanceChangeFilter(asset_id=[0], role=[sub.BalanceChangeRole.Sender], address="ABC...", min_absolute_amount=1, max_absolute_amount=100)])`
- Custom filter e.g. `sub.TransactionFilter(custom_filter=lambda txn: txn.id_ is not None and txn.id_.startswith("ABC"))`

You can supply multiple, named filters via the [`NamedTransactionFilter`](/docs/algokit-subscriber/python/latest/guide/subscriptions/#namedtransactionfilter) type. When subscribed transactions are returned each transaction will have a `filters_matched` property that will have a list of any filter(s) that caused that transaction to be returned. When using [`AlgorandSubscriber`](/docs/algokit-subscriber/python/latest/guide/subscriber/), you can subscribe to events that are emitted with the filter name.
