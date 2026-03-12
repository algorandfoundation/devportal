---
title: get_subscribed_transactions
description: The core building block for enacting a single subscription poll of the Algorand blockchain.
---

`get_subscribed_transactions` is the core building block at the centre of this library. It's a simple, but flexible mechanism that allows you to enact a single subscription "poll" of the Algorand blockchain.

This is a lower level building block, you likely don't want to use it directly, but instead use the [`AlgorandSubscriber` class](/docs/algokit-subscriber/python/latest/guide/subscriber/).

You can use this method to orchestrate everything from an index of all relevant data from the start of the chain through to simply subscribing to relevant transactions as they emerge at the tip of the chain. It allows you to have reliable at least once delivery even if your code has outages through the use of watermarking.

```python
from algokit_algod_client import AlgodClient
from algokit_indexer_client import IndexerClient
import algokit_subscriber as sub

result: sub.TransactionSubscriptionResult = sub.get_subscribed_transactions(
    subscription=sub.TransactionSubscriptionParams(
        filters=[sub.NamedTransactionFilter(name="my-filter", filter=sub.TransactionFilter(sender="ABC..."))],
        watermark=0,
        sync_behaviour="skip-sync-newest",
    ),
    algod=algod_client,       # AlgodClient
    indexer=indexer_client,    # optional IndexerClient, only needed for catchup-with-indexer
    compiled_filters=None,    # optional pre-compiled filters (keyword-only), used internally by AlgorandSubscriber
)
```

## TransactionSubscriptionParams

Specifying a subscription requires passing in a `TransactionSubscriptionParams` object, which configures the behaviour:

````python
@dataclass(kw_only=True, slots=True)
class TransactionSubscriptionParams(CoreTransactionSubscriptionParams):
    """Parameters to control a single subscription pull/poll."""

    watermark: int
    """The current round watermark that transactions have previously been synced to.

    Persist this value as you process transactions processed from this method
    to allow for resilient and incremental syncing.

    Syncing will start from ``watermark + 1``.

    Start from 0 if you want to start from the beginning of time, noting that
    will be slow if sync_behaviour is "sync-oldest".
    """

    current_round: int | None = None
    """The current tip of the configured Algorand blockchain.
    If not provided, it will be resolved on demand.
    """


@dataclass(kw_only=True, slots=True)
class CoreTransactionSubscriptionParams:
    """Common parameters to control a single subscription pull/poll."""

    filters: Sequence[NamedTransactionFilter]
    """The filter(s) to apply to find transactions of interest.

    A list of filters with corresponding names.

    Example::

        filters=[
            NamedTransactionFilter(
                name="asset-transfers",
                filter=TransactionFilter(type="axfer", ...),
            ),
            NamedTransactionFilter(
                name="payments",
                filter=TransactionFilter(type="pay", ...),
            ),
        ]
    """

    arc28_events: list[Arc28EventGroup] | None = None
    """Any ARC-28 event definitions to process from app call logs"""

    max_rounds_to_sync: int = 500
    """The maximum number of rounds to sync from algod for each subscription pull/poll.

    Defaults to 500.

    This gives you control over how many rounds you wait for at a time,
    your staleness tolerance when using "skip-sync-newest" or "fail", and
    your catchup speed when using "sync-oldest".
    """

    max_indexer_rounds_to_sync: int | None = None
    """The maximum number of rounds to sync from indexer when using
    sync_behaviour="catchup-with-indexer".

    By default there is no limit and it will paginate through all of the rounds.
    Sometimes this can result in an incredibly long catchup time that may break the service
    due to execution and memory constraints, particularly for filters that result in a large
    number of transactions.

    Instead, this allows indexer catchup to be split into multiple polls, each with a
    transactionally consistent boundary based on the number of rounds specified here.
    """

    sync_behaviour: SyncBehaviour
    """If the current tip of the configured Algorand blockchain is more than
    max_rounds_to_sync past watermark then how should that be handled:

    - "skip-sync-newest": Discard old blocks/transactions and sync the newest; useful
      for real-time notification scenarios where you don't care about history and
      are happy to lose old transactions.
    - "sync-oldest": Sync from the oldest rounds forward max_rounds_to_sync rounds
      using algod; note: this will be slow if you are starting from 0 and requires
      an archival node.
    - "sync-oldest-start-now": Same as "sync-oldest", but if the watermark is 0
      then start at the current round i.e. don't sync historical records, but once
      subscribing starts sync everything; note: if it falls behind it requires an
      archival node.
    - "catchup-with-indexer": Sync to round currentRound - max_rounds_to_sync + 1
      using indexer (much faster than using algod for long time periods) and then
      use algod from there.
    - "fail": Raise an error.
    """
