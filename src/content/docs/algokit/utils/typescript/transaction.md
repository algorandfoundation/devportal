---
title: Transaction management
---
Transaction management is one of the core capabilities provided by AlgoKit Utils. It allows you to construct, simulate and send single, or grouped transactions with consistent and highly configurable semantics, including configurable control of transaction notes, logging, fees, multiple sender account types, and sending behaviour.

## `ConfirmedTransactionResult`

All AlgoKit Utils functions that send a transaction will generally return a variant of the [`ConfirmedTransactionResult` interface](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresult/) or some superset of that. This provides a consistent mechanism to interpret the results of a transaction send.

It consists of two properties:

- `transaction`: An `algosdk.Transaction` object that is either ready to send or represents the transaction that was sent
- `confirmation`: An `algosdk.modelsv2.PendingTransactionResponse` object, which is a type-safe wrapper of the return from the algod pending transaction API noting that it will only be returned if the transaction was able to be confirmed (so won't represent a "pending" transaction)

There are various variations of the `ConfirmedTransactionResult` that are exposed by various functions within AlgoKit Utils, including:

- [`ConfirmedTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionconfirmedtransactionresults/) - Where it's both guaranteed that a confirmation will be returned, there is a primary driving transaction, but multiple transactions may be sent (e.g. when making an ABI app call which has dependant transactions)
- [`SendTransactionResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendtransactionresults/) - Where multiple transactions are being sent (`transactions` and `confirmations` are arrays that replace the singular `transaction` and `confirmation`)
- [`SendAtomicTransactionComposerResults`](/reference/algokit-utils-ts/api/interfaces/types_transactionsendatomictransactioncomposerresults/) - The result from sending the transactions within an `AtomicTransactionComposer`, it extends `SendTransactionResults` and adds a few other useful properties
- [`AppCallTransactionResult`](/reference/algokit-utils-ts/api/interfaces/types_appappcalltransactionresult/) - Result from calling a single app call (which potentially may result in multiple other transaction calls if it was an ABI method with dependant transactions)

## Further reading

To understand how to create, simulate and send transactions consult the [`AlgorandClient`](/algokit/utils/typescript/algorand-client/) and [`TransactionComposer`](/algokit/utils/typescript/transaction-composer/) documentation.