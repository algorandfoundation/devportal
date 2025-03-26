---
title: Algo amount handling
---

Algo amount handling is one of the core capabilities provided by AlgoKit Utils. It allows you to reliably and tersely specify amounts of microAlgo and Algo and safely convert between them.

Any AlgoKit Utils function that needs an Algo amount will take an `AlgoAmount` object, which ensures that there is never any confusion about what value is being passed around. Whenever an AlgoKit Utils function calls into an underlying algosdk function, or if you need to take an `AlgoAmount` and pass it into an underlying algosdk function (per the [modularity principle](../index#core-principles)) you can safely and explicitly convert to microAlgo or Algo.

To see some usage examples check out the automated tests. Alternatively, you can see the reference documentation for `AlgoAmount`.

## `AlgoAmount`

The `AlgoAmount` class provides a safe wrapper around an underlying amount of microAlgo where any value entering or existing the `AlgoAmount` class must be explicitly stated to be in microAlgo or Algo. This makes it much safer to handle Algo amounts rather than passing them around as raw numbers where it’s easy to make a (potentially costly!) mistake and not perform a conversion when one is needed (or perform one when it shouldn’t be!).

To import the AlgoAmount class you can access it via:

```python
from algokit_utils import AlgoAmount
```

### Creating an `AlgoAmount`

There are a few ways to create an `AlgoAmount`:

- Algo
  - Constructor: `AlgoAmount(algo=10)`
  - Static helper: `AlgoAmount.from_algo(10)`
- microAlgo
  - Constructor: `AlgoAmount(micro_algo=10_000)`
  - Static helper: `AlgoAmount.from_micro_algo(10_000)`

### Extracting a value from `AlgoAmount`

The `AlgoAmount` class has properties to return Algo and microAlgo:

- `amount.algo` - Returns the value in Algo as a python `Decimal` object
- `amount.micro_algo` - Returns the value in microAlgo as an integer

`AlgoAmount` will coerce to an integer automatically (in microAlgo) when using `int(amount)`, which allows you to use `AlgoAmount` objects in comparison operations such as `<` and `>=` etc.

You can also call `str(amount)` or use an `AlgoAmount` directly in string interpolation to convert it to a nice user-facing formatted amount expressed in microAlgo.

### Additional Features

The `AlgoAmount` class supports arithmetic operations:

- Addition: `amount1 + amount2`
- Subtraction: `amount1 - amount2`
- Comparison operations: `<`, `<=`, `>`, `>=`, `==`, `!=`

Example:

```python
amount1 = AlgoAmount(algo=1)
amount2 = AlgoAmount(micro_algo=500_000)
total = amount1 + amount2  # Results in 1.5 Algo
```
