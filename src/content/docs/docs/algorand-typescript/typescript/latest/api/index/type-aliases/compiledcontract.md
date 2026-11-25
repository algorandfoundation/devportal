---
editUrl: false
next: false
prev: false
title: "CompiledContract"
---

> **CompiledContract** = `object`

Defined in: [compiled.ts:11](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L11)

Provides compiled programs and state allocation values for a Contract. Created by calling `compile(ExampleContractType)`

## Properties

### approvalProgram

> `readonly` **approvalProgram**: readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\]

Defined in: [compiled.ts:16](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L16)

Approval program pages for a contract, after template variables have been replaced and compiled to AVM bytecode.
Note that each element in the tuple holds up to two program pages. Trailing pages not needed are left empty.

***

### clearStateProgram

> `readonly` **clearStateProgram**: readonly \[[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/), [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)\]

Defined in: [compiled.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L21)

Clear state program pages for a contract, after template variables have been replaced and compiled to AVM bytecode.
Note that each element in the tuple holds up to two program pages. Trailing pages not needed are left empty.

***

### extraProgramPages

> `readonly` **extraProgramPages**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:25](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L25)

By default, provides extra program pages required based on approval and clear state program size, can be overridden when calling `compile(ExampleContractType, { extraProgramPages: ... })`

***

### globalBytes

> `readonly` **globalBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:33](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L33)

By default, provides global num bytes based on contract state totals, can be overridden when calling `compile(ExampleContractType, { globalBytes: ... })`

***

### globalUints

> `readonly` **globalUints**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:29](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L29)

By default, provides global num uints based on contract state totals, can be overridden when calling `compile(ExampleContractType, { globalUints: ... })`

***

### localBytes

> `readonly` **localBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L41)

By default, provides local num bytes based on contract state totals, can be overridden  when calling `compile(ExampleContractType, { localBytes: ... })`

***

### localUints

> `readonly` **localUints**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:37](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L37)

By default, provides local num uints based on contract state totals, can be overridden when calling `compile(ExampleContractType, { localUints: ... })`
