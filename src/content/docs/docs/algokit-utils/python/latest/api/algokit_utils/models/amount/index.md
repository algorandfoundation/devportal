---
title: "algokit_utils.models.amount"
---

<div class="api-ref">

## Attributes

| [`ALGORAND_MIN_TX_FEE`](#algorand_min_tx_fee)   |    |
|-----------------------------------------------------------------------------|----|

## Classes

| [`AlgoAmount`](#class-algoamount)   | Wrapper class to ensure safe, explicit conversion between µAlgo, Algo and numbers.   |
|-----------------------------------------------------------|--------------------------------------------------------------------------------------|

## Functions

| [`algo`](#algoalgo-int--algoamount)(→ AlgoAmount)                         | Create an AlgoAmount object representing the given number of Algo.       |
|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`micro_algo`](#micro_algomicro_algo-int--algoamount)(→ AlgoAmount)             | Create an AlgoAmount object representing the given number of µAlgo.      |
| [`transaction_fees`](#transaction_feesnumber_of_transactions-int--algoamount)(→ AlgoAmount) | Calculate the total transaction fees for a given number of transactions. |

## Module Contents

### *class* AlgoAmount
### *class* AlgoAmount
Wrapper class to ensure safe, explicit conversion between µAlgo, Algo and numbers.

* **Example:**
  ```python
  amount = AlgoAmount(algo=1)
  amount = AlgoAmount.from_algo(1)
  amount = AlgoAmount(micro_algo=1_000_000)
  amount = AlgoAmount.from_micro_algo(1_000_000)
  ```

#### *property* micro_algo *: int*

Return the amount as a number in µAlgo.

* **Returns:**
  The amount in µAlgo.

#### *property* algo *: decimal.Decimal*

Return the amount as a number in Algo.

* **Returns:**
  The amount in Algo.

#### *static* from_algo(amount: int | decimal.Decimal) → [AlgoAmount](#class-algoamount)

Create an AlgoAmount object representing the given number of Algo.

* **Parameters:**
  **amount** – The amount in Algo.
* **Returns:**
  An AlgoAmount instance.
* **Example:**
  ```python
  amount = AlgoAmount.from_algo(1)
  ```

#### *static* from_micro_algo(amount: int) → [AlgoAmount](#class-algoamount)

Create an AlgoAmount object representing the given number of µAlgo.

* **Parameters:**
  **amount** – The amount in µAlgo.
* **Returns:**
  An AlgoAmount instance.
* **Example:**
  ```python
  amount = AlgoAmount.from_micro_algo(1_000_000)
  ```

### algo(algo: int) → [AlgoAmount](#class-algoamount)

Create an AlgoAmount object representing the given number of Algo.

* **Parameters:**
  **algo** – The number of Algo to create an AlgoAmount object for.
* **Returns:**
  An AlgoAmount object representing the given number of Algo.

### micro_algo(micro_algo: int) → [AlgoAmount](#class-algoamount)

Create an AlgoAmount object representing the given number of µAlgo.

* **Parameters:**
  **micro_algo** – The number of µAlgo to create an AlgoAmount object for.
* **Returns:**
  An AlgoAmount object representing the given number of µAlgo.

### ALGORAND_MIN_TX_FEE

### transaction_fees(number_of_transactions: int) → [AlgoAmount](#class-algoamount)

Calculate the total transaction fees for a given number of transactions.

* **Parameters:**
  **number_of_transactions** – The number of transactions to calculate the fees for.
* **Returns:**
  The total transaction fees.


</div>
