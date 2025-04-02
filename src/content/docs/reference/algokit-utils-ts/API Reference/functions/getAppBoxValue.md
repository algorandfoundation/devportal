---
editUrl: false
next: false
prev: false
title: "getAppBoxValue"
---

> **getAppBoxValue**(`appId`, `boxName`, `algod`): `Promise`\<`Uint8Array`\>

Defined in: [src/app.ts:288](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L288)

:::caution[Deprecated]
Use `algorand.app.getBoxValue` instead.
Returns the value of the given box name for the given app.
:::

## Parameters

### appId

The ID of the app return box names for

`number` | `bigint`

### boxName

The name of the box to return either as a string, binary array or `BoxName`

`string` | `Uint8Array` | `BoxName`

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`Uint8Array`\>

The current box value as a byte array
