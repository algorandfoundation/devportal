---
editUrl: false
next: false
prev: false
title: "transactionSignerAccount"
---

> **transactionSignerAccount**(`signer`, `sender`): [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/)

Defined in: [src/account/account.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/account/account.ts#L48)

:::caution[Deprecated]
Use `algorand.account.getSigner(sender)` (after previously registering the signer with `setSigner`) or `{ addr: sender, signer }` instead.

Returns an account wrapper that supports a transaction signer with associated sender address.
:::

## Parameters

### signer

`TransactionSigner`

The transaction signer

### sender

`string`

The address of sender account

## Returns

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/)

The SigningAccount wrapper
