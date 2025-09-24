---
title: models.amount
sidebar:
  label: Index
  order: 0
---

## Classes

| [`AlgoAmount`](AlgoAmount.md#algokit_utils.models.amount.AlgoAmount) | Wrapper class to ensure safe, explicit conversion between µAlgo, Algo and numbers. |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |

## Module Contents

### algokit_utils.models.amount.algo(algo: int) → [AlgoAmount](AlgoAmount.md#algokit_utils.models.amount.AlgoAmount)

Create an AlgoAmount object representing the given number of Algo.

- **Parameters:**
  **algo** – The number of Algo to create an AlgoAmount object for.
- **Returns:**
  An AlgoAmount object representing the given number of Algo.

### algokit_utils.models.amount.micro_algo(micro_algo: int) → [AlgoAmount](AlgoAmount.md#algokit_utils.models.amount.AlgoAmount)

Create an AlgoAmount object representing the given number of µAlgo.

- **Parameters:**
  **micro_algo** – The number of µAlgo to create an AlgoAmount object for.
- **Returns:**
  An AlgoAmount object representing the given number of µAlgo.

### algokit_utils.models.amount.ALGORAND_MIN_TX_FEE

### algokit_utils.models.amount.transaction_fees(number_of_transactions: int) → [AlgoAmount](AlgoAmount.md#algokit_utils.models.amount.AlgoAmount)

Calculate the total transaction fees for a given number of transactions.

- **Parameters:**
  **number_of_transactions** – The number of transactions to calculate the fees for.
- **Returns:**
  The total transaction fees.
