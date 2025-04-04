---
title: 'AssetTransferTxn'
---

[**@algorandfoundation/algorand-typescript**](../../../../README.md)

---

[@algorandfoundation/algorand-typescript](../../../../README.md) / [index](../../../README.md) / [gtxn](../README.md) / AssetTransferTxn

# Interface: AssetTransferTxn

Defined in: [packages/algo-ts/src/gtxn.ts:45](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L45)

## Extends

- [`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md)

## Constructors

## Properties

### assetAmount

> `readonly` **assetAmount**: [`uint64`](../../../type-aliases/uint64.md)

Defined in: [packages/algo-ts/src/transactions.ts:239](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L239)

value in Asset's units

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`assetAmount`](../../../-internal-/interfaces/AssetTransferTxn.md#assetamount)

---

### assetCloseTo

> `readonly` **assetCloseTo**: [`Account`](../../../type-aliases/Account.md)

Defined in: [packages/algo-ts/src/transactions.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L254)

32 byte address

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`assetCloseTo`](../../../-internal-/interfaces/AssetTransferTxn.md#assetcloseto)

---

### assetReceiver

> `readonly` **assetReceiver**: [`Account`](../../../type-aliases/Account.md)

Defined in: [packages/algo-ts/src/transactions.ts:249](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L249)

32 byte address

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`assetReceiver`](../../../-internal-/interfaces/AssetTransferTxn.md#assetreceiver)

---

### assetSender

> `readonly` **assetSender**: [`Account`](../../../type-aliases/Account.md)

Defined in: [packages/algo-ts/src/transactions.ts:244](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L244)

32 byte address. Source of assets if Sender is the Asset's Clawback address.

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`assetSender`](../../../-internal-/interfaces/AssetTransferTxn.md#assetsender)

---

### fee

> `readonly` **fee**: [`uint64`](../../../type-aliases/uint64.md)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`fee`](../../../-internal-/interfaces/AssetTransferTxn.md#fee)

---

### firstValid

> `readonly` **firstValid**: [`uint64`](../../../type-aliases/uint64.md)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`firstValid`](../../../-internal-/interfaces/AssetTransferTxn.md#firstvalid)

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](../../../type-aliases/uint64.md)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`firstValidTime`](../../../-internal-/interfaces/AssetTransferTxn.md#firstvalidtime)

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](../../../type-aliases/uint64.md)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`groupIndex`](../../../-internal-/interfaces/AssetTransferTxn.md#groupindex)

---

### lastValid

> `readonly` **lastValid**: [`uint64`](../../../type-aliases/uint64.md)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`lastValid`](../../../-internal-/interfaces/AssetTransferTxn.md#lastvalid)

---

### lease

> `readonly` **lease**: [`bytes`](../../../type-aliases/bytes.md)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`lease`](../../../-internal-/interfaces/AssetTransferTxn.md#lease)

---

### note

> `readonly` **note**: [`bytes`](../../../type-aliases/bytes.md)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`note`](../../../-internal-/interfaces/AssetTransferTxn.md#note)

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](../../../type-aliases/Account.md)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`rekeyTo`](../../../-internal-/interfaces/AssetTransferTxn.md#rekeyto)

---

### sender

> `readonly` **sender**: [`Account`](../../../type-aliases/Account.md)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`sender`](../../../-internal-/interfaces/AssetTransferTxn.md#sender)

---

### txnId

> `readonly` **txnId**: [`bytes`](../../../type-aliases/bytes.md)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`txnId`](../../../-internal-/interfaces/AssetTransferTxn.md#txnid)

---

### type

> `readonly` **type**: [`AssetTransfer`](../../../enumerations/TransactionType.md#assettransfer)

Defined in: [packages/algo-ts/src/transactions.ts:258](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L258)

Transaction type as integer

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`type`](../../../-internal-/interfaces/AssetTransferTxn.md#type)

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](../../../type-aliases/bytes.md)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`typeBytes`](../../../-internal-/interfaces/AssetTransferTxn.md#typebytes)

---

### xferAsset

> `readonly` **xferAsset**: [`Asset`](../../../type-aliases/Asset.md)

Defined in: [packages/algo-ts/src/transactions.ts:234](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L234)

Asset ID

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn.md).[`xferAsset`](../../../-internal-/interfaces/AssetTransferTxn.md#xferasset)
