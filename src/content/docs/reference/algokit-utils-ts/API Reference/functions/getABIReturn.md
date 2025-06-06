---
editUrl: false
next: false
prev: false
title: "getABIReturn"
---

> **getABIReturn**(`args`?, `confirmation`?): `ABIReturn` \| `undefined`

Defined in: [src/app.ts:235](https://github.com/algorandfoundation/algokit-utils-ts/blob/45957336d0cbf88c980c0a3343335a5e5e142c93/src/app.ts#L235)

:::caution[Deprecated]
Use `AppManager.getABIReturn` instead.

Returns any ABI return values for the given app call arguments and transaction confirmation.
:::

## Parameters

### args?

`AppCallArgs`

The arguments that were used for the call

### confirmation?

`PendingTransactionResponse`

The transaction confirmation from algod

## Returns

`ABIReturn` \| `undefined`

The return value for the method call
