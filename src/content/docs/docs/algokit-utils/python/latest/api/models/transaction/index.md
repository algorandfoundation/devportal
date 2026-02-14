---
title: models.transaction
sidebar:
  label: Index
  order: 0
---

## Attributes

| [`Arc2TransactionNote`](#algokit_utils.models.transaction.Arc2TransactionNote) |     |
| ------------------------------------------------------------------------------ | --- |
| [`TransactionNoteData`](#algokit_utils.models.transaction.TransactionNoteData) |     |
| [`TransactionNote`](#algokit_utils.models.transaction.TransactionNote)         |     |

## Classes

| [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)                 | Base ARC-0002 transaction note structure                                         |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`StringFormatArc2Note`](#algokit_utils.models.transaction.StringFormatArc2Note) | ARC-0002 note for string-based formats (m/b/u)                                   |
| [`JsonFormatArc2Note`](#algokit_utils.models.transaction.JsonFormatArc2Note)     | ARC-0002 note for JSON format                                                    |
| [`TransactionWrapper`](#algokit_utils.models.transaction.TransactionWrapper)     | Wrapper around algosdk.transaction.Transaction with optional property validators |
| [`SendParams`](#algokit_utils.models.transaction.SendParams)                     | Parameters for sending a transaction                                             |

## Module Contents

### _class_ algokit_utils.models.transaction.BaseArc2Note

Bases: `TypedDict`

Base ARC-0002 transaction note structure

#### dapp_name _: str_

### _class_ algokit_utils.models.transaction.StringFormatArc2Note

Bases: [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)

ARC-0002 note for string-based formats (m/b/u)

#### format _: Literal['m', 'b', 'u']_

#### data _: str_

### _class_ algokit_utils.models.transaction.JsonFormatArc2Note

Bases: [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)

ARC-0002 note for JSON format

#### format _: Literal['j']_

#### data _: str | dict[str, Any] | list[Any] | int | None_

### algokit_utils.models.transaction.Arc2TransactionNote

### algokit_utils.models.transaction.TransactionNoteData

### algokit_utils.models.transaction.TransactionNote

### _class_ algokit_utils.models.transaction.TransactionWrapper(transaction: algosdk.transaction.Transaction)

Wrapper around algosdk.transaction.Transaction with optional property validators

#### _property_ raw _: algosdk.transaction.Transaction_

#### _property_ payment _: algosdk.transaction.PaymentTxn_

#### _property_ keyreg _: algosdk.transaction.KeyregTxn_

#### _property_ asset_config _: algosdk.transaction.AssetConfigTxn_

#### _property_ asset_transfer _: algosdk.transaction.AssetTransferTxn_

#### _property_ asset_freeze _: algosdk.transaction.AssetFreezeTxn_

#### _property_ application_call _: algosdk.transaction.ApplicationCallTxn_

#### _property_ state_proof _: algosdk.transaction.StateProofTxn_

### _class_ algokit_utils.models.transaction.SendParams

Bases: `TypedDict`

Parameters for sending a transaction

#### max_rounds_to_wait _: int | None_

#### suppress_log _: bool | None_

#### populate_app_call_resources _: bool | None_

#### cover_app_call_inner_transaction_fees _: bool | None_
