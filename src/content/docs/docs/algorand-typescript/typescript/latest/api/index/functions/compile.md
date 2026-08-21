---
editUrl: false
next: false
prev: false
title: 'compile'
---

## Call Signature

> **compile**(`contract`, `options?`): [`CompiledContract`](/algorand-typescript/api/index/type-aliases/compiledcontract/)

Defined in: [compiled.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L107)

Compile a contract and return the resulting byte code for approval and clear state programs.

### Parameters

#### contract

`ConstructorFor`\<[`BaseContract`](/algorand-typescript/api/index/classes/basecontract/)\>

The contract class to compile

#### options?

[`CompileContractOptions`](/algorand-typescript/api/index/type-aliases/compilecontractoptions/)

Options for compiling the contract

### Returns

[`CompiledContract`](/algorand-typescript/api/index/type-aliases/compiledcontract/)

## Call Signature

> **compile**(`logicSig`, `options?`): [`CompiledLogicSig`](/algorand-typescript/api/index/type-aliases/compiledlogicsig/)

Defined in: [compiled.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L113)

Compile a logic signature and return an account ready for signing transactions.

### Parameters

#### logicSig

`ConstructorFor`\<[`LogicSig`](/algorand-typescript/api/index/classes/logicsig/)\>

The logic sig class to compile

#### options?

[`CompileLogicSigOptions`](/algorand-typescript/api/index/type-aliases/compilelogicsigoptions/)

Options for compiling the logic sig

### Returns

[`CompiledLogicSig`](/algorand-typescript/api/index/type-aliases/compiledlogicsig/)
