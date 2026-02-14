---
title: models.state
sidebar:
  label: Index
  order: 0
---
## Attributes

| [`TealTemplateParams`](#algokit_utils.models.state.TealTemplateParams)   |    |
|--------------------------------------------------------------------------|----|
| [`BoxIdentifier`](#algokit_utils.models.state.BoxIdentifier)             |    |

## Classes

| [`BoxName`](#algokit_utils.models.state.BoxName)           | The name of the box                                                   |
|------------------------------------------------------------|-----------------------------------------------------------------------|
| [`BoxValue`](#algokit_utils.models.state.BoxValue)         | The value of the box                                                  |
| [`DataTypeFlag`](#algokit_utils.models.state.DataTypeFlag) | Enum where members are also (and must be) ints                        |
| [`BoxReference`](#algokit_utils.models.state.BoxReference) | Represents a box reference with a foreign app index and the box name. |

## Module Contents

### *class* algokit_utils.models.state.BoxName

The name of the box

#### name *: str*

The name of the box as a string.
If the name can’t be decoded from UTF-8, the string representation of the bytes is returned instead.

#### name_raw *: bytes*

The name of the box as raw bytes

#### name_base64 *: str*

The name of the box as a base64 encoded string

### *class* algokit_utils.models.state.BoxValue

The value of the box

#### name *: [BoxName](#algokit_utils.models.state.BoxName)*

The name of the box

#### value *: bytes*

The value of the box as raw bytes

### *class* algokit_utils.models.state.DataTypeFlag

Bases: `enum.IntEnum`

Enum where members are also (and must be) ints

#### BYTES *= 1*

#### UINT *= 2*

### *type* algokit_utils.models.state.TealTemplateParams *= Mapping[str, str | int | bytes] | dict[str, str | int | bytes]*

### *type* algokit_utils.models.state.BoxIdentifier *= str | bytes | AccountTransactionSigner*

### *class* algokit_utils.models.state.BoxReference(app_id: int, name: bytes | str)

Bases: `algosdk.box_reference.BoxReference`

Represents a box reference with a foreign app index and the box name.

Args:
: app_index (int): index of the application in the foreign app array
  name (bytes): key for the box in bytes