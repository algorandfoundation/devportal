---
title: 'AssetFreezeInnerTxn'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [itxn](/reference/readme) / AssetFreezeInnerTxn

# Interface: AssetFreezeInnerTxn

Defined in: [packages/algo-ts/src/itxn.ts:25](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L25)

## Extends

- [`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn)

## Properties

### fee

> `readonly` **fee**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`fee`](/-internal-/interfaces/assetfreezetxn#fee)

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`firstValid`](/-internal-/interfaces/assetfreezetxn#firstvalid)

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`firstValidTime`](/-internal-/interfaces/assetfreezetxn#firstvalidtime)

---

### freezeAccount

> `readonly` **freezeAccount**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:270](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L270)

32 byte address of the account whose asset slot is being frozen or un-frozen

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`freezeAccount`](/-internal-/interfaces/assetfreezetxn#freezeaccount)

---

### freezeAsset

> `readonly` **freezeAsset**: [`Asset`](/type-aliases/asset)

Defined in: [packages/algo-ts/src/transactions.ts:265](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L265)

Asset ID being frozen or un-frozen

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`freezeAsset`](/-internal-/interfaces/assetfreezetxn#freezeasset)

---

### frozen

> `readonly` **frozen**: `boolean`

Defined in: [packages/algo-ts/src/transactions.ts:275](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L275)

The new frozen value

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`frozen`](/-internal-/interfaces/assetfreezetxn#frozen)

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`groupIndex`](/-internal-/interfaces/assetfreezetxn#groupindex)

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`lastValid`](/-internal-/interfaces/assetfreezetxn#lastvalid)

---

### lease

> `readonly` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`lease`](/-internal-/interfaces/assetfreezetxn#lease)

---

### note

> `readonly` **note**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`note`](/-internal-/interfaces/assetfreezetxn#note)

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`rekeyTo`](/-internal-/interfaces/assetfreezetxn#rekeyto)

---

### sender

> `readonly` **sender**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`sender`](/-internal-/interfaces/assetfreezetxn#sender)

---

### txnId

> `readonly` **txnId**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`txnId`](/-internal-/interfaces/assetfreezetxn#txnid)

---

### type

> `readonly` **type**: [`AssetFreeze`](/enumerations/transactiontype#assetfreeze)

Defined in: [packages/algo-ts/src/transactions.ts:279](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L279)

Transaction type as integer

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`type`](/-internal-/interfaces/assetfreezetxn#type)

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`AssetFreezeTxn`](/-internal-/interfaces/assetfreezetxn).[`typeBytes`](/-internal-/interfaces/assetfreezetxn#typebytes)
