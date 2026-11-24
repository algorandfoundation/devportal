---
editUrl: false
next: false
prev: false
title: "getABIMethodSignature"
---

> **getABIMethodSignature**(`method`): `string`

Defined in: [src/app.ts:430](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L430)

:::caution[Deprecated]
Use `abiMethod.getSignature()` or `new ABIMethod(abiMethodParams).getSignature()` instead.

Returns the encoded ABI spec for a given ABI Method
:::

## Parameters

### method

`ABIMethod` \| `ABIMethodParams`

The method to return a signature for

## Returns

`string`

The encoded ABI method spec e.g. `method_name(uint64,string)string`
