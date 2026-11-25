---
editUrl: false
next: false
prev: false
title: "getABIReturnValue"
---

> **getABIReturnValue**(`result`, `type`): [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)

Defined in: [src/transaction/transaction.ts:987](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L987)

Takes an algosdk `ABIResult` and converts it to an `ABIReturn`.
Converts `bigint`'s for Uint's < 64 to `number` for easier use.

## Parameters

### result

`ABIResult`

The `ABIReturn`

### type

`ABIReturnType`

## Returns

[`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/)
