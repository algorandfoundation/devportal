---
title: CompatForArc4Int
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / [\<internal\>](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/README/) / CompatForArc4Int

> **CompatForArc4Int**\<`N`\> = `N` _extends_ [`UintBitSize`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/type-aliases/UintBitSize/) ? [`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Uint64Compat/) : [`BigUintCompat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/BigUintCompat/)

Defined in: [arc4/encoded-types.ts:77](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L77)

Conditional type which returns the compat type relevant to a given UintN bit size

## Type Parameters

### N

`N` _extends_ [`BitSize`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/BitSize/)
