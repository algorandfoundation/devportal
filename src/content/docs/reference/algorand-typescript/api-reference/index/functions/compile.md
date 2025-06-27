---
title: 'compile'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / compile

# Function: compile()

## Call Signature

> **compile**(`contract`, `options`?): [`CompiledContract`](/reference/type-aliases/compiledcontract)

Defined in: [packages/algo-ts/src/compiled.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L107)

Compile a contract and return the resulting byte code for approval and clear state programs.

### Parameters

#### contract

[`ConstructorFor`](/reference/-internal-/type-aliases/constructorfor)\<[`BaseContract`](/reference/classes/basecontract)\>

The contract class to compile

#### options?

[`CompileContractOptions`](/reference/type-aliases/compilecontractoptions)

Options for compiling the contract

### Returns

[`CompiledContract`](/reference/type-aliases/compiledcontract)

## Call Signature

> **compile**(`logicSig`, `options`?): [`CompiledLogicSig`](/reference/type-aliases/compiledlogicsig)

Defined in: [packages/algo-ts/src/compiled.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L113)

Compile a logic signature and return an account ready for signing transactions.

### Parameters

#### logicSig

[`ConstructorFor`](/reference/-internal-/type-aliases/constructorfor)\<[`LogicSig`](/reference/classes/logicsig)\>

The logic sig class to compile

#### options?

[`CompileLogicSigOptions`](/reference/type-aliases/compilelogicsigoptions)

Options for compiling the logic sig

### Returns

[`CompiledLogicSig`](/reference/type-aliases/compiledlogicsig)
