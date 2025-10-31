---
title: KeyRegistrationItxnParams
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [itxn](docs/_md/itxn/README) / [itxn](/reference/algorand-typescript/api/itxn/namespaces/itxn/readme/) / KeyRegistrationItxnParams

Defined in: [itxn.ts:1024](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1024)

Holds KeyRegistration fields which can be updated, cloned, or submitted.

## Constructors

### Constructor

> **new KeyRegistrationItxnParams**(): `KeyRegistrationItxnParams`

#### Returns

`KeyRegistrationItxnParams`

## Methods

### copy()

> **copy**(): `KeyRegistrationItxnParams`

Defined in: [itxn.ts:1040](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1040)

Return a copy of this KeyRegistrationItxnParams object

#### Returns

`KeyRegistrationItxnParams`

---

### set()

> **set**(`fields`): `void`

Defined in: [itxn.ts:1034](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1034)

Update one or more fields in this KeyRegistrationItxnParams object

#### Parameters

##### fields

[`KeyRegistrationFields`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/)

#### Returns

`void`

---

### submit()

> **submit**(): [`KeyRegistrationInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationinnertxn/)

Defined in: [itxn.ts:1028](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1028)

Submit an itxn with these fields and return the KeyRegistrationInnerTxn result

#### Returns

[`KeyRegistrationInnerTxn`](/reference/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationinnertxn/)
