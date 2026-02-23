---
editUrl: false
next: false
prev: false
title: "TransactionStateProof"
---

> **TransactionStateProof** = `object`

Defined in: [packages/indexer\_client/src/models/transaction-state-proof.ts:14](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-state-proof.ts#L14)

Fields for a state proof transaction.

Definition:
data/transactions/stateproof.go : StateProofTxnFields

## Properties

### message?

> `optional` **message**: [`IndexerStateProofMessage`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/indexerstateproofmessage/)

Defined in: [packages/indexer\_client/src/models/transaction-state-proof.ts:20](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-state-proof.ts#L20)

***

### stateProof?

> `optional` **stateProof**: [`StateProofFields`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/stateprooffields/)

Defined in: [packages/indexer\_client/src/models/transaction-state-proof.ts:19](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-state-proof.ts#L19)

***

### stateProofType?

> `optional` **stateProofType**: `number`

Defined in: [packages/indexer\_client/src/models/transaction-state-proof.ts:18](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-state-proof.ts#L18)

\[sptype\] Type of the state proof. Integer representing an entry defined in protocol/stateproof.go
