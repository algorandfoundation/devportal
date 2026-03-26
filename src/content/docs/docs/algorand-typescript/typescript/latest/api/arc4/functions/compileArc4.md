---
editUrl: false
next: false
prev: false
title: 'compileArc4'
---

> **compileArc4**\<`TContract`\>(`contract`, `options?`): [`ContractProxy`](/algorand-typescript/api/arc4/type-aliases/contractproxy/)\<`TContract`\>

Defined in: [arc4/c2c.ts:105](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/c2c.ts#L105)

Pre compile the target ARC4 contract and return a proxy object for constructing inner transactions to call an instance of that contract.

## Type Parameters

### TContract

`TContract` _extends_ [`Contract`](/algorand-typescript/api/arc4/classes/contract/)

## Parameters

### contract

`ConstructorFor`\<`TContract`\>

An ARC4 contract class

### options?

[`CompileContractOptions`](/algorand-typescript/api/index/type-aliases/compilecontractoptions/)

Compile contract arguments

## Returns

[`ContractProxy`](/algorand-typescript/api/arc4/type-aliases/contractproxy/)\<`TContract`\>
