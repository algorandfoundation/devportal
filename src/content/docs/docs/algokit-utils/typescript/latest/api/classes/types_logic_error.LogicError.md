---
title: LogicError
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/logic-error](/docs/algokit-utils/typescript/latest/api/modules/types_logic_error/) / LogicError



[types/logic-error](/docs/algokit-utils/typescript/latest/api/modules/types_logic_error/).LogicError

Wraps key functionality around processing logic errors

## Hierarchy

- `Error`

  ↳ **`LogicError`**

## Table of contents

### Constructors

- [constructor](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#constructor)

### Properties

- [cause](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#cause)
- [led](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#led)
- [lines](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#lines)
- [message](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#message)
- [name](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#name)
- [program](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#program)
- [stack](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#stack)
- [teal\_line](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#teal_line)
- [prepareStackTrace](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#preparestacktrace)
- [stackTraceLimit](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#stacktracelimit)

### Methods

- [captureStackTrace](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#capturestacktrace)
- [parseLogicError](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/#parselogicerror)

## Constructors

### constructor

• **new LogicError**(`errorDetails`, `program`, `getLineForPc`): [`LogicError`](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/)

Create a new logic error object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorDetails` | [`LogicErrorDetails`](/docs/algokit-utils/typescript/latest/api/interfaces/types_logic_errorlogicerrordetails/) | The details of the logic error |
| `program` | `string`[] | The TEAL source code, split by line |
| `getLineForPc` | (`pc`: `number`) => `undefined` \| `number` | The source map of the TEAL source code |

#### Returns

[`LogicError`](/docs/algokit-utils/typescript/latest/api/classes/types_logic_errorlogicerror/)

#### Overrides

Error.constructor

#### Defined in

[src/types/logic-error.ts:56](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L56)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### led

• **led**: [`LogicErrorDetails`](/docs/algokit-utils/typescript/latest/api/interfaces/types_logic_errorlogicerrordetails/)

#### Defined in

[src/types/logic-error.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L44)

___

### lines

• **lines**: `number` = `5`

#### Defined in

[src/types/logic-error.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L46)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### program

• **program**: `string`[]

#### Defined in

[src/types/logic-error.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L45)

___

### stack

• `Optional` **stack**: `string`

#### Overrides

Error.stack

#### Defined in

[src/types/logic-error.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L48)

___

### teal\_line

• **teal\_line**: `number` = `0`

#### Defined in

[src/types/logic-error.ts:47](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L47)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21

___

### parseLogicError

▸ **parseLogicError**(`error`): `undefined` \| [`LogicErrorDetails`](/docs/algokit-utils/typescript/latest/api/interfaces/types_logic_errorlogicerrordetails/)

Takes an error message and parses out the details of any logic errors in there.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `any` | The error message to parse |

#### Returns

`undefined` \| [`LogicErrorDetails`](/docs/algokit-utils/typescript/latest/api/interfaces/types_logic_errorlogicerrordetails/)

The logic error details if any, or undefined

#### Defined in

[src/types/logic-error.ts:28](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/logic-error.ts#L28)