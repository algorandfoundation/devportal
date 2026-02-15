---
title: CompatForArc4Int
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/readme/) / [\<internal\>](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/readme/) / CompatForArc4Int

> **CompatForArc4Int**\<`N`\> = `N` _extends_ [`UintBitSize`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/type-aliases/uintbitsize/) ? [`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64compat/) : [`BigUintCompat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/biguintcompat/)

Defined in: [arc4/encoded-types.ts:77](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L77)

Conditional type which returns the compat type relevant to a given UintN bit size

## Type Parameters

### N

`N` _extends_ [`BitSize`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/bitsize/)
