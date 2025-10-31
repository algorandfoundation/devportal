---
title: compile
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / compile

## Call Signature

> **compile**(`contract`, `options?`): [`CompiledContract`](/reference/algorand-typescript/api/index/type-aliases/compiledcontract/)

Defined in: [compiled.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L107)

Compile a contract and return the resulting byte code for approval and clear state programs.

### Parameters

#### contract

[`ConstructorFor`](/reference/algorand-typescript/api/index/-internal-/type-aliases/constructorfor/)\<[`BaseContract`](/reference/algorand-typescript/api/index/classes/basecontract/)\>

The contract class to compile

#### options?

[`CompileContractOptions`](/reference/algorand-typescript/api/index/type-aliases/compilecontractoptions/)

Options for compiling the contract

### Returns

[`CompiledContract`](/reference/algorand-typescript/api/index/type-aliases/compiledcontract/)

## Call Signature

> **compile**(`logicSig`, `options?`): [`CompiledLogicSig`](/reference/algorand-typescript/api/index/type-aliases/compiledlogicsig/)

Defined in: [compiled.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L113)

Compile a logic signature and return an account ready for signing transactions.

### Parameters

#### logicSig

[`ConstructorFor`](/reference/algorand-typescript/api/index/-internal-/type-aliases/constructorfor/)\<[`LogicSig`](/reference/algorand-typescript/api/index/classes/logicsig/)\>

The logic sig class to compile

#### options?

[`CompileLogicSigOptions`](/reference/algorand-typescript/api/index/type-aliases/compilelogicsigoptions/)

Options for compiling the logic sig

### Returns

[`CompiledLogicSig`](/reference/algorand-typescript/api/index/type-aliases/compiledlogicsig/)
