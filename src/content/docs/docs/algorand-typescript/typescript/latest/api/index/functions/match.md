---
title: match
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/readme/) / match

> **match**\<`T`\>(`subject`, `test`): `boolean`

Defined in: [util.ts:111](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L111)

Applies all tests in `test` against `subject` and returns a boolean indicating if they all pass

## Type Parameters

### T

`T`

The type of the subject

## Parameters

### subject

`T`

An object or tuple to be tested

### test

[`MatchTest`](/docs/algorand-typescript/typescript/latest/api/index/-internal-/type-aliases/matchtest/)\<`T`\>

An object containing one or more tests to be applied to the subject

## Returns

`boolean`

True if all tests pass, otherwise false
