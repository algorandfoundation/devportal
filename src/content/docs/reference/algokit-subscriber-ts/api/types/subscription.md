---
title: types/subscription
---

[**@algorandfoundation/algokit-subscriber**](../README.md)

---

[@algorandfoundation/algokit-subscriber](../modules.md) / types/subscription

# types/subscription

## Enumerations

### BalanceChangeRole

Defined in: [src/types/subscription.ts:212](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L212)

The role that an account was playing for a given balance change.

#### Enumeration Members

##### AssetCreator

> **AssetCreator**: `"AssetCreator"`

Defined in: [src/types/subscription.ts:220](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L220)

Account was creating an asset and holds the full asset supply

##### AssetDestroyer

> **AssetDestroyer**: `"AssetDestroyer"`

Defined in: [src/types/subscription.ts:224](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L224)

Account was destroying an asset and has removed the full asset supply from circulation.
A balance change with this role will always have a 0 amount and use the asset manager address.

##### CloseTo

> **CloseTo**: `"CloseTo"`

Defined in: [src/types/subscription.ts:218](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L218)

Account was having an asset amount closed to it

##### Receiver

> **Receiver**: `"Receiver"`

Defined in: [src/types/subscription.ts:216](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L216)

Account was receiving a transaction

##### Sender

> **Sender**: `"Sender"`

Defined in: [src/types/subscription.ts:214](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L214)

Account was sending a transaction (sending asset and/or spending fee if asset `0`)

## Classes

### SubscribedTransaction

Defined in: [src/types/subscription.ts:163](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L163)

The common model used to expose a transaction that is returned from a subscription.

