---
title: algokit_utils.transactions.transaction_composer.BuiltTransactions
---

#### _class_ algokit_utils.transactions.transaction_composer.BuiltTransactions

Set of transactions built by TransactionComposer.

#### transactions _: list[algosdk.transaction.Transaction]_

The built transactions

#### method_calls _: dict[int, algosdk.abi.Method]_

Map of transaction index to ABI method

#### signers _: dict[int, algosdk.atomic_transaction_composer.TransactionSigner]_

Map of transaction index to TransactionSigner
