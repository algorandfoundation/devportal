---
title: SendTransactionParams
---

[@algorandfoundation/algokit-utils](/docs/algokit-utils/typescript/latest/api/README/) / [types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/) / SendTransactionParams

[types/transaction](/docs/algokit-utils/typescript/latest/api/modules/types_transaction/).SendTransactionParams

The sending configuration for a transaction

## Hierarchy

- **`SendTransactionParams`**

  ↳ [`AppCallParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_app.AppCallParams/)

  ↳ [`CreateAssetParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset.CreateAssetParams/)

  ↳ [`AssetOptInParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_asset.AssetOptInParams/)

  ↳ [`AlgoTransferParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoTransferParams/)

  ↳ [`AlgoRekeyParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.AlgoRekeyParams/)

  ↳ [`EnsureFundedParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.EnsureFundedParams/)

  ↳ [`TransferAssetParams`](/docs/algokit-utils/typescript/latest/api/interfaces/types_transfer.TransferAssetParams/)

## Table of contents

### Properties

- [atc](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#atc)
- [fee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#fee)
- [maxFee](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#maxfee)
- [maxRoundsToWaitForConfirmation](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#maxroundstowaitforconfirmation)
- [populateAppCallResources](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#populateappcallresources)
- [skipSending](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#skipsending)
- [skipWaiting](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#skipwaiting)
- [suppressLog](/docs/algokit-utils/typescript/latest/api/interfaces/types_transaction.SendTransactionParams/#suppresslog)

## Properties

### atc

• `Optional` **atc**: `AtomicTransactionComposer`

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Defined in

[src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

---

### fee

• `Optional` **fee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Defined in

[src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

---

### maxFee

• `Optional` **maxFee**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/classes/types_amount.AlgoAmount/)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Defined in

[src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

---

### maxRoundsToWaitForConfirmation

• `Optional` **maxRoundsToWaitForConfirmation**: `number`

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Defined in

[src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

---

### populateAppCallResources

• `Optional` **populateAppCallResources**: `boolean`

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Defined in

[src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

---

### skipSending

• `Optional` **skipSending**: `boolean`

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Defined in

[src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

---

### skipWaiting

• `Optional` **skipWaiting**: `boolean`

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Defined in

[src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

---

### suppressLog

• `Optional` **suppressLog**: `boolean`

Whether to suppress log messages from transaction send, default: do not suppress

#### Defined in

[src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)
