---
title: AppUpdateParams
---
#### *class* algokit_utils.transactions.transaction_composer.AppUpdateParams

Bases: `_CommonTxnParams`

Parameters for updating an application.

#### app_id *: int*

The ID of the application

#### approval_program *: str | bytes*

The program to execute for all OnCompletes other than ClearState

#### clear_state_program *: str | bytes*

The program to execute for ClearState OnComplete

#### args *: list[bytes] | None* *= None*

Application arguments, defaults to None

#### account_references *: list[str] | None* *= None*

Account references, defaults to None

#### app_references *: list[int] | None* *= None*

App references, defaults to None

#### asset_references *: list[int] | None* *= None*

Asset references, defaults to None

#### box_references *: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/state/boxreference/#algokit_utils.models.state.BoxReference) | algokit_utils.models.state.BoxIdentifier] | None* *= None*

Box references, defaults to None

#### on_complete *: algosdk.transaction.OnComplete | None* *= None*

The OnComplete action, defaults to None