---
title: algokit_utils.transactions.transaction_composer.BuiltTransactions
---
#### *class* algokit_utils.transactions.transaction_composer.BuiltTransactions

Set of transactions built by TransactionComposer.

#### transactions *: list[algosdk.transaction.Transaction]*

The built transactions

#### method_calls *: dict[int, algosdk.abi.Method]*

Map of transaction index to ABI method

#### signers *: dict[int, algosdk.atomic_transaction_composer.TransactionSigner]*

Map of transaction index to TransactionSigner