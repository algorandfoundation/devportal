---
title: models.amount
sidebar:
  label: Index
  order: 0
---

## Attributes

| [`ALGORAND_MIN_TX_FEE`](#algokit_utils.models.amount.ALGORAND_MIN_TX_FEE) |     |
| ------------------------------------------------------------------------- | --- |

## Classes

| [`AlgoAmount`](#algokit_utils.models.amount.AlgoAmount) | Wrapper class to ensure safe, explicit conversion between µAlgo, Algo and numbers. |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------- |

## Functions

| [`algo`](#algokit_utils.models.amount.algo)(→ AlgoAmount)                         | Create an AlgoAmount object representing the given number of Algo.       |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`micro_algo`](#algokit_utils.models.amount.micro_algo)(→ AlgoAmount)             | Create an AlgoAmount object representing the given number of µAlgo.      |
| [`transaction_fees`](#algokit_utils.models.amount.transaction_fees)(→ AlgoAmount) | Calculate the total transaction fees for a given number of transactions. |

## Module Contents

### _class_ algokit_utils.models.amount.AlgoAmount(\*, micro_algo: int)

### _class_ algokit_utils.models.amount.AlgoAmount(\*, algo: int | decimal.Decimal)

Wrapper class to ensure safe, explicit conversion between µAlgo, Algo and numbers.

- **Example:**
  ```python
  amount = AlgoAmount(algo=1)
  amount = AlgoAmount.from_algo(1)
  amount = AlgoAmount(micro_algo=1_000_000)
  amount = AlgoAmount.from_micro_algo(1_000_000)
  ```

#### _property_ micro_algo _: int_

Return the amount as a number in µAlgo.

- **Returns:**
  The amount in µAlgo.

#### _property_ algo _: decimal.Decimal_

Return the amount as a number in Algo.

- **Returns:**
  The amount in Algo.

#### _static_ from_algo(amount: int | decimal.Decimal) → [AlgoAmount](#algokit_utils.models.amount.AlgoAmount)

Create an AlgoAmount object representing the given number of Algo.

- **Parameters:**
  **amount** – The amount in Algo.
- **Returns:**
  An AlgoAmount instance.
- **Example:**
  ```python
  amount = AlgoAmount.from_algo(1)
  ```

#### _static_ from_micro_algo(amount: int) → [AlgoAmount](#algokit_utils.models.amount.AlgoAmount)

Create an AlgoAmount object representing the given number of µAlgo.

- **Parameters:**
  **amount** – The amount in µAlgo.
- **Returns:**
  An AlgoAmount instance.
- **Example:**
  ```python
  amount = AlgoAmount.from_micro_algo(1_000_000)
  ```

### algokit_utils.models.amount.algo(algo: int) → [AlgoAmount](#algokit_utils.models.amount.AlgoAmount)

Create an AlgoAmount object representing the given number of Algo.

- **Parameters:**
  **algo** – The number of Algo to create an AlgoAmount object for.
- **Returns:**
  An AlgoAmount object representing the given number of Algo.

### algokit_utils.models.amount.micro_algo(micro_algo: int) → [AlgoAmount](#algokit_utils.models.amount.AlgoAmount)

Create an AlgoAmount object representing the given number of µAlgo.

- **Parameters:**
  **micro_algo** – The number of µAlgo to create an AlgoAmount object for.
- **Returns:**
  An AlgoAmount object representing the given number of µAlgo.

### algokit_utils.models.amount.ALGORAND_MIN_TX_FEE

### algokit_utils.models.amount.transaction_fees(number_of_transactions: int) → [AlgoAmount](#algokit_utils.models.amount.AlgoAmount)

Calculate the total transaction fees for a given number of transactions.

- **Parameters:**
  **number_of_transactions** – The number of transactions to calculate the fees for.
- **Returns:**
  The total transaction fees.
