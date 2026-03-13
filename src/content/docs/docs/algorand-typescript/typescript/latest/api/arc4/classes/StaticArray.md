---
editUrl: false
next: false
prev: false
title: "StaticArray"
---

Defined in: [arc4/encoded-types.ts:322](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L322)

A fixed sized array of arc4 items

## Extends

- `Arc4ArrayBase`\<`TItem`\>

## Type Parameters

### TItem

`TItem` *extends* [`ARC4Encoded`](/algorand-typescript/api/arc4/classes/arc4encoded/)

The type of a single item in the array

### TLength

`TLength` *extends* `number`

The fixed length of the array

## Indexable

\[`index`: [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\]: `TItem`

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

`Arc4ArrayBase<TItem>.constructor`

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

> **get** **bytes**(): [`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

Defined in: [arc4/encoded-types.ts:102](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L102)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](/algorand-typescript/api/index/type-aliases/bytes/)

#### Inherited from

`Arc4ArrayBase.bytes`

***

### length

#### Get Signature

> **get** **length**(): [`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [arc4/encoded-types.ts:350](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L350)

Returns the statically declared length of this array

##### Returns

[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)

#### Overrides

`Arc4ArrayBase.length`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<`TItem`\>

Defined in: [arc4/encoded-types.ts:292](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L292)

Returns an iterator for the items in this array

#### Returns

`IterableIterator`\<`TItem`\>

#### Inherited from

`Arc4ArrayBase.[iterator]`

***

### at()

> **at**(`index`): `TItem`

Defined in: [arc4/encoded-types.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L254)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](/algorand-typescript/api/index/type-aliases/uint64compat/)

The index of the item to retrieve

#### Returns

`TItem`

#### Inherited from

`Arc4ArrayBase.at`

***

### concat()

> **concat**(`other`): [`DynamicArray`](/algorand-typescript/api/arc4/classes/dynamicarray/)\<`TItem`\>

Defined in: [arc4/encoded-types.ts:343](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L343)

Returns a new array containing all items from _this_ array, and _other_ array

#### Parameters

##### other

`Arc4ArrayBase`\<`TItem`\>

Another array to concat with this one

#### Returns

[`DynamicArray`](/algorand-typescript/api/arc4/classes/dynamicarray/)\<`TItem`\>

***

### entries()

> **entries**(): `IterableIterator`\<readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `TItem`\]\>

Defined in: [arc4/encoded-types.ts:299](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L299)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

`IterableIterator`\<readonly \[[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/), `TItem`\]\>

#### Inherited from

`Arc4ArrayBase.entries`

***

### ~~join()~~

> **join**(`separator?`): `string`

Defined in: [arc4/encoded-types.ts:285](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L285)

Creates a string by concatenating all the items in the array delimited by the
specified separator (or ',' by default)

:::caution[Deprecated]
Join is not supported in Algorand TypeScript
:::

#### Parameters

##### separator?

`string`

#### Returns

`string`

#### Inherited from

`Arc4ArrayBase.join`

***

### keys()

> **keys**(): `IterableIterator`\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

Defined in: [arc4/encoded-types.ts:306](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L306)

Returns an iterator for the indexes in this array

#### Returns

`IterableIterator`\<[`uint64`](/algorand-typescript/api/index/type-aliases/uint64/)\>

#### Inherited from

`Arc4ArrayBase.keys`

***

### ~~slice()~~

#### Call Signature

> **slice**(): `TItem`[]

Defined in: [arc4/encoded-types.ts:261](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L261)

:::caution[Deprecated]
Array slicing is not yet supported in Algorand TypeScript
Create a new Dynamic array with all items from this array
:::

##### Returns

`TItem`[]

##### Inherited from

`Arc4ArrayBase.slice`

#### Call Signature

> **slice**(`end`): `TItem`[]

Defined in: [arc4/encoded-types.ts:267](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L267)

:::caution[Deprecated]
Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.
:::

##### Parameters

###### end

[`Uint64Compat`](/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items.

##### Returns

`TItem`[]

##### Inherited from

`Arc4ArrayBase.slice`

#### Call Signature

> **slice**(`start`, `end`): `TItem`[]

Defined in: [arc4/encoded-types.ts:274](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L274)

:::caution[Deprecated]
Array slicing is not yet supported in Algorand TypeScript
Create a new DynamicArray with items from `start`, up until `end`
Negative indexes are taken from the end.
:::

##### Parameters

###### start

[`Uint64Compat`](/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to start copying items.

###### end

[`Uint64Compat`](/algorand-typescript/api/index/type-aliases/uint64compat/)

An index in which to stop copying items

##### Returns

`TItem`[]

##### Inherited from

`Arc4ArrayBase.slice`
