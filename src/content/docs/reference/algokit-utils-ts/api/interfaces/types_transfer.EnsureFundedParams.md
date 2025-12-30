---
title: EnsureFundedParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/) / EnsureFundedParams

[types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/).EnsureFundedParams

**`Deprecated`**

Parameters for `ensureFunded` call.

## Hierarchy

- [`SendTransactionParams`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/)

  ↳ **`EnsureFundedParams`**

## Table of contents

### Properties

- [accountToFund](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#accounttofund)
- [atc](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#atc)
- [fee](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#fee)
- [fundingSource](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#fundingsource)
- [lease](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#lease)
- [maxFee](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#maxfee)
- [maxRoundsToWaitForConfirmation](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#maxroundstowaitforconfirmation)
- [minFundingIncrement](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#minfundingincrement)
- [minSpendingBalance](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#minspendingbalance)
- [note](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#note)
- [populateAppCallResources](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#populateappcallresources)
- [skipSending](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#skipsending)
- [skipWaiting](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#skipwaiting)
- [suppressLog](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#suppresslog)
- [transactionParams](/reference/algokit-utils-ts/api/interfaces/types_transferensurefundedparams/#transactionparams)

## Properties

### accountToFund

• **accountToFund**: `string` \| [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom)

The account to fund

#### Defined in

[src/types/transfer.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L40)

---

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[atc](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[fee](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### fundingSource

• `Optional` **fundingSource**: [`SendTransactionFrom`](/reference/algokit-utils-ts/api/modules/types_transaction/#sendtransactionfrom) \| [`TestNetDispenserApiClient`](/reference/algokit-utils-ts/api/classes/types_dispenser_clienttestnetdispenserapiclient/)

The account to use as a funding source, will default to using the dispenser account returned by `algokit.getDispenserAccount`

#### Defined in

[src/types/transfer.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L42)

---

### lease

• `Optional` **lease**: `string` \| `Uint8Array`

An (optional) [transaction lease](https://dev.algorand.co/concepts/transactions/leases) to apply

#### Defined in

[src/types/transfer.ts:52](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L52)

---

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[maxFee](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[maxRoundsToWaitForConfirmation](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

---

### minFundingIncrement

• `Optional` **minFundingIncrement**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

When issuing a funding amount, the minimum amount to transfer (avoids many small transfers if this gets called often on an active account)

#### Defined in

[src/types/transfer.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L46)

---

### minSpendingBalance

• **minSpendingBalance**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The minimum balance of Algo that the account should have available to spend (i.e. on top of minimum balance requirement)

#### Defined in

[src/types/transfer.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L44)

---

### note

• `Optional` **note**: [`TransactionNote`](/reference/algokit-utils-ts/api/modules/types_transaction/#transactionnote)

The (optional) transaction note, default: "Funding account to meet minimum requirement"

#### Defined in

[src/types/transfer.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L50)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[populateAppCallResources](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[skipSending](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[skipWaiting](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[SendTransactionParams](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/).[suppressLog](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionparams/#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/transfer.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L48)
