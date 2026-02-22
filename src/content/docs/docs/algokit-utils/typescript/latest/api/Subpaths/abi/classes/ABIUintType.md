---
editUrl: false
next: false
prev: false
title: "ABIUintType"
---

Defined in: [packages/abi/src/abi-type.ts:171](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L171)

An unsigned integer ABI type of a specific bit size.

## Extends

- [`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

## Constructors

### Constructor

> **new ABIUintType**(`bitSize`): `ABIUintType`

Defined in: [packages/abi/src/abi-type.ts:176](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L176)

Creates a new unsigned integer type.

#### Parameters

##### bitSize

`number`

The bit size (must be a multiple of 8, between 8 and 512)

#### Returns

`ABIUintType`

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`constructor`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#constructor)

## Properties

### bitSize

> `readonly` **bitSize**: `number`

Defined in: [packages/abi/src/abi-type.ts:176](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L176)

The bit size (must be a multiple of 8, between 8 and 512)

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

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`displayName`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#displayname)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/abi/src/abi-type.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L183)

Returns the ARC-4 type name string representation.

##### Returns

`string`

The ARC-4 type string

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`name`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#name)

## Methods

### byteLen()

> **byteLen**(): `number`

Defined in: [packages/abi/src/abi-type.ts:195](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L195)

Gets the byte length of the encoded type for static types.

#### Returns

`number`

The number of bytes needed to encode this type

#### Throws

Error if the type is dynamic

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`byteLen`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#bytelen)

***

### decode()

> **decode**(`bytes`): [`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)

Defined in: [packages/abi/src/abi-type.ts:213](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L213)

Decodes bytes according to this ABI type.

#### Parameters

##### bytes

`Uint8Array`

The bytes to decode

#### Returns

[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)

The decoded value

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`decode`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#decode)

***

### encode()

> **encode**(`value`): `Uint8Array`

Defined in: [packages/abi/src/abi-type.ts:199](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L199)

Encodes a value according to this ABI type.

#### Parameters

##### value

[`ABIValue`](/algokit-utils-ts/api/subpaths/abi/type-aliases/abivalue/)

The value to encode

#### Returns

`Uint8Array`

The encoded bytes

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`encode`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#encode)

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [packages/abi/src/abi-type.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L187)

Checks if this ABI type is equal to another.

#### Parameters

##### other

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

The other ABI type to compare with

#### Returns

`boolean`

True if the types are equal, false otherwise

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`equals`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#equals)

***

### isDynamic()

> **isDynamic**(): `boolean`

Defined in: [packages/abi/src/abi-type.ts:191](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L191)

Checks if this ABI type is dynamic (variable-length).

#### Returns

`boolean`

True if the type is dynamic, false otherwise

#### Overrides

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`isDynamic`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#isdynamic)

***

### toString()

> **toString**(): `string`

Defined in: [packages/abi/src/abi-type.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L57)

Returns the ARC-4 type name string representation.

#### Returns

`string`

The ARC-4 type string

#### Inherited from

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`toString`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#tostring)

***

### from()

> `static` **from**(`str`): [`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

Defined in: [packages/abi/src/abi-type.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/abi/src/abi-type.ts#L100)

Creates an ABI type from an ARC-4 type string.

#### Parameters

##### str

`string`

The ARC-4 type string (e.g., "uint256", "bool", "(uint8,address)")

#### Returns

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/)

The corresponding ABI type

#### Inherited from

[`ABIType`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/).[`from`](/algokit-utils-ts/api/subpaths/abi/classes/abitype/#from)
