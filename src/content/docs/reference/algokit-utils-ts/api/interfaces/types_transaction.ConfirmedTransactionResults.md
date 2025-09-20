---
title: ConfirmedTransactionResults
slug: reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresults
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / ConfirmedTransactionResults

[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).ConfirmedTransactionResults

The result of sending and confirming one or more transactions, but where there is a primary transaction of interest

## Hierarchy

- [`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)

- [`SendTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/)

  ↳ **`ConfirmedTransactionResults`**

## Table of contents

### Properties

- [confirmation](#confirmation)
- [confirmations](#confirmations)
- [transaction](#transaction)
- [transactions](#transactions)

## Properties

### confirmation

• **confirmation**: `PendingTransactionResponse`

The response from sending and waiting for the primary transaction

#### Overrides

[SendTransactionResult](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/).[confirmation](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/#confirmation)

#### Defined in

[src/types/transaction.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L93)

---

### confirmations

• **confirmations**: `PendingTransactionResponse`[]

The response from sending and waiting for the transactions

#### Overrides

[SendTransactionResults](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/).[confirmations](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/#confirmations)

#### Defined in

[src/types/transaction.ts:95](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L95)

---

### transaction

• **transaction**: `Transaction`

The transaction

#### Inherited from

[SendTransactionResult](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/).[transaction](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/#transaction)

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)

---

### transactions

• **transactions**: `Transaction`[]

The transactions that have been prepared and/or sent

#### Inherited from

[SendTransactionResults](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/).[transactions](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/#transactions)

#### Defined in

[src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)
