---
editUrl: false
next: false
prev: false
title: "TransactionSignatureLogicsig"
---

> **TransactionSignatureLogicsig** = `object`

Defined in: [packages/indexer\_client/src/models/transaction-signature-logicsig.ts:12](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-logicsig.ts#L12)

\[lsig\] Programatic transaction signature.

Definition:
data/transactions/logicsig.go

## Properties

### args?

> `optional` **args**: `Uint8Array`[]

Defined in: [packages/indexer\_client/src/models/transaction-signature-logicsig.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-logicsig.ts#L16)

\[arg\] Logic arguments, base64 encoded.

***

### logic

> **logic**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/transaction-signature-logicsig.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-logicsig.ts#L21)

\[l\] Program signed by a signature or multi signature, or hashed to be the address of an account. Base64 encoded TEAL program.

***

### logicMultisigSignature?

> `optional` **logicMultisigSignature**: [`TransactionSignatureMultisig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsignaturemultisig/)

Defined in: [packages/indexer\_client/src/models/transaction-signature-logicsig.ts:23](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-logicsig.ts#L23)

***

### multisigSignature?

> `optional` **multisigSignature**: [`TransactionSignatureMultisig`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/transactionsignaturemultisig/)

Defined in: [packages/indexer\_client/src/models/transaction-signature-logicsig.ts:22](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-logicsig.ts#L22)

***

### signature?

> `optional` **signature**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/transaction-signature-logicsig.ts:28](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-logicsig.ts#L28)

\[sig\] ed25519 signature.
