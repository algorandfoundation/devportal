---
editUrl: false
next: false
prev: false
title: "getAppBoxValuesFromABIType"
---

> **getAppBoxValuesFromABIType**(`request`, `algod`): `Promise`\<`ABIValue`[]\>

Defined in: [src/app.ts:329](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L329)

:::caution[Deprecated]
Use `algorand.app.getBoxValuesFromABIType` instead.
Returns the value of the given box names for the given app decoded based on the given ABI type.
:::

## Parameters

### request

`BoxValuesRequestParams`

The parameters for the box value request

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`ABIValue`[]\>

The current box values as an ABI value in the same order as the passed in box names
