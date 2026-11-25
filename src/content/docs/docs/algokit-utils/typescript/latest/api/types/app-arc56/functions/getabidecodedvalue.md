---
editUrl: false
next: false
prev: false
title: "getABIDecodedValue"
---

> **getABIDecodedValue**(`value`, `type`, `structs`): `ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/)

Defined in: [src/types/app-arc56.ts:134](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L134)

Returns the decoded ABI value (or struct for a struct type)
for the given raw Algorand value given an ARC-56 type and defined ARC-56 structs.

## Parameters

### value

`number` \| `bigint` \| `Uint8Array`\<`ArrayBufferLike`\>

The raw Algorand value (bytes or uint64)

### type

`string`

The ARC-56 type - either an ABI Type string or a struct name

### structs

`Record`\<`string`, [`StructField`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/structfield/)[]\>

The defined ARC-56 structs

## Returns

`ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/)

The decoded ABI value or struct
