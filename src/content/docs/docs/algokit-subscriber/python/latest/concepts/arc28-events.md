---
title: ARC-28 Events
description: Subscribe to and process ARC-28 events emitted by smart contracts.
---

You can [subscribe to ARC-28 events](/docs/algokit-subscriber/python/latest/concepts/filtering/) for a smart contract, similar to how you can [subscribe to events in Ethereum](https://docs.web3js.org/guides/events_subscriptions/).

Furthermore, you can receive any ARC-28 events that a smart contract call you subscribe to emitted in the [subscribed transaction object](/docs/algokit-subscriber/python/latest/guide/subscriptions/#subscribedtransaction).

Both subscription and receiving ARC-28 events work through the use of the `arc28_events` parameter in [`AlgorandSubscriber`](/docs/algokit-subscriber/python/latest/guide/subscriber/) and [`get_subscribed_transactions`](/docs/algokit-subscriber/python/latest/guide/subscriptions/):

```python
import algokit_subscriber as sub

group1_events = sub.Arc28EventGroup(
    group_name="group1",
    events=[
        sub.Arc28Event(
            name="MyEvent",
            args=[
                sub.Arc28EventArg(type="uint64"),
                sub.Arc28EventArg(type="string"),
            ],
        )
    ],
)

subscriber = sub.AlgorandSubscriber(
    config=sub.AlgorandSubscriberConfig(
        arc28_events=[group1_events],
        # ...
    ),
    # ...
)

# or:

result = sub.get_subscribed_transactions(
    subscription=sub.TransactionSubscriptionParams(
        arc28_events=[group1_events],
        # ...
    ),
    # ...
)
```

The `Arc28EventGroup` type has the following definition:

```python
@dataclass
class Arc28EventGroup:
    """Specifies a group of ARC-28 event definitions along with instructions for when to attempt to process the events."""
    group_name: str
    """The name to designate for this group of events."""
    events: list[Arc28Event] = field(default_factory=list)
    """The list of ARC-28 event definitions."""
    process_for_app_ids: list[int] | None = None
    """Optional list of app IDs that this group should apply to."""
    process_transaction: Callable[[Transaction], bool] | None = None
    """Optional predicate to indicate if these ARC-28 events should be processed for the given transaction."""
    continue_on_error: bool = False
    """Whether or not to silently (with warning log) continue if an error is encountered processing the ARC-28 event data; default = False."""

@dataclass
class Arc28Event:
    """The definition of metadata for an ARC-28 event per https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0028.md#event."""
    name: str
    """The name of the event."""
    args: list[Arc28EventArg]
    """The arguments of the event, in order."""
    desc: str | None = None
    """Optional, user-friendly description for the event."""

@dataclass
class Arc28EventArg:
    type: str
    """The type of the argument."""
    name: str | None = None
    """Optional, user-friendly name for the argument."""
    desc: str | None = None
    """Optional, user-friendly description for the argument."""
```

Each group allows you to apply logic to the applicability and processing of a set of events. This structure allows you to safely process the events from multiple contracts in the same subscriber, or perform more advanced filtering logic to event processing.

When specifying an [ARC-28 event filter](/docs/algokit-subscriber/python/latest/concepts/filtering/), you specify both the `group_name` and `event_name`(s) to narrow down what event(s) you want to subscribe to.

If you want to emit an ARC-28 event from your smart contract you can follow the [code examples for emitting ARC-28 events](/docs/algokit-subscriber/python/latest/concepts/emit-arc28-events/).