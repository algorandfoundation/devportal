---
title: "algokit_subscriber.types.subscription"
---

<div class="api-ref">

## Classes

| [`BalanceChangeRole`](#class-balancechangerole)                                 | Create a collection of name/value pairs.                                            |
|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| [`TransactionSubscriptionResult`](#class-transactionsubscriptionresult)         | The result of a single subscription pull/poll.                                      |
| [`BlockMetadata`](#class-blockmetadata)                                         | Metadata about a block that was retrieved from algod.                               |
| [`BlockRewards`](#class-blockrewards)                                           | dict() -> new empty dictionary                                                      |
| [`BlockUpgradeState`](#class-blockupgradestate)                                 | dict() -> new empty dictionary                                                      |
| [`SubscribedTransaction`](#class-subscribedtransaction)                         | The common model used to expose a transaction that is returned from a subscription. |
| [`BalanceChange`](#class-balancechange)                                         | Represents a balance change effect for a transaction.                               |
| [`BeforePollMetadata`](#class-beforepollmetadata)                               | Metadata about an impending subscription poll.                                      |
| [`TransactionFilter`](#class-transactionfilter)                                 | dict() -> new empty dictionary                                                      |
| [`NamedTransactionFilter`](#class-namedtransactionfilter)                       | Specify a named filter to apply to find transactions of interest.                   |
| [`CoreTransactionSubscriptionParams`](#class-coretransactionsubscriptionparams) | dict() -> new empty dictionary                                                      |
| [`TransactionSubscriptionParams`](#class-transactionsubscriptionparams)         | dict() -> new empty dictionary                                                      |
| [`WatermarkPersistence`](#class-watermarkpersistence)                           | dict() -> new empty dictionary                                                      |
| [`AlgorandSubscriberConfig`](#class-algorandsubscriberconfig)                   | Configuration for the subscriber.                                                   |
| [`SubscriberConfigFilter`](#class-subscriberconfigfilter)                       | A single event to subscribe to / emit.                                              |

## Module Contents

### *class* BalanceChangeRole
Bases: `enum.Enum`

Create a collection of name/value pairs.

Example enumeration:

```python
class Color(Enum):
    RED = 1
    BLUE = 2
    GREEN = 3
```

Access them by:

- attribute access:
  ```python
  Color.RED
  <Color.RED: 1>
  ```
- value lookup:
  ```python
  Color(1)
  <Color.RED: 1>
  ```
- name lookup:
  ```python
  Color['RED']
  <Color.RED: 1>
  ```

Enumerations can be iterated over, and know how many members they have:

```python
len(Color)
3
```

```python
list(Color)
[<Color.RED: 1>, <Color.BLUE: 2>, <Color.GREEN: 3>]
```

Methods can be added to enumerations, and members can have their own
attributes – see the documentation for details.

#### Sender *= 'Sender'*

#### Receiver *= 'Receiver'*

#### CloseTo *= 'CloseTo'*

#### AssetCreator *= 'AssetCreator'*

#### AssetDestroyer *= 'AssetDestroyer'*

### *class* TransactionSubscriptionResult

Bases: `TypedDict`

The result of a single subscription pull/poll.

#### synced_round_range *: tuple[int, int]*

The round range that was synced from/to

#### current_round *: int*

The current detected tip of the configured Algorand blockchain.

#### starting_watermark *: int*

The watermark value that was retrieved at the start of the subscription poll.

#### new_watermark *: int*

The new watermark value to persist for the next call to
get_subscribed_transactions to continue the sync.
Will be equal to synced_round_range[1]. Only persist this
after processing (or in the same atomic transaction as)
subscribed transactions to keep it reliable.

#### subscribed_transactions *: list[[SubscribedTransaction](#class-subscribedtransaction)]*

Any transactions that matched the given filter within
the synced round range. This substantively uses the indexer transaction
format to represent the data with some additional fields.

#### block_metadata *: NotRequired[list[[BlockMetadata](#class-blockmetadata)]]*

The metadata about any blocks that were retrieved from algod as part
of the subscription poll.

### *class* BlockMetadata

Bases: `TypedDict`

Metadata about a block that was retrieved from algod.

#### hash *: NotRequired[str | None]*

The base64 block hash.

#### round *: int*

The round of the block.

#### timestamp *: int*

Block creation timestamp in seconds since epoch

#### genesis_id *: str*

The genesis ID of the chain.

#### genesis_hash *: str*

The base64 genesis hash of the chain.

#### previous_block_hash *: NotRequired[str | None]*

The base64 previous block hash.

#### seed *: str*

The base64 seed of the block.

#### rewards *: NotRequired[[BlockRewards](#class-blockrewards)]*

Fields relating to rewards

#### parent_transaction_count *: int*

Count of parent transactions in this block

#### full_transaction_count *: int*

Full count of transactions and inner transactions (recursively) in this block.

#### txn_counter *: int*

Number of the next transaction that will be committed after this block. It is 0 when no
transactions have ever been committed (since TxnCounter started being supported).

#### transactions_root *: str*

Root of transaction merkle tree using SHA512_256 hash function.
This commitment is computed based on the PaysetCommit type specified in the block’s consensus protocol.

#### transactions_root_sha256 *: str*

TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead
of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can
be used on environments where only the SHA256 function exists.

#### upgrade_state *: NotRequired[[BlockUpgradeState](#class-blockupgradestate)]*

Fields relating to a protocol upgrade.

### *class* BlockRewards

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
  for k, v in iterable:
  <br/>
  > d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list.  For example:  dict(one=1, two=2)

#### fee_sink *: str*

FeeSink is an address that accepts transaction fees, it can only spend to the incentive pool.

#### rewards_calculation_round *: int*

number of leftover MicroAlgos after the distribution of rewards-rate MicroAlgos for every
reward unit in the next round.

#### rewards_level *: int*

How many rewards, in MicroAlgos, have been distributed to each RewardUnit of MicroAlgos since genesis.

#### rewards_pool *: str*

RewardsPool is an address that accepts periodic injections from the fee-sink and continually
redistributes them as rewards.

#### rewards_rate *: int*

Number of new MicroAlgos added to the participation stake from rewards at the next round.

#### rewards_residue *: int*

Number of leftover MicroAlgos after the distribution of RewardsRate/rewardUnits MicroAlgos for
every reward unit in the next round.

### *class* BlockUpgradeState

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
  for k, v in iterable:
  <br/>
  > d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list.  For example:  dict(one=1, two=2)

#### current_protocol *: str*

Current protocol version

#### next_protocol *: NotRequired[None | str]*

The next proposed protocol version.

#### next_protocol_approvals *: NotRequired[None | int]*

Number of blocks which approved the protocol upgrade.

#### next_protocol_vote_before *: NotRequired[None | int]*

Deadline round for this protocol upgrade (No votes will be consider after this round).

#### next_protocol_switch_on *: NotRequired[None | int]*

Round on which the protocol upgrade will take effect.

### *class* SubscribedTransaction

Bases: `algokit_subscriber.types.indexer.TransactionResult`

The common model used to expose a transaction that is returned from a subscription.

Substantively, based on the Indexer TransactionResult model format with some modifications to:
\* Add the parent_transaction_id field so inner transactions have a reference to their parent
\* Override the type of inner_txns to be SubscribedTransaction[] so inner transactions

> (recursively) get these extra fields too
* Add emitted ARC-28 events via arc28_events
* Balance changes in algo or assets

#### parent_transaction_id *: NotRequired[None | str]*

The transaction ID of the parent of this transaction (if it’s an inner transaction).

#### inner_txns *: NotRequired[list[[SubscribedTransaction](#class-subscribedtransaction)]]*

Inner transactions produced by application execution.

#### arc28_events *: NotRequired[list[[EmittedArc28Event](/docs/algokit-subscriber/python/latest/api/algokit_subscriber/types/arc28/#class-emittedarc28event)]]*

Any ARC-28 events emitted from an app call.

#### filters_matched *: NotRequired[list[str]]*

The names of any filters that matched the given transaction to result in it being ‘subscribed’.

#### balance_changes *: NotRequired[list[[BalanceChange](#class-balancechange)]]*

The balance changes in the transaction.

### *class* BalanceChange

Bases: `TypedDict`

Represents a balance change effect for a transaction.

#### address *: str*

The address that the balance change is for.

#### asset_id *: int*

The asset ID of the balance change, or 0 for Algos.

#### amount *: int*

The amount of the balance change in smallest divisible unit or microAlgos.

#### roles *: list[[BalanceChangeRole](#class-balancechangerole)]*

The roles the account was playing that led to the balance change

### *class* BeforePollMetadata

Bases: `TypedDict`

Metadata about an impending subscription poll.

#### watermark *: int*

The current watermark of the subscriber

#### current_round *: int*

The current round of algod

### *class* TransactionFilter

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
  for k, v in iterable:
  <br/>
  > d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list.  For example:  dict(one=1, two=2)

#### type *: NotRequired[str | list[str]]*

Filter based on the given transaction type(s).

#### sender *: NotRequired[str | list[str]]*

Filter to transactions sent from the specified address(es).

#### receiver *: NotRequired[str | list[str]]*

Filter to transactions being received by the specified address(es).

#### note_prefix *: NotRequired[str | bytes]*

Filter to transactions with a note having the given prefix.

#### app_id *: NotRequired[int | list[int]]*

Filter to transactions against the app with the given ID(s).

#### app_create *: NotRequired[bool]*

Filter to transactions that are creating an app.

#### app_on_complete *: NotRequired[str | list[str]]*

Filter to transactions that have given on complete(s).

#### asset_id *: NotRequired[int | list[int]]*

Filter to transactions against the asset with the given ID(s).

#### asset_create *: NotRequired[bool]*

Filter to transactions that are creating an asset.

#### min_amount *: NotRequired[int]*

Filter to transactions where the amount being transferred is greater
than or equal to the given minimum (microAlgos or decimal units of an ASA if type: axfer).

#### max_amount *: NotRequired[int]*

Filter to transactions where the amount being transferred is less than
or equal to the given maximum (microAlgos or decimal units of an ASA if type: axfer).

#### method_signature *: NotRequired[str | list[str]]*

Filter to app transactions that have the given ARC-0004 method selector(s) for
the given method signature as the first app argument.

#### app_call_arguments_match *: NotRequired[collections.abc.Callable[[list[bytes] | None], bool]]*

Filter to app transactions that meet the given app arguments predicate.

#### arc28_events *: NotRequired[list[dict[str, str]]]*

Filter to app transactions that emit the given ARC-28 events.
Note: the definitions for these events must be passed in to the subscription config via arc28_events.

#### balance_changes *: NotRequired[list[dict[str, int | list[int] | str | list[str] | [BalanceChangeRole](#class-balancechangerole) | list[[BalanceChangeRole](#class-balancechangerole)]]]]*

Filter to transactions that result in balance changes that match one or more of the given set
of balance changes.

#### custom_filter *: NotRequired[collections.abc.Callable[[TransactionResult], bool]]*

Catch-all custom filter to filter for things that the rest of the filters don’t provide.

### *class* NamedTransactionFilter

Bases: `TypedDict`

Specify a named filter to apply to find transactions of interest.

#### name *: str*

The name to give the filter.

#### filter *: [TransactionFilter](#class-transactionfilter)*

The filter itself.

### *class* CoreTransactionSubscriptionParams

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
  for k, v in iterable:
  <br/>
  > d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list.  For example:  dict(one=1, two=2)

#### filters *: list[[NamedTransactionFilter](#class-namedtransactionfilter)]*

The filter(s) to apply to find transactions of interest.

#### arc28_events *: NotRequired[list[[Arc28EventGroup](/docs/algokit-subscriber/python/latest/api/algokit_subscriber/types/arc28/#class-arc28eventgroup)]]*

Any ARC-28 event definitions to process from app call logs

#### max_rounds_to_sync *: NotRequired[int | None]*

The maximum number of rounds to sync from algod for each subscription pull/poll.
Defaults to 500.

#### max_indexer_rounds_to_sync *: NotRequired[int | None]*

The maximum number of rounds to sync from indexer when using sync_behaviour: ‘catchup-with-indexer’.

#### sync_behaviour *: Literal['catchup-with-algod', 'catchup-with-indexer', 'fail', 'skip-sync-newest', 'sync-oldest', 'sync-oldest-start-now']*

If the current tip of the configured Algorand blockchain is more than max_rounds_to_sync
past watermark then how should that be handled.

fail: Immediately fail
skip-sync-newest: Skip catchup and start syncing from the latest block regardless of the watermark.
sync-oldest: Start syncing from the watermark
sync-oldest-start-now: If the watermark is 0, start syncing from round 0. Otherwise skip to the latest block.
catchup-with-indexer: Use indexer to get missing transactions that match the filters starting
from the watermark. Filters will be used in the indexer request to reduce the total amount of
requests needed (relative to getting every block)

### *class* TransactionSubscriptionParams

Bases: [`CoreTransactionSubscriptionParams`](#class-coretransactionsubscriptionparams)

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
  for k, v in iterable:
  <br/>
  > d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list.  For example:  dict(one=1, two=2)

#### watermark *: int*

The current round watermark that transactions have previously been synced to.

#### current_round *: NotRequired[int]*

The current tip of the configured Algorand blockchain.
If not provided, it will be resolved on demand.

### *class* WatermarkPersistence

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
  for k, v in iterable:
  <br/>
  > d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list.  For example:  dict(one=1, two=2)

#### get *: Callable[[], int | None]*

Method to retrieve the current watermark

#### set *: Callable[[int], None]*

Method to persist the new watermark

### *class* AlgorandSubscriberConfig

Bases: [`CoreTransactionSubscriptionParams`](#class-coretransactionsubscriptionparams)

Configuration for the subscriber.

#### filters *: list[[SubscriberConfigFilter](#class-subscriberconfigfilter)]*

The set of filters to subscribe to / emit events for, along with optional data mappers.

#### frequency_in_seconds *: NotRequired[int]*

The frequency to poll for new blocks in seconds; defaults to 1s

#### wait_for_block_when_at_tip *: NotRequired[bool]*

Whether to wait via algod /status/wait-for-block-after endpoint when at the tip of the chain;
reduces latency of subscription

#### watermark_persistence *: [WatermarkPersistence](#class-watermarkpersistence)*

Methods to retrieve and persist the current watermark so syncing is resilient and maintains
its position in the chain

### *class* SubscriberConfigFilter

Bases: [`NamedTransactionFilter`](#class-namedtransactionfilter)

A single event to subscribe to / emit.

#### mapper *: NotRequired[collections.abc.Callable[[list[[SubscribedTransaction](#class-subscribedtransaction)]], list[Any]]]*

An optional data mapper if you want the event data to take a certain shape when subscribing to
events with this filter name.


</div>
