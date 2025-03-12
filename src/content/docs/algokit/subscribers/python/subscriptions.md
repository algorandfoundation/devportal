---
title: get_subscribed_transactions
---

`get_subscribed_transactions` is the core building block at the centre of this library. It's a simple, but flexible mechanism that allows you to enact a single subscription "poll" of the Algorand blockchain.

This is a lower level building block, you likely don't want to use it directly, but instead use the [`AlgorandSubscriber` class](./subscriber.ts).

You can use this method to orchestrate everything from an index of all relevant data from the start of the chain through to simply subscribing to relevant transactions as they emerge at the tip of the chain. It allows you to have reliable at least once delivery even if your code has outages through the use of watermarking.

```python
def get_subscribed_transactions(
    subscription: TransactionSubscriptionParams,
    algod: AlgodClient,
    indexer: IndexerClient | None = None
) -> TransactionSubscriptionResult:
    """
    Executes a single pull/poll to subscribe to transactions on the configured Algorand
    blockchain for the given subscription context.
    """
```

## TransactionSubscriptionParams

Specifying a subscription requires passing in a `TransactionSubscriptionParams` object, which configures the behaviour:

```python
class CoreTransactionSubscriptionParams(TypedDict):
    filters: list['NamedTransactionFilter']
    """The filter(s) to apply to find transactions of interest."""

    arc28_events: NotRequired[list['Arc28EventGroup']]
    """Any ARC-28 event definitions to process from app call logs"""

    max_rounds_to_sync: NotRequired[int | None]
    """
    The maximum number of rounds to sync from algod for each subscription pull/poll.
    Defaults to 500.
    """

    max_indexer_rounds_to_sync: NotRequired[int | None]
    """
    The maximum number of rounds to sync from indexer when using `sync_behaviour: 'catchup-with-indexer'`.
    """

    sync_behaviour: str
    """
    If the current tip of the configured Algorand blockchain is more than `max_rounds_to_sync`
    past `watermark` then how should that be handled.
    """

class TransactionSubscriptionParams(CoreTransactionSubscriptionParams):
    watermark: int
    """
    The current round watermark that transactions have previously been synced to.
    """

    current_round: NotRequired[int]
    """
    The current tip of the configured Algorand blockchain.
    If not provided, it will be resolved on demand.
    """
```

## TransactionFilter

