---
editUrl: false
next: false
prev: false
title: "performTransactionComposerSimulate"
---

> **performTransactionComposerSimulate**(`composer`, `options?`): `Promise`\<[`SimulateResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

Defined in: [src/transaction/perform-transaction-composer-simulate.ts:14](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/transaction/perform-transaction-composer-simulate.ts#L14)

:::caution[Deprecated]
Use `composer.simulate` with
 - `allowEmptySignatures` flag set to true
 - `resultOnFailure` flag set to true

Performs a simulation of the transactions loaded into the given TransactionComposer.
Uses empty transaction signers for all transactions.
:::

## Parameters

### composer

[`TransactionComposer`](/algokit-utils-ts/api/algokit-utils/classes/transactioncomposer/)

The TransactionComposer with transaction(s) loaded.

### options?

[`RawSimulateOptions`](/algokit-utils-ts/api/algokit-utils/type-aliases/rawsimulateoptions/)

## Returns

`Promise`\<[`SimulateResponse`](/algokit-utils-ts/api/subpaths/algod-client/type-aliases/simulateresponse/)\>

The simulation result, which includes various details about how the transactions would be processed.
