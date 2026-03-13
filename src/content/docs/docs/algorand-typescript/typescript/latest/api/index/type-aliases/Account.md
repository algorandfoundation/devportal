---
editUrl: false
next: false
prev: false
title: "Account"
---

> **Account** = `object`

Defined in: [reference.ts:109](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L109)

Represents an Algorand Account and exposes properties and methods for reading account data

## Properties

### authAddress

> `readonly` **authAddress**: `Account`

Defined in: [reference.ts:32](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L32)

Address the account is rekeyed to

Account must be an available resource

***

### balance

> `readonly` **balance**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:18](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L18)

Account balance in microalgos

Account must be an available resource

***

### bytes

> `readonly` **bytes**: [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)\<`32`\>

Defined in: [reference.ts:11](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L11)

Get the accounts address in bytes

***

### minBalance

> `readonly` **minBalance**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:25](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L25)

Minimum required balance for account, in microalgos

Account must be an available resource

***

### totalAppsCreated

> `readonly` **totalAppsCreated**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:60](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L60)

The number of existing apps created by this account.

Account must be an available resource

***

### totalAppsOptedIn

> `readonly` **totalAppsOptedIn**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:67](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L67)

The number of apps this account is opted into.

Account must be an available resource

***

### totalAssets

> `readonly` **totalAssets**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:81](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L81)

The numbers of ASAs held by this account (including ASAs this account created).

Account must be an available resource

***

### totalAssetsCreated

> `readonly` **totalAssetsCreated**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L74)

The number of existing ASAs created by this account.

Account must be an available resource

***

### totalBoxBytes

> `readonly` **totalBoxBytes**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:95](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L95)

The total number of bytes used by this account's app's box keys and values.

Account must be an available resource

***

### totalBoxes

> `readonly` **totalBoxes**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:88](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L88)

The number of existing boxes created by this account's app.

Account must be an available resource

***

### totalExtraAppPages

> `readonly` **totalExtraAppPages**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:53](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L53)

The number of extra app code pages used by this account.

Account must be an available resource

***

### totalNumByteSlice

> `readonly` **totalNumByteSlice**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:46](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L46)

The total number of byte array values allocated by this account in Global and Local States.

Account must be an available resource

***

### totalNumUint

> `readonly` **totalNumUint**: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L39)

The total number of uint64 values allocated by this account in Global and Local States.

Account must be an available resource

## Methods

### isOptedIn()

> **isOptedIn**(`assetOrApp`): `boolean`

Defined in: [reference.ts:103](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L103)

Returns true if this account is opted in to the specified Asset or Application.
Note: Account and Asset/Application must be an available resource

#### Parameters

##### assetOrApp

[`Asset`](/algorand-typescript/api/index/type-aliases/asset/) | [`Application`](/algorand-typescript/api/index/type-aliases/application/)

#### Returns

`boolean`
