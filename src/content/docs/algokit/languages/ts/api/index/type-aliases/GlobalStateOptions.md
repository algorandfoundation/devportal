---
title: Type Alias: GlobalStateOptions\<ValueType\>
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [index](../README) / GlobalStateOptions



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

> `optional` **key**: [`bytes`](bytes) \| `string`

The key to be used for this global state field.

Defaults to the name of the property this proxy is assigned to