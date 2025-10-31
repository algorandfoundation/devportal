---
title: BaseContract
type: class
generated: 2025-10-31T00:00:00.000Z
repo: puya-ts
---

[**Algorand TypeScript**](docs/_md/README)

---

[Algorand TypeScript](docs/_md/modules) / [index](/reference/algorand-typescript/api/index/readme/) / BaseContract

Defined in: [base-contract.ts:9](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L9)

The base type for all Algorand TypeScript contracts

## Extended by

- [`Contract`](/reference/algorand-typescript/api/arc4/classes/contract/)

## Constructors

### Constructor

> **new BaseContract**(): `BaseContract`

#### Returns

`BaseContract`

## Methods

### approvalProgram()

> `abstract` **approvalProgram**(): `boolean` \| [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [base-contract.ts:13](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L13)

The program to be run when the On Completion Action is != ClearState (3)

#### Returns

`boolean` \| [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

---

### clearStateProgram()

> **clearStateProgram**(): `boolean` \| [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)

Defined in: [base-contract.ts:18](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L18)

The program to be run when the On Completion Action is == ClearState (3)

#### Returns

`boolean` \| [`uint64`](/reference/algorand-typescript/api/index/type-aliases/uint64/)
