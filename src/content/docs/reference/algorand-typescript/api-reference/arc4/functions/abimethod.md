---
title: 'abimethod'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / abimethod

# Function: abimethod()

> **abimethod**\<`TContract`\>(`config`?): \<`TArgs`, `TReturn`\>(`target`, `ctx`) => (`this`, ...`args`) => `TReturn`

Defined in: [packages/algo-ts/src/arc4/index.ts:123](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L123)

Declares the decorated method as an abimethod that is called when the first transaction arg matches the method selector

## Type Parameters

• **TContract** _extends_ [`Contract`](/reference/classes/contract)

the type of the contract this method is a part of

## Parameters

### config?

[`AbiMethodConfig`](/reference/type-aliases/abimethodconfig)\<`TContract`\>

The config for this abi method

## Returns

`Function`

### Type Parameters

• **TArgs** _extends_ `any`[]

• **TReturn**

### Parameters

#### target

(`this`, ...`args`) => `TReturn`

#### ctx

[`ClassMethodDecoratorContext`](/reference/-internal-/interfaces/classmethoddecoratorcontext)\<`TContract`\>

### Returns

`Function`

#### Parameters

##### this

`TContract`

##### args

...`TArgs`

#### Returns

`TReturn`
