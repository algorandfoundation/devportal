---
editUrl: false
next: false
prev: false
title: "LocalMap"
---

> **LocalMap**\<`TKey`, `TValue`\> = [`LocalState`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/localstate/)\<`TValue`\>

Defined in: [state.ts:181](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L181)

A LocalMap proxy

## Type Parameters

### TKey

`TKey`

The type of the value used to key each local state value.

### TValue

`TValue`

The type of the data stored in the local state.

## Call Signature

> **LocalMap**(`key`): [`LocalState`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/localstate/)\<`TValue`\>

Get a LocalState proxy for a single item in the LocalMap

### Parameters

#### key

`TKey`

The key of the local state value to retrieve a proxy for

### Returns

[`LocalState`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/localstate/)\<`TValue`\>

## Call Signature

> **LocalMap**(`key`, `account`): [`LocalStateForAccount`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/localstateforaccount/)\<`TValue`\>

Get a LocalState proxy for a specific account of an entry in the LocalMap

### Parameters

#### key

`TKey`

The key of the local state value to retrieve a proxy for

#### account

[`Account`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/account/)

The account to read or write state for. This account must be opted into the contract

### Returns

[`LocalStateForAccount`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/localstateforaccount/)\<`TValue`\>

## Properties

### keyPrefix

> `readonly` **keyPrefix**: [`bytes`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/bytes/)

Defined in: [state.ts:146](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L146)

Get the bytes used to prefix each key
