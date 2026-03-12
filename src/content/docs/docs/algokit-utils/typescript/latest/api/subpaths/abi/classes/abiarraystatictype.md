---
editUrl: false
next: false
prev: false
title: "ABIArrayStaticType"
---

Defined in: [packages/abi/src/abi-type.ts:598](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L598)

A static-length array ABI type.

## Extends

- [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

## Constructors

### Constructor

> **new ABIArrayStaticType**(`childType`, `length`): `ABIArrayStaticType`

Defined in: [packages/abi/src/abi-type.ts:604](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L604)

Creates a new static array type.

#### Parameters

##### childType

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

The type of the array elements

##### length

`number`

The fixed length of the array

#### Returns

`ABIArrayStaticType`

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`constructor`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#constructor)

## Properties

### childType

> `readonly` **childType**: [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

Defined in: [packages/abi/src/abi-type.ts:605](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L605)

The type of the array elements

***

### length

> `readonly` **length**: `number`

Defined in: [packages/abi/src/abi-type.ts:606](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L606)

The fixed length of the array

## Accessors

### displayName

#### Get Signature

> **get** **displayName**(): `string`

Defined in: [packages/abi/src/abi-type.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L49)

Returns a user-friendly display name for this type.

##### Returns

`string`

The display name for this type

#### Inherited from

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`displayName`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#displayname)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/abi/src/abi-type.ts:614](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L614)

Returns the ARC-4 type name string representation.

##### Returns

`string`

The ARC-4 type string

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`name`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#name)

## Methods

### byteLen()

> **byteLen**(): `number`

Defined in: [packages/abi/src/abi-type.ts:626](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L626)

Gets the byte length of the encoded type for static types.

#### Returns

`number`

The number of bytes needed to encode this type

#### Throws

Error if the type is dynamic

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`byteLen`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#bytelen)

***

### decode()

> **decode**(`bytes`): `Uint8Array`\<`ArrayBufferLike`\> \| [`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)[]

Defined in: [packages/abi/src/abi-type.ts:652](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L652)

Decodes bytes according to this ABI type.

#### Parameters

##### bytes

`Uint8Array`

The bytes to decode

#### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| [`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)[]

The decoded value

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`decode`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#decode)

***

### encode()

> **encode**(`value`): `Uint8Array`

Defined in: [packages/abi/src/abi-type.ts:641](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L641)

Encodes a value according to this ABI type.

#### Parameters

##### value

[`ABIValue`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abivalue/)

The value to encode

#### Returns

`Uint8Array`

The encoded bytes

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`encode`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#encode)

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [packages/abi/src/abi-type.ts:618](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L618)

Checks if this ABI type is equal to another.

#### Parameters

##### other

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

The other ABI type to compare with

#### Returns

`boolean`

True if the types are equal, false otherwise

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`equals`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#equals)

***

### isDynamic()

> **isDynamic**(): `boolean`

Defined in: [packages/abi/src/abi-type.ts:622](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L622)

Checks if this ABI type is dynamic (variable-length).

#### Returns

`boolean`

True if the type is dynamic, false otherwise

#### Overrides

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`isDynamic`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#isdynamic)

***

### toABITupleType()

> **toABITupleType**(): [`ABITupleType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitupletype/)

Defined in: [packages/abi/src/abi-type.ts:637](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L637)

Converts this static array type to an equivalent tuple type.

#### Returns

[`ABITupleType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitupletype/)

The equivalent tuple type

***

### toString()

> **toString**(): `string`

Defined in: [packages/abi/src/abi-type.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L57)

Returns the ARC-4 type name string representation.

#### Returns

`string`

The ARC-4 type string

#### Inherited from

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`toString`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#tostring)

***

### from()

> `static` **from**(`str`): [`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

Defined in: [packages/abi/src/abi-type.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L100)

Creates an ABI type from an ARC-4 type string.

#### Parameters

##### str

`string`

The ARC-4 type string (e.g., "uint256", "bool", "(uint8,address)")

#### Returns

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/)

The corresponding ABI type

#### Inherited from

[`ABIType`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/).[`from`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/classes/abitype/#from)
