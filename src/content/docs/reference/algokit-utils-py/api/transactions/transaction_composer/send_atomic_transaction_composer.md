---
title: send_atomic_transaction_composer
sidebar:
  label: send_atomic_transaction_composer
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### algokit_utils.transactions.transaction_composer.send_atomic_transaction_composer(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer, algod: algosdk.v2client.algod.AlgodClient, \*, max_rounds_to_wait: int | None = 5, skip_waiting: bool = False, suppress_log: bool | None = None, populate_app_call_resources: bool | None = None, cover_app_call_inner_transaction_fees: bool | None = None, additional_atc_context: AdditionalAtcContext | None = None) → [SendAtomicTransactionComposerResults](SendAtomicTransactionComposerResults.md#algokit_utils.transactions.transaction_composer.SendAtomicTransactionComposerResults)

Send an AtomicTransactionComposer transaction group.

Executes a group of transactions atomically using the AtomicTransactionComposer.

- **Parameters:**
  - **atc** – The AtomicTransactionComposer instance containing the transaction group to send
  - **algod** – The Algod client to use for sending the transactions
  - **max_rounds_to_wait** – Maximum number of rounds to wait for confirmation, defaults to 5
  - **skip_waiting** – If True, don’t wait for transaction confirmation, defaults to False
  - **suppress_log** – If True, suppress logging, defaults to None
  - **populate_app_call_resources** – If True, populate app call resources, defaults to None
  - **cover_app_call_inner_transaction_fees** – If True, cover app call inner transaction fees, defaults to None
  - **additional_atc_context** – Additional context for the AtomicTransactionComposer
- **Returns:**
  Results from sending the transaction group
- **Raises:**
  - **Exception** – If there is an error sending the transactions
  - **error** – If there is an error from the Algorand node
