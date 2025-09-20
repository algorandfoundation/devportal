---
title: AppCallTransactionResultOfType\<T\>
slug: reference/algokit-utils-ts/api/interfaces/types_appappcalltransactionresultoftype
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / AppCallTransactionResultOfType



[types/app](/reference/algokit-utils-ts/api/modules/types_app/).AppCallTransactionResultOfType

The result of preparing and/or sending multiple transactions

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SendTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/)

- [`SendTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/)

  ↳ **`AppCallTransactionResultOfType`**

## Table of contents

### Properties

- [confirmation](#confirmation)
- [confirmations](#confirmations)
- [return](#return)
- [transaction](#transaction)
- [transactions](#transactions)

## Properties

### confirmation

• `Optional` **confirmation**: `PendingTransactionResponse`

The response if the transaction was sent and waited for

#### Inherited from

[SendTransactionResult](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/).[confirmation](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/#confirmation)

#### Defined in

[src/types/transaction.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L57)

___

### confirmations

• `Optional` **confirmations**: `PendingTransactionResponse`[]

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

#### Inherited from

[SendTransactionResults](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/).[confirmations](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/#confirmations)

#### Defined in

[src/types/transaction.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L67)

___

### return

• `Optional` **return**: `T`

If an ABI method was called the processed return value

#### Defined in

[src/types/app.ts:228](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L228)

___

### transaction

• **transaction**: `Transaction`

The transaction

#### Inherited from

[SendTransactionResult](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/).[transaction](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresult/#transaction)

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)

___

### transactions

• **transactions**: `Transaction`[]

The transactions that have been prepared and/or sent

#### Inherited from

[SendTransactionResults](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/).[transactions](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/#transactions)

#### Defined in

[src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)