---
title: algokit_utils.transactions.transaction_composer.TransactionComposerBuildResult
---
#### *class* algokit_utils.transactions.transaction_composer.TransactionComposerBuildResult

Result of building transactions with TransactionComposer.

#### atc *: algosdk.atomic_transaction_composer.AtomicTransactionComposer*

The AtomicTransactionComposer instance

#### transactions *: list[algosdk.atomic_transaction_composer.TransactionWithSigner]*

The list of transactions with signers

#### method_calls *: dict[int, algosdk.abi.Method]*

Map of transaction index to ABI method