---
editUrl: false
next: false
prev: false
title: "AccountAssetInformation"
---

> **AccountAssetInformation** = `object`

Defined in: [src/types/account.ts:278](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L278)

Account asset holding information at a given round.

## Properties

### assetId

> **assetId**: `bigint`

Defined in: [src/types/account.ts:280](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L280)

The ID of the asset held.

***

### balance

> **balance**: `bigint`

Defined in: [src/types/account.ts:282](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L282)

The current balance of that asset holding.

***

### frozen

> **frozen**: `boolean`

Defined in: [src/types/account.ts:284](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L284)

Whether or not the asset is frozen for the account.

***

### round

> **round**: `bigint`

Defined in: [src/types/account.ts:286](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account.ts#L286)

The round as at which the holding was correct.
