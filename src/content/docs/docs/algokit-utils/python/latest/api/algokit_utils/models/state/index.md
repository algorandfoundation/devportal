---
title: "algokit_utils.models.state"
---

<div class="api-ref">

## Attributes

| [`TealTemplateParams`](#type-tealtemplateparams--mappingstr-str--int--bytes--dictstr-str--int--bytes)   |    |
|--------------------------------------------------------------------------|----|
| [`BoxIdentifier`](#type-boxidentifier--str--bytes--accounttransactionsigner)             |    |

## Classes

| [`BoxName`](#class-boxname)           | The name of the box                                                   |
|------------------------------------------------------------|-----------------------------------------------------------------------|
| [`BoxValue`](#class-boxvalue)         | The value of the box                                                  |
| [`DataTypeFlag`](#class-datatypeflag) | Enum where members are also (and must be) ints                        |
| [`BoxReference`](#class-boxreference) | Represents a box reference with a foreign app index and the box name. |

## Module Contents

### *class* BoxName

The name of the box

#### name *: str*

The name of the box as a string.
If the name can’t be decoded from UTF-8, the string representation of the bytes is returned instead.

#### name_raw *: bytes*

The name of the box as raw bytes

#### name_base64 *: str*

The name of the box as a base64 encoded string

### *class* BoxValue

The value of the box

#### name *: [BoxName](#class-boxname)*

The name of the box

#### value *: bytes*

The value of the box as raw bytes

### *class* DataTypeFlag

Bases: `enum.IntEnum`

Enum where members are also (and must be) ints

#### BYTES *= 1*

#### UINT *= 2*

### *type* TealTemplateParams *= Mapping[str, str | int | bytes] | dict[str, str | int | bytes]*

### *type* BoxIdentifier *= str | bytes | AccountTransactionSigner*

### *class* BoxReference
Bases: `algosdk.box_reference.BoxReference`

Represents a box reference with a foreign app index and the box name.

Args:
: app_index (int): index of the application in the foreign app array
  name (bytes): key for the box in bytes


</div>
