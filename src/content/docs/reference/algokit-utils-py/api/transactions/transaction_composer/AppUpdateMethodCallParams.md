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

#### app*id *: int\_

The ID of the application

#### approval*program *: str | bytes\_

The program to execute for all OnCompletes other than ClearState

#### clear*state_program *: str | bytes\_

The program to execute for ClearState OnComplete

#### on*complete *: algosdk.transaction.OnComplete\_

The OnComplete action
