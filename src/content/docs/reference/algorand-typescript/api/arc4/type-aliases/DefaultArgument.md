---
title: DefaultArgument
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [arc4](docs/_md/arc4/README) / DefaultArgument

> **DefaultArgument**\<`TContract`\> = \{ `constant`: `string` \| `boolean` \| `number` \| `bigint`; \} \| \{ `from`: keyof `TContract`; \}

Defined in: [arc4/index.ts:82](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L82)

Type alias for a default argument schema

## Type Parameters

### TContract

`TContract` _extends_ [`Contract`](/reference/algorand-typescript/api/arc4/classes/contract/)

The type of the contract containing the method this default argument is for

## Type declaration

\{ `constant`: `string` \| `boolean` \| `number` \| `bigint`; \}

### constant

> **constant**: `string` \| `boolean` \| `number` \| `bigint`

A compile time constant value to be used as a default

\{ `from`: keyof `TContract`; \}

### from

> **from**: keyof `TContract`

Retrieve the default value from a member of this contract. The member can be

LocalState: The value is retrieved from the calling user's local state before invoking this method
GlobalState: The value is retrieved from the specified global state key before invoking this method
Method: Any readonly abimethod with no arguments can be used as a source
