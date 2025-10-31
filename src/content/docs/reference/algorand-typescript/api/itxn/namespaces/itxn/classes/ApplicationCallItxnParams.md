---
title: ApplicationCallItxnParams
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [itxn](/reference/algorand-typescript/api/itxn/readme/) / [itxn](/reference/algorand-typescript/api/itxn/namespaces/itxn/readme/) / ApplicationCallItxnParams

Defined in: [itxn.ts:1140](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1140)

Holds ApplicationCall fields which can be updated, cloned, or submitted.

## Constructors

### Constructor

> **new ApplicationCallItxnParams**(): `ApplicationCallItxnParams`

#### Returns

`ApplicationCallItxnParams`

## Methods

### copy()

> **copy**(): `ApplicationCallItxnParams`

Defined in: [itxn.ts:1156](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1156)

Return a copy of this ApplicationCallItxnParams object

#### Returns

`ApplicationCallItxnParams`

---

### set()

> **set**(`fields`): `void`

Defined in: [itxn.ts:1150](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1150)

Update one or more fields in this ApplicationCallItxnParams object

#### Parameters

##### fields

[`ApplicationCallFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallfields/)

#### Returns

`void`

---

### submit()

> **submit**(): [`ApplicationCallInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallinnertxn/)

Defined in: [itxn.ts:1144](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1144)

Submit an itxn with these fields and return the ApplicationCallInnerTxn result

#### Returns

[`ApplicationCallInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/applicationcallinnertxn/)
