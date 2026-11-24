---
editUrl: false
next: false
prev: false
title: "decodeAppState"
---

> **decodeAppState**(`state`): [`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)

Defined in: [src/app.ts:345](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L345)

:::caution[Deprecated]
Use `AppManager.decodeAppState` instead.

Converts an array of global/local state values from the algod api to a more friendly
generic object keyed by the UTF-8 value of the key.
:::

## Parameters

### state

`object`[]

A `global-state`, `local-state`, `global-state-deltas` or `local-state-deltas`

## Returns

[`AppState`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appstate/)

An object keyeed by the UTF-8 representation of the key with various parsings of the values
