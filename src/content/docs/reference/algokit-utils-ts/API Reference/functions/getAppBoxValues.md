---
editUrl: false
next: false
prev: false
title: "getAppBoxValues"
---

> **getAppBoxValues**(`appId`, `boxNames`, `algod`): `Promise`\<`Uint8Array`[]\>

Defined in: [src/app.ts:300](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L300)

:::caution[Deprecated]
Use `algorand.app.getBoxValues` instead.
Returns the value of the given box names for the given app.
:::

## Parameters

### appId

`number`

The ID of the app return box names for

### boxNames

(`string` \| `Uint8Array` \| `BoxName`)[]

The names of the boxes to return either as a string, binary array or `BoxName`

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`Uint8Array`[]\>

The current box values as a byte array in the same order as the passed in box names
