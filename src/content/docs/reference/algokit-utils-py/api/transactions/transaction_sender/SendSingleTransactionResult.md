---
title: SendSingleTransactionResult
---
#### *class* algokit_utils.transactions.transaction_sender.SendSingleTransactionResult

Base class for transaction results.

Represents the result of sending a single transaction.

#### transaction *: [algokit_utils.models.transaction.TransactionWrapper](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/transaction/transactionwrapper/#algokit_utils.models.transaction.TransactionWrapper)*

The last transaction

#### confirmation *: algosdk.v2client.algod.AlgodResponseType*

The last confirmation

#### group_id *: str*

The group ID

#### tx_id *: str | None* *= None*

The transaction ID

#### tx_ids *: list[str]*

The full array of transaction IDs

#### transactions *: list[[algokit_utils.models.transaction.TransactionWrapper](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/transaction/transactionwrapper/#algokit_utils.models.transaction.TransactionWrapper)]*

The full array of transactions

#### confirmations *: list[algosdk.v2client.algod.AlgodResponseType]*

The full array of confirmations

#### returns *: list[[algokit_utils.applications.abi.ABIReturn](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/applications/abi/abireturn/#algokit_utils.applications.abi.ABIReturn)] | None* *= None*

The ABI return value if applicable

#### *classmethod* from_composer_result(result: [algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/transactions/transaction_composer/sendatomictransactioncomposerresults/#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults), \*, is_abi: bool = False, index: int = -1) → typing_extensions.Self