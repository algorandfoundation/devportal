---
editUrl: false
next: false
prev: false
title: "getABITupleFromABIStruct"
---

> **getABITupleFromABIStruct**(`struct`, `structFields`, `structs`): `ABIValue`[]

Defined in: [src/types/app-arc56.ts:108](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L108)

Converts an ARC-56 struct as an ABI tuple.

## Parameters

### struct

[`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/)

The struct to convert

### structFields

[`StructField`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/structfield/)[]

The struct fields from an ARC-56 app spec

### structs

`Record`\<`string`, [`StructField`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/structfield/)[]\>

## Returns

`ABIValue`[]

The struct as a decoded ABI tuple
