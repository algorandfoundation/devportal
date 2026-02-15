---
title: AssetTransferItxnParams
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [itxn](/docs/algorand-typescript/typescript/latest/api/itxn/readme/) / [itxn](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/readme/) / AssetTransferItxnParams

Defined in: [itxn.ts:1082](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1082)

Holds AssetTransfer fields which can be updated, cloned, or submitted.

## Constructors

### Constructor

> **new AssetTransferItxnParams**(): `AssetTransferItxnParams`

#### Returns

`AssetTransferItxnParams`

## Methods

### copy()

> **copy**(): `AssetTransferItxnParams`

Defined in: [itxn.ts:1098](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1098)

Return a copy of this AssetTransferItxnParams object

#### Returns

`AssetTransferItxnParams`

---

### set()

> **set**(`fields`): `void`

Defined in: [itxn.ts:1092](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1092)

Update one or more fields in this AssetTransferItxnParams object

#### Parameters

##### fields

[`AssetTransferFields`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/assettransferfields/)

#### Returns

`void`

---

### submit()

> **submit**(): [`AssetTransferInnerTxn`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/assettransferinnertxn/)

Defined in: [itxn.ts:1086](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1086)

Submit an itxn with these fields and return the AssetTransferInnerTxn result

#### Returns

[`AssetTransferInnerTxn`](/docs/algorand-typescript/typescript/latest/api/itxn/namespaces/itxn/interfaces/assettransferinnertxn/)
