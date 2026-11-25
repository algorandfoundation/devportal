---
title: "algokit_utils.errors.logic_error"
---

<div class="api-ref">

## Exceptions

| [`LogicError`](#exception-logicerror-logic_error_str-str-program-str-source_map-algosourcemap--none-transaction_id-str-message-str-pc-int-logic_error-exception--none--none-traces-listsimulationtrace--none--none-get_line_for_pc-callableint-int--none--none--none)   | Common base class for all non-exit exceptions.   |
|----------------------------------------------------------------|--------------------------------------------------|

## Classes

| [`LogicErrorData`](#class-logicerrordata)   | dict() -> new empty dictionary   |
|------------------------------------------------------------------------|----------------------------------|

## Functions

| [`parse_logic_error`](#parse_logic_errorerror_str-str--logicerrordata--none)(→ LogicErrorData | None)   |    |
|-------------------------------------------------------------------------------------------------------|----|

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

### parse_logic_error(error_str: str) → [LogicErrorData](#class-logicerrordata) | None

### *exception* LogicError(, logic_error_str: str, program: str, source_map: AlgoSourceMap | None, transaction_id: str, message: str, pc: int, logic_error: Exception | None = None, traces: list[[SimulationTrace](/docs/algokit-utils/python/latest/api/algokit_utils/models/simulate/#class-simulationtrace)] | None = None, get_line_for_pc: Callable[[int], int | None] | None = None)

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


</div>
