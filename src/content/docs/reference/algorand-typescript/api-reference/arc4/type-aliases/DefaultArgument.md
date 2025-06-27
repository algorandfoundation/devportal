---
title: 'DefaultArguments'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / DefaultArgument

# Type Alias: DefaultArgument\<TContract\>

> **DefaultArgument**\<`TContract`\>: \{ `constant`: `string` \| `boolean` \| `number` \| `bigint`; \} \| \{ `from`: keyof `TContract`; \}

Defined in: [packages/algo-ts/src/arc4/index.ts:68](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L68)

Type alias for a default argument schema

## Type Parameters

• **TContract** _extends_ [`Contract`](/reference/classes/contract)

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
