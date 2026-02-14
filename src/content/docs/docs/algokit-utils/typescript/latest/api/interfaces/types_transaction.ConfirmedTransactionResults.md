---
title: ConfirmedTransactionResults
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / ConfirmedTransactionResults

[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).ConfirmedTransactionResults

The result of sending and confirming one or more transactions, but where there is a primary transaction of interest

## Hierarchy

- [`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/)

- [`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/)

  ↳ **`ConfirmedTransactionResults`**

## Table of contents

### Properties

- [confirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresults/#confirmation)
- [confirmations](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresults/#confirmations)
- [transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresults/#transaction)
- [transactions](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresults/#transactions)

## Properties

### confirmation

• **confirmation**: `PendingTransactionResponse`

The response from sending and waiting for the primary transaction

#### Overrides

[SendTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/).[confirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/#confirmation)

#### Defined in

[src/types/transaction.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L93)

---

### confirmations

• **confirmations**: `PendingTransactionResponse`[]

The response from sending and waiting for the transactions

#### Overrides

[SendTransactionResults](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/).[confirmations](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/#confirmations)

#### Defined in

[src/types/transaction.ts:95](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L95)

---

### transaction

• **transaction**: `Transaction`

The transaction

#### Inherited from

[SendTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/).[transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/#transaction)

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)

---

### transactions

• **transactions**: `Transaction`[]

The transactions that have been prepared and/or sent

#### Inherited from

[SendTransactionResults](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/).[transactions](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresults/#transactions)

#### Defined in

[src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)
