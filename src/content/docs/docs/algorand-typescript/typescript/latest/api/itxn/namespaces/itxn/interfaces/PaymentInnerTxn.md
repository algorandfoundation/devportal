---
title: PaymentInnerTxn
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [itxn](/docs/algorand-typescript/typescript/latest/api/itxn/readme/) / [itxn](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/readme/) / PaymentInnerTxn

Defined in: [itxn.ts:13](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L13)

An inner transaction of type 'pay'

## Properties

### amount

> `readonly` **amount**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:72](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L72)

microalgos

---

### closeRemainderTo

> `readonly` **closeRemainderTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

Defined in: [itxn.ts:76](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L76)

32 byte address

---

### fee

> `readonly` **fee**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:23](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L23)

microalgos

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:27](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L27)

round number

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:31](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L31)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:56](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L56)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:35](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L35)

round number

---

### lease

> `readonly` **lease**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:43](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L43)

32 byte lease value

---

### note

> `readonly` **note**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L39)

Any data up to 1024 bytes

---

### receiver

> `readonly` **receiver**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

Defined in: [itxn.ts:68](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L68)

32 byte address

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

Defined in: [itxn.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L64)

32 byte Sender's new AuthAddr

---

### sender

> `readonly` **sender**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

Defined in: [itxn.ts:19](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L19)

32 byte address

---

### txnId

> `readonly` **txnId**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:60](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L60)

The computed ID for this transaction. 32 bytes.

---

### type

> `readonly` **type**: [`Payment`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/transactiontype/#payment)

Defined in: [itxn.ts:51](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L51)

Transaction type

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:47](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L47)

Transaction type as bytes
