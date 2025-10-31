---
title: MatchTest
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / [\<internal\>](/reference/algorand-typescript/api/index/-internal-/readme/) / MatchTest

> **MatchTest**\<`T`\> = `T` _extends_ `ConcatArray`\<infer TItem\> ? `object` & `object` : `{ [key in keyof T]?: ComparisonFor<T[key]> }`

Defined in: [util.ts:95](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L95)

A set of tests to apply to the match subject

## Type Parameters

### T

`T`

The type of the test subject
