---
title: 'LocalStateForAccount'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / LocalStateForAccount

# Type Alias: LocalStateForAccount\<ValueType\>

> **LocalStateForAccount**\<`ValueType`\>: `object`

Defined in: [packages/algo-ts/src/state.ts:51](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L51)

A proxy for manipulating a local state field for a single account

## Type Parameters

• **ValueType**

## Type declaration

### hasValue

> `readonly` **hasValue**: `boolean`

Gets a boolean value indicating if local state field for a single account currently has a value

### value

> **value**: `ValueType`

Get or set the value of this local state field for a single account

### delete()

Delete the stored value of this local state field for a single account

#### Returns

`void`
