---
editUrl: false
next: false
prev: false
title: "compileTeal"
---

> **compileTeal**(`tealCode`, `algod`): `Promise`\<[`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)\>

Defined in: [src/app.ts:419](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/app.ts#L419)

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

`Promise`\<[`CompiledTeal`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/compiledteal/)\>

The information about the compiled file
