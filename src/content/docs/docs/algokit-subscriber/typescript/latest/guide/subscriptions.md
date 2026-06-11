---
title: getSubscribedTransactions
description: The core building block for enacting a single subscription poll of the Algorand blockchain.
---

`getSubscribedTransactions` is the core building block at the centre of this library. It's a simple, but flexible mechanism that allows you to enact a single subscription "poll" of the Algorand blockchain.

This is a lower level building block, you likely don't want to use it directly, but instead use the [`AlgorandSubscriber` class](/docs/algokit-subscriber/typescript/latest/guide/subscriber/).

You can use this method to orchestrate everything from an index of all relevant data from the start of the chain through to simply subscribing to relevant transactions as they emerge at the tip of the chain. It allows you to have reliable at least once delivery even if your code has outages through the use of watermarking.

```typescript
import type { AlgodClient } from '@algorandfoundation/algokit-utils/algod-client';
import type { IndexerClient } from '@algorandfoundation/algokit-utils/indexer-client';

/**
 * Executes a single pull/poll to subscribe to transactions on the configured Algorand
 * blockchain for the given subscription context.
 * @param subscription The subscription context.
 * @param algod An Algod client.
 * @param indexer An optional indexer client, only needed when `syncBehaviour` is `catchup-with-indexer`.
 * @returns The result of this subscription pull/poll.
 */
export async function getSubscribedTransactions(
  subscription: TransactionSubscriptionParams,
  algod: AlgodClient,
  indexer?: IndexerClient,
): Promise<TransactionSubscriptionResult>;
```

## TransactionSubscriptionParams

Specifying a subscription requires passing in a `TransactionSubscriptionParams` object, which configures the behaviour:

````typescript
/** Parameters to control a single subscription pull/poll. */
export interface TransactionSubscriptionParams {
  /** The filter(s) to apply to find transactions of interest.
   * A list of filters with corresponding names.
   *
   * @example
   * ```typescript
   *  filter: [{
   *   name: 'asset-transfers',
   *   filter: {
   *     type: TransactionType.axfer,
   *     //...
   *   }
   *  }, {
   *   name: 'payments',
   *   filter: {
   *     type: TransactionType.pay,
   *     //...
   *   }
   *  }]
   * ```
   *
   */
  filters: NamedTransactionFilter[];
  /** Any ARC-28 event definitions to process from app call logs */
  arc28Events?: Arc28EventGroup[];
  /** The current round watermark that transactions have previously been synced to.
   *
   * Persist this value as you process transactions processed from this method
   * to allow for resilient and incremental syncing.
   *
   * Syncing will start from `watermark + 1`.
   *
   * Start from 0 if you want to start from the beginning of time, noting that
   * will be slow if `syncBehaviour` is `sync-oldest`.
   **/
  watermark: bigint;
  /** The maximum number of rounds to sync for each subscription pull/poll.
   *
   * Defaults to 500.
   *
   * This gives you control over how many rounds you wait for at a time,
   * your staleness tolerance when using `skip-sync-newest` or `fail`, and
   * your catchup speed when using `sync-oldest`.
   **/
  maxRoundsToSync?: number;
  /**
   * The maximum number of rounds to sync from indexer when using `syncBehaviour: 'catchup-with-indexer'.
   *
   * By default there is no limit and it will paginate through all of the rounds.
   * Sometimes this can result in an incredibly long catchup time that may break the service
   * due to execution and memory constraints, particularly for filters that result in a large number of transactions.
   *
   * Instead, this allows indexer catchup to be split into multiple polls, each with a transactionally consistent
   * boundary based on the number of rounds specified here.
   */
  maxIndexerRoundsToSync?: number;
  /** If the current tip of the configured Algorand blockchain is more than `maxRoundsToSync`
   * past `watermark` then how should that be handled:
   *  * `skip-sync-newest`: Discard old blocks/transactions and sync the newest; useful
   *    for real-time notification scenarios where you don't care about history and
   *    are happy to lose old transactions.
   *  * `sync-oldest`: Sync from the oldest rounds forward `maxRoundsToSync` rounds
   *    using algod; note: this will be slow if you are starting from 0 and requires
   *    an archival node.
   *  * `sync-oldest-start-now`: Same as `sync-oldest`, but if the `watermark` is `0`
   *    then start at the current round i.e. don't sync historical records, but once
   *    subscribing starts sync everything; note: if it falls behind it requires an
   *    archival node.
   *  * `catchup-with-indexer`: Sync to round `currentRound - maxRoundsToSync + 1`
   *    using indexer (much faster than using algod for long time periods) and then
   *    use algod from there.
   *  * `fail`: Throw an error.
   **/
  syncBehaviour:
    | 'skip-sync-newest'
    | 'sync-oldest'
    | 'sync-oldest-start-now'
    | 'catchup-with-indexer'
    | 'fail';
}
````

