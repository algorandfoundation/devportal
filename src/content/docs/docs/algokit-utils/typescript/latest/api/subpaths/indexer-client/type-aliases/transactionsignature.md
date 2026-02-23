---
editUrl: false
next: false
prev: false
title: "TransactionSignature"
---

> **TransactionSignature** = `object`

Defined in: [packages/indexer\_client/src/models/transaction-signature.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature.ts#L11)

Validation signature associated with some data. Only one of the signatures should be provided.

## Properties

### logicsig?

> `optional` **logicsig**: [`TransactionSignatureLogicsig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsignaturelogicsig/)

Defined in: [packages/indexer\_client/src/models/transaction-signature.ts:12](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature.ts#L12)

***

### multisig?

> `optional` **multisig**: [`TransactionSignatureMultisig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsignaturemultisig/)

Defined in: [packages/indexer\_client/src/models/transaction-signature.ts:13](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature.ts#L13)

***

### sig?

> `optional` **sig**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/transaction-signature.ts:18](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature.ts#L18)

\[sig\] Standard ed25519 signature.
