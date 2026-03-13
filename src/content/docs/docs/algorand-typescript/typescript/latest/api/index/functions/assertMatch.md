---
editUrl: false
next: false
prev: false
title: "assertMatch"
---

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

`MatchTest`\<`T`\>

An object containing one or more tests to be applied to the subject

### message?

`string`

An optional message to show if the assertion fails

## Returns

`void`
