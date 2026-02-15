---
title: LocalState
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/docs/algorand-typescript/typescript/latest/api/readme/)

---

[Algorand TypeScript](/docs/algorand-typescript/typescript/latest/api/modules/) / [index](/docs/algorand-typescript/typescript/latest/api/index/readme/) / LocalState

> **LocalState**\<`ValueType`\> = (`account`) => [`LocalStateForAccount`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/localstateforaccount/)\<`ValueType`\>

Defined in: [state.ts:92](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L92)

Creates a new proxy for manipulating a local state field

## Type Parameters

### ValueType

`ValueType`

Gets the LocalState proxy for a specific account

## Parameters

### account

[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

The account to read or write state for. This account must be opted into the contract

## Returns

[`LocalStateForAccount`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/localstateforaccount/)\<`ValueType`\>

## Param

Options for configuring this field
