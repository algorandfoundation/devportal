---
editUrl: false
next: false
prev: false
title: "multisigAccount"
---

> **multisigAccount**(`multisigParams`, `signingAccounts`): `MultisigAccount`

Defined in: [src/account/account.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/e57e96ab17213653e656688e8d7251c0107554cf/src/account/account.ts#L24)

:::caution[Deprecated]
Use `algorand.account.multisig(multisigParams, signingAccounts)` or `new MultisigAccount(multisigParams, signingAccounts)` instead.

Returns an account wrapper that supports partial or full multisig signing.
:::

## Parameters

### multisigParams

`MultisigMetadata`

The parameters that define the multisig account

### signingAccounts

(`Account` \| `SigningAccount`)[]

The signers that are currently present

## Returns

`MultisigAccount`

A multisig account wrapper
