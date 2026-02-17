---
title: _TupleOf
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/README/) / [\<internal\>](/docs/algorand-typescript/typescript/latest/api/index/-internal-/README/) / \_TupleOf

> **\_TupleOf**\<`T`, `N`, `R`\> = `R`\[`"length"`\] _extends_ `N` ? `R` : `_TupleOf`\<`T`, `N`, readonly \[`T`, `...R`\]\>

Defined in: [primitives.ts:366](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/primitives.ts#L366)

## Type Parameters

### T

`T`

### N

`N` _extends_ `number`

### R

`R` _extends_ readonly `unknown`[]
