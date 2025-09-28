---
title: AppUpdateMethodCallParams
sidebar:
  label: AppUpdateMethodCallParams
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.transactions.transaction_composer.AppUpdateMethodCallParams

Bases: `_BaseAppMethodCall`

Parameters for an ABI method call that updates an application.

#### app_id _: int_

The ID of the application

#### approval_program _: str | bytes_

The program to execute for all OnCompletes other than ClearState

#### clear_state_program _: str | bytes_

The program to execute for ClearState OnComplete

#### on_complete _: algosdk.transaction.OnComplete_

The OnComplete action
