---
title: AppMetadata
slug: reference/algokit-utils-ts/api/interfaces/types_appappmetadata
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / AppMetadata

[types/app](/reference/algokit-utils-ts/api/modules/types_app/).AppMetadata

The metadata that can be collected about a deployed app

## Hierarchy

- [`AppReference`](/reference/algokit-utils-ts/api/interfaces/types_appappreference/)

- [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/)

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

[AppReference](/reference/algokit-utils-ts/api/interfaces/types_appappreference/).[appAddress](/reference/algokit-utils-ts/api/interfaces/types_appappreference/#appaddress)

#### Defined in

[src/types/app.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L43)

---

### appId

• **appId**: `number` \| `bigint`

The id of the app

#### Inherited from

[AppReference](/reference/algokit-utils-ts/api/interfaces/types_appappreference/).[appId](/reference/algokit-utils-ts/api/interfaces/types_appappreference/#appid)

#### Defined in

[src/types/app.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L41)

---

### createdMetadata

• **createdMetadata**: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/)

The metadata when the app was created

#### Defined in

[src/types/app.ts:265](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L265)

---

### createdRound

• **createdRound**: `number`

The round the app was created

#### Defined in

[src/types/app.ts:261](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L261)

---

### deletable

• `Optional` **deletable**: `boolean`

Whether or not the app is deletable / permanent / unspecified

#### Inherited from

[AppDeployMetadata](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/).[deletable](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/#deletable)

#### Defined in

[src/types/app.ts:253](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L253)

---

### deleted

• **deleted**: `boolean`

Whether or not the app is deleted

#### Defined in

[src/types/app.ts:267](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L267)

---

### name

• **name**: `string`

The unique name identifier of the app within the creator account

#### Inherited from

[AppDeployMetadata](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/).[name](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/#name)

#### Defined in

[src/types/app.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L249)

---

### updatable

• `Optional` **updatable**: `boolean`

Whether or not the app is updatable / immutable / unspecified

#### Inherited from

[AppDeployMetadata](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/).[updatable](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/#updatable)

#### Defined in

[src/types/app.ts:255](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L255)

---

### updatedRound

• **updatedRound**: `number`

The last round that the app was updated

#### Defined in

[src/types/app.ts:263](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L263)

---

### version

• **version**: `string`

The version of app that is / will be deployed

#### Inherited from

[AppDeployMetadata](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/).[version](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/#version)

#### Defined in

[src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)
