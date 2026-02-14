---
title: Hint
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app-spec](/docs/algokit-utils/typescript/latest/api/modules/types_app_spec/) / Hint

[types/app-spec](/docs/algokit-utils/typescript/latest/api/modules/types_app_spec/).Hint

Hint information for a given method call to allow client generation

## Table of contents

### Properties

- [call_config](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_spechint/#call_config)
- [default_arguments](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_spechint/#default_arguments)
- [read_only](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_spechint/#read_only)
- [structs](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_spechint/#structs)

## Properties

### call_config

• **call_config**: [`CallConfig`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_speccallconfig/)

#### Defined in

[src/types/app-spec.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L205)

---

### default_arguments

• `Optional` **default_arguments**: `Record`\<`string`, [`DefaultArgument`](/docs/algokit-utils/typescript/latest/api/modules/types_app_spec/#defaultargument)\>

#### Defined in

[src/types/app-spec.ts:204](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L204)

---

### read_only

• `Optional` **read_only**: `boolean`

#### Defined in

[src/types/app-spec.ts:203](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L203)

---

### structs

• `Optional` **structs**: `Record`\<`string`, [`Struct`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_specstruct/)\>

Any user-defined struct/tuple types used in the method call, keyed by parameter name or `output` for return type

#### Defined in

[src/types/app-spec.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L202)
