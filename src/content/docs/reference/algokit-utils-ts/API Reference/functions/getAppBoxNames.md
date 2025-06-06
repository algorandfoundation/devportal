---
editUrl: false
next: false
prev: false
title: "getAppBoxNames"
---

> **getAppBoxNames**(`appId`, `algod`): `Promise`\<`BoxName`[]\>

Defined in: [src/app.ts:276](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L276)

:::caution[Deprecated]
Use `algorand.app.getBoxNames` instead.
Returns the names of the boxes for the given app.
:::

## Parameters

### appId

The ID of the app return box names for

`number` | `bigint`

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`BoxName`[]\>

The current box names
