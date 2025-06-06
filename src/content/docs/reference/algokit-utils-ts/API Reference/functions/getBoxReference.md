---
editUrl: false
next: false
prev: false
title: "getBoxReference"
---

> **getBoxReference**(`box`): `algosdk.BoxReference`

Defined in: [src/app.ts:389](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L389)

:::caution[Deprecated]
Use `AppManager.getBoxReference()` instead.

Returns a `algosdk.BoxReference` given a `BoxIdentifier` or `BoxReference`.
:::

## Parameters

### box

The box to return a reference for

`BoxReference` | `BoxIdentifier` | `BoxReference`

## Returns

`algosdk.BoxReference`

The box reference ready to pass into a `Transaction`
