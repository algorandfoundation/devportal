---
editUrl: false
next: false
prev: false
title: 'PaymentItxnParams'
---

Defined in: [itxn.ts:995](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L995)

Holds Payment fields which can be updated, cloned, or submitted.

## Constructors

### Constructor

> **new PaymentItxnParams**(): `PaymentItxnParams`

#### Returns

`PaymentItxnParams`

## Methods

### copy()

> **copy**(): `PaymentItxnParams`

Defined in: [itxn.ts:1011](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1011)

Return a copy of this PaymentItxnParams object

#### Returns

`PaymentItxnParams`

---

### set()

> **set**(`fields`): `void`

Defined in: [itxn.ts:1005](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L1005)

Update one or more fields in this PaymentItxnParams object

#### Parameters

##### fields

[`PaymentFields`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentfields/)

#### Returns

`void`

---

### submit()

> **submit**(): [`PaymentInnerTxn`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentinnertxn/)

Defined in: [itxn.ts:999](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L999)

Submit an itxn with these fields and return the PaymentInnerTxn result

#### Returns

[`PaymentInnerTxn`](/algorand-typescript/api/itxn/namespaces/itxn/interfaces/paymentinnertxn/)
