---
editUrl: false
next: false
prev: false
title: 'MultisigMetadata'
---

Defined in: [packages/transact/src/multisig.ts:368](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L368)

## Properties

### addrs

> **addrs**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)[]

Defined in: [packages/transact/src/multisig.ts:383](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L383)

A list of Algorand addresses representing possible signers for this multisig. Order is important.

---

### threshold

> **threshold**: `number`

Defined in: [packages/transact/src/multisig.ts:378](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L378)

Multisig threshold value. Authorization requires a subset of signatures,
equal to or greater than the threshold value.

---

### version

> **version**: `number`

Defined in: [packages/transact/src/multisig.ts:372](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/multisig.ts#L372)

Multisig version
