---
editUrl: false
next: false
prev: false
title: "getBoxReference"
---

> **getBoxReference**(`box`): `BoxReference`

Defined in: [src/app.ts:389](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L389)

:::caution[Deprecated]
Use `AppManager.getBoxReference()` instead.

Returns a `algosdk.BoxReference` given a `BoxIdentifier` or `BoxReference`.
:::

## Parameters

### box

`BoxReference` \| [`BoxReference`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/boxreference/) \| [`BoxIdentifier`](/docs/algokit-utils/typescript/latest/api/types/app/type-aliases/boxidentifier/)

The box to return a reference for

## Returns

`BoxReference`

The box reference ready to pass into a `Transaction`
