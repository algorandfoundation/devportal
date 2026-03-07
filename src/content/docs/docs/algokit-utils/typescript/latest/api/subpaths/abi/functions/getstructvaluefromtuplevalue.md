---
editUrl: false
next: false
prev: false
title: "getStructValueFromTupleValue"
---

> **getStructValueFromTupleValue**(`structType`, `tupleValue`): `ABIStructValue`

Defined in: [packages/abi/src/utils.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/utils.ts#L43)

Converts a tuple value (array) to a struct value (object with named fields).

## Parameters

### structType

[`ABIStructType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abistructtype/)

The struct type definition

### tupleValue

[`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)[]

The tuple value to convert

## Returns

`ABIStructValue`

The equivalent struct value
