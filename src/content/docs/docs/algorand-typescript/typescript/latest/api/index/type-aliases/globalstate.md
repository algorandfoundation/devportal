---
editUrl: false
next: false
prev: false
title: "GlobalState"
---

> **GlobalState**\<`ValueType`\> = `object`

Defined in: [state.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L44)

A proxy for manipulating a global state field

## Type Parameters

### ValueType

`ValueType`

The type of the value being stored - must be a serializable type

## Properties

### hasValue

> `readonly` **hasValue**: `boolean`

Defined in: [state.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L21)

Gets a boolean value indicating if global state field currently has a value

***

### value

> **value**: `ValueType`

Defined in: [state.ts:13](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L13)

Get or set the value of this global state field

## Methods

### delete()

> **delete**(): `void`

Defined in: [state.ts:17](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L17)

Delete the stored value of this global state field

#### Returns

`void`
