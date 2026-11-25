---
title: ARC-28 Events
description: Subscribe to and process ARC-28 events emitted by smart contracts.
---

You can [subscribe to ARC-28 events](/docs/algokit-subscriber/python/latest/concepts/concepts/filtering/) for a smart contract, similar to how you can [subscribe to events in Ethereum](https://docs.web3js.org/guides/events_subscriptions/).

Furthermore, you can receive any ARC-28 events that a smart contract call you subscribe to emitted in the [subscribed transaction object](/docs/algokit-subscriber/python/latest/concepts/guide/subscriptions/#subscribedtransaction).

Both subscription and receiving ARC-28 events work through the use of the `arc28_events` parameter in [`AlgorandSubscriber`](/docs/algokit-subscriber/python/latest/concepts/guide/subscriber/) and [`get_subscribed_transactions`](/docs/algokit-subscriber/python/latest/concepts/guide/subscriptions/):

```python
group1_events = {
    "group_name": "group1",
    "events": [
        {
            "name": "MyEvent",
            "args": [
                {"type": "uint64"},
                {"type": "string"},
            ]
        }
    ]
}

subscriber = AlgorandSubscriber(config={"arc28_events": [group1_events], ...}, ...)

# or:

result = get_subscribed_transactions(subscription={"arc28_events": [group1_events], ...}, ...)
```

The `Arc28EventGroup` type has the following definition:

```python
class Arc28EventGroup(TypedDict):
    """
    Specifies a group of ARC-28 event definitions along with instructions for when to attempt to process the events.
    """
    group_name: str
    """The name to designate for this group of events."""

    process_for_app_ids: list[int]
    """Optional list of app IDs that this event should apply to."""

    process_transaction: NotRequired[Callable[[TransactionResult], bool]]
    """Optional predicate to indicate if these ARC-28 events should be processed for the given transaction."""

    continue_on_error: bool
    """Whether or not to silently (with warning log) continue if an error is encountered processing the ARC-28 event data; default = False."""

    events: list[Arc28Event]
    """The list of ARC-28 event definitions."""

class Arc28Event(TypedDict):
    """
    The definition of metadata for an ARC-28 event as per the ARC-28 specification.
    """
    name: str
    """The name of the event"""

    desc: NotRequired[str]
    """An optional, user-friendly description for the event"""

    args: list[Arc28EventArg]
    """The arguments of the event, in order"""
```

Each group allows you to apply logic to the applicability and processing of a set of events. This structure allows you to safely process the events from multiple contracts in the same subscriber, or perform more advanced filtering logic to event processing.

When specifying an [ARC-28 event filter](/docs/algokit-subscriber/python/latest/concepts/concepts/filtering/), you specify both the `group_name` and `event_name`(s) to narrow down what event(s) you want to subscribe to.

If you want to emit an ARC-28 event from your smart contract you can follow the [code examples for emitting events](/docs/algokit-subscriber/python/latest/concepts/concepts/emit-arc28-events/).
