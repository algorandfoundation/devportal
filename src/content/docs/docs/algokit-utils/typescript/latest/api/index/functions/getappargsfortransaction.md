---
editUrl: false
next: false
prev: false
title: "getAppArgsForTransaction"
---

> **getAppArgsForTransaction**(`args?`): \{ `accounts`: `string`[] \| `undefined`; `appArgs`: `Uint8Array`\<`ArrayBufferLike`\>[] \| `undefined`; `boxes`: `BoxReference`[] \| `undefined`; `foreignApps`: `number`[] \| `undefined`; `foreignAssets`: `number`[] \| `undefined`; `lease`: `Uint8Array`\<`ArrayBufferLike`\> \| `undefined`; \} \| `undefined`

Defined in: [src/app.ts:356](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L356)

:::caution[Deprecated]
Use `TransactionComposer` methods to construct transactions instead.

Returns the app args ready to load onto an app `Transaction` object
:::

## Parameters

### args?

[`RawAppCallArgs`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/rawappcallargs/)

The app call args

## Returns

\{ `accounts`: `string`[] \| `undefined`; `appArgs`: `Uint8Array`\<`ArrayBufferLike`\>[] \| `undefined`; `boxes`: `BoxReference`[] \| `undefined`; `foreignApps`: `number`[] \| `undefined`; `foreignAssets`: `number`[] \| `undefined`; `lease`: `Uint8Array`\<`ArrayBufferLike`\> \| `undefined`; \} \| `undefined`

The args ready to load into a `Transaction`
