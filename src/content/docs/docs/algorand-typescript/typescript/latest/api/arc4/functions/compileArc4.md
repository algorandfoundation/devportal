---
title: compileArc4
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/readme/) / compileArc4

> **compileArc4**\<`TContract`\>(`contract`, `options?`): [`ContractProxy`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/contractproxy/)\<`TContract`\>

Defined in: [arc4/c2c.ts:105](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L105)

Pre compile the target ARC4 contract and return a proxy object for constructing inner transactions to call an instance of that contract.

## Type Parameters

### TContract

`TContract` _extends_ [`Contract`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/contract/)

## Parameters

### contract

[`ConstructorFor`](/docs/algorand-typescript/typescript/latest/api/index/-internal-/type-aliases/constructorfor/)\<`TContract`\>

An ARC4 contract class

### options?

[`CompileContractOptions`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/compilecontractoptions/)

Compile contract arguments

## Returns

[`ContractProxy`](/docs/algorand-typescript/typescript/latest/api/arc4/type-aliases/contractproxy/)\<`TContract`\>