````

## TransactionFilter

The [`filters` parameter](#transactionsubscriptionparams) allows you to specify a set of filters to return a subset of transactions you are interested in. Each filter contains a `filter` property of type `TransactionFilter`:

````python
@dataclass(kw_only=True, slots=True)
class TransactionFilter:
    """Specify a filter to apply to find transactions of interest."""

    type: TransactionType | list[TransactionType] | None = None
    """Filter based on the given transaction type(s)."""

    sender: str | list[str] | None = None
    """Filter to transactions sent from the specified address(es)."""

    receiver: str | list[str] | None = None
    """Filter to transactions being received by the specified address(es)."""

    note_prefix: str | bytes | None = None
    """Filter to transactions with a note having the given prefix."""

    app_id: int | list[int] | None = None
    """Filter to transactions against the app with the given ID(s)."""

    app_create: bool | None = None
    """Filter to transactions that are creating an app."""

    app_on_complete: str | list[str] | None = None
    """Filter to transactions that have given on complete(s)."""

    asset_id: int | list[int] | None = None
    """Filter to transactions against the asset with the given ID(s)."""

    asset_create: bool | None = None
    """Filter to transactions that are creating an asset."""

    min_amount: int | None = None
    """Filter to transactions where the amount being transferred is greater
    than or equal to the given minimum (microAlgos or decimal units of an ASA if type: axfer)."""

    max_amount: int | None = None
    """Filter to transactions where the amount being transferred is less than
    or equal to the given maximum (microAlgos or decimal units of an ASA if type: axfer)."""

    method_signature: str | list[str] | None = None
    """Filter to app transactions that have the given ARC-0004 method selector(s) for
    the given method signature as the first app argument."""

    app_call_arguments_match: Callable[[list[bytes] | None], bool] | None = None
    """Filter to app transactions that meet the given app arguments predicate."""

    arc28_events: list[Arc28EventFilter] | None = None
    """Filter to app transactions that emit the given ARC-28 events.
    Note: the definitions for these events must be passed in to the
    subscription config via ``arc28_events``.
    """

    balance_changes: list[BalanceChangeFilter] | None = None
    """Filter to transactions that result in balance changes that match one or
    more of the given set of balance changes."""

    custom_filter: Callable[[Transaction], bool] | None = None
    """Catch-all custom filter to filter for things that the rest of the filters don't provide."""
````

Each filter you provide within this type will apply an AND logic between the specified fields, e.g.

```python
import algokit_subscriber as sub

sub.TransactionFilter(
    type="axfer",
    sender="ABC...",
)
```

Will return transactions that are `axfer` type AND have a sender of `"ABC..."`.

### NamedTransactionFilter

You can specify multiple filters in a list, where each filter is a `NamedTransactionFilter`:

```python
@dataclass(kw_only=True, slots=True)
class NamedTransactionFilter:
    """Specify a named filter to apply to find transactions of interest."""

    name: str
    """The name to give the filter."""

    filter: TransactionFilter
    """The filter itself."""
```

This gives you the ability to detect which filter got matched when a transaction is returned, noting that you can use the same name multiple times if there are multiple filters (i.e. OR logic) that comprise the same logical filter.

### BalanceChangeFilter

Each entry in the `balance_changes` list is a `BalanceChangeFilter`:

```python
@dataclass(kw_only=True, slots=True)
class BalanceChangeFilter:
    """Filter for balance changes in a transaction."""

    asset_id: int | list[int] | None = None
    """Match transactions with balance changes for one of the given asset ID(s),
    with Algo being ``0``."""

    role: BalanceChangeRole | list[BalanceChangeRole] | None = None
    """Match transactions with balance changes for an account with one of the
    given role(s)."""

    address: str | list[str] | None = None
    """Match transactions with balance changes affecting one of the given account(s)."""

    min_absolute_amount: int | float | None = None
    """Match transactions with absolute balance changes >= the given minimum
    (microAlgos or decimal units of an ASA)."""

    max_absolute_amount: int | float | None = None
    """Match transactions with absolute balance changes <= the given maximum
    (microAlgos or decimal units of an ASA)."""

    min_amount: int | float | None = None
    """Match transactions with balance changes >= the given minimum
    (microAlgos or decimal units of an ASA)."""

    max_amount: int | float | None = None
    """Match transactions with balance changes <= the given maximum
    (microAlgos or decimal units of an ASA)."""
```

## Arc28EventGroup

The [`arc28_events` parameter](#transactionsubscriptionparams) allows you to define any ARC-28 events that may appear in subscribed transactions so they can either be subscribed to, or be processed and added to the resulting [subscribed transaction object](#subscribedtransaction).

See the [ARC-28 Events concept page](/docs/algokit-subscriber/python/latest/concepts/arc28-events/) for detailed field definitions and usage.

## TransactionSubscriptionResult

The result of calling `get_subscribed_transactions` is a `TransactionSubscriptionResult`:

```python
@dataclass(kw_only=True, slots=True)
class TransactionSubscriptionResult:
    """The result of a single subscription pull/poll."""

    synced_round_range: tuple[int, int]
    """The round range that was synced from/to"""

    current_round: int
    """The current detected tip of the configured Algorand blockchain."""

    starting_watermark: int
    """The watermark value that was retrieved at the start of the subscription poll."""

    new_watermark: int
    """The new watermark value to persist for the next call to
    ``get_subscribed_transactions`` to continue the sync.
    Will be equal to ``synced_round_range[1]``. Only persist this
    after processing (or in the same atomic transaction as)
    subscribed transactions to keep it reliable."""

    subscribed_transactions: list[SubscribedTransaction]
    """Any transactions that matched the given filter within
    the synced round range. This substantively uses the indexer transaction
    format to represent the data with some additional fields."""

    block_metadata: list[BlockMetadata] | None = None
    """The metadata about any blocks that were retrieved from algod as part
    of the subscription poll."""


@dataclass(kw_only=True, slots=True)
class BlockMetadata:
    """Metadata about a block that was retrieved from algod."""

    hash: str | None = None
    """The base64 block hash."""

    round: int
    """The round of the block."""

    timestamp: int
    """Block creation timestamp in seconds since epoch"""

    genesis_id: str
    """The genesis ID of the chain."""

    genesis_hash: str
    """The base64 genesis hash of the chain."""

    previous_block_hash: str | None = None
    """The base64 previous block hash."""

    seed: str
    """The base64 seed of the block."""

    rewards: BlockRewards | None = None
    """Fields relating to rewards"""

    parent_transaction_count: int
    """Count of parent transactions in this block"""

    full_transaction_count: int
    """Full count of transactions and inner transactions (recursively) in this block."""

    txn_counter: int
    """Number of the next transaction that will be committed after this block.
    It is 0 when no transactions have ever been committed (since TxnCounter
    started being supported)."""

    transactions_root: str
    """Root of transaction merkle tree using SHA512_256 hash function (base64 encoded).
    This commitment is computed based on the PaysetCommit type specified in
    the block's consensus protocol."""

    transactions_root_sha256: str
    """TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a
    vector commitment instead of a merkle tree, and SHA256 hash function
    instead of the default SHA512_256 (base64 encoded). This commitment can be used on
    environments where only the SHA256 function exists."""

    upgrade_state: BlockUpgradeState | None = None
    """Fields relating to a protocol upgrade."""

    state_proof_tracking: list[BlockStateProofTracking] | None = None
    """Tracks the status of state proofs."""

    upgrade_vote: BlockUpgradeVote | None = None
    """Fields relating to voting for a protocol upgrade."""

    participation_updates: ParticipationUpdates | None = None
    """Participation account data that needs to be checked/acted on by the network."""

    proposer: str | None = None
    """Address of the proposer of this block."""
```

## SubscribedTransaction

The common model used to expose a transaction that is returned from a subscription is a `SubscribedTransaction`.

This type is substantively based on the Indexer `Transaction` model format. While the indexer type is used, the subscriber itself doesn't have to use indexer — any transactions it retrieves from algod are transformed to this common model type. Beyond the base indexer type it has some modifications to:

- Make `id_` required
- Add the `parent_transaction_id` field so inner transactions have a reference to their parent
- Override the type of `inner_txns` to be `list[SubscribedTransaction]` so inner transactions (recursively) get these extra fields too
- Add emitted ARC-28 events via `arc28_events`
- The list of filter(s) that caused the transaction to be matched
- The list of balance change(s) that occurred in the transaction

The definition of the type is:

```python
@dataclass(kw_only=True, slots=True)
class SubscribedTransaction(Transaction):
    """The common model used to expose a transaction that is returned from a
    subscription.

    Substantively, based on the Indexer Transaction model format with
    some modifications to:

    - Add the parent_transaction_id field so inner transactions have a
      reference to their parent
    - Override the type of inner_txns to be list[SubscribedTransaction] so
      inner transactions (recursively) get these extra fields too
    - Add emitted ARC-28 events via arc28_events
    - Balance changes in algo or assets
    """

    id_: str
    inner_txns: list[SubscribedTransaction]
    parent_transaction_id: str | None = None
    """The transaction ID of the parent of this transaction (if it's an inner
    transaction)."""

    parent_intra_round_offset: int | None = None
    """The intra-round offset of the parent of this transaction (if it's an inner
    transaction)."""

    arc28_events: list[EmittedArc28Event] = field(default_factory=list)
    """Any ARC-28 events emitted from an app call."""

    filters_matched: list[str] = field(default_factory=list)
    """The names of any filters that matched the given transaction to result in
    it being 'subscribed'."""

    balance_changes: list[BalanceChange] = field(default_factory=list)
    """The balance changes in the transaction."""


@dataclass(kw_only=True, slots=True)
class EmittedArc28Event:
    """An emitted ARC-28 event extracted from an app call log.

    Incorporates the fields of Arc28EventToProcess (group_name, event_name,
    event_signature, event_prefix, event_definition) plus the extracted args.
    """

    group_name: str
    """The name of the ARC-28 event group the event belongs to"""

    event_name: str
    """The name of the ARC-28 event that was triggered"""

    event_signature: str
    """The signature of the event e.g. ``EventName(type1,type2)``"""

    event_prefix: str
    """The 4-byte hex prefix for the event"""

    event_definition: Arc28Event
    """The ARC-28 definition of the event"""

    args: list[Any]
    """The ordered arguments extracted from the event that was emitted"""

    args_by_name: dict[str, Any]
    """The named arguments extracted from the event that was emitted (where the
    arguments had a name defined)"""


@dataclass(kw_only=True, slots=True)
class BalanceChange:
    """Represents a balance change effect for a transaction."""

    address: str
    """The address that the balance change is for."""

    asset_id: int
    """The asset ID of the balance change, or 0 for Algos."""

    amount: int
    """The amount of the balance change in smallest divisible unit or microAlgos."""

    roles: list[BalanceChangeRole]
    """The roles the account was playing that led to the balance change"""


class BalanceChangeRole(Enum):
    """The role that an account was playing for a given balance change."""

    Sender = "Sender"
    """Account was sending a transaction (sending asset and/or spending fee if asset 0)"""

    Receiver = "Receiver"
    """Account was receiving a transaction"""

    CloseTo = "CloseTo"
    """Account was having an asset amount closed to it"""

    AssetCreator = "AssetCreator"
    """Account was creating an asset and holds the full asset supply"""

    AssetDestroyer = "AssetDestroyer"
    """Account was destroying an asset and has removed the full asset supply from circulation."""
```

## Examples

Here are some examples of how to use `get_subscribed_transactions`:

### Real-time notification of transactions of interest at the tip of the chain discarding stale records

If you ran the following code on a cron schedule of (say) every 5 seconds it would notify you every time the account (in this case the Data History Museum TestNet account `ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU`) sent a transaction. If the service stopped working for a period of time and fell behind then it would drop old records and restart notifications from the new tip.

```python
import algokit_subscriber as sub
from algokit_utils import AlgorandClient

algorand = AlgorandClient.testnet()

# You would need to implement get_last_watermark() to retrieve from a persistence store
watermark = get_last_watermark()
subscription = sub.get_subscribed_transactions(
    subscription=sub.TransactionSubscriptionParams(
        filters=[
            sub.NamedTransactionFilter(
                name="filter1",
                filter=sub.TransactionFilter(
                    sender="ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU",
                ),
            ),
        ],
        watermark=watermark,
        max_rounds_to_sync=100,
        sync_behaviour="skip-sync-newest",
    ),
    algod=algorand.client.algod,
)
if subscription.subscribed_transactions:
    # You would need to implement notify_transactions to action the transactions
    notify_transactions(subscription.subscribed_transactions)
# You would need to implement save_watermark to persist the watermark to the persistence store
save_watermark(subscription.new_watermark)
```

### Real-time notification of transactions of interest at the tip of the chain with at least once delivery

If you ran the following code on a cron schedule of (say) every 5 seconds it would notify you every time the account (in this case the Data History Museum TestNet account `ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU`) sent a transaction. If the service stopped working for a period of time and fell behind then it would pick up where it left off and catch up using algod (note: you need to connect it to an archival node).

```python
import algokit_subscriber as sub
from algokit_utils import AlgorandClient

algorand = AlgorandClient.testnet()

# You would need to implement get_last_watermark() to retrieve from a persistence store
watermark = get_last_watermark()
subscription = sub.get_subscribed_transactions(
    subscription=sub.TransactionSubscriptionParams(
        filters=[
            sub.NamedTransactionFilter(
                name="filter1",
                filter=sub.TransactionFilter(
                    sender="ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU",
                ),
            ),
        ],
        watermark=watermark,
        max_rounds_to_sync=100,
        sync_behaviour="sync-oldest-start-now",
    ),
    algod=algorand.client.algod,
)
if subscription.subscribed_transactions:
    # You would need to implement notify_transactions to action the transactions
    notify_transactions(subscription.subscribed_transactions)
# You would need to implement save_watermark to persist the watermark to the persistence store
save_watermark(subscription.new_watermark)
```

### Quickly building a reliable, up-to-date cache index of all transactions of interest from the beginning of the chain

If you ran the following code on a cron schedule of (say) every 30 - 60 seconds it would create a cached index of all assets created by the account (in this case the Data History Museum TestNet account `ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU`). Given it uses indexer to catch up you can deploy this into a fresh environment with an empty database and it will catch up in seconds rather than days.

```python
import algokit_subscriber as sub
from algokit_utils import AlgorandClient

algorand = AlgorandClient.testnet()

# You would need to implement get_last_watermark() to retrieve from a persistence store
watermark = get_last_watermark()
subscription = sub.get_subscribed_transactions(
    subscription=sub.TransactionSubscriptionParams(
        filters=[
            sub.NamedTransactionFilter(
                name="filter1",
                filter=sub.TransactionFilter(
                    type="acfg",
                    sender="ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU",
                    asset_create=True,
                ),
            ),
        ],
        watermark=watermark,
        max_rounds_to_sync=1000,
        sync_behaviour="catchup-with-indexer",
    ),
    algod=algorand.client.algod,
    indexer=algorand.client.indexer,
)

if subscription.subscribed_transactions:
    # You would need to implement save_transactions to persist the transactions
    save_transactions(subscription.subscribed_transactions)
# You would need to implement save_watermark to persist the watermark to the persistence store
save_watermark(subscription.new_watermark)
```
