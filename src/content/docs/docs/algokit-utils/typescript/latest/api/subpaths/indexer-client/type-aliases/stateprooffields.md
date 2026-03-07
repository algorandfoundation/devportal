---
editUrl: false
next: false
prev: false
title: "StateProofFields"
---

> **StateProofFields** = `object`

Defined in: [packages/indexer\_client/src/models/state-proof-fields.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-fields.ts#L14)

\[sp\] represents a state proof.

Definition:
crypto/stateproof/structs.go : StateProof

## Properties

### partProofs?

> `optional` **partProofs**: [`MerkleArrayProof`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/merklearrayproof/)

Defined in: [packages/indexer\_client/src/models/state-proof-fields.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-fields.ts#L25)

***

### positionsToReveal?

> `optional` **positionsToReveal**: `bigint`[]

Defined in: [packages/indexer\_client/src/models/state-proof-fields.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-fields.ts#L40)

\[pr\] Sequence of reveal positions.

***

### reveals?

> `optional` **reveals**: [`StateProofReveal`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/stateproofreveal/)[]

Defined in: [packages/indexer\_client/src/models/state-proof-fields.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-fields.ts#L35)

\[r\] Note that this is actually stored as a map[uint64] - Reveal in the actual msgp

***

### saltVersion?

> `optional` **saltVersion**: `number`

Defined in: [packages/indexer\_client/src/models/state-proof-fields.ts:30](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-fields.ts#L30)

\[v\] Salt version of the merkle signature.

***

### sigCommit?

> `optional` **sigCommit**: `Uint8Array`

Defined in: [packages/indexer\_client/src/models/state-proof-fields.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-fields.ts#L18)

\[c\]

***

### signedWeight?

> `optional` **signedWeight**: `bigint`

Defined in: [packages/indexer\_client/src/models/state-proof-fields.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-fields.ts#L23)

\[w\]

***

### sigProofs?

> `optional` **sigProofs**: [`MerkleArrayProof`](/docs/algokit-utils/typescript/latest/api/subpaths/indexer-client/type-aliases/merklearrayproof/)

Defined in: [packages/indexer\_client/src/models/state-proof-fields.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/indexer_client/src/models/state-proof-fields.ts#L24)
