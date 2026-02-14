---
title: ConfirmedTransactionResult
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / ConfirmedTransactionResult



[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).ConfirmedTransactionResult

The result of sending and confirming a transaction

## Hierarchy

- [`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/)

  ↳ **`ConfirmedTransactionResult`**

## Table of contents

### Properties

- [confirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresult/#confirmation)
- [transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresult/#transaction)

## Properties

### confirmation

• **confirmation**: `PendingTransactionResponse`

The response from sending and waiting for the transaction

#### Overrides

[SendTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/).[confirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/#confirmation)

#### Defined in

[src/types/transaction.ts:87](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L87)

___

### transaction

• **transaction**: `Transaction`

The transaction

#### Inherited from

[SendTransactionResult](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/).[transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/#transaction)

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)