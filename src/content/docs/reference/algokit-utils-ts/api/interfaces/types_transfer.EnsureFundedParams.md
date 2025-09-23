---
title: EnsureFundedParams
---

[@algorandfoundation/algokit-utils](/reference/algokit-utils-ts/api/readme/) / [types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/) / EnsureFundedParams

[types/transfer](/reference/algokit-utils-ts/api/modules/types_transfer/).EnsureFundedParams

**`Deprecated`**

Parameters for `ensureFunded` call.

## Hierarchy

- [`SendTransactionParams`]()

  ↳ **`EnsureFundedParams`**

## Table of contents

### Properties

- [accountToFund](#accounttofund)
- [atc](#atc)
- [fee](#fee)
- [fundingSource](#fundingsource)
- [lease](#lease)
- [maxFee](#maxfee)
- [maxRoundsToWaitForConfirmation](#maxroundstowaitforconfirmation)
- [minFundingIncrement](#minfundingincrement)
- [minSpendingBalance](#minspendingbalance)
- [note](#note)
- [populateAppCallResources](#populateappcallresources)
- [skipSending](#skipsending)
- [skipWaiting](#skipwaiting)
- [suppressLog](#suppresslog)
- [transactionParams](#transactionparams)

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

[SendTransactionParams]().[atc](#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/reference/algokit-utils-ts/api/classes/types_amountalgoamount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams]().[fee](#fee)

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

[SendTransactionParams]().[maxFee](#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[SendTransactionParams]().[maxRoundsToWaitForConfirmation](#maxroundstowaitforconfirmation)

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

[SendTransactionParams]().[populateAppCallResources](#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[SendTransactionParams]().[skipSending](#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[SendTransactionParams]().[skipWaiting](#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[SendTransactionParams]().[suppressLog](#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/transfer.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L48)
