---
title: types/account-manager
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / types/account-manager

## Table of contents

### Classes

- [AccountManager](/docs/algokit-utils/typescript/latest/api/classes/types_account_manageraccountmanager/)

### Interfaces

- [EnsureFundedResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_account_managerensurefundedresult/)

### Functions

- [getAccountTransactionSigner](/docs/algokit-utils/typescript/latest/api/modules/types_account_manager/#getaccounttransactionsigner)

## Functions

### getAccountTransactionSigner

▸ **getAccountTransactionSigner**(`val`): `TransactionSigner`

Returns a `TransactionSigner` for the given account that can sign a transaction.
This function has memoization, so will return the same transaction signer for a given account.

#### Parameters

| Name  | Type                                                                                                                                                                                                                                                                                                                                                                      |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `val` | [`MultisigAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountmultisigaccount/) \| `default` \| [`SigningAccount`](/docs/algokit-utils/typescript/latest/api/classes/types_accountsigningaccount/) \| [`TransactionSignerAccount`](/docs/algokit-utils/typescript/latest/api/interfaces/types_accounttransactionsigneraccount/) \| `LogicSigAccount` |

#### Returns

`TransactionSigner`

A transaction signer

**`Example`**

```typescript
const signer = getAccountTransactionSigner(account);
```

#### Defined in

[src/types/account-manager.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/account-manager.ts#L35)
