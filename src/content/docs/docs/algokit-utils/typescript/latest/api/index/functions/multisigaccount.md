---
editUrl: false
next: false
prev: false
title: "multisigAccount"
---

> **multisigAccount**(`multisigParams`, `signingAccounts`): [`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/multisigaccount/)

Defined in: [src/account/account.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L24)

:::caution[Deprecated]
Use `algorand.account.multisig(multisigParams, signingAccounts)` or `new MultisigAccount(multisigParams, signingAccounts)` instead.

Returns an account wrapper that supports partial or full multisig signing.
:::

## Parameters

### multisigParams

`MultisigMetadata`

The parameters that define the multisig account

### signingAccounts

(`Account` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/signingaccount/))[]

The signers that are currently present

## Returns

[`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/multisigaccount/)

A multisig account wrapper
