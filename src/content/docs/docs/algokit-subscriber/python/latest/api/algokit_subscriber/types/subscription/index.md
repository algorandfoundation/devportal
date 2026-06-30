---
title: 'algokit_subscriber.types.subscription'
---

<div class="api-ref">

## Attributes

| [`TransactionType`](#transactiontype) |     |
| ------------------------------------- | --- |
| [`SyncBehaviour`](#syncbehaviour)     |     |

## Classes

| [`BalanceChangeRole`](#class-balancechangerole)                                 | Create a collection of name/value pairs.                                     |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`BlockRewards`](#class-blockrewards)                                           |                                                                              |
| [`BlockUpgradeState`](#class-blockupgradestate)                                 |                                                                              |
| [`BlockStateProofTracking`](#class-blockstateprooftracking)                     | Tracks the status of state proofs.                                           |
| [`BlockUpgradeVote`](#class-blockupgradevote)                                   | Fields relating to voting for a protocol upgrade.                            |
| [`ParticipationUpdates`](#class-participationupdates)                           | Participation account data that needs to be checked/acted on by the network. |
| [`BlockMetadata`](#class-blockmetadata)                                         | Metadata about a block that was retrieved from algod.                        |
| [`BalanceChange`](#class-balancechange)                                         | Represents a balance change effect for a transaction.                        |
| [`SubscribedTransaction`](#class-subscribedtransaction)                         | The common model used to expose a transaction that is returned from a        |
| [`TransactionSubscriptionResult`](#class-transactionsubscriptionresult)         | The result of a single subscription pull/poll.                               |
| [`BeforePollMetadata`](#class-beforepollmetadata)                               | Metadata about an impending subscription poll.                               |
| [`BalanceChangeFilter`](#class-balancechangefilter)                             |                                                                              |
| [`TransactionFilter`](#class-transactionfilter)                                 | Specify a filter to apply to find transactions of interest.                  |
| [`NamedTransactionFilter`](#class-namedtransactionfilter)                       | Specify a named filter to apply to find transactions of interest.            |
| [`CoreTransactionSubscriptionParams`](#class-coretransactionsubscriptionparams) |                                                                              |
| [`TransactionSubscriptionParams`](#class-transactionsubscriptionparams)         |                                                                              |
| [`WatermarkPersistence`](#class-watermarkpersistence)                           |                                                                              |
| [`SubscriberConfigFilter`](#class-subscriberconfigfilter)                       | A single event to subscribe to / emit.                                       |
| [`AlgorandSubscriberConfig`](#class-algorandsubscriberconfig)                   | Configuration for the subscriber.                                            |

## Module Contents

### _class_ BalanceChangeRole

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

#### Sender _= 'Sender'_

#### Receiver _= 'Receiver'_

#### CloseTo _= 'CloseTo'_

#### AssetCreator _= 'AssetCreator'_

#### AssetDestroyer _= 'AssetDestroyer'_

### _class_ BlockRewards

#### fee*sink *: str\_

FeeSink is an address that accepts transaction fees, it can only spend to
the incentive pool.

#### rewards*calculation_round *: int\_

number of leftover MicroAlgos after the distribution of rewards-rate
MicroAlgos for every reward unit in the next round.

#### rewards*level *: int\_

How many rewards, in MicroAlgos, have been distributed to each RewardUnit
of MicroAlgos since genesis.

#### rewards*pool *: str\_

RewardsPool is an address that accepts periodic injections from the
fee-sink and continually redistributes them as rewards.

#### rewards*rate *: int\_

Number of new MicroAlgos added to the participation stake from rewards at
the next round.

#### rewards*residue *: int\_

Number of leftover MicroAlgos after the distribution of
RewardsRate/rewardUnits MicroAlgos for every reward unit in the next round.

### _class_ BlockUpgradeState

#### current*protocol *: str\_

Current protocol version

#### next*protocol *: str | None\_ _= None_

The next proposed protocol version.

#### next*protocol_approvals *: int | None\_ _= None_

Number of blocks which approved the protocol upgrade.

#### next*protocol_vote_before *: int | None\_ _= None_

Deadline round for this protocol upgrade (No votes will be consider after this round).

#### next*protocol_switch_on *: int | None\_ _= None_

Round on which the protocol upgrade will take effect.

### _class_ BlockStateProofTracking

Tracks the status of state proofs.

#### next*round *: int | None\_ _= None_

Next round for which we will accept a state proof transaction.

#### online*total_weight *: int | None\_ _= None_

The total number of microalgos held by the online accounts during the
StateProof round.

#### type _: int | None_ _= None_

State Proof Type. Note the raw object uses map with this as key.

#### voters*commitment *: str | None\_ _= None_

Root of a vector commitment containing online accounts that will help sign the proof.

### _class_ BlockUpgradeVote

Fields relating to voting for a protocol upgrade.

#### upgrade*approve *: bool | None\_ _= None_

Indicates a yes vote for the current proposal.

#### upgrade*delay *: int | None\_ _= None_

Indicates the time between acceptance and execution.

#### upgrade*propose *: str | None\_ _= None_

Indicates a proposed upgrade.

### _class_ ParticipationUpdates

Participation account data that needs to be checked/acted on by the network.

#### absent*participation_accounts *: list[str] | None\_ _= None_

A list of online accounts that need to be suspended.

#### expired*participation_accounts *: list[str] | None\_ _= None_

A list of online accounts that needs to be converted to offline
since their participation key expired.

### _class_ BlockMetadata

Metadata about a block that was retrieved from algod.

#### hash _: str | None_ _= None_

The base64 block hash.

#### round _: int_

The round of the block.

#### timestamp _: int_

Block creation timestamp in seconds since epoch

#### genesis*id *: str\_

The genesis ID of the chain.

#### genesis*hash *: str\_

The base64 genesis hash of the chain.

#### previous*block_hash *: str | None\_ _= None_

The base64 previous block hash.

#### seed _: str_

The base64 seed of the block.

#### rewards _: [BlockRewards](#class-blockrewards) | None_ _= None_

Fields relating to rewards

#### parent*transaction_count *: int\_

Count of parent transactions in this block

#### full*transaction_count *: int\_

Full count of transactions and inner transactions (recursively) in this block.

#### txn*counter *: int\_

Number of the next transaction that will be committed after this block.
It is 0 when no transactions have ever been committed (since TxnCounter
started being supported).

#### transactions*root *: str\_

Root of transaction merkle tree using SHA512_256 hash function (base64 encoded).
This commitment is computed based on the PaysetCommit type specified in
the block’s consensus protocol.

#### transactions*root_sha256 *: str\_

TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a
vector commitment instead of a merkle tree, and SHA256 hash function
instead of the default SHA512_256 (base64 encoded). This commitment can be used on
environments where only the SHA256 function exists.

#### upgrade*state *: [BlockUpgradeState](#class-blockupgradestate) | None\_ _= None_

Fields relating to a protocol upgrade.

#### state*proof_tracking *: list[[BlockStateProofTracking](#class-blockstateprooftracking)] | None\_ _= None_

Tracks the status of state proofs.

#### upgrade*vote *: [BlockUpgradeVote](#class-blockupgradevote) | None\_ _= None_

Fields relating to voting for a protocol upgrade.

#### participation*updates *: [ParticipationUpdates](#class-participationupdates) | None\_ _= None_

Participation account data that needs to be checked/acted on by the network.

#### proposer _: str | None_ _= None_

Address of the proposer of this block.

### _class_ BalanceChange

Represents a balance change effect for a transaction.

#### address _: str_

The address that the balance change is for.

#### asset*id *: int\_

The asset ID of the balance change, or 0 for Algos.

#### amount _: int_

The amount of the balance change in smallest divisible unit or microAlgos.

#### roles _: list[[BalanceChangeRole](#class-balancechangerole)]_

The roles the account was playing that led to the balance change

### _class_ SubscribedTransaction

Bases: `algokit_indexer_client.models.Transaction`

The common model used to expose a transaction that is returned from a
subscription.

Substantively, based on the Indexer TransactionResult model format with
some modifications to:

- Add the parent_transaction_id field so inner transactions have a
  reference to their parent
- Override the type of inner_txns to be SubscribedTransaction[] so
  inner transactions (recursively) get these extra fields too
- Add emitted ARC-28 events via arc28_events
- Balance changes in algo or assets

#### id\_ _: str_

#### inner*txns *: list[[SubscribedTransaction](#class-subscribedtransaction)]\_

#### parent*transaction_id *: str | None\_ _= None_

The transaction ID of the parent of this transaction (if it’s an inner
transaction).

#### parent*intra_round_offset *: int | None\_ _= None_

#### arc28*events *: list[[EmittedArc28Event](/docs/algokit-subscriber/python/latest/api/algokit_subscriber/types/arc28/#class-emittedarc28event)]\_ _= []_

Any ARC-28 events emitted from an app call.

#### filters*matched *: list[str]\_ _= []_

The names of any filters that matched the given transaction to result in
it being ‘subscribed’.

#### balance*changes *: list[[BalanceChange](#class-balancechange)]\_ _= []_

The balance changes in the transaction.

### _class_ TransactionSubscriptionResult

The result of a single subscription pull/poll.

#### synced*round_range *: tuple[int, int]\_

The round range that was synced from/to

#### current*round *: int\_

The current detected tip of the configured Algorand blockchain.

#### starting*watermark *: int\_

The watermark value that was retrieved at the start of the subscription poll.

#### new*watermark *: int\_

The new watermark value to persist for the next call to
get_subscribed_transactions to continue the sync.
Will be equal to synced_round_range[1]. Only persist this
after processing (or in the same atomic transaction as)
subscribed transactions to keep it reliable.

#### subscribed*transactions *: list[[SubscribedTransaction](#class-subscribedtransaction)]\_

Any transactions that matched the given filter within
the synced round range. This substantively uses the indexer transaction
format to represent the data with some additional fields.

#### block*metadata *: list[[BlockMetadata](#class-blockmetadata)] | None\_ _= None_

The metadata about any blocks that were retrieved from algod as part
of the subscription poll.

### _class_ BeforePollMetadata

Metadata about an impending subscription poll.

#### watermark _: int_

The current watermark of the subscriber

#### current*round *: int\_

The current round of algod

### _class_ BalanceChangeFilter

#### asset*id *: int | list[int] | None\_ _= None_

Match transactions with balance changes for one of the given asset ID(s),
with Algo being 0

#### role _: [BalanceChangeRole](#class-balancechangerole) | list[[BalanceChangeRole](#class-balancechangerole)] | None_ _= None_

Match transactions with balance changes for an account with one of the
given role(s)

#### address _: str | list[str] | None_ _= None_

Match transactions with balance changes affecting one of the given account(s)

#### min*absolute_amount *: int | float | None\_ _= None_

Match transactions with absolute (i.e. using math.abs()) balance changes
being greater than or equal to the given minimum (microAlgos or decimal units of an ASA

#### max*absolute_amount *: int | float | None\_ _= None_

Match transactions with absolute (i.e. using math.abs()) balance changes
being less than or equal to the given maximum (microAlgos or decimal units of an ASA

#### min*amount *: int | float | None\_ _= None_

Match transactions with balance changes
being greater than or equal to the given minimum (microAlgos or decimal units of an ASA)

#### max*amount *: int | float | None\_ _= None_

Match transactions with balance changes
being less than or equal to the given maximum (microAlgos or decimal units of an ASA)

### TransactionType

### _class_ TransactionFilter

Specify a filter to apply to find transactions of interest.

#### type _: TransactionType | list[TransactionType] | None_ _= None_

Filter based on the given transaction type(s).

#### sender _: str | list[str] | None_ _= None_

Filter to transactions sent from the specified address(es).

#### receiver _: str | list[str] | None_ _= None_

Filter to transactions being received by the specified address(es).

#### note*prefix *: str | bytes | None\_ _= None_

Filter to transactions with a note having the given prefix.

#### app*id *: int | list[int] | None\_ _= None_

Filter to transactions against the app with the given ID(s).

#### app*create *: bool | None\_ _= None_

Filter to transactions that are creating an app.

#### app*on_complete *: str | list[str] | None\_ _= None_

Filter to transactions that have given on complete(s).

#### asset*id *: int | list[int] | None\_ _= None_

Filter to transactions against the asset with the given ID(s).

#### asset*create *: bool | None\_ _= None_

Filter to transactions that are creating an asset.

#### min*amount *: int | None\_ _= None_

Filter to transactions where the amount being transferred is greater
than or equal to the given minimum (microAlgos or decimal units of an ASA if type: axfer).

#### max*amount *: int | None\_ _= None_

Filter to transactions where the amount being transferred is less than
or equal to the given maximum (microAlgos or decimal units of an ASA if type: axfer).

#### method*signature *: str | list[str] | None\_ _= None_

Filter to app transactions that have the given ARC-0004 method selector(s) for
the given method signature as the first app argument.

#### app*call_arguments_match *: Callable[[list[bytes] | None], bool] | None\_ _= None_

Filter to app transactions that meet the given app arguments predicate.

#### arc28*events *: list[[Arc28EventFilter](/docs/algokit-subscriber/python/latest/api/algokit_subscriber/types/arc28/#class-arc28eventfilter)] | None\_ _= None_

Filter to app transactions that emit the given ARC-28 events.
Note: the definitions for these events must be passed in to the
subscription config via arc28_events.

#### balance*changes *: list[[BalanceChangeFilter](#class-balancechangefilter)] | None\_ _= None_

Filter to transactions that result in balance changes that match one or
more of the given set of balance changes.

#### custom*filter *: Callable[[algokit_indexer_client.models.Transaction], bool] | None\_ _= None_

Catch-all custom filter to filter for things that the rest of the filters don’t provide.

### SyncBehaviour

### _class_ NamedTransactionFilter

Specify a named filter to apply to find transactions of interest.

#### name _: str_

The name to give the filter.

#### filter _: [TransactionFilter](#class-transactionfilter)_

The filter itself.

### _class_ CoreTransactionSubscriptionParams

#### filters _: Sequence[[NamedTransactionFilter](#class-namedtransactionfilter)]_

The filter(s) to apply to find transactions of interest.

#### arc28*events *: list[[Arc28EventGroup](/docs/algokit-subscriber/python/latest/api/algokit_subscriber/types/arc28/#class-arc28eventgroup)] | None\_ _= None_

Any ARC-28 event definitions to process from app call logs.

#### max*rounds_to_sync *: int\_ _= 500_

The maximum number of rounds to sync from algod for each subscription pull/poll.
Defaults to 500.

#### max*indexer_rounds_to_sync *: int | None\_ _= None_

The maximum number of rounds to sync from indexer when using
sync_behaviour: ‘catchup-with-indexer’.

#### sync*behaviour *: SyncBehaviour\_

If the current tip of the configured Algorand blockchain is more than
max_rounds_to_sync past watermark then how should that be handled.

fail: Immediately fail
skip-sync-newest: Skip catchup and start syncing from the latest block

> regardless of the watermark.

sync-oldest: Start syncing from the watermark
sync-oldest-start-now: If the watermark is 0, start syncing from round 0.

> Otherwise skip to the latest block.

catchup-with-indexer: Use indexer to get missing transactions that match
: the filters starting from the watermark. Filters will be used in the
indexer request to reduce the total amount of requests needed
(relative to getting every block)

### _class_ TransactionSubscriptionParams

Bases: [`CoreTransactionSubscriptionParams`](#class-coretransactionsubscriptionparams)

#### watermark _: int_

The current round watermark that transactions have previously been synced to.

#### current*round *: int | None\_ _= None_

The current tip of the configured Algorand blockchain.
If not provided, it will be resolved on demand.

### _class_ WatermarkPersistence

#### get _: Callable[[], int | None]_

Method to retrieve the current watermark

#### set _: Callable[[int], None]_

Method to persist the new watermark

### _class_ SubscriberConfigFilter

Bases: [`NamedTransactionFilter`](#class-namedtransactionfilter)

A single event to subscribe to / emit.

#### mapper _: Callable[[list[[SubscribedTransaction](#class-subscribedtransaction)]], list[Any]] | None_ _= None_

An optional data mapper if you want the event data to take a certain shape
when subscribing to events with this filter name.

### _class_ AlgorandSubscriberConfig

Bases: [`CoreTransactionSubscriptionParams`](#class-coretransactionsubscriptionparams)

Configuration for the subscriber.

#### filters _: Sequence[[SubscriberConfigFilter](#class-subscriberconfigfilter)]_

The set of filters to subscribe to / emit events for, along with optional data mappers.

#### watermark*persistence *: [WatermarkPersistence](#class-watermarkpersistence)\_

Methods to retrieve and persist the current watermark so syncing is resilient and maintains
its position in the chain

#### frequency*in_seconds *: float | None\_ _= None_

The frequency to poll for new blocks in seconds; defaults to 1s

#### wait*for_block_when_at_tip *: bool | None\_ _= None_

Whether to wait via algod /status/wait-for-block-after endpoint when at
the tip of the chain; reduces latency of subscription

</div>
