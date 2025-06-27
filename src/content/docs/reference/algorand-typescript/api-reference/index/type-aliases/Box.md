---
title: 'Box'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / Box

# Type Alias: Box\<TValue\>

> **Box**\<`TValue`\>: `object`

Defined in: [packages/algo-ts/src/box.ts:214](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L214)

A Box proxy

## Type Parameters

• **TValue**

The type of the data stored in the box.

## Type declaration

### exists

> `readonly` **exists**: `boolean`

Get a boolean indicating if the box exists or not

### key

> `readonly` **key**: [`bytes`](/reference/algorand-typescript/bytes)

Get the key used by this box proxy

### length

> `readonly` **length**: [`uint64`](/reference/algorand-typescript/uint64)

Returns the length of the box, or error if the box does not exist

### value

> **value**: `TValue`

Get or set the value stored in the box

Get will error if the box does not exist

### delete()

Delete the box associated with this proxy if it exists.

#### Returns

`boolean`

True if the box existed and was deleted, else false

### get()

Get the value stored in the box, or return a specified default value if the box does not exist

#### Parameters

##### options

Options to specify a default value to be returned if no other value exists

###### default

`TValue`

#### Returns

`TValue`

The value if the box exists, else the default value

### maybe()

Get the value stored in the box if available, and a boolean indicating if the box exists.

If the box does not exist, the value returned at position 0 should not be relied on to have a valid value.

#### Returns

readonly \[`TValue`, `boolean`\]

A tuple with the first item being the box value, and the second item being a boolean indicating if the box exists.
