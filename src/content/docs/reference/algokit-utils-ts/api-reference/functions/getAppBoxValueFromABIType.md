---
editUrl: false
next: false
prev: false
title: "getAppBoxValueFromABIType"
---

> **getAppBoxValueFromABIType**(`request`, `algod`): `Promise`\<`ABIValue`\>

Defined in: [src/app.ts:314](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L314)

:::caution[Deprecated]
Use `algorand.app.getBoxValueFromABIType` instead.
Returns the value of the given box name for the given app decoded based on the given ABI type.
:::

## Parameters

### request

`BoxValueRequestParams`

The parameters for the box value request

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`ABIValue`\>

The current box value as an ABI value
