---
title: CompiledLogicSig
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/readme/) / CompiledLogicSig

> **CompiledLogicSig** = `object`

Defined in: [compiled.ts:45](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L45)

Provides account for a Logic Signature. Created by calling `compile(LogicSigType)`

## Properties

### account

> `readonly` **account**: [`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

Defined in: [compiled.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L49)

Address of a logic sig program, after template variables have been replaced and compiled to AVM bytecode
