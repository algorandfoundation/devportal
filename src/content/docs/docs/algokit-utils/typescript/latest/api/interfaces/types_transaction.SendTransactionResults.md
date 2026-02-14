---
title: SendTransactionResults
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / SendTransactionResults



[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).SendTransactionResults

The result of preparing and/or sending multiple transactions

## Hierarchy

- **`SendTransactionResults`**

  ↳ [`AppCallTransactionResultOfType`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcalltransactionresultoftype/)

  ↳ [`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendatomictransactioncomposerresults/)

  ↳ [`ConfirmedTransactionResults`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresults/)

## Table of contents

### Properties

- [confirmations](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/#confirmations)
- [transactions](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/#transactions)

## Properties

### confirmations

• `Optional` **confirmations**: `PendingTransactionResponse`[]

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

#### Defined in

[src/types/transaction.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L67)

___

### transactions

• **transactions**: `Transaction`[]

The transactions that have been prepared and/or sent

#### Defined in

[src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)