---
editUrl: false
next: false
prev: false
title: 'AppDeployMetadata'
---

Defined in: [src/app.ts:151](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app.ts#L151)

The payload of the metadata to add to the transaction note when deploying an app, noting it will be prefixed with `APP_DEPLOY_NOTE_PREFIX`.

## Extended by

- [`AppMetadata`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/appmetadata/)

## Properties

### deletable?

> `optional` **deletable**: `boolean`

Defined in: [src/app.ts:157](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app.ts#L157)

Whether or not the app is deletable / permanent / unspecified

---

### name

> **name**: `string`

Defined in: [src/app.ts:153](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app.ts#L153)

The unique name identifier of the app within the creator account

---

### updatable?

> `optional` **updatable**: `boolean`

Defined in: [src/app.ts:159](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app.ts#L159)

Whether or not the app is updatable / immutable / unspecified

---

### version

> **version**: `string`

Defined in: [src/app.ts:155](https://github.com/larkiny/algokit-utils-ts/blob/main/src/app.ts#L155)

The version of app that is / will be deployed
