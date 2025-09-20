---
title: LogicErrorDetails
slug: reference/algokit-utils-ts/api/interfaces/types_logic_errorlogicerrordetails
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/logic-error](/reference/algokit-utils-ts/api/modules/types_logic_error/) / LogicErrorDetails



[types/logic-error](/reference/algokit-utils-ts/api/modules/types_logic_error/).LogicErrorDetails

Details about a smart contract logic error

## Table of contents

### Properties

- [desc](#desc)
- [msg](#msg)
- [pc](#pc)
- [traces](#traces)
- [txId](#txid)

## Properties

### desc

• **desc**: `string`

The full error description

#### Defined in

[src/types/logic-error.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L16)

___

### msg

• **msg**: `string`

The error message

#### Defined in

[src/types/logic-error.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L14)

___

### pc

• **pc**: `number`

The program counter where the error was

#### Defined in

[src/types/logic-error.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L12)

___

### traces

• **traces**: `Record`\<`string`, `unknown`\>[]

Any trace information included in the error

#### Defined in

[src/types/logic-error.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L18)

___

### txId

• **txId**: `string`

The ID of the transaction with the logic error

#### Defined in

[src/types/logic-error.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L10)