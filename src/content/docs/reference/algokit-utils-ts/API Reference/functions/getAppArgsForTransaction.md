---
editUrl: false
next: false
prev: false
title: "getAppArgsForTransaction"
---

> **getAppArgsForTransaction**(`args`?): `undefined` \| \{ `accounts`: `undefined` \| `string`[]; `appArgs`: `undefined` \| `Uint8Array`[]; `boxes`: `undefined` \| `BoxReference`[]; `foreignApps`: `undefined` \| `number`[]; `foreignAssets`: `undefined` \| `number`[]; `lease`: `undefined` \| `Uint8Array`; \}

Defined in: [src/app.ts:356](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L356)

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
