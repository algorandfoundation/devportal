---
editUrl: false
next: false
prev: false
title: "TransactionParams"
---

> **TransactionParams** = `object`

Defined in: [packages/transact/src/transactions/transaction.ts:37](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L37)

Represents the parameters for a complete Algorand transaction.

This structure contains the fields that are present in every transaction,
regardless of transaction type, plus transaction-type-specific fields.

## Properties

### appCall?

> `optional` **appCall**: [`AppCallTransactionFields`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/appcalltransactionfields/)

Defined in: [packages/transact/src/transactions/transaction.ts:134](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L134)

App call specific fields

***

### assetConfig?

> `optional` **assetConfig**: [`AssetConfigTransactionFields`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/assetconfigtransactionfields/)

Defined in: [packages/transact/src/transactions/transaction.ts:129](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L129)

Asset config specific fields

***

### assetFreeze?

> `optional` **assetFreeze**: [`AssetFreezeTransactionFields`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/assetfreezetransactionfields/)

Defined in: [packages/transact/src/transactions/transaction.ts:144](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L144)

Asset freeze specific fields

***

### assetTransfer?

> `optional` **assetTransfer**: [`AssetTransferTransactionFields`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/assettransfertransactionfields/)

Defined in: [packages/transact/src/transactions/transaction.ts:124](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L124)

Asset transfer specific fields

***

### fee?

> `optional` **fee**: `bigint`

Defined in: [packages/transact/src/transactions/transaction.ts:55](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L55)

Optional transaction fee in microALGO.

When not set, the fee will be interpreted as 0 by the network.

***

### firstValid

> **firstValid**: `bigint`

Defined in: [packages/transact/src/transactions/transaction.ts:60](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L60)

First round for when the transaction is valid.

***

### genesisHash?

> `optional` **genesisHash**: `Uint8Array`

Defined in: [packages/transact/src/transactions/transaction.ts:74](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L74)

Hash of the genesis block of the network.

Used to identify which network the transaction is for.

***

### genesisId?

> `optional` **genesisId**: `string`

Defined in: [packages/transact/src/transactions/transaction.ts:81](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L81)

Genesis ID of the network.

A human-readable string used alongside genesis hash to identify the network.

***

### group?

> `optional` **group**: `Uint8Array`

Defined in: [packages/transact/src/transactions/transaction.ts:114](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L114)

Optional group ID for atomic transaction grouping.

Transactions with the same group ID must execute together or not at all.

***

### heartbeat?

> `optional` **heartbeat**: [`HeartbeatTransactionFields`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/heartbeattransactionfields/)

Defined in: [packages/transact/src/transactions/transaction.ts:149](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L149)

Heartbeat specific fields

***

### keyRegistration?

> `optional` **keyRegistration**: [`KeyRegistrationTransactionFields`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/keyregistrationtransactionfields/)

Defined in: [packages/transact/src/transactions/transaction.ts:139](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L139)

Key registration specific fields

***

### lastValid

> **lastValid**: `bigint`

Defined in: [packages/transact/src/transactions/transaction.ts:67](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L67)

Last round for when the transaction is valid.

After this round, the transaction will be expired.

***

### lease?

> `optional` **lease**: `Uint8Array`

Defined in: [packages/transact/src/transactions/transaction.ts:107](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L107)

Optional lease value to enforce mutual transaction exclusion.

When a transaction with a non-empty lease field is confirmed, the lease is acquired.
A lease X is acquired by the sender, generating the (sender, X) lease.
The lease is kept active until the last_valid round of the transaction has elapsed.
No other transaction sent by the same sender can be confirmed until the lease expires.

***

### note?

> `optional` **note**: `Uint8Array`

Defined in: [packages/transact/src/transactions/transaction.ts:88](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L88)

Optional user-defined note field.

Can contain arbitrary data up to 1KB in size.

***

### payment?

> `optional` **payment**: [`PaymentTransactionFields`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/paymenttransactionfields/)

Defined in: [packages/transact/src/transactions/transaction.ts:119](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L119)

Payment specific fields

***

### rekeyTo?

> `optional` **rekeyTo**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/transaction.ts:97](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L97)

Optional authorized account for future transactions.

If set, only this account will be used for transaction authorization going forward.
Reverting back control to the original address must be done by setting this field to
the original address.

***

### sender

> **sender**: [`Address`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/address/)

Defined in: [packages/transact/src/transactions/transaction.ts:48](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L48)

The account that authorized the transaction.

Fees are deducted from this account.

***

### stateProof?

> `optional` **stateProof**: [`StateProofTransactionFields`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/type-aliases/stateprooftransactionfields/)

Defined in: [packages/transact/src/transactions/transaction.ts:154](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L154)

State proof specific fields

***

### type

> **type**: [`TransactionType`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/enumerations/transactiontype/)

Defined in: [packages/transact/src/transactions/transaction.ts:41](https://github.com/larkiny/algokit-utils-ts/blob/main/packages/transact/src/transactions/transaction.ts#L41)

The type of transaction
