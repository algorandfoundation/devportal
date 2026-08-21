---
editUrl: false
next: false
prev: false
title: 'SignTxnRequest'
---

> **SignTxnRequest** = `object`

Defined in: [packages/kmd_client/src/models/sign-txn-request.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-txn-request.ts#L7)

The request for `POST /v1/transaction/sign`

## Properties

### publicKey?

> `optional` **publicKey**: `Uint8Array`

Defined in: [packages/kmd_client/src/models/sign-txn-request.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-txn-request.ts#L8)

---

### transaction

> **transaction**: `Uint8Array`

Defined in: [packages/kmd_client/src/models/sign-txn-request.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-txn-request.ts#L16)

Base64 encoding of msgpack encoding of a `Transaction` object
Note: SDK and goal usually generate `SignedTxn` objects
in that case, the field `txn` / `Transaction` of the
generated `SignedTxn` object needs to be used

---

### walletHandleToken

> **walletHandleToken**: `string`

Defined in: [packages/kmd_client/src/models/sign-txn-request.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-txn-request.ts#L17)

---

### walletPassword?

> `optional` **walletPassword**: `string`

Defined in: [packages/kmd_client/src/models/sign-txn-request.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/kmd_client/src/models/sign-txn-request.ts#L18)
