---
title: UpdateAppParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/app](/reference/algokit-utils-ts/api/modules/types_app/) / UpdateAppParams

[types/app](/reference/algokit-utils-ts/api/modules/types_app/).UpdateAppParams

**`Deprecated`**

Use `TransactionComposer` to construct update app transactions instead.

Parameters that are passed in when updating an app.

## Hierarchy

- `CreateOrUpdateAppParams`

  ↳ **`UpdateAppParams`**

## Table of contents

### Properties

- [appId](types_app.UpdateAppParams.md#appid)
- [approvalProgram](types_app.UpdateAppParams.md#approvalprogram)
- [args](types_app.UpdateAppParams.md#args)
- [atc](types_app.UpdateAppParams.md#atc)
- [clearStateProgram](types_app.UpdateAppParams.md#clearstateprogram)
- [fee](types_app.UpdateAppParams.md#fee)
- [from](types_app.UpdateAppParams.md#from)
- [maxFee](types_app.UpdateAppParams.md#maxfee)
- [maxRoundsToWaitForConfirmation](types_app.UpdateAppParams.md#maxroundstowaitforconfirmation)
- [note](types_app.UpdateAppParams.md#note)
- [populateAppCallResources](types_app.UpdateAppParams.md#populateappcallresources)
- [skipSending](types_app.UpdateAppParams.md#skipsending)
- [skipWaiting](types_app.UpdateAppParams.md#skipwaiting)
- [suppressLog](types_app.UpdateAppParams.md#suppresslog)
- [transactionParams](types_app.UpdateAppParams.md#transactionparams)

## Properties

### appId

• **appId**: `number` \| `bigint`

The id of the app to update

#### Defined in

[src/types/app.ts:163](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L163)

---

### approvalProgram

• **approvalProgram**: `string` \| `Uint8Array`

The approval program as raw teal (string) or compiled teal, base 64 encoded as a byte array (Uint8Array)

#### Inherited from

CreateOrUpdateAppParams.approvalProgram

#### Defined in

[src/types/app.ts:135](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L135)

---

### args

• `Optional` **args**: [`AppCallArgs`](/reference/algokit-utils-ts/api/modules/types_app/#appcallargs)

The arguments passed in to the app call

#### Inherited from

CreateOrUpdateAppParams.args

#### Defined in

[src/types/app.ts:143](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L143)

---

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

CreateOrUpdateAppParams.atc

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### clearStateProgram

• **clearStateProgram**: `string` \| `Uint8Array`

The clear state program as raw teal (string) or compiled teal, base 64 encoded as a byte array (Uint8Array)

#### Inherited from

CreateOrUpdateAppParams.clearStateProgram

#### Defined in

[src/types/app.ts:137](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L137)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

CreateOrUpdateAppParams.fee

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### from

• **from**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account (with private key loaded) that will send the transaction

#### Inherited from

CreateOrUpdateAppParams.from

#### Defined in

[src/types/app.ts:133](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L133)

---

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

CreateOrUpdateAppParams.maxFee

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

CreateOrUpdateAppParams.maxRoundsToWaitForConfirmation

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

---

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The (optional) transaction note

#### Inherited from

CreateOrUpdateAppParams.note

#### Defined in

[src/types/app.ts:141](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L141)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

CreateOrUpdateAppParams.populateAppCallResources

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

CreateOrUpdateAppParams.skipSending

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

CreateOrUpdateAppParams.skipWaiting

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

CreateOrUpdateAppParams.suppressLog

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Inherited from

CreateOrUpdateAppParams.transactionParams

#### Defined in

[src/types/app.ts:139](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app.ts#L139)
