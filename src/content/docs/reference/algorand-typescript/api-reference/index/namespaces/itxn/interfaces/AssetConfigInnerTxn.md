---
title: 'AssetConfigInnerTxn'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [itxn](/reference/readme) / AssetConfigInnerTxn

# Interface: AssetConfigInnerTxn

Defined in: [packages/algo-ts/src/itxn.ts:17](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L17)

## Extends

- [`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn)

## Properties

### assetName

> `readonly` **assetName**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:188](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L188)

The asset name

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`assetName`](/-internal-/interfaces/assetconfigtxn#assetname)

---

### clawback

> `readonly` **clawback**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:218](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L218)

32 byte address

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`clawback`](/-internal-/interfaces/assetconfigtxn#clawback)

---

### configAsset

> `readonly` **configAsset**: [`Asset`](/type-aliases/asset)

Defined in: [packages/algo-ts/src/transactions.ts:163](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L163)

Asset ID in asset config transaction

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`configAsset`](/-internal-/interfaces/assetconfigtxn#configasset)

---

### createdAsset

> **createdAsset**: [`Asset`](/type-aliases/asset)

Defined in: [packages/algo-ts/src/transactions.ts:222](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L222)

Asset ID allocated by the creation of an ASA

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`createdAsset`](/-internal-/interfaces/assetconfigtxn#createdasset)

---

### decimals

> `readonly` **decimals**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:173](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L173)

Number of digits to display after the decimal place when displaying the asset

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`decimals`](/-internal-/interfaces/assetconfigtxn#decimals)

---

### defaultFrozen

> `readonly` **defaultFrozen**: `boolean`

Defined in: [packages/algo-ts/src/transactions.ts:178](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L178)

Whether the asset's slots are frozen by default or not, 0 or 1

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`defaultFrozen`](/-internal-/interfaces/assetconfigtxn#defaultfrozen)

---

### fee

> `readonly` **fee**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`fee`](/-internal-/interfaces/assetconfigtxn#fee)

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`firstValid`](/-internal-/interfaces/assetconfigtxn#firstvalid)

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`firstValidTime`](/-internal-/interfaces/assetconfigtxn#firstvalidtime)

---

### freeze

> `readonly` **freeze**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:213](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L213)

32 byte address

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`freeze`](/-internal-/interfaces/assetconfigtxn#freeze)

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`groupIndex`](/-internal-/interfaces/assetconfigtxn#groupindex)

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`lastValid`](/-internal-/interfaces/assetconfigtxn#lastvalid)

---

### lease

> `readonly` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`lease`](/-internal-/interfaces/assetconfigtxn#lease)

---

### manager

> `readonly` **manager**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:203](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L203)

32 byte address

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`manager`](/-internal-/interfaces/assetconfigtxn#manager)

---

### metadataHash

> `readonly` **metadataHash**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:198](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L198)

32 byte commitment to unspecified asset metadata

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`metadataHash`](/-internal-/interfaces/assetconfigtxn#metadatahash)

---

### note

> `readonly` **note**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`note`](/-internal-/interfaces/assetconfigtxn#note)

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`rekeyTo`](/-internal-/interfaces/assetconfigtxn#rekeyto)

---

### reserve

> `readonly` **reserve**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:208](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L208)

32 byte address

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`reserve`](/-internal-/interfaces/assetconfigtxn#reserve)

---

### sender

> `readonly` **sender**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`sender`](/-internal-/interfaces/assetconfigtxn#sender)

---

### total

> `readonly` **total**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:168](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L168)

Total number of units of this asset created

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`total`](/-internal-/interfaces/assetconfigtxn#total)

---

### txnId

> `readonly` **txnId**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`txnId`](/-internal-/interfaces/assetconfigtxn#txnid)

---

### type

> `readonly` **type**: [`AssetConfig`](/enumerations/transactiontype#assetconfig)

Defined in: [packages/algo-ts/src/transactions.ts:227](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L227)

Transaction type as integer

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`type`](/-internal-/interfaces/assetconfigtxn#type)

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`typeBytes`](/-internal-/interfaces/assetconfigtxn#typebytes)

---

### unitName

> `readonly` **unitName**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:183](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L183)

Unit name of the asset

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`unitName`](/-internal-/interfaces/assetconfigtxn#unitname)

---

### url

> `readonly` **url**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:193](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L193)

URL

#### Inherited from

[`AssetConfigTxn`](/-internal-/interfaces/assetconfigtxn).[`url`](/-internal-/interfaces/assetconfigtxn#url)
