---
editUrl: false
next: false
prev: false
title: "DefaultArgument"
---

> **DefaultArgument** = \{ `data`: `ABIMethodParams`; `source`: `"abi-method"`; \} \| \{ `data`: `string`; `source`: `"global-state"`; \} \| \{ `data`: `string`; `source`: `"local-state"`; \} \| \{ `data`: `string` \| `number`; `source`: `"constant"`; \}

Defined in: [src/types/app-spec.ts:228](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/src/types/app-spec.ts#L228)

Defines a strategy for obtaining a default value for a given ABI arg.

## Union Members

### Type Literal

\{ `data`: `ABIMethodParams`; `source`: `"abi-method"`; \}

#### data

> **data**: `ABIMethodParams`

#### source

> **source**: `"abi-method"`

The default value should be fetched by invoking an ABI method

***

### Type Literal

\{ `data`: `string`; `source`: `"global-state"`; \}

#### data

> **data**: `string`

The key of the state variable

#### source

> **source**: `"global-state"`

The default value should be fetched from global state

***

### Type Literal

\{ `data`: `string`; `source`: `"local-state"`; \}

#### data

> **data**: `string`

The key of the state variable

#### source

> **source**: `"local-state"`

The default value should be fetched from the local state of the sender user

***

### Type Literal

\{ `data`: `string` \| `number`; `source`: `"constant"`; \}

#### data

> **data**: `string` \| `number`

The static default value to use.

#### source

> **source**: `"constant"`

The default value is a constant.
