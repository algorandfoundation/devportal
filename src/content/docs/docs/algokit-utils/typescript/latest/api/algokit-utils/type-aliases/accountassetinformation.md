---
editUrl: false
next: false
prev: false
title: 'AccountAssetInformation'
---

> **AccountAssetInformation** = `object`

Defined in: [src/account.ts:171](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L171)

Account asset holding information at a given round.

## Properties

### assetId

> **assetId**: `bigint`

Defined in: [src/account.ts:173](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L173)

The ID of the asset held.

---

### balance

> **balance**: `bigint`

Defined in: [src/account.ts:175](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L175)

The current balance of that asset holding.

---

### frozen

> **frozen**: `boolean`

Defined in: [src/account.ts:177](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L177)

Whether or not the asset is frozen for the account.

---

### round

> **round**: `bigint`

Defined in: [src/account.ts:179](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account.ts#L179)

The round as at which the holding was correct.
