---
title: EnsureFundedParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/transfer](/docs/algokit-utils/typescript/latest/api/modules/types_transfer/) / EnsureFundedParams

[types/transfer](/docs/algokit-utils/typescript/latest/api/modules/types_transfer/).EnsureFundedParams

**`Deprecated`**

Parameters for `ensureFunded` call.

## Hierarchy

- [`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/)

  ↳ **`EnsureFundedParams`**

## Table of contents

### Properties

- [accountToFund](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#accounttofund)
- [atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#atc)
- [fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#fee)
- [fundingSource](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#fundingsource)
- [lease](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#lease)
- [maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#maxfee)
- [maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#maxroundstowaitforconfirmation)
- [minFundingIncrement](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#minfundingincrement)
- [minSpendingBalance](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#minspendingbalance)
- [note](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#note)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#populateappcallresources)
- [skipSending](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#skipsending)
- [skipWaiting](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#skipwaiting)
- [suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#suppresslog)
- [transactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/#transactionparams)

## Properties

### accountToFund

• **accountToFund**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom)

The account to fund

#### Defined in

[src/types/transfer.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L40)

---

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#atc)

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#fee)

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### fundingSource

• `Optional` **fundingSource**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#sendtransactionfrom) \| [`TestNetDispenserApiClient`](/docs/algokit-utils/typescript/latest/api/classes/types_dispenser_client.TestNetDispenserApiClient/)

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

• `Optional` **maxFee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#maxfee)

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#maxroundstowaitforconfirmation)

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

---

### minFundingIncrement

• `Optional` **minFundingIncrement**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

When issuing a funding amount, the minimum amount to transfer (avoids many small transfers if this gets called often on an active account)

#### Defined in

[src/types/transfer.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L46)

---

### minSpendingBalance

• **minSpendingBalance**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The minimum balance of Algo that the account should have available to spend (i.e. on top of minimum balance requirement)

#### Defined in

[src/types/transfer.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L44)

---

### note

• `Optional` **note**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/#transactionnote)

The (optional) transaction note, default: "Funding account to meet minimum requirement"

#### Defined in

[src/types/transfer.ts:50](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L50)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#populateappcallresources)

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[skipSending](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#skipsending)

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[skipWaiting](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#skipwaiting)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[SendTransactionParams](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/).[suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#suppresslog)

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

---

### transactionParams

• `Optional` **transactionParams**: `SuggestedParams`

Optional transaction parameters

#### Defined in

[src/types/transfer.ts:48](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transfer.ts#L48)
