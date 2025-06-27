---
title: 'contract'
---

[**@algorandfoundation/algorand-typescript**](/readme)

---

[@algorandfoundation/algorand-typescript](/readme) / [index](/reference/readme) / contract

# Function: contract()

> **contract**(`options`): \<`T`\>(`contract`, `ctx`) => `never`

Defined in: [packages/algo-ts/src/base-contract.ts:86](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L86)

The contract decorator can be used to specify additional configuration options for a smart contract

## Parameters

### options

[`ContractOptions`](/reference/-internal-/type-aliases/contractoptions)

An object containing the configuration options

## Returns

`Function`

### Type Parameters

• **T** _extends_ [`ConstructorFor`](/reference/-internal-/type-aliases/constructorfor)\<[`BaseContract`](/reference/classes/basecontract)\>

### Parameters

#### contract

`T`

#### ctx

[`ClassDecoratorContext`](/reference/-internal-/interfaces/classdecoratorcontext)

### Returns

`never`
