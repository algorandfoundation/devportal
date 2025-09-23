---
title: algokit_utils.errors.logic_error.LogicError
---
#### *exception* algokit_utils.errors.logic_error.LogicError(\*, logic_error_str: str, program: str, source_map: AlgoSourceMap | None, transaction_id: str, message: str, pc: int, logic_error: Exception | None = None, traces: list[[algokit_utils.models.simulate.SimulationTrace](/reference/algokit-utils-py/api/models/simulate/simulationtrace/#algokit_utils.models.simulate.SimulationTrace)] | None = None, get_line_for_pc: collections.abc.Callable[[int], int | None] | None = None)

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