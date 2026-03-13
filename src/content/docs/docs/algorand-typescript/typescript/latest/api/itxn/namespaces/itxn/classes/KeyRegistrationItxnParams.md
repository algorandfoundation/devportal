---
editUrl: false
next: false
prev: false
title: "KeyRegistrationItxnParams"
---

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

***

### set()

> **set**(`fields`): `void`

Defined in: [itxn.ts:1034](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1034)

Update one or more fields in this KeyRegistrationItxnParams object

#### Parameters

##### fields

[`KeyRegistrationFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationfields/)

#### Returns

`void`

***

### submit()

> **submit**(): [`KeyRegistrationInnerTxn`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationinnertxn/)

Defined in: [itxn.ts:1028](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1028)

Submit an itxn with these fields and return the KeyRegistrationInnerTxn result

#### Returns

[`KeyRegistrationInnerTxn`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/keyregistrationinnertxn/)
