---
editUrl: false
next: false
prev: false
title: "SendTransactionComposerResults"
---

Defined in: [src/transaction/types.ts:67](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L67)

The result of preparing and/or sending multiple transactions using an `TransactionComposer`

## Extends

- `Omit`\<[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresults/), `"confirmations"`\>

## Properties

### confirmations

> **confirmations**: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]

Defined in: [src/transaction/types.ts:77](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L77)

The responses if the transactions were sent and waited for,
the index of the confirmation will match the index of the underlying transaction

***

### groupId

> **groupId**: `string` \| `undefined`

Defined in: [src/transaction/types.ts:69](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L69)

base64 encoded representation of the group ID of the group

***

### returns?

> `optional` **returns**: [`ABIReturn`](/docs/algokit-utils/typescript/latest/api/subpaths/abi/type-aliases/abireturn/)[]

Defined in: [src/transaction/types.ts:73](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L73)

If ABI method(s) were called the processed return values

***

### transactions

> **transactions**: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]

Defined in: [src/transaction/types.ts:59](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L59)

The transactions that have been prepared and/or sent

#### Inherited from

[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresults/).[`transactions`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresults/#transactions)

***

### txIds

> **txIds**: `string`[]

Defined in: [src/transaction/types.ts:71](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L71)

The transaction IDs that have been prepared and/or sent
