---
title: 'GlobalState'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / GlobalState

# Type Alias: GlobalState\<ValueType\>

> **GlobalState**\<`ValueType`\>: `object`

Defined in: [packages/algo-ts/src/state.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L44)

A proxy for manipulating a global state field

## Type Parameters

• **ValueType**

The type of the value being stored - must be a serializable type

## Type declaration

### hasValue

> `readonly` **hasValue**: `boolean`

Gets a boolean value indicating if global state field currently has a value

### value

> **value**: `ValueType`

Get or set the value of this global state field

### delete()

Delete the stored value of this global state field

#### Returns

`void`
