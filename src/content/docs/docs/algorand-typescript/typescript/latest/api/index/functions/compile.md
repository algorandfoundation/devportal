---
editUrl: false
next: false
prev: false
title: "compile"
---

## Call Signature

> **compile**(`contract`, `options?`): [`CompiledContract`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/compiledcontract/)

Defined in: [compiled.ts:109](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L109)

Compile a contract and return the resulting byte code for approval and clear state programs.

### Parameters

#### contract

`ConstructorFor`\<[`BaseContract`](/docs/algorand-typescript/typescript/latest/api/index/classes/basecontract/)\>

The contract class to compile

#### options?

[`CompileContractOptions`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/compilecontractoptions/)

Options for compiling the contract

### Returns

[`CompiledContract`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/compiledcontract/)

## Call Signature

> **compile**(`logicSig`, `options?`): [`CompiledLogicSig`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/compiledlogicsig/)

Defined in: [compiled.ts:115](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L115)

Compile a logic signature and return an account ready for signing transactions.

### Parameters

#### logicSig

`ConstructorFor`\<[`LogicSig`](/docs/algorand-typescript/typescript/latest/api/index/classes/logicsig/)\>

The logic sig class to compile

#### options?

[`CompileLogicSigOptions`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/compilelogicsigoptions/)

Options for compiling the logic sig

### Returns

[`CompiledLogicSig`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/compiledlogicsig/)
