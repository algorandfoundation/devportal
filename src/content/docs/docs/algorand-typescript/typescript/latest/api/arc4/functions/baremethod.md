---
editUrl: false
next: false
prev: false
title: 'baremethod'
---

> **baremethod**\<`TContract`\>(`config?`): \<`TArgs`, `TReturn`\>(`target`, `ctx`) => (`this`, ...`args`) => `TReturn`

Defined in: [arc4/index.ts:197](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L197)

Declares the decorated method as a baremethod that can only be called with no transaction args

## Type Parameters

### TContract

`TContract` _extends_ [`Contract`](/algorand-typescript/api/arc4/classes/contract/)

the type of the contract this method is a part of

## Parameters

### config?

[`BareMethodConfig`](/algorand-typescript/api/arc4/type-aliases/baremethodconfig/)

The config for this bare method

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
