---
editUrl: false
next: false
prev: false
title: "readonly"
---

> **readonly**\<`TContract`, `TArgs`, `TReturn`\>(`target`, `ctx`): (`this`, ...`args`) => `TReturn`

Defined in: [arc4/index.ts:169](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L169)

Declares this abi method does not mutate chain state and can be called using a simulate call to the same effect.

Shorthand for `@abimethod({readonly: true})`

## Type Parameters

### TContract

`TContract` *extends* [`Contract`](/algorand-typescript/api/arc4/classes/contract/)

the type of the contract this method is a part of

### TArgs

`TArgs` *extends* `any`[]

### TReturn

`TReturn`

## Parameters

### target

(`this`, ...`args`) => `TReturn`

### ctx

`ClassMethodDecoratorContext`\<`TContract`\>

## Returns

> (`this`, ...`args`): `TReturn`

### Parameters

#### this

`TContract`

#### args

...`TArgs`

### Returns

`TReturn`
