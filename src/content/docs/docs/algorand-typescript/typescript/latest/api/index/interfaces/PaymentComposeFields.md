---
editUrl: false
next: false
prev: false
title: "PaymentComposeFields"
---

Defined in: [itxn-compose.ts:7](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L7)

## Extends

- [`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/)

## Properties

### amount?

> `optional` **amount**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:621](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L621)

microalgos

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`amount`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#amount)

***

### closeRemainderTo?

> `optional` **closeRemainderTo**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:625](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L625)

32 byte address

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`closeRemainderTo`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#closeremainderto)

***

### fee?

> `optional` **fee**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:589](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L589)

microalgos

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`fee`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#fee)

***

### firstValid?

> `optional` **firstValid**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:593](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L593)

round number

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`firstValid`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#firstvalid)

***

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:597](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L597)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`firstValidTime`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#firstvalidtime)

***

### lastValid?

> `optional` **lastValid**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [itxn.ts:601](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L601)

round number

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`lastValid`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#lastvalid)

***

### lease?

> `optional` **lease**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [itxn.ts:609](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L609)

32 byte lease value

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`lease`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#lease)

***

### note?

> `optional` **note**: `string` \| [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [itxn.ts:605](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L605)

Any data up to 1024 bytes

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`note`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#note)

***

### receiver?

> `optional` **receiver**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:617](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L617)

32 byte address

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`receiver`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#receiver)

***

### rekeyTo?

> `optional` **rekeyTo**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:613](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L613)

32 byte Sender's new AuthAddr

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`rekeyTo`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#rekeyto)

***

### sender?

> `optional` **sender**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/) \| [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [itxn.ts:585](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L585)

32 byte address

#### Inherited from

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/).[`sender`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/#sender)

***

### type

> **type**: [`Payment`](/algorand-typescript/api/index/enumerations/transactiontype/#payment)

Defined in: [itxn-compose.ts:8](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn-compose.ts#L8)
