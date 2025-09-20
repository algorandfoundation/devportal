---
title: AppMetadata
slug: reference/algokit-utils-ts/api/interfaces/types_app_deployerappmetadata
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app-deployer](/reference/algokit-utils-ts/api/modules/types_app_deployer/) / AppMetadata

[types/app-deployer](/reference/algokit-utils-ts/api/modules/types_app_deployer/).AppMetadata

The metadata that can be collected about a deployed app

## Hierarchy

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

• **appAddress**: `Address`

The Algorand address of the account associated with the app

#### Defined in

[src/types/app-deployer.ts:78](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L78)

---

### appId

• **appId**: `bigint`

The id of the app

#### Defined in

[src/types/app-deployer.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L76)

---

### createdMetadata

• **createdMetadata**: [`AppDeployMetadata`](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/)

The metadata when the app was created

#### Defined in

[src/types/app-deployer.ts:84](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L84)

---

### createdRound

• **createdRound**: `bigint`

The round the app was created

#### Defined in

[src/types/app-deployer.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L80)

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

[src/types/app-deployer.ts:86](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L86)

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

• **updatedRound**: `bigint`

The last round that the app was updated

#### Defined in

[src/types/app-deployer.ts:82](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L82)

---

### version

• **version**: `string`

The version of app that is / will be deployed

#### Inherited from

[AppDeployMetadata](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/).[version](/reference/algokit-utils-ts/api/interfaces/types_appappdeploymetadata/#version)

#### Defined in

[src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)
