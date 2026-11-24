---
editUrl: false
next: false
prev: false
title: "LogicErrorDetails"
---

Defined in: [src/types/logic-error.ts:8](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L8)

Details about a smart contract logic error

## Properties

### desc

> **desc**: `string`

Defined in: [src/types/logic-error.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L16)

The full error description

***

### msg

> **msg**: `string`

Defined in: [src/types/logic-error.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L14)

The error message

***

### pc

> **pc**: `number`

Defined in: [src/types/logic-error.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L12)

The program counter where the error was

***

### traces

> **traces**: `Record`\<`string`, `unknown`\>[]

Defined in: [src/types/logic-error.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L18)

Any trace information included in the error

***

### txId

> **txId**: `string`

Defined in: [src/types/logic-error.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L10)

The ID of the transaction with the logic error
