---
editUrl: false
next: false
prev: false
title: "getABIEncodedValue"
---

> **getABIEncodedValue**(`value`, `type`, `structs`): `Uint8Array`

Defined in: [src/types/app-arc56.ts:159](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L159)

Returns the ABI-encoded value for the given value.

## Parameters

### value

`Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/)

The value to encode either already in encoded binary form (`Uint8Array`), a decoded ABI value or an ARC-56 struct

### type

`string`

The ARC-56 type - either an ABI Type string or a struct name

### structs

`Record`\<`string`, [`StructField`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/structfield/)[]\>

The defined ARC-56 structs

## Returns

`Uint8Array`

The binary ABI-encoded value