Substantively, based on the Indexer [`TransactionResult` model](https://dev.algorand.co/reference/rest-apis/indexer#transaction) format with some modifications to:

- Add the `parentTransactionId` field so inner transactions have a reference to their parent
- Override the type of `inner-txns` to be `SubscribedTransaction[]` so inner transactions (recursively) get these extra fields too
- Add emitted ARC-28 events via `arc28Events`
- Balance changes in algo or assets

#### Extends

- `Transaction`

#### Constructors

##### Constructor

> **new SubscribedTransaction**(`__namedParameters`): [`SubscribedTransaction`](#subscribedtransaction)

Defined in: [src/types/subscription.ts:178](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L178)

###### Parameters

###### \_\_namedParameters

`Omit`\<[`SubscribedTransaction`](#subscribedtransaction), `"getEncodingSchema"` \| `"toEncodingData"`\>

###### Returns

[`SubscribedTransaction`](#subscribedtransaction)

###### Overrides

`algosdk.indexerModels.Transaction.constructor`

#### Properties

##### applicationTransaction?

> `optional` **applicationTransaction**: `TransactionApplication`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2176

Fields for application transactions.
Definition:
data/transactions/application.go : ApplicationCallTxnFields

###### Inherited from

`algosdk.indexerModels.Transaction.applicationTransaction`

##### arc28Events?

> `optional` **arc28Events**: [`EmittedArc28Event`](arc-28.md#emittedarc28event)[]

Defined in: [src/types/subscription.ts:172](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L172)

Any ARC-28 events emitted from an app call.

##### assetConfigTransaction?

> `optional` **assetConfigTransaction**: `TransactionAssetConfig`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2184

Fields for asset allocation, re-configuration, and destruction.
A zero value for asset-id indicates asset creation.
A zero value for the params indicates asset destruction.
Definition:
data/transactions/asset.go : AssetConfigTxnFields

###### Inherited from

`algosdk.indexerModels.Transaction.assetConfigTransaction`

##### assetFreezeTransaction?

> `optional` **assetFreezeTransaction**: `TransactionAssetFreeze`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2190

Fields for an asset freeze transaction.
Definition:
data/transactions/asset.go : AssetFreezeTxnFields

###### Inherited from

`algosdk.indexerModels.Transaction.assetFreezeTransaction`

##### assetTransferTransaction?

> `optional` **assetTransferTransaction**: `TransactionAssetTransfer`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2196

Fields for an asset transfer transaction.
Definition:
data/transactions/asset.go : AssetTransferTxnFields

###### Inherited from

`algosdk.indexerModels.Transaction.assetTransferTransaction`

##### authAddr?

> `optional` **authAddr**: `Address`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2202

(sgnr) this is included with signed transactions when the signing address does
not equal the sender. The backend can use this to ensure that auth addr is equal
to the accounts auth addr.

###### Inherited from

`algosdk.indexerModels.Transaction.authAddr`

##### balanceChanges?

> `optional` **balanceChanges**: [`BalanceChange`](#balancechange)[]

Defined in: [src/types/subscription.ts:176](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L176)

The balance changes in the transaction.

##### closeRewards?

> `optional` **closeRewards**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2206

(rc) rewards applied to close-remainder-to account.

###### Inherited from

`algosdk.indexerModels.Transaction.closeRewards`

##### closingAmount?

> `optional` **closingAmount**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2210

(ca) closing amount for transaction.

###### Inherited from

`algosdk.indexerModels.Transaction.closingAmount`

##### confirmedRound?

> `optional` **confirmedRound**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2214

Round when the transaction was confirmed.

###### Inherited from

`algosdk.indexerModels.Transaction.confirmedRound`

##### createdApplicationIndex?

> `optional` **createdApplicationIndex**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2219

Specifies an application index (ID) if an application was created with this
transaction.

###### Inherited from

`algosdk.indexerModels.Transaction.createdApplicationIndex`

##### createdAssetIndex?

> `optional` **createdAssetIndex**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2223

Specifies an asset index (ID) if an asset was created with this transaction.

###### Inherited from

`algosdk.indexerModels.Transaction.createdAssetIndex`

##### fee

> **fee**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2158

(fee) Transaction fee.

###### Inherited from

`algosdk.indexerModels.Transaction.fee`

##### filtersMatched?

> `optional` **filtersMatched**: `string`[]

Defined in: [src/types/subscription.ts:174](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L174)

The names of any filters that matched the given transaction to result in it being 'subscribed'.

##### firstValid

> **firstValid**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2162

(fv) First valid round for this transaction.

###### Inherited from

`algosdk.indexerModels.Transaction.firstValid`

##### genesisHash?

> `optional` **genesisHash**: `Uint8Array`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2227

(gh) Hash of genesis block.

###### Inherited from

`algosdk.indexerModels.Transaction.genesisHash`

##### genesisId?

> `optional` **genesisId**: `string`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2231

(gen) genesis block ID.

###### Inherited from

`algosdk.indexerModels.Transaction.genesisId`

##### globalStateDelta?

> `optional` **globalStateDelta**: `EvalDeltaKeyValue`[]

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2236

(gd) Global state key/value changes for the application being executed by this
transaction.

###### Inherited from

`algosdk.indexerModels.Transaction.globalStateDelta`

##### group?

> `optional` **group**: `Uint8Array`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2242

(grp) Base64 encoded byte array of a sha512/256 digest. When present indicates
that this transaction is part of a transaction group and the value is the
sha512/256 hash of the transactions in that group.

###### Inherited from

`algosdk.indexerModels.Transaction.group`

##### heartbeatTransaction?

> `optional` **heartbeatTransaction**: `TransactionHeartbeat`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2248

Fields for a heartbeat transaction.
Definition:
data/transactions/heartbeat.go : HeartbeatTxnFields

###### Inherited from

`algosdk.indexerModels.Transaction.heartbeatTransaction`

##### id

> **id**: `string`

Defined in: [src/types/subscription.ts:164](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L164)

Transaction ID

###### Overrides

`algosdk.indexerModels.Transaction.id`

##### innerTxns?

> `optional` **innerTxns**: [`SubscribedTransaction`](#subscribedtransaction)[]

Defined in: [src/types/subscription.ts:170](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L170)

Inner transactions produced by application execution.

###### Overrides

`algosdk.indexerModels.Transaction.innerTxns`

##### intraRoundOffset?

> `optional` **intraRoundOffset**: `number`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2260

Offset into the round where this transaction was confirmed.

###### Inherited from

`algosdk.indexerModels.Transaction.intraRoundOffset`

##### keyregTransaction?

> `optional` **keyregTransaction**: `TransactionKeyreg`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2266

Fields for a keyreg transaction.
Definition:
data/transactions/keyreg.go : KeyregTxnFields

###### Inherited from

`algosdk.indexerModels.Transaction.keyregTransaction`

##### lastValid

> **lastValid**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2166

(lv) Last valid round for this transaction.

###### Inherited from

`algosdk.indexerModels.Transaction.lastValid`

##### lease?

> `optional` **lease**: `Uint8Array`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2274

(lx) Base64 encoded 32-byte array. Lease enforces mutual exclusion of
transactions. If this field is nonzero, then once the transaction is confirmed,
it acquires the lease identified by the (Sender, Lease) pair of the transaction
until the LastValid round passes. While this transaction possesses the lease, no
other transaction specifying this lease can be confirmed.

###### Inherited from

`algosdk.indexerModels.Transaction.lease`

##### localStateDelta?

> `optional` **localStateDelta**: `AccountStateDelta`[]

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2279

(ld) Local state key/value changes for the application being executed by this
transaction.

###### Inherited from

`algosdk.indexerModels.Transaction.localStateDelta`

##### logs?

> `optional` **logs**: `Uint8Array`[]

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2283

(lg) Logs for the application being executed by this transaction.

###### Inherited from

`algosdk.indexerModels.Transaction.logs`

##### note?

> `optional` **note**: `Uint8Array`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2287

(note) Free form data.

###### Inherited from

`algosdk.indexerModels.Transaction.note`

##### parentIntraRoundOffset?

> `optional` **parentIntraRoundOffset**: `number`

Defined in: [src/types/subscription.ts:166](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L166)

The intra-round offset of the parent of this transaction (if it's an inner transaction).

##### parentTransactionId?

> `optional` **parentTransactionId**: `string`

Defined in: [src/types/subscription.ts:168](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L168)

The transaction ID of the parent of this transaction (if it's an inner transaction).

##### paymentTransaction?

> `optional` **paymentTransaction**: `TransactionPayment`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2293

Fields for a payment transaction.
Definition:
data/transactions/payment.go : PaymentTxnFields

###### Inherited from

`algosdk.indexerModels.Transaction.paymentTransaction`

##### receiverRewards?

> `optional` **receiverRewards**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2297

(rr) rewards applied to receiver account.

###### Inherited from

`algosdk.indexerModels.Transaction.receiverRewards`

##### rekeyTo?

> `optional` **rekeyTo**: `Address`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2303

(rekey) when included in a valid transaction, the accounts auth addr will be
updated with this value and future signatures must be signed with the key
represented by this address.

###### Inherited from

`algosdk.indexerModels.Transaction.rekeyTo`

##### roundTime?

> `optional` **roundTime**: `number`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2307

Time when the block this transaction is in was confirmed.

###### Inherited from

`algosdk.indexerModels.Transaction.roundTime`

##### sender

> **sender**: `string`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2170

(snd) Sender's address.

###### Inherited from

`algosdk.indexerModels.Transaction.sender`

##### senderRewards?

> `optional` **senderRewards**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2311

(rs) rewards applied to sender account.

###### Inherited from

`algosdk.indexerModels.Transaction.senderRewards`

##### signature?

> `optional` **signature**: `TransactionSignature`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2316

Validation signature associated with some data. Only one of the signatures
should be provided.

###### Inherited from

`algosdk.indexerModels.Transaction.signature`

##### stateProofTransaction?

> `optional` **stateProofTransaction**: `TransactionStateProof`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2322

Fields for a state proof transaction.
Definition:
data/transactions/stateproof.go : StateProofTxnFields

###### Inherited from

`algosdk.indexerModels.Transaction.stateProofTransaction`

##### txType?

> `optional` **txType**: `string`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2336

(type) Indicates what type of transaction this is. Different types have
different fields.
Valid types, and where their fields are stored:

- (pay) payment-transaction
- (keyreg) keyreg-transaction
- (acfg) asset-config-transaction
- (axfer) asset-transfer-transaction
- (afrz) asset-freeze-transaction
- (appl) application-transaction
- (stpf) state-proof-transaction
- (hb) heartbeat-transaction

###### Inherited from

`algosdk.indexerModels.Transaction.txType`

#### Accessors

##### encodingSchema

###### Get Signature

> **get** `static` **encodingSchema**(): `Schema`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2154

###### Returns

`Schema`

###### Inherited from

`algosdk.indexerModels.Transaction.encodingSchema`

#### Methods

##### getEncodingSchema()

> **getEncodingSchema**(): `Schema`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2454

Get the encoding Schema for this object, used to prepare the encoding data for msgpack and JSON.

###### Returns

`Schema`

###### Inherited from

`algosdk.indexerModels.Transaction.getEncodingSchema`

##### toEncodingData()

> **toEncodingData**(): `Map`\<`string`, `unknown`\>

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2455

Extract the encoding data for this object. This data, after being prepared by the encoding
Schema, can be encoded to msgpack or JSON.

###### Returns

`Map`\<`string`, `unknown`\>

###### Inherited from

`algosdk.indexerModels.Transaction.toEncodingData`

##### fromEncodingData()

> `static` **fromEncodingData**(`data`): `Transaction`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2456

###### Parameters

###### data

`unknown`

###### Returns

`Transaction`

###### Inherited from

`algosdk.indexerModels.Transaction.fromEncodingData`

## Interfaces

### AlgorandSubscriberConfig

Defined in: [src/types/subscription.ts:386](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L386)

Configuration for an `AlgorandSubscriber`.

#### Extends

- [`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams)

#### Properties

##### arc28Events?

> `optional` **arc28Events**: [`Arc28EventGroup`](arc-28.md#arc28eventgroup)[]

Defined in: [src/types/subscription.ts:260](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L260)

Any ARC-28 event definitions to process from app call logs

###### Inherited from

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`arc28Events`](#arc28events-2)

##### filters

> **filters**: [`SubscriberConfigFilter`](#subscriberconfigfilter)\<`unknown`\>[]

Defined in: [src/types/subscription.ts:388](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L388)

The set of filters to subscribe to / emit events for, along with optional data mappers.

###### Overrides

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`filters`](#filters-1)

##### frequencyInSeconds?

> `optional` **frequencyInSeconds**: `number`

Defined in: [src/types/subscription.ts:390](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L390)

The frequency to poll for new blocks in seconds; defaults to 1s

##### maxIndexerRoundsToSync?

> `optional` **maxIndexerRoundsToSync**: `number`

Defined in: [src/types/subscription.ts:280](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L280)

The maximum number of rounds to sync from indexer when using `syncBehaviour: 'catchup-with-indexer'.

By default there is no limit and it will paginate through all of the rounds.
Sometimes this can result in an incredibly long catchup time that may break the service
due to execution and memory constraints, particularly for filters that result in a large number of transactions.

Instead, this allows indexer catchup to be split into multiple polls, each with a transactionally consistent
boundary based on the number of rounds specified here.

###### Inherited from

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`maxIndexerRoundsToSync`](#maxindexerroundstosync-1)

##### maxRoundsToSync?

> `optional` **maxRoundsToSync**: `number`

Defined in: [src/types/subscription.ts:269](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L269)

The maximum number of rounds to sync from algod for each subscription pull/poll.

Defaults to 500.

This gives you control over how many rounds you wait for at a time,
your staleness tolerance when using `skip-sync-newest` or `fail`, and
your catchup speed when using `sync-oldest`.

###### Inherited from

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`maxRoundsToSync`](#maxroundstosync-1)

##### syncBehaviour

> **syncBehaviour**: `"skip-sync-newest"` \| `"sync-oldest"` \| `"sync-oldest-start-now"` \| `"catchup-with-indexer"` \| `"fail"`

Defined in: [src/types/subscription.ts:298](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L298)

If the current tip of the configured Algorand blockchain is more than `maxRoundsToSync`
past `watermark` then how should that be handled:

- `skip-sync-newest`: Discard old blocks/transactions and sync the newest; useful
  for real-time notification scenarios where you don't care about history and
  are happy to lose old transactions.
- `sync-oldest`: Sync from the oldest rounds forward `maxRoundsToSync` rounds
  using algod; note: this will be slow if you are starting from 0 and requires
  an archival node.
- `sync-oldest-start-now`: Same as `sync-oldest`, but if the `watermark` is `0`
  then start at the current round i.e. don't sync historical records, but once
  subscribing starts sync everything; note: if it falls behind it requires an
  archival node.
- `catchup-with-indexer`: Sync to round `currentRound - maxRoundsToSync + 1`
  using indexer (much faster than using algod for long time periods) and then
  use algod from there.
- `fail`: Throw an error.

###### Inherited from

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`syncBehaviour`](#syncbehaviour-1)

##### waitForBlockWhenAtTip?

> `optional` **waitForBlockWhenAtTip**: `boolean`

Defined in: [src/types/subscription.ts:392](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L392)

Whether to wait via algod `/status/wait-for-block-after` endpoint when at the tip of the chain; reduces latency of subscription

##### watermarkPersistence

> **watermarkPersistence**: `object`

Defined in: [src/types/subscription.ts:395](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L395)

Methods to retrieve and persist the current watermark so syncing is resilient and maintains
its position in the chain

###### get()

> **get**: () => `Promise`\<`bigint`\>

Returns the current watermark that syncing has previously been processed to

###### Returns

`Promise`\<`bigint`\>

###### set()

> **set**: (`newWatermark`) => `Promise`\<`void`\>

Persist the new watermark that has been processed

###### Parameters

###### newWatermark

`bigint`

###### Returns

`Promise`\<`void`\>

---

### BalanceChange

Defined in: [src/types/subscription.ts:200](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L200)

Represents a balance change effect for a transaction.

#### Properties

##### address

> **address**: `string`

Defined in: [src/types/subscription.ts:202](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L202)

The address that the balance change is for.

##### amount

> **amount**: `bigint`

Defined in: [src/types/subscription.ts:206](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L206)

The amount of the balance change in smallest divisible unit or microAlgos.

##### assetId

> **assetId**: `bigint`

Defined in: [src/types/subscription.ts:204](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L204)

The asset ID of the balance change, or 0 for Algos.

##### roles

> **roles**: [`BalanceChangeRole`](#balancechangerole)[]

Defined in: [src/types/subscription.ts:208](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L208)

The roles the account was playing that led to the balance change

---

### BeforePollMetadata

Defined in: [src/types/subscription.ts:228](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L228)

Metadata about an impending subscription poll.

#### Properties

##### currentRound

> **currentRound**: `bigint`

Defined in: [src/types/subscription.ts:232](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L232)

The current round of algod

##### watermark

> **watermark**: `bigint`

Defined in: [src/types/subscription.ts:230](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L230)

The current watermark of the subscriber

---

### BlockMetadata

Defined in: [src/types/subscription.ts:33](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L33)

Metadata about a block that was retrieved from algod.

#### Properties

##### fullTransactionCount

> **fullTransactionCount**: `number`

Defined in: [src/types/subscription.ts:53](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L53)

Full count of transactions and inner transactions (recursively) in this block.

##### genesisHash

> **genesisHash**: `string`

Defined in: [src/types/subscription.ts:43](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L43)

The base64 genesis hash of the chain.

##### genesisId

> **genesisId**: `string`

Defined in: [src/types/subscription.ts:41](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L41)

The genesis ID of the chain.

##### hash?

> `optional` **hash**: `string`

Defined in: [src/types/subscription.ts:35](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L35)

The base64 block hash.

##### parentTransactionCount

> **parentTransactionCount**: `number`

Defined in: [src/types/subscription.ts:51](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L51)

Count of parent transactions in this block

##### participationUpdates?

> `optional` **participationUpdates**: [`ParticipationUpdates`](#participationupdates-1)

Defined in: [src/types/subscription.ts:68](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L68)

Participation account data that needs to be checked/acted on by the network.

##### previousBlockHash?

> `optional` **previousBlockHash**: `string`

Defined in: [src/types/subscription.ts:45](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L45)

The base64 previous block hash.

##### proposer?

> `optional` **proposer**: `string`

Defined in: [src/types/subscription.ts:70](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L70)

Address of the proposer of this block

##### rewards?

> `optional` **rewards**: [`BlockRewards`](#blockrewards)

Defined in: [src/types/subscription.ts:49](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L49)

Fields relating to rewards

##### round

> **round**: `bigint`

Defined in: [src/types/subscription.ts:37](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L37)

The round of the block.

##### seed

> **seed**: `string`

Defined in: [src/types/subscription.ts:47](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L47)

The base64 seed of the block.

##### stateProofTracking?

> `optional` **stateProofTracking**: [`BlockStateProofTracking`](#blockstateprooftracking)[]

Defined in: [src/types/subscription.ts:64](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L64)

Tracks the status of state proofs.

##### timestamp

> **timestamp**: `number`

Defined in: [src/types/subscription.ts:39](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L39)

Block creation timestamp in seconds since epoch

##### transactionsRoot

> **transactionsRoot**: `string`

Defined in: [src/types/subscription.ts:58](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L58)

TransactionsRoot authenticates the set of transactions appearing in the block. More specifically, it's the root of a merkle tree whose leaves are the block's Txids, in lexicographic order. For the empty block, it's 0. Note that the TxnRoot does not authenticate the signatures on the transactions, only the transactions themselves. Two blocks with the same transactions but in a different order and with different signatures will have the same TxnRoot.
Pattern : "^(?:[A-Za-z0-9+/]{4})\*(?:[A-Za-z0-9+/]{2}==\|[A-Za-z0-9+/]{3}=)?$"

##### transactionsRootSha256

> **transactionsRootSha256**: `string`

Defined in: [src/types/subscription.ts:60](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L60)

TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can be used on environments where only the SHA256 function exists.

##### txnCounter

> **txnCounter**: `bigint`

Defined in: [src/types/subscription.ts:55](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L55)

Number of the next transaction that will be committed after this block. It is 0 when no transactions have ever been committed (since TxnCounter started being supported).

##### upgradeState?

> `optional` **upgradeState**: [`BlockUpgradeState`](#blockupgradestate)

Defined in: [src/types/subscription.ts:62](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L62)

Fields relating to a protocol upgrade.

##### upgradeVote?

> `optional` **upgradeVote**: [`BlockUpgradeVote`](#blockupgradevote)

Defined in: [src/types/subscription.ts:66](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L66)

Fields relating to voting for a protocol upgrade.

---

### BlockRewards

Defined in: [src/types/subscription.ts:73](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L73)

#### Properties

##### feeSink

> **feeSink**: `string`

Defined in: [src/types/subscription.ts:75](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L75)

FeeSink is an address that accepts transaction fees, it can only spend to the incentive pool.

##### rewardsCalculationRound

> **rewardsCalculationRound**: `bigint`

Defined in: [src/types/subscription.ts:77](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L77)

The number of leftover MicroAlgos after the distribution of rewards-rate MicroAlgos for every reward unit in the next round.

##### rewardsLevel

> **rewardsLevel**: `bigint`

Defined in: [src/types/subscription.ts:79](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L79)

How many rewards, in MicroAlgos, have been distributed to each RewardUnit of MicroAlgos since genesis.

##### rewardsPool

> **rewardsPool**: `string`

Defined in: [src/types/subscription.ts:81](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L81)

RewardsPool is an address that accepts periodic injections from the fee-sink and continually redistributes them as rewards.

##### rewardsRate

> **rewardsRate**: `bigint`

Defined in: [src/types/subscription.ts:83](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L83)

Number of new MicroAlgos added to the participation stake from rewards at the next round.

##### rewardsResidue

> **rewardsResidue**: `bigint`

Defined in: [src/types/subscription.ts:85](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L85)

Number of leftover MicroAlgos after the distribution of RewardsRate/rewardUnits MicroAlgos for every reward unit in the next round.

---

### BlockStateProofTracking

Defined in: [src/types/subscription.ts:101](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L101)

#### Properties

##### nextRound?

> `optional` **nextRound**: `bigint`

Defined in: [src/types/subscription.ts:105](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L105)

(n) Next round for which we will accept a state proof transaction.

##### onlineTotalWeight?

> `optional` **onlineTotalWeight**: `bigint`

Defined in: [src/types/subscription.ts:111](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L111)

(t) The total number of microalgos held by the online accounts during the
StateProof round.

##### type?

> `optional` **type**: `number`

Defined in: [src/types/subscription.ts:116](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L116)

State Proof Type. Note the raw object uses map with this as key.

##### votersCommitment?

> `optional` **votersCommitment**: `string`

Defined in: [src/types/subscription.ts:122](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L122)

(v) Root of a vector commitment containing online accounts that will help sign
the proof.

---

### BlockUpgradeState

Defined in: [src/types/subscription.ts:88](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L88)

#### Properties

##### currentProtocol

> **currentProtocol**: `string`

Defined in: [src/types/subscription.ts:90](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L90)

Current protocol version

##### nextProtocol?

> `optional` **nextProtocol**: `string`

Defined in: [src/types/subscription.ts:92](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L92)

The next proposed protocol version.

##### nextProtocolApprovals?

> `optional` **nextProtocolApprovals**: `bigint`

Defined in: [src/types/subscription.ts:94](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L94)

Number of blocks which approved the protocol upgrade.

##### nextProtocolSwitchOn?

> `optional` **nextProtocolSwitchOn**: `bigint`

Defined in: [src/types/subscription.ts:98](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L98)

Round on which the protocol upgrade will take effect.

##### nextProtocolVoteBefore?

> `optional` **nextProtocolVoteBefore**: `bigint`

Defined in: [src/types/subscription.ts:96](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L96)

Deadline round for this protocol upgrade (No votes will be consider after this round).

---

### BlockUpgradeVote

Defined in: [src/types/subscription.ts:125](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L125)

#### Properties

##### upgradeApprove?

> `optional` **upgradeApprove**: `boolean`

Defined in: [src/types/subscription.ts:129](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L129)

(upgradeyes) Indicates a yes vote for the current proposal.

##### upgradeDelay?

> `optional` **upgradeDelay**: `bigint`

Defined in: [src/types/subscription.ts:134](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L134)

(upgradedelay) Indicates the time between acceptance and execution.

##### upgradePropose?

> `optional` **upgradePropose**: `string`

Defined in: [src/types/subscription.ts:139](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L139)

(upgradeprop) Indicates a proposed upgrade.

---

### CoreTransactionSubscriptionParams

Defined in: [src/types/subscription.ts:236](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L236)

Common parameters to control a single subscription pull/poll for both `AlgorandSubscriber` and `getSubscribedTransactions`.

#### Extended by

- [`TransactionSubscriptionParams`](#transactionsubscriptionparams)
- [`AlgorandSubscriberConfig`](#algorandsubscriberconfig)

#### Properties

##### arc28Events?

> `optional` **arc28Events**: [`Arc28EventGroup`](arc-28.md#arc28eventgroup)[]

Defined in: [src/types/subscription.ts:260](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L260)

Any ARC-28 event definitions to process from app call logs

##### filters

> **filters**: [`NamedTransactionFilter`](#namedtransactionfilter)[]

Defined in: [src/types/subscription.ts:258](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L258)

The filter(s) to apply to find transactions of interest.
A list of filters with corresponding names.

###### Example

```typescript
filter: [
  {
    name: 'asset-transfers',
    filter: {
      type: TransactionType.axfer,
      //...
    },
  },
  {
    name: 'payments',
    filter: {
      type: TransactionType.pay,
      //...
    },
  },
];
```

##### maxIndexerRoundsToSync?

> `optional` **maxIndexerRoundsToSync**: `number`

Defined in: [src/types/subscription.ts:280](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L280)

The maximum number of rounds to sync from indexer when using `syncBehaviour: 'catchup-with-indexer'.

By default there is no limit and it will paginate through all of the rounds.
Sometimes this can result in an incredibly long catchup time that may break the service
due to execution and memory constraints, particularly for filters that result in a large number of transactions.

Instead, this allows indexer catchup to be split into multiple polls, each with a transactionally consistent
boundary based on the number of rounds specified here.

##### maxRoundsToSync?

> `optional` **maxRoundsToSync**: `number`

Defined in: [src/types/subscription.ts:269](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L269)

The maximum number of rounds to sync from algod for each subscription pull/poll.

Defaults to 500.

This gives you control over how many rounds you wait for at a time,
your staleness tolerance when using `skip-sync-newest` or `fail`, and
your catchup speed when using `sync-oldest`.

##### syncBehaviour

> **syncBehaviour**: `"skip-sync-newest"` \| `"sync-oldest"` \| `"sync-oldest-start-now"` \| `"catchup-with-indexer"` \| `"fail"`

Defined in: [src/types/subscription.ts:298](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L298)

If the current tip of the configured Algorand blockchain is more than `maxRoundsToSync`
past `watermark` then how should that be handled:

- `skip-sync-newest`: Discard old blocks/transactions and sync the newest; useful
  for real-time notification scenarios where you don't care about history and
  are happy to lose old transactions.
- `sync-oldest`: Sync from the oldest rounds forward `maxRoundsToSync` rounds
  using algod; note: this will be slow if you are starting from 0 and requires
  an archival node.
- `sync-oldest-start-now`: Same as `sync-oldest`, but if the `watermark` is `0`
  then start at the current round i.e. don't sync historical records, but once
  subscribing starts sync everything; note: if it falls behind it requires an
  archival node.
- `catchup-with-indexer`: Sync to round `currentRound - maxRoundsToSync + 1`
  using indexer (much faster than using algod for long time periods) and then
  use algod from there.
- `fail`: Throw an error.

---

### NamedTransactionFilter

Defined in: [src/types/subscription.ts:302](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L302)

Specify a named filter to apply to find transactions of interest.

#### Extended by

- [`SubscriberConfigFilter`](#subscriberconfigfilter)

#### Properties

##### filter

> **filter**: [`TransactionFilter`](#transactionfilter)

Defined in: [src/types/subscription.ts:306](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L306)

The filter itself.

##### name

> **name**: `string`

Defined in: [src/types/subscription.ts:304](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L304)

The name to give the filter.

---

### ParticipationUpdates

Defined in: [src/types/subscription.ts:142](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L142)

#### Properties

##### absentParticipationAccounts?

> `optional` **absentParticipationAccounts**: `string`[]

Defined in: [src/types/subscription.ts:146](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L146)

(partupabs) a list of online accounts that need to be suspended.

##### expiredParticipationAccounts?

> `optional` **expiredParticipationAccounts**: `string`[]

Defined in: [src/types/subscription.ts:152](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L152)

(partupdrmv) a list of online accounts that needs to be converted to offline
since their participation key expired.

---

### SubscriberConfigFilter

Defined in: [src/types/subscription.ts:404](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L404)

A single event to subscribe to / emit.

#### Extends

- [`NamedTransactionFilter`](#namedtransactionfilter)

#### Type Parameters

##### T

`T`

#### Properties

##### filter

> **filter**: [`TransactionFilter`](#transactionfilter)

Defined in: [src/types/subscription.ts:306](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L306)

The filter itself.

###### Inherited from

[`NamedTransactionFilter`](#namedtransactionfilter).[`filter`](#filter)

##### mapper()?

> `optional` **mapper**: (`transaction`) => `Promise`\<`T`[]\>

Defined in: [src/types/subscription.ts:411](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L411)

An optional data mapper if you want the event data to take a certain shape when subscribing to events with this filter name.

If not specified, then the event will simply receive a `SubscribedTransaction`.

Note: if you provide multiple filters with the same name then only the mapper of the first matching filter will be used

###### Parameters

###### transaction

[`SubscribedTransaction`](#subscribedtransaction)[]

###### Returns

`Promise`\<`T`[]\>

##### name

> **name**: `string`

Defined in: [src/types/subscription.ts:304](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L304)

The name to give the filter.

###### Inherited from

[`NamedTransactionFilter`](#namedtransactionfilter).[`name`](#name)

---

### TransactionFilter

Defined in: [src/types/subscription.ts:310](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L310)

Specify a filter to apply to find transactions of interest.

#### Properties

##### appCallArgumentsMatch()?

> `optional` **appCallArgumentsMatch**: (`appCallArguments?`) => `boolean`

Defined in: [src/types/subscription.ts:339](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L339)

Filter to app transactions that meet the given app arguments predicate.

###### Parameters

###### appCallArguments?

readonly `Uint8Array`[]

###### Returns

`boolean`

##### appCreate?

> `optional` **appCreate**: `boolean`

Defined in: [src/types/subscription.ts:322](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L322)

Filter to transactions that are creating an app.

##### appId?

> `optional` **appId**: `bigint` \| `bigint`[]

Defined in: [src/types/subscription.ts:320](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L320)

Filter to transactions against the app with the given ID(s).

##### appOnComplete?

> `optional` **appOnComplete**: `ApplicationOnComplete` \| `ApplicationOnComplete`[]

Defined in: [src/types/subscription.ts:324](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L324)

Filter to transactions that have given on complete(s).

##### arc28Events?

> `optional` **arc28Events**: `object`[]

Defined in: [src/types/subscription.ts:343](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L343)

Filter to app transactions that emit the given ARC-28 events.
Note: the definitions for these events must be passed in to the subscription config via `arc28Events`.

###### eventName

> **eventName**: `string`

###### groupName

> **groupName**: `string`

##### assetCreate?

> `optional` **assetCreate**: `boolean`

Defined in: [src/types/subscription.ts:328](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L328)

Filter to transactions that are creating an asset.

##### assetId?

> `optional` **assetId**: `bigint` \| `bigint`[]

Defined in: [src/types/subscription.ts:326](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L326)

Filter to transactions against the asset with the given ID(s).

##### balanceChanges?

> `optional` **balanceChanges**: `object`[]

Defined in: [src/types/subscription.ts:345](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L345)

Filter to transactions that result in balance changes that match one or more of the given set of balance changes.

###### address?

> `optional` **address**: `string` \| `string`[]

Match transactions with balance changes affecting one of the given account(s)

###### assetId?

> `optional` **assetId**: `bigint` \| `bigint`[]

Match transactions with balance changes for one of the given asset ID(s), with Algo being `0`

###### maxAbsoluteAmount?

> `optional` **maxAbsoluteAmount**: `number` \| `bigint`

Match transactions with absolute (i.e. using Math.abs()) balance changes being less than or equal to the given maximum (microAlgos or decimal units of an ASA)

###### maxAmount?

> `optional` **maxAmount**: `number` \| `bigint`

Match transactions with balance changes being less than or equal to the given maximum (microAlgos or decimal units of an ASA)

###### minAbsoluteAmount?

> `optional` **minAbsoluteAmount**: `number` \| `bigint`

Match transactions with absolute (i.e. using Math.abs()) balance changes being greater than or equal to the given minimum (microAlgos or decimal units of an ASA)

###### minAmount?

> `optional` **minAmount**: `number` \| `bigint`

Match transactions with balance changes being greater than or equal to the given minimum (microAlgos or decimal units of an ASA)

###### role?

> `optional` **role**: [`BalanceChangeRole`](#balancechangerole) \| [`BalanceChangeRole`](#balancechangerole)[]

Match transactions with balance changes for an account with one of the given role(s)

##### customFilter()?

> `optional` **customFilter**: (`transaction`) => `boolean`

Defined in: [src/types/subscription.ts:362](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L362)

Catch-all custom filter to filter for things that the rest of the filters don't provide.

###### Parameters

###### transaction

[`SubscribedTransaction`](#subscribedtransaction)

###### Returns

`boolean`

##### maxAmount?

> `optional` **maxAmount**: `number` \| `bigint`

Defined in: [src/types/subscription.ts:334](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L334)

Filter to transactions where the amount being transferred is less than
or equal to the given maximum (microAlgos or decimal units of an ASA if type: axfer).

##### methodSignature?

> `optional` **methodSignature**: `string` \| `string`[]

Defined in: [src/types/subscription.ts:337](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L337)

Filter to app transactions that have the given ARC-0004 method selector(s) for
the given method signature as the first app argument.

##### minAmount?

> `optional` **minAmount**: `number` \| `bigint`

Defined in: [src/types/subscription.ts:331](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L331)

Filter to transactions where the amount being transferred is greater
than or equal to the given minimum (microAlgos or decimal units of an ASA if type: axfer).

##### notePrefix?

> `optional` **notePrefix**: `string`

Defined in: [src/types/subscription.ts:318](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L318)

Filter to transactions with a note having the given prefix.

##### receiver?

> `optional` **receiver**: `string` \| `string`[]

Defined in: [src/types/subscription.ts:316](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L316)

Filter to transactions being received by the specified address(es).

##### sender?

> `optional` **sender**: `string` \| `string`[]

Defined in: [src/types/subscription.ts:314](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L314)

Filter to transactions sent from the specified address(es).

##### type?

> `optional` **type**: `TransactionType` \| `TransactionType`[]

Defined in: [src/types/subscription.ts:312](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L312)

Filter based on the given transaction type(s).

---

### TransactionSubscriptionParams

Defined in: [src/types/subscription.ts:366](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L366)

Parameters to control a single subscription pull/poll.

#### Extends

- [`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams)

#### Properties

##### arc28Events?

> `optional` **arc28Events**: [`Arc28EventGroup`](arc-28.md#arc28eventgroup)[]

Defined in: [src/types/subscription.ts:260](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L260)

Any ARC-28 event definitions to process from app call logs

###### Inherited from

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`arc28Events`](#arc28events-2)

##### currentRound?

> `optional` **currentRound**: `bigint`

Defined in: [src/types/subscription.ts:382](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L382)

The current tip of the configured Algorand blockchain.
If not provided, it will be resolved on demand.

##### filters

> **filters**: [`NamedTransactionFilter`](#namedtransactionfilter)[]

Defined in: [src/types/subscription.ts:258](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L258)

The filter(s) to apply to find transactions of interest.
A list of filters with corresponding names.

###### Example

```typescript
filter: [
  {
    name: 'asset-transfers',
    filter: {
      type: TransactionType.axfer,
      //...
    },
  },
  {
    name: 'payments',
    filter: {
      type: TransactionType.pay,
      //...
    },
  },
];
```

###### Inherited from

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`filters`](#filters-1)

##### maxIndexerRoundsToSync?

> `optional` **maxIndexerRoundsToSync**: `number`

Defined in: [src/types/subscription.ts:280](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L280)

The maximum number of rounds to sync from indexer when using `syncBehaviour: 'catchup-with-indexer'.

By default there is no limit and it will paginate through all of the rounds.
Sometimes this can result in an incredibly long catchup time that may break the service
due to execution and memory constraints, particularly for filters that result in a large number of transactions.

Instead, this allows indexer catchup to be split into multiple polls, each with a transactionally consistent
boundary based on the number of rounds specified here.

###### Inherited from

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`maxIndexerRoundsToSync`](#maxindexerroundstosync-1)

##### maxRoundsToSync?

> `optional` **maxRoundsToSync**: `number`

Defined in: [src/types/subscription.ts:269](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L269)

The maximum number of rounds to sync from algod for each subscription pull/poll.

Defaults to 500.

This gives you control over how many rounds you wait for at a time,
your staleness tolerance when using `skip-sync-newest` or `fail`, and
your catchup speed when using `sync-oldest`.

###### Inherited from

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`maxRoundsToSync`](#maxroundstosync-1)

##### syncBehaviour

> **syncBehaviour**: `"skip-sync-newest"` \| `"sync-oldest"` \| `"sync-oldest-start-now"` \| `"catchup-with-indexer"` \| `"fail"`

Defined in: [src/types/subscription.ts:298](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L298)

If the current tip of the configured Algorand blockchain is more than `maxRoundsToSync`
past `watermark` then how should that be handled:

- `skip-sync-newest`: Discard old blocks/transactions and sync the newest; useful
  for real-time notification scenarios where you don't care about history and
  are happy to lose old transactions.
- `sync-oldest`: Sync from the oldest rounds forward `maxRoundsToSync` rounds
  using algod; note: this will be slow if you are starting from 0 and requires
  an archival node.
- `sync-oldest-start-now`: Same as `sync-oldest`, but if the `watermark` is `0`
  then start at the current round i.e. don't sync historical records, but once
  subscribing starts sync everything; note: if it falls behind it requires an
  archival node.
- `catchup-with-indexer`: Sync to round `currentRound - maxRoundsToSync + 1`
  using indexer (much faster than using algod for long time periods) and then
  use algod from there.
- `fail`: Throw an error.

###### Inherited from

[`CoreTransactionSubscriptionParams`](#coretransactionsubscriptionparams).[`syncBehaviour`](#syncbehaviour-1)

##### watermark

> **watermark**: `bigint`

Defined in: [src/types/subscription.ts:377](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L377)

The current round watermark that transactions have previously been synced to.

Persist this value as you process transactions processed from this method
to allow for resilient and incremental syncing.

Syncing will start from `watermark + 1`.

Start from 0 if you want to start from the beginning of time, noting that
will be slow if `onMaxRounds` is `sync-oldest`.

---

### TransactionSubscriptionResult

Defined in: [src/types/subscription.ts:7](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L7)

The result of a single subscription pull/poll.

#### Properties

##### blockMetadata?

> `optional` **blockMetadata**: [`BlockMetadata`](#blockmetadata)[]

Defined in: [src/types/subscription.ts:29](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L29)

The metadata about any blocks that were retrieved from algod as part
of the subscription poll.

##### currentRound

> **currentRound**: `bigint`

Defined in: [src/types/subscription.ts:11](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L11)

The current detected tip of the configured Algorand blockchain.

##### newWatermark

> **newWatermark**: `bigint`

Defined in: [src/types/subscription.ts:19](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L19)

The new watermark value to persist for the next call to
`getSubscribedTransactions` to continue the sync.
Will be equal to `syncedRoundRange[1]`. Only persist this
after processing (or in the same atomic transaction as)
subscribed transactions to keep it reliable.

##### startingWatermark

> **startingWatermark**: `bigint`

Defined in: [src/types/subscription.ts:13](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L13)

The watermark value that was retrieved at the start of the subscription poll.

##### subscribedTransactions

> **subscribedTransactions**: [`SubscribedTransaction`](#subscribedtransaction)[]

Defined in: [src/types/subscription.ts:25](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L25)

Any transactions that matched the given filter within
the synced round range. This substantively uses the [indexer transaction
format](https://dev.algorand.co/reference/rest-apis/indexer#transaction)
to represent the data with some additional fields.

##### syncedRoundRange

> **syncedRoundRange**: \[`bigint`, `bigint`\]

Defined in: [src/types/subscription.ts:9](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L9)

The round range that was synced from/to

## Type Aliases

### ErrorListener()

> **ErrorListener** = (`error`) => `Promise`\<`void`\> \| `void`

Defined in: [src/types/subscription.ts:416](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L416)

#### Parameters

##### error

`unknown`

#### Returns

`Promise`\<`void`\> \| `void`

---

### TypedAsyncEventListener()

> **TypedAsyncEventListener**\<`T`\> = (`event`, `eventName`) => `Promise`\<`void`\> \| `void`

Defined in: [src/types/subscription.ts:414](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L414)

#### Type Parameters

##### T

`T`

#### Parameters

##### event

`T`

##### eventName

`string` | `symbol`

#### Returns

`Promise`\<`void`\> \| `void`
