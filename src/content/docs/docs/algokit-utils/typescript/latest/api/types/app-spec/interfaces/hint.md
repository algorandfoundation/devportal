---
editUrl: false
next: false
prev: false
title: "Hint"
---

Defined in: [src/types/app-spec.ts:200](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L200)

Hint information for a given method call to allow client generation

## Properties

### call\_config

> **call\_config**: [`CallConfig`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/callconfig/)

Defined in: [src/types/app-spec.ts:205](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L205)

***

### default\_arguments?

> `optional` **default\_arguments?**: `Record`\<`string`, [`DefaultArgument`](/docs/algokit-utils/typescript/latest/api/types/app-spec/type-aliases/defaultargument/)\>

Defined in: [src/types/app-spec.ts:204](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L204)

***

### read\_only?

> `optional` **read\_only?**: `boolean`

Defined in: [src/types/app-spec.ts:203](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L203)

***

### structs?

> `optional` **structs?**: `Record`\<`string`, [`Struct`](/docs/algokit-utils/typescript/latest/api/types/app-spec/interfaces/struct/)\>

Defined in: [src/types/app-spec.ts:202](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L202)

Any user-defined struct/tuple types used in the method call, keyed by parameter name or `output` for return type
