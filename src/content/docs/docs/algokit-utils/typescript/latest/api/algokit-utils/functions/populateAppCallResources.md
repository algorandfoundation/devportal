---
editUrl: false
next: false
prev: false
title: "populateAppCallResources"
---

> **populateAppCallResources**(`composer`): `Promise`\<[`TransactionComposer`](/algokit-utils-ts/api/algokit-utils/classes/transactioncomposer/)\>

Defined in: [src/transaction/transaction.ts:68](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L68)

:::caution[Deprecated]
Use `composer.build()` directly
Take an existing Transaction Composer and return a new one with the required
app call resources populated into it
:::

## Parameters

### composer

[`TransactionComposer`](/algokit-utils-ts/api/algokit-utils/classes/transactioncomposer/)

The composer containing the txn group

## Returns

`Promise`\<[`TransactionComposer`](/algokit-utils-ts/api/algokit-utils/classes/transactioncomposer/)\>

A new composer with the resources populated into the transactions
