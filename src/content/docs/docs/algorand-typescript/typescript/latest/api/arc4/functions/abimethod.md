---
editUrl: false
next: false
prev: false
title: 'abimethod'
---

> **abimethod**\<`TContract`\>(`config?`): \<`TArgs`, `TReturn`\>(`target`, `ctx`) => (`this`, ...`args`) => `TReturn`

Defined in: [arc4/index.ts:155](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L155)

Declares the decorated method as an abimethod that is called when the first transaction arg matches the method selector

## Type Parameters

### TContract

`TContract` _extends_ [`Contract`](/algorand-typescript/api/arc4/classes/contract/)

the type of the contract this method is a part of

## Parameters

### config?

[`AbiMethodConfig`](/algorand-typescript/api/arc4/type-aliases/abimethodconfig/)\<`TContract`\>

The config for this abi method

## Returns

> \<`TArgs`, `TReturn`\>(`target`, `ctx`): (`this`, ...`args`) => `TReturn`

### Type Parameters

#### TArgs

`TArgs` _extends_ `any`[]

#### TReturn

`TReturn`

### Parameters

#### target

(`this`, ...`args`) => `TReturn`

#### ctx

`ClassMethodDecoratorContext`\<`TContract`\>

### Returns

> (`this`, ...`args`): `TReturn`

#### Parameters

##### this

`TContract`

##### args

...`TArgs`

#### Returns

`TReturn`
