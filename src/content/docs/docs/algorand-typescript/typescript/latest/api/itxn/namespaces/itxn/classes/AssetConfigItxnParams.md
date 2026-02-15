---
title: AssetConfigItxnParams
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [itxn](/docs/algorand-typescript/typescript/latest/api/itxn/readme/) / [itxn](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/readme/) / AssetConfigItxnParams

Defined in: [itxn.ts:1053](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1053)

Holds AssetConfig fields which can be updated, cloned, or submitted.

## Constructors

### Constructor

> **new AssetConfigItxnParams**(): `AssetConfigItxnParams`

#### Returns

`AssetConfigItxnParams`

## Methods

### copy()

> **copy**(): `AssetConfigItxnParams`

Defined in: [itxn.ts:1069](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1069)

Return a copy of this AssetConfigItxnParams object

#### Returns

`AssetConfigItxnParams`

---

### set()

> **set**(`fields`): `void`

Defined in: [itxn.ts:1063](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1063)

Update one or more fields in this AssetConfigItxnParams object

#### Parameters

##### fields

[`AssetConfigFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/assetconfigfields/)

#### Returns

`void`

---

### submit()

> **submit**(): [`AssetConfigInnerTxn`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/assetconfiginnertxn/)

Defined in: [itxn.ts:1057](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1057)

Submit an itxn with these fields and return the AssetConfigInnerTxn result

#### Returns

[`AssetConfigInnerTxn`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/assetconfiginnertxn/)
