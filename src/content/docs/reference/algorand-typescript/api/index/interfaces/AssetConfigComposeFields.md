---
title: AssetConfigComposeFields
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / AssetConfigComposeFields

Defined in: [itxn-compose.ts:13](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L13)

## Extends

- [`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/)

## Properties

### assetName?

> `optional` **assetName**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:745](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L745)

The asset name

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`assetName`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#assetname)

---

### clawback?

> `optional` **clawback**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:769](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L769)

32 byte address

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`clawback`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#clawback)

---

### configAsset?

> `optional` **configAsset**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [itxn.ts:725](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L725)

Asset ID in asset config transaction

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`configAsset`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#configasset)

---

### decimals?

> `optional` **decimals**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:733](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L733)

Number of digits to display after the decimal place when displaying the asset

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`decimals`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#decimals)

---

### defaultFrozen?

> `optional` **defaultFrozen**: `boolean`

Defined in: [itxn.ts:737](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L737)

Whether the asset's slots are frozen by default or not, 0 or 1

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`defaultFrozen`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#defaultfrozen)

---

### fee?

> `optional` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:697](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L697)

microalgos

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`fee`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:701](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L701)

round number

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`firstValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:705](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L705)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`firstValidTime`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#firstvalidtime)

---

### freeze?

> `optional` **freeze**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:765](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L765)

32 byte address

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`freeze`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#freeze)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:709](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L709)

round number

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`lastValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:717](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L717)

32 byte lease value

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`lease`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#lease)

---

### manager?

> `optional` **manager**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:757](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L757)

32 byte address

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`manager`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#manager)

---

### metadataHash?

> `optional` **metadataHash**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:753](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L753)

32 byte commitment to unspecified asset metadata

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`metadataHash`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#metadatahash)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:713](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L713)

Any data up to 1024 bytes

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`note`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#note)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:721](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L721)

32 byte Sender's new AuthAddr

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`rekeyTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#rekeyto)

---

### reserve?

> `optional` **reserve**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:761](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L761)

32 byte address

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`reserve`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#reserve)

---

### sender?

> `optional` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:693](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L693)

32 byte address

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`sender`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#sender)

---

### total?

> `optional` **total**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:729](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L729)

Total number of units of this asset created

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`total`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#total)

---

### type

> **type**: [`AssetConfig`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#assetconfig)

Defined in: [itxn-compose.ts:14](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L14)

---

### unitName?

> `optional` **unitName**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:741](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L741)

Unit name of the asset

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`unitName`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#unitname)

---

### url?

> `optional` **url**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:749](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L749)

URL

#### Inherited from

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/).[`url`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/#url)
