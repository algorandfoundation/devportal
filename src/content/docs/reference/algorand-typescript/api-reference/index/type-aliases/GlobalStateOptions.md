---
title: 'GlobalStateOptions'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / GlobalStateOptions

# Type Alias: GlobalStateOptions\<ValueType\>

> **GlobalStateOptions**\<`ValueType`\>: `object`

Defined in: [packages/algo-ts/src/state.ts:26](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L26)

Options for declaring a global state field

## Type Parameters

• **ValueType**

## Type declaration

### initialValue?

> `optional` **initialValue**: `ValueType`

An initial value to assign to this global state field when the application is created

### key?

> `optional` **key**: [`bytes`](/reference/algorand-typescript/bytes) \| `string`

The key to be used for this global state field.

Defaults to the name of the property this proxy is assigned to
