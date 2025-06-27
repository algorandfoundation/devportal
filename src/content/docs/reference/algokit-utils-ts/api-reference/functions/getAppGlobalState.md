---
editUrl: false
next: false
prev: false
title: "getAppGlobalState"
---

> **getAppGlobalState**(`appId`, `algod`): `Promise`\<`AppState`\>

Defined in: [src/app.ts:252](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L252)

:::caution[Deprecated]
Use `algorand.app.getGlobalState` instead.

Returns the current global state values for the given app ID
:::

## Parameters

### appId

The ID of the app return global state for

`number` | `bigint`

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`AppState`\>

The current global state
