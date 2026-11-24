---
editUrl: false
next: false
prev: false
title: "getAppLocalState"
---

> **getAppLocalState**(`appId`, `account`, `algod`): `Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

Defined in: [src/app.ts:265](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L265)

:::caution[Deprecated]
Use `algorand.app.getLocalState` instead.

Returns the current global state values for the given app ID and account
:::

## Parameters

### appId

`number` \| `bigint`

The ID of the app return global state for

### account

`string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Either the string address of an account or an account object for the account to get local state for the given app

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)\>

The current local state for the given (app, account) combination
