---
title: 'assertMatch'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / assertMatch

# Function: assertMatch()

> **assertMatch**\<`T`\>(`subject`, `test`, `message`?): `boolean`

Defined in: [packages/algo-ts/src/util.ts:100](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L100)

Applies all tests in `test` against `subject` and asserts they all pass

## Type Parameters

• **T**

The type of the subject

## Parameters

### subject

`T`

An object or tuple to be tested

### test

[`MatchTest`](/reference/-internal-/type-aliases/matchtest)\<`T`\>

An object containing one or more tests to be applied to the subject

### message?

`string`

An optional message to show if the assertion fails

## Returns

`boolean`
