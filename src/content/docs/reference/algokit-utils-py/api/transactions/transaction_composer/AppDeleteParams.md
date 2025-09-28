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

#### app_id _: int_

The ID of the application

#### args _: list[bytes] | None_ _= None_

Application arguments, defaults to None

#### account_references _: list[str] | None_ _= None_

Account references, defaults to None

#### app_references _: list[int] | None_ _= None_

App references, defaults to None

#### asset_references _: list[int] | None_ _= None_

Asset references, defaults to None

#### box_references _: list[[algokit_utils.models.state.BoxReference](/reference/algokit-utils-py/api/models/state/boxreference/#algokit_utils.models.state.BoxReference) | algokit_utils.models.state.BoxIdentifier] | None_ _= None_

Box references, defaults to None

#### on_complete _: algosdk.transaction.OnComplete_

The OnComplete action, defaults to DeleteApplicationOC
