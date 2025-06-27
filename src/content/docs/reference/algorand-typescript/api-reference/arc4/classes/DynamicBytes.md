---
title: 'DynamicBytes'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / DynamicBytes

# Class: DynamicBytes

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:496](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L496)

A variable length sequence of bytes prefixed with its length expressed as a 2 byte uint

## Extends

- [`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase)\<[`Byte`](/reference/algorand-typescript/byte)\>

## Indexable

\[`index`: [`uint64`](/index/type-aliases/uint64)\]: [`Byte`](/reference/algorand-typescript/byte)

## Constructors

### new DynamicBytes()

> **new DynamicBytes**(`value`?): [`DynamicBytes`](/reference/algorand-typescript/dynamicbytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:504](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L504)

Create a new DynamicBytes instance

#### Parameters

##### value?

The bytes or utf8 interpreted string to initialize this type

`string` | [`bytes`](/index/type-aliases/bytes)

#### Returns

[`DynamicBytes`](/reference/algorand-typescript/dynamicbytes)

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

---

### native

#### Get Signature

> **get** **native**(): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:511](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L511)

Get the native bytes value (excludes the length prefix)

##### Returns

[`bytes`](/index/type-aliases/bytes)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<[`Byte`](/reference/algorand-typescript/byte)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:277](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L277)

Returns an iterator for the items in this array

#### Returns

[`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<[`Byte`](/reference/algorand-typescript/byte)\>

#### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`[iterator]`](../-internal-/classes/Arc4ArrayBase.md#iterator)

---

### at()

> **at**(`index`): [`Byte`](/reference/algorand-typescript/byte)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:249](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L249)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/index/type-aliases/uint64compat)

The index of the item to retrieve

#### Returns

[`Byte`](/reference/algorand-typescript/byte)

#### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`at`](/reference/-internal-/classes/arc4arraybase#at)

---

### concat()

> **concat**(`other`): [`DynamicBytes`](/reference/algorand-typescript/dynamicbytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:519](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L519)

Returns a dynamic bytes object containing all bytes from _this_ and _other_

#### Parameters

##### other

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase)\<[`Byte`](/reference/algorand-typescript/byte)\>

Another array of bytes to concat with this one

#### Returns

[`DynamicBytes`](/reference/algorand-typescript/dynamicbytes)

---

### entries()

> **entries**(): [`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<readonly \[[`uint64`](/index/type-aliases/uint64), [`Byte`](/reference/algorand-typescript/byte)\]\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:284](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L284)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

[`IterableIterator`](/reference/-internal-/interfaces/iterableiterator)\<readonly \[[`uint64`](/index/type-aliases/uint64), [`Byte`](/reference/algorand-typescript/byte)\]\>

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

### slice()

#### Call Signature

> **slice**(): [`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<[`Byte`](/reference/algorand-typescript/byte)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:256](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L256)

**`Internal`**

Create a new Dynamic array with all items from this array

##### Returns

[`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<[`Byte`](/reference/algorand-typescript/byte)\>

##### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`slice`](/reference/-internal-/classes/arc4arraybase#slice)

#### Call Signature

> **slice**(`end`): [`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<[`Byte`](/reference/algorand-typescript/byte)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:262](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L262)

**`Internal`**

Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Parameters

###### end

[`Uint64Compat`](/index/type-aliases/uint64compat)

An index in which to stop copying items.

##### Returns

[`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<[`Byte`](/reference/algorand-typescript/byte)\>

##### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`slice`](/reference/-internal-/classes/arc4arraybase#slice)

#### Call Signature

> **slice**(`start`, `end`): [`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<[`Byte`](/reference/algorand-typescript/byte)\>

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

[`DynamicArray`](/reference/algorand-typescript/dynamicarray)\<[`Byte`](/reference/algorand-typescript/byte)\>

##### Inherited from

[`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase).[`slice`](/reference/-internal-/classes/arc4arraybase#slice)
