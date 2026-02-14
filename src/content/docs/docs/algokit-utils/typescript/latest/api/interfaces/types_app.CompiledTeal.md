---
title: CompiledTeal
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / CompiledTeal



[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).CompiledTeal

Information about a compiled teal program

## Table of contents

### Properties

- [compiled](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcompiledteal/#compiled)
- [compiledBase64ToBytes](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcompiledteal/#compiledbase64tobytes)
- [compiledHash](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcompiledteal/#compiledhash)
- [sourceMap](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcompiledteal/#sourcemap)
- [teal](/docs/algokit-utils/typescript/latest/api/interfaces/types_appcompiledteal/#teal)

## Properties

### compiled

• **compiled**: `string`

The compiled code

#### Defined in

[src/types/app.ts:217](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L217)

___

### compiledBase64ToBytes

• **compiledBase64ToBytes**: `Uint8Array`

The base64 encoded code as a byte array

#### Defined in

[src/types/app.ts:221](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L221)

___

### compiledHash

• **compiledHash**: `string`

The hash returned by the compiler

#### Defined in

[src/types/app.ts:219](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L219)

___

### sourceMap

• **sourceMap**: `ProgramSourceMap`

Source map from the compilation

#### Defined in

[src/types/app.ts:223](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L223)

___

### teal

• **teal**: `string`

Original TEAL code

#### Defined in

[src/types/app.ts:215](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L215)