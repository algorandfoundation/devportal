---
title: AppCallParams
---
#### *class* algokit_utils.transactions.transaction_composer.AppCallParams

Bases: `_CommonTxnParams`

Parameters for calling an application.

#### on_complete *: algosdk.transaction.OnComplete*

The OnComplete action, defaults to None

#### app_id *: int | None* *= None*

The ID of the application, defaults to None

#### approval_program *: str | bytes | None* *= None*

The program to execute for all OnCompletes other than ClearState, defaults to None

#### clear_state_program *: str | bytes | None* *= None*

The program to execute for ClearState OnComplete, defaults to None

#### schema *: dict[str, int] | None* *= None*

The state schema for the app, defaults to None

#### args *: list[bytes] | None* *= None*

Application arguments, defaults to None

#### account_references *: list[str] | None* *= None*

Account references, defaults to None

#### app_references *: list[int] | None* *= None*

App references, defaults to None

#### asset_references *: list[int] | None* *= None*

Asset references, defaults to None

#### extra_pages *: int | None* *= None*

Number of extra pages required for the programs, defaults to None

#### box_references *: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/state/boxreference/#algokit_utils.models.state.BoxReference) | algokit_utils.models.state.BoxIdentifier] | None* *= None*

Box references, defaults to None