---
title: PaymentComposeFields
type: interface
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / PaymentComposeFields

Defined in: [itxn-compose.ts:7](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L7)

## Extends

- [`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/)

## Properties

### amount?

> `optional` **amount**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:621](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L621)

microalgos

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`amount`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#amount)

---

### closeRemainderTo?

> `optional` **closeRemainderTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:625](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L625)

32 byte address

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`closeRemainderTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#closeremainderto)

---

### fee?

> `optional` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:589](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L589)

microalgos

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`fee`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#fee)

---

### firstValid?

> `optional` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:593](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L593)

round number

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`firstValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#firstvalid)

---

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:597](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L597)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`firstValidTime`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#firstvalidtime)

---

### lastValid?

> `optional` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:601](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L601)

round number

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`lastValid`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#lastvalid)

---

### lease?

> `optional` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:609](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L609)

32 byte lease value

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`lease`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#lease)

---

### note?

> `optional` **note**: `string` \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:605](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L605)

Any data up to 1024 bytes

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`note`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#note)

---

### receiver?

> `optional` **receiver**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:617](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L617)

32 byte address

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`receiver`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#receiver)

---

### rekeyTo?

> `optional` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:613](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L613)

32 byte Sender's new AuthAddr

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`rekeyTo`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#rekeyto)

---

### sender?

> `optional` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/) \| [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:585](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L585)

32 byte address

#### Inherited from

[`PaymentFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`sender`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#sender)

---

### type

> **type**: [`Payment`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#payment)

Defined in: [itxn-compose.ts:8](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L8)
