---
title: models.state
sidebar:
  label: Index
  order: 0
---

## Attributes

| [`TealTemplateParams`](#algokit_utils.models.state.TealTemplateParams) |     |
| ---------------------------------------------------------------------- | --- |
| [`BoxIdentifier`](#algokit_utils.models.state.BoxIdentifier)           |     |

## Classes

| [`BoxName`](#algokit_utils.models.state.BoxName)           | The name of the box                                                   |
| ---------------------------------------------------------- | --------------------------------------------------------------------- |
| [`BoxValue`](#algokit_utils.models.state.BoxValue)         | The value of the box                                                  |
| [`DataTypeFlag`](#algokit_utils.models.state.DataTypeFlag) | Enum where members are also (and must be) ints                        |
| [`BoxReference`](#algokit_utils.models.state.BoxReference) | Represents a box reference with a foreign app index and the box name. |

## Module Contents

### _class_ algokit_utils.models.state.BoxName

The name of the box

#### name _: str_

The name of the box as a string.
If the name can’t be decoded from UTF-8, the string representation of the bytes is returned instead.

#### name_raw _: bytes_

The name of the box as raw bytes

#### name_base64 _: str_

The name of the box as a base64 encoded string

### _class_ algokit_utils.models.state.BoxValue

The value of the box

#### name _: [BoxName](#algokit_utils.models.state.BoxName)_

The name of the box

#### value _: bytes_

The value of the box as raw bytes

### _class_ algokit_utils.models.state.DataTypeFlag

Bases: `enum.IntEnum`

Enum where members are also (and must be) ints

#### BYTES _= 1_

#### UINT _= 2_

### _type_ algokit_utils.models.state.TealTemplateParams _= Mapping[str, str | int | bytes] | dict[str, str | int | bytes]_

### _type_ algokit_utils.models.state.BoxIdentifier _= str | bytes | AccountTransactionSigner_

### _class_ algokit_utils.models.state.BoxReference(app_id: int, name: bytes | str)

Bases: `algosdk.box_reference.BoxReference`

Represents a box reference with a foreign app index and the box name.

Args:
: app_index (int): index of the application in the foreign app array
name (bytes): key for the box in bytes
