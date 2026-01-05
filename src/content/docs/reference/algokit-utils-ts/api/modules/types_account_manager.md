---
title: types/account-manager
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / types/account-manager

## Table of contents

### Classes

- [AccountManager](/reference/algokit-utils-ts/api/classes/types_account_manageraccountmanager/)

### Interfaces

- [EnsureFundedResult](/reference/algokit-utils-ts/api/interfaces/types_account_managerensurefundedresult/)

### Functions

- [getAccountTransactionSigner](/reference/algokit-utils-ts/api/modules/types_account_manager/#getaccounttransactionsigner)

## Functions

### getAccountTransactionSigner

▸ **getAccountTransactionSigner**(`val`): `TransactionSigner`

Returns a `TransactionSigner` for the given account that can sign a transaction.
This function has memoization, so will return the same transaction signer for a given account.

#### Parameters

| Name  | Type                                                                                                                                                                                                                                                                                                                                        |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `val` | [`MultisigAccount`](/reference/algokit-utils-ts/api/classes/types_accountmultisigaccount/) \| `default` \| [`SigningAccount`](/reference/algokit-utils-ts/api/classes/types_accountsigningaccount/) \| [`TransactionSignerAccount`](/reference/algokit-utils-ts/api/interfaces/types_accounttransactionsigneraccount/) \| `LogicSigAccount` |

#### Returns

`TransactionSigner`

A transaction signer

**`Example`**

```typescript
const signer = getAccountTransactionSigner(account);
```

#### Defined in

[src/types/account-manager.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L35)
