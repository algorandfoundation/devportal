---
title: prepare_group_for_sending
---

#### algokit_utils.transactions.transaction_composer.prepare_group_for_sending(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer, algod: algosdk.v2client.algod.AlgodClient, populate_app_call_resources: bool | None = None, cover_app_call_inner_transaction_fees: bool | None = None, additional_atc_context: AdditionalAtcContext | None = None) → algosdk.atomic_transaction_composer.AtomicTransactionComposer

Take an existing Atomic Transaction Composer and return a new one with changes applied to the transactions
based on the supplied parameters to prepare it for sending.
Please note, that before calling .execute() on the returned ATC, you must call .build_group().

- **Parameters:**
  - **atc** – The AtomicTransactionComposer containing transactions
  - **algod** – Algod client for simulation
  - **populate_app_call_resources** – Whether to populate app call resources
  - **cover_app_call_inner_transaction_fees** – Whether to cover inner txn fees
  - **additional_atc_context** – Additional context for the AtomicTransactionComposer
- **Returns:**
  Modified AtomicTransactionComposer ready for sending
