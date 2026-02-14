---
title: AppMetadata
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / AppMetadata

[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).AppMetadata

The metadata that can be collected about a deployed app

## Hierarchy

- [`AppReference`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappreference/)

- [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/)

  ↳ **`AppMetadata`**

## Table of contents

### Properties

- [appAddress](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#appaddress)
- [appId](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#appid)
- [createdMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#createdmetadata)
- [createdRound](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#createdround)
- [deletable](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#deletable)
- [deleted](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#deleted)
- [name](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#name)
- [updatable](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#updatable)
- [updatedRound](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#updatedround)
- [version](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappmetadata/#version)

## Properties

### appAddress

• **appAddress**: `string`

The Algorand address of the account associated with the app

#### Inherited from

[AppReference](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappreference/).[appAddress](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappreference/#appaddress)

#### Defined in

[src/types/app.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L43)

---

### appId

• **appId**: `number` \| `bigint`

The id of the app

#### Inherited from

[AppReference](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappreference/).[appId](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappreference/#appid)

#### Defined in

[src/types/app.ts:41](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L41)

---

### createdMetadata

• **createdMetadata**: [`AppDeployMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/)

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

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/).[deletable](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/#deletable)

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

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/).[name](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/#name)

#### Defined in

[src/types/app.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L249)

---

### updatable

• `Optional` **updatable**: `boolean`

Whether or not the app is updatable / immutable / unspecified

#### Inherited from

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/).[updatable](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/#updatable)

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

[AppDeployMetadata](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/).[version](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappdeploymetadata/#version)

#### Defined in

[src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)
