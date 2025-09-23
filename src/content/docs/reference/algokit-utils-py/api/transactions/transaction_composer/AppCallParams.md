---
title: algokit_utils.transactions.transaction_composer.AppCallParams
---

#### _class_ algokit_utils.transactions.transaction_composer.AppCallParams

Bases: `_CommonTxnParams`

Parameters for calling an application.

#### on*complete *: algosdk.transaction.OnComplete\_

The OnComplete action, defaults to None

#### app*id *: int | None\_ _= None_

The ID of the application, defaults to None

#### approval*program *: str | bytes | None\_ _= None_

The program to execute for all OnCompletes other than ClearState, defaults to None

#### clear*state_program *: str | bytes | None\_ _= None_

The program to execute for ClearState OnComplete, defaults to None

#### schema _: dict[str, int] | None_ _= None_

The state schema for the app, defaults to None

#### args _: list[bytes] | None_ _= None_

Application arguments, defaults to None

#### account*references *: list[str] | None\_ _= None_

Account references, defaults to None

#### app*references *: list[int] | None\_ _= None_

App references, defaults to None

#### asset*references *: list[int] | None\_ _= None_

Asset references, defaults to None

#### extra*pages *: int | None\_ _= None_

Number of extra pages required for the programs, defaults to None

#### box*references *: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/models/state/boxreference/#algokit_utils.models.state.BoxReference) | algokit*utils.models.state.BoxIdentifier] | None* _= None_

Box references, defaults to None
