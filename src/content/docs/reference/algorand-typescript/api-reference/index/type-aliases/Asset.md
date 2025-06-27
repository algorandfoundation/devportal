---
title: 'Asset'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / Asset

# Type Alias: Asset

> **Asset**: `object`

Defined in: [packages/algo-ts/src/reference.ts:122](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L122)

An Asset on the Algorand network.

## Type declaration

### clawback

> `readonly` **clawback**: [`Account`](/reference/algorand-typescript/account)

Clawback address

### creator

> `readonly` **creator**: [`Account`](/reference/algorand-typescript/account)

Creator address

### decimals

> `readonly` **decimals**: [`uint64`](/reference/algorand-typescript/uint64)

#### See

AssetParams.decimals

### defaultFrozen

> `readonly` **defaultFrozen**: `boolean`

Frozen by default or not

### freeze

> `readonly` **freeze**: [`Account`](/reference/algorand-typescript/account)

Freeze address

### id

> `readonly` **id**: [`uint64`](/reference/algorand-typescript/uint64)

Returns the id of the Asset

### manager

> `readonly` **manager**: [`Account`](/reference/algorand-typescript/account)

Manager address

### metadataHash

> `readonly` **metadataHash**: [`bytes`](/reference/algorand-typescript/bytes)

Arbitrary commitment

### name

> `readonly` **name**: [`bytes`](/reference/algorand-typescript/bytes)

Asset name

### reserve

> `readonly` **reserve**: [`Account`](/reference/algorand-typescript/account)

Reserve address

### total

> `readonly` **total**: [`uint64`](/reference/algorand-typescript/uint64)

Total number of units of this asset

### unitName

> `readonly` **unitName**: [`bytes`](/reference/algorand-typescript/bytes)

Asset unit name

### url

> `readonly` **url**: [`bytes`](/reference/algorand-typescript/bytes)

URL with additional info about the asset

### balance()

Amount of the asset unit held by this account. Fails if the account has not
opted in to the asset.
Asset and supplied Account must be an available resource

#### Parameters

##### account

[`Account`](/reference/algorand-typescript/account)

Account

#### Returns

[`uint64`](/reference/algorand-typescript/uint64)

balance: uint64

### frozen()

Is the asset frozen or not. Fails if the account has not
opted in to the asset.
Asset and supplied Account must be an available resource

#### Parameters

##### account

[`Account`](/reference/algorand-typescript/account)

Account

#### Returns

`boolean`

isFrozen: boolean
