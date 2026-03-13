---
editUrl: false
next: false
prev: false
title: "AssetTransferFields"
---

Defined in: [itxn.ts:771](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L771)

## Extended by

- [`AssetTransferComposeFields`](/algorand-typescript/api/index/interfaces/assettransfercomposefields/)
- [`AnyTransactionComposeFields`](/algorand-typescript/api/index/interfaces/anytransactioncomposefields/)

## Properties

### assetAmount?

> `optional` **assetAmount**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:811](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L811)

value in Asset's units

***

### assetCloseTo?

> `optional` **assetCloseTo**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:823](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L823)

32 byte address

***

### assetReceiver?

> `optional` **assetReceiver**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:819](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L819)

32 byte address

***

### assetSender?

> `optional` **assetSender**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:815](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L815)

32 byte address. Source of assets if Sender is the Asset's Clawback address.

***

### fee?

> `optional` **fee**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:779](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L779)

microalgos

***

### firstValid?

> `optional` **firstValid**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:783](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L783)

round number

***

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:787](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L787)

UNIX timestamp of block before txn.FirstValid. Fails if negative

***

### lastValid?

> `optional` **lastValid**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:791](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L791)

round number

***

### lease?

> `optional` **lease**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:799](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L799)

32 byte lease value

***

### note?

> `optional` **note**: `string` \| [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:795](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L795)

Any data up to 1024 bytes

***

### rekeyTo?

> `optional` **rekeyTo**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:803](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L803)

32 byte Sender's new AuthAddr

***

### sender?

> `optional` **sender**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:775](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L775)

32 byte address

***

### xferAsset?

> `optional` **xferAsset**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:807](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L807)

Asset ID
