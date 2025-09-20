---
title: AppUpdateMethodCallParams
---
#### *class* algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that updates an application.

#### app_id *: int*

The ID of the application

#### approval_program *: str | bytes*

The program to execute for all OnCompletes other than ClearState

#### clear_state_program *: str | bytes*

The program to execute for ClearState OnComplete

#### on_complete *: algosdk.transaction.OnComplete*

The OnComplete action