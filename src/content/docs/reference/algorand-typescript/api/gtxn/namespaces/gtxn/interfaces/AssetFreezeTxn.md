---
title: AssetFreezeTxn
type: interface
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [gtxn](docs/_md/gtxn/README) / [gtxn](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/readme/) / AssetFreezeTxn

Defined in: [gtxn.ts:629](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L629)

A group transaction of type 'afrz'

## Properties

### fee

> `readonly` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:359](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L359)

microalgos

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:363](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L363)

round number

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:367](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L367)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### freezeAccount

> `readonly` **freezeAccount**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:408](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L408)

32 byte address of the account whose asset slot is being frozen or un-frozen

---

### freezeAsset

> `readonly` **freezeAsset**: [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [gtxn.ts:404](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L404)

Asset ID being frozen or un-frozen

---

### frozen

> `readonly` **frozen**: `boolean`

Defined in: [gtxn.ts:412](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L412)

The new frozen value

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:392](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L392)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:371](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L371)

round number

---

### lease

> `readonly` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:379](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L379)

32 byte lease value

---

### note

> `readonly` **note**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:375](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L375)

Any data up to 1024 bytes

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:400](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L400)

32 byte Sender's new AuthAddr

---

### sender

> `readonly` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:355](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L355)

32 byte address

---

### txnId

> `readonly` **txnId**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:396](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L396)

The computed ID for this transaction. 32 bytes.

---

### type

> `readonly` **type**: [`AssetFreeze`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#assetfreeze)

Defined in: [gtxn.ts:387](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L387)

Transaction type

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:383](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L383)

Transaction type as bytes
