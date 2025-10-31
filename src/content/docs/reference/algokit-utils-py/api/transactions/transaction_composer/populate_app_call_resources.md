---
title: populate_app_call_resources
sidebar:
  label: populate_app_call_resources
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### algokit_utils.transactions.transaction_composer.populate_app_call_resources(atc: algosdk.atomic_transaction_composer.AtomicTransactionComposer, algod: algosdk.v2client.algod.AlgodClient) → algosdk.atomic_transaction_composer.AtomicTransactionComposer

Populate application call resources based on simulation results.

- **Parameters:**
  - **atc** – The AtomicTransactionComposer containing transactions
  - **algod** – Algod client for simulation
- **Returns:**
  Modified AtomicTransactionComposer with populated resources
