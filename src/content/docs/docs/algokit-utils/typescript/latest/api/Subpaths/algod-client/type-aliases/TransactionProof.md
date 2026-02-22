---
editUrl: false
next: false
prev: false
title: "TransactionProof"
---

> **TransactionProof** = `object`

Defined in: [packages/algod\_client/src/models/transaction-proof.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-proof.ts#L7)

Proof of transaction in a block.

## Properties

### hashtype

> **hashtype**: `"sha512_256"` \| `"sha256"`

Defined in: [packages/algod\_client/src/models/transaction-proof.ts:33](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-proof.ts#L33)

The type of hash function used to create the proof, must be one of:
* sha512_256
* sha256

***

### idx

> **idx**: `number`

Defined in: [packages/algod\_client/src/models/transaction-proof.ts:26](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-proof.ts#L26)

Index of the transaction in the block's payset.

***

### proof

> **proof**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/transaction-proof.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-proof.ts#L11)

Proof of transaction membership.

***

### stibhash

> **stibhash**: `Uint8Array`

Defined in: [packages/algod\_client/src/models/transaction-proof.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-proof.ts#L16)

Hash of SignedTxnInBlock for verifying proof.

***

### treedepth

> **treedepth**: `number`

Defined in: [packages/algod\_client/src/models/transaction-proof.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/transaction-proof.ts#L21)

Represents the depth of the tree that is being proven, i.e. the number of edges from a leaf to the root.
