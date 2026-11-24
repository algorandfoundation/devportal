---
editUrl: false
next: false
prev: false
title: "getAppBoxValue"
---

> **getAppBoxValue**(`appId`, `boxName`, `algod`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [src/app.ts:288](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L288)

:::caution[Deprecated]
Use `algorand.app.getBoxValue` instead.
Returns the value of the given box name for the given app.
:::

## Parameters

### appId

`number` \| `bigint`

The ID of the app return box names for

### boxName

`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`BoxName`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxname/)

The name of the box to return either as a string, binary array or `BoxName`

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The current box value as a byte array
