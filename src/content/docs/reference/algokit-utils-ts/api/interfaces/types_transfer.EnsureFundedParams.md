---
title: EnsureFundedParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/) / EnsureFundedParams

[types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/).EnsureFundedParams

**`Deprecated`**

Parameters for `ensureFunded` call.

## Hierarchy

- [`SendTransactionParams`](types_transaction.SendTransactionParams.md)

  ↳ **`EnsureFundedParams`**

## Table of contents

### Properties

- [accountToFund](types_transfer.EnsureFundedParams.md#accounttofund)
- [atc](types_transfer.EnsureFundedParams.md#atc)
- [fee](types_transfer.EnsureFundedParams.md#fee)
- [fundingSource](types_transfer.EnsureFundedParams.md#fundingsource)
- [lease](types_transfer.EnsureFundedParams.md#lease)
- [maxFee](types_transfer.EnsureFundedParams.md#maxfee)
- [maxRoundsToWaitForConfirmation](types_transfer.EnsureFundedParams.md#maxroundstowaitforconfirmation)
- [minFundingIncrement](types_transfer.EnsureFundedParams.md#minfundingincrement)
- [minSpendingBalance](types_transfer.EnsureFundedParams.md#minspendingbalance)
- [note](types_transfer.EnsureFundedParams.md#note)
- [populateAppCallResources](types_transfer.EnsureFundedParams.md#populateappcallresources)
- [skipSending](types_transfer.EnsureFundedParams.md#skipsending)
- [skipWaiting](types_transfer.EnsureFundedParams.md#skipwaiting)
- [suppressLog](types_transfer.EnsureFundedParams.md#suppresslog)
- [transactionParams](types_transfer.EnsureFundedParams.md#transactionparams)

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

[SendTransactionParams](types_transaction.SendTransactionParams.md).[atc](types_transaction.SendTransactionParams.md#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[fee](types_transaction.SendTransactionParams.md#fee)

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

[SendTransactionParams](types_transaction.SendTransactionParams.md).[maxFee](types_transaction.SendTransactionParams.md#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[maxRoundsToWaitForConfirmation](types_transaction.SendTransactionParams.md#maxroundstowaitforconfirmation)

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

[SendTransactionParams](types_transaction.SendTransactionParams.md).[populateAppCallResources](types_transaction.SendTransactionParams.md#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[skipSending](types_transaction.SendTransactionParams.md#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[skipWaiting](types_transaction.SendTransactionParams.md#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[SendTransactionParams](types_transaction.SendTransactionParams.md).[suppressLog](types_transaction.SendTransactionParams.md#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/transfer.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L48)
