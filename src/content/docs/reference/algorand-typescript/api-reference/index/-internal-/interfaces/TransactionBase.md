---
title: 'TransactionBase'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [\<internal\>](/reference/readme) / TransactionBase

# Interface: TransactionBase

Defined in: [packages/algo-ts/src/transactions.ts:35](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L35)

## Extended by

- [`PaymentTxn`](/reference/algorand-typescript/paymenttxn)
- [`KeyRegistrationTxn`](/reference/algorand-typescript/keyregistrationtxn)
- [`AssetConfigTxn`](/reference/algorand-typescript/assetconfigtxn)
- [`AssetTransferTxn`](/reference/algorand-typescript/assettransfertxn)
- [`AssetFreezeTxn`](/reference/algorand-typescript/assetfreezetxn)
- [`ApplicationTxn`](/reference/algorand-typescript/applicationtxn)

## Properties

### fee

> `readonly` **fee**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

---

### lease

> `readonly` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

---

### note

> `readonly` **note**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

---

### sender

> `readonly` **sender**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

---

### txnId

> `readonly` **txnId**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes
