---
title: algokit_utils.transactions.transaction_sender.SendSingleTransactionResult
---

#### _class_ algokit_utils.transactions.transaction_sender.SendSingleTransactionResult

Base class for transaction results.

Represents the result of sending a single transaction.

#### transaction _: [algokit_utils.models.transaction.TransactionWrapper](/reference/algokit-utils-py/api/models/transaction/transactionwrapper/#algokit_utils.models.transaction.TransactionWrapper)_

The last transaction

#### confirmation _: algosdk.v2client.algod.AlgodResponseType_

The last confirmation

#### group_id _: str_

The group ID

#### tx_id _: str | None_ _= None_

The transaction ID

#### tx_ids _: list[str]_

The full array of transaction IDs

#### transactions _: list[[algokit_utils.models.transaction.TransactionWrapper](/reference/algokit-utils-py/api/models/transaction/transactionwrapper/#algokit_utils.models.transaction.TransactionWrapper)]_

The full array of transactions

#### confirmations _: list[algosdk.v2client.algod.AlgodResponseType]_

The full array of confirmations

#### returns _: list[[algokit_utils.applications.abi.ABIReturn](/reference/algokit-utils-py/api/applications/abi/abireturn/#algokit_utils.applications.abi.ABIReturn)] | None_ _= None_

The ABI return value if applicable

#### _classmethod_ from_composer_result(result: [algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults](/reference/algokit-utils-py/api/transactions/transaction_composer/sendatomictransactioncomposerresults/#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults), \*, is_abi: bool = False, index: int = -1) → typing_extensions.Self
