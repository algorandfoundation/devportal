---
title: SendTransactionResult
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / SendTransactionResult



[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).SendTransactionResult

The result of sending a transaction

## Hierarchy

- **`SendTransactionResult`**

  ↳ [`AppCallTransactionResultOfType`](/docs/algokit-utils/typescript/latest/api/interfaces/types_appappcalltransactionresultoftype/)

  ↳ [`ConfirmedTransactionResult`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresult/)

  ↳ [`ConfirmedTransactionResults`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionconfirmedtransactionresults/)

## Table of contents

### Properties

- [confirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/#confirmation)
- [transaction](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionresult/#transaction)

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