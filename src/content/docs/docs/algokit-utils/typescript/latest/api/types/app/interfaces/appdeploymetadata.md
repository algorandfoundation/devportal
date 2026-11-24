---
editUrl: false
next: false
prev: false
title: "AppDeployMetadata"
---

Defined in: [src/types/app.ts:247](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L247)

The payload of the metadata to add to the transaction note when deploying an app, noting it will be prefixed with `APP_DEPLOY_NOTE_PREFIX`.

## Extended by

- [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app-deployer/interfaces/appmetadata/)
- [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appmetadata/)

## Properties

### deletable?

> `optional` **deletable?**: `boolean`

Defined in: [src/types/app.ts:253](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L253)

Whether or not the app is deletable / permanent / unspecified

***

### name

> **name**: `string`

Defined in: [src/types/app.ts:249](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L249)

The unique name identifier of the app within the creator account

***

### updatable?

> `optional` **updatable?**: `boolean`

Defined in: [src/types/app.ts:255](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L255)

Whether or not the app is updatable / immutable / unspecified

***

### version

> **version**: `string`

Defined in: [src/types/app.ts:251](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L251)

The version of app that is / will be deployed
