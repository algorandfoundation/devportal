---
title: 'algokit_utils.models.state'
---

<div class="api-ref">

# algokit_utils.models.state

## Attributes

| [`TealTemplateParams`](#algokit_utils.models.state.TealTemplateParams) |     |
| ---------------------------------------------------------------------- | --- |
| [`BoxIdentifier`](#algokit_utils.models.state.BoxIdentifier)           |     |
| [`BoxReference`](#algokit_utils.models.state.BoxReference)             |     |

## Classes

| [`BoxName`](#algokit_utils.models.state.BoxName)           | The name of the box                            |
| ---------------------------------------------------------- | ---------------------------------------------- |
| [`BoxValue`](#algokit_utils.models.state.BoxValue)         | The value of the box                           |
| [`DataTypeFlag`](#algokit_utils.models.state.DataTypeFlag) | Enum where members are also (and must be) ints |

## Module Contents

### _class_ BoxName

The name of the box

#### name _: str_

The name of the box as a string.
If the name can’t be decoded from UTF-8, the string representation of the bytes is returned instead.

#### name*raw *: bytes\_

The name of the box as raw bytes

#### name*base64 *: str\_

The name of the box as a base64 encoded string

### _class_ BoxValue

The value of the box

#### name _: [BoxName](#algokit_utils.models.state.BoxName)_

The name of the box

#### value _: bytes_

The value of the box as raw bytes

### _class_ DataTypeFlag

Bases: `enum.IntEnum`

Enum where members are also (and must be) ints

#### BYTES _= 1_

#### UINT _= 2_

### _type_ TealTemplateParams _= Mapping[str, str | int | bytes] | dict[str, str | int | bytes]_

### _type_ BoxIdentifier _= str | bytes | AddressWithTransactionSigner_

### algokit_utils.models.state.BoxReference

</div>
