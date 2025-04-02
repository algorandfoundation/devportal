---
editUrl: false
next: false
prev: false
title: "getAppArgsForTransaction"
---

> **getAppArgsForTransaction**(`args`?): `undefined` \| \{ `accounts`: `undefined` \| `string`[]; `appArgs`: `undefined` \| `Uint8Array`[]; `boxes`: `undefined` \| `BoxReference`[]; `foreignApps`: `undefined` \| `number`[]; `foreignAssets`: `undefined` \| `number`[]; `lease`: `undefined` \| `Uint8Array`; \}

Defined in: [src/app.ts:356](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L356)

:::caution[Deprecated]
Use `TransactionComposer` methods to construct transactions instead.

Returns the app args ready to load onto an app `Transaction` object
:::

## Parameters

### args?

`RawAppCallArgs`

The app call args

## Returns

`undefined` \| \{ `accounts`: `undefined` \| `string`[]; `appArgs`: `undefined` \| `Uint8Array`[]; `boxes`: `undefined` \| `BoxReference`[]; `foreignApps`: `undefined` \| `number`[]; `foreignAssets`: `undefined` \| `number`[]; `lease`: `undefined` \| `Uint8Array`; \}

The args ready to load into a `Transaction`
