---
title: Account
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / Account

> **Account** = `object`

Defined in: [reference.ts:109](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L109)

Create a new account object representing the zero address

## Properties

### authAddress

> `readonly` **authAddress**: `Account`

Defined in: [reference.ts:32](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L32)

Address the account is rekeyed to

Account must be an available resource

---

### balance

> `readonly` **balance**: [`uint64`](uint64)

Defined in: [reference.ts:18](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L18)

Account balance in microalgos

Account must be an available resource

---

### bytes

> `readonly` **bytes**: [`bytes`](bytes)\<`32`\>

Defined in: [reference.ts:11](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L11)

Get the accounts address in bytes

---

### minBalance

> `readonly` **minBalance**: [`uint64`](uint64)

Defined in: [reference.ts:25](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L25)

Minimum required balance for account, in microalgos

Account must be an available resource

---

### totalAppsCreated

> `readonly` **totalAppsCreated**: [`uint64`](uint64)

Defined in: [reference.ts:60](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L60)

The number of existing apps created by this account.

Account must be an available resource

---

### totalAppsOptedIn

> `readonly` **totalAppsOptedIn**: [`uint64`](uint64)

Defined in: [reference.ts:67](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L67)

The number of apps this account is opted into.

Account must be an available resource

---

### totalAssets

> `readonly` **totalAssets**: [`uint64`](uint64)

Defined in: [reference.ts:81](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L81)

The numbers of ASAs held by this account (including ASAs this account created).

Account must be an available resource

---

### totalAssetsCreated

> `readonly` **totalAssetsCreated**: [`uint64`](uint64)

Defined in: [reference.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L74)

The number of existing ASAs created by this account.

Account must be an available resource

---

### totalBoxBytes

> `readonly` **totalBoxBytes**: [`uint64`](uint64)

Defined in: [reference.ts:95](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L95)

The total number of bytes used by this account's app's box keys and values.

Account must be an available resource

---

### totalBoxes

> `readonly` **totalBoxes**: [`uint64`](uint64)

Defined in: [reference.ts:88](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L88)

The number of existing boxes created by this account's app.

Account must be an available resource

---

### totalExtraAppPages

> `readonly` **totalExtraAppPages**: [`uint64`](uint64)

Defined in: [reference.ts:53](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L53)

The number of extra app code pages used by this account.

Account must be an available resource

---

### totalNumByteSlice

> `readonly` **totalNumByteSlice**: [`uint64`](uint64)

Defined in: [reference.ts:46](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L46)

The total number of byte array values allocated by this account in Global and Local States.

Account must be an available resource

---

### totalNumUint

> `readonly` **totalNumUint**: [`uint64`](uint64)

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

[`Asset`](Asset) | [`Application`](Application)

#### Returns

`boolean`
