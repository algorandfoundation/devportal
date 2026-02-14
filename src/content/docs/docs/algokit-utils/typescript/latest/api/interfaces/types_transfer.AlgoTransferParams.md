---
title: AlgoTransferParams
---
[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/readme/) / [types/transfer](/docs/algokit-utils/typescript/latest/api/modules/types_transfer/) / AlgoTransferParams



[types/transfer](/docs/algokit-utils/typescript/latest/api/modules/types_transfer/).AlgoTransferParams

**`Deprecated`**

Parameters for `transferAlgos` call.

## Hierarchy

- [`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/)

  ↳ **`AlgoTransferParams`**

## Table of contents

### Properties

- [amount](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#amount)
- [atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#atc)
- [fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#fee)
- [from](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#from)
- [lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#lease)
- [maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#maxfee)
- [maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#maxroundstowaitforconfirmation)
- [note](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#note)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#populateappcallresources)
- [skipSending](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#skipsending)
- [skipWaiting](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#skipwaiting)
- [suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#suppresslog)
- [to](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#to)
- [transactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transferalgotransferparams/#transactionparams)

## Properties

### amount

• **amount**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)

The amount to send

#### Defined in

[src/types/transfer.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L14)

___

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/).[atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

___

### fee

• `Optional` **fee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/).[fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

___

### from

• **from**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The account that will send the Algo

#### Defined in

[src/types/transfer.ts:10](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L10)

___

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

An (optional) [transaction lease](https://dev.algorand.co/concepts/transactions/leases) to apply

#### Defined in

[src/types/transfer.ts:20](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L20)

___

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/).[maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

___

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/).[maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

___

### note

• `Optional` **note**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Defined in

[src/types/transfer.ts:18](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L18)

___

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/).[populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

___

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/).[skipSending](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

___

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/).[skipWaiting](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

___

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/).[suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_transactionsendtransactionparams/#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

___

### to

• **to**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The account / account address that will receive the Algo

#### Defined in

[src/types/transfer.ts:12](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L12)

___

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/transfer.ts:16](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L16)