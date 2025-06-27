---
title: 'MutableArray'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / MutableArray

# Class: MutableArray\<TItem\>

Defined in: [packages/algo-ts/src/mutable-array.ts:7](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L7)

An in memory mutable array which is passed by reference

## Type Parameters

• **TItem**

## Indexable

\[`index`: [`uint64`](/reference/type-aliases/uint64)\]: `TItem`

## Constructors

### new MutableArray()

> **new MutableArray**\<`TItem`\>(...`items`): [`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>

Defined in: [packages/algo-ts/src/mutable-array.ts:12](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L12)

Create a new MutableArray with the specified items

#### Parameters

##### items

...`TItem`[]

The initial items for the array

#### Returns

[`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>

## Accessors

### length

#### Get Signature

> **get** **length**(): [`uint64`](/reference/type-aliases/uint64)

Defined in: [packages/algo-ts/src/mutable-array.ts:17](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L17)

Returns the current length of this array

##### Returns

[`uint64`](/reference/type-aliases/uint64)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<`TItem`\>

Defined in: [packages/algo-ts/src/mutable-array.ts:57](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L57)

Returns an iterator for the items in this array

#### Returns

[`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<`TItem`\>

---

### at()

> **at**(`index`): `TItem`

Defined in: [packages/algo-ts/src/mutable-array.ts:26](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L26)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/reference/type-aliases/uint64compat)

The index of the item to retrieve

#### Returns

`TItem`

---

### copy()

> **copy**(): [`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>

Defined in: [packages/algo-ts/src/mutable-array.ts:99](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L99)

Create a copy of this array

#### Returns

[`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>

---

### entries()

> **entries**(): [`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<readonly \[[`uint64`](/reference/type-aliases/uint64), `TItem`\]\>

Defined in: [packages/algo-ts/src/mutable-array.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L64)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

[`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<readonly \[[`uint64`](/reference/type-aliases/uint64), `TItem`\]\>

---

### keys()

> **keys**(): [`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<[`uint64`](/reference/type-aliases/uint64)\>

Defined in: [packages/algo-ts/src/mutable-array.ts:71](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L71)

Returns an iterator for the indexes in this array

#### Returns

[`IterableIterator`](/arc4/-internal-/interfaces/iterableiterator)\<[`uint64`](/reference/type-aliases/uint64)\>

---

### pop()

> **pop**(): `TItem`

Defined in: [packages/algo-ts/src/mutable-array.ts:92](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L92)

Pop a single item from this array

#### Returns

`TItem`

---

### push()

> **push**(...`items`): `void`

Defined in: [packages/algo-ts/src/mutable-array.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L85)

Push a number of items into this array

#### Parameters

##### items

...`TItem`[]

The items to be added to this array

#### Returns

`void`

---

### slice()

#### Call Signature

> **slice**(): [`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>

Defined in: [packages/algo-ts/src/mutable-array.ts:34](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L34)

**`Internal`**

Create a new Dynamic array with all items from this array
Not supported yet

##### Returns

[`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>

#### Call Signature

> **slice**(`end`): [`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>

Defined in: [packages/algo-ts/src/mutable-array.ts:41](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L41)

**`Internal`**

Create a new MutableArray with all items up till `end`.
Negative indexes are taken from the end.

##### Parameters

###### end

[`Uint64Compat`](/reference/type-aliases/uint64compat)

An index in which to stop copying items.
Not supported yet

##### Returns

[`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>

#### Call Signature

> **slice**(`start`, `end`): [`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>

Defined in: [packages/algo-ts/src/mutable-array.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/mutable-array.ts#L49)

**`Internal`**

Create a new MutableArray with items from `start`, up until `end`
Negative indexes are taken from the end.

##### Parameters

###### start

[`Uint64Compat`](/reference/type-aliases/uint64compat)

An index in which to start copying items.

###### end

[`Uint64Compat`](/reference/type-aliases/uint64compat)

An index in which to stop copying items
Not supported yet

##### Returns

[`MutableArray`](/reference/algorand-typescript/mutablearray)\<`TItem`\>
