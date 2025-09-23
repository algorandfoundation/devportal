---
title: algokit_utils.models.amount.AlgoAmount
---
#### *class* algokit_utils.models.amount.AlgoAmount(\*, micro_algo: int)

### *class* AlgoAmount(\*, algo: int | decimal.Decimal)

Wrapper class to ensure safe, explicit conversion between µAlgo, Algo and numbers.

* **Example:**
  ```pycon
  >>> amount = AlgoAmount(algo=1)
  >>> amount = AlgoAmount.from_algo(1)
  >>> amount = AlgoAmount(micro_algo=1_000_000)
  >>> amount = AlgoAmount.from_micro_algo(1_000_000)
  ```

#### *property* micro_algo *: int*

Return the amount as a number in µAlgo.

* **Returns:**
  The amount in µAlgo.

#### *property* algo *: decimal.Decimal*

Return the amount as a number in Algo.

* **Returns:**
  The amount in Algo.

#### *static* from_algo(amount: int | decimal.Decimal) → [AlgoAmount](#AlgoAmount)

Create an AlgoAmount object representing the given number of Algo.

* **Parameters:**
  **amount** – The amount in Algo.
* **Returns:**
  An AlgoAmount instance.
* **Example:**
  ```pycon
  >>> amount = AlgoAmount.from_algo(1)
  ```

#### *static* from_micro_algo(amount: int) → [AlgoAmount](#AlgoAmount)

Create an AlgoAmount object representing the given number of µAlgo.

* **Parameters:**
  **amount** – The amount in µAlgo.
* **Returns:**
  An AlgoAmount instance.
* **Example:**
  ```pycon
  >>> amount = AlgoAmount.from_micro_algo(1_000_000)
  ```