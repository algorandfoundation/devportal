---
title: "algokit_utils.models.state"
---

<div class="api-ref">

# algokit_utils.models.state

## Attributes

| [`TealTemplateParams`](#algokit_utils.models.state.TealTemplateParams)   |    |
|--------------------------------------------------------------------------|----|
| [`BoxIdentifier`](#algokit_utils.models.state.BoxIdentifier)             |    |
| [`BoxReference`](#algokit_utils.models.state.BoxReference)               |    |

## Classes

| [`BoxName`](#algokit_utils.models.state.BoxName)           | The name of the box                            |
|------------------------------------------------------------|------------------------------------------------|
| [`BoxValue`](#algokit_utils.models.state.BoxValue)         | The value of the box                           |
| [`DataTypeFlag`](#algokit_utils.models.state.DataTypeFlag) | Enum where members are also (and must be) ints |

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

#### name *: [BoxName](#algokit_utils.models.state.BoxName)*

The name of the box

#### value *: bytes*

The value of the box as raw bytes

### *class* DataTypeFlag

Bases: `enum.IntEnum`

Enum where members are also (and must be) ints

#### BYTES *= 1*

#### UINT *= 2*

### *type* TealTemplateParams *= Mapping[str, str | int | bytes] | dict[str, str | int | bytes]*

### *type* BoxIdentifier *= str | bytes | AddressWithTransactionSigner*

### algokit_utils.models.state.BoxReference

</div>
