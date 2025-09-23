---
title: algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams
---

#### _class_ algokit_utils.transactions.transaction_composer.AppCreateMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that creates an application.

#### approval_program _: str | bytes_

The program to execute for all OnCompletes other than ClearState

#### clear_state_program _: str | bytes_

The program to execute for ClearState OnComplete

#### schema _: [AppCreateSchema](#algokit_utils.transactions.transaction_composer.AppCreateSchema) | None_ _= None_

The state schema for the app, defaults to None

#### on_complete _: algosdk.transaction.OnComplete | None_ _= None_

The OnComplete action (cannot be ClearState), defaults to None

#### extra_program_pages _: int | None_ _= None_

Number of extra pages required for the programs, defaults to None
