---
title: 'CompatForArc4Int'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/readme) / [\<internal\>](/reference/readme) / CompatForArc4Int

# Type Alias: CompatForArc4Int\<N\>

> **CompatForArc4Int**\<`N`\>: `N` _extends_ [`UintBitSize`](/reference/algorand-typescript/uintbitsize) ? [`Uint64Compat`](/index/type-aliases/uint64compat) : [`BigUintCompat`](/index/type-aliases/biguintcompat)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L80)

Conditional type which returns the compat type relevant to a given UintN bit size

## Type Parameters

• **N** _extends_ [`BitSize`](/type-aliases/bitsize)
