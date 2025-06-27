---
title: 'PaymentInnerTxn'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [itxn](/reference/readme) / PaymentInnerTxn

# Interface: PaymentInnerTxn

Defined in: [packages/algo-ts/src/itxn.ts:9](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L9)

A payment transaction

## Extends

- [`PaymentTxn`](/-internal-/interfaces/paymenttxn)

## Properties

### amount

> `readonly` **amount**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:105](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L105)

microalgos

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`amount`](/-internal-/interfaces/paymenttxn#amount)

---

### closeRemainderTo

> `readonly` **closeRemainderTo**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:110](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L110)

32 byte address

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`closeRemainderTo`](/-internal-/interfaces/paymenttxn#closeremainderto)

---

### fee

> `readonly` **fee**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`fee`](/-internal-/interfaces/paymenttxn#fee)

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`firstValid`](/-internal-/interfaces/paymenttxn#firstvalid)

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`firstValidTime`](/-internal-/interfaces/paymenttxn#firstvalidtime)

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`groupIndex`](/-internal-/interfaces/paymenttxn#groupindex)

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`lastValid`](/-internal-/interfaces/paymenttxn#lastvalid)

---

### lease

> `readonly` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`lease`](/-internal-/interfaces/paymenttxn#lease)

---

### note

> `readonly` **note**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`note`](/-internal-/interfaces/paymenttxn#note)

---

### receiver

> `readonly` **receiver**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:100](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L100)

32 byte address

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`receiver`](/-internal-/interfaces/paymenttxn#receiver)

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`rekeyTo`](/-internal-/interfaces/paymenttxn#rekeyto)

---

### sender

> `readonly` **sender**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`sender`](/-internal-/interfaces/paymenttxn#sender)

---

### txnId

> `readonly` **txnId**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`txnId`](/-internal-/interfaces/paymenttxn#txnid)

---

### type

> `readonly` **type**: [`Payment`](/enumerations/transactiontype#payment)

Defined in: [packages/algo-ts/src/transactions.ts:115](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L115)

Transaction type as integer

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`type`](/-internal-/interfaces/paymenttxn#type)

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`PaymentTxn`](/-internal-/interfaces/paymenttxn).[`typeBytes`](/-internal-/interfaces/paymenttxn#typebytes)
