---
title: Arc56Method
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app-arc56](/reference/algokit-utils-ts/api/modules/types_app_arc56/) / Arc56Method



[types/app-arc56](/reference/algokit-utils-ts/api/modules/types_app_arc56/).Arc56Method

Wrapper around `algosdk.ABIMethod` that represents an ARC-56 ABI method.

## Hierarchy

- `ABIMethod`

  ↳ **`Arc56Method`**

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [args](#args)
- [description](#description)
- [events](#events)
- [method](#method)
- [name](#name)
- [readonly](#readonly)
- [returns](#returns)

### Methods

- [getSelector](#getselector)
- [getSignature](#getsignature)
- [toJSON](#tojson)
- [txnCount](#txncount)
- [fromSignature](#fromsignature)

## Constructors

### constructor

• **new Arc56Method**(`method`): [`Arc56Method`]()

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`Method`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56method/) |

#### Returns

[`Arc56Method`]()

#### Overrides

algosdk.ABIMethod.constructor

#### Defined in

[src/types/app-arc56.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L27)

## Properties

### args

• `Readonly` **args**: \{ `defaultValue?`: \{ `data`: `string` ; `source`: ``"method"`` \| ``"box"`` \| ``"global"`` \| ``"local"`` \| ``"literal"`` ; `type?`: `string`  } ; `desc?`: `string` ; `name?`: `string` ; `struct?`: `string` ; `type`: `ABIArgumentType`  }[]

#### Overrides

algosdk.ABIMethod.args

#### Defined in

[src/types/app-arc56.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L24)

___

### description

• `Optional` `Readonly` **description**: `string`

#### Inherited from

algosdk.ABIMethod.description

#### Defined in

node_modules/algosdk/dist/types/abi/method.d.ts:28

___

### events

• `Optional` `Readonly` **events**: `ARC28Event`[]

#### Inherited from

algosdk.ABIMethod.events

#### Defined in

node_modules/algosdk/dist/types/abi/method.d.ts:38

___

### method

• **method**: [`Method`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56method/)

#### Defined in

[src/types/app-arc56.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L27)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

algosdk.ABIMethod.name

#### Defined in

node_modules/algosdk/dist/types/abi/method.d.ts:27

___

### readonly

• `Optional` `Readonly` **readonly**: `boolean`

#### Inherited from

algosdk.ABIMethod.readonly

#### Defined in

node_modules/algosdk/dist/types/abi/method.d.ts:39

___

### returns

• `Readonly` **returns**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `desc?` | `string` | Optional, user-friendly description for the return value |
| `struct?` | `string` | If the type is a struct, the name of the struct |
| `type` | `ABIReturnType` | - |

#### Overrides

algosdk.ABIMethod.returns

#### Defined in

[src/types/app-arc56.ts:25](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L25)

## Methods

### getSelector

▸ **getSelector**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Inherited from

algosdk.ABIMethod.getSelector

#### Defined in

node_modules/algosdk/dist/types/abi/method.d.ts:42

___

### getSignature

▸ **getSignature**(): `string`

#### Returns

`string`

#### Inherited from

algosdk.ABIMethod.getSignature

#### Defined in

node_modules/algosdk/dist/types/abi/method.d.ts:41

___

### toJSON

▸ **toJSON**(): [`Method`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56method/)

#### Returns

[`Method`](/reference/algokit-utils-ts/api/interfaces/types_app_arc56method/)

#### Overrides

algosdk.ABIMethod.toJSON

#### Defined in

[src/types/app-arc56.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-arc56.ts#L39)

___

### txnCount

▸ **txnCount**(): `number`

#### Returns

`number`

#### Inherited from

algosdk.ABIMethod.txnCount

#### Defined in

node_modules/algosdk/dist/types/abi/method.d.ts:43

___

### fromSignature

▸ **fromSignature**(`signature`): `ABIMethod`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

`ABIMethod`

#### Inherited from

algosdk.ABIMethod.fromSignature

#### Defined in

node_modules/algosdk/dist/types/abi/method.d.ts:45