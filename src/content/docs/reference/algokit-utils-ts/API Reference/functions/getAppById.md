---
editUrl: false
next: false
prev: false
title: "getAppById"
---

> **getAppById**(`appId`, `algod`): `Promise`\<`Application`\>

Defined in: [src/app.ts:406](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L406)

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
