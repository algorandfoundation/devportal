---
title: SendAtomicTransactionComposerResults
sidebar:
  label: SendAtomicTransactionComposerResults
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults

Results from sending an AtomicTransactionComposer transaction group.

#### group*id *: str\_

The group ID if this was a transaction group

#### confirmations _: list[algosdk.v2client.algod.AlgodResponseType]_

The confirmation info for each transaction

#### tx*ids *: list[str]\_

The transaction IDs that were sent

#### transactions _: list[[algokit_utils.models.transaction.TransactionWrapper](/reference/algokit-utils-py/api/models/transaction/transactionwrapper/#algokit_utils.models.transaction.TransactionWrapper)]_

The transactions that were sent

#### returns _: list[[algokit_utils.applications.abi.ABIReturn](/reference/algokit-utils-py/api/applications/abi/abireturn/#algokit_utils.applications.abi.ABIReturn)]_

The ABI return values from any ABI method calls

#### simulate*response *: dict[str, Any] | None\_ _= None_

The simulation response if simulation was performed, defaults to None
