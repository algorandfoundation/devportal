---
editUrl: false
next: false
prev: false
title: "prepareGroupForSending"
---

> **prepareGroupForSending**(`composer`, `sendParams`, `additionalContext?`): `Promise`\<[`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)\>

Defined in: [src/transaction/transaction.ts:89](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/transaction.ts#L89)

:::caution[Deprecated]
Use `composer.setMaxFees()` instead if you need to set max fees for transactions.
Use `composer.build()` instead if you need to build transactions with resource population.

Take an existing Transaction Composer and return a new one with changes applied to the transactions
based on the supplied sendParams to prepare it for sending.
:::

## Parameters

### composer

[`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)

The Transaction Composer containing the txn group

### sendParams

[`SendParams`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/sendparams/)

The send params for the transaction group

### additionalContext?

[`AdditionalTransactionComposerContext`](/docs/algokit-utils/typescript/latest/api/algokit-utils/interfaces/additionaltransactioncomposercontext/)

Additional context used to determine how best to change the transactions in the group

## Returns

`Promise`\<[`TransactionComposer`](/docs/algokit-utils/typescript/latest/api/algokit-utils/classes/transactioncomposer/)\>

A new Transaction Composer with the changes applied
