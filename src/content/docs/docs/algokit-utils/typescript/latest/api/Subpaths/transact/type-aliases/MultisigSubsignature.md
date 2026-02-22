---
editUrl: false
next: false
prev: false
title: "MultisigSubsignature"
---

> **MultisigSubsignature** = `object`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L41)

Represents a single subsignature in a multisignature transaction.

Each subsignature contains the public key of a participant and an optional signature.

## Properties

### publicKey

> **publicKey**: `Uint8Array`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L45)

Public key of a keypair account participant that is sub-signing a multisignature transaction.

***

### sig?

> `optional` **sig**: `Uint8Array`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L50)

Optional Ed25519 signature for the transaction.
