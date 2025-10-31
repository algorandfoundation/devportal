---
title: CompiledLogicSig
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / CompiledLogicSig

> **CompiledLogicSig** = `object`

Defined in: [compiled.ts:45](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L45)

Provides account for a Logic Signature. Created by calling `compile(LogicSigType)`

## Properties

### account

> `readonly` **account**: [`Account`](Account)

Defined in: [compiled.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L49)

Address of a logic sig program, after template variables have been replaced and compiled to AVM bytecode
