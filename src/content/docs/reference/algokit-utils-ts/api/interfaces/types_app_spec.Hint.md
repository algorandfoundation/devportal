---
title: Hint
slug: reference/algokit-utils-ts/api/interfaces/types_app_spechint
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/) / Hint

[types/app-spec](/reference/algokit-utils-ts/api/modules/types_app_spec/).Hint

Hint information for a given method call to allow client generation

## Table of contents

### Properties

- [call_config](#call_config)
- [default_arguments](#default_arguments)
- [read_only](#read_only)
- [structs](#structs)

## Properties

### call_config

• **call_config**: [`CallConfig`](/reference/algokit-utils-ts/api/interfaces/types_app_speccallconfig/)

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

• `Optional` **structs**: `Record`\<`string`, [`Struct`](/reference/algokit-utils-ts/api/interfaces/types_app_specstruct/)\>

Any user-defined struct/tuple types used in the method call, keyed by parameter name or `output` for return type

#### Defined in

[src/types/app-spec.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L202)
