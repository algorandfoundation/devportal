---
editUrl: false
next: false
prev: false
title: "Contract"
---

Defined in: [arc4/index.ts:14](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L14)

The base type for all ARC4 contracts in Algorand TypeScript

## Extends

- [`BaseContract`](/docs/algorand-typescript/typescript/latest/api/index/classes/basecontract/)

## Constructors

### Constructor

> **new Contract**(): `Contract`

#### Returns

`Contract`

#### Inherited from

[`BaseContract`](/docs/algorand-typescript/typescript/latest/api/index/classes/basecontract/).[`constructor`](/docs/algorand-typescript/typescript/latest/api/index/classes/basecontract/#constructor)

## Methods

### approvalProgram()

> **approvalProgram**(): `boolean`

Defined in: [arc4/index.ts:19](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L19)

Default implementation of an ARC4 approval program, routes transactions to ABI or bare methods based on application
args and on completion actions

#### Returns

`boolean`

#### Overrides

[`BaseContract`](/docs/algorand-typescript/typescript/latest/api/index/classes/basecontract/).[`approvalProgram`](/docs/algorand-typescript/typescript/latest/api/index/classes/basecontract/#approvalprogram)

***

### clearStateProgram()

> **clearStateProgram**(): `boolean` \| [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

Defined in: [base-contract.ts:18](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L18)

The program to be run when the On Completion Action is == ClearState (3)

#### Returns

`boolean` \| [`uint64`](/docs/algorand-typescript/typescript/latest/api/index/type-aliases/uint64/)

#### Inherited from

[`BaseContract`](/docs/algorand-typescript/typescript/latest/api/index/classes/basecontract/).[`clearStateProgram`](/docs/algorand-typescript/typescript/latest/api/index/classes/basecontract/#clearstateprogram)
