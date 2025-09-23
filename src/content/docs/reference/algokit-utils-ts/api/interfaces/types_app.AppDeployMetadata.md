---
title: AppDeployMetadata
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / AppDeployMetadata



[types/app](/reference/algokit-utils-ts/api/modules/types_app/).AppDeployMetadata

The payload of the metadata to add to the transaction note when deploying an app, noting it will be prefixed with `APP_DEPLOY_NOTE_PREFIX`.

## Hierarchy

- **`AppDeployMetadata`**

  ↳ [`AppMetadata`]()

  ↳ [`AppMetadata`]()

## Table of contents

### Properties

- [deletable](#deletable)
- [name](#name)
- [updatable](#updatable)
- [version](#version)

## Properties

### deletable

• `Optional` **deletable**: `boolean`

Whether or not the app is deletable / permanent / unspecified

#### Defined in

[src/types/app.ts:253](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L253)

___

### name

• **name**: `string`

The unique name identifier of the app within the creator account

#### Defined in

[src/types/app.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L249)

___

### updatable

• `Optional` **updatable**: `boolean`

Whether or not the app is updatable / immutable / unspecified

#### Defined in

[src/types/app.ts:255](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L255)

___

### version

• **version**: `string`

The version of app that is / will be deployed

#### Defined in

[src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)