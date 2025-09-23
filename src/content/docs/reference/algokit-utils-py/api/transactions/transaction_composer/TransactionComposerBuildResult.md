---
title: algokit_utils.transactions.transaction_composer.TransactionComposerBuildResult
---

#### _class_ algokit_utils.transactions.transaction_composer.TransactionComposerBuildResult

Result of building transactions with TransactionComposer.

#### atc _: algosdk.atomic_transaction_composer.AtomicTransactionComposer_

The AtomicTransactionComposer instance

#### transactions _: list[algosdk.atomic_transaction_composer.TransactionWithSigner]_

The list of transactions with signers

#### method_calls _: dict[int, algosdk.abi.Method]_

Map of transaction index to ABI method