## TransactionFilter

The [`filters` parameter](#transactionsubscriptionparams) allows you to specify a set of filters to return a subset of transactions you are interested in. Each filter contains a `filter` property of type `TransactionFilter`, which matches the following type:

```typescript
/** Specify a filter to apply to find transactions of interest. */
export interface TransactionFilter {
  /** Filter based on the given transaction type(s). */
  type?: TransactionType | TransactionType[];
  /** Filter to transactions sent from the specified address(es). */
  sender?: string | string[];
  /** Filter to transactions being received by the specified address(es). */
  receiver?: string | string[];
  /** Filter to transactions with a note having the given prefix. */
  notePrefix?: string;
  /** Filter to transactions against the app with the given ID(s). */
  appId?: bigint | bigint[];
  /** Filter to transactions that are creating an app. */
  appCreate?: boolean;
  /** Filter to transactions that have given on complete(s). */
  appOnComplete?: ApplicationOnComplete | ApplicationOnComplete[];
  /** Filter to transactions against the asset with the given ID(s). */
  assetId?: bigint | bigint[];
  /** Filter to transactions that are creating an asset. */
  assetCreate?: boolean;
  /** Filter to transactions where the amount being transferred is greater
   * than or equal to the given minimum (microAlgos or decimal units of an ASA if type: axfer). */
  minAmount?: number | bigint;
  /** Filter to transactions where the amount being transferred is less than
   * or equal to the given maximum (microAlgos or decimal units of an ASA if type: axfer). */
  maxAmount?: number | bigint;
  /** Filter to app transactions that have the given ARC-0004 method selector(s) for
   * the given method signature as the first app argument. */
  methodSignature?: string | string[];
  /** Filter to app transactions that meet the given app arguments predicate. */
  appCallArgumentsMatch?: (appCallArguments?: readonly Uint8Array[]) => boolean;
  /** Filter to app transactions that emit the given ARC-28 events.
   * Note: the definitions for these events must be passed in to the subscription config via `arc28Events`.
   */
  arc28Events?: { groupName: string; eventName: string }[];
  /** Filter to transactions that result in balance changes that match one or more of the given set of balance changes. */
  balanceChanges?: {
    /** Match transactions with balance changes for one of the given asset ID(s), with Algo being `0` */
    assetId?: bigint | bigint[];
    /** Match transactions with balance changes for an account with one of the given role(s) */
    role?: BalanceChangeRole | BalanceChangeRole[];
    /** Match transactions with balance changes affecting one of the given account(s) */
    address?: string | string[];
    /** Match transactions with absolute (i.e. using Math.abs()) balance changes being greater than or equal to the given minimum (microAlgos or decimal units of an ASA) */
    minAbsoluteAmount?: number | bigint;
    /** Match transactions with absolute (i.e. using Math.abs()) balance changes being less than or equal to the given maximum (microAlgos or decimal units of an ASA) */
    maxAbsoluteAmount?: number | bigint;
    /** Match transactions with balance changes being greater than or equal to the given minimum (microAlgos or decimal units of an ASA) */
    minAmount?: number | bigint;
    /** Match transactions with balance changes being less than or equal to the given maximum (microAlgos or decimal units of an ASA) */
    maxAmount?: number | bigint;
  }[];
  /** Catch-all custom filter to filter for things that the rest of the filters don't provide. */
  customFilter?: (transaction: SubscribedTransaction) => boolean;
}
```

Each filter you provide within this type will apply an AND logic between the specified filters, e.g.

```typescript
filter: {
  type: TransactionType.axfer,
  sender: "ABC..."
}
```

Will return transactions that are `axfer` type AND have a sender of `"ABC..."`.

### NamedTransactionFilter

You can specify multiple filters in an array, where each filter is a `NamedTransactionFilter`, which consists of:

```typescript
/** Specify a named filter to apply to find transactions of interest. */
export interface NamedTransactionFilter {
  /** The name to give the filter. */
  name: string;
  /** The filter itself. */
  filter: TransactionFilter;
}
```

This gives you the ability to detect which filter got matched when a transaction is returned, noting that you can use the same name multiple times if there are multiple filters (aka OR logic) that comprise the same logical filter.

## Arc28EventGroup

The [`arc28Events` parameter](#transactionsubscriptionparams) allows you to define any ARC-28 events that may appear in subscribed transactions so they can either be subscribed to, or be processed and added to the resulting [subscribed transaction object](#subscribedtransaction).

## TransactionSubscriptionResult

The result of calling `getSubscribedTransactions` is a `TransactionSubscriptionResult`:

```typescript
/** The result of a single subscription pull/poll. */
export interface TransactionSubscriptionResult {
  /** The round range that was synced from/to */
  syncedRoundRange: [startRound: bigint, endRound: bigint];
  /** The current detected tip of the configured Algorand blockchain. */
  currentRound: bigint;
  /** The watermark value that was retrieved at the start of the subscription poll. */
  startingWatermark: bigint;
  /** The new watermark value to persist for the next call to
   * `getSubscribedTransactions` to continue the sync.
   * Will be equal to `syncedRoundRange[1]`. Only persist this
   * after processing (or in the same atomic transaction as)
   * subscribed transactions to keep it reliable. */
  newWatermark: bigint;
  /** Any transactions that matched the given filter within
   * the synced round range. This substantively uses the [indexer transaction
   * format](https://dev.algorand.co/reference/rest-apis/indexer#transaction)
   * to represent the data with some additional fields.
   */
  subscribedTransactions: SubscribedTransaction[];
  /** The metadata about any blocks that were retrieved from algod as part
   * of the subscription poll.
   */
  blockMetadata?: BlockMetadata[];
}

/** Metadata about a block that was retrieved from algod. */
export interface BlockMetadata {
  /** The base64 block hash. */
  hash?: string;
  /** The round of the block. */
  round: bigint;
  /** Block creation timestamp in seconds since epoch */
  timestamp: number;
  /** The genesis ID of the chain. */
  genesisId: string;
  /** The base64 genesis hash of the chain. */
  genesisHash: string;
  /** The base64 previous block hash. */
  previousBlockHash?: string;
  /** The base64 seed of the block. */
  seed: string;
  /** Fields relating to rewards */
  rewards?: BlockRewards;
  /** Count of parent transactions in this block */
  parentTransactionCount: number;
  /** Full count of transactions and inner transactions (recursively) in this block. */
  fullTransactionCount: number;
  /** Number of the next transaction that will be committed after this block.  It is 0 when no transactions have ever been committed (since TxnCounter started being supported). */
  txnCounter: bigint;
  /** TransactionsRoot authenticates the set of transactions appearing in the block. More specifically, it's the root of a merkle tree whose leaves are the block's Txids, in lexicographic order. For the empty block, it's 0. Note that the TxnRoot does not authenticate the signatures on the transactions, only the transactions themselves. Two blocks with the same transactions but in a different order and with different signatures will have the same TxnRoot.
  Pattern : "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$" */
  transactionsRoot: string;
  /** TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can be used on environments where only the SHA256 function exists. */
  transactionsRootSha256: string;
  /** Fields relating to a protocol upgrade. */
  upgradeState?: BlockUpgradeState;
  /** Tracks the status of state proofs. */
  stateProofTracking?: BlockStateProofTracking[];
  /** Fields relating to voting for a protocol upgrade. */
  upgradeVote?: BlockUpgradeVote;
  /** Participation account data that needs to be checked/acted on by the network. */
  participationUpdates?: ParticipationUpdates;
  /** Address of the proposer of this block */
  proposer?: string;
}
```

## SubscribedTransaction

The common model used to expose a transaction that is returned from a subscription is a `SubscribedTransaction`, which can be imported like so:

```typescript
import type { SubscribedTransaction } from '@algorandfoundation/algokit-subscriber/types';
```

This type is substantively based on the indexer transaction model structure. While this structure is used, the subscriber itself doesn't have to use indexer - any transactions it retrieves from algod are transformed to this common model type. Beyond the base indexer structure it has some modifications to:

- Make `id` required
- Add the `parentTransactionId` field so inner transactions have a reference to their parent
- Override the type of `innerTxns` to be `SubscribedTransaction[]` so inner transactions (recursively) get these extra fields too
- Add emitted ARC-28 events via `arc28Events`
- The list of filter(s) that caused the transaction to be matched
- The list of balanceChange(s) that occurred in the transaction

The definition of the type is:

```typescript
import type { Transaction as IndexerTransaction } from '@algorandfoundation/algokit-utils/indexer-client';

export interface SubscribedTransaction extends IndexerTransaction {
  /** Transaction ID */
  id: string;
  /** The intra-round offset of the parent of this transaction (if it's an inner transaction). */
  parentIntraRoundOffset?: number;
  /** The transaction ID of the parent of this transaction (if it's an inner transaction). */
  parentTransactionId?: string;
  /** Inner transactions produced by application execution. */
  innerTxns?: SubscribedTransaction[];
  /** Any ARC-28 events emitted from an app call. */
  arc28Events?: EmittedArc28Event[];
  /** The names of any filters that matched the given transaction to result in it being 'subscribed'. */
  filtersMatched?: string[];
  /** The balance changes in the transaction. */
  balanceChanges?: BalanceChange[];
}

/** An emitted ARC-28 event extracted from an app call log. */
export interface EmittedArc28Event extends Arc28EventToProcess {
  /** The ordered arguments extracted from the event that was emitted */
  args: ABIValue[];
  /** The named arguments extracted from the event that was emitted (where the arguments had a name defined) */
  argsByName: Record<string, ABIValue>;
}

/** An ARC-28 event to be processed */
export interface Arc28EventToProcess {
  /** The name of the ARC-28 event group the event belongs to */
  groupName: string;
  /** The name of the ARC-28 event that was triggered */
  eventName: string;
  /** The signature of the event e.g. `EventName(type1,type2)` */
  eventSignature: string;
  /** The 4-byte hex prefix for the event */
  eventPrefix: string;
  /** The ARC-28 definition of the event */
  eventDefinition: Arc28Event;
}

/** Represents a balance change effect for a transaction. */
export interface BalanceChange {
  /** The address that the balance change is for. */
  address: string;
  /** The asset ID of the balance change, or 0 for Algos. */
  assetId: bigint;
  /** The amount of the balance change in smallest divisible unit or microAlgos. */
  amount: bigint;
  /** The roles the account was playing that led to the balance change */
  roles: BalanceChangeRole[];
}

/** The role that an account was playing for a given balance change. */
export enum BalanceChangeRole {
  /** Account was sending a transaction (sending asset and/or spending fee if asset `0`) */
  Sender = 'Sender',
  /** Account was receiving a transaction */
  Receiver = 'Receiver',
  /** Account was having an asset amount closed to it */
  CloseTo = 'CloseTo',
  /** Account was creating an asset and holds the full asset supply */
  AssetCreator = 'AssetCreator',
  /** Account was destroying an asset and has removed the full asset supply from circulation. */
  AssetDestroyer = 'AssetDestroyer',
}
```

## Examples

Here are some examples of how to use this method:

### Real-time notification of transactions of interest at the tip of the chain discarding stale records

If you ran the following code on a cron schedule of (say) every 5 seconds it would notify you every time the account (in this case the Data History Museum TestNet account `ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU`) sent a transaction. If the service stopped working for a period of time and fell behind then
it would drop old records and restart notifications from the new tip.

```typescript
const algorand = AlgorandClient.testNet();

// You would need to implement getLastWatermark() to retrieve from a persistence store
const watermark = await getLastWatermark();
const subscription = await getSubscribedTransactions(
  {
    filters: [
      {
        name: 'filter1',
        filter: {
          sender: 'ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU',
        },
      },
    ],
    watermark,
    maxRoundsToSync: 100,
    syncBehaviour: 'skip-sync-newest',
  },
  algorand.client.algod,
);
if (subscription.subscribedTransactions.length > 0) {
  // You would need to implement notifyTransactions to action the transactions
  await notifyTransactions(subscription.subscribedTransactions);
}
// You would need to implement saveWatermark to persist the watermark to the persistence store
await saveWatermark(subscription.newWatermark);
```

### Real-time notification of transactions of interest at the tip of the chain with at least once delivery

If you ran the following code on a cron schedule of (say) every 5 seconds it would notify you every time the account (in this case the Data History Museum TestNet account `ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU`) sent a transaction. If the service stopped working for a period of time and fell behind then
it would pick up where it left off and catch up using algod (note: you need to connect it to a archival node).

```typescript
const algorand = AlgorandClient.testNet();
// You would need to implement getLastWatermark() to retrieve from a persistence store
const watermark = await getLastWatermark();
const subscription = await getSubscribedTransactions(
  {
    filters: [
      {
        name: 'filter1',
        filter: {
          sender: 'ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU',
        },
      },
    ],
    watermark,
    maxRoundsToSync: 100,
    syncBehaviour: 'sync-oldest-start-now',
  },
  algorand.client.algod,
);
if (subscription.subscribedTransactions.length > 0) {
  // You would need to implement notifyTransactions to action the transactions
  await notifyTransactions(subscription.subscribedTransactions);
}
// You would need to implement saveWatermark to persist the watermark to the persistence store
await saveWatermark(subscription.newWatermark);
```

### Quickly building a reliable, up-to-date cache index of all transactions of interest from the beginning of the chain

If you ran the following code on a cron schedule of (say) every 30 - 60 seconds it would create a cached index of all assets created by the account (in this case the Data History Museum TestNet account `ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU`). Given it uses indexer to catch up you can deploy this into a fresh environment with an empty database and it will catch up in seconds rather than days.

```typescript
const algorand = AlgorandClient.testNet();
// You would need to implement getLastWatermark() to retrieve from a persistence store
const watermark = await getLastWatermark();
const subscription = await getSubscribedTransactions(
  {
    filters: [
      {
        name: 'filter1',
        filter: {
          type: TransactionType.acfg,
          sender: 'ER7AMZRPD5KDVFWTUUVOADSOWM4RQKEEV2EDYRVSA757UHXOIEKGMBQIVU',
          assetCreate: true,
        },
      },
    ],
    watermark,
    maxRoundsToSync: 1000,
    syncBehaviour: 'catchup-with-indexer',
  },
  algorand.client.algod,
  algorand.client.indexer,
);

if (subscription.subscribedTransactions.length > 0) {
  // You would need to implement saveTransactions to persist the transactions
  await saveTransactions(subscription.subscribedTransactions);
}
// You would need to implement saveWatermark to persist the watermark to the persistence store
await saveWatermark(subscription.newWatermark);
```
