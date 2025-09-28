---
title: AppCreateParams
sidebar:
  label: AppCreateParams
tableOfContents:
  maxHeadingLevel: 4
  minHeadingLevel: 4
---

#### _class_ algokit_utils.transactions.transaction_composer.AppCreateParams

Bases: `_CommonTxnParams`

Parameters for creating an application.

#### approval_program _: str | bytes_

The program to execute for all OnCompletes other than ClearState

#### clear_state_program _: str | bytes_

The program to execute for ClearState OnComplete

#### schema _: [AppCreateSchema](AppCreateSchema.md#algokit_utils.transactions.transaction_composer.AppCreateSchema) | None_ _= None_

The state schema for the app, defaults to None

#### on_complete _: algosdk.transaction.OnComplete | None_ _= None_

The OnComplete action, defaults to None

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

#### extra_program_pages _: int | None_ _= None_

Number of extra pages required for the programs, defaults to None
