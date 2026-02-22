---
editUrl: false
next: false
prev: false
title: "SignedTxnWithAD"
---

> **SignedTxnWithAD** = `object`

Defined in: [packages/algod\_client/src/models/block.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L139)

SignedTxnWithAD is a SignedTransaction with additional ApplyData.

## Properties

### applyData?

> `optional` **applyData**: [`ApplyData`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/applydata/)

Defined in: [packages/algod\_client/src/models/block.ts:143](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L143)

Apply data containing transaction execution information.

***

### signedTxn

> **signedTxn**: [`SignedTransaction`](/algokit-utils-ts/api/subpaths/transact/type-aliases/signedtransaction/)

Defined in: [packages/algod\_client/src/models/block.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L141)

The signed transaction.
