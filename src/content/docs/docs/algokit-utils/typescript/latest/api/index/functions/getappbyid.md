---
editUrl: false
next: false
prev: false
title: "getAppById"
---

> **getAppById**(`appId`, `algod`): `Promise`\<`Application`\>

Defined in: [src/app.ts:406](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L406)

:::caution[Deprecated]
Use `algorand.app.getById` instead.

Gets the current data for the given app from algod.
:::

## Parameters

### appId

`number` \| `bigint`

The id of the app

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Application`\>

The data about the app
