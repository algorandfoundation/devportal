---
editUrl: false
next: false
prev: false
title: "compileTeal"
---

> **compileTeal**(`tealCode`, `algod`): `Promise`\<`CompiledTeal`\>

Defined in: [src/app.ts:419](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/app.ts#L419)

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
