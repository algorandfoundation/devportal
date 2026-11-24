---
editUrl: false
next: false
prev: false
title: "getAccountAddressAsUint8Array"
---

> **getAccountAddressAsUint8Array**(`account`): `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/account/account.ts:117](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L117)

:::caution[Deprecated]
Use `algosdk.decodeAddress` instead.

Returns an account's address as a byte array
:::

## Parameters

### account

`string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Either an account (with private key loaded) or the string address of an account

## Returns

`Uint8Array`\<`ArrayBufferLike`\>
