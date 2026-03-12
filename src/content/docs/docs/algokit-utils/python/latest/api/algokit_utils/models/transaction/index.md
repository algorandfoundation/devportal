---
title: "algokit_utils.models.transaction"
---

<div class="api-ref">

# algokit_utils.models.transaction

## Attributes

| [`Arc2TransactionNote`](#algokit_utils.models.transaction.Arc2TransactionNote)   |    |
|----------------------------------------------------------------------------------|----|
| [`TransactionNoteData`](#algokit_utils.models.transaction.TransactionNoteData)   |    |
| [`TransactionNote`](#algokit_utils.models.transaction.TransactionNote)           |    |

## Classes

| [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)                 | Base ARC-0002 transaction note structure       |
|----------------------------------------------------------------------------------|------------------------------------------------|
| [`StringFormatArc2Note`](#algokit_utils.models.transaction.StringFormatArc2Note) | ARC-0002 note for string-based formats (m/b/u) |
| [`JsonFormatArc2Note`](#algokit_utils.models.transaction.JsonFormatArc2Note)     | ARC-0002 note for JSON format                  |
| [`SendParams`](#algokit_utils.models.transaction.SendParams)                     | Parameters for sending a transaction           |

## Module Contents

### *class* BaseArc2Note

Bases: `TypedDict`

Base ARC-0002 transaction note structure

#### dapp_name *: str*

### *class* StringFormatArc2Note

Bases: [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)

ARC-0002 note for string-based formats (m/b/u)

#### format *: Literal['m', 'b', 'u']*

#### data *: str*

### *class* JsonFormatArc2Note

Bases: [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)

ARC-0002 note for JSON format

#### format *: Literal['j']*

#### data *: str | dict[str, Any] | list[Any] | int | None*

### Arc2TransactionNote

### TransactionNoteData

### TransactionNote

### *class* SendParams

Bases: `TypedDict`

Parameters for sending a transaction

#### max_rounds_to_wait *: int*

#### suppress_log *: bool*

#### populate_app_call_resources *: bool*

#### cover_app_call_inner_transaction_fees *: bool*


</div>
