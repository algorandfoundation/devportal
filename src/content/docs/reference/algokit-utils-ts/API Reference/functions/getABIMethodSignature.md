---
editUrl: false
next: false
prev: false
title: "getABIMethodSignature"
---

> **getABIMethodSignature**(`method`): `string`

Defined in: [src/app.ts:430](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L430)

:::caution[Deprecated]
Use `abiMethod.getSignature()` or `new ABIMethod(abiMethodParams).getSignature()` instead.

Returns the encoded ABI spec for a given ABI Method
:::

## Parameters

### method

The method to return a signature for

`ABIMethodParams` | `ABIMethod`

## Returns

`string`

The encoded ABI method spec e.g. `method_name(uint64,string)string`
