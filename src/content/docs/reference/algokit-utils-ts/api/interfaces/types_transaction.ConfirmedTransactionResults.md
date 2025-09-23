---
title: ConfirmedTransactionResults
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / ConfirmedTransactionResults



[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).ConfirmedTransactionResults

The result of sending and confirming one or more transactions, but where there is a primary transaction of interest

## Hierarchy

- [`SendTransactionResult`]()

- [`SendTransactionResults`]()

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

[SendTransactionResult]().[confirmation](#confirmation)

#### Defined in

[src/types/transaction.ts:93](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L93)

___

### confirmations

• **confirmations**: `PendingTransactionResponse`[]

The response from sending and waiting for the transactions

#### Overrides

[SendTransactionResults]().[confirmations](#confirmations)

#### Defined in

[src/types/transaction.ts:95](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L95)

___

### transaction

• **transaction**: `Transaction`

The transaction

#### Inherited from

[SendTransactionResult]().[transaction](#transaction)

#### Defined in

[src/types/transaction.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L55)

___

### transactions

• **transactions**: `Transaction`[]

The transactions that have been prepared and/or sent

#### Inherited from

[SendTransactionResults]().[transactions](#transactions)

#### Defined in

[src/types/transaction.ts:63](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L63)