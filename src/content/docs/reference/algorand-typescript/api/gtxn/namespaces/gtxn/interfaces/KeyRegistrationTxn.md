---
title: KeyRegistrationTxn
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [gtxn](docs/_md/gtxn/README) / [gtxn](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/readme/) / KeyRegistrationTxn

Defined in: [gtxn.ts:605](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L605)

A group transaction of type 'keyreg'

## Properties

### fee

> `readonly` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:91](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L91)

microalgos

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:95](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L95)

round number

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:99](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L99)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:124](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L124)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:103](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L103)

round number

---

### lease

> `readonly` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:111](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L111)

32 byte lease value

---

### nonparticipation

> `readonly` **nonparticipation**: `boolean`

Defined in: [gtxn.ts:156](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L156)

Marks an account nonparticipating for rewards

---

### note

> `readonly` **note**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L107)

Any data up to 1024 bytes

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:132](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L132)

32 byte Sender's new AuthAddr

---

### selectionKey

> `readonly` **selectionKey**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:140](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L140)

32 byte address

---

### sender

> `readonly` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:87](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L87)

32 byte address

---

### stateProofKey

> `readonly` **stateProofKey**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`64`\>

Defined in: [gtxn.ts:160](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L160)

64 byte state proof public key

---

### txnId

> `readonly` **txnId**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:128](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L128)

The computed ID for this transaction. 32 bytes.

---

### type

> `readonly` **type**: [`KeyRegistration`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#keyregistration)

Defined in: [gtxn.ts:119](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L119)

Transaction type

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:115](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L115)

Transaction type as bytes

---

### voteFirst

> `readonly` **voteFirst**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:144](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L144)

The first round that the participation key is valid.

---

### voteKey

> `readonly` **voteKey**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:136](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L136)

32 byte address

---

### voteKeyDilution

> `readonly` **voteKeyDilution**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:152](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L152)

Dilution for the 2-level participation key

---

### voteLast

> `readonly` **voteLast**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L148)

The last round that the participation key is valid.
