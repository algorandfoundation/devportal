---
title: 'DynamicArray'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / DynamicArray

# Class: DynamicArray\<TItem\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:344](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L344)

A dynamic sized array of arc4 items

## Extends

- [`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase)\<`TItem`\>

## Type Parameters

• **TItem** _extends_ [`ARC4Encoded`](/reference/algorand-typescript/arc4encoded)

The type of a single item in the array

## Indexable

\[`index`: [`uint64`](/index/type-aliases/uint64)\]: `TItem`

## Constructors

### new DynamicArray()

> **new DynamicArray**\<`TItem`\>(...`items`): [`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:352](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L352)

Create a new DynamicArray with the specified items

#### Parameters

##### items

...`TItem`[]

The initial items for the array

#### Returns

[`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

#### Overrides

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`constructor`](/reference/-internal-/classes/arc4arraybase#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/index/type-aliases/bytes)

#### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`bytes`](/reference/-internal-/classes/arc4arraybase#bytes)

---

### length

#### Get Signature

> **get** **length**(): [`uint64`](/index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:240](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L240)

Returns the current length of this array

##### Returns

[`uint64`](/index/type-aliases/uint64)

#### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`length`](/reference/-internal-/classes/arc4arraybase#length)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:277](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L277)

Returns an iterator for the items in this array

#### Returns

[`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<`TItem`\>

#### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`[iterator]`](../-internal-/classes/Arc4ArrayBase.md#iterator)

---

### at()

> **at**(`index`): `TItem`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:249](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L249)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/index/type-aliases/uint64compat)

The index of the item to retrieve

#### Returns

`TItem`

#### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`at`](/reference/-internal-/classes/arc4arraybase#at)

---

### concat()

> **concat**(`other`): [`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:382](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L382)

Returns a new array containing all items from _this_ array, and _other_ array

#### Parameters

##### other

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase)\<`TItem`\>

Another array to concat with this one

#### Returns

[`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

---

### copy()

> **copy**(): [`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:374](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L374)

Returns a copy of this array

#### Returns

[`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

---

### entries()

> **entries**(): [`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<readonly \[[`uint64`](/index/type-aliases/uint64), `TItem`\]\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:284](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L284)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

[`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<readonly \[[`uint64`](/index/type-aliases/uint64), `TItem`\]\>

#### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`entries`](/reference/-internal-/classes/arc4arraybase#entries)

---

### keys()

> **keys**(): [`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<[`uint64`](/index/type-aliases/uint64)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:291](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L291)

Returns an iterator for the indexes in this array

#### Returns

[`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<[`uint64`](/index/type-aliases/uint64)\>

#### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`keys`](/reference/-internal-/classes/arc4arraybase#keys)

---

### pop()

> **pop**(): `TItem`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:367](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L367)

Pop a single item from this array

#### Returns

`TItem`

---

### push()

> **push**(...`items`): `void`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:360](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L360)

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

> **slice**(): [`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:256](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L256)

**`Internal`**

Create a new Dynamic array with all items from this array

##### Returns

[`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

##### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`slice`](/reference/-internal-/classes/arc4arraybase#slice)

#### Call Signature

> **slice**(`end`): [`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:262](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L262)

**`Internal`**

Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Parameters

###### end

[`Uint64Compat`](/index/type-aliases/uint64compat)

An index in which to stop copying items.

##### Returns

[`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

##### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`slice`](/reference/-internal-/classes/arc4arraybase#slice)

#### Call Signature

> **slice**(`start`, `end`): [`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:269](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L269)

**`Internal`**

Create a new DynamicArray with items from `start`, up until `end`
Negative indexes are taken from the end.

##### Parameters

###### start

[`Uint64Compat`](/index/type-aliases/uint64compat)

An index in which to start copying items.

###### end

[`Uint64Compat`](/index/type-aliases/uint64compat)

An index in which to stop copying items

##### Returns

[`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<`TItem`\>

##### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`slice`](/reference/-internal-/classes/arc4arraybase#slice)
