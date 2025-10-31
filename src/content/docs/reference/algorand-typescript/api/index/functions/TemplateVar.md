---
title: TemplateVar
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / TemplateVar

> **TemplateVar**\<`T`\>(`variableName`, `prefix`): `T`

Defined in: [template-var.ts:10](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/template-var.ts#L10)

Declare a template variable which can be replaced at compile time with an environment specific value.

The final variable name will be `prefix + variableName`

## Type Parameters

### T

`T`

## Parameters

### variableName

`string`

The key used to identify the variable.

### prefix

`string` = `'TMPL_'`

The prefix to apply the variable name (Defaults to 'TMPL\_')

## Returns

`T`
