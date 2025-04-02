---
editUrl: false
next: false
prev: false
title: "getAccountAddressAsString"
---

> **getAccountAddressAsString**(`addressEncodedInB64`): `string`

Defined in: [src/account/account.ts:128](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/account/account.ts#L128)

:::caution[Deprecated]
Use `algosdk.encodeAddress` instead.

Returns the string address of an Algorand account from a base64 encoded version of the underlying byte array of the address public key
:::

## Parameters

### addressEncodedInB64

`string`

The base64 encoded version of the underlying byte array of the address public key

## Returns

`string`
