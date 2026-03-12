---
title: "algokit_utils.errors.logic_error"
---

<div class="api-ref">

# algokit_utils.errors.logic_error

## Exceptions

| [`LogicError`](#algokit_utils.errors.logic_error.LogicError)   | Common base class for all non-exit exceptions.   |
|----------------------------------------------------------------|--------------------------------------------------|

## Classes

| [`LogicErrorData`](#algokit_utils.errors.logic_error.LogicErrorData)   | dict() -> new empty dictionary   |
|------------------------------------------------------------------------|----------------------------------|

## Functions

| [`parse_logic_error`](#algokit_utils.errors.logic_error.parse_logic_error)(→ LogicErrorData | None)                       |                                                                               |
|---------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`create_simulate_traces_for_logic_error`](#algokit_utils.errors.logic_error.create_simulate_traces_for_logic_error)(...) | Extract simulation traces from a simulate response for logic error debugging. |

## Module Contents

### *class* LogicErrorData

Bases: `TypedDict`

dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object’s

> (key, value) pairs

dict(iterable) -> new dictionary initialized as if via:
: d = {}
  for k, v in iterable:
  <br/>
  > d[k] = v

dict(

```
**
```

kwargs) -> new dictionary initialized with the name=value pairs
: in the keyword argument list.  For example:  dict(one=1, two=2)

#### transaction_id *: str*

#### message *: str*

#### pc *: int*

### parse_logic_error(error_str: str) → [LogicErrorData](#algokit_utils.errors.logic_error.LogicErrorData) | None

### *exception* LogicError(\*, logic_error_str: str, program: str, source_map: ProgramSourceMap | None, transaction_id: str, message: str, pc: int, logic_error: Exception | None = None, traces: list[SimulateTransactionResult] | None = None, get_line_for_pc: Callable[[int], int | None] | None = None)

Bases: `Exception`

Common base class for all non-exit exceptions.

#### logic_error *= None*

#### logic_error_str

#### source_map

#### lines

#### transaction_id

#### message

#### pc

#### traces *= None*

#### line_no

#### trace(lines: int = 5) → str

### create_simulate_traces_for_logic_error(simulate: object) → list[SimulateTransactionResult]

Extract simulation traces from a simulate response for logic error debugging.

Args:
: simulate: An object with simulate_response and failed_at attributes.

Returns:
: A list of SimulateTransactionResult objects extracted from the simulation response.


</div>
