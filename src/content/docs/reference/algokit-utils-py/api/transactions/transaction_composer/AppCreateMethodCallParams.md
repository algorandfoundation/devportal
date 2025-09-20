---
title: AppCreateMethodCallParams
---

#### _class_ algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that creates an application.

#### approval*program *: str | bytes\_

The program to execute for all OnCompletes other than ClearState

#### clear*state_program *: str | bytes\_

The program to execute for ClearState OnComplete

#### schema _: [AppCreateSchema](/reference/algokit-utils-py/api/transactions/transaction_composer/appcreateschema/#algokit_utils.transactions.transaction_composer.AppCreateSchema) | None_ _= None_

The state schema for the app, defaults to None

#### on*complete *: algosdk.transaction.OnComplete | None\_ _= None_

The OnComplete action (cannot be ClearState), defaults to None

#### extra*program_pages *: int | None\_ _= None_

Number of extra pages required for the programs, defaults to None
