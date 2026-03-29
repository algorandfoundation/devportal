---
title: 'algokit_utils.models.transaction'
---

<div class="api-ref">

# algokit_utils.models.transaction

## Attributes

| [`Arc2TransactionNote`](#algokit_utils.models.transaction.Arc2TransactionNote) |     |
| ------------------------------------------------------------------------------ | --- |
| [`TransactionNoteData`](#algokit_utils.models.transaction.TransactionNoteData) |     |
| [`TransactionNote`](#algokit_utils.models.transaction.TransactionNote)         |     |

## Classes

| [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)                 | Base ARC-0002 transaction note structure       |
| -------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`StringFormatArc2Note`](#algokit_utils.models.transaction.StringFormatArc2Note) | ARC-0002 note for string-based formats (m/b/u) |
| [`JsonFormatArc2Note`](#algokit_utils.models.transaction.JsonFormatArc2Note)     | ARC-0002 note for JSON format                  |
| [`SendParams`](#algokit_utils.models.transaction.SendParams)                     | Parameters for sending a transaction           |

## Module Contents

### _class_ BaseArc2Note

Bases: `TypedDict`

Base ARC-0002 transaction note structure

#### dapp_name _: str_

### _class_ StringFormatArc2Note

Bases: [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)

ARC-0002 note for string-based formats (m/b/u)

#### format _: Literal['m', 'b', 'u']_

#### data _: str_

### _class_ JsonFormatArc2Note

Bases: [`BaseArc2Note`](#algokit_utils.models.transaction.BaseArc2Note)

ARC-0002 note for JSON format

#### format _: Literal['j']_

#### data _: str | dict[str, Any] | list[Any] | int | None_

### Arc2TransactionNote

### TransactionNoteData

### TransactionNote

### _class_ SendParams

Bases: `TypedDict`

Parameters for sending a transaction

#### max_rounds_to_wait _: int_

#### suppress_log _: bool_

#### populate_app_call_resources _: bool_

#### cover_app_call_inner_transaction_fees _: bool_

</div>
