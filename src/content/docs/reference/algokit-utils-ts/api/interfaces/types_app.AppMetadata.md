---
title: AppMetadata
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / AppMetadata



[types/app](/reference/algokit-utils-ts/api/modules/types_app/).AppMetadata

The metadata that can be collected about a deployed app

## Hierarchy

- [`AppReference`]()

- [`AppDeployMetadata`]()

  ↳ **`AppMetadata`**

## Table of contents

### Properties

- [appAddress](#appaddress)
- [appId](#appid)
- [createdMetadata](#createdmetadata)
- [createdRound](#createdround)
- [deletable](#deletable)
- [deleted](#deleted)
- [name](#name)
- [updatable](#updatable)
- [updatedRound](#updatedround)
- [version](#version)

## Properties

### appAddress

• **appAddress**: `string`

The Algorand address of the account associated with the app

#### Inherited from

[AppReference]().[appAddress](#appaddress)

#### Defined in

[src/types/app.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L43)

___

### appId

• **appId**: `number` \| `bigint`

The id of the app

#### Inherited from

[AppReference]().[appId](#appid)

#### Defined in

[src/types/app.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L41)

___

### createdMetadata

• **createdMetadata**: [`AppDeployMetadata`]()

The metadata when the app was created

#### Defined in

[src/types/app.ts:265](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L265)

___

### createdRound

• **createdRound**: `number`

The round the app was created

#### Defined in

[src/types/app.ts:261](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L261)

___

### deletable

• `Optional` **deletable**: `boolean`

Whether or not the app is deletable / permanent / unspecified

#### Inherited from

[AppDeployMetadata]().[deletable](#deletable)

#### Defined in

[src/types/app.ts:253](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L253)

___

### deleted

• **deleted**: `boolean`

Whether or not the app is deleted

#### Defined in

[src/types/app.ts:267](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L267)

___

### name

• **name**: `string`

The unique name identifier of the app within the creator account

#### Inherited from

[AppDeployMetadata]().[name](#name)

#### Defined in

[src/types/app.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L249)

___

### updatable

• `Optional` **updatable**: `boolean`

Whether or not the app is updatable / immutable / unspecified

#### Inherited from

[AppDeployMetadata]().[updatable](#updatable)

#### Defined in

[src/types/app.ts:255](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L255)

___

### updatedRound

• **updatedRound**: `number`

The last round that the app was updated

#### Defined in

[src/types/app.ts:263](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L263)

___

### version

• **version**: `string`

The version of app that is / will be deployed

#### Inherited from

[AppDeployMetadata]().[version](#version)

#### Defined in

[src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)