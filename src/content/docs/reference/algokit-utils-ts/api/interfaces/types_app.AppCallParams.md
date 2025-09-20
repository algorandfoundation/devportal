---
title: AppCallParams
slug: reference/algokit-utils-ts/api/interfaces/types_appappcallparams
---
[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/overview) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / AppCallParams



[types/app](/reference/algokit-utils-ts/api/modules/types_app/).AppCallParams

Parameters representing a call to an app.

## Hierarchy

- [`SendTransactionParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/)

  ↳ **`AppCallParams`**

## Table of contents

### Properties

- [appId](#appid)
- [args](#args)
- [atc](#atc)
- [callType](#calltype)
- [fee](#fee)
- [from](#from)
- [maxFee](#maxfee)
- [maxRoundsToWaitForConfirmation](#maxroundstowaitforconfirmation)
- [note](#note)
- [populateAppCallResources](#populateappcallresources)
- [skipSending](#skipsending)
- [skipWaiting](#skipwaiting)
- [suppressLog](#suppresslog)
- [transactionParams](#transactionparams)

## Properties

### appId

• **appId**: `number` \| `bigint`

The id of the app to call

#### Defined in

[src/types/app.ts:185](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L185)

___

### args

• `Optional` **args**: [`AppCallArgs`](/reference/algokit-utils-ts/api/modules/types_app/#appcallargs)

The arguments passed in to the app call

#### Defined in

[src/types/app.ts:195](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L195)

___

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[atc](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

___

### callType

• **callType**: ``"no_op"`` \| ``"opt_in"`` \| ``"close_out"`` \| ``"clear_state"`` \| ``"delete_application"`` \| `NoOpOC` \| `OptInOC` \| `CloseOutOC` \| `ClearStateOC` \| `DeleteApplicationOC`

The type of call, everything except create (see `createApp`) and update (see `updateApp`)

#### Defined in

[src/types/app.ts:187](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L187)

___

### fee

• `Optional` **fee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[fee](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

___

### from

• **from**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account to make the call from

#### Defined in

[src/types/app.ts:189](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L189)

___

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[maxFee](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

___

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[maxRoundsToWaitForConfirmation](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

___

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Defined in

[src/types/app.ts:193](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L193)

___

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[populateAppCallResources](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

___

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[skipSending](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

___

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[skipWaiting](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

___

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[suppressLog](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

___

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/app.ts:191](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L191)