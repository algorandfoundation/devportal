---
title: DynamicArray
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/readme/) / DynamicArray

Defined in: [arc4/encoded-types.ts:359](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L359)

A dynamic sized array of arc4 items

## Extends

- [`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/)\<`TItem`\>

## Type Parameters

### TItem

`TItem` _extends_ [`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/arc4encoded/)

The type of a single item in the array

## Indexable

\[`index`: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\]: `TItem`

Get or set the item at the specified index.
Negative indexes are not supported

## Constructors

### Constructor

> **new DynamicArray**\<`TItem`\>(...`items`): `DynamicArray`\<`TItem`\>

Defined in: [arc4/encoded-types.ts:367](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L367)

Create a new DynamicArray with the specified items

#### Parameters

##### items

...`TItem`[]

The initial items for the array

#### Returns

`DynamicArray`\<`TItem`\>

#### Overrides

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`constructor`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#constructor)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`bytes`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#bytes)

---

### length

#### Get Signature

> **get** **length**(): [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:245](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L245)

Returns the current length of this array

##### Returns

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`length`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#length)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`TItem`\>

Defined in: [arc4/encoded-types.ts:292](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L292)

Returns an iterator for the items in this array

#### Returns

`IterableIterator`\<`TItem`\>

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`[iterator]`](../-internal-/classes/Arc4ArrayBase.md#iterator)

---

### at()

> **at**(`index`): `TItem`

Defined in: [arc4/encoded-types.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L254)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64compat/)

The index of the item to retrieve

#### Returns

`TItem`

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`at`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#at)

---

### concat()

> **concat**(`other`): `DynamicArray`\<`TItem`\>

Defined in: [arc4/encoded-types.ts:390](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L390)

Returns a new array containing all items from _this_ array, and _other_ array

#### Parameters

##### other

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/)\<`TItem`\>

Another array to concat with this one

#### Returns

`DynamicArray`\<`TItem`\>

---

### entries()

> **entries**(): `IterableIterator`\<readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `TItem`\]\>

Defined in: [arc4/encoded-types.ts:299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L299)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

`IterableIterator`\<readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `TItem`\]\>

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`entries`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#entries)

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

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`join`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#join)

---

### keys()

> **keys**(): `IterableIterator`\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

Defined in: [arc4/encoded-types.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L306)

Returns an iterator for the indexes in this array

#### Returns

`IterableIterator`\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`keys`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#keys)

---

### pop()

> **pop**(): `TItem`

Defined in: [arc4/encoded-types.ts:382](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L382)

Pop a single item from this array

#### Returns

`TItem`

---

### push()

> **push**(...`items`): `void`

Defined in: [arc4/encoded-types.ts:375](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L375)

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

> **slice**(): `TItem`[]

Defined in: [arc4/encoded-types.ts:261](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L261)

##### Returns

`TItem`[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new Dynamic array with all items from this array

##### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`slice`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#slice)

#### Call Signature

> **slice**(`end`): `TItem`[]

Defined in: [arc4/encoded-types.ts:267](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L267)

##### Parameters

###### end

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64compat/)

An index in which to stop copying items.

##### Returns

`TItem`[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`slice`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#slice)

#### Call Signature

> **slice**(`start`, `end`): `TItem`[]

Defined in: [arc4/encoded-types.ts:274](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L274)

##### Parameters

###### start

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64compat/)

An index in which to start copying items.

###### end

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64compat/)

An index in which to stop copying items

##### Returns

`TItem`[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with items from `start`, up until `end`
Negative indexes are taken from the end.

##### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/).[`slice`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/arc4arraybase/#slice)
