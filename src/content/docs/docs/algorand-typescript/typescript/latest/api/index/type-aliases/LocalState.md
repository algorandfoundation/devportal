---
editUrl: false
next: false
prev: false
title: "LocalState"
---

> **LocalState**\<`ValueType`\> = (`account`) => [`LocalStateForAccount`](/algorand-typescript/api/index/type-aliases/localstateforaccount/)\<`ValueType`\>

Defined in: [state.ts:92](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L92)

A proxy for manipulating a local state field for any account

## Type Parameters

### ValueType

`ValueType`

Gets the LocalState proxy for a specific account

## Parameters

### account

[`Account`](/algorand-typescript/api/index/type-aliases/account/)

The account to read or write state for. This account must be opted into the contract

## Returns

[`LocalStateForAccount`](/algorand-typescript/api/index/type-aliases/localstateforaccount/)\<`ValueType`\>
