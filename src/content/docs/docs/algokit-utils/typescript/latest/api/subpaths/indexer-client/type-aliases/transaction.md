---
editUrl: false
next: false
prev: false
title: 'Transaction'
---

> **Transaction** = `object`

Defined in: [packages/indexer_client/src/models/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L44)

Contains all fields common to all transactions and serves as an envelope to all transactions type. Represents both regular and inner transactions.

Definition:
data/transactions/signedtxn.go : SignedTxn
data/transactions/transaction.go : Transaction

## Properties

### applicationTransaction?

> `optional` **applicationTransaction**: [`TransactionApplication`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionapplication/)

Defined in: [packages/indexer_client/src/models/transaction.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L45)

---

### assetConfigTransaction?

> `optional` **assetConfigTransaction**: [`TransactionAssetConfig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionassetconfig/)

Defined in: [packages/indexer_client/src/models/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L46)

---

### assetFreezeTransaction?

> `optional` **assetFreezeTransaction**: [`TransactionAssetFreeze`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionassetfreeze/)

Defined in: [packages/indexer_client/src/models/transaction.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L47)

---

### assetTransferTransaction?

> `optional` **assetTransferTransaction**: [`TransactionAssetTransfer`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionassettransfer/)

Defined in: [packages/indexer_client/src/models/transaction.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L48)

---

### authAddr?

> `optional` **authAddr**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/indexer_client/src/models/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L55)

\[sgnr\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.

---

### closeRewards?

> `optional` **closeRewards**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:60](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L60)

\[rc\] rewards applied to close-remainder-to account.

---

### closingAmount?

> `optional` **closingAmount**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:65](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L65)

\[ca\] closing amount for transaction.

---

### confirmedRound?

> `optional` **confirmedRound**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:70](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L70)

Round when the transaction was confirmed.

---

### createdAppId?

> `optional` **createdAppId**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:75](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L75)

Specifies an application index (ID) if an application was created with this transaction.

---

### createdAssetId?

> `optional` **createdAssetId**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L80)

Specifies an asset index (ID) if an asset was created with this transaction.

---

### fee

> **fee**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:85](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L85)

\[fee\] Transaction fee.

---

### firstValid

> **firstValid**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:90](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L90)

\[fv\] First valid round for this transaction.

---

### genesisHash?

> `optional` **genesisHash**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/transaction.ts:95](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L95)

\[gh\] Hash of genesis block.

---

### genesisId?

> `optional` **genesisId**: `string`

Defined in: [packages/indexer_client/src/models/transaction.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L100)

\[gen\] genesis block ID.

---

### globalStateDelta?

> `optional` **globalStateDelta**: [`StateDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/statedelta/)

Defined in: [packages/indexer_client/src/models/transaction.ts:179](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L179)

---

### group?

> `optional` **group**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/transaction.ts:105](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L105)

\[grp\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.

---

### heartbeatTransaction?

> `optional` **heartbeatTransaction**: [`TransactionHeartbeat`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionheartbeat/)

Defined in: [packages/indexer_client/src/models/transaction.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L50)

---

### id?

> `optional` **id**: `string`

Defined in: [packages/indexer_client/src/models/transaction.ts:110](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L110)

Transaction ID

---

### innerTxns?

> `optional` **innerTxns**: `Transaction`[]

Defined in: [packages/indexer_client/src/models/transaction.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L189)

Inner transactions produced by application execution.

---

### intraRoundOffset?

> `optional` **intraRoundOffset**: `number`

Defined in: [packages/indexer_client/src/models/transaction.ts:115](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L115)

Offset into the round where this transaction was confirmed.

---

### keyregTransaction?

> `optional` **keyregTransaction**: [`TransactionKeyreg`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionkeyreg/)

Defined in: [packages/indexer_client/src/models/transaction.ts:116](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L116)

---

### lastValid

> **lastValid**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:121](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L121)

\[lv\] Last valid round for this transaction.

---

### lease?

> `optional` **lease**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/transaction.ts:126](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L126)

\[lx\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions. If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes. While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.

---

### localStateDelta?

> `optional` **localStateDelta**: [`AccountStateDelta`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/accountstatedelta/)[]

Defined in: [packages/indexer_client/src/models/transaction.ts:178](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L178)

\[ld\] Local state key/value changes for the application being executed by this transaction.

---

### logs?

> `optional` **logs**: `Uint8Array`[]

Defined in: [packages/indexer_client/src/models/transaction.ts:184](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L184)

\[lg\] Logs for the application being executed by this transaction.

---

### note?

> `optional` **note**: `Uint8Array`

Defined in: [packages/indexer_client/src/models/transaction.ts:131](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L131)

\[note\] Free form data.

---

### paymentTransaction?

> `optional` **paymentTransaction**: [`TransactionPayment`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionpayment/)

Defined in: [packages/indexer_client/src/models/transaction.ts:132](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L132)

---

### receiverRewards?

> `optional` **receiverRewards**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:137](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L137)

\[rr\] rewards applied to receiver account.

---

### rekeyTo?

> `optional` **rekeyTo**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/indexer_client/src/models/transaction.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L142)

\[rekey\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.

---

### roundTime?

> `optional` **roundTime**: `number`

Defined in: [packages/indexer_client/src/models/transaction.ts:147](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L147)

Time when the block this transaction is in was confirmed.

---

### sender

> **sender**: `string`

Defined in: [packages/indexer_client/src/models/transaction.ts:152](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L152)

\[snd\] Sender's address.

---

### senderRewards?

> `optional` **senderRewards**: `bigint`

Defined in: [packages/indexer_client/src/models/transaction.ts:157](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L157)

\[rs\] rewards applied to sender account.

---

### signature?

> `optional` **signature**: [`TransactionSignature`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsignature/)

Defined in: [packages/indexer_client/src/models/transaction.ts:158](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L158)

---

### stateProofTransaction?

> `optional` **stateProofTransaction**: [`TransactionStateProof`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionstateproof/)

Defined in: [packages/indexer_client/src/models/transaction.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L49)

---

### txType

> **txType**: `"pay"` \| `"keyreg"` \| `"acfg"` \| `"axfer"` \| `"afrz"` \| `"appl"` \| `"stpf"` \| `"hb"`

Defined in: [packages/indexer_client/src/models/transaction.ts:173](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction.ts#L173)

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
