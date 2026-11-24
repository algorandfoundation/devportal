---
editUrl: false
next: false
prev: false
title: "getAppGlobalState"
---

> **getAppGlobalState**(`appId`, `algod`): `Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

Defined in: [src/app.ts:252](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L252)

:::caution[Deprecated]
Use `algorand.app.getGlobalState` instead.

Returns the current global state values for the given app ID
:::

## Parameters

### appId

`number` \| `bigint`

The ID of the app return global state for

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

The current global state
