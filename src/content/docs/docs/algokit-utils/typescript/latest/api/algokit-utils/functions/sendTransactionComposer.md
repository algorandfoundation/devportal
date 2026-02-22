---
editUrl: false
next: false
prev: false
title: "sendTransactionComposer"
---

> **sendTransactionComposer**(`atcSend`): `Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/)\>

Defined in: [src/transaction/transaction.ts:114](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L114)

:::caution[Deprecated]
Use `composer.send()` directly
Signs and sends transactions that have been collected by an `TransactionComposer`.
:::

## Parameters

### atcSend

[`TransactionComposerToSend`](/algokit-utils-ts/api/algokit-utils/interfaces/transactioncomposertosend/)

The parameters controlling the send, including `atc` The `TransactionComposer` and params to control send behaviour

## Returns

`Promise`\<[`SendTransactionComposerResults`](/algokit-utils-ts/api/algokit-utils/interfaces/sendtransactioncomposerresults/)\>

An object with transaction IDs, transactions, group transaction ID (`groupTransactionId`) if more than 1 transaction sent, and (if `skipWaiting` is `false` or unset) confirmation (`confirmation`)
