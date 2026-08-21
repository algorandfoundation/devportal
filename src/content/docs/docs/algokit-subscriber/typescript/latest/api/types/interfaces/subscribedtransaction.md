---
editUrl: false
next: false
prev: false
title: 'SubscribedTransaction'
---

Defined in: [src/types/subscription.ts:163](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L163)

The common model used to expose a transaction that is returned from a subscription.

Substantively, based on the Indexer [`TransactionResult` model](https://dev.algorand.co/reference/rest-apis/indexer#transaction) format with some modifications to:

- Add the `parentTransactionId` field so inner transactions have a reference to their parent
- Override the type of `inner-txns` to be `SubscribedTransaction[]` so inner transactions (recursively) get these extra fields too
- Add emitted ARC-28 events via `arc28Events`
- Balance changes in algo or assets

## Extends

- `Transaction`

## Properties

### applicationTransaction?

> `optional` **applicationTransaction**: `TransactionApplication`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:24

#### Inherited from

`IndexerTransaction.applicationTransaction`

---

### arc28Events?

> `optional` **arc28Events**: [`EmittedArc28Event`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/emittedarc28event/)[]

Defined in: [src/types/subscription.ts:173](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L173)

Any ARC-28 events emitted from an app call.

---

### assetConfigTransaction?

> `optional` **assetConfigTransaction**: `TransactionAssetConfig`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:25

#### Inherited from

`IndexerTransaction.assetConfigTransaction`

---

### assetFreezeTransaction?

> `optional` **assetFreezeTransaction**: `TransactionAssetFreeze`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:26

#### Inherited from

`IndexerTransaction.assetFreezeTransaction`

---

### assetTransferTransaction?

> `optional` **assetTransferTransaction**: `TransactionAssetTransfer`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:27

#### Inherited from

`IndexerTransaction.assetTransferTransaction`

---

### authAddr?

> `optional` **authAddr**: `Address`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:33

\[sgnr\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.

#### Inherited from

`IndexerTransaction.authAddr`

---

### balanceChanges?

> `optional` **balanceChanges**: [`BalanceChange`](/docs/algokit-subscriber/typescript/latest/api/types/interfaces/balancechange/)[]

Defined in: [src/types/subscription.ts:177](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L177)

The balance changes in the transaction.

---

### closeRewards?

> `optional` **closeRewards**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:37

\[rc\] rewards applied to close-remainder-to account.

#### Inherited from

`IndexerTransaction.closeRewards`

---

### closingAmount?

> `optional` **closingAmount**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:41

\[ca\] closing amount for transaction.

#### Inherited from

`IndexerTransaction.closingAmount`

---

### confirmedRound?

> `optional` **confirmedRound**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:45

Round when the transaction was confirmed.

#### Inherited from

`IndexerTransaction.confirmedRound`

---

### createdAppId?

> `optional` **createdAppId**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:49

Specifies an application index (ID) if an application was created with this transaction.

#### Inherited from

`IndexerTransaction.createdAppId`

---

### createdAssetId?

> `optional` **createdAssetId**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:53

Specifies an asset index (ID) if an asset was created with this transaction.

#### Inherited from

`IndexerTransaction.createdAssetId`

---

### fee

> **fee**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:57

\[fee\] Transaction fee.

#### Inherited from

`IndexerTransaction.fee`

---

### filtersMatched?

> `optional` **filtersMatched**: `string`[]

Defined in: [src/types/subscription.ts:175](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L175)

The names of any filters that matched the given transaction to result in it being 'subscribed'.

---

### firstValid

> **firstValid**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:61

\[fv\] First valid round for this transaction.

#### Inherited from

`IndexerTransaction.firstValid`

---

### genesisHash?

> `optional` **genesisHash**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:65

\[gh\] Hash of genesis block.

#### Inherited from

`IndexerTransaction.genesisHash`

---

### genesisId?

> `optional` **genesisId**: `string`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:69

\[gen\] genesis block ID.

#### Inherited from

`IndexerTransaction.genesisId`

---

### globalStateDelta?

> `optional` **globalStateDelta**: `StateDelta`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:135

#### Inherited from

`IndexerTransaction.globalStateDelta`

---

### group?

> `optional` **group**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:73

\[grp\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.

#### Inherited from

`IndexerTransaction.group`

---

### heartbeatTransaction?

> `optional` **heartbeatTransaction**: `TransactionHeartbeat`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:29

#### Inherited from

`IndexerTransaction.heartbeatTransaction`

---

### id

> **id**: `string`

Defined in: [src/types/subscription.ts:165](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L165)

Transaction ID

#### Overrides

`IndexerTransaction.id`

---

### innerTxns?

> `optional` **innerTxns**: `SubscribedTransaction`[]

Defined in: [src/types/subscription.ts:171](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L171)

Inner transactions produced by application execution.

#### Overrides

`IndexerTransaction.innerTxns`

---

### intraRoundOffset?

> `optional` **intraRoundOffset**: `number`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:81

Offset into the round where this transaction was confirmed.

#### Inherited from

`IndexerTransaction.intraRoundOffset`

---

### keyregTransaction?

> `optional` **keyregTransaction**: `TransactionKeyreg`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:82

#### Inherited from

`IndexerTransaction.keyregTransaction`

---

### lastValid

> **lastValid**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:86

\[lv\] Last valid round for this transaction.

#### Inherited from

`IndexerTransaction.lastValid`

---

### lease?

> `optional` **lease**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:90

\[lx\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions. If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes. While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.

#### Inherited from

`IndexerTransaction.lease`

---

### localStateDelta?

> `optional` **localStateDelta**: `AccountStateDelta`[]

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:134

\[ld\] Local state key/value changes for the application being executed by this transaction.

#### Inherited from

`IndexerTransaction.localStateDelta`

---

### logs?

> `optional` **logs**: `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:139

\[lg\] Logs for the application being executed by this transaction.

#### Inherited from

`IndexerTransaction.logs`

---

### note?

> `optional` **note**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:94

\[note\] Free form data.

#### Inherited from

`IndexerTransaction.note`

---

### parentIntraRoundOffset?

> `optional` **parentIntraRoundOffset**: `number`

Defined in: [src/types/subscription.ts:167](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L167)

The intra-round offset of the parent of this transaction (if it's an inner transaction).

---

### parentTransactionId?

> `optional` **parentTransactionId**: `string`

Defined in: [src/types/subscription.ts:169](https://github.com/algorandfoundation/algokit-subscriber-ts/blob/main/src/types/subscription.ts#L169)

The transaction ID of the parent of this transaction (if it's an inner transaction).

---

### paymentTransaction?

> `optional` **paymentTransaction**: `TransactionPayment`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:95

#### Inherited from

`IndexerTransaction.paymentTransaction`

---

### receiverRewards?

> `optional` **receiverRewards**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:99

\[rr\] rewards applied to receiver account.

#### Inherited from

`IndexerTransaction.receiverRewards`

---

### rekeyTo?

> `optional` **rekeyTo**: `Address`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:103

\[rekey\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.

#### Inherited from

`IndexerTransaction.rekeyTo`

---

### roundTime?

> `optional` **roundTime**: `number`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:107

Time when the block this transaction is in was confirmed.

#### Inherited from

`IndexerTransaction.roundTime`

---

### sender

> **sender**: `string`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:111

\[snd\] Sender's address.

#### Inherited from

`IndexerTransaction.sender`

---

### senderRewards?

> `optional` **senderRewards**: `bigint`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:115

\[rs\] rewards applied to sender account.

#### Inherited from

`IndexerTransaction.senderRewards`

---

### signature?

> `optional` **signature**: `TransactionSignature`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:116

#### Inherited from

`IndexerTransaction.signature`

---

### stateProofTransaction?

> `optional` **stateProofTransaction**: `TransactionStateProof`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:28

#### Inherited from

`IndexerTransaction.stateProofTransaction`

---

### txType

> **txType**: `"pay"` \| `"keyreg"` \| `"acfg"` \| `"axfer"` \| `"afrz"` \| `"appl"` \| `"stpf"` \| `"hb"`

Defined in: node_modules/@algorandfoundation/algokit-utils/packages/indexer_client/src/models/transaction.d.ts:130

\[type\] Indicates what type of transaction this is. Different types have different fields.

Valid types, and where their fields are stored:

- \[pay\] payment-transaction
- \[keyreg\] keyreg-transaction
- \[acfg\] asset-config-transaction
- \[axfer\] asset-transfer-transaction
- \[afrz\] asset-freeze-transaction
- \[appl\] application-transaction
- \[stpf\] state-proof-transaction
- \[hb\] heartbeat-transaction

#### Inherited from

`IndexerTransaction.txType`
