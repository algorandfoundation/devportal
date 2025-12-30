---
title: LogicErrorDetails
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/logic-error](/reference/algokit-utils-ts/api/modules/types_logic_error/) / LogicErrorDetails

[types/logic-error](/reference/algokit-utils-ts/api/modules/types_logic_error/).LogicErrorDetails

Details about a smart contract logic error

## Table of contents

### Properties

- [desc](/reference/algokit-utils-ts/api/interfaces/types_logic_errorlogicerrordetails/#desc)
- [msg](/reference/algokit-utils-ts/api/interfaces/types_logic_errorlogicerrordetails/#msg)
- [pc](/reference/algokit-utils-ts/api/interfaces/types_logic_errorlogicerrordetails/#pc)
- [traces](/reference/algokit-utils-ts/api/interfaces/types_logic_errorlogicerrordetails/#traces)
- [txId](/reference/algokit-utils-ts/api/interfaces/types_logic_errorlogicerrordetails/#txid)

## Properties

### desc

• **desc**: `string`

The full error description

#### Defined in

[src/types/logic-error.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L16)

---

### msg

• **msg**: `string`

The error message

#### Defined in

[src/types/logic-error.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L14)

---

### pc

• **pc**: `number`

The program counter where the error was

#### Defined in

[src/types/logic-error.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L12)

---

### traces

• **traces**: `Record`\<`string`, `unknown`\>[]

Any trace information included in the error

#### Defined in

[src/types/logic-error.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L18)

---

### txId

• **txId**: `string`

The ID of the transaction with the logic error

#### Defined in

[src/types/logic-error.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L10)
