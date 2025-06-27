---
title: 'match'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / match

# Function: match()

> **match**\<`T`\>(`subject`, `test`): `boolean`

Defined in: [packages/algo-ts/src/util.ts:88](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L88)

Applies all tests in `test` against `subject` and returns a boolean indicating if they all pass

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

## Returns

`boolean`

True if all tests pass, otherwise false
