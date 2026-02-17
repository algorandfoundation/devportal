---
title: AppDeployMetadata
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/) / AppDeployMetadata

[types/app](/docs/algokit-utils/typescript/latest/api/modules/types_app/).AppDeployMetadata

The payload of the metadata to add to the transaction note when deploying an app, noting it will be prefixed with `APP_DEPLOY_NOTE_PREFIX`.

## Hierarchy

- **`AppDeployMetadata`**

  ↳ [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app_deployer.AppMetadata/)

  ↳ [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppMetadata/)

## Table of contents

### Properties

- [deletable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/#deletable)
- [name](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/#name)
- [updatable](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/#updatable)
- [version](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppDeployMetadata/#version)

## Properties

### deletable

• `Optional` **deletable**: `boolean`

Whether or not the app is deletable / permanent / unspecified

#### Defined in

[src/types/app.ts:253](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L253)

---

### name

• **name**: `string`

The unique name identifier of the app within the creator account

#### Defined in

[src/types/app.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L249)

---

### updatable

• `Optional` **updatable**: `boolean`

Whether or not the app is updatable / immutable / unspecified

#### Defined in

[src/types/app.ts:255](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L255)

---

### version

• **version**: `string`

The version of app that is / will be deployed

#### Defined in

[src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)
