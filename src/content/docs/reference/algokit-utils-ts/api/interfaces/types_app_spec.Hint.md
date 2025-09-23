---
title: Hint
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/) / Hint



[types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/).Hint

Hint information for a given method call to allow client generation

## Table of contents

### Properties

- [call\_config](#call_config)
- [default\_arguments](#default_arguments)
- [read\_only](#read_only)
- [structs](#structs)

## Properties

### call\_config

• **call\_config**: [`CallConfig`]()

#### Defined in

[src/types/app-spec.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L205)

___

### default\_arguments

• `Optional` **default\_arguments**: `Record`\<`string`, [`DefaultArgument`](/reference/algokit-utils-ts/api/modules/types_app_spec/#defaultargument)\>

#### Defined in

[src/types/app-spec.ts:204](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L204)

___

### read\_only

• `Optional` **read\_only**: `boolean`

#### Defined in

[src/types/app-spec.ts:203](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L203)

___

### structs

• `Optional` **structs**: `Record`\<`string`, [`Struct`]()\>

Any user-defined struct/tuple types used in the method call, keyed by parameter name or `output` for return type

#### Defined in

[src/types/app-spec.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L202)