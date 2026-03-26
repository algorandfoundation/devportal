---
editUrl: false
next: false
prev: false
title: 'Asset'
---

> **Asset** = `object`

Defined in: [reference.ts:127](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L127)

An Asset on the Algorand network.

## Properties

### clawback

> `readonly` **clawback**: [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [reference.ts:198](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L198)

Clawback address

---

### creator

> `readonly` **creator**: [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [reference.ts:203](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L203)

Creator address

---

### decimals

> `readonly` **decimals**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

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

> `readonly` **freeze**: [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [reference.ts:193](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L193)

Freeze address

---

### id

> `readonly` **id**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:143](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L143)

Returns the id of the Asset

---

### manager

> `readonly` **manager**: [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [reference.ts:183](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L183)

Manager address

---

### metadataHash

> `readonly` **metadataHash**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [reference.ts:178](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L178)

Arbitrary commitment

---

### name

> `readonly` **name**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [reference.ts:168](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L168)

Asset name

---

### reserve

> `readonly` **reserve**: [`Account`](/algorand-typescript/api/index/type-aliases/account/)

Defined in: [reference.ts:188](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L188)

Reserve address

---

### total

> `readonly` **total**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:148](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L148)

Total number of units of this asset

---

### unitName

> `readonly` **unitName**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [reference.ts:163](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L163)

Asset unit name

---

### url

> `readonly` **url**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [reference.ts:173](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L173)

URL with additional info about the asset

## Methods

### balance()

> **balance**(`account`): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:212](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L212)

Amount of the asset unit held by this account. Fails if the account has not
opted in to the asset.
Asset and supplied Account must be an available resource

#### Parameters

##### account

[`Account`](/algorand-typescript/api/index/type-aliases/account/)

Account

#### Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

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

[`Account`](/algorand-typescript/api/index/type-aliases/account/)

Account

#### Returns

`boolean`

isFrozen: boolean
