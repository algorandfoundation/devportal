---
title: 'baremethod'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [arc4](/reference/readme) / baremethod

# Function: baremethod()

> **baremethod**\<`TContract`\>(`config`?): \<`TArgs`, `TReturn`\>(`target`, `ctx`) => (`this`, ...`args`) => `TReturn`

Defined in: [packages/algo-ts/src/arc4/index.ts:153](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L153)

Declares the decorated method as a baremethod that can only be called with no transaction args

## Type Parameters

• **TContract** _extends_ [`Contract`](/reference/classes/contract)

the type of the contract this method is a part of

## Parameters

### config?

[`BareMethodConfig`](/reference/type-aliases/baremethodconfig)

The config for this bare method

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
