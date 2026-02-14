---
title: AppMetadata
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app-deployer](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/) / AppMetadata



[types/app-deployer](/docs/algokit-utils/typescript/latest/api/modules/types_app_deployer/).AppMetadata

The metadata that can be collected about a deployed app

## Hierarchy

- [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/)

  ↳ **`AppMetadata`**

## Table of contents

### Properties

- [appAddress](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#appaddress)
- [appId](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#appid)
- [createdMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#createdmetadata)
- [createdRound](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#createdround)
- [deletable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#deletable)
- [deleted](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#deleted)
- [name](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#name)
- [updatable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#updatable)
- [updatedRound](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#updatedround)
- [version](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployerappmetadata/#version)

## Properties

### appAddress

• **appAddress**: `Address`

The Algorand address of the account associated with the app

#### Defined in

[src/types/app-deployer.ts:78](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L78)

___

### appId

• **appId**: `bigint`

The id of the app

#### Defined in

[src/types/app-deployer.ts:76](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L76)

___

### createdMetadata

• **createdMetadata**: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/)

The metadata when the app was created

#### Defined in

[src/types/app-deployer.ts:84](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L84)

___

### createdRound

• **createdRound**: `bigint`

The round the app was created

#### Defined in

[src/types/app-deployer.ts:80](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L80)

___

### deletable

• `Optional` **deletable**: `boolean`

Whether or not the app is deletable / permanent / unspecified

#### Inherited from

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/).[deletable](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/#deletable)

#### Defined in

[src/types/app.ts:253](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L253)

___

### deleted

• **deleted**: `boolean`

Whether or not the app is deleted

#### Defined in

[src/types/app-deployer.ts:86](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L86)

___

### name

• **name**: `string`

The unique name identifier of the app within the creator account

#### Inherited from

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/).[name](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/#name)

#### Defined in

[src/types/app.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L249)

___

### updatable

• `Optional` **updatable**: `boolean`

Whether or not the app is updatable / immutable / unspecified

#### Inherited from

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/).[updatable](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/#updatable)

#### Defined in

[src/types/app.ts:255](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L255)

___

### updatedRound

• **updatedRound**: `bigint`

The last round that the app was updated

#### Defined in

[src/types/app-deployer.ts:82](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-deployer.ts#L82)

___

### version

• **version**: `string`

The version of app that is / will be deployed

#### Inherited from

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/).[version](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/#version)

#### Defined in

[src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)