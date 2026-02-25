---
editUrl: false
next: false
prev: false
title: 'MultisigSignature'
---

> **MultisigSignature** = `object`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:60](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L60)

Represents an Algorand multisignature signature.

A multisignature signature is defined by a version, a threshold, and a list of participating addresses.
The version indicates the multisig protocol version, while the threshold specifies the minimum number of signatures required to authorize a transaction.
While technically this accepts `Address` types, it is expected that these will be the addresses of Ed25519 public keys.

## Properties

### subsigs

> **subsigs**: [`MultisigSubsignature`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/multisigsubsignature/)[]

Defined in: [packages/transact/src/transactions/signed-transaction.ts:74](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L74)

Array of subsignatures

---

### threshold

> **threshold**: `number`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:69](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L69)

Minimum number of signatures required.

---

### version

> **version**: `number`

Defined in: [packages/transact/src/transactions/signed-transaction.ts:64](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/signed-transaction.ts#L64)

Multisig version.
