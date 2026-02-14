---
title: models.transaction
sidebar:
  label: Index
  order: 0
---
## Attributes

| [`Arc2TransactionNote`](#algokit_utils.models.transaction.Arc2TransactionNote)   |    |
|----------------------------------------------------------------------------------|----|
| [`TransactionNoteData`](#algokit_utils.models.transaction.TransactionNoteData)   |    |
| [`TransactionNote`](#algokit_utils.models.transaction.TransactionNote)           |    |

## Classes

| [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)                 | Base ARC-0002 transaction note structure                                         |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`StringFormatArc2Note`](#algokit_utils.models.transaction.StringFormatArc2Note) | ARC-0002 note for string-based formats (m/b/u)                                   |
| [`JsonFormatArc2Note`](#algokit_utils.models.transaction.JsonFormatArc2Note)     | ARC-0002 note for JSON format                                                    |
| [`TransactionWrapper`](#algokit_utils.models.transaction.TransactionWrapper)     | Wrapper around algosdk.transaction.Transaction with optional property validators |
| [`SendParams`](#algokit_utils.models.transaction.SendParams)                     | Parameters for sending a transaction                                             |

## Module Contents

### *class* algokit_utils.models.transaction.BaseArc2Note

Bases: `TypedDict`

Base ARC-0002 transaction note structure

#### dapp_name *: str*

### *class* algokit_utils.models.transaction.StringFormatArc2Note

Bases: [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)

ARC-0002 note for string-based formats (m/b/u)

#### format *: Literal['m', 'b', 'u']*

#### data *: str*

### *class* algokit_utils.models.transaction.JsonFormatArc2Note

Bases: [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)

ARC-0002 note for JSON format

#### format *: Literal['j']*

#### data *: str | dict[str, Any] | list[Any] | int | None*

### algokit_utils.models.transaction.Arc2TransactionNote

### algokit_utils.models.transaction.TransactionNoteData

### algokit_utils.models.transaction.TransactionNote

### *class* algokit_utils.models.transaction.TransactionWrapper(transaction: algosdk.transaction.Transaction)

Wrapper around algosdk.transaction.Transaction with optional property validators

#### *property* raw *: algosdk.transaction.Transaction*

#### *property* payment *: algosdk.transaction.PaymentTxn*

#### *property* keyreg *: algosdk.transaction.KeyregTxn*

#### *property* asset_config *: algosdk.transaction.AssetConfigTxn*

#### *property* asset_transfer *: algosdk.transaction.AssetTransferTxn*

#### *property* asset_freeze *: algosdk.transaction.AssetFreezeTxn*

#### *property* application_call *: algosdk.transaction.ApplicationCallTxn*

#### *property* state_proof *: algosdk.transaction.StateProofTxn*

### *class* algokit_utils.models.transaction.SendParams

Bases: `TypedDict`

Parameters for sending a transaction

#### max_rounds_to_wait *: int | None*

#### suppress_log *: bool | None*

#### populate_app_call_resources *: bool | None*

#### cover_app_call_inner_transaction_fees *: bool | None*