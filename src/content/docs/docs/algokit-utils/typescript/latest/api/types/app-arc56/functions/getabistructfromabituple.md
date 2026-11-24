---
editUrl: false
next: false
prev: false
title: "getABIStructFromABITuple"
---

> **getABIStructFromABITuple**\<`TReturn`\>(`decodedABITuple`, `structFields`, `structs`): `TReturn`

Defined in: [src/types/app-arc56.ts:71](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L71)

Converts a decoded ABI tuple as a struct.

## Type Parameters

### TReturn

`TReturn` *extends* [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) = `Record`\<`string`, `any`\>

## Parameters

### decodedABITuple

`ABIValue`[]

The decoded ABI tuple value

### structFields

[`StructField`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/structfield/)[]

The struct fields from an ARC-56 app spec

### structs

`Record`\<`string`, [`StructField`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/structfield/)[]\>

## Returns

`TReturn`

The struct as a Record<string, any>
