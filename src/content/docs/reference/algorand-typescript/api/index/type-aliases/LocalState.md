---
title: LocalState
type: doc
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / LocalState

> **LocalState**\<`ValueType`\> = (`account`) => [`LocalStateForAccount`](LocalStateForAccount)\<`ValueType`\>

Defined in: [state.ts:92](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L92)

Creates a new proxy for manipulating a local state field

## Type Parameters

### ValueType

`ValueType`

Gets the LocalState proxy for a specific account

## Parameters

### account

[`Account`](Account)

The account to read or write state for. This account must be opted into the contract

## Returns

[`LocalStateForAccount`](LocalStateForAccount)\<`ValueType`\>

## Param

Options for configuring this field
