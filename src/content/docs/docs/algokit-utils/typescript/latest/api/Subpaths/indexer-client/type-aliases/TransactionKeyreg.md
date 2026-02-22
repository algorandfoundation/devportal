---
editUrl: false
next: false
prev: false
title: "TransactionKeyreg"
---

> **TransactionKeyreg** = `object`

Defined in: [packages/indexer\_client/src/models/transaction-keyreg.ts:10](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-keyreg.ts#L10)

Fields for a keyreg transaction.

Definition:
data/transactions/keyreg.go : KeyregTxnFields

## Properties

### nonParticipation?

> `optional` **nonParticipation**: `boolean`

Defined in: [packages/indexer\_client/src/models/transaction-keyreg.ts:14](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-keyreg.ts#L14)

\[nonpart\] Mark the account as participating or non-participating.

***

### selectionParticipationKey?

> `optional` **selectionParticipationKey**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/transaction-keyreg.ts:19](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-keyreg.ts#L19)

\[selkey\] Public key used with the Verified Random Function (VRF) result during committee selection.

***

### stateProofKey?

> `optional` **stateProofKey**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/transaction-keyreg.ts:44](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-keyreg.ts#L44)

\[sprfkey\] State proof key used in key registration transactions.

***

### voteFirstValid?

> `optional` **voteFirstValid**: `bigint`

Defined in: [packages/indexer\_client/src/models/transaction-keyreg.ts:24](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-keyreg.ts#L24)

\[votefst\] First round this participation key is valid.

***

### voteKeyDilution?

> `optional` **voteKeyDilution**: `bigint`

Defined in: [packages/indexer\_client/src/models/transaction-keyreg.ts:29](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-keyreg.ts#L29)

\[votekd\] Number of subkeys in each batch of participation keys.

***

### voteLastValid?

> `optional` **voteLastValid**: `bigint`

Defined in: [packages/indexer\_client/src/models/transaction-keyreg.ts:34](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-keyreg.ts#L34)

\[votelst\] Last round this participation key is valid.

***

### voteParticipationKey?

> `optional` **voteParticipationKey**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/transaction-keyreg.ts:39](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-keyreg.ts#L39)

\[votekey\] Participation public key used in key registration transactions.
