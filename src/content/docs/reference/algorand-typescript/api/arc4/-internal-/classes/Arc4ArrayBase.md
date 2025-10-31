---
title: Arc4ArrayBase
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / [\<internal\>](/reference/algorand-typescript/api/arc4/-internal-/readme/) / Arc4ArrayBase

Defined in: [arc4/encoded-types.ts:237](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L237)

A base type for arc4 array types

## Extends

- [`ARC4Encoded`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/)

## Extended by

- [`StaticArray`](/reference/algorand-typescript/api/arc4/classes/staticarray/)
- [`DynamicArray`](/reference/algorand-typescript/api/arc4/classes/dynamicarray/)
- [`Address`](/reference/algorand-typescript/api/arc4/classes/address/)
- [`DynamicBytes`](/reference/algorand-typescript/api/arc4/classes/dynamicbytes/)
- [`StaticBytes`](/reference/algorand-typescript/api/arc4/classes/staticbytes/)

## Type Parameters

### TItem

`TItem` _extends_ [`ARC4Encoded`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/)

## Implements

- `ConcatArray`\<`TItem`\>

## Indexable

\[`index`: [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\]: `TItem`

Get or set the item at the specified index.
Negative indexes are not supported

## Constructors

### Constructor

> `protected` **new Arc4ArrayBase**\<`TItem`\>(): `Arc4ArrayBase`\<`TItem`\>

Defined in: [arc4/encoded-types.ts:238](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L238)

#### Returns

`Arc4ArrayBase`\<`TItem`\>

#### Overrides

[`ARC4Encoded`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/).[`constructor`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/reference/algorand-typescript/api/index/type-aliases/bytes/)

#### Inherited from

[`ARC4Encoded`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/).[`bytes`](/reference/algorand-typescript/api/arc4/classes/arc4encoded/#bytes)

---

### length

#### Get Signature

> **get** **length**(): [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:245](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L245)

Returns the current length of this array

##### Returns

[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

#### Implementation of

`ConcatArray.length`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`TItem`\>

Defined in: [arc4/encoded-types.ts:292](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L292)

Returns an iterator for the items in this array

#### Returns

`IterableIterator`\<`TItem`\>

---

### at()

> **at**(`index`): `TItem`

Defined in: [arc4/encoded-types.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L254)

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

Defined in: [arc4/encoded-types.ts:299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L299)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

`IterableIterator`\<readonly \[[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/), `TItem`\]\>

---

### ~~join()~~

> **join**(`separator?`): `string`

Defined in: [arc4/encoded-types.ts:285](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L285)

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

Defined in: [arc4/encoded-types.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L306)

Returns an iterator for the indexes in this array

#### Returns

`IterableIterator`\<[`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)\>

---

### ~~slice()~~

#### Call Signature

> **slice**(): `TItem`[]

Defined in: [arc4/encoded-types.ts:261](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L261)

##### Returns

`TItem`[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new Dynamic array with all items from this array

##### Implementation of

`ConcatArray.slice`

#### Call Signature

> **slice**(`end`): `TItem`[]

Defined in: [arc4/encoded-types.ts:267](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L267)

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

Defined in: [arc4/encoded-types.ts:274](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L274)

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
