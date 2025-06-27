---
title: 'CommonTransactionFields'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [itxn](/reference/readme) / CommonTransactionFields

# Interface: CommonTransactionFields

Defined in: [packages/algo-ts/src/itxn.ts:38](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L38)

## Extended by

- [`PaymentFields`](/reference/algorand-typescript/paymentfields)
- [`KeyRegistrationFields`](/reference/algorand-typescript/keyregistrationfields)
- [`AssetTransferFields`](/reference/algorand-typescript/assettransferfields)
- [`AssetConfigFields`](/reference/algorand-typescript/assetconfigfields)
- [`AssetFreezeFields`](/reference/algorand-typescript/assetfreezefields)
- [`ApplicationCallFields`](/reference/algorand-typescript/applicationcallfields)

## Properties

### fee?

> `optional` **fee**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:47](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L47)

microalgos

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:52](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L52)

round number

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:57](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L57)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### lease?

> `optional` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:67](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L67)

32 byte lease value

---

### note?

> `optional` **note**: `string` \| [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:62](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L62)

Any data up to 1024 bytes

---

### rekeyTo?

> `optional` **rekeyTo**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:72](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L72)

32 byte Sender's new AuthAddr

---

### sender?

> `optional` **sender**: [`AccountInput`](/-internal-/type-aliases/accountinput)

Defined in: [packages/algo-ts/src/itxn.ts:42](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L42)

32 byte address
