---
title: 'KeyRegistrationInnerTxn'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/readme) / [itxn](/reference/readme) / KeyRegistrationInnerTxn

# Interface: KeyRegistrationInnerTxn

Defined in: [packages/algo-ts/src/itxn.ts:13](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L13)

## Extends

- [`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn)

## Properties

### fee

> `readonly` **fee**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`fee`](/-internal-/interfaces/keyregistrationtxn#fee)

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`firstValid`](/-internal-/interfaces/keyregistrationtxn#firstvalid)

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`firstValidTime`](/-internal-/interfaces/keyregistrationtxn#firstvalidtime)

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`groupIndex`](/-internal-/interfaces/keyregistrationtxn#groupindex)

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`lastValid`](/-internal-/interfaces/keyregistrationtxn#lastvalid)

---

### lease

> `readonly` **lease**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`lease`](/-internal-/interfaces/keyregistrationtxn#lease)

---

### nonparticipation

> `readonly` **nonparticipation**: `boolean`

Defined in: [packages/algo-ts/src/transactions.ts:147](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L147)

Marks an account nonparticipating for rewards

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`nonparticipation`](/-internal-/interfaces/keyregistrationtxn#nonparticipation)

---

### note

> `readonly` **note**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`note`](/-internal-/interfaces/keyregistrationtxn#note)

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`rekeyTo`](/-internal-/interfaces/keyregistrationtxn#rekeyto)

---

### selectionKey

> `readonly` **selectionKey**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:127](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L127)

32 byte address

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`selectionKey`](/-internal-/interfaces/keyregistrationtxn#selectionkey)

---

### sender

> `readonly` **sender**: [`Account`](/type-aliases/account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`sender`](/-internal-/interfaces/keyregistrationtxn#sender)

---

### stateProofKey

> `readonly` **stateProofKey**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:152](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L152)

64 byte state proof public key

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`stateProofKey`](/-internal-/interfaces/keyregistrationtxn#stateproofkey)

---

### txnId

> `readonly` **txnId**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`txnId`](/-internal-/interfaces/keyregistrationtxn#txnid)

---

### type

> `readonly` **type**: [`KeyRegistration`](/enumerations/transactiontype#keyregistration)

Defined in: [packages/algo-ts/src/transactions.ts:156](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L156)

Transaction type as integer

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`type`](/-internal-/interfaces/keyregistrationtxn#type)

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`typeBytes`](/-internal-/interfaces/keyregistrationtxn#typebytes)

---

### voteFirst

> `readonly` **voteFirst**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:132](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L132)

The first round that the participation key is valid.

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`voteFirst`](/-internal-/interfaces/keyregistrationtxn#votefirst)

---

### voteKey

> `readonly` **voteKey**: [`bytes`](/type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:122](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L122)

32 byte address

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`voteKey`](/-internal-/interfaces/keyregistrationtxn#votekey)

---

### voteKeyDilution

> `readonly` **voteKeyDilution**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:142](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L142)

Dilution for the 2-level participation key

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`voteKeyDilution`](/-internal-/interfaces/keyregistrationtxn#votekeydilution)

---

### voteLast

> `readonly` **voteLast**: [`uint64`](/type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:137](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L137)

The last round that the participation key is valid.

#### Inherited from

[`KeyRegistrationTxn`](/-internal-/interfaces/keyregistrationtxn).[`voteLast`](/-internal-/interfaces/keyregistrationtxn#votelast)
