---
title: PaymentComposeFields
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/readme/) / PaymentComposeFields

Defined in: [itxn-compose.ts:7](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L7)

## Extends

- [`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/)

## Properties

### amount?

> `optional` **amount**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:621](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L621)

microalgos

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`amount`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#amount)

---

### closeRemainderTo?

> `optional` **closeRemainderTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:625](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L625)

32 byte address

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`closeRemainderTo`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#closeremainderto)

---

### fee?

> `optional` **fee**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:589](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L589)

microalgos

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`fee`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:593](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L593)

round number

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`firstValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:597](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L597)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`firstValidTime`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#firstvalidtime)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:601](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L601)

round number

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`lastValid`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:609](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L609)

32 byte lease value

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`lease`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#lease)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:605](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L605)

Any data up to 1024 bytes

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`note`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#note)

---

### receiver?

> `optional` **receiver**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:617](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L617)

32 byte address

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`receiver`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#receiver)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:613](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L613)

32 byte Sender's new AuthAddr

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`rekeyTo`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#rekeyto)

---

### sender?

> `optional` **sender**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/) \| [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:585](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L585)

32 byte address

#### Inherited from

[`PaymentFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`sender`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/paymentfields/#sender)

---

### type

> **type**: [`Payment`](/docs/algorand-typescript/typescript/latest/api/index/enumerations/transactiontype/#payment)

Defined in: [itxn-compose.ts:8](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L8)
