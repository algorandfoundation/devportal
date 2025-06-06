---
editUrl: false
next: false
prev: false
title: "getABIReturnValue"
---

> **getABIReturnValue**(`result`): `ABIReturn`

Defined in: [src/transaction/transaction.ts:928](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transaction/transaction.ts#L928)

Takes an algosdk `ABIResult` and converts it to an `ABIReturn`.
Converts `bigint`'s for Uint's < 64 to `number` for easier use.

## Parameters

### result

`ABIResult`

The `ABIReturn`

## Returns

`ABIReturn`
