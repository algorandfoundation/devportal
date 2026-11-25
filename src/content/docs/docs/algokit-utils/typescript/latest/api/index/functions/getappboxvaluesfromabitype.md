---
editUrl: false
next: false
prev: false
title: "getAppBoxValuesFromABIType"
---

> **getAppBoxValuesFromABIType**(`request`, `algod`): `Promise`\<`ABIValue`[]\>

Defined in: [src/app.ts:329](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L329)

:::caution[Deprecated]
Use `algorand.app.getBoxValuesFromABIType` instead.
Returns the value of the given box names for the given app decoded based on the given ABI type.
:::

## Parameters

### request

[`BoxValuesRequestParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxvaluesrequestparams/)

The parameters for the box value request

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`ABIValue`[]\>

The current box values as an ABI value in the same order as the passed in box names
