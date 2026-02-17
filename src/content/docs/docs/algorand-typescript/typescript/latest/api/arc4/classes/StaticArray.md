---
title: StaticArray
type: class
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/README/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [arc4](/docs/algorand-typescript/typescript/latest/api/arc4/README/) / StaticArray

Defined in: [arc4/encoded-types.ts:322](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L322)

A fixed sized array of arc4 items

## Extends

- [`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/)\<`TItem`\>

## Type Parameters

### TItem

`TItem` _extends_ [`ARC4Encoded`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/ARC4Encoded/)

The type of a single item in the array

### TLength

`TLength` _extends_ `number`

The fixed length of the array

## Indexable

\[`index`: [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\]: `TItem`

Get or set the item at the specified index.
Negative indexes are not supported

## Constructors

### Constructor

> **new StaticArray**\<`TItem`, `TLength`\>(): `StaticArray`\<`TItem`, `TLength`\>

Defined in: [arc4/encoded-types.ts:329](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L329)

Create a new StaticArray instance

#### Returns

`StaticArray`\<`TItem`, `TLength`\>

#### Overrides

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`constructor`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#constructor)

### Constructor

> **new StaticArray**\<`TItem`, `TLength`\>(...`items`): `StaticArray`\<`TItem`, `TLength`\>

Defined in: [arc4/encoded-types.ts:334](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L334)

Create a new StaticArray instance with the specified items

#### Parameters

##### items

...`TItem`[] & `object`

The initial items for the array

#### Returns

`StaticArray`\<`TItem`, `TLength`\>

#### Overrides

`Arc4ArrayBase<TItem>.constructor`

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`bytes`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#bytes)

---

### length

#### Get Signature

> **get** **length**(): [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:350](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L350)

Returns the statically declared length of this array

##### Returns

[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Overrides

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`length`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#length)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`TItem`\>

Defined in: [arc4/encoded-types.ts:292](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L292)

Returns an iterator for the items in this array

#### Returns

`IterableIterator`\<`TItem`\>

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`[iterator]`](../-internal-/classes/Arc4ArrayBase.md#iterator)

---

### at()

> **at**(`index`): `TItem`

Defined in: [arc4/encoded-types.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L254)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Uint64Compat/)

The index of the item to retrieve

#### Returns

`TItem`

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`at`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#at)

---

### concat()

> **concat**(`other`): [`DynamicArray`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/DynamicArray/)\<`TItem`\>

Defined in: [arc4/encoded-types.ts:343](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L343)

Returns a new array containing all items from _this_ array, and _other_ array

#### Parameters

##### other

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/)\<`TItem`\>

Another array to concat with this one

#### Returns

[`DynamicArray`](/docs/algorand-typescript/typescript/latest/api/arc4/classes/DynamicArray/)\<`TItem`\>

---

### entries()

> **entries**(): `IterableIterator`\<readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `TItem`\]\>

Defined in: [arc4/encoded-types.ts:299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L299)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

`IterableIterator`\<readonly \[[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/), `TItem`\]\>

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`entries`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#entries)

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

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`join`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#join)

---

### keys()

> **keys**(): `IterableIterator`\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

Defined in: [arc4/encoded-types.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L306)

Returns an iterator for the indexes in this array

#### Returns

`IterableIterator`\<[`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)\>

#### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`keys`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#keys)

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

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`slice`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#slice)

#### Call Signature

> **slice**(`end`): `TItem`[]

Defined in: [arc4/encoded-types.ts:267](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L267)

##### Parameters

###### end

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Uint64Compat/)

An index in which to stop copying items.

##### Returns

`TItem`[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`slice`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#slice)

#### Call Signature

> **slice**(`start`, `end`): `TItem`[]

Defined in: [arc4/encoded-types.ts:274](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L274)

##### Parameters

###### start

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Uint64Compat/)

An index in which to start copying items.

###### end

[`Uint64Compat`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/Uint64Compat/)

An index in which to stop copying items

##### Returns

`TItem`[]

##### Deprecated

Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with items from `start`, up until `end`
Negative indexes are taken from the end.

##### Inherited from

[`Arc4ArrayBase`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/).[`slice`](/docs/algorand-typescript/typescript/latest/api/arc4/-internal-/classes/Arc4ArrayBase/#slice)
