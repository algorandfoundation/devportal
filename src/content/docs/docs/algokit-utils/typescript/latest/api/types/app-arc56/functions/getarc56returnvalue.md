---
editUrl: false
next: false
prev: false
title: "getArc56ReturnValue"
---

> **getArc56ReturnValue**\<`TReturn`\>(`returnValue`, `method`, `structs`): `TReturn`

Defined in: [src/types/app-arc56.ts:220](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L220)

Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type

## Type Parameters

### TReturn

`TReturn` *extends* `Uint8Array`\<`ArrayBufferLike`\> \| `ABIValue` \| [`ABIStruct`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/type-aliases/abistruct/) \| `undefined`

## Parameters

### returnValue

[`ABIReturn`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/abireturn/) \| `undefined`

The smart contract response

### method

[`Arc56Method`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/classes/arc56method/) \| [`Method`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/method/)

The method that was called

### structs

`Record`\<`string`, [`StructField`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/structfield/)[]\>

The struct fields from the app spec

## Returns

`TReturn`

The smart contract response with an updated return value
