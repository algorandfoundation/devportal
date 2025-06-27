---
title: 'Account'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / Account

# Type Alias: Account

> **Account**: `object`

Defined in: [packages/algo-ts/src/reference.ts:109](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L109)

Represents an Algorand Account and exposes properties and methods for reading account data

## Type declaration

### authAddress

> `readonly` **authAddress**: [`Account`](/reference/algorand-typescript/account)

Address the account is rekeyed to

Account must be an available resource

### balance

> `readonly` **balance**: [`uint64`](/reference/algorand-typescript/uint64)

Account balance in microalgos

Account must be an available resource

### bytes

> `readonly` **bytes**: [`bytes`](/reference/algorand-typescript/bytes)

Get the accounts address in bytes

### minBalance

> `readonly` **minBalance**: [`uint64`](/reference/algorand-typescript/uint64)

Minimum required balance for account, in microalgos

Account must be an available resource

### totalAppsCreated

> `readonly` **totalAppsCreated**: [`uint64`](/reference/algorand-typescript/uint64)

The number of existing apps created by this account.

Account must be an available resource

### totalAppsOptedIn

> `readonly` **totalAppsOptedIn**: [`uint64`](/reference/algorand-typescript/uint64)

The number of apps this account is opted into.

Account must be an available resource

### totalAssets

> `readonly` **totalAssets**: [`uint64`](/reference/algorand-typescript/uint64)

The numbers of ASAs held by this account (including ASAs this account created).

Account must be an available resource

### totalAssetsCreated

> `readonly` **totalAssetsCreated**: [`uint64`](/reference/algorand-typescript/uint64)

The number of existing ASAs created by this account.

Account must be an available resource

### totalBoxBytes

> `readonly` **totalBoxBytes**: [`uint64`](/reference/algorand-typescript/uint64)

The total number of bytes used by this account's app's box keys and values.

Account must be an available resource

### totalBoxes

> `readonly` **totalBoxes**: [`uint64`](/reference/algorand-typescript/uint64)

The number of existing boxes created by this account's app.

Account must be an available resource

### totalExtraAppPages

> `readonly` **totalExtraAppPages**: [`uint64`](/reference/algorand-typescript/uint64)

The number of extra app code pages used by this account.

Account must be an available resource

### totalNumByteSlice

> `readonly` **totalNumByteSlice**: [`uint64`](/reference/algorand-typescript/uint64)

The total number of byte array values allocated by this account in Global and Local States.

Account must be an available resource

### totalNumUint

> `readonly` **totalNumUint**: [`uint64`](/reference/algorand-typescript/uint64)

The total number of uint64 values allocated by this account in Global and Local States.

Account must be an available resource

### isOptedIn()

Returns true if this account is opted in to the specified Asset or Application.
Note: Account and Asset/Application must be an available resource

#### Parameters

##### assetOrApp

[`Asset`](/reference/algorand-typescript/asset) | [`Application`](/reference/algorand-typescript/application)

#### Returns

`boolean`
