---
title: 'CompileLogicSigOptions'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / CompileLogicSigOptions

# Type Alias: CompileLogicSigOptions

> **CompileLogicSigOptions**: `object`

Defined in: [packages/algo-ts/src/compiled.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L90)

Options for compiling a logic signature

## Type declaration

### templateVars?

> `optional` **templateVars**: [`Record`](/reference/-internal-/type-aliases/record)\<`string`, [`DeliberateAny`](/reference/-internal-/type-aliases/deliberateany)\>

Template variables to substitute into the contract, key should be without the prefix, must evaluate to a compile time constant
and match the type of the template var declaration

### templateVarsPrefix?

> `optional` **templateVarsPrefix**: `string`

Prefix to add to provided template vars, defaults to the prefix supplied on command line (which defaults to TMPL\_)
