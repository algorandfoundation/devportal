---
title: types/expand
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / types/expand

## Table of contents

### Type Aliases

- [Expand](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)

## Type Aliases

### Expand

Ƭ **Expand**\<`T`\>: `T` extends (...`args`: infer A) => infer R ? (...`args`: [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`A`\>) => [`Expand`](/docs/algokit-utils/typescript/latest/api/modules/types_expand/#expand)\<`R`\> : `T` extends infer O ? \{ [K in keyof O]: O[K] } : `never`

Expands types for IntelliSense so they are more human readable
See https://stackoverflow.com/a/69288824

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/types/expand.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/expand.ts#L5)
