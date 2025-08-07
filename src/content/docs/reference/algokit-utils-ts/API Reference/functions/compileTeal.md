---
editUrl: false
next: false
prev: false
title: "compileTeal"
---

> **compileTeal**(`tealCode`, `algod`): `Promise`\<`CompiledTeal`\>

Defined in: [src/app.ts:419](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L419)

:::caution[Deprecated]
Use `algorand.app.compileTeal` instead.

Compiles the given TEAL using algod and returns the result, including source map.
:::

## Parameters

### tealCode

`string`

The TEAL code

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`CompiledTeal`\>

The information about the compiled file
