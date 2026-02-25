---
editUrl: false
next: false
prev: false
title: 'SignMultisigTxnRequest'
---

> **SignMultisigTxnRequest** = `object`

Defined in: [packages/kmd_client/src/models/sign-multisig-txn-request.ts:9](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-multisig-txn-request.ts#L9)

The request for `POST /v1/multisig/sign`

## Properties

### partialMultisig?

> `optional` **partialMultisig**: [`MultisigSig`](/docs/algokit-utils/typescript/latest/api/subpaths/kmd-client/type-aliases/multisigsig/)

Defined in: [packages/kmd_client/src/models/sign-multisig-txn-request.ts:10](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-multisig-txn-request.ts#L10)

---

### publicKey

> **publicKey**: `Uint8Array`

Defined in: [packages/kmd_client/src/models/sign-multisig-txn-request.ts:11](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-multisig-txn-request.ts#L11)

---

### signer?

> `optional` **signer**: `Uint8Array`

Defined in: [packages/kmd_client/src/models/sign-multisig-txn-request.ts:12](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-multisig-txn-request.ts#L12)

---

### transaction

> **transaction**: `Uint8Array`

Defined in: [packages/kmd_client/src/models/sign-multisig-txn-request.ts:13](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-multisig-txn-request.ts#L13)

---

### walletHandleToken

> **walletHandleToken**: `string`

Defined in: [packages/kmd_client/src/models/sign-multisig-txn-request.ts:14](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-multisig-txn-request.ts#L14)

---

### walletPassword?

> `optional` **walletPassword**: `string`

Defined in: [packages/kmd_client/src/models/sign-multisig-txn-request.ts:15](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-multisig-txn-request.ts#L15)
