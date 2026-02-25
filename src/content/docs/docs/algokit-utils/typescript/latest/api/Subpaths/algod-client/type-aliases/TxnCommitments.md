---
editUrl: false
next: false
prev: false
title: 'TxnCommitments'
---

> **TxnCommitments** = `object`

Defined in: [packages/algod_client/src/models/block.ts:216](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L216)

Transaction commitment hashes for the block.

## Properties

### nativeSha512_256Commitment

> **nativeSha512_256Commitment**: `Uint8Array`

Defined in: [packages/algod_client/src/models/block.ts:218](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L218)

[txn] Root of transaction merkle tree using SHA512_256.

---

### sha256Commitment?

> `optional` **sha256Commitment**: `Uint8Array`

Defined in: [packages/algod_client/src/models/block.ts:220](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L220)

[txn256] Root of transaction vector commitment using SHA256.

---

### sha512Commitment?

> `optional` **sha512Commitment**: `Uint8Array`

Defined in: [packages/algod_client/src/models/block.ts:222](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L222)

[txn512] Root of transaction vector commitment using SHA512.
