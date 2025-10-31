---
title: AssetTransferTxn
type: interface
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [gtxn](/reference/algorand-typescript/api/gtxn/readme/) / [gtxn](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/readme/) / AssetTransferTxn

Defined in: [gtxn.ts:621](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L621)

A group transaction of type 'axfer'

## Properties

### assetAmount

> `readonly` **assetAmount**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:332](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L332)

value in Asset's units

---

### assetCloseTo

> `readonly` **assetCloseTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:344](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L344)

32 byte address

---

### assetReceiver

> `readonly` **assetReceiver**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:340](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L340)

32 byte address

---

### assetSender

> `readonly` **assetSender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:336](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L336)

32 byte address. Source of assets if Sender is the Asset's Clawback address.

---

### fee

> `readonly` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:283](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L283)

microalgos

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:287](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L287)

round number

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:291](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L291)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:316](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L316)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:295](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L295)

round number

---

### lease

> `readonly` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:303](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L303)

32 byte lease value

---

### note

> `readonly` **note**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L299)

Any data up to 1024 bytes

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:324](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L324)

32 byte Sender's new AuthAddr

---

### sender

> `readonly` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:279](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L279)

32 byte address

---

### txnId

> `readonly` **txnId**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:320](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L320)

The computed ID for this transaction. 32 bytes.

---

### type

> `readonly` **type**: [`AssetTransfer`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#assettransfer)

Defined in: [gtxn.ts:311](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L311)

Transaction type

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:307](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L307)

Transaction type as bytes

---

### xferAsset

> `readonly` **xferAsset**: [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [gtxn.ts:328](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L328)

Asset ID
