---
title: ConfirmedTransactionResult
slug: reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / ConfirmedTransactionResult

[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).ConfirmedTransactionResult

The result of sending and confirming a transaction

## Hierarchy

- [`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)

  ↳ **`ConfirmedTransactionResult`**

## Table of contents

### Properties

- [confirmation](#confirmation)
- [transaction](#transaction)

## Properties

### confirmation

• **confirmation**: `PendingTransactionResponse`

The response from sending and waiting for the transaction

#### Overrides

[SendTransactionResult](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/).[confirmation](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/#confirmation)

#### Defined in

[src/types/transaction.ts:87](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L87)

---

### transaction

• **transaction**: `Transaction`

The transaction

#### Inherited from

[SendTransactionResult](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/).[transaction](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/#transaction)

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)