The [`filters` parameter](#transactionsubscriptionparams) allows you to specify a set of filters to return a subset of transactions you are interested in. Each filter contains a `filter` property of type `TransactionFilter`, which matches the following type:

```typescript
class TransactionFilter(TypedDict):
    type: NotRequired[str | list[str]]
    """Filter based on the given transaction type(s)."""

    sender: NotRequired[str | list[str]]
    """Filter to transactions sent from the specified address(es)."""

    receiver: NotRequired[str | list[str]]
    """Filter to transactions being received by the specified address(es)."""

    note_prefix: NotRequired[str | bytes]
    """Filter to transactions with a note having the given prefix."""

    app_id: NotRequired[int | list[int]]
    """Filter to transactions against the app with the given ID(s)."""

    app_create: NotRequired[bool]
    """Filter to transactions that are creating an app."""

    app_on_complete: NotRequired[str | list[str]]
    """Filter to transactions that have given on complete(s)."""

    asset_id: NotRequired[int | list[int]]
    """Filter to transactions against the asset with the given ID(s)."""

    asset_create: NotRequired[bool]
    """Filter to transactions that are creating an asset."""

    min_amount: NotRequired[int]
    """
    Filter to transactions where the amount being transferred is greater
    than or equal to the given minimum (microAlgos or decimal units of an ASA if type: axfer).
    """

    max_amount: NotRequired[int]
    """
    Filter to transactions where the amount being transferred is less than
    or equal to the given maximum (microAlgos or decimal units of an ASA if type: axfer).
    """

    method_signature: NotRequired[str | list[str]]
    """
    Filter to app transactions that have the given ARC-0004 method selector(s) for
    the given method signature as the first app argument.
    """

    app_call_arguments_match: NotRequired[Callable[[list[bytes] | None], bool]]
    """Filter to app transactions that meet the given app arguments predicate."""

    arc28_events: NotRequired[list[dict[str, str]]]
    """
    Filter to app transactions that emit the given ARC-28 events.
    Note: the definitions for these events must be passed in to the subscription config via `arc28_events`.
    """

    balance_changes: NotRequired[list[dict[str, Union[int, list[int], str, list[str], 'BalanceChangeRole', list['BalanceChangeRole']]]]]
    """Filter to transactions that result in balance changes that match one or more of the given set of balance changes."""

    custom_filter: NotRequired[Callable[[TransactionResult], bool]]
    """Catch-all custom filter to filter for things that the rest of the filters don't provide."""
```

Each filter you provide within this type will apply an AND logic between the specified filters, e.g.

```typescript
"filter": {
  "type": "axfer",
  "sender": "ABC..."
}
```

Will return transactions that are `axfer` type AND have a sender of `"ABC..."`.

### NamedTransactionFilter

You can specify multiple filters in an array, where each filter is a `NamedTransactionFilter`, which consists of:

```python
class NamedTransactionFilter(TypedDict):
    """Specify a named filter to apply to find transactions of interest."""

    name: str
    """The name to give the filter."""

    filter: TransactionFilter
    """The filter itself."""
```

This gives you the ability to detect which filter got matched when a transaction is returned, noting that you can use the same name multiple times if there are multiple filters (aka OR logic) that comprise the same logical filter.

## Arc28EventGroup

The [`arc28_events` parameter](#transactionsubscriptionparams) allows you to define any ARC-28 events that may appear in subscribed transactions so they can either be subscribed to, or be processed and added to the resulting [subscribed transaction object](#subscribedtransaction).

## TransactionSubscriptionResult

The result of calling `get_subscribed_transactions` is a `TransactionSubscriptionResult`:

```python
class TransactionSubscriptionResult(TypedDict):
    """The result of a single subscription pull/poll."""

    synced_round_range: tuple[int, int]
    """The round range that was synced from/to"""

    current_round: int
    """The current detected tip of the configured Algorand blockchain."""

    starting_watermark: int
    """The watermark value that was retrieved at the start of the subscription poll."""

    new_watermark: int
    """
    The new watermark value to persist for the next call to
    `get_subscribed_transactions` to continue the sync.
    Will be equal to `synced_round_range[1]`. Only persist this
    after processing (or in the same atomic transaction as)
    subscribed transactions to keep it reliable.
    """

    subscribed_transactions: list['SubscribedTransaction']
    """
    Any transactions that matched the given filter within
    the synced round range. This substantively uses the indexer transaction
    format to represent the data with some additional fields.
    """

    block_metadata: NotRequired[list['BlockMetadata']]
    """
    The metadata about any blocks that were retrieved from algod as part
    of the subscription poll.
    """

class BlockMetadata(TypedDict):
    """Metadata about a block that was retrieved from algod."""

    hash: NotRequired[str | None]
    """The base64 block hash."""

    round: int
    """The round of the block."""

    timestamp: int
    """Block creation timestamp in seconds since epoch"""

    genesis_id: str
    """The genesis ID of the chain."""

    genesis_hash: str
    """The base64 genesis hash of the chain."""

    previous_block_hash: NotRequired[str | None]
    """The base64 previous block hash."""

    seed: str
    """The base64 seed of the block."""

    rewards: NotRequired['BlockRewards']
    """Fields relating to rewards"""

    parent_transaction_count: int
    """Count of parent transactions in this block"""

    full_transaction_count: int
    """Full count of transactions and inner transactions (recursively) in this block."""

    txn_counter: int
    """Number of the next transaction that will be committed after this block. It is 0 when no transactions have ever been committed (since TxnCounter started being supported)."""

    transactions_root: str
    """
    Root of transaction merkle tree using SHA512_256 hash function.
    This commitment is computed based on the PaysetCommit type specified in the block's consensus protocol.
    """

    transactions_root_sha256: str
    """
    TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can be used on environments where only the SHA256 function exists.
    """

    upgrade_state: NotRequired['BlockUpgradeState']
    """Fields relating to a protocol upgrade."""

```

## SubscribedTransaction

The common model used to expose a transaction that is returned from a subscription is a `SubscribedTransaction`, which can be imported like so:

```python
from algokit_subscriber import SubscribedTransaction
```

This type is substantively, based on the Indexer [`TransactionResult`](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/indexer.ts#L77) [model](https://developer.algorand.org/docs/rest-apis/indexer/#transaction) format. While the indexer type is used, the subscriber itself doesn't have to use indexer - any transactions it retrieves from algod are transformed to this common model type. Beyond the indexer type it has some modifications to:

- Add the `parent_transaction_id` field so inner transactions have a reference to their parent
- Override the type of `inner-txns` to be `SubscribedTransaction[]` so inner transactions (recursively) get these extra fields too
- Add emitted ARC-28 events via `arc28_events`
- The list of filter(s) that caused the transaction to be matched

The definition of the type is:

```python
TransactionResult = TypedDict("TransactionResult", {
    "id": str,
    "tx-type": str,
    "fee": int,
    "sender": str,
    "first-valid": int,
    "last-valid": int,
    "confirmed-round": NotRequired[int],
    "group": NotRequired[None | str],
    "note": NotRequired[str],
    "logs": NotRequired[list[str]],
    "round-time": NotRequired[int],
    "intra-round-offset": NotRequired[int],
    "signature": NotRequired['TransactionSignature'],
    "application-transaction": NotRequired['ApplicationTransactionResult'],
    "created-application-index": NotRequired[None | int],
    "asset-config-transaction": NotRequired['AssetConfigTransactionResult'],
    "created-asset-index": NotRequired[None | int],
    "asset-freeze-transaction": NotRequired['AssetFreezeTransactionResult'],
    "asset-transfer-transaction": NotRequired['AssetTransferTransactionResult'],
    "keyreg-transaction": NotRequired['KeyRegistrationTransactionResult'],
    "payment-transaction": NotRequired['PaymentTransactionResult'],
    "state-proof-transaction": NotRequired['StateProofTransactionResult'],
    "auth-addr": NotRequired[None | str],
    "closing-amount": NotRequired[None | int],
    "genesis-hash": NotRequired[str],
    "genesis-id": NotRequired[str],
    "inner-txns": NotRequired[list['TransactionResult']],
    "rekey-to": NotRequired[str],
    "lease": NotRequired[str],
    "local-state-delta": NotRequired[list[dict]],
    "global-state-delta": NotRequired[list[dict]],
    "receiver-rewards": NotRequired[int],
    "sender-rewards": NotRequired[int],
    "close-rewards": NotRequired[int]
})

class SubscribedTransaction(TransactionResult):
    """
    The common model used to expose a transaction that is returned from a subscription.

    Substantively, based on the Indexer `TransactionResult` model format with some modifications to:
    * Add the `parent_transaction_id` field so inner transactions have a reference to their parent
    * Override the type of `inner_txns` to be `SubscribedTransaction[]` so inner transactions (recursively) get these extra fields too
    * Add emitted ARC-28 events via `arc28_events`
    * Balance changes in algo or assets
    """

    parent_transaction_id: NotRequired[None | str]
    """The transaction ID of the parent of this transaction (if it's an inner transaction)."""

    inner_txns: NotRequired[list['SubscribedTransaction']]
    """Inner transactions produced by application execution."""

    arc28_events: NotRequired[list[EmittedArc28Event]]
    """Any ARC-28 events emitted from an app call."""

    filters_matched: NotRequired[list[str]]
    """The names of any filters that matched the given transaction to result in it being 'subscribed'."""

    balance_changes: NotRequired[list['BalanceChange']]
    """The balance changes in the transaction."""

class BalanceChange(TypedDict):
    """Represents a balance change effect for a transaction."""

    address: str
    """The address that the balance change is for."""

    asset_id: int
    """The asset ID of the balance change, or 0 for Algos."""

    amount: int
    """The amount of the balance change in smallest divisible unit or microAlgos."""

    roles: list['BalanceChangeRole']
    """The roles the account was playing that led to the balance change"""

class Arc28EventToProcess(TypedDict):
    """
    Represents an ARC-28 event to be processed.
    """

    group_name: str
    """The name of the ARC-28 event group the event belongs to"""

    event_name: str
    """The name of the ARC-28 event that was triggered"""

    event_signature: str
    """The signature of the event e.g. `EventName(type1,type2)`"""

    event_prefix: str
    """The 4-byte hex prefix for the event"""

    event_definition: Arc28Event
    """The ARC-28 definition of the event"""

class EmittedArc28Event(Arc28EventToProcess):
    """
    Represents an ARC-28 event that was emitted.
    """

    args: list[Any]
    """The ordered arguments extracted from the event that was emitted"""

    args_by_name: dict[str, Any]
    """The named arguments extracted from the event that was emitted (where the arguments had a name defined)"""

```

## Examples

Here are some examples of how to use this method:

### Real-time notification of transactions of interest at the tip of the chain discarding stale records

If you ran the following code on a cron schedule of (say) every 5 seconds it would notify you every time the account (in this case the Data History Museum TestNet account `ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU`) sent a transaction. If the service stopped working for a period of time and fell behind then
it would drop old records and restart notifications from the new tip.

```python
from algokit_subscriber import AlgorandSubscriber, SubscribedTransaction
from algokit_utils.beta.algorand_client import AlgorandClient

algorand = AlgorandClient.test_net()
watermark = 0

def get_watermark() -> int:
    return watermark

def set_watermark(new_watermark: int) -> None:
    global watermark  # noqa: PLW0603
    watermark = new_watermark

subscriber = AlgorandSubscriber(algod_client=algorand.client.algod, config={
    'filters': [
        {
            'name': 'filter1',
            'filter': {
                'sender': 'ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU'
            }
        }
    ],
    'wait_for_block_when_at_tip': True,
    'watermark_persistence': {
        'get': get_watermark,
        'set': set_watermark
    },
    'sync_behaviour': 'skip-sync-newest',
    'max_rounds_to_sync': 100
})

def notify_transactions(transaction: SubscribedTransaction, _: str) -> None:
    # Implement your notification logic here
    print(f"New transaction from {transaction['sender']}") # noqa: T201

subscriber.on('filter1', notify_transactions)
subscriber.start()
```

### Real-time notification of transactions of interest at the tip of the chain with at least once delivery

If you ran the following code on a cron schedule of (say) every 5 seconds it would notify you every time the account (in this case the Data History Museum TestNet account `ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU`) sent a transaction. If the service stopped working for a period of time and fell behind then
it would pick up where it left off and catch up using algod (note: you need to connect it to a archival node).

```python
from algokit_subscriber import AlgorandSubscriber, SubscribedTransaction
from algokit_utils.beta.algorand_client import AlgorandClient

algorand = AlgorandClient.test_net()
watermark = 0

def get_watermark() -> int:
    return watermark

def set_watermark(new_watermark: int) -> None:
    global watermark  # noqa: PLW0603
    watermark = new_watermark

subscriber = AlgorandSubscriber(algod_client=algorand.client.algod, config={
    'filters': [
        {
            'name': 'filter1',
            'filter': {
                'sender': 'ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU'
            }
        }
    ],
    'wait_for_block_when_at_tip': True,
    'watermark_persistence': {
        'get': get_watermark,
        'set': set_watermark
    },
    'sync_behaviour': 'sync-oldest-start-now',
    'max_rounds_to_sync': 100
})

def notify_transactions(transaction: SubscribedTransaction, _: str) -> None:
    # Implement your notification logic here
    print(f"New transaction from {transaction['sender']}") # noqa: T201

subscriber.on('filter1', notify_transactions)
subscriber.start()
```

### Quickly building a reliable, up-to-date cache index of all transactions of interest from the beginning of the chain

If you ran the following code on a cron schedule of (say) every 30 - 60 seconds it would create a cached index of all assets created by the account (in this case the Data History Museum TestNet account `ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU`). Given it uses indexer to catch up you can deploy this into a fresh environment with an empty database and it will catch up in seconds rather than days.

```python
from algokit_subscriber import AlgorandSubscriber, SubscribedTransaction
from algokit_utils.beta.algorand_client import AlgorandClient

algorand = AlgorandClient.test_net()
watermark = 0

def get_watermark() -> int:
    return watermark

def set_watermark(new_watermark: int) -> None:
    global watermark  # noqa: PLW0603
    watermark = new_watermark

def save_transactions(transactions: list[SubscribedTransaction]) -> None:
    # Implement your logic to save transactions here
    pass

subscriber = AlgorandSubscriber(algod_client=algorand.client.algod, indexer_client=algorand.client.indexer, config={
    'filters': [
        {
            'name': 'filter1',
            'filter': {
                'type': 'acfg',
                'sender': 'ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU',
                'asset_create': True
            }
        }
    ],
    'wait_for_block_when_at_tip': True,
    'watermark_persistence': {
        'get': get_watermark,
        'set': set_watermark
    },
    'sync_behaviour': 'catchup-with-indexer',
    'max_rounds_to_sync': 1000
})

def process_transactions(transaction: SubscribedTransaction, _: str) -> None:
    save_transactions([transaction])

subscriber.on('filter1', process_transactions)
subscriber.start()
```
