---
title: ComparisonFor
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/README/) / [\<internal\>](/docs/algorand-typescript/typescript/latest/api/index/-internal-/README/) / ComparisonFor

> **ComparisonFor**\<`T`\> = `T` _extends_ [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/) \| [`biguint`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/biguint/) ? [`NumericComparison`](/docs/algorand-typescript/typescript/latest/api/index/-internal-/type-aliases/NumericComparison/)\<`T`\> : [`NonNumericComparison`](/docs/algorand-typescript/typescript/latest/api/index/-internal-/type-aliases/NonNumericComparison/)\<`T`\>

Defined in: [util.ts:89](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L89)

Returns compatible comparison expressions for a type `T`

## Type Parameters

### T

`T`

The type requiring comparison
