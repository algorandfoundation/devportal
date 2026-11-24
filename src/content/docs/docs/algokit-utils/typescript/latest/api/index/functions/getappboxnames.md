---
editUrl: false
next: false
prev: false
title: "getAppBoxNames"
---

> **getAppBoxNames**(`appId`, `algod`): `Promise`\<[`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)[]\>

Defined in: [src/app.ts:276](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L276)

:::caution[Deprecated]
Use `algorand.app.getBoxNames` instead.
Returns the names of the boxes for the given app.
:::

## Parameters

### appId

`number` \| `bigint`

The ID of the app return box names for

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<[`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)[]\>

The current box names
