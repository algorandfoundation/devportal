---
editUrl: false
next: false
prev: false
title: 'AssetTransferComposeFields'
---

Defined in: [itxn-compose.ts:16](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L16)

## Extends

- [`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/)

## Properties

### assetAmount?

> `optional` **assetAmount**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:811](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L811)

value in Asset's units

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetAmount`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetamount)

---

### assetCloseTo?

> `optional` **assetCloseTo**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:823](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L823)

32 byte address

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetCloseTo`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetcloseto)

---

### assetReceiver?

> `optional` **assetReceiver**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:819](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L819)

32 byte address

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetReceiver`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetreceiver)

---

### assetSender?

> `optional` **assetSender**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:815](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L815)

32 byte address. Source of assets if Sender is the Asset's Clawback address.

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetSender`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetsender)

---

### fee?

> `optional` **fee**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:779](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L779)

microalgos

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`fee`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:783](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L783)

round number

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`firstValid`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:787](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L787)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`firstValidTime`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#firstvalidtime)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:791](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L791)

round number

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`lastValid`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:799](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L799)

32 byte lease value

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`lease`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#lease)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:795](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L795)

Any data up to 1024 bytes

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`note`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#note)

---

### rekeyTo?

> `optional` **rekeyTo**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:803](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L803)

32 byte Sender's new AuthAddr

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`rekeyTo`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#rekeyto)

---

### sender?

> `optional` **sender**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:775](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L775)

32 byte address

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`sender`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#sender)

---

### type

> **type**: [`AssetTransfer`](/algorand-typescript/api/index/enumerations/transactiontype/#assettransfer)

Defined in: [itxn-compose.ts:17](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L17)

---

### xferAsset?

> `optional` **xferAsset**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:807](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L807)

Asset ID

#### Inherited from

[`AssetTransferFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`xferAsset`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#xferasset)
