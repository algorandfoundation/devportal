---
title: 'BoxMap'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / BoxMap

# Type Alias: BoxMap\<TKey, TValue\>

> **BoxMap**\<`TKey`, `TValue`\>: `object`

Defined in: [packages/algo-ts/src/box.ts:234](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L234)

A BoxMap proxy

## Type Parameters

• **TKey**

The type of the value used to key each box.

• **TValue**

The type of the data stored in the box.

## Type declaration

### keyPrefix

> `readonly` **keyPrefix**: [`bytes`](/reference/algorand-typescript/bytes)

Get the bytes used to prefix each key

### delete()

Delete the box associated with a specific key

#### Parameters

##### key

`TKey`

The key of the box to delete

#### Returns

`boolean`

True if the box existed and was deleted, else false

### get()

#### Call Signature

Get the value of a keyed box, error if the box does not exist

##### Parameters

###### key

`TKey`

The key of the box to retrieve

##### Returns

`TValue`

The value

#### Call Signature

Get the value of a keyed box, or return `options.default` if the box does not exist

##### Parameters

###### key

`TKey`

The key of the box to retrieve

###### options

Options to specify a default value to be returned if no other value exists

###### default

`TValue`

##### Returns

`TValue`

The value if the box exists, else the default value

### has()

Returns a boolean indicating if a box associated with the specified key exists

#### Parameters

##### key

`TKey`

The key of the box to check

#### Returns

`boolean`

True if the box exists, else false

### length()

Get the length of a keyed box, or error if the box does not exist

#### Parameters

##### key

`TKey`

The key of the box to check

#### Returns

[`uint64`](/reference/algorand-typescript/uint64)

The length of the box

### maybe()

Get the value of a keyed box if available, and a boolean indicating if the box exists.

If the box does not exist, the value returned at position 0 should not be relied on to have a valid value.

#### Parameters

##### key

`TKey`

The key of the box to check

#### Returns

readonly \[`TValue`, `boolean`\]

A tuple with the first item being the box value, and the second item being a boolean indicating if the box exists.

### set()

Set the value of a keyed box

#### Parameters

##### key

`TKey`

The key of the box to set

##### value

`TValue`

The value to write to that box

#### Returns

`void`
