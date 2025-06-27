---
title: 'AssetConfigFields'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [itxn](/reference/readme) / AssetConfigFields

# Interface: AssetConfigFields

Defined in: [packages/algo-ts/src/itxn.ts:138](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L138)

## Extends

- [`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields)

## Properties

### assetName?

> `optional` **assetName**: `string` \| [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:144](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L144)

---

### clawback?

> `optional` **clawback**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:143](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L143)

---

### configAsset?

> `optional` **configAsset**: [`AssetInput`](/-internal-/type-aliases/assetinput)

Defined in: [packages/algo-ts/src/itxn.ts:139](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L139)

---

### decimals?

> `optional` **decimals**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:147](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L147)

---

### defaultFrozen?

> `optional` **defaultFrozen**: `boolean`

Defined in: [packages/algo-ts/src/itxn.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L148)

---

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

### freeze?

> `optional` **freeze**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:142](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L142)

---

### lease?

> `optional` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:67](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L67)

32 byte lease value

#### Inherited from

[`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields).[`lease`](/reference/algorand-typescript/commontransactionfields#lease)

---

### manager?

> `optional` **manager**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:140](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L140)

---

### metadataHash?

> `optional` **metadataHash**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:150](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L150)

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

### reserve?

> `optional` **reserve**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:141](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L141)

---

### sender?

> `optional` **sender**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:42](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L42)

32 byte address

#### Inherited from

[`CommonTransactionFields`](/reference/algorand-typescript/commontransactionfields).[`sender`](/reference/algorand-typescript/commontransactionfields#sender)

---

### total?

> `optional` **total**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:146](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L146)

---

### unitName?

> `optional` **unitName**: `string` \| [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:145](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L145)

---

### url?

> `optional` **url**: `string` \| [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:149](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L149)
