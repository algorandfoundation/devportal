---
title: 'LocalState'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / LocalState

# Type Alias: LocalState()\<ValueType\>

> **LocalState**\<`ValueType`\>: (`account`) => [`LocalStateForAccount`](/reference/algorand-typescript/localstateforaccount)\<`ValueType`\>

Defined in: [packages/algo-ts/src/state.ts:92](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L92)

A proxy for manipulating a local state field for any account

## Type Parameters

• **ValueType**

Gets the LocalState proxy for a specific account

## Parameters

### account

[`Account`](/reference/algorand-typescript/account)

The account to read or write state for. This account must be opted into the contract

## Returns

[`LocalStateForAccount`](/reference/algorand-typescript/localstateforaccount)\<`ValueType`\>
