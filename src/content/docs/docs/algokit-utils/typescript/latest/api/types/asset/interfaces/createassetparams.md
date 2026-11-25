---
editUrl: false
next: false
prev: false
title: "CreateAssetParams"
---

Defined in: [src/types/asset.ts:7](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L7)

:::caution[Deprecated]
Parameters for `createAsset` call.
:::

## Extends

- [`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/)

## Properties

### ~~atc?~~

> `optional` **atc?**: `AtomicTransactionComposer`

Defined in: [src/types/transaction.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L36)

An optional `AtomicTransactionComposer` to add the transaction to, if specified then `skipSending: undefined` has the same effect as `skipSending: true`

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`atc`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#atc)

***

### ~~clawbackAccount?~~

> `optional` **clawbackAccount?**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/asset.ts:57](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L57)

The optional account that can clawback holdings of this asset. If empty, clawback is not permitted.
If not set at asset creation or subsequently set to empty by the manager the field is permanently empty.

***

### ~~creator~~

> **creator**: [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/asset.ts:11](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L11)

The account to create the asset.

This account automatically is opted in to the asset and holds all units after creation.

***

### ~~decimals~~

> **decimals**: `number`

Defined in: [src/types/asset.ts:26](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L26)

The number of digits to use after the decimal point when displaying the asset.
If 0, the asset is not divisible.
If 1, the base unit of the asset is in tenths.
If 2, the base unit of the asset is in hundredths.
If 3, the base unit of the asset is in thousandths, and so on up to 19 decimal places.
This field can only be specified upon asset creation.

***

### ~~fee?~~

> `optional` **fee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/transaction.ts:40](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L40)

The flat fee you want to pay, useful for covering extra fees in a transaction group or app call

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`fee`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#fee)

***

### ~~freezeAccount?~~

> `optional` **freezeAccount?**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/asset.ts:53](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L53)

The optional account that can be used to freeze holdings of this asset. If empty, freezing is not permitted.
If not set at asset creation or subsequently set to empty by the manager the field is permanently empty.

***

### ~~frozenByDefault?~~

> `optional` **frozenByDefault?**: `boolean`

Defined in: [src/types/asset.ts:59](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L59)

Whether to freeze holdings for this asset by default. If `true` then for anyone apart from the creator to hold the asset it needs to be unfrozen per account using `freeze`. Defaults to `false`.

***

### ~~lease?~~

> `optional` **lease?**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/asset.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L66)

An (optional) [transaction lease](https://dev.algorand.co/concepts/transactions/leases) to apply

***

### ~~manager?~~

> `optional` **manager?**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/asset.ts:43](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L43)

The optional account that can manage the configuration of the asset and destroy it.
If not set at asset creation or subsequently set to empty by the manager the asset becomes immutable.

***

### ~~maxFee?~~

> `optional` **maxFee?**: [`AlgoAmount`](/docs/algokit-utils/typescript/latest/api/types/amount/classes/algoamount/)

Defined in: [src/types/transaction.ts:42](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L42)

The maximum fee that you are happy to pay (default: unbounded) - if this is set it's possible the transaction could get rejected during network congestion

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`maxFee`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#maxfee)

***

### ~~maxRoundsToWaitForConfirmation?~~

> `optional` **maxRoundsToWaitForConfirmation?**: `number`

Defined in: [src/types/transaction.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L44)

The maximum number of rounds to wait for confirmation, only applies if `skipWaiting` is `undefined` or `false`, default: wait up to 5 rounds

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`maxRoundsToWaitForConfirmation`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#maxroundstowaitforconfirmation)

***

### ~~metadataHash?~~

> `optional` **metadataHash?**: `string` \| `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/asset.ts:39](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L39)

This field is intended to be a 32-byte hash of some metadata that is relevant to your asset and/or asset holders.
The format of this metadata is up to the application. This field can only be specified upon asset creation.

***

### ~~name?~~

> `optional` **name?**: `string`

Defined in: [src/types/asset.ts:29](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L29)

The optional name of the asset. Max size if 32 bytes. This field can only be specified upon asset creation.

***

### ~~note?~~

> `optional` **note?**: [`TransactionNote`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/transactionnote/)

Defined in: [src/types/asset.ts:64](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L64)

The (optional) transaction note

***

### ~~populateAppCallResources?~~

> `optional` **populateAppCallResources?**: `boolean`

Defined in: [src/types/transaction.ts:46](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L46)

Whether to use simulate to automatically populate app call resources in the txn objects. Defaults to true when there are app calls in the group.

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`populateAppCallResources`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#populateappcallresources)

***

### ~~reserveAccount?~~

> `optional` **reserveAccount?**: `string` \| [`SendTransactionFrom`](/docs/algokit-utils/typescript/latest/api/types/transaction/type-aliases/sendtransactionfrom/)

Defined in: [src/types/asset.ts:49](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L49)

The optional account that holds the reserve (non-minted) units of the asset. This address has no specific authority in the protocol itself and is informational.
Some standards like [ARC-19](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md) rely on this field to hold meaningful data.
It is used in the case where you want to signal to holders of your asset that the non-minted units of the asset reside in an account that is different from the default creator account.
If not set at asset creation or subsequently set to empty by the manager the field is permanently empty.

***

### ~~skipSending?~~

> `optional` **skipSending?**: `boolean`

Defined in: [src/types/transaction.ts:32](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L32)

Whether to skip signing and sending the transaction to the chain (default: transaction signed and sent to chain, unless `atc` specified)
and instead just return the raw transaction, e.g. so you can add it to a group of transactions

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`skipSending`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#skipsending)

***

### ~~skipWaiting?~~

> `optional` **skipWaiting?**: `boolean`

Defined in: [src/types/transaction.ts:34](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L34)

Whether to skip waiting for the submitted transaction (only relevant if `skipSending` is `false` or unset)

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`skipWaiting`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#skipwaiting)

***

### ~~suppressLog?~~

> `optional` **suppressLog?**: `boolean`

Defined in: [src/types/transaction.ts:38](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/transaction.ts#L38)

Whether to suppress log messages from transaction send, default: do not suppress

#### Inherited from

[`SendTransactionParams`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/).[`suppressLog`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendtransactionparams/#suppresslog)

***

### ~~total~~

> **total**: `number` \| `bigint`

Defined in: [src/types/asset.ts:17](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L17)

The total number of base (decimal) units of the asset to create.
If decimal is, say, 2, then for every 100 `total` there would be 1 whole unit.
This field can only be specified upon asset creation.

***

### ~~transactionParams?~~

> `optional` **transactionParams?**: `SuggestedParams`

Defined in: [src/types/asset.ts:62](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L62)

Optional transaction parameters

***

### ~~unit?~~

> `optional` **unit?**: `string`

Defined in: [src/types/asset.ts:31](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L31)

The optional name of the unit of this asset. Max size is 8 bytes. This field can only be specified upon asset creation.

***

### ~~url?~~

> `optional` **url?**: `string`

Defined in: [src/types/asset.ts:35](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/asset.ts#L35)

Specifies an optional URL where more information about the asset can be retrieved. Max size is 96 bytes.
This field can only be specified upon asset creation.
