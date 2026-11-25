---
editUrl: false
next: false
prev: false
title: "Arc56Method"
---

Defined in: [src/types/app-arc56.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L23)

Wrapper around `algosdk.ABIMethod` that represents an ARC-56 ABI method.

## Extends

- `ABIMethod`

## Constructors

### Constructor

> **new Arc56Method**(`method`): `Arc56Method`

Defined in: [src/types/app-arc56.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L27)

#### Parameters

##### method

[`Method`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/method/)

#### Returns

`Arc56Method`

#### Overrides

`algosdk.ABIMethod.constructor`

## Properties

### args

> `readonly` **args**: `object`[]

Defined in: [src/types/app-arc56.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L24)

#### defaultValue?

> `optional` **defaultValue?**: `object`

The default value that clients should use.

##### defaultValue.data

> **data**: `string`

Base64 encoded bytes, base64 ARC4 encoded uint64, or UTF-8 method selector

##### defaultValue.source

> **source**: `"method"` \| `"box"` \| `"global"` \| `"local"` \| `"literal"`

Where the default value is coming from
- box: The data key signifies the box key to read the value from
- global: The data key signifies the global state key to read the value from
- local: The data key signifies the local state key to read the value from (for the sender)
- literal: the value is a literal and should be passed directly as the argument
- method: The utf8 signature of the method in this contract to call to get the default value. If the method has arguments, they all must have default values. The method **MUST** be readonly so simulate can be used to get the default value

##### defaultValue.type?

> `optional` **type?**: `string`

How the data is encoded. This is the encoding for the data provided here, not the arg type

#### desc?

> `optional` **desc?**: `string`

Optional, user-friendly description for the argument

#### name?

> `optional` **name?**: `string`

Optional, user-friendly name for the argument

#### struct?

> `optional` **struct?**: `string`

If the type is a struct, the name of the struct

#### type

> **type**: `ABIArgumentType`

#### Overrides

`algosdk.ABIMethod.args`

***

### description?

> `readonly` `optional` **description?**: `string`

Defined in: node\_modules/algosdk/dist/types/abi/method.d.ts:28

#### Inherited from

`algosdk.ABIMethod.description`

***

### events?

> `readonly` `optional` **events?**: `ARC28Event`[]

Defined in: node\_modules/algosdk/dist/types/abi/method.d.ts:38

#### Inherited from

`algosdk.ABIMethod.events`

***

### method

> **method**: [`Method`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/method/)

Defined in: [src/types/app-arc56.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L27)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/algosdk/dist/types/abi/method.d.ts:27

#### Inherited from

`algosdk.ABIMethod.name`

***

### readonly?

> `readonly` `optional` **readonly?**: `boolean`

Defined in: node\_modules/algosdk/dist/types/abi/method.d.ts:39

#### Inherited from

`algosdk.ABIMethod.readonly`

***

### returns

> `readonly` **returns**: `object`

Defined in: [src/types/app-arc56.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L25)

#### desc?

> `optional` **desc?**: `string`

Optional, user-friendly description for the return value

#### struct?

> `optional` **struct?**: `string`

If the type is a struct, the name of the struct

#### type

> **type**: `ABIReturnType`

#### Overrides

`algosdk.ABIMethod.returns`

## Methods

### getSelector()

> **getSelector**(): `Uint8Array`

Defined in: node\_modules/algosdk/dist/types/abi/method.d.ts:42

#### Returns

`Uint8Array`

#### Inherited from

`algosdk.ABIMethod.getSelector`

***

### getSignature()

> **getSignature**(): `string`

Defined in: node\_modules/algosdk/dist/types/abi/method.d.ts:41

#### Returns

`string`

#### Inherited from

`algosdk.ABIMethod.getSignature`

***

### toJSON()

> **toJSON**(): [`Method`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/method/)

Defined in: [src/types/app-arc56.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L39)

#### Returns

[`Method`](/docs/algokit-utils/typescript/latest/api/types/app-arc56/interfaces/method/)

#### Overrides

`algosdk.ABIMethod.toJSON`

***

### txnCount()

> **txnCount**(): `number`

Defined in: node\_modules/algosdk/dist/types/abi/method.d.ts:43

#### Returns

`number`

#### Inherited from

`algosdk.ABIMethod.txnCount`

***

### fromSignature()

> `static` **fromSignature**(`signature`): `ABIMethod`

Defined in: node\_modules/algosdk/dist/types/abi/method.d.ts:45

#### Parameters

##### signature

`string`

#### Returns

`ABIMethod`

#### Inherited from

`algosdk.ABIMethod.fromSignature`
