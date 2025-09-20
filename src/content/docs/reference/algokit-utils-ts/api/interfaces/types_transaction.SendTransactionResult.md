---
title: SendTransactionResult
slug: reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / SendTransactionResult



[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).SendTransactionResult

The result of sending a transaction

## Hierarchy

- **`SendTransactionResult`**

  ↳ [`AppCallTransactionResultOfType`](/reference/algokit-utils-ts/api/interfaces/types_appappcalltransactionresultoftype/)

  ↳ [`ConfirmedTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/)

  ↳ [`ConfirmedTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresults/)

## Table of contents

### Properties

- [confirmation](#confirmation)
- [transaction](#transaction)

## Properties

### confirmation

• `Optional` **confirmation**: `PendingTransactionResponse`

The response if the transaction was sent and waited for

#### Defined in

[src/types/transaction.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L57)

___

### transaction

• **transaction**: `Transaction`

The transaction

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)