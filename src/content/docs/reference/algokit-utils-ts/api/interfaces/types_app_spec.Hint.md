---
title: Hint
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/) / Hint

[types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/).Hint

Hint information for a given method call to allow client generation

## Table of contents

### Properties

- [call_config](types_app_spec.Hint.md#call_config)
- [default_arguments](types_app_spec.Hint.md#default_arguments)
- [read_only](types_app_spec.Hint.md#read_only)
- [structs](types_app_spec.Hint.md#structs)

## Properties

### call_config

• **call_config**: [`CallConfig`](types_app_spec.CallConfig.md)

#### Defined in

[src/types/app-spec.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L205)

---

### default_arguments

• `Optional` **default_arguments**: `Record`\<`string`, [`DefaultArgument`](/reference/algokit-utils-ts/api/modules/types_app_spec/#defaultargument)\>

#### Defined in

[src/types/app-spec.ts:204](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L204)

---

### read_only

• `Optional` **read_only**: `boolean`

#### Defined in

[src/types/app-spec.ts:203](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L203)

---

### structs

• `Optional` **structs**: `Record`\<`string`, [`Struct`](types_app_spec.Struct.md)\>

Any user-defined struct/tuple types used in the method call, keyed by parameter name or `output` for return type

#### Defined in

[src/types/app-spec.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L202)
