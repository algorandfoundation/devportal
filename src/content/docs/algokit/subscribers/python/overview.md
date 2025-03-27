---
title: Algorand transaction subscription / indexing
---

## Quick start

```{testcode}
# Import necessary modules
from algokit_subscriber import AlgorandSubscriber
from algosdk.v2client import algod
from algokit_utils import get_algod_client, get_algonode_config

# Create an Algod client
algod_client = get_algod_client(get_algonode_config("testnet", "algod", "")) # testnet used for demo purposes

# Create subscriber (example with filters)
subscriber = AlgorandSubscriber(
    config={
        "filters": [
            {
                "name": "filter1",
                "filter": {
                    "type": "pay",
                    "sender": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ",
                },
            },
        ],
        "watermark_persistence": {
            "get": lambda: 0,
            "set": lambda x: None
        },
        "sync_behaviour": "skip-sync-newest",
        "max_rounds_to_sync": 100,
    },
    algod_client=algod_client,
)

# Set up subscription(s)
subscriber.on("filter1", lambda transaction, _: print(f"Received transaction: {transaction['id']}"))

# Set up error handling
subscriber.on_error(lambda error, _: print(f"Error occurred: {error}"))

# Either: Start the subscriber (if in long-running process)
# subscriber.start()

# OR: Poll the subscriber (if in cron job / periodic lambda)
result = subscriber.poll_once()
print(f"Polled {len(result['subscribed_transactions'])} transactions")
```

```{testoutput}
Polled 0 transactions
```

## Capabilities

