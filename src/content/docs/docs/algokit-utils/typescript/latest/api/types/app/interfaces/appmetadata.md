---
editUrl: false
next: false
prev: false
title: "AppMetadata"
---

Defined in: [src/types/app.ts:259](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L259)

The metadata that can be collected about a deployed app

## Extends

- [`AppReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appreference/).[`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/)

## Properties

### appAddress

> **appAddress**: `string`

Defined in: [src/types/app.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L43)

The Algorand address of the account associated with the app

#### Inherited from

[`AppReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appreference/).[`appAddress`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appreference/#appaddress)

***

### appId

> **appId**: `number` \| `bigint`

Defined in: [src/types/app.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L41)

The id of the app

#### Inherited from

[`AppReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appreference/).[`appId`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appreference/#appid)

***

### createdMetadata

> **createdMetadata**: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/)

Defined in: [src/types/app.ts:265](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L265)

The metadata when the app was created

***

### createdRound

> **createdRound**: `number`

Defined in: [src/types/app.ts:261](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L261)

The round the app was created

***

### deletable?

> `optional` **deletable?**: `boolean`

Defined in: [src/types/app.ts:253](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L253)

Whether or not the app is deletable / permanent / unspecified

#### Inherited from

[`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/).[`deletable`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/#deletable)

***

### deleted

> **deleted**: `boolean`

Defined in: [src/types/app.ts:267](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L267)

Whether or not the app is deleted

***

### name

> **name**: `string`

Defined in: [src/types/app.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L249)

The unique name identifier of the app within the creator account

#### Inherited from

[`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/).[`name`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/#name)

***

### updatable?

> `optional` **updatable?**: `boolean`

Defined in: [src/types/app.ts:255](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L255)

Whether or not the app is updatable / immutable / unspecified

#### Inherited from

[`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/).[`updatable`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/#updatable)

***

### updatedRound

> **updatedRound**: `number`

Defined in: [src/types/app.ts:263](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L263)

The last round that the app was updated

***

### version

> **version**: `string`

Defined in: [src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)

The version of app that is / will be deployed

#### Inherited from

[`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/).[`version`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appdeploymetadata/#version)
