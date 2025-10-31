---
title: Box
type: doc
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / Box

> **Box**\<`TValue`\> = `object`

Defined in: [box.ts:131](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L131)

Creates a Box proxy object offering methods of getting and setting the value stored in a single box.

## Param

Options for creating the Box proxy

## Type Parameters

### TValue

`TValue`

The type of the data stored in the box. This value will be encoded to bytes when stored and decoded on retrieval.

## Properties

### exists

> `readonly` **exists**: `boolean`

Defined in: [box.ts:33](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L33)

Get a boolean indicating if the box exists or not

---

### key

> `readonly` **key**: [`bytes`](bytes)

Defined in: [box.ts:23](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L23)

Get the key used by this box proxy

---

### length

> `readonly` **length**: [`uint64`](uint64)

Defined in: [box.ts:55](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L55)

Returns the length of the box, or error if the box does not exist

---

### value

> **value**: `TValue`

Defined in: [box.ts:29](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L29)

Get or set the value stored in the box

Get will error if the box does not exist

## Methods

### create()

> **create**(`options?`): `boolean`

Defined in: [box.ts:19](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L19)

Create the box for this proxy with a bzero value.

- If options.size is specified, the box will be created with that length
- Otherwise the box will be created with storage size of TValue. Errors if the size of TValue is not fixed

No op if the box already exists with the same size
Errors if the box already exists with a different size.
Errors if the specified size is greater than the max box size (32,768)

#### Parameters

##### options?

###### size?

[`uint64`](uint64)

#### Returns

`boolean`

True if the box was created, false if it already existed

---

### delete()

> **delete**(): `boolean`

Defined in: [box.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L44)

Delete the box associated with this proxy if it exists.

#### Returns

`boolean`

True if the box existed and was deleted, else false

---

### extract()

> **extract**(`start`, `length`): [`bytes`](bytes)

Defined in: [box.ts:87](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L87)

Extract a slice of bytes from the box

Error if the box does not exist
Error if `start` + `length` is greater than the box size

#### Parameters

##### start

[`uint64`](uint64)

The index to start extracting

##### length

[`uint64`](uint64)

The number of bytes to extract

#### Returns

[`bytes`](bytes)

The extracted bytes

---

### get()

> **get**(`options`): `TValue`

Defined in: [box.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L39)

Get the value stored in the box, or return a specified default value if the box does not exist

#### Parameters

##### options

Options to specify a default value to be returned if no other value exists

###### default

`TValue`

#### Returns

`TValue`

The value if the box exists, else the default value

---

### maybe()

> **maybe**(): readonly \[`TValue`, `boolean`\]

Defined in: [box.ts:51](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L51)

Get the value stored in the box if available, and a boolean indicating if the box exists.

If the box does not exist, the value returned at position 0 should not be relied on to have a valid value.

#### Returns

readonly \[`TValue`, `boolean`\]

A tuple with the first item being the box value, and the second item being a boolean indicating if the box exists.

---

### replace()

> **replace**(`start`, `value`): `void`

Defined in: [box.ts:77](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L77)

Replace bytes in a box starting at `start`.

Error if the box does not exist
Error if `start` + `value.length` is greater than the box size

#### Parameters

##### start

[`uint64`](uint64)

The index to start replacing

##### value

[`bytes`](bytes)

The value to be written

#### Returns

`void`

---

### resize()

> **resize**(`newSize`): `void`

Defined in: [box.ts:96](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L96)

Resize the box to the specified size.

Adds zero bytes to the end if the new size is larger
Removes end bytes if the new size is smaller
Error if the box does not exist

#### Parameters

##### newSize

[`uint64`](uint64)

The new size for the box

#### Returns

`void`

---

### splice()

> **splice**(`start`, `length`, `value`): `void`

Defined in: [box.ts:68](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L68)

Splice the specified bytes into the box starting at `start`, removing `length` bytes
from the existing value and replacing them with `value` before appending the remainder of the original box value.

If the resulting byte value is larger than length, bytes will be trimmed from the end
If the resulting byte value is smaller than length, zero bytes will be appended to the end
Error if the box does not exist

#### Parameters

##### start

[`uint64`](uint64)

The index to start inserting the value

##### length

[`uint64`](uint64)

The number of bytes after `start` to be omitted

##### value

[`bytes`](bytes)

The value to be inserted

#### Returns

`void`
