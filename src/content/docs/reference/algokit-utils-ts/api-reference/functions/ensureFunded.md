---
editUrl: false
next: false
prev: false
title: "ensureFunded"
---

> **ensureFunded**\<`T`\>(`funding`, `algod`, `kmd`?): `Promise`\<`EnsureFundedReturnType` \| `undefined`\>

Defined in: [src/transfer/transfer.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/transfer/transfer.ts#L26)

:::caution[Deprecated]
Use `algorand.account.ensureFunded()` / `algorand.account.ensureFundedFromEnvironment()`
/ `algorand.account.ensureFundedFromTestNetDispenserApi()` instead

Funds a given account using a funding source such that it has a certain amount of Algo free to spend (accounting for Algo locked in minimum balance requirement).

https://developer.algorand.org/docs/get-details/accounts/#minimum-balance
:::

## Type Parameters

• **T** *extends* `EnsureFundedParams`

## Parameters

### funding

`T`

The funding configuration of type `EnsureFundedParams`, including the account to fund, minimum spending balance, and optional parameters. If you set `useDispenserApi` to true, you must also set `ALGOKIT_DISPENSER_ACCESS_TOKEN` in your environment variables.

### algod

`AlgodClient`

An instance of the Algodv2 client.

### kmd?

`KmdClient`

An optional instance of the Kmd client.

## Returns

`Promise`\<`EnsureFundedReturnType` \| `undefined`\>

- `EnsureFundedReturnType` if funds were transferred.
- `undefined` if no funds were needed.
