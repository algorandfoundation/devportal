---
editUrl: false
next: false
prev: false
title: "sendGroupOfTransactions"
---

> **sendGroupOfTransactions**(`groupSend`, `algod`): `Promise`\<`Omit`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/), `"returns"`\>\>

Defined in: [src/transaction/transaction.ts:1020](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L1020)

:::caution[Deprecated]
Use `TransactionComposer` (`algorand.newGroup()`) or `AtomicTransactionComposer` to construct and send group transactions instead.

Signs and sends a group of [up to 16](https://dev.algorand.co/concepts/transactions/atomic-txn-groups/#create-transactions) transactions to the chain
:::

## Parameters

### groupSend

[`TransactionGroupToSend`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/transactiongrouptosend/)

The group details to send, with:
  * `transactions`: The array of transactions to send along with their signing account
  * `sendParams`: The parameters to dictate how the group is sent

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Omit`\<[`SendAtomicTransactionComposerResults`](/docs/algokit-utils/typescript/latest/api/types/transaction/interfaces/sendatomictransactioncomposerresults/), `"returns"`\>\>

An object with transaction IDs, transactions, group transaction ID (`groupTransactionId`) if more than 1 transaction sent, and (if `skipWaiting` is `false` or unset) confirmation (`confirmation`)
