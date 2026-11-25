---
editUrl: false
next: false
prev: false
title: "SendTransactionParams"
---

Defined in: [src/types/transaction.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L29)

The sending configuration for a transaction

## Extended by

- [`AppCallParams`](/docs/algokit-utils/typescript/latest/api/types/app/interfaces/appcallparams/)
- [`CreateAssetParams`](/docs/algokit-utils/typescript/latest/api/types/asset/interfaces/createassetparams/)
- [`AssetOptInParams`](/docs/algokit-utils/typescript/latest/api/types/asset/interfaces/assetoptinparams/)
- [`AlgoTransferParams`](/docs/algokit-utils/typescript/latest/api/types/transfer/interfaces/algotransferparams/)
- [`AlgoRekeyParams`](/docs/algokit-utils/typescript/latest/api/types/transfer/interfaces/algorekeyparams/)
- [`EnsureFundedParams`](/docs/algokit-utils/typescript/latest/api/types/transfer/interfaces/ensurefundedparams/)
- [`TransferAssetParams`](/docs/algokit-utils/typescript/latest/api/types/transfer/interfaces/transferassetparams/)

## Properties

### atc?

> `optional` **atc?**: `AtomicTransactionComposer`

Defined in: [src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

***

### fee?

> `optional` **fee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

***

### maxFee?

> `optional` **maxFee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

***

### maxRoundsToWaitForConfirmation?

> `optional` **maxRoundsToWaitForConfirmation?**: `number`

Defined in: [src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

***

### populateAppCallResources?

> `optional` **populateAppCallResources?**: `boolean`

Defined in: [src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

***

### skipSending?

> `optional` **skipSending?**: `boolean`

Defined in: [src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

***

### skipWaiting?

> `optional` **skipWaiting?**: `boolean`

Defined in: [src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

***

### suppressLog?

> `optional` **suppressLog?**: `boolean`

Defined in: [src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

Whether to suppress log messages from transaction send, default: do not suppress
