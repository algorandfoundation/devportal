---
title: 'PaymentTxn'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [\<internal\>](/reference/readme) / PaymentTxn

# Interface: PaymentTxn

Defined in: [packages/algo-ts/src/transactions.ts:96](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L96)

A payment transaction

## Extends

- [`TransactionBase`](/reference/algorand-typescript/transactionbase)

## Extended by

- [`PaymentInnerTxn`](/namespaces/itxn/interfaces/paymentinnertxn)
- [`PaymentTxn`](/namespaces/gtxn/interfaces/paymenttxn)

## Properties

### amount

> `readonly` **amount**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:105](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L105)

microalgos

---

### closeRemainderTo

> `readonly` **closeRemainderTo**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:110](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L110)

32 byte address

---

### fee

> `readonly` **fee**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`fee`](/reference/algorand-typescript/transactionbase#fee)

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`firstValid`](/reference/algorand-typescript/transactionbase#firstvalid)

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`firstValidTime`](/reference/algorand-typescript/transactionbase#firstvalidtime)

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`groupIndex`](/reference/algorand-typescript/transactionbase#groupindex)

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`lastValid`](/reference/algorand-typescript/transactionbase#lastvalid)

---

### lease

> `readonly` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`lease`](/reference/algorand-typescript/transactionbase#lease)

---

### note

> `readonly` **note**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`note`](/reference/algorand-typescript/transactionbase#note)

---

### receiver

> `readonly` **receiver**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:100](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L100)

32 byte address

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`rekeyTo`](/reference/algorand-typescript/transactionbase#rekeyto)

---

### sender

> `readonly` **sender**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`sender`](/reference/algorand-typescript/transactionbase#sender)

---

### txnId

> `readonly` **txnId**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`txnId`](/reference/algorand-typescript/transactionbase#txnid)

---

### type

> `readonly` **type**: [`Payment`](/enumerations/transactiontype#payment)

Defined in: [packages/algo-ts/src/transactions.ts:115](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L115)

Transaction type as integer

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`TransactionBase`](/reference/algorand-typescript/transactionbase).[`typeBytes`](/reference/algorand-typescript/transactionbase#typebytes)
