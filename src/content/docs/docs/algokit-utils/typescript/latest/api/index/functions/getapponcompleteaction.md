---
editUrl: false
next: false
prev: false
title: "getAppOnCompleteAction"
---

> **getAppOnCompleteAction**(`onCompletionAction?`): `OnApplicationComplete`

Defined in: [src/app.ts:154](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L154)

:::caution[Deprecated]
Use `algosdk.OnApplicationComplete` directly instead.

Returns a `algosdk.OnApplicationComplete` for the given onCompleteAction.

If given `undefined` will return `OnApplicationComplete.NoOpOC`.

If given an `AppCallType` will convert the string enum to the correct underlying `algosdk.OnApplicationComplete`.
:::

## Parameters

### onCompletionAction?

`OnApplicationComplete` \| [`AppCallType`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/appcalltype/)

The on completion action

## Returns

`OnApplicationComplete`

The `algosdk.OnApplicationComplete`
