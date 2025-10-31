---
title: AssetTransferComposeFields
type: interface
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / AssetTransferComposeFields

Defined in: [itxn-compose.ts:16](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L16)

## Extends

- [`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/)

## Properties

### assetAmount?

> `optional` **assetAmount**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:811](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L811)

value in Asset's units

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetAmount`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetamount)

---

### assetCloseTo?

> `optional` **assetCloseTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:823](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L823)

32 byte address

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetCloseTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetcloseto)

---

### assetReceiver?

> `optional` **assetReceiver**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:819](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L819)

32 byte address

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetReceiver`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetreceiver)

---

### assetSender?

> `optional` **assetSender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:815](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L815)

32 byte address. Source of assets if Sender is the Asset's Clawback address.

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`assetSender`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#assetsender)

---

### fee?

> `optional` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:779](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L779)

microalgos

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`fee`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:783](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L783)

round number

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`firstValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:787](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L787)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`firstValidTime`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#firstvalidtime)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:791](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L791)

round number

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`lastValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:799](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L799)

32 byte lease value

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`lease`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#lease)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:795](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L795)

Any data up to 1024 bytes

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`note`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#note)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:803](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L803)

32 byte Sender's new AuthAddr

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`rekeyTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#rekeyto)

---

### sender?

> `optional` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:775](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L775)

32 byte address

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`sender`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#sender)

---

### type

> **type**: [`AssetTransfer`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#assettransfer)

Defined in: [itxn-compose.ts:17](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L17)

---

### xferAsset?

> `optional` **xferAsset**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:807](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L807)

Asset ID

#### Inherited from

[`AssetTransferFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/).[`xferAsset`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assettransferfields/#xferasset)
