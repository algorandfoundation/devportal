---
title: 'Class: SubscribedTransaction'
---

[**@algorandfoundation/algokit-subscriber**](../../../README.md)

---

[@algorandfoundation/algokit-subscriber](../../../modules.md) / [types/subscription](../README.md) / SubscribedTransaction

Defined in: [src/types/subscription.ts:163](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L163)

The common model used to expose a transaction that is returned from a subscription.

Substantively, based on the Indexer [`TransactionResult` model](https://dev.algorand.co/reference/rest-apis/indexer#transaction) format with some modifications to:

- Add the `parentTransactionId` field so inner transactions have a reference to their parent
- Override the type of `inner-txns` to be `SubscribedTransaction[]` so inner transactions (recursively) get these extra fields too
- Add emitted ARC-28 events via `arc28Events`
- Balance changes in algo or assets

## Hierarchy

[View Summary](../../../hierarchy.md)

### Extends

- `Transaction`

## Constructors

### Constructor

> **new SubscribedTransaction**(`__namedParameters`): `SubscribedTransaction`

Defined in: [src/types/subscription.ts:178](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L178)

#### Parameters

##### \_\_namedParameters

`Omit`\<`SubscribedTransaction`, `"getEncodingSchema"` \| `"toEncodingData"`\>

#### Returns

`SubscribedTransaction`

#### Overrides

`algosdk.indexerModels.Transaction.constructor`

## Properties

### applicationTransaction?

> `optional` **applicationTransaction**: `TransactionApplication`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2176

Fields for application transactions.
Definition:
data/transactions/application.go : ApplicationCallTxnFields

#### Inherited from

`algosdk.indexerModels.Transaction.applicationTransaction`

---

### arc28Events?

> `optional` **arc28Events**: [`EmittedArc28Event`](../../arc-28/interfaces/EmittedArc28Event.md)[]

Defined in: [src/types/subscription.ts:172](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L172)

Any ARC-28 events emitted from an app call.

---

### assetConfigTransaction?

> `optional` **assetConfigTransaction**: `TransactionAssetConfig`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2184

Fields for asset allocation, re-configuration, and destruction.
A zero value for asset-id indicates asset creation.
A zero value for the params indicates asset destruction.
Definition:
data/transactions/asset.go : AssetConfigTxnFields

#### Inherited from

`algosdk.indexerModels.Transaction.assetConfigTransaction`

---

### assetFreezeTransaction?

> `optional` **assetFreezeTransaction**: `TransactionAssetFreeze`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2190

Fields for an asset freeze transaction.
Definition:
data/transactions/asset.go : AssetFreezeTxnFields

#### Inherited from

`algosdk.indexerModels.Transaction.assetFreezeTransaction`

---

### assetTransferTransaction?

> `optional` **assetTransferTransaction**: `TransactionAssetTransfer`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2196

Fields for an asset transfer transaction.
Definition:
data/transactions/asset.go : AssetTransferTxnFields

#### Inherited from

`algosdk.indexerModels.Transaction.assetTransferTransaction`

---

### authAddr?

> `optional` **authAddr**: `Address`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2202

(sgnr) this is included with signed transactions when the signing address does
not equal the sender. The backend can use this to ensure that auth addr is equal
to the accounts auth addr.

#### Inherited from

`algosdk.indexerModels.Transaction.authAddr`

---

### balanceChanges?

> `optional` **balanceChanges**: [`BalanceChange`](../interfaces/BalanceChange.md)[]

Defined in: [src/types/subscription.ts:176](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L176)

The balance changes in the transaction.

---

### closeRewards?

> `optional` **closeRewards**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2206

(rc) rewards applied to close-remainder-to account.

#### Inherited from

`algosdk.indexerModels.Transaction.closeRewards`

---

### closingAmount?

> `optional` **closingAmount**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2210

(ca) closing amount for transaction.

#### Inherited from

`algosdk.indexerModels.Transaction.closingAmount`

---

### confirmedRound?

> `optional` **confirmedRound**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2214

Round when the transaction was confirmed.

#### Inherited from

`algosdk.indexerModels.Transaction.confirmedRound`

---

### createdApplicationIndex?

> `optional` **createdApplicationIndex**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2219

Specifies an application index (ID) if an application was created with this
transaction.

#### Inherited from

`algosdk.indexerModels.Transaction.createdApplicationIndex`

---

### createdAssetIndex?

> `optional` **createdAssetIndex**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2223

Specifies an asset index (ID) if an asset was created with this transaction.

#### Inherited from

`algosdk.indexerModels.Transaction.createdAssetIndex`

---

### fee

> **fee**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2158

(fee) Transaction fee.

#### Inherited from

`algosdk.indexerModels.Transaction.fee`

---

### filtersMatched?

> `optional` **filtersMatched**: `string`[]

Defined in: [src/types/subscription.ts:174](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L174)

The names of any filters that matched the given transaction to result in it being 'subscribed'.

---

### firstValid

> **firstValid**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2162

(fv) First valid round for this transaction.

#### Inherited from

`algosdk.indexerModels.Transaction.firstValid`

---

### genesisHash?

> `optional` **genesisHash**: `Uint8Array`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2227

(gh) Hash of genesis block.

#### Inherited from

`algosdk.indexerModels.Transaction.genesisHash`

---

### genesisId?

> `optional` **genesisId**: `string`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2231

(gen) genesis block ID.

#### Inherited from

`algosdk.indexerModels.Transaction.genesisId`

---

### globalStateDelta?

> `optional` **globalStateDelta**: `EvalDeltaKeyValue`[]

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2236

(gd) Global state key/value changes for the application being executed by this
transaction.

#### Inherited from

`algosdk.indexerModels.Transaction.globalStateDelta`

---

### group?

> `optional` **group**: `Uint8Array`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2242

(grp) Base64 encoded byte array of a sha512/256 digest. When present indicates
that this transaction is part of a transaction group and the value is the
sha512/256 hash of the transactions in that group.

#### Inherited from

`algosdk.indexerModels.Transaction.group`

---

### heartbeatTransaction?

> `optional` **heartbeatTransaction**: `TransactionHeartbeat`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2248

Fields for a heartbeat transaction.
Definition:
data/transactions/heartbeat.go : HeartbeatTxnFields

#### Inherited from

`algosdk.indexerModels.Transaction.heartbeatTransaction`

---

### id

> **id**: `string`

Defined in: [src/types/subscription.ts:164](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L164)

Transaction ID

#### Overrides

`algosdk.indexerModels.Transaction.id`

---

### innerTxns?

> `optional` **innerTxns**: `SubscribedTransaction`[]

Defined in: [src/types/subscription.ts:170](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L170)

Inner transactions produced by application execution.

#### Overrides

`algosdk.indexerModels.Transaction.innerTxns`

---

### intraRoundOffset?

> `optional` **intraRoundOffset**: `number`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2260

Offset into the round where this transaction was confirmed.

#### Inherited from

`algosdk.indexerModels.Transaction.intraRoundOffset`

---

### keyregTransaction?

> `optional` **keyregTransaction**: `TransactionKeyreg`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2266

Fields for a keyreg transaction.
Definition:
data/transactions/keyreg.go : KeyregTxnFields

#### Inherited from

`algosdk.indexerModels.Transaction.keyregTransaction`

---

### lastValid

> **lastValid**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2166

(lv) Last valid round for this transaction.

#### Inherited from

`algosdk.indexerModels.Transaction.lastValid`

---

### lease?

> `optional` **lease**: `Uint8Array`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2274

(lx) Base64 encoded 32-byte array. Lease enforces mutual exclusion of
transactions. If this field is nonzero, then once the transaction is confirmed,
it acquires the lease identified by the (Sender, Lease) pair of the transaction
until the LastValid round passes. While this transaction possesses the lease, no
other transaction specifying this lease can be confirmed.

#### Inherited from

`algosdk.indexerModels.Transaction.lease`

---

### localStateDelta?

> `optional` **localStateDelta**: `AccountStateDelta`[]

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2279

(ld) Local state key/value changes for the application being executed by this
transaction.

#### Inherited from

`algosdk.indexerModels.Transaction.localStateDelta`

---

### logs?

> `optional` **logs**: `Uint8Array`[]

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2283

(lg) Logs for the application being executed by this transaction.

#### Inherited from

`algosdk.indexerModels.Transaction.logs`

---

### note?

> `optional` **note**: `Uint8Array`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2287

(note) Free form data.

#### Inherited from

`algosdk.indexerModels.Transaction.note`

---

### parentIntraRoundOffset?

> `optional` **parentIntraRoundOffset**: `number`

Defined in: [src/types/subscription.ts:166](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L166)

The intra-round offset of the parent of this transaction (if it's an inner transaction).

---

### parentTransactionId?

> `optional` **parentTransactionId**: `string`

Defined in: [src/types/subscription.ts:168](https://github.com/larkiny/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L168)

The transaction ID of the parent of this transaction (if it's an inner transaction).

---

### paymentTransaction?

> `optional` **paymentTransaction**: `TransactionPayment`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2293

Fields for a payment transaction.
Definition:
data/transactions/payment.go : PaymentTxnFields

#### Inherited from

`algosdk.indexerModels.Transaction.paymentTransaction`

---

### receiverRewards?

> `optional` **receiverRewards**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2297

(rr) rewards applied to receiver account.

#### Inherited from

`algosdk.indexerModels.Transaction.receiverRewards`

---

### rekeyTo?

> `optional` **rekeyTo**: `Address`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2303

(rekey) when included in a valid transaction, the accounts auth addr will be
updated with this value and future signatures must be signed with the key
represented by this address.

#### Inherited from

`algosdk.indexerModels.Transaction.rekeyTo`

---

### roundTime?

> `optional` **roundTime**: `number`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2307

Time when the block this transaction is in was confirmed.

#### Inherited from

`algosdk.indexerModels.Transaction.roundTime`

---

### sender

> **sender**: `string`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2170

(snd) Sender's address.

#### Inherited from

`algosdk.indexerModels.Transaction.sender`

---

### senderRewards?

> `optional` **senderRewards**: `bigint`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2311

(rs) rewards applied to sender account.

#### Inherited from

`algosdk.indexerModels.Transaction.senderRewards`

---

### signature?

> `optional` **signature**: `TransactionSignature`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2316

Validation signature associated with some data. Only one of the signatures
should be provided.

#### Inherited from

`algosdk.indexerModels.Transaction.signature`

---

### stateProofTransaction?

> `optional` **stateProofTransaction**: `TransactionStateProof`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2322

Fields for a state proof transaction.
Definition:
data/transactions/stateproof.go : StateProofTxnFields

#### Inherited from

`algosdk.indexerModels.Transaction.stateProofTransaction`

---

### txType?

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

#### Inherited from

`algosdk.indexerModels.Transaction.txType`

## Accessors

### encodingSchema

#### Get Signature

> **get** `static` **encodingSchema**(): `Schema`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2154

##### Returns

`Schema`

#### Inherited from

`algosdk.indexerModels.Transaction.encodingSchema`

## Methods

### getEncodingSchema()

> **getEncodingSchema**(): `Schema`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2454

Get the encoding Schema for this object, used to prepare the encoding data for msgpack and JSON.

#### Returns

`Schema`

#### Inherited from

`algosdk.indexerModels.Transaction.getEncodingSchema`

---

### toEncodingData()

> **toEncodingData**(): `Map`\<`string`, `unknown`\>

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2455

Extract the encoding data for this object. This data, after being prepared by the encoding
Schema, can be encoded to msgpack or JSON.

#### Returns

`Map`\<`string`, `unknown`\>

#### Inherited from

`algosdk.indexerModels.Transaction.toEncodingData`

---

### fromEncodingData()

> `static` **fromEncodingData**(`data`): `Transaction`

Defined in: node_modules/algosdk/dist/types/client/v2/indexer/models/types.d.ts:2456

#### Parameters

##### data

`unknown`

#### Returns

`Transaction`

#### Inherited from

`algosdk.indexerModels.Transaction.fromEncodingData`
