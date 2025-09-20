---
title: types/expand
slug: reference/algokit-utils-ts/api/modules/types_expand
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / types/expand

## Table of contents

### Type Aliases

- [Expand](#expand)

## Type Aliases

### Expand

Ƭ **Expand**\<`T`\>: `T` extends (...`args`: infer A) => infer R ? (...`args`: [`Expand`](#expand)\<`A`\>) => [`Expand`](#expand)\<`R`\> : `T` extends infer O ? \{ [K in keyof O]: O[K] } : `never`

Expands types for IntelliSense so they are more human readable
See https://stackoverflow.com/a/69288824

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/types/expand.ts:5](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/expand.ts#L5)
