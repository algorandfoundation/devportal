---
title: FixedArray
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / FixedArray

Defined in: [arrays.ts:9](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L9)

A fixed sized array

## Type Parameters

### TItem

`TItem`

The type of a single item in the array

### TLength

`TLength` _extends_ `number`

The fixed length of the array

## Implements

- `ConcatArray`\<`TItem`\>

## Indexable

\[`index`: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]: `TItem`

Get or set the item at the specified index.
Negative indexes are not supported

## Constructors

### Constructor

> **new FixedArray**\<`TItem`, `TLength`\>(): `FixedArray`\<`TItem`, `TLength`\>

Defined in: [arrays.ts:13](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L13)

Create a new FixedArray instance

#### Returns

`FixedArray`\<`TItem`, `TLength`\>

### Constructor

> **new FixedArray**\<`TItem`, `TLength`\>(...`items`): `FixedArray`\<`TItem`, `TLength`\>

Defined in: [arrays.ts:18](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L18)

Create a new FixedArray instance with the specified items

#### Parameters

##### items

...`TItem`[] & `object`

The initial items for the array

#### Returns

`FixedArray`\<`TItem`, `TLength`\>

## Accessors

### length

#### Get Signature

> **get** **length**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arrays.ts:32](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L32)

Returns the statically declared length of this array

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Implementation of

`ConcatArray.length`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`TItem`\>

Defined in: [arrays.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L69)

Returns an iterator for the items in this array

#### Returns

`IterableIterator`\<`TItem`\>

---

### at()

> **at**(`index`): `TItem`

Defined in: [arrays.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L41)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The index of the item to retrieve

#### Returns

`TItem`

---

### concat()

> **concat**(...`items`): `TItem`[]

Defined in: [arrays.ts:25](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L25)

Returns a new array containing all items from _this_ array, and _other_ array

#### Parameters

##### items

...(`TItem` \| `ConcatArray`\<`TItem`\>)[]

Another array to concat with this one

#### Returns

`TItem`[]

---

### entries()

> **entries**(): `ArrayIterator`\<readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `TItem`\]\>

Defined in: [arrays.ts:76](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L76)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

`ArrayIterator`\<readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `TItem`\]\>

---

### ~~join()~~

> **join**(`separator?`): `string`

Defined in: [arrays.ts:99](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L99)

Creates a string by concatenating all the items in the array delimited by the
specified separator (or ',' by default)

#### Parameters

##### separator?

`string`

#### Returns

`string`

#### Deprecated

Join is not supported in Algorand TypeScript

#### Implementation of

`ConcatArray.join`

---

### keys()

> **keys**(): `IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [arrays.ts:83](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L83)

Returns an iterator for the indexes in this array

#### Returns

`IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

---

### ~~slice()~~

#### Call Signature

> **slice**(): `TItem`[]

Defined in: [arrays.ts:48](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L48)

##### Returns

`TItem`[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new Dynamic array with all items from this array

##### Implementation of

`ConcatArray.slice`

#### Call Signature

> **slice**(`end`): `TItem`[]

Defined in: [arrays.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L54)

##### Parameters

###### end

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items.

##### Returns

`TItem`[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Implementation of

`ConcatArray.slice`

#### Call Signature

> **slice**(`start`, `end`): `TItem`[]

Defined in: [arrays.ts:61](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arrays.ts#L61)

##### Parameters

###### start

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to start copying items.

###### end

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items

##### Returns

`TItem`[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with items from `start`, up until `end`
Negative indexes are taken from the end.

##### Implementation of

`ConcatArray.slice`
