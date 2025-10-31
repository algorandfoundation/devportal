---
title: CompiledContract
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / CompiledContract

> **CompiledContract** = `object`

Defined in: [compiled.ts:11](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L11)

Provides compiled programs and state allocation values for a Contract. Created by calling `compile(ExampleContractType)`

## Properties

### approvalProgram

> `readonly` **approvalProgram**: readonly \[[`bytes`](bytes), [`bytes`](bytes)\]

Defined in: [compiled.ts:15](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L15)

Approval program pages for a contract, after template variables have been replaced and compiled to AVM bytecode

---

### clearStateProgram

> `readonly` **clearStateProgram**: readonly \[[`bytes`](bytes), [`bytes`](bytes)\]

Defined in: [compiled.ts:19](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L19)

Clear state program pages for a contract, after template variables have been replaced and compiled to AVM bytecode

---

### extraProgramPages

> `readonly` **extraProgramPages**: [`uint64`](uint64)

Defined in: [compiled.ts:23](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L23)

By default, provides extra program pages required based on approval and clear state program size, can be overridden when calling `compile(ExampleContractType, { extraProgramPages: ... })`

---

### globalBytes

> `readonly` **globalBytes**: [`uint64`](uint64)

Defined in: [compiled.ts:31](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L31)

By default, provides global num bytes based on contract state totals, can be overridden when calling `compile(ExampleContractType, { globalBytes: ... })`

---

### globalUints

> `readonly` **globalUints**: [`uint64`](uint64)

Defined in: [compiled.ts:27](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L27)

By default, provides global num uints based on contract state totals, can be overridden when calling `compile(ExampleContractType, { globalUints: ... })`

---

### localBytes

> `readonly` **localBytes**: [`uint64`](uint64)

Defined in: [compiled.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L39)

By default, provides local num bytes based on contract state totals, can be overridden when calling `compile(ExampleContractType, { localBytes: ... })`

---

### localUints

> `readonly` **localUints**: [`uint64`](uint64)

Defined in: [compiled.ts:35](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L35)

By default, provides local num uints based on contract state totals, can be overridden when calling `compile(ExampleContractType, { localUints: ... })`
