---
title: AppCreateParams
---

#### _class_ algokit_utils.transactions.transaction_composer.AppCreateParams

Bases: `_CommonTxnParams`

Parameters for creating an application.

#### approval*program *: str | bytes\_

The program to execute for all OnCompletes other than ClearState

#### clear*state_program *: str | bytes\_

The program to execute for ClearState OnComplete

#### schema _: [AppCreateSchema](/reference/algokit-utils-py/api/transactions/transaction_composer/appcreateschema/#algokit_utils.transactions.transaction_composer.AppCreateSchema) | None_ _= None_

The state schema for the app, defaults to None

#### on*complete *: algosdk.transaction.OnComplete | None\_ _= None_

The OnComplete action, defaults to None

#### args _: list[bytes] | None_ _= None_

Application arguments, defaults to None

#### account*references *: list[str] | None\_ _= None_

Account references, defaults to None

#### app*references *: list[int] | None\_ _= None_

App references, defaults to None

#### asset*references *: list[int] | None\_ _= None_

Asset references, defaults to None

#### box*references *: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/docs/markdown/autoapi/algokit_utils/models/state/boxreference/#algokit_utils.models.state.BoxReference) | algokit*utils.models.state.BoxIdentifier] | None* _= None_

Box references, defaults to None

#### extra*program_pages *: int | None\_ _= None_

Number of extra pages required for the programs, defaults to None
