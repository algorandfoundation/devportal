---
editUrl: false
next: false
prev: false
title: "getAppOnCompleteAction"
---

> **getAppOnCompleteAction**(`onCompletionAction`?): `OnApplicationComplete`

Defined in: [src/app.ts:154](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L154)

:::caution[Deprecated]
Use `algosdk.OnApplicationComplete` directly instead.

Returns a `algosdk.OnApplicationComplete` for the given onCompleteAction.

If given `undefined` will return `OnApplicationComplete.NoOpOC`.

If given an `AppCallType` will convert the string enum to the correct underlying `algosdk.OnApplicationComplete`.
:::

## Parameters

### onCompletionAction?

The on completion action

`AppCallType` | `OnApplicationComplete`

## Returns

`OnApplicationComplete`

The `algosdk.OnApplicationComplete`
