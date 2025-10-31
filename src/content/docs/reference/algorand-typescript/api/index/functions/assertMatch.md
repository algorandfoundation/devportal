---
title: assertMatch
type: function
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / assertMatch

> **assertMatch**\<`T`\>(`subject`, `test`, `message?`): `void`

Defined in: [util.ts:123](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L123)

Applies all tests in `test` against `subject` and asserts they all pass

## Type Parameters

### T

`T`

The type of the subject

## Parameters

### subject

`T`

An object or tuple to be tested

### test

[`MatchTest`](/reference/algorand-typescript/api/index/-internal-/type-aliases/matchtest/)\<`T`\>

An object containing one or more tests to be applied to the subject

### message?

`string`

An optional message to show if the assertion fails

## Returns

`void`
