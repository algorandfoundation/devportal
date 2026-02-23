---
editUrl: false
next: false
prev: false
title: 'KeyRegistrationTransactionFields'
---

> **KeyRegistrationTransactionFields** = `object`

Defined in: [packages/transact/src/transactions/key-registration.ts:7](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/key-registration.ts#L7)

Represents a key registration transaction that registers an account online or offline
for participation in Algorand consensus.

## Properties

### nonParticipation?

> `optional` **nonParticipation**: `boolean`

Defined in: [packages/transact/src/transactions/key-registration.ts:41](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/key-registration.ts#L41)

Mark account as non-reward earning.

---

### selectionKey?

> `optional` **selectionKey**: `Uint8Array`

Defined in: [packages/transact/src/transactions/key-registration.ts:16](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/key-registration.ts#L16)

VRF public key (32 bytes).

---

### stateProofKey?

> `optional` **stateProofKey**: `Uint8Array`

Defined in: [packages/transact/src/transactions/key-registration.ts:21](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/key-registration.ts#L21)

State proof key (64 bytes).

---

### voteFirst?

> `optional` **voteFirst**: `bigint`

Defined in: [packages/transact/src/transactions/key-registration.ts:26](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/key-registration.ts#L26)

First round for which the participation key is valid.

---

### voteKey?

> `optional` **voteKey**: `Uint8Array`

Defined in: [packages/transact/src/transactions/key-registration.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/key-registration.ts#L11)

Root participation public key (32 bytes).

---

### voteKeyDilution?

> `optional` **voteKeyDilution**: `bigint`

Defined in: [packages/transact/src/transactions/key-registration.ts:36](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/key-registration.ts#L36)

Key dilution for the 2-level participation key.

---

### voteLast?

> `optional` **voteLast**: `bigint`

Defined in: [packages/transact/src/transactions/key-registration.ts:31](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/key-registration.ts#L31)

Last round for which the participation key is valid.
