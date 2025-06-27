---
title: 'Arc4ArrayBase'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/readme) / [\<internal\>](/reference/readme) / Arc4ArrayBase

# Class: `abstract` Arc4ArrayBase\<TItem\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:232](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L232)

A base type for arc4 array types

## Extends

- [`ARC4Encoded`](/classes/arc4encoded)

## Extended by

- [`StaticArray`](/classes/staticarray)
- [`DynamicArray`](/classes/dynamicarray)
- [`Address`](/classes/address)
- [`DynamicBytes`](/classes/dynamicbytes)
- [`StaticBytes`](/classes/staticbytes)

## Type Parameters

• **TItem** _extends_ [`ARC4Encoded`](/classes/arc4encoded)

## Indexable

\[`index`: [`uint64`](/index/type-aliases/uint64)\]: `TItem`

## Constructors

### new Arc4ArrayBase()

> `protected` **new Arc4ArrayBase**\<`TItem`\>(): [`Arc4ArrayBase`](/reference/algorand-typescript/arc4arraybase)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:233](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L233)

#### Returns

[`Arc4ArrayBase`](/reference/algorand-typescript/arc4arraybase)\<`TItem`\>

#### Overrides

[`ARC4Encoded`](/classes/arc4encoded).[`constructor`](/classes/arc4encoded#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/index/type-aliases/bytes)

#### Inherited from

[`ARC4Encoded`](/classes/arc4encoded).[`bytes`](/classes/arc4encoded#bytes)

---

### length

#### Get Signature

> **get** **length**(): [`uint64`](/index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:240](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L240)

Returns the current length of this array

##### Returns

[`uint64`](/index/type-aliases/uint64)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](/reference/interfaces/iterableiterator)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:277](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L277)

Returns an iterator for the items in this array

#### Returns

[`IterableIterator`](/reference/interfaces/iterableiterator)\<`TItem`\>

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

---

### entries()

> **entries**(): [`IterableIterator`](/reference/interfaces/iterableiterator)\<readonly \[[`uint64`](/index/type-aliases/uint64), `TItem`\]\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:284](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L284)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

[`IterableIterator`](/reference/interfaces/iterableiterator)\<readonly \[[`uint64`](/index/type-aliases/uint64), `TItem`\]\>

---

### keys()

> **keys**(): [`IterableIterator`](/reference/interfaces/iterableiterator)\<[`uint64`](/index/type-aliases/uint64)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:291](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L291)

Returns an iterator for the indexes in this array

#### Returns

[`IterableIterator`](/reference/interfaces/iterableiterator)\<[`uint64`](/index/type-aliases/uint64)\>

---

### slice()

#### Call Signature

> **slice**(): [`DynamicArray`](/classes/dynamicarray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:256](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L256)

**`Internal`**

Create a new Dynamic array with all items from this array

##### Returns

[`DynamicArray`](/classes/dynamicarray)\<`TItem`\>

#### Call Signature

> **slice**(`end`): [`DynamicArray`](/classes/dynamicarray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:262](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L262)

**`Internal`**

Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Parameters

###### end

[`Uint64Compat`](/index/type-aliases/uint64compat)

An index in which to stop copying items.

##### Returns

[`DynamicArray`](/classes/dynamicarray)\<`TItem`\>

#### Call Signature

> **slice**(`start`, `end`): [`DynamicArray`](/classes/dynamicarray)\<`TItem`\>

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

[`DynamicArray`](/classes/dynamicarray)\<`TItem`\>
