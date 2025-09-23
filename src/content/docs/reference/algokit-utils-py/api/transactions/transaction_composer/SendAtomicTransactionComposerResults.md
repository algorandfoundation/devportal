---
title: algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults
---
#### *class* algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults

Results from sending an AtomicTransactionComposer transaction group.

#### group_id *: str*

The group ID if this was a transaction group

#### confirmations *: list[algosdk.v2client.algod.AlgodResponseType]*

The confirmation info for each transaction

#### tx_ids *: list[str]*

The transaction IDs that were sent

#### transactions *: list[[algokit_utils.models.transaction.TransactionWrapper](/reference/algokit-utils-py/api/models/transaction/transactionwrapper/#algokit_utils.models.transaction.TransactionWrapper)]*

The transactions that were sent

#### returns *: list[[algokit_utils.applications.abi.ABIReturn](/reference/algokit-utils-py/api/applications/abi/abireturn/#algokit_utils.applications.abi.ABIReturn)]*

The ABI return values from any ABI method calls

#### simulate_response *: dict[str, Any] | None* *= None*

The simulation response if simulation was performed, defaults to None