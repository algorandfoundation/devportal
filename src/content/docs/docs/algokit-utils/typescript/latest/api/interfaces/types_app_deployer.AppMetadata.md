---
title: AppMetadata
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/app-deployer](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/) / AppMetadata

[types/app-deployer](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/).AppMetadata

The metadata that can be collected about a deployed app

## Hierarchy

- [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/)

  ↳ **`AppMetadata`**

## Table of contents

### Properties

- [appAddress](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#appaddress)
- [appId](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#appid)
- [createdMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#createdmetadata)
- [createdRound](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#createdround)
- [deletable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#deletable)
- [deleted](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#deleted)
- [name](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#name)
- [updatable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#updatable)
- [updatedRound](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#updatedround)
- [version](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/#version)

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

• **createdMetadata**: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/)

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

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/).[deletable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/#deletable)

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

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/).[name](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/#name)

#### Defined in

[src/types/app.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L249)

---

### updatable

• `Optional` **updatable**: `boolean`

Whether or not the app is updatable / immutable / unspecified

#### Inherited from

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/).[updatable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/#updatable)

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

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/).[version](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/#version)

#### Defined in

[src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)
