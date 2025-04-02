---
editUrl: false
next: false
prev: false
title: "getAppGlobalState"
---

> **getAppGlobalState**(`appId`, `algod`): `Promise`\<`AppState`\>

Defined in: [src/app.ts:252](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L252)

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
