---
title: compile
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/README/) / compile

## Call Signature

> **compile**(`contract`, `options?`): [`CompiledContract`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/CompiledContract/)

Defined in: [compiled.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L107)

Compile a contract and return the resulting byte code for approval and clear state programs.

### Parameters

#### contract

[`ConstructorFor`](/docs/algorand-typescript/typescript/latest/api/index/-internal-/type-aliases/ConstructorFor/)\<[`BaseContract`](/docs/algorand-typescript/typescript/latest/api/index/classes/BaseContract/)\>

The contract class to compile

#### options?

[`CompileContractOptions`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/CompileContractOptions/)

Options for compiling the contract

### Returns

[`CompiledContract`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/CompiledContract/)

## Call Signature

> **compile**(`logicSig`, `options?`): [`CompiledLogicSig`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/CompiledLogicSig/)

Defined in: [compiled.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L113)

Compile a logic signature and return an account ready for signing transactions.

### Parameters

#### logicSig

[`ConstructorFor`](/docs/algorand-typescript/typescript/latest/api/index/-internal-/type-aliases/ConstructorFor/)\<[`LogicSig`](/docs/algorand-typescript/typescript/latest/api/index/classes/LogicSig/)\>

The logic sig class to compile

#### options?

[`CompileLogicSigOptions`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/CompileLogicSigOptions/)

Options for compiling the logic sig

### Returns

[`CompiledLogicSig`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/CompiledLogicSig/)
