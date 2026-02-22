---
editUrl: false
next: false
prev: false
title: "getTupleValueFromStructValue"
---

> **getTupleValueFromStructValue**(`structType`, `structValue`): [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)[]

Defined in: [packages/abi/src/utils.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/utils.ts#L17)

Converts a struct value (object with named fields) to a tuple value (array).

## Parameters

### structType

[`ABIStructType`](/algokit-utils-ts/api/subpaths/abi/classes/abistructtype/)

The struct type definition

### structValue

`ABIStructValue`

The struct value to convert

## Returns

[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)[]

The equivalent tuple value
