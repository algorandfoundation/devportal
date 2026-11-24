---
title: ARC-28 Events
description: Subscribe to and process ARC-28 events emitted by smart contracts.
---

You can [subscribe to ARC-28 events](/docs/algokit-subscriber/typescript/latest/concepts/filtering/) for a smart contract, similar to how you can [subscribe to events in Ethereum](https://docs.web3js.org/guides/events_subscriptions/).

Furthermore, you can receive any ARC-28 events that a smart contract call you subscribe to emitted in the [subscribed transaction object](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/#subscribedtransaction).

Both subscription and receiving ARC-28 events work through the use of the `arc28Events` parameter in [`AlgorandSubscriber`](/docs/algokit-subscriber/typescript/latest/guide/subscriber/) and [`getSubscribedTransactions`](/docs/algokit-subscriber/typescript/latest/guide/subscriptions/):

```typescript
const group1Events: Arc28EventGroup = {
  groupName: 'group1',
  events: [
    {
      name: 'MyEvent',
      args: [
        {type: 'uint64'},
        {type: 'string'},
      ]
    }
  ]
}



const subscriber = new AlgorandSubscriber({arc28Events: [group1Events], ...}, ...)

// or:

const result = await getSubscribedTransactions({arc28Events: [group1Events], ...}, ...)
```

The `Arc28EventGroup` type has the following definition:

```typescript
/** Specifies a group of ARC-28 event definitions along with instructions for when to attempt to process the events. */
export interface Arc28EventGroup {
  /** The name to designate for this group of events. */
  groupName: string
  /** Optional list of app IDs that this event should apply to */
  processForAppIds?: bigint[]
  /** Optional predicate to indicate if these ARC-28 events should be processed for the given transaction */
  processTransaction?: (transaction: SubscribedTransaction) => boolean
  /** Whether or not to silently (with warning log) continue if an error is encountered processing the ARC-28 event data; default = false */
  continueOnError?: boolean
  /** The list of ARC-28 event definitions */
  events: Arc28Event[]
}

/**
 * The definition of metadata for an ARC-28 event per https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0028.md#event.
 */
export interface Arc28Event {
  /** The name of the event */
  name: string
  /** Optional, user-friendly description for the event */
  desc?: string
  /** The arguments of the event, in order */
  args: Array<{
    /** The type of the argument */
    type: string
    /** Optional, user-friendly name for the argument */
    name?: string
    /** Optional, user-friendly description for the argument */
    desc?: string
  }>
}
```

Each group allows you to apply logic to the applicability and processing of a set of events. This structure allows you to safely process the events from multiple contracts in the same subscriber, or perform more advanced filtering logic to event processing.

When specifying an [ARC-28 event filter](/docs/algokit-subscriber/typescript/latest/concepts/filtering/), you specify both the `groupName` and `eventName`(s) to narrow down what event(s) you want to subscribe to.

If you want to emit an ARC-28 event from your smart contract you can follow the [code examples for emitting ARC-28 events](/docs/algokit-subscriber/typescript/latest/concepts/emit-arc28-events/).