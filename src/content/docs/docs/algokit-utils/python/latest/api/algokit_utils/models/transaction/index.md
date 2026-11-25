---
title: "algokit_utils.models.transaction"
---

<div class="api-ref">

## Attributes

| [`Arc2TransactionNote`](#arc2transactionnote)   |    |
|----------------------------------------------------------------------------------|----|
| [`TransactionNoteData`](#transactionnotedata)   |    |
| [`TransactionNote`](#transactionnote)           |    |

## Classes

| [`BaseArc2Note`](#class-basearc2note)                 | Base ARC-0002 transaction note structure                                         |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`StringFormatArc2Note`](#class-stringformatarc2note) | ARC-0002 note for string-based formats (m/b/u)                                   |
| [`JsonFormatArc2Note`](#class-jsonformatarc2note)     | ARC-0002 note for JSON format                                                    |
| [`TransactionWrapper`](#class-transactionwrapper)     | Wrapper around algosdk.transaction.Transaction with optional property validators |
| [`SendParams`](#class-sendparams)                     | Parameters for sending a transaction                                             |

## Module Contents

### *class* BaseArc2Note

Bases: `TypedDict`

Base ARC-0002 transaction note structure

#### dapp_name *: str*

### *class* StringFormatArc2Note

Bases: [`BaseArc2Note`](#class-basearc2note)

ARC-0002 note for string-based formats (m/b/u)

#### format *: Literal['m', 'b', 'u']*

#### data *: str*

### *class* JsonFormatArc2Note

Bases: [`BaseArc2Note`](#class-basearc2note)

ARC-0002 note for JSON format

#### format *: Literal['j']*

#### data *: str | dict[str, Any] | list[Any] | int | None*

### Arc2TransactionNote

### TransactionNoteData

### TransactionNote

### *class* TransactionWrapper
Wrapper around algosdk.transaction.Transaction with optional property validators

#### *property* raw *: algosdk.transaction.Transaction*

#### *property* payment *: algosdk.transaction.PaymentTxn*

#### *property* keyreg *: algosdk.transaction.KeyregTxn*

#### *property* asset_config *: algosdk.transaction.AssetConfigTxn*

#### *property* asset_transfer *: algosdk.transaction.AssetTransferTxn*

#### *property* asset_freeze *: algosdk.transaction.AssetFreezeTxn*

#### *property* application_call *: algosdk.transaction.ApplicationCallTxn*

#### *property* state_proof *: algosdk.transaction.StateProofTxn*

### *class* SendParams

Bases: `TypedDict`

Parameters for sending a transaction

#### max_rounds_to_wait *: int | None*

#### suppress_log *: bool | None*

#### populate_app_call_resources *: bool | None*

#### cover_app_call_inner_transaction_fees *: bool | None*


</div>
