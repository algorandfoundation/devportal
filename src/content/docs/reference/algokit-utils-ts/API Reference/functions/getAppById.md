---
editUrl: false
next: false
prev: false
title: "getAppById"
---

> **getAppById**(`appId`, `algod`): `Promise`\<`Application`\>

Defined in: [src/app.ts:406](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L406)

:::caution[Deprecated]
Use `algorand.app.getById` instead.

Gets the current data for the given app from algod.
:::

## Parameters

### appId

The id of the app

`number` | `bigint`

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Application`\>

The data about the app
