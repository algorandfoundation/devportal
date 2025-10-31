---
title: AssetConfigItxnParams
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [itxn](/reference/algorand-typescript/api/itxn/readme/) / [itxn](/reference/algorand-typescript/api/itxn/namespaces/itxn/readme/) / AssetConfigItxnParams

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

[`AssetConfigFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfigfields/)

#### Returns

`void`

---

### submit()

> **submit**(): [`AssetConfigInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfiginnertxn/)

Defined in: [itxn.ts:1057](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1057)

Submit an itxn with these fields and return the AssetConfigInnerTxn result

#### Returns

[`AssetConfigInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetconfiginnertxn/)
