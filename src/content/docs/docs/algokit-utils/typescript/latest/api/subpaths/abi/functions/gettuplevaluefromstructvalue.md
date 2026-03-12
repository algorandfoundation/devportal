---
editUrl: false
next: false
prev: false
title: "getTupleValueFromStructValue"
---

> **getTupleValueFromStructValue**(`structType`, `structValue`): [`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)[]

Defined in: [packages/abi/src/utils.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/utils.ts#L17)

Converts a struct value (object with named fields) to a tuple value (array).

## Parameters

### structType

[`ABIStructType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abistructtype/)

The struct type definition

### structValue

`ABIStructValue`

The struct value to convert

## Returns

[`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)[]

The equivalent tuple value
