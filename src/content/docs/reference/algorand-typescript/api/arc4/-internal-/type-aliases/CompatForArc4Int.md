---
title: CompatForArc4Int
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](/reference/algorand-typescript/api/arc4/readme/) / [\<internal\>](/reference/algorand-typescript/api/arc4/-internal-/readme/) / CompatForArc4Int

> **CompatForArc4Int**\<`N`\> = `N` _extends_ [`UintBitSize`](UintBitSize) ? [`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/) : [`BigUintCompat`](/reference/algorand-typescript/api/index/type-aliases/biguintcompat/)

Defined in: [arc4/encoded-types.ts:77](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L77)

Conditional type which returns the compat type relevant to a given UintN bit size

## Type Parameters

### N

`N` _extends_ [`BitSize`](/reference/algorand-typescript/api/arc4/type-aliases/bitsize/)
