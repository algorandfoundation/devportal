---
title: 'AssetFreezeFields'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [itxn](/reference/readme) / AssetFreezeFields

# Interface: AssetFreezeFields

Defined in: [packages/algo-ts/src/itxn.ts:152](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L152)

## Extends

- [`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields)

## Properties

### fee?

> `optional` **fee**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:47](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L47)

microalgos

#### Inherited from

[`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields).[`fee`](/reference/algorand-typescript/commontransactionfields#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:52](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L52)

round number

#### Inherited from

[`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields).[`firstValid`](/reference/algorand-typescript/commontransactionfields#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:57](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L57)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields).[`firstValidTime`](/reference/algorand-typescript/commontransactionfields#firstvalidtime)

---

### freezeAccount?

> `optional` **freezeAccount**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:154](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L154)

---

### freezeAsset

> **freezeAsset**: [`AssetInput`](/-internal-/type-aliases/assetinput)

Defined in: [packages/algo-ts/src/itxn.ts:153](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L153)

---

### frozen?

> `optional` **frozen**: `boolean`

Defined in: [packages/algo-ts/src/itxn.ts:155](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L155)

---

### lease?

> `optional` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:67](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L67)

32 byte lease value

#### Inherited from

[`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields).[`lease`](/reference/algorand-typescript/commontransactionfields#lease)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:62](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L62)

Any data up to 1024 bytes

#### Inherited from

[`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields).[`note`](/reference/algorand-typescript/commontransactionfields#note)

---

### rekeyTo?

> `optional` **rekeyTo**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:72](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L72)

32 byte Sender's new AuthAddr

#### Inherited from

[`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields).[`rekeyTo`](/reference/algorand-typescript/commontransactionfields#rekeyto)

---

### sender?

> `optional` **sender**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:42](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L42)

32 byte address

#### Inherited from

[`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields).[`sender`](/reference/algorand-typescript/commontransactionfields#sender)
