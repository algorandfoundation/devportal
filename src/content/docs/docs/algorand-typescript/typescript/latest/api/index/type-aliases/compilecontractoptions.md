---
editUrl: false
next: false
prev: false
title: "CompileContractOptions"
---

> **CompileContractOptions** = `object`

Defined in: [compiled.ts:57](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L57)

Options for compiling a contract

## Properties

### extraProgramPages?

> `readonly` `optional` **extraProgramPages**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:61](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L61)

Number of extra program pages, defaults to minimum required for contract

***

### globalBytes?

> `readonly` `optional` **globalBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L69)

Number of global bytes, defaults to value defined for contract

***

### globalUints?

> `readonly` `optional` **globalUints**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:65](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L65)

Number of global uint64s, defaults to value defined for contract

***

### localBytes?

> `readonly` `optional` **localBytes**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:77](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L77)

Number of local bytes, defaults to value defined for contract

***

### localUints?

> `readonly` `optional` **localUints**: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [compiled.ts:73](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L73)

Number of local uint64s, defaults to value defined for contract

***

### templateVars?

> `readonly` `optional` **templateVars**: `Record`\<`string`, `DeliberateAny`\>

Defined in: [compiled.ts:82](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L82)

Template variables to substitute into the contract, key should be without the prefix, must evaluate to a compile time constant
and match the type of the template var declaration

***

### templateVarsPrefix?

> `readonly` `optional` **templateVarsPrefix**: `string`

Defined in: [compiled.ts:86](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L86)

Prefix to add to provided template vars, defaults to the prefix supplied on command line (which defaults to TMPL_)
