---
title: ComparisonFor
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / [\<internal\>](/reference/algorand-typescript/api/index/-internal-/readme/) / ComparisonFor

> **ComparisonFor**\<`T`\> = `T` _extends_ [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/) \| [`biguint`](/reference/algorand-typescript/api/index/type-aliases/biguint/) ? [`NumericComparison`](NumericComparison)\<`T`\> : [`NonNumericComparison`](NonNumericComparison)\<`T`\>

Defined in: [util.ts:89](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L89)

Returns compatible comparison expressions for a type `T`

## Type Parameters

### T

`T`

The type requiring comparison
