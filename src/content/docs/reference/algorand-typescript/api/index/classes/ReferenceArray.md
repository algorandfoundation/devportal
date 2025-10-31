---
title: ReferenceArray
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / ReferenceArray

Defined in: [reference-array.ts:7](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L7)

An in memory mutable array which is passed by reference

## Type Parameters

### TItem

`TItem`

## Indexable

\[`index`: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]: `TItem`

Get or set the item at the specified index.
Negative indexes are not supported

## Constructors

### Constructor

> **new ReferenceArray**\<`TItem`\>(...`items`): `ReferenceArray`\<`TItem`\>

Defined in: [reference-array.ts:12](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L12)

Create a new ReferenceArray with the specified items

#### Parameters

##### items

...`TItem`[]

The initial items for the array

#### Returns

`ReferenceArray`\<`TItem`\>

## Accessors

### length

#### Get Signature

> **get** **length**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [reference-array.ts:17](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L17)

Returns the current length of this array

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`TItem`\>

Defined in: [reference-array.ts:57](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L57)

Returns an iterator for the items in this array

#### Returns

`IterableIterator`\<`TItem`\>

---

### at()

> **at**(`index`): `TItem`

Defined in: [reference-array.ts:26](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L26)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

The index of the item to retrieve

#### Returns

`TItem`

---

### entries()

> **entries**(): `IterableIterator`\<readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `TItem`\]\>

Defined in: [reference-array.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L64)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

`IterableIterator`\<readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `TItem`\]\>

---

### keys()

> **keys**(): `IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [reference-array.ts:71](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L71)

Returns an iterator for the indexes in this array

#### Returns

`IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

---

### pop()

> **pop**(): `TItem`

Defined in: [reference-array.ts:92](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L92)

Pop a single item from this array

#### Returns

`TItem`

---

### push()

> **push**(...`items`): `void`

Defined in: [reference-array.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L85)

Push a number of items into this array

#### Parameters

##### items

...`TItem`[]

The items to be added to this array

#### Returns

`void`

---

### ~~slice()~~

#### Call Signature

> **slice**(): `ReferenceArray`\<`TItem`\>

Defined in: [reference-array.ts:34](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L34)

##### Returns

`ReferenceArray`\<`TItem`\>

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new ReferenceArray with all items from this array

#### Call Signature

> **slice**(`end`): `ReferenceArray`\<`TItem`\>

Defined in: [reference-array.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L41)

##### Parameters

###### end

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items.

##### Returns

`ReferenceArray`\<`TItem`\>

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new ReferenceArray with all items up till `end`.
Negative indexes are taken from the end.

#### Call Signature

> **slice**(`start`, `end`): `ReferenceArray`\<`TItem`\>

Defined in: [reference-array.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference-array.ts#L49)

##### Parameters

###### start

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to start copying items.

###### end

[`Uint64Compat`](/reference/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items

##### Returns

`ReferenceArray`\<`TItem`\>

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new ReferenceArray with items from `start`, up until `end`
Negative indexes are taken from the end.
