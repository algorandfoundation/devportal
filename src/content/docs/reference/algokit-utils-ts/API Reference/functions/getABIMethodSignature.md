---
editUrl: false
next: false
prev: false
title: "getABIMethodSignature"
---

> **getABIMethodSignature**(`method`): `string`

Defined in: [src/app.ts:430](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L430)

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
