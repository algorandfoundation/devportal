---
title: "Transaction management"
description: "Transaction management is one of the core capabilities provided by AlgoKit Utils. It allows you to construct, simulate and send single, or grouped transactions with consistent and highly configurable semantics, including configurable control of transaction notes, logging, fees, multiple sender account types, and sending behaviour."
---

Transaction management is one of the core capabilities provided by AlgoKit Utils. It allows you to construct, simulate and send single, or grouped transactions with consistent and highly configurable semantics, including configurable control of transaction notes, logging, fees, multiple sender account types, and sending behaviour.

> [!TIP]
> Core transaction types (`Transaction`, `TransactionSigner`) are available from the [modular imports](/docs/algokit-utils/typescript/latest/concepts/advanced/modular-imports/) via `@algorandfoundation/algokit-utils/transact`, and response types like `PendingTransactionResponse` are available from `@algorandfoundation/algokit-utils/algod-client`.

## ConfirmedTransactionResult

All AlgoKit Utils functions that send a transaction will generally return a variant of the ``ConfirmedTransactionResult` interface` or some superset of that. This provides a consistent mechanism to interpret the results of a transaction send.

It consists of two properties:

- `transaction`: A `Transaction` object that is either ready to send or represents the transaction that was sent
- `confirmation`: A `PendingTransactionResponse` object, which is a type-safe wrapper of the return from the algod pending transaction API noting that it will only be returned if the transaction was able to be confirmed (so won't represent a "pending" transaction)

There are various variations of the `ConfirmedTransactionResult` that are exposed by various functions within AlgoKit Utils, including:

- `ConfirmedTransactionResults` - Where it's both guaranteed that a confirmation will be returned, there is a primary driving transaction, but multiple transactions may be sent (e.g. when making an ABI app call which has dependant transactions)
- `SendTransactionResults` - Where multiple transactions are being sent (`transactions` and `confirmations` are arrays that replace the singular `transaction` and `confirmation`)
- `SendAtomicTransactionComposerResults` - The result from sending the transactions within an `AtomicTransactionComposer`, it extends `SendTransactionResults` and adds a few other useful properties
- `AppCallTransactionResult` - Result from calling a single app call (which potentially may result in multiple other transaction calls if it was an ABI method with dependant transactions)

## Further reading

To understand how to create, simulate and send transactions consult the [`AlgorandClient`](/docs/algokit-utils/typescript/latest/concepts/core/algorand-client/) and [`TransactionComposer`](/docs/algokit-utils/typescript/latest/concepts/advanced/transaction-composer/) documentation.
