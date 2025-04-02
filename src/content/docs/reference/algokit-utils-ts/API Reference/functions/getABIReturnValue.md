---
editUrl: false
next: false
prev: false
title: "getABIReturnValue"
---

> **getABIReturnValue**(`result`): `ABIReturn`

Defined in: [src/transaction/transaction.ts:744](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/transaction/transaction.ts#L744)

Takes an algosdk `ABIResult` and converts it to an `ABIReturn`.
Converts `bigint`'s for Uint's < 64 to `number` for easier use.

## Parameters

### result

`ABIResult`

The `ABIReturn`

## Returns

`ABIReturn`
