---
title: AppDeleteParams
sidebar:
  label: AppDeleteParams
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.transactions.transaction_composer.AppDeleteParams

Bases: `_CommonTxnParams`

Parameters for deleting an application.

#### app*id *: int\_

The ID of the application

#### args _: list[bytes] | None_ _= None_

Application arguments, defaults to None

#### account*references *: list[str] | None\_ _= None_

Account references, defaults to None

#### app*references *: list[int] | None\_ _= None_

App references, defaults to None

#### asset*references *: list[int] | None\_ _= None_

Asset references, defaults to None

#### box*references *: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/models/state/boxreference/#algokit_utils.models.state.BoxReference) | algokit*utils.models.state.BoxIdentifier] | None* _= None_

Box references, defaults to None

#### on*complete *: algosdk.transaction.OnComplete\_

The OnComplete action, defaults to DeleteApplicationOC
