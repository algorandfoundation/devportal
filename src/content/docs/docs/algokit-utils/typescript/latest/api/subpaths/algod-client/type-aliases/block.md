---
editUrl: false
next: false
prev: false
title: "Block"
---

> **Block** = `object`

Defined in: [packages/algod\_client/src/models/block.ts:407](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L407)

Block contains the BlockHeader and the list of transactions (Payset).

## Properties

### header

> **header**: [`BlockHeader`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/blockheader/)

Defined in: [packages/algod\_client/src/models/block.ts:409](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L409)

The block information (Header)

***

### payset

> **payset**: [`SignedTxnInBlock`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/signedtxninblock/)[]

Defined in: [packages/algod\_client/src/models/block.ts:412](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/algod_client/src/models/block.ts#L412)

[txns] Block transactions (Payset).
