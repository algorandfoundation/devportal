---
editUrl: false
next: false
prev: false
title: "getAppLocalState"
---

> **getAppLocalState**(`appId`, `account`, `algod`): `Promise`\<`AppState`\>

Defined in: [src/app.ts:265](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L265)

:::caution[Deprecated]
Use `algorand.app.getLocalState` instead.

Returns the current global state values for the given app ID and account
:::

## Parameters

### appId

The ID of the app return global state for

`number` | `bigint`

### account

Either the string address of an account or an account object for the account to get local state for the given app

`string` | `SendTransactionFrom`

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`AppState`\>

The current local state for the given (app, account) combination
