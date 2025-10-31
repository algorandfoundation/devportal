---
title: contract
type: function
version: 1.0.0
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](/reference/algorand-typescript/api/readme/)

---

[Algorand TypeScript](docs/_md/modules) / [index](docs/_md/index/README) / contract

> **contract**(`options`): \<`T`\>(`contract`, `ctx`) => `never`

Defined in: [base-contract.ts:86](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L86)

The contract decorator can be used to specify additional configuration options for a smart contract

## Parameters

### options

[`ContractOptions`](/reference/algorand-typescript/api/index/-internal-/type-aliases/contractoptions/)

An object containing the configuration options

## Returns

> \<`T`\>(`contract`, `ctx`): `never`

### Type Parameters

#### T

`T` _extends_ [`ConstructorFor`](/reference/algorand-typescript/api/index/-internal-/type-aliases/constructorfor/)\<[`BaseContract`](/reference/algorand-typescript/api/index/classes/basecontract/)\>

### Parameters

#### contract

`T`

#### ctx

`ClassDecoratorContext`

### Returns

`never`
