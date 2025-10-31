---
title: AssetConfigTxn
type: interface
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [gtxn](/reference/algorand-typescript/api/gtxn/readme/) / [gtxn](/reference/algorand-typescript/api/gtxn/namespaces/gtxn/readme/) / AssetConfigTxn

Defined in: [gtxn.ts:613](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L613)

A group transaction of type 'acfg'

## Properties

### assetName

> `readonly` **assetName**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:244](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L244)

The asset name

---

### clawback

> `readonly` **clawback**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:268](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L268)

32 byte address

---

### configAsset

> `readonly` **configAsset**: [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [gtxn.ts:220](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L220)

Asset ID in asset config transaction

---

### createdAsset

> `readonly` **createdAsset**: [`Asset`](/reference/algorand-typescript/api/index/type-aliases/asset/)

Defined in: [gtxn.ts:224](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L224)

The asset created by this transaction

---

### decimals

> `readonly` **decimals**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:232](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L232)

Number of digits to display after the decimal place when displaying the asset

---

### defaultFrozen

> `readonly` **defaultFrozen**: `boolean`

Defined in: [gtxn.ts:236](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L236)

Whether the asset's slots are frozen by default or not, 0 or 1

---

### fee

> `readonly` **fee**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:175](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L175)

microalgos

---

### firstValid

> `readonly` **firstValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:179](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L179)

round number

---

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:183](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L183)

UNIX timestamp of block before txn.FirstValid. Fails if negative

---

### freeze

> `readonly` **freeze**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:264](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L264)

32 byte address

---

### groupIndex

> `readonly` **groupIndex**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:208](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L208)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

---

### lastValid

> `readonly` **lastValid**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:187](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L187)

round number

---

### lease

> `readonly` **lease**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:195](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L195)

32 byte lease value

---

### manager

> `readonly` **manager**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:256](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L256)

32 byte address

---

### metadataHash

> `readonly` **metadataHash**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:252](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L252)

32 byte commitment to unspecified asset metadata

---

### note

> `readonly` **note**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:191](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L191)

Any data up to 1024 bytes

---

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:216](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L216)

32 byte Sender's new AuthAddr

---

### reserve

> `readonly` **reserve**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:260](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L260)

32 byte address

---

### sender

> `readonly` **sender**: [`Account`](/reference/algorand-typescript/api/index/type-aliases/account/)

Defined in: [gtxn.ts:171](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L171)

32 byte address

---

### total

> `readonly` **total**: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [gtxn.ts:228](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L228)

Total number of units of this asset created

---

### txnId

> `readonly` **txnId**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [gtxn.ts:212](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L212)

The computed ID for this transaction. 32 bytes.

---

### type

> `readonly` **type**: [`AssetConfig`](/reference/algorand-typescript/api/index/enumerations/transactiontype/#assetconfig)

Defined in: [gtxn.ts:203](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L203)

Transaction type

---

### typeBytes

> `readonly` **typeBytes**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:199](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L199)

Transaction type as bytes

---

### unitName

> `readonly` **unitName**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:240](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L240)

Unit name of the asset

---

### url

> `readonly` **url**: [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [gtxn.ts:248](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L248)

URL
