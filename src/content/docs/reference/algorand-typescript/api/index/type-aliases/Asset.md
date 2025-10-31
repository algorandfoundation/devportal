---
title: Asset
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / Asset

> **Asset** = `object`

Defined in: [reference.ts:127](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L127)

Creates a new Asset object represent the asset id 0 (an invalid ID)

## Properties

### clawback

> `readonly` **clawback**: [`Account`](Account)

Defined in: [reference.ts:198](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L198)

Clawback address

---

### creator

> `readonly` **creator**: [`Account`](Account)

Defined in: [reference.ts:203](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L203)

Creator address

---

### decimals

> `readonly` **decimals**: [`uint64`](uint64)

Defined in: [reference.ts:153](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L153)

#### See

AssetParams.decimals

---

### defaultFrozen

> `readonly` **defaultFrozen**: `boolean`

Defined in: [reference.ts:158](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L158)

Frozen by default or not

---

### freeze

> `readonly` **freeze**: [`Account`](Account)

Defined in: [reference.ts:193](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L193)

Freeze address

---

### id

> `readonly` **id**: [`uint64`](uint64)

Defined in: [reference.ts:143](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L143)

Returns the id of the Asset

---

### manager

> `readonly` **manager**: [`Account`](Account)

Defined in: [reference.ts:183](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L183)

Manager address

---

### metadataHash

> `readonly` **metadataHash**: [`bytes`](bytes)\<`32`\>

Defined in: [reference.ts:178](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L178)

Arbitrary commitment

---

### name

> `readonly` **name**: [`bytes`](bytes)

Defined in: [reference.ts:168](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L168)

Asset name

---

### reserve

> `readonly` **reserve**: [`Account`](Account)

Defined in: [reference.ts:188](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L188)

Reserve address

---

### total

> `readonly` **total**: [`uint64`](uint64)

Defined in: [reference.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L148)

Total number of units of this asset

---

### unitName

> `readonly` **unitName**: [`bytes`](bytes)

Defined in: [reference.ts:163](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L163)

Asset unit name

---

### url

> `readonly` **url**: [`bytes`](bytes)

Defined in: [reference.ts:173](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L173)

URL with additional info about the asset

## Methods

### balance()

> **balance**(`account`): [`uint64`](uint64)

Defined in: [reference.ts:212](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L212)

Amount of the asset unit held by this account. Fails if the account has not
opted in to the asset.
Asset and supplied Account must be an available resource

#### Parameters

##### account

[`Account`](Account)

Account

#### Returns

[`uint64`](uint64)

balance: uint64

---

### frozen()

> **frozen**(`account`): `boolean`

Defined in: [reference.ts:221](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L221)

Is the asset frozen or not. Fails if the account has not
opted in to the asset.
Asset and supplied Account must be an available resource

#### Parameters

##### account

[`Account`](Account)

Account

#### Returns

`boolean`

isFrozen: boolean
