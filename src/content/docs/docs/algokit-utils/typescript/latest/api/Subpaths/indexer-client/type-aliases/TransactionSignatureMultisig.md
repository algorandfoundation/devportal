---
editUrl: false
next: false
prev: false
title: "TransactionSignatureMultisig"
---

> **TransactionSignatureMultisig** = `object`

Defined in: [packages/indexer\_client/src/models/transaction-signature-multisig.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-multisig.ts#L12)

structure holding multiple subsignatures.

Definition:
crypto/multisig.go : MultisigSig

## Properties

### subsignature?

> `optional` **subsignature**: [`TransactionSignatureMultisigSubsignature`](/algokit-utils-ts/api/subpaths/indexer-client/type-aliases/transactionsignaturemultisigsubsignature/)[]

Defined in: [packages/indexer\_client/src/models/transaction-signature-multisig.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-multisig.ts#L16)

\[subsig\] holds pairs of public key and signatures.

***

### threshold?

> `optional` **threshold**: `number`

Defined in: [packages/indexer\_client/src/models/transaction-signature-multisig.ts:21](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-multisig.ts#L21)

\[thr\]

***

### version?

> `optional` **version**: `number`

Defined in: [packages/indexer\_client/src/models/transaction-signature-multisig.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/transaction-signature-multisig.ts#L26)

\[v\]
