---
title: 'Address'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / Address

# Class: Address

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:438](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L438)

A 32 byte Algorand Address

## Extends

- [`Arc4ArrayBase`](/reference/-internal-/classes/arc4arraybase)\<[`Byte`](/reference/algorand-typescript/byte)\>

## Indexable

\[`index`: [`uint64`](/index/type-aliases/uint64)\]: [`Byte`](/reference/algorand-typescript/byte)

## Constructors

### new Address()

> **new Address**(`value`?): [`Address`](/reference/algorand-typescript/address)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:446](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L446)

Create a new Address instance

#### Parameters

##### value?

An Account, base 32 address string, or the address bytes

`string` | [`bytes`](/index/type-aliases/bytes) | [`Account`](/index/type-aliases/account)

#### Returns

[`Address`](/reference/algorand-typescript/address)

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

> **get** **native**(): [`Account`](/index/type-aliases/account)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:453](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L453)

Returns an Account instance for this Address

##### Returns

[`Account`](/index/type-aliases/account)

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