- [Quick start](#quick-start)
- [Capabilities](#capabilities)
  - [Notification _and_ indexing](#notification-and-indexing)
  - [Low latency processing](#low-latency-processing)
  - [Watermarking and resilience](#watermarking-and-resilience)
  - [Extensive subscription filtering](#extensive-subscription-filtering)
  - [ARC-28 event subscription and reads](#arc-28-event-subscription-and-reads)
  - [First-class inner transaction support](#first-class-inner-transaction-support)
  - [State-proof support](#state-proof-support)
  - [Simple programming model](#simple-programming-model)
  - [Easy to deploy](#easy-to-deploy)
  - [Fast initial index](#fast-initial-index)
- [Entry points](#entry-points)
- [Reference docs](#reference-docs)
- [Emit ARC-28 events](#emit-arc-28-events)
  - [Algorand Python](#algorand-python)
  - [TealScript](#tealscript)
  - [PyTEAL](#pyteal)
  - [TEAL](#teal)
- [Next steps](#next-steps)

### Notification _and_ indexing

This library supports the ability to stay at the tip of the chain and power notification / alerting type scenarios through the use of the `sync_behaviour` parameter in both [`AlgorandSubscriber`](./subscriber) and [`get_subscribed_transactions`](./subscriptions). For example to stay at the tip of the chain for notification/alerting scenarios you could do:

```python
subscriber = AlgorandSubscriber({"sync_behavior": 'skip-sync-newest', "max_rounds_to_sync": 100, ...}, ...)
# or:
get_subscribed_transactions({"sync_behaviour": "skip-sync-newest", "max_rounds_to_sync": 100, ...}, ...)
```

The `current_round` parameter (availble when calling `get_subscribed_transactions`) can be used to set the tip of the chain. If not specified, the tip will be automatically detected. Whilst this is generally not needed, it is useful in scenarios where the tip is being detected as part of another process and you only want to sync to that point and no further.

The `max_rounds_to_sync` parameter controls how many rounds it will process when first starting when it's not caught up to the tip of the chain. While it's caught up to the chain it will keep processing as many rounds as are available from the last round it processed to when it next tries to sync (see below for how to control that).

If you expect your service will resiliently always stay running, should never get more than `max_rounds_to_sync` from the tip of the chain, there is a problem if it processes old records and you'd prefer it throws an error when losing track of the tip of the chain rather than continue or skip to newest you can set the `sync_behaviour` parameter to `fail`.

The `sync_behaviour` parameter can also be set to `sync-oldest-start-now` if you want to process all transactions once you start alerting/notifying. This requires that your service needs to keep running otherwise it could fall behind and start processing old records / take a while to catch back up with the tip of the chain. This is also a useful setting if you are creating an indexer that only needs to process from the moment the indexer is deployed rather than from the beginning of the chain. Note: this requires the [initial watermark](#watermarking-and-resilience) to start at 0 to work.

The `sync_behaviour` parameter can also be set to `sync-oldest`, which is a more traditional indexing scenario where you want to process every single block from the beginning of the chain. This can take a long time to process by default (e.g. days), noting there is a [fast catchup feature](#fast-initial-index). If you don't want to start from the beginning of the chain you can [set the initial watermark](#watermarking-and-resilience) to a higher round number than 0 to start indexing from that point.

### Low latency processing

You can control the polling semantics of the library when using the [`AlgorandSubscriber`](./subscriber) by either specifying the `frequency_in_seconds` parameter to control the duration between polls or you can use the `wait_for_block_when_at_tip` parameter to indicate the subscriber should [call algod to ask it to inform the subscriber when a new round is available](https://dev.algorand.co/reference/rest-apis/algod/#waitforblock) so the subscriber can immediately process that round with a much lower-latency. When this mode is set, the subscriber intelligently uses this option only when it's caught up to the tip of the chain, but otherwise uses `frequency_in_seconds` while catching up to the tip of the chain.

e.g.

```python
# When catching up to tip of chain will pool every 1s for the next 1000 blocks, but when caught up will poll algod for a new block so it can be processed immediately with low latency
subscriber = AlgorandSubscriber(config={
    "frequency_in_seconds": 1,
    "wait_for_block_when_at_tip": True,
    "max_rounds_to_sync": 1000,
    # ... other configuration options
}, ...)
...
subscriber.start()
```

If you are using [`get_subscribed_transactions`](./subscriptions) or the `pollOnce` method on `AlgorandSubscriber` then you can use your infrastructure and/or surrounding orchestration code to take control of the polling duration.

If you want to manually run code that waits for a given round to become available you can execute the following algosdk code:

```python
algod.status_after_block(round_number_to_wait_for)
```

### Watermarking and resilience

You can create reliable syncing / indexing services through a simple round watermarking capability that allows you to create resilient syncing services that can recover from an outage.

This works through the use of the `watermark_persistence` parameter in [`AlgorandSubscriber`](./subscriber) and `watermark` parameter in [`get_subscribed_transactions`](./subscriptions):

```python
def get_saved_watermark() -> int:
    # Return the watermark from a persistence store e.g. database, redis, file system, etc.
    pass

def save_watermark(new_watermark: int) -> None:
    # Save the watermark to a persistence store e.g. database, redis, file system, etc.
    pass

...

subscriber = AlgorandSubscriber({
    "watermark_persistence": {
        "get": get_saved_watermark,
        "set": save_watermark
    },
    # ... other configuration options
}, ...)

# or:

watermark = get_saved_watermark()
result = get_subscribed_transactions(watermark=watermark, ...)
save_watermark(result.new_watermark)
```

By using a persistence store, you can gracefully respond to an outage of your subscriber. The next time it starts it will pick back up from the point where it last persisted. It's worth noting this provides at least once delivery semantics so you need to handle duplicate events.

Alternatively, if you want to create at most once delivery semantics you could use the [transactional outbox pattern](https://microservices.io/patterns/data/transactional-outbox.html) and wrap a unit of work from a ACID persistence store (e.g. a SQL database with a serializable or repeatable read transaction) around the watermark retrieval, transaction processing and watermark persistence so the processing of transactions and watermarking of a single poll happens in a single atomic transaction. In this model, you would then process the transactions in a separate process from the persistence store (and likely have a flag on each transaction to indicate if it has been processed or not). You would need to be careful to ensure that you only have one subscriber actively running at a time to guarantee this delivery semantic. To ensure resilience you may want to have multiple subscribers running, but a primary node that actually executes based on retrieval of a distributed semaphore / lease.

If you are doing a quick test or creating an ephemeral subscriber that just needs to exist in-memory and doesn't need to recover resiliently (useful with `sync_behaviour` of `skip-sync-newest` for instance) then you can use an in-memory variable instead of a persistence store, e.g.:

```python
watermark = 0
subscriber = AlgorandSubscriber(
    config={
        "watermark_persistence": {
            "get": lambda: watermark,
            "set": lambda new_watermark: globals().update(watermark=new_watermark)
        },
        # ... other configuration options
    },
    # ... other arguments
)

# or:

watermark = 0
result = get_subscribed_transactions(watermark=watermark, ...)
watermark = result.new_watermark
```

### Extensive subscription filtering

This library has extensive filtering options available to you so you can have fine-grained control over which transactions you are interested in.

There is a core type that is used to specify the filters [`TransactionFilter`](subscriptions#transactionfilter):

```python
subscriber = AlgorandSubscriber(config={'filters': [{'name': 'filterName', 'filter': {# Filter properties}}], ...}, ...)
# or:
get_subscribed_transactions(filters=[{'name': 'filterName', 'filter': {# Filter properties}}], ...)
```

Currently this allows you filter based on any combination (AND logic) of:

- Transaction type e.g. `filter: { type: "axfer" }` or `filter: {type: ["axfer", "pay"] }`
- Account (sender and receiver) e.g. `filter: { sender: "ABCDE..F" }` or `filter: { sender: ["ABCDE..F", "ZYXWV..A"] }` and `filter: { receiver: "12345..6" }` or `filter: { receiver: ["ABCDE..F", "ZYXWV..A"] }`
- Note prefix e.g. `filter: { note_prefix: "xyz" }`
- Apps

  - ID e.g. `filter: { appId: 54321 }` or `filter: { appId: [54321, 12345] }`
  - Creation e.g. `filter: { app_create: true }`
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
      'arc28_events': [{ 'group_name': "group1", 'event_name': "MyEvent" }];
    }
    ```

    Note: For this to work you need to [specify ARC-28 events in the subscription config](#arc-28-event-subscription-and-reads).

- Assets
  - ID e.g. `'filter': { 'asset_id': 123456 }` or `'filter': { 'asset_id': [123456, 456789] }`
  - Creation e.g. `'filter': { 'asset_create': true }`
  - Amount transferred (min and/or max) e.g. `'filter': { 'type': 'axfer', 'min_amount': 1, 'max_amount': 100 }`
  - Balance changes (asset ID, sender, receiver, close to, min and/or max change) e.g. `filter: { 'balance_changes': [{'asset_id': [15345, 36234], 'roles': [BalanceChangerole.Sender], 'address': "ABC...", 'min_amount': 1, 'max_amount': 2}]}`
- Algo transfers (pay transactions)
  - Amount transferred (min and/or max) e.g. `'filter': { 'type': 'pay', 'min_amount': 1, 'max_amount': 100 }`
  - Balance changes (sender, receiver, close to, min and/or max change) e.g. `'filter': { 'balance_changes': [{'roles': [BalanceChangeRole.Sender], 'address': "ABC...", 'min_amount': 1, 'max_amount': 2}]}`

You can supply multiple, named filters via the [`NamedTransactionFilter`](subscriptions#namedtransactionfilter) type. When subscribed transactions are returned each transaction will have a `filters_matched` property that will have an array of any filter(s) that caused that transaction to be returned. When using [`AlgorandSubscriber`](./subscriber), you can subscribe to events that are emitted with the filter name.

### ARC-28 event subscription and reads

You can [subscribe to ARC-28 events](#extensive-subscription-filtering) for a smart contract, similar to how you can [subscribe to events in Ethereum](https://docs.web3js.org/guides/events_subscriptions/).

Furthermore, you can receive any ARC-28 events that a smart contract call you subscribe to emitted in the [subscribed transaction object](subscriptions#subscribedtransaction).

Both subscription and receiving ARC-28 events work through the use of the `arc28Events` parameter in [`AlgorandSubscriber`](./subscriber) and [`get_subscribed_transactions`](./subscriptions):

```python
group1_events = {
    "groupName": "group1",
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

subscriber = AlgorandSubscriber(arc28_events=[group1_events], ...)

# or:

result = await get_subscribed_transactions(arc28_events=[group1_events], ...)
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

When specifying an [ARC-28 event filter](#extensive-subscription-filtering), you specify both the `group_name` and `event_name`(s) to narrow down what event(s) you want to subscribe to.

If you want to emit an ARC-28 event from your smart contract you can follow the [below code examples](#emit-arc-28-events).

### First-class inner transaction support

When you subscribe to transactions any subscriptions that cover an inner transaction will pick up that inner transaction and [return](subscriptions#subscribedtransaction) it to you correctly.

Note: the behaviour Algorand Indexer has is to return the parent transaction, not the inner transaction; this library will always return the actual transaction you subscribed to.

If you [receive](subscriptions#subscribedtransaction) an inner transaction then there will be a `parent_transaction_id` field populated that allows you to see that it was an inner transaction and how to identify the parent transaction.

The `id` of an inner transaction will be set to `{parent_transaction_id}/inner/{index-of-child-within-parent}` where `{index-of-child-within-parent}` is calculated based on uniquely walking the tree of potentially nested inner transactions. [This transaction in Allo.info](https://allo.info/tx/group/cHiEEvBCRGnUhz9409gHl%2Fvn00lYDZnJoppC3YexRr0%3D) is a good illustration of how inner transaction indexes are allocated (this library uses the same approach).

All [returned](subscriptions#subscribedtransaction) transactions will have an `inner-txns` property with any inner transactions of that transaction populated (recursively).

The `intra-round-offset` field in a [subscribed transaction or inner transaction within](subscriptions#subscribedtransaction) is calculated by walking the full tree depth-first from the first transaction in the block, through any inner transactions recursively starting from an index of 0. This algorithm matches the one in Algorand Indexer and ensures that all transactions have a unique index, but the top level transaction in the block don't necessarily have a sequential index.

### State-proof support

You can subscribe to [state proof](https://dev.algorand.co/concepts/protocol/stateproofs) transactions using this subscriber library. At the time of writing state proof transactions are not supported by algosdk v2 and custom handling has been added to ensure this valuable type of transaction can be subscribed to.

The field level documentation of the [returned state proof transaction](subscriptions#subscribedtransaction) is comprehensively documented via [AlgoKit Utils](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L277).

By exposing this functionality, this library can be used to create a [light client](https://dev.algorand.co/concepts/protocol/stateproofs).

### Simple programming model

This library is easy to use and consume through [easy to use, type-safe TypeScript methods and objects](#entry-points) and subscribed transactions have a [comprehensive and familiar model type](subscriptions#subscribedtransaction) with all relevant/useful information about that transaction (including things like transaction id, round number, created asset/app id, app logs, etc.) modelled on the indexer data model (which is used regardless of whether the transactions come from indexer or algod so it's a consistent experience).

For more examples of how to use it see the [relevant documentation](subscriber).

### Easy to deploy

Because the [entry points](#entry-points) of this library are simple TypeScript methods to execute it you simply need to run it in a valid JavaScript execution environment. For instance, you could run it within a web browser if you want a user facing app to show real-time transaction notifications in-app, or in a Node.js process running in the myriad of ways Node.js can be run.

Because of that, you have full control over how you want to deploy and use the subscriber; it will work with whatever persistence (e.g. sql, no-sql, etc.), queuing/messaging (e.g. queues, topics, buses, web hooks, web sockets) and compute (e.g. serverless periodic lambdas, continually running containers, virtual machines, etc.) services you want to use.

### Fast initial index

When [subscribing to the chain](#notification-and-indexing) for the purposes of building an index you often will want to start at the beginning of the chain or a substantial time in the past when the given solution you are subscribing for started.

This kind of catch up takes days to process since algod only lets you retrieve a single block at a time and retrieving a block takes 0.5-1s. Given there are millions of blocks in MainNet it doesn't take long to do the math to see why it takes so long to catch up.

This subscriber library has a unique, optional indexer catch up mode that allows you to use indexer to catch up to the tip of the chain in seconds or minutes rather than days for your specific filter.

This is really handy when you are doing local development or spinning up a new environment and don't want to wait for days.

To make use of this feature, you need to set the `sync_behaviour` config to `catchup-with-indexer` and ensure that you pass `indexer` in to the [entry point](#entry-points) along with `algod`.

Any [filter](#extensive-subscription-filtering) you apply will be seamlessly translated to indexer searches to get the historic transactions in the most efficient way possible based on the apis indexer exposes. Once the subscriber is within `max_rounds_to_sync` of the tip of the chain it will switch to subscribing using `algod`.

To see this in action, you can run the Data History Museum example in this repository against MainNet and see it sync millions of rounds in seconds.

The indexer catchup isn't magic - if the filter you are trying to catch up with generates an enormous number of transactions (e.g. hundreds of thousands or millions) then it will run very slowly and has the potential for running out of compute and memory time depending on what the constraints are in the deployment environment you are running in. In that instance though, there is a config parameter you can use `max_indexer_rounds_to_sync` so you can break the indexer catchup into multiple "polls" e.g. 100,000 rounds at a time. This allows a smaller batch of transactions to be retrieved and persisted in multiple batches.

To understand how the indexer behaviour works to know if you are likely to generate a lot of transactions it's worth understanding the architecture of the indexer catchup; indexer catchup runs in two stages:

1. **Pre-filtering**: Any filters that can be translated to the [indexer search transactions endpoint](https://dev.algorand.co/reference/rest-apis/indexer/#lookuptransaction). This query is then run between the rounds that need to be synced and paginated in the max number of results (1000) at a time until all of the transactions are retrieved. This ensures we get round-based transactional consistency. This is the filter that can easily explode out though and take a long time when using indexer catchup. For avoidance of doubt, the following filters are the ones that are converted to a pre-filter:
   - `sender` (single value)
   - `receiver` (single value)
   - `type` (single value)
   - `note_prefix`
   - `app_id` (single value)
   - `asset_id` (single value)
   - `min_amount` (and `type = pay` or `assetId` provided)
   - `max_amount` (and `maxAmount < Number.MAX_SAFE_INTEGER` and `type = pay` or (`assetId` provided and `minAmount > 0`))
2. **Post-filtering**: All remaining filters are then applied in-memory to the resulting list of transactions that are returned from the pre-filter before being returned as subscribed transactions.

## Entry points

There are two entry points into the subscriber functionality. The lower level [`get_subscribed_transactions`](./subscriptions) method that contains the raw subscription logic for a single "poll", and the [`AlgorandSubscriber`](./subscriber) class that provides a higher level interface that is easier to use and takes care of a lot more orchestration logic for you (particularly around the ability to continuously poll).

Both are first-class supported ways of using this library, but we generally recommend starting with the `AlgorandSubscriber` since it's easier to use and will cover the majority of use cases.

## Reference docs

[See reference docs](./code/README).

## Emit ARC-28 events

To emit ARC-28 events from your smart contract you can use the following syntax.

### Algorand Python

```python
@arc4.abimethod
def emit_swapped(self, a: arc4.UInt64, b: arc4.UInt64) -> None:
    arc4.emit("MyEvent", a, b)
```

OR:

```python
class MyEvent(arc4.Struct):
    a: arc4.String
    b: arc4.UInt64

# ...

@arc4.abimethod
def emit_swapped(self, a: arc4.String, b: arc4.UInt64) -> None:
    arc4.emit(MyEvent(a, b))
```

### TealScript

```typescript
MyEvent = new EventLogger<{
  stringField: string
  intField: uint64
}>();

// ...

this.MyEvent.log({
  stringField: "a"
  intField: 2
})
```

### PyTEAL

```python
class MyEvent(pt.abi.NamedTuple):
    stringField: pt.abi.Field[pt.abi.String]
    intField: pt.abi.Field[pt.abi.Uint64]

# ...

@app.external()
def myMethod(a: pt.abi.String, b: pt.abi.Uint64) -> pt.Expr:
    # ...
    return pt.Seq(
        # ...
        (event := MyEvent()).set(a, b),
        pt.Log(pt.Concat(pt.MethodSignature("MyEvent(byte[],uint64)"), event._stored_value.load())),
        pt.Approve(),
    )
```

Note: if your event doesn't have any dynamic ARC-4 types in it then you can simplify that to something like this:

```python
pt.Log(pt.Concat(pt.MethodSignature("MyEvent(byte[],uint64)"), a.get(), pt.Itob(b.get()))),
```

### TEAL

```teal
method "MyEvent(byte[],uint64)"
frame_dig 0 // or any other command to put the ARC-4 encoded bytes for the event on the stack
concat
log
```

## Next steps

To dig deeper into the capabilities of `algokit-subscriber`, continue with the following sections.

```{toctree}
---
maxdepth: 2
caption: Contents
hidden: true
---

subscriber
subscriptions
api
```
