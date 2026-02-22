---
editUrl: false
next: false
prev: false
title: "ConfirmedTransactionResults"
---

Defined in: [src/transaction/types.ts:87](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L87)

The result of sending and confirming one or more transactions, but where there is a primary transaction of interest

## Extends

- [`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/).[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresults/)

## Properties

### confirmation

> **confirmation**: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)

Defined in: [src/transaction/types.ts:89](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L89)

The response from sending and waiting for the primary transaction

#### Overrides

[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/).[`confirmation`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/#confirmation)

***

### confirmations

> **confirmations**: [`PendingTransactionResponse`](/docs/algokit-utils/typescript/latest/api/subpaths/algod-client/type-aliases/pendingtransactionresponse/)[]

Defined in: [src/transaction/types.ts:91](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L91)

The response from sending and waiting for the transactions

#### Overrides

[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresults/).[`confirmations`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresults/#confirmations)

***

### transaction

> **transaction**: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)

Defined in: [src/transaction/types.ts:51](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L51)

The transaction

#### Inherited from

[`SendTransactionResult`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/).[`transaction`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresult/#transaction)

***

### transactions

> **transactions**: [`Transaction`](/docs/algokit-utils/typescript/latest/api/subpaths/transact/classes/transaction/)[]

Defined in: [src/transaction/types.ts:59](https://github.com/larkiny/algokit-utils-ts/blob/main/src/transaction/types.ts#L59)

The transactions that have been prepared and/or sent

#### Inherited from

[`SendTransactionResults`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresults/).[`transactions`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendtransactionresults/#transactions)
