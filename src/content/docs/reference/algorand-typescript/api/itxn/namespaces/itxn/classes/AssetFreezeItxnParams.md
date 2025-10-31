---
title: AssetFreezeItxnParams
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [itxn](/reference/algorand-typescript/api/itxn/readme/) / [itxn](/reference/algorand-typescript/api/itxn/namespaces/itxn/readme/) / AssetFreezeItxnParams

Defined in: [itxn.ts:1111](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1111)

Holds AssetFreeze fields which can be updated, cloned, or submitted.

## Constructors

### Constructor

> **new AssetFreezeItxnParams**(): `AssetFreezeItxnParams`

#### Returns

`AssetFreezeItxnParams`

## Methods

### copy()

> **copy**(): `AssetFreezeItxnParams`

Defined in: [itxn.ts:1127](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1127)

Return a copy of this AssetFreezeItxnParams object

#### Returns

`AssetFreezeItxnParams`

---

### set()

> **set**(`fields`): `void`

Defined in: [itxn.ts:1121](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1121)

Update one or more fields in this AssetFreezeItxnParams object

#### Parameters

##### fields

[`AssetFreezeFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezefields/)

#### Returns

`void`

---

### submit()

> **submit**(): [`AssetFreezeInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezeinnertxn/)

Defined in: [itxn.ts:1115](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1115)

Submit an itxn with these fields and return the AssetFreezeInnerTxn result

#### Returns

[`AssetFreezeInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/assetfreezeinnertxn/)
