---
title: AtomicTransactionComposerToSend
slug: reference/algokit-utils-ts/api/interfaces/types_transactionatomictransactioncomposertosend
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/) / AtomicTransactionComposerToSend



[types/transaction](/reference/algokit-utils-ts/api/modules/types_transaction/).AtomicTransactionComposerToSend

An `AtomicTransactionComposer` with transactions to send.

## Hierarchy

- [`SendParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/)

  ↳ **`AtomicTransactionComposerToSend`**

## Table of contents

### Properties

- [additionalAtcContext](#additionalatccontext)
- [atc](#atc)
- [coverAppCallInnerTransactionFees](#coverappcallinnertransactionfees)
- [maxRoundsToWaitForConfirmation](#maxroundstowaitforconfirmation)
- [populateAppCallResources](#populateappcallresources)
- [sendParams](#sendparams)
- [suppressLog](#suppresslog)

## Properties

### additionalAtcContext

• `Optional` **additionalAtcContext**: [`AdditionalAtomicTransactionComposerContext`](/reference/algokit-utils-ts/api/interfaces/types_transactionadditionalatomictransactioncomposercontext/)

Additional `AtomicTransactionComposer` context used when building the transaction group that is sent.
This additional context is used and must be supplied when coverAppCallInnerTransactionFees is set to true.

#### Defined in

[src/types/transaction.ts:167](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L167)

___

### atc

• **atc**: `AtomicTransactionComposer`

The `AtomicTransactionComposer` with transactions loaded to send

#### Defined in

[src/types/transaction.ts:157](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L157)

___

### coverAppCallInnerTransactionFees

• `Optional` **coverAppCallInnerTransactionFees**: `boolean`

Whether to use simulate to automatically calculate required app call inner transaction fees and cover them in the parent app call transaction fee

#### Inherited from

[SendParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/).[coverAppCallInnerTransactionFees](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/#coverappcallinnertransactionfees)

#### Defined in

[src/types/transaction.ts:142](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L142)

___

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The number of rounds to wait for confirmation. By default until the latest lastValid has past.

#### Inherited from

[SendParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/).[maxRoundsToWaitForConfirmation](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:136](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L136)

___

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to `Config.populateAppCallResources`.

#### Inherited from

[SendParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/).[populateAppCallResources](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:140](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L140)

___

### sendParams

• `Optional` **sendParams**: `Omit`\<[`SendTransactionParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/), ``"fee"`` \| ``"maxFee"`` \| ``"skipSending"`` \| ``"atc"``\>

**`Deprecated`**

- set the parameters at the top level instead
Any parameters to control the semantics of the send to the network

#### Defined in

[src/types/transaction.ts:161](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L161)

___

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress.

#### Inherited from

[SendParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/).[suppressLog](/reference/algokit-utils-ts/api/interfaces/types_transactionsendparams/#suppresslog)

#### Defined in

[src/types/transaction.ts:138](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L138)