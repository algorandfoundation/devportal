---
editUrl: false
next: false
prev: false
title: "Address"
---

Defined in: [packages/common/src/address.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/common/src/address.ts#L42)

Represents an Algorand address

## Constructors

### Constructor

> **new Address**(`publicKey`): `Address`

Defined in: [packages/common/src/address.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/common/src/address.ts#L55)

Create a new Address object from its binary form.

#### Parameters

##### publicKey

`Uint8Array`

The binary form of the address. Must be 32 bytes.

#### Returns

`Address`

## Properties

### publicKey

> `readonly` **publicKey**: `Uint8Array`

Defined in: [packages/common/src/address.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/common/src/address.ts#L46)

The binary form of the address. For standard accounts, this is the public key.

## Methods

### checksum()

> **checksum**(): `Uint8Array`

Defined in: [packages/common/src/address.ts:72](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/common/src/address.ts#L72)

Compute the 4 byte checksum of the address.

#### Returns

`Uint8Array`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [packages/common/src/address.ts:65](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/common/src/address.ts#L65)

Check if the address is equal to another address.

#### Parameters

##### other

`Address`

#### Returns

`boolean`

***

### toString()

> **toString**(): `string`

Defined in: [packages/common/src/address.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/common/src/address.ts#L79)

Encode the address into a string form.

#### Returns

`string`

***

### fromString()

> `static` **fromString**(`address`): `Address`

Defined in: [packages/common/src/address.ts:89](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/common/src/address.ts#L89)

Decode an address from a string.

#### Parameters

##### address

`string`

The address to decode. Must be 58 characters long.

#### Returns

`Address`

An Address object corresponding to the input string.

***

### zeroAddress()

> `static` **zeroAddress**(): `Address`

Defined in: [packages/common/src/address.ts:113](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/packages/common/src/address.ts#L113)

Get the zero address.

#### Returns

`Address`
