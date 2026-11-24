---
editUrl: false
next: false
prev: false
title: "getAccountTransactionSigner"
---

> `const` **getAccountTransactionSigner**: (`val`) => `TransactionSigner`

Defined in: [src/types/account-manager.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L35)

Returns a `TransactionSigner` for the given account that can sign a transaction.
This function has memoization, so will return the same transaction signer for a given account.

## Parameters

### val

[`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/types/account/interfaces/transactionsigneraccount/) \| `Account` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/signingaccount/) \| `LogicSigAccount` \| [`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/types/account/classes/multisigaccount/)

## Returns

`TransactionSigner`

A transaction signer

## Example

```typescript
const signer = getAccountTransactionSigner(account)
```
