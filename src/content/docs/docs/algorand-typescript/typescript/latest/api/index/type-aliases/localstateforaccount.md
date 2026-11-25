---
editUrl: false
next: false
prev: false
title: "LocalStateForAccount"
---

> **LocalStateForAccount**\<`ValueType`\> = `object`

Defined in: [state.ts:92](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L92)

A proxy for manipulating a local state field for a single account

## Type Parameters

### ValueType

`ValueType`

## Properties

### hasValue

> `readonly` **hasValue**: `boolean`

Defined in: [state.ts:104](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L104)

Gets a boolean value indicating if local state field for a single account currently has a value

***

### value

> **value**: `ValueType`

Defined in: [state.ts:96](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L96)

Get or set the value of this local state field for a single account

## Methods

### delete()

> **delete**(): `void`

Defined in: [state.ts:100](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L100)

Delete the stored value of this local state field for a single account

#### Returns

`void`
