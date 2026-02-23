---
editUrl: false
next: false
prev: false
title: 'AssetFreezeTransactionFields'
---

> **AssetFreezeTransactionFields** = `object`

Defined in: [packages/transact/src/transactions/asset-freeze.ts:10](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-freeze.ts#L10)

Represents an asset freeze transaction that freezes or unfreezes asset holdings.

Asset freeze transactions are used by the asset freeze account to control
whether a specific account can transfer a particular asset.

## Properties

### assetId

> **assetId**: `bigint`

Defined in: [packages/transact/src/transactions/asset-freeze.ts:14](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-freeze.ts#L14)

The ID of the asset being frozen/unfrozen.

---

### freezeTarget

> **freezeTarget**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/asset-freeze.ts:19](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-freeze.ts#L19)

The target account whose asset holdings will be affected.

---

### frozen

> **frozen**: `boolean`

Defined in: [packages/transact/src/transactions/asset-freeze.ts:27](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/asset-freeze.ts#L27)

The new freeze status.

`true` to freeze the asset holdings (prevent transfers),
`false` to unfreeze the asset holdings (allow transfers).
